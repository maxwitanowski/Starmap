import fs from 'node:fs';
function patch(file, pairs) { let s = fs.readFileSync(file, 'utf8'); for (const [a, b] of pairs) { if (!s.includes(a)) { console.log('MISSING in', file, ':', a.slice(0, 100)); continue; } s = s.split(a).join(b); } fs.writeFileSync(file, s); }

patch('src/layers/NebulaVolumes.js', [
  [`const N_NEB = 3200, N_CL = 6000, N_NEB_SCHEM = 1400, N_CL_SCHEM = 500;`, `const N_NEB = 7000, N_CL = 6000, N_NEB_SCHEM = 2200, N_CL_SCHEM = 500;`],
  // vertex: gas alpha depends on blob size (big soft blobs faint, small ones brighter); allow bigger blobs before fading
  [`    fade *= 1.0 - smoothstep(180.0, 420.0, px);           // no single particle may swallow the view
    if (kind >= 2.0) {
      float b = kind - 2.0;
      vAlpha = fade * (0.55 + 0.45 * b);
      gl_PointSize = (1.6 + 4.5 * b * b) * uPixelRatio * clamp(uFovScale / 1000.0, 0.7, 1.6);
    } else {
      vAlpha = fade * (kind > 0.5 ? clamp(px / 2.0, 0.7, 1.0) * 0.8 : 0.3 * clamp(px / 4.0, 0.4, 1.0));
      gl_PointSize = clamp(px, kind > 0.5 ? 2.2 : 2.5, 420.0) * uPixelRatio;
    }
    vColor = color; vKind = kind;`, `    fade *= 1.0 - smoothstep(600.0, 1400.0, px);          // no single particle may swallow the view
    if (kind >= 2.0) {
      float b = kind - 2.0;
      vAlpha = fade * (0.55 + 0.45 * b);
      gl_PointSize = (1.6 + 4.5 * b * b) * uPixelRatio * clamp(uFovScale / 1000.0, 0.7, 1.6);
    } else if (kind > 0.5) {
      vAlpha = fade * clamp(px / 2.0, 0.7, 1.0) * 0.8;
      gl_PointSize = clamp(px, 2.2, 420.0) * uPixelRatio;
    } else {
      // gas: overlapping soft clouds; the bigger a blob is on screen the fainter it is, so many layers add up to smooth structure
      vAlpha = fade * 0.42 * clamp(px / 6.0, 0.35, 1.0) * clamp(90.0 / max(px, 1.0), 0.18, 1.0);
      gl_PointSize = clamp(px, 3.0, 1400.0) * uPixelRatio;
    }
    vSeed = fract(size * 0.000731 + kind * 0.37);
    vColor = color; vKind = kind;`],
  [`  varying vec3 vColor; varying float vAlpha; varying float vKind;
  #include <common>
  #include <logdepthbuf_pars_vertex>`, `  varying vec3 vColor; varying float vAlpha; varying float vKind; varying float vSeed;
  #include <common>
  #include <logdepthbuf_pars_vertex>`],
  // fragment: wispy noise-shaped clouds for gas
  [`  varying vec3 vColor; varying float vAlpha; varying float vKind;
  #include <logdepthbuf_pars_fragment>
  void main() {
    #include <logdepthbuf_fragment>
    vec2 c = gl_PointCoord - 0.5; float r2 = dot(c, c) * 4.0;
    float a = (vKind >= 2.0 ? exp(-r2 * 9.0) + 0.25 * exp(-r2 * 2.5) : vKind > 0.5 ? exp(-r2 * 6.0) : exp(-r2 * 2.2) * (1.0 - r2 * 0.6)) * vAlpha;
    vec3 col = vKind >= 2.0 ? mix(vColor, vec3(1.0), exp(-r2 * 9.0) * 0.6) : vColor;
    gl_FragColor = vec4(col * a, a);
  }`, `  varying vec3 vColor; varying float vAlpha; varying float vKind; varying float vSeed;
  #include <logdepthbuf_pars_fragment>
  float h2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float n2(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h2(i), h2(i + vec2(1, 0)), f.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), f.x), f.y); }
  void main() {
    #include <logdepthbuf_fragment>
    vec2 c = gl_PointCoord - 0.5; float r2 = dot(c, c) * 4.0;
    float a; vec3 col = vColor;
    if (vKind >= 2.0) { a = exp(-r2 * 9.0) + 0.25 * exp(-r2 * 2.5); col = mix(vColor, vec3(1.0), exp(-r2 * 9.0) * 0.6); }
    else if (vKind > 0.5) a = exp(-r2 * 6.0);
    else {
      // wispy cloud: radial falloff broken up by two octaves of noise, different per particle
      vec2 p = gl_PointCoord * 3.0 + vSeed * 17.0;
      float n = 0.65 * n2(p) + 0.35 * n2(p * 2.3 + 5.0);
      float edge = smoothstep(1.0, 0.15, r2);
      a = edge * exp(-r2 * 1.6) * (0.35 + 0.9 * n);
    }
    a *= vAlpha;
    gl_FragColor = vec4(col * a, a);
  }`],
  // build: multi-scale gas blobs
  [`      const glow = isCluster && n % 9 === 0;
      this.size[j] = glow ? halfObj * (0.05 + 0.06 * rnd()) : isCluster ? half * 0.008 * (0.6 + rnd()) : half * (0.018 + 0.03 * rnd());
      this.kind[j] = isCluster && !glow ? 1 : 0;`, `      const glow = isCluster && n % 9 === 0;
      let sz;
      if (glow) sz = halfObj * (0.05 + 0.06 * rnd());
      else if (isCluster) sz = half * 0.008 * (0.6 + rnd());
      else { const t = rnd(); sz = halfObj * (t < 0.25 ? 0.10 + 0.14 * rnd() : t < 0.65 ? 0.04 + 0.06 * rnd() : 0.012 + 0.03 * rnd()); } // large, medium, fine cloudlets
      this.size[j] = sz;
      this.kind[j] = isCluster && !glow ? 1 : 0;`],
]);
console.log('patched');
