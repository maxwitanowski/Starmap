import fs from 'node:fs';
function patch(file, pairs) { let s = fs.readFileSync(file, 'utf8'); for (const [a, b] of pairs) { if (!s.includes(a)) { console.log('MISSING in', file, ':', a.slice(0, 120)); continue; } s = s.split(a).join(b); } fs.writeFileSync(file, s); }
patch('src/layers/Quasars.js', [
  [`import { fmtRA, fmtDec } from './Stars.js';`, `import { fmtRA, fmtDec } from './Stars.js';
import { HorizonModel } from './BlackHoles.js';`],
  [`  uniform vec3 uCam; uniform float uPixelRatio; uniform float uDim; uniform float uFovScale;`, `  uniform vec3 uCam; uniform float uPixelRatio; uniform float uDim; uniform float uFovScale; uniform vec3 uHide;`],
  [`    gl_Position = projectionMatrix * modelViewMatrix * vec4(rel, 1.0);
    gl_PointSize = s;`, `    gl_Position = projectionMatrix * modelViewMatrix * vec4(rel, 1.0);
    if (all(equal(position, uHide))) gl_Position = vec4(2.0, 2.0, 2.0, 1.0); // the focused quasar is drawn exactly by the close-range model
    gl_PointSize = s;`],
  [`uniforms: { uCam: { value: new THREE.Vector3() }, uPixelRatio: { value: 1 }, uDim: { value: 1 }, uFovScale: { value: 1000 } } });`, `uniforms: { uCam: { value: new THREE.Vector3() }, uPixelRatio: { value: 1 }, uDim: { value: 1 }, uFovScale: { value: 1000 }, uHide: { value: new THREE.Vector3(NaN, NaN, NaN) } } });
    this.pos32 = pos32;
    // Float32 positions are ~1e15 km off at 2 Gly, so the focused quasar is drawn by an exact close-range model instead
    this.model = new HorizonModel(universe.scene); this.modelIndex = -1;`],
  [`    const dSunMpc = Math.hypot(cam[0], cam[1], cam[2]) / KM_PER_MPC;
    u.uDim.value = 0.22 + 0.78 * THREE.MathUtils.smoothstep(dSunMpc, 1, 60);`, `    const dSunMpc = Math.hypot(cam[0], cam[1], cam[2]) / KM_PER_MPC;
    u.uDim.value = 0.22 + 0.78 * THREE.MathUtils.smoothstep(dSunMpc, 1, 60);
    // exact rendering of the focused / selected quasar (Float64 on the CPU), as a black hole with an accretion disc
    this.model.hide(); u.uHide.value.set(NaN, NaN, NaN);
    const rig = ctx.rig; const ref = rig.focus?.ref?.layer === 'quasars' ? rig.focus.ref : this.u.selection?.ref?.layer === 'quasars' ? this.u.selection.ref : null;
    if (ref) {
      const i = ref.index; const x = this.pos[3 * i] - cam[0], y = this.pos[3 * i + 1] - cam[1], z = this.pos[3 * i + 2] - cam[2];
      const d = Math.sqrt(x * x + y * y + z * z); const rs = QUASAR_RS;
      if (rs * 12 / d * ctx.pxPerRad > 1.5) { this.model.show(x, y, z, rs, i); u.uHide.value.set(this.pos32[3 * i], this.pos32[3 * i + 1], this.pos32[3 * i + 2]); }
    }`],
  [`const C_H0_MPC = 299792.458 / 70, T_H0_GYR = 977.8 / 70; // c/H0 and 1/H0`, `const C_H0_MPC = 299792.458 / 70, T_H0_GYR = 977.8 / 70; // c/H0 and 1/H0
const QUASAR_RS = 2.95e9; // no individual masses in Milliquas: draw a nominal 10^9 solar-mass horizon (Schwarzschild radius 2.95e9 km)`],
  [`['Cosmology', 'flat ΛCDM, H₀ = 70 km/s/Mpc, Ωm = 0.3 (comoving position)']];`, `['Cosmology', 'flat ΛCDM, H₀ = 70 km/s/Mpc, Ωm = 0.3 (comoving position)'], ['Black hole', 'mass not in this catalogue — up close it is drawn with a nominal 1-billion-solar-mass horizon (radius 3 billion km) and accretion disc']];`],
  [`radius: 3e10, rows,`, `radius: QUASAR_RS * 12, rows,`],
]);
console.log('patched quasars');
