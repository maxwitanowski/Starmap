import * as THREE from 'three';

const LOG_V = `
#include <common>
#include <logdepthbuf_pars_vertex>
`;
const LOG_V_MAIN = `
#include <logdepthbuf_vertex>
`;
const LOG_F = `
#include <logdepthbuf_pars_fragment>
`;
const LOG_F_MAIN = `
#include <logdepthbuf_fragment>
`;

// Lit planet surface. Camera is always at the origin, so modelMatrix * position is camera-relative.
export function planetMaterial(opts = {}) {
  return new THREE.ShaderMaterial({
    uniforms: {
      map: { value: null }, hasMap: { value: 0 }, nightMap: { value: null }, hasNight: { value: 0 },
      baseColor: { value: new THREE.Color(opts.color || '#888') }, sunPos: { value: new THREE.Vector3() },
      ambient: { value: opts.ambient ?? 0.02 }, emissive: { value: opts.emissive ?? 0 }, shadowCenter: { value: new THREE.Vector3() }, shadowRadius: { value: 0 }, specular: { value: opts.specular ? 1 : 0 }, bump: { value: opts.bump ?? 0.6 },
      ringInner: { value: 0 }, ringOuter: { value: 0 }, ringNormal: { value: new THREE.Vector3(0, 1, 0) }, ringOpacity: { value: 0 },
    },
    vertexShader: /* glsl */`
      varying vec3 vNormal; varying vec3 vWorld; varying vec2 vUv;
      ${LOG_V}
      void main() {
        vUv = uv;
        vNormal = normalize(mat3(modelMatrix) * normal);
        vec4 w = modelMatrix * vec4(position, 1.0); vWorld = w.xyz;
        gl_Position = projectionMatrix * viewMatrix * w;
        ${LOG_V_MAIN}
      }`,
    fragmentShader: /* glsl */`
      uniform sampler2D map; uniform float hasMap; uniform sampler2D nightMap; uniform float hasNight; uniform vec3 baseColor; uniform vec3 sunPos; uniform float ambient; uniform float emissive; uniform float specular; uniform float bump;
      uniform float ringInner; uniform float ringOuter; uniform vec3 ringNormal; uniform float ringOpacity; uniform vec3 shadowCenter;
      varying vec3 vNormal; varying vec3 vWorld; varying vec2 vUv;
      ${LOG_F}
      void main() {
        ${LOG_F_MAIN}
        vec3 N = normalize(vNormal);
        vec3 L = normalize(sunPos - vWorld);
        float ndl = dot(N, L);
        float lit = smoothstep(-0.08, 0.12, ndl) * max(ndl, 0.0) * 0.9 + smoothstep(-0.08, 0.12, ndl) * 0.1;
        vec3 albedo = hasMap > 0.5 ? texture2D(map, vUv).rgb : baseColor;
        if (hasMap > 0.5 && bump > 0.0) {
          // cheap relief: shade by the luminance gradient of the texture along the light direction
          vec2 px = vec2(1.0 / 4096.0, 1.0 / 2048.0);
          float lC = dot(albedo, vec3(0.3, 0.5, 0.2));
          float lU = dot(texture2D(map, vUv + vec2(px.x, 0.0)).rgb, vec3(0.3, 0.5, 0.2));
          float lV = dot(texture2D(map, vUv + vec2(0.0, px.y)).rgb, vec3(0.3, 0.5, 0.2));
          vec3 tangent = normalize(cross(vec3(0.0, 1.0, 0.0), N)); vec3 bitangent = cross(N, tangent);
          float slope = (lU - lC) * dot(L, tangent) + (lV - lC) * dot(L, bitangent);
          lit *= clamp(1.0 + slope * 6.0 * bump, 0.6, 1.4);
        }
        // ring shadow on the planet: intersect the sun ray from this point with the ring plane
        if (ringOpacity > 0.0) {
          vec3 p = vWorld - shadowCenter; // relative to planet centre
          float denom = dot(L, ringNormal);
          if (abs(denom) > 1e-4) {
            float t = -dot(p, ringNormal) / denom;
            if (t > 0.0) { vec3 hit = p + L * t; float r = length(hit); if (r > ringInner && r < ringOuter) lit *= 1.0 - ringOpacity * 0.85; }
          }
        }
        vec3 col = albedo * (lit + ambient);
        if (specular > 0.5 && hasMap > 0.5) {
          // oceans: blue-dominant, dark pixels reflect the Sun
          float water = smoothstep(0.02, 0.12, albedo.b - albedo.r) * (1.0 - smoothstep(0.35, 0.6, albedo.g));
          vec3 V = normalize(-vWorld); vec3 H = normalize(L + V);
          float spec = pow(max(dot(N, H), 0.0), 90.0) * water * step(0.0, ndl);
          col += vec3(1.0, 0.95, 0.85) * spec * 0.9;
        }
        if (hasNight > 0.5) { vec3 night = texture2D(nightMap, vUv).rgb; col += night * (1.0 - smoothstep(-0.15, 0.05, ndl)) * 3.0; }
        col = mix(col, albedo, emissive);
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
}

// Soft atmospheric limb glow (front faces of a slightly larger sphere), additive.
export function atmosphereMaterial(color, strength = 1) {
  return new THREE.ShaderMaterial({
    uniforms: { color: { value: new THREE.Color(color) }, sunPos: { value: new THREE.Vector3() }, strength: { value: strength } },
    vertexShader: /* glsl */`
      varying vec3 vNormal; varying vec3 vWorld;
      ${LOG_V}
      void main() { vNormal = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position, 1.0); vWorld = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; ${LOG_V_MAIN} }`,
    fragmentShader: /* glsl */`
      uniform vec3 color; uniform vec3 sunPos; uniform float strength; varying vec3 vNormal; varying vec3 vWorld;
      ${LOG_F}
      void main() { ${LOG_F_MAIN}
        vec3 N = normalize(vNormal); vec3 V = normalize(-vWorld); vec3 L = normalize(sunPos - vWorld);
        float rim = pow(1.0 - abs(dot(N, V)), 3.5);
        float lit = smoothstep(-0.3, 0.3, dot(N, L));
        float a = rim * (0.15 + 0.85 * lit) * strength;
        gl_FragColor = vec4(color * a, a);
      }`,
    transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.FrontSide,
  });
}

// Cloud layer: greyscale texture used as alpha, lit by the Sun.
export function cloudMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { map: { value: null }, sunPos: { value: new THREE.Vector3() } },
    vertexShader: /* glsl */`
      varying vec3 vNormal; varying vec3 vWorld; varying vec2 vUv; ${LOG_V}
      void main() { vUv = uv; vNormal = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position, 1.0); vWorld = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; ${LOG_V_MAIN} }`,
    fragmentShader: /* glsl */`
      uniform sampler2D map; uniform vec3 sunPos; varying vec3 vNormal; varying vec3 vWorld; varying vec2 vUv; ${LOG_F}
      void main() { ${LOG_F_MAIN}
        float c = texture2D(map, vUv).r; vec3 N = normalize(vNormal); vec3 L = normalize(sunPos - vWorld);
        float lit = smoothstep(-0.1, 0.15, dot(N, L)) * max(dot(N, L), 0.0) * 0.9 + 0.02;
        gl_FragColor = vec4(vec3(lit), c * 0.95);
      }`,
    transparent: true, depthWrite: false,
  });
}

// Planetary ring: radial texture lookup, lit, with the planet's shadow.
export function ringMaterial(inner, outer, color, opacity, texture) {
  return new THREE.ShaderMaterial({
    uniforms: { map: { value: texture || null }, hasMap: { value: texture ? 1 : 0 }, inner: { value: inner }, outer: { value: outer }, color: { value: new THREE.Color(color) }, opacity: { value: opacity }, sunPos: { value: new THREE.Vector3() }, center: { value: new THREE.Vector3() }, planetRadius: { value: 1 }, normal: { value: new THREE.Vector3(0, 1, 0) } },
    vertexShader: /* glsl */`
      varying vec3 vWorld; varying vec3 vLocal; ${LOG_V}
      void main() { vLocal = position; vec4 w = modelMatrix * vec4(position, 1.0); vWorld = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; ${LOG_V_MAIN} }`,
    fragmentShader: /* glsl */`
      uniform sampler2D map; uniform float hasMap; uniform float inner; uniform float outer; uniform vec3 color; uniform float opacity; uniform vec3 sunPos; uniform vec3 center; uniform float planetRadius; uniform vec3 normal;
      varying vec3 vWorld; varying vec3 vLocal; ${LOG_F}
      void main() { ${LOG_F_MAIN}
        float r = length(vLocal.xy); float t = clamp((r - inner) / (outer - inner), 0.0, 1.0);
        vec4 tex = hasMap > 0.5 ? texture2D(map, vec2(t, 0.5)) : vec4(color, 1.0);
        float a = (hasMap > 0.5 ? tex.a * max(tex.r, 0.15) : 1.0) * opacity;
        vec3 L = normalize(sunPos - vWorld);
        vec3 V = normalize(-vWorld);
        float sunSide = dot(normal, L); float camSide = dot(normal, V);
        float lit = (sign(sunSide) == sign(camSide)) ? (0.55 + 0.45 * abs(sunSide)) : 0.25;
        // planet shadow
        vec3 p = vWorld - center; float along = dot(p, L);
        if (along < 0.0) { float perp = length(p - L * along); lit *= smoothstep(planetRadius * 0.97, planetRadius * 1.03, perp); }
        vec3 col = (hasMap > 0.5 ? tex.rgb : color) * lit;
        gl_FragColor = vec4(col, a);
      }`,
    transparent: true, side: THREE.DoubleSide, depthWrite: false,
  });
}

// Sun surface: unlit texture with slight limb darkening
export function sunMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { map: { value: null }, hasMap: { value: 0 }, color: { value: new THREE.Color('#fff2cc') } },
    vertexShader: /* glsl */`
      varying vec3 vNormal; varying vec3 vWorld; varying vec2 vUv; ${LOG_V}
      void main() { vUv = uv; vNormal = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position, 1.0); vWorld = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; ${LOG_V_MAIN} }`,
    fragmentShader: /* glsl */`
      uniform sampler2D map; uniform float hasMap; uniform vec3 color; varying vec3 vNormal; varying vec3 vWorld; varying vec2 vUv; ${LOG_F}
      void main() { ${LOG_F_MAIN}
        vec3 N = normalize(vNormal); vec3 V = normalize(-vWorld);
        float limb = 0.55 + 0.45 * pow(max(dot(N, V), 0.0), 0.6);
        vec3 c = hasMap > 0.5 ? texture2D(map, vUv).rgb * 1.15 : color;
        gl_FragColor = vec4(hasMap > 0.5 ? c * limb * 1.1 : c * (0.75 + 0.35 * limb), 1.0);
      }`,
  });
}

// Marker points: fixed pixel size, per-vertex color and alpha.
export function markerMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { uPixelRatio: { value: 1 } },
    vertexShader: /* glsl */`
      attribute vec3 color; attribute float alpha; attribute float size; varying vec3 vColor; varying float vAlpha; uniform float uPixelRatio; ${LOG_V}
      void main() { vColor = color; vAlpha = alpha; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = size * uPixelRatio; if (alpha <= 0.001) gl_Position = vec4(2.0,2.0,2.0,1.0); ${LOG_V_MAIN} }`,
    fragmentShader: /* glsl */`
      varying vec3 vColor; varying float vAlpha; ${LOG_F}
      void main() { ${LOG_F_MAIN}
        vec2 c = gl_PointCoord - 0.5; float r = length(c) * 2.0;
        float ring = smoothstep(1.0, 0.75, r) * (1.0 - smoothstep(0.55, 0.7, r) * 0.65);
        gl_FragColor = vec4(vColor, ring * vAlpha);
      }`,
    transparent: true, depthWrite: false, depthTest: true,
  });
}

// Exoplanet appearance from measured properties (no exoplanet has a real surface map).
// type: 0 rocky, 1 temperate rocky (possible oceans), 2 icy, 3 Neptune-like, 4 gas giant, 5 hot Jupiter / lava world
export function exoplanetMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { type: { value: 0 }, teq: { value: 300 }, seed: { value: 1 }, starPos: { value: new THREE.Vector3() }, starColor: { value: new THREE.Color(1, 1, 1) }, locked: { value: 0 }, spin: { value: 0 }, hotspot: { value: 0 }, cloudSide: { value: 0 } },
    vertexShader: /* glsl */`
      varying vec3 vNormal; varying vec3 vWorld; varying vec3 vLocal; varying vec3 vUp;
      #include <common>
      #include <logdepthbuf_pars_vertex>
      void main() { vLocal = position; vNormal = normalize(mat3(modelMatrix) * normal); vUp = normalize(mat3(modelMatrix) * vec3(0.0, 1.0, 0.0)); vec4 w = modelMatrix * vec4(position, 1.0); vWorld = w.xyz; gl_Position = projectionMatrix * viewMatrix * w;
      #include <logdepthbuf_vertex>
      }`,
    fragmentShader: /* glsl */`
      uniform float type; uniform float teq; uniform float seed; uniform vec3 starPos; uniform vec3 starColor; uniform float locked; uniform float spin; uniform float hotspot; uniform float cloudSide;
      varying vec3 vNormal; varying vec3 vWorld; varying vec3 vLocal; varying vec3 vUp;
      #include <logdepthbuf_pars_fragment>
      float hash(vec3 p) { p = fract(p * 0.3183099 + vec3(0.1, 0.2, 0.3) + seed); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
      float noise(vec3 x) { vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x), mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
                   mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x), mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z); }
      float fbm(vec3 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++) { s += a * noise(p); p *= 2.1; a *= 0.5; } return s; }
      vec3 blackbody(float T) { float t = clamp(T, 800.0, 6000.0) / 1000.0; return vec3(clamp(1.6 * t - 0.6, 0.0, 1.0), clamp(0.9 * t - 0.9, 0.0, 1.0), clamp(0.7 * t - 1.6, 0.0, 1.0)); }
      void main() {
        #include <logdepthbuf_fragment>
        vec3 N = normalize(vNormal); vec3 L = normalize(starPos - vWorld);
        vec3 p = normalize(vLocal);
        float lat = p.y; float lon = atan(p.z, p.x) + spin;
        vec3 q = vec3(cos(lon), lat * 2.0, sin(lon)) * 3.0;
        vec3 albedo;
        if (type >= 3.5) {
          // giants: latitudinal bands with turbulence
          float band = fbm(vec3(lat * 6.0 + fbm(q) * 0.6, seed, 0.0));
          vec3 warm = type > 4.5 ? vec3(0.45, 0.2, 0.1) : vec3(0.85, 0.72, 0.5);
          vec3 cool = type > 4.5 ? vec3(0.2, 0.08, 0.05) : vec3(0.6, 0.45, 0.3);
          albedo = mix(cool, warm, band); if (teq < 150.0) albedo = mix(albedo, vec3(0.55, 0.7, 0.95), 0.6);
        } else if (type >= 2.5) {
          float band = fbm(vec3(lat * 4.0 + fbm(q) * 0.4, seed + 3.0, 0.0));
          albedo = mix(vec3(0.15, 0.3, 0.75), vec3(0.45, 0.65, 0.95), band);
        } else if (type >= 1.5) {
          float n = fbm(q * 1.5); albedo = mix(vec3(0.75, 0.8, 0.88), vec3(0.95, 0.97, 1.0), n);
        } else if (type >= 0.5) {
          float n = fbm(q * 1.2 + seed); float land = smoothstep(0.48, 0.55, n);
          vec3 ocean = vec3(0.05, 0.2, 0.45), soil = mix(vec3(0.25, 0.4, 0.15), vec3(0.5, 0.42, 0.3), fbm(q * 4.0));
          albedo = mix(ocean, soil, land);
          float cloud = smoothstep(0.55, 0.7, fbm(q * 2.5 + vec3(seed, 1.0, 2.0))); albedo = mix(albedo, vec3(1.0), cloud * 0.8);
        } else {
          float n = fbm(q * 2.0); float crater = smoothstep(0.62, 0.7, fbm(q * 6.0 + seed));
          vec3 rock = mix(vec3(0.32, 0.28, 0.25), vec3(0.55, 0.45, 0.38), n);
          albedo = rock * (1.0 - 0.3 * crater);
          if (teq > 900.0) albedo = mix(albedo, vec3(0.3, 0.15, 0.1), 0.5); // scorched
        }
        float ndl = dot(N, L);
        float lit = smoothstep(-0.08, 0.15, ndl) * max(ndl, 0.0) * 0.95 + 0.02;
        vec3 col = albedo * starColor * lit;
        // thermal emission: hot planets glow on their own (tidally locked ones mostly on the star-facing side)
        if (teq > 700.0) {
          float glow = smoothstep(700.0, 2500.0, teq);
          // measured hotspot offset: rotate the star direction about the pole by the offset angle
          vec3 up = vUp;
          vec3 Lr = normalize(L - up * dot(L, up)); vec3 Lt = cross(up, Lr);
          vec3 Lh = normalize(Lr * cos(hotspot) + Lt * sin(hotspot)) ;
          float ndh = dot(N, Lh);
          float side = locked > 0.5 ? smoothstep(-0.4, 0.4, ndh) * 0.9 + 0.1 : 0.7;
          col += blackbody(teq) * glow * side * 0.9;
        }
        if (cloudSide != 0.0) {
          // measured cloud hemisphere: bright reflective clouds on one side of the dayside
          vec3 up = vUp; vec3 Lt = cross(up, normalize(L - up * dot(L, up)));
          float west = dot(N, Lt) * cloudSide;
          float cl = smoothstep(-0.1, 0.5, west) * smoothstep(-0.1, 0.3, ndl);
          col = mix(col, starColor * vec3(0.9), cl * 0.75);
        }
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
}
