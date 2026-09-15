import fs from 'node:fs';
function patch(file, pairs) { let s = fs.readFileSync(file, 'utf8'); for (const [a, b] of pairs) { if (!s.includes(a)) { console.log('MISSING in', file, ':', a.slice(0, 120)); continue; } s = s.split(a).join(b); } fs.writeFileSync(file, s); }
patch('src/layers/BlackHoles.js', [
  [`export class BlackHoleLayer {`, `// Close-range black hole: event-horizon sphere, photon ring, accretion disc and a faint glow, all scaled by the Schwarzschild
// radius. Shared by the black-hole layer and the quasar layer (positions handed in exactly, relative to the camera).
export class HorizonModel {
  constructor(scene) {
    this.group = new THREE.Group(); this.group.visible = false; scene.add(this.group);
    this.horizon = new THREE.Mesh(new THREE.SphereGeometry(1, 48, 32), new THREE.MeshBasicMaterial({ color: 0x000000 }));
    this.photon = new THREE.Mesh(new THREE.TorusGeometry(1, 0.03, 8, 96), new THREE.MeshBasicMaterial({ color: 0xffe0b0, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false }));
    this.discMat = new THREE.ShaderMaterial({ vertexShader: DISC_VERT, fragmentShader: DISC_FRAG, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, uniforms: { uTime: { value: 0 }, uInner: { value: 0.25 } } });
    this.disc = new THREE.Mesh(new THREE.PlaneGeometry(2, 2, 1, 1), this.discMat);
    this.glow = new THREE.Mesh(new THREE.SphereGeometry(1, 24, 16), new THREE.MeshBasicMaterial({ color: 0xffa050, transparent: true, opacity: 0.08, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.BackSide }));
    this.group.add(this.horizon, this.photon, this.disc, this.glow);
    this.seed = -1;
  }
  hide() { this.group.visible = false; }
  show(x, y, z, rs, seed) {
    this.group.position.set(x, y, z); this.group.visible = true;
    this.horizon.scale.setScalar(rs);
    this.photon.scale.setScalar(rs * 2.6); // photon ring: apparent radius √27/2 ≈ 2.6 Rs
    this.disc.scale.setScalar(rs * 12); this.discMat.uniforms.uInner.value = 3 / 12; this.discMat.uniforms.uTime.value = performance.now() * 1e-3;
    this.glow.scale.setScalar(rs * 4);
    // the disc plane is unknown for most objects: a fixed per-object tilt so it reads as a disc
    if (this.seed !== seed) { this.seed = seed; this.disc.rotation.set(1.22 + 0.4 * ((seed * 7) % 5) / 5, 0, (seed * 13 % 7) / 7); }
    this.photon.lookAt(-x, -y, -z); // the photon ring always faces the viewer (it is a lensing effect)
  }
}

export class BlackHoleLayer {`],
  [`    // close-range model (one, for the nearest black hole)
    this.group = new THREE.Group(); this.group.visible = false; universe.scene.add(this.group);
    this.horizon = new THREE.Mesh(new THREE.SphereGeometry(1, 48, 32), new THREE.MeshBasicMaterial({ color: 0x000000 }));
    this.photon = new THREE.Mesh(new THREE.TorusGeometry(1, 0.03, 8, 96), new THREE.MeshBasicMaterial({ color: 0xffe0b0, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false }));
    this.discMat = new THREE.ShaderMaterial({ vertexShader: DISC_VERT, fragmentShader: DISC_FRAG, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, uniforms: { uTime: { value: 0 }, uInner: { value: 0.25 } } });
    this.disc = new THREE.Mesh(new THREE.PlaneGeometry(2, 2, 1, 1), this.discMat);
    this.glow = new THREE.Mesh(new THREE.SphereGeometry(1, 24, 16), new THREE.MeshBasicMaterial({ color: 0xffa050, transparent: true, opacity: 0.08, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.BackSide }));
    this.group.add(this.horizon, this.photon, this.disc, this.glow);
    this.modelIndex = -1;`, `    // close-range model (one, for the nearest black hole)
    this.model = new HorizonModel(universe.scene);
    this.modelIndex = -1;`],
  [`    this.points.visible = this.visible; this.group.visible = false;`, `    this.points.visible = this.visible; this.model.hide();`],
  [`      this.group.position.set(x, y, z); this.group.visible = true;
      this.horizon.scale.setScalar(rs);
      this.photon.scale.setScalar(rs * 2.6); // photon ring: apparent radius √27/2 ≈ 2.6 Rs
      this.disc.scale.setScalar(rs * 12); this.discMat.uniforms.uInner.value = 3 / 12; this.discMat.uniforms.uTime.value = performance.now() * 1e-3;
      this.glow.scale.setScalar(rs * 4);
      // the disc lies in the galaxy/orbital plane — unknown for most: tilt it a fixed 20° from the line of sight so it reads as a disc
      if (this.modelIndex !== nearest) { this.modelIndex = nearest; this.disc.rotation.set(1.22 + 0.4 * ((nearest * 7) % 5) / 5, 0, (nearest * 13 % 7) / 7); this.photon.rotation.copy(this.disc.rotation); this.photon.lookAt(0, 0, 0); }
      this.photon.lookAt(-x, -y, -z); // the photon ring always faces the viewer (it is a lensing effect)`, `      this.modelIndex = nearest; this.model.show(x, y, z, rs, nearest);`],
]);
console.log('patched horizon');
