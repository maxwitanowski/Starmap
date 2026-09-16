(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`attached`,t=1e3,n=1001,r=1002,i=1003,a=1004,o=1005,s=1006,c=1007,l=1008,u=1009,d=1010,f=1011,p=1012,m=1013,h=1014,g=1015,_=1016,v=1017,y=1018,b=1020,x=35902,S=35899,C=1021,w=1022,T=1023,E=1026,D=1027,O=1028,ee=1029,k=1030,te=1031,A=1033,j=33776,M=33777,ne=33778,N=33779,re=35840,P=35841,ie=35842,ae=35843,F=36196,I=37492,oe=37496,L=37488,se=37489,ce=37490,le=37491,ue=37808,de=37809,fe=37810,pe=37811,me=37812,R=37813,he=37814,ge=37815,_e=37816,ve=37817,ye=37818,be=37819,xe=37820,Se=37821,Ce=36492,we=36494,Te=36495,Ee=36283,De=36284,Oe=36285,z=36286,B=2300,ke=2301,Ae=2302,je=2303,V=2400,Me=2401,H=2402,U=2500,Ne=3200,Pe=`srgb`,Fe=`srgb-linear`,Ie=`linear`,Le=`srgb`,Re=7680,ze=35044,Be=2e3;function Ve(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function He(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ue(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function We(){let e=Ue(`canvas`);return e.style.display=`block`,e}var Ge={};function Ke(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function qe(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function W(...e){e=qe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function G(...e){e=qe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Je(...e){let t=e.join(` `);t in Ge||(Ge[t]=!0,W(...e))}function Ye(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Xe={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},Ze=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Qe=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),$e=1234567,et=Math.PI/180,tt=180/Math.PI;function nt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Qe[e&255]+Qe[e>>8&255]+Qe[e>>16&255]+Qe[e>>24&255]+`-`+Qe[t&255]+Qe[t>>8&255]+`-`+Qe[t>>16&15|64]+Qe[t>>24&255]+`-`+Qe[n&63|128]+Qe[n>>8&255]+`-`+Qe[n>>16&255]+Qe[n>>24&255]+Qe[r&255]+Qe[r>>8&255]+Qe[r>>16&255]+Qe[r>>24&255]).toLowerCase()}function K(e,t,n){return Math.max(t,Math.min(n,e))}function rt(e,t){return(e%t+t)%t}function it(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function at(e,t,n){return e===t?0:(n-e)/(t-e)}function ot(e,t,n){return(1-n)*e+n*t}function st(e,t,n,r){return ot(e,t,1-Math.exp(-n*r))}function ct(e,t=1){return t-Math.abs(rt(e,t*2)-t)}function lt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function ut(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function dt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function ft(e,t){return e+Math.random()*(t-e)}function pt(e){return e*(.5-Math.random())}function mt(e){e!==void 0&&($e=e);let t=$e+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ht(e){return e*et}function gt(e){return e*tt}function _t(e){return!(e&e-1)&&e!==0}function vt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function yt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function bt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:W(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function xt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function St(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Ct={DEG2RAD:et,RAD2DEG:tt,generateUUID:nt,clamp:K,euclideanModulo:rt,mapLinear:it,inverseLerp:at,lerp:ot,damp:st,pingpong:ct,smoothstep:lt,smootherstep:ut,randInt:dt,randFloat:ft,randFloatSpread:pt,seededRandom:mt,degToRad:ht,radToDeg:gt,isPowerOfTwo:_t,ceilPowerOfTwo:vt,floorPowerOfTwo:yt,setQuaternionFromProperEuler:bt,normalize:St,denormalize:xt},wt=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=K(this.x,e.x,t.x),this.y=K(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=K(this.x,e,t),this.y=K(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(K(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(K(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Tt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:W(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(K(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=K(this.x,e.x,t.x),this.y=K(this.y,e.y,t.y),this.z=K(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=K(this.x,e,t),this.y=K(this.y,e,t),this.z=K(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(K(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Et.copy(this).projectOnVector(e),this.sub(Et)}reflect(e){return this.sub(Et.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(K(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Et=new q,Dt=new Tt,Ot=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Je(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(kt.makeScale(e,t)),this}rotate(e){return Je(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(kt.makeRotation(-e)),this}translate(e,t){return Je(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(kt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},kt=new Ot,At=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jt=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mt(){let e={enabled:!0,workingColorSpace:Fe,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Pt(e.r),e.g=Pt(e.g),e.b=Pt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ft(e.r),e.g=Ft(e.g),e.b=Ft(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ie:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Je(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Je(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Fe]:{primaries:t,whitePoint:r,transfer:Ie,toXYZ:At,fromXYZ:jt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:t,whitePoint:r,transfer:Le,toXYZ:At,fromXYZ:jt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}}),e}var Nt=Mt();function Pt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ft(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var It,Lt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{It===void 0&&(It=Ue(`canvas`)),It.width=e.width,It.height=e.height;let t=It.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=It}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ue(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Pt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Pt(t[e]/255)*255):t[e]=Pt(t[e]);return{data:t,width:e.width,height:e.height}}return W(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Rt=0,zt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rt++}),this.uuid=nt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Bt(r[t].image)):e.push(Bt(r[t]))}else e=Bt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Bt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Lt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(W(`Texture: Unable to serialize Texture.`),{})}var Vt=0,Ht=new q,Ut=class e extends Ze{constructor(t=e.DEFAULT_IMAGE,r=e.DEFAULT_MAPPING,i=n,a=n,o=s,c=l,d=T,f=u,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vt++}),this.uuid=nt(),this.name=``,this.source=new zt(t),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ht).x}get height(){return this.source.getSize(Ht).y}get depth(){return this.source.getSize(Ht).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){W(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){W(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case t:e.x-=Math.floor(e.x);break;case n:e.x=e.x<0?0:1;break;case r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case t:e.y-=Math.floor(e.y);break;case n:e.y=e.y<0?0:1;break;case r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ut.DEFAULT_IMAGE=null,Ut.DEFAULT_MAPPING=300,Ut.DEFAULT_ANISOTROPY=1;var Wt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=K(this.x,e.x,t.x),this.y=K(this.y,e.y,t.y),this.z=K(this.z,e.z,t.z),this.w=K(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=K(this.x,e,t),this.y=K(this.y,e,t),this.z=K(this.z,e,t),this.w=K(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(K(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gt=class extends Ze{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:s,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t),this.textures=[];let r=new Ut({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:s,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new zt(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Kt=class extends Gt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},qt=class extends Ut{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Jt=class extends Ut{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Yt=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Xt.setFromMatrixColumn(e,0).length(),i=1/Xt.setFromMatrixColumn(e,1).length(),a=1/Xt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qt,e,$t)}lookAt(e,t,n){let r=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),en.crossVectors(n,nn),en.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),en.crossVectors(n,nn)),en.normalize(),tn.crossVectors(nn,en),r[0]=en.x,r[4]=tn.x,r[8]=nn.x,r[1]=en.y,r[5]=tn.y,r[9]=nn.y,r[2]=en.z,r[6]=tn.z,r[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],ee=r[2],k=r[6],te=r[10],A=r[14],j=r[3],M=r[7],ne=r[11],N=r[15];return i[0]=a*x+o*T+s*ee+c*j,i[4]=a*S+o*E+s*k+c*M,i[8]=a*C+o*D+s*te+c*ne,i[12]=a*w+o*O+s*A+c*N,i[1]=l*x+u*T+d*ee+f*j,i[5]=l*S+u*E+d*k+f*M,i[9]=l*C+u*D+d*te+f*ne,i[13]=l*w+u*O+d*A+f*N,i[2]=p*x+m*T+h*ee+g*j,i[6]=p*S+m*E+h*k+g*M,i[10]=p*C+m*D+h*te+g*ne,i[14]=p*w+m*O+h*A+g*N,i[3]=_*x+v*T+y*ee+b*j,i[7]=_*S+v*E+y*k+b*M,i[11]=_*C+v*D+y*te+b*ne,i[15]=_*w+v*O+y*A+b*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,ee=_*O-v*D+y*E+b*T-x*w+S*C;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/ee;return e[0]=(o*O-s*D+c*E)*k,e[1]=(r*D-n*O-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*O-c*w)*k,e[5]=(t*O-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Xt.set(r[0],r[1],r[2]).length(),o=Xt.set(r[4],r[5],r[6]).length(),s=Xt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Zt.copy(this);let c=1/a,l=1/o,u=1/s;return Zt.elements[0]*=c,Zt.elements[1]*=c,Zt.elements[2]*=c,Zt.elements[4]*=l,Zt.elements[5]*=l,Zt.elements[6]*=l,Zt.elements[8]*=u,Zt.elements[9]*=u,Zt.elements[10]*=u,t.setFromRotationMatrix(Zt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Be,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Be,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Xt=new q,Zt=new Yt,Qt=new q(0,0,0),$t=new q(1,1,1),en=new q,tn=new q,nn=new q,rn=new Yt,an=new Tt,on=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(K(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-K(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(K(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-K(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(K(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-K(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:W(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return an.setFromEuler(this),this.setFromQuaternion(an,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};on.DEFAULT_ORDER=`XYZ`;var sn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},cn=0,ln=new q,un=new Tt,dn=new Yt,fn=new q,pn=new q,mn=new q,hn=new Tt,gn=new q(1,0,0),_n=new q(0,1,0),vn=new q(0,0,1),yn={type:`added`},bn={type:`removed`},xn={type:`childadded`,child:null},Sn={type:`childremoved`,child:null},Cn=class e extends Ze{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cn++}),this.uuid=nt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new q,n=new on,r=new Tt,i=new q(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Yt},normalMatrix:{value:new Ot}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return un.setFromAxisAngle(e,t),this.quaternion.multiply(un),this}rotateOnWorldAxis(e,t){return un.setFromAxisAngle(e,t),this.quaternion.premultiply(un),this}rotateX(e){return this.rotateOnAxis(gn,e)}rotateY(e){return this.rotateOnAxis(_n,e)}rotateZ(e){return this.rotateOnAxis(vn,e)}translateOnAxis(e,t){return ln.copy(e).applyQuaternion(this.quaternion),this.position.add(ln.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gn,e)}translateY(e){return this.translateOnAxis(_n,e)}translateZ(e){return this.translateOnAxis(vn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fn.copy(e):fn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),pn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(pn,fn,this.up):dn.lookAt(fn,pn,this.up),this.quaternion.setFromRotationMatrix(dn),r&&(dn.extractRotation(r.matrixWorld),un.setFromRotationMatrix(dn),this.quaternion.premultiply(un.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(G(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yn),xn.child=e,this.dispatchEvent(xn),xn.child=null):G(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bn),Sn.child=e,this.dispatchEvent(Sn),Sn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yn),xn.child=e,this.dispatchEvent(xn),xn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pn,e,mn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pn,hn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};Cn.DEFAULT_UP=new q(0,1,0),Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wn=class extends Cn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Tn={type:`move`},En=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new wn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Dn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},kn={h:0,s:0,l:0};function An(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var J=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Nt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Nt.workingColorSpace){if(e=rt(e,1),t=K(t,0,1),n=K(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=An(i,r,e+1/3),this.g=An(i,r,e),this.b=An(i,r,e-1/3)}return Nt.colorSpaceToWorking(this,r),this}setStyle(e,t=Pe){function n(t){t!==void 0&&parseFloat(t)<1&&W(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:W(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);W(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pe){let n=Dn[e.toLowerCase()];return n===void 0?W(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pt(e.r),this.g=Pt(e.g),this.b=Pt(e.b),this}copyLinearToSRGB(e){return this.r=Ft(e.r),this.g=Ft(e.g),this.b=Ft(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pe){return Nt.workingToColorSpace(jn.copy(this),e),Math.round(K(jn.r*255,0,255))*65536+Math.round(K(jn.g*255,0,255))*256+Math.round(K(jn.b*255,0,255))}getHexString(e=Pe){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.workingToColorSpace(jn.copy(this),t);let n=jn.r,r=jn.g,i=jn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Nt.workingColorSpace){return Nt.workingToColorSpace(jn.copy(this),t),e.r=jn.r,e.g=jn.g,e.b=jn.b,e}getStyle(e=Pe){Nt.workingToColorSpace(jn.copy(this),e);let t=jn.r,n=jn.g,r=jn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(On),this.setHSL(On.h+e,On.s+t,On.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(On),e.getHSL(kn);let n=ot(On.h,kn.h,t),r=ot(On.s,kn.s,t),i=ot(On.l,kn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},jn=new J;J.NAMES=Dn;var Mn=class extends Cn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Nn=new q,Pn=new q,Fn=new q,In=new q,Ln=new q,Rn=new q,zn=new q,Bn=new q,Vn=new q,Hn=new q,Un=new Wt,Wn=new Wt,Gn=new Wt,Kn=class e{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Nn.subVectors(e,t),r.cross(Nn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Nn.subVectors(r,t),Pn.subVectors(n,t),Fn.subVectors(e,t);let a=Nn.dot(Nn),o=Nn.dot(Pn),s=Nn.dot(Fn),c=Pn.dot(Pn),l=Pn.dot(Fn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,In)!==null&&In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,In)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,In.x),s.addScaledVector(a,In.y),s.addScaledVector(o,In.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Un.setScalar(0),Wn.setScalar(0),Gn.setScalar(0),Un.fromBufferAttribute(e,t),Wn.fromBufferAttribute(e,n),Gn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Un,i.x),a.addScaledVector(Wn,i.y),a.addScaledVector(Gn,i.z),a}static isFrontFacing(e,t,n,r){return Nn.subVectors(n,t),Pn.subVectors(e,t),Nn.cross(Pn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),Nn.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Ln.subVectors(r,n),Rn.subVectors(i,n),Bn.subVectors(e,n);let s=Ln.dot(Bn),c=Rn.dot(Bn);if(s<=0&&c<=0)return t.copy(n);Vn.subVectors(e,r);let l=Ln.dot(Vn),u=Rn.dot(Vn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Ln,a);Hn.subVectors(e,i);let f=Ln.dot(Hn),p=Rn.dot(Hn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Rn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return zn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(zn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Ln,a).addScaledVector(Rn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qn=class{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Yn):Yn.fromBufferAttribute(r,t),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Xn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Xn.copy(e.boundingBox)),Xn.applyMatrix4(e.matrixWorld),this.union(Xn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rr),ir.subVectors(this.max,rr),Zn.subVectors(e.a,rr),Qn.subVectors(e.b,rr),$n.subVectors(e.c,rr),er.subVectors(Qn,Zn),tr.subVectors($n,Qn),nr.subVectors(Zn,$n);let t=[0,-er.z,er.y,0,-tr.z,tr.y,0,-nr.z,nr.y,er.z,0,-er.x,tr.z,0,-tr.x,nr.z,0,-nr.x,-er.y,er.x,0,-tr.y,tr.x,0,-nr.y,nr.x,0];return!sr(t,Zn,Qn,$n,ir)||(t=[1,0,0,0,1,0,0,0,1],!sr(t,Zn,Qn,$n,ir))?!1:(ar.crossVectors(er,tr),t=[ar.x,ar.y,ar.z],sr(t,Zn,Qn,$n,ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Jn=[new q,new q,new q,new q,new q,new q,new q,new q],Yn=new q,Xn=new qn,Zn=new q,Qn=new q,$n=new q,er=new q,tr=new q,nr=new q,rr=new q,ir=new q,ar=new q,or=new q;function sr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){or.fromArray(e,a);let o=i.x*Math.abs(or.x)+i.y*Math.abs(or.y)+i.z*Math.abs(or.z),s=t.dot(or),c=n.dot(or),l=r.dot(or);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var cr=new q,lr=new wt,ur=0,Y=class extends Ze{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ur++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=ze,this.updateRanges=[],this.gpuType=g,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix3(e),this.setXY(t,lr.x,lr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)cr.fromBufferAttribute(this,t),cr.applyMatrix3(e),this.setXYZ(t,cr.x,cr.y,cr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)cr.fromBufferAttribute(this,t),cr.applyMatrix4(e),this.setXYZ(t,cr.x,cr.y,cr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cr.fromBufferAttribute(this,t),cr.applyNormalMatrix(e),this.setXYZ(t,cr.x,cr.y,cr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cr.fromBufferAttribute(this,t),cr.transformDirection(e),this.setXYZ(t,cr.x,cr.y,cr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xt(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xt(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xt(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},dr=class extends Y{constructor(e,t,n){super(new Uint16Array(e),t,n)}},fr=class extends Y{constructor(e,t,n){super(new Uint32Array(e),t,n)}},pr=class extends Y{constructor(e,t,n){super(new Float32Array(e),t,n)}},mr=new qn,hr=new q,gr=new q,_r=class{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?mr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hr.subVectors(e,this.center);let t=hr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(hr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hr.copy(e.center).add(gr)),this.expandByPoint(hr.copy(e.center).sub(gr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},vr=0,yr=new Yt,br=new Cn,xr=new q,Sr=new qn,Cr=new qn,wr=new q,Tr=class e extends Ze{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vr++}),this.uuid=nt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ve(e)?fr:dr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Ot().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return yr.makeRotationFromQuaternion(e),this.applyMatrix4(yr),this}rotateX(e){return yr.makeRotationX(e),this.applyMatrix4(yr),this}rotateY(e){return yr.makeRotationY(e),this.applyMatrix4(yr),this}rotateZ(e){return yr.makeRotationZ(e),this.applyMatrix4(yr),this}translate(e,t,n){return yr.makeTranslation(e,t,n),this.applyMatrix4(yr),this}scale(e,t,n){return yr.makeScale(e,t,n),this.applyMatrix4(yr),this}lookAt(e){return br.lookAt(e),br.updateMatrix(),this.applyMatrix4(br.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new pr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&W(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){G(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Sr.setFromBufferAttribute(n),this.morphTargetsRelative?(wr.addVectors(this.boundingBox.min,Sr.min),this.boundingBox.expandByPoint(wr),wr.addVectors(this.boundingBox.max,Sr.max),this.boundingBox.expandByPoint(wr)):(this.boundingBox.expandByPoint(Sr.min),this.boundingBox.expandByPoint(Sr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&G(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _r);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){G(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new q,1/0);return}if(e){let n=this.boundingSphere.center;if(Sr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Cr.setFromBufferAttribute(n),this.morphTargetsRelative?(wr.addVectors(Sr.min,Cr.min),Sr.expandByPoint(wr),wr.addVectors(Sr.max,Cr.max),Sr.expandByPoint(wr)):(Sr.expandByPoint(Cr.min),Sr.expandByPoint(Cr.max))}Sr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)wr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(wr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)wr.fromBufferAttribute(a,t),o&&(xr.fromBufferAttribute(e,t),wr.add(xr)),r=Math.max(r,n.distanceToSquared(wr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&G(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){G(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Y(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new q,s[e]=new q;let c=new q,l=new q,u=new q,d=new wt,f=new wt,p=new wt,m=new q,h=new q;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new q,y=new q,b=new q,x=new q;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Y(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new q,i=new q,a=new q,o=new q,s=new q,c=new q,l=new q,u=new q;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wr.fromBufferAttribute(e,t),wr.normalize(),e.setXYZ(t,wr.x,wr.y,wr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Y(a,r,i)}if(this.index===null)return W(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Er=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=ze,this.updateRanges=[],this.version=0,this.uuid=nt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Dr=new q,Or=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dr.fromBufferAttribute(this,t),Dr.applyMatrix4(e),this.setXYZ(t,Dr.x,Dr.y,Dr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dr.fromBufferAttribute(this,t),Dr.applyNormalMatrix(e),this.setXYZ(t,Dr.x,Dr.y,Dr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dr.fromBufferAttribute(this,t),Dr.transformDirection(e),this.setXYZ(t,Dr.x,Dr.y,Dr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=xt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array),i=St(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Ke(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Y(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ke(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},kr=0,Ar=class extends Ze{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kr++}),this.uuid=nt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new J(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Re,this.stencilZFail=Re,this.stencilZPass=Re,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){W(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){W(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new J().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new wt().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new wt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},jr=class extends Ar{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new J(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Mr,Nr=new q,Pr=new q,Fr=new q,Ir=new wt,Lr=new wt,Rr=new Yt,zr=new q,Br=new q,Vr=new q,Hr=new wt,Ur=new wt,Wr=new wt,Gr=class extends Cn{constructor(e=new jr){if(super(),this.isSprite=!0,this.type=`Sprite`,Mr===void 0){Mr=new Tr;let e=new Er(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Mr.setIndex([0,1,2,0,2,3]),Mr.setAttribute(`position`,new Or(e,3,0,!1)),Mr.setAttribute(`uv`,new Or(e,2,3,!1))}this.geometry=Mr,this.material=e,this.center=new wt(.5,.5),this.count=1}raycast(e,t){e.camera===null&&G(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Pr.setFromMatrixScale(this.matrixWorld),Rr.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Fr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Pr.multiplyScalar(-Fr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Kr(zr.set(-.5,-.5,0),Fr,a,Pr,r,i),Kr(Br.set(.5,-.5,0),Fr,a,Pr,r,i),Kr(Vr.set(.5,.5,0),Fr,a,Pr,r,i),Hr.set(0,0),Ur.set(1,0),Wr.set(1,1);let o=e.ray.intersectTriangle(zr,Br,Vr,!1,Nr);if(o===null&&(Kr(Br.set(-.5,.5,0),Fr,a,Pr,r,i),Ur.set(0,1),o=e.ray.intersectTriangle(zr,Vr,Br,!1,Nr),o===null))return;let s=e.ray.origin.distanceTo(Nr);s<e.near||s>e.far||t.push({distance:s,point:Nr.clone(),uv:Kn.getInterpolation(Nr,zr,Br,Vr,Hr,Ur,Wr,new wt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Kr(e,t,n,r,i,a){Ir.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Lr.copy(Ir):(Lr.x=a*Ir.x-i*Ir.y,Lr.y=i*Ir.x+a*Ir.y),e.copy(t),e.x+=Lr.x,e.y+=Lr.y,e.applyMatrix4(Rr)}var qr=new q,Jr=new q,Yr=new q,Xr=new q,Zr=new q,Qr=new q,$r=new q,ei=class{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qr.copy(this.origin).addScaledVector(this.direction,t),qr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Jr.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),Xr.copy(this.origin).sub(Jr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Yr),o=Xr.dot(this.direction),s=-Xr.dot(Yr),c=Xr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Jr).addScaledVector(Yr,d),f}intersectSphere(e,t){qr.subVectors(e.center,this.origin);let n=qr.dot(this.direction),r=qr.dot(qr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,qr)!==null}intersectTriangle(e,t,n,r,i){Zr.subVectors(t,e),Qr.subVectors(n,e),$r.crossVectors(Zr,Qr);let a=this.direction.dot($r),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xr.subVectors(this.origin,e);let s=o*this.direction.dot(Qr.crossVectors(Xr,Qr));if(s<0)return null;let c=o*this.direction.dot(Zr.cross(Xr));if(c<0||s+c>a)return null;let l=-o*Xr.dot($r);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ti=class extends Ar{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new J(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ni=new Yt,ri=new ei,ii=new _r,ai=new q,oi=new q,si=new q,ci=new q,li=new q,ui=new q,di=new q,fi=new q,pi=class extends Cn{constructor(e=new Tr,t=new ti){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ui.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(li.fromBufferAttribute(s,e),a?ui.addScaledVector(li,r):ui.addScaledVector(li.sub(t),r))}t.add(ui)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ii.copy(n.boundingSphere),ii.applyMatrix4(i),ri.copy(e.ray).recast(e.near),!(ii.containsPoint(ri.origin)===!1&&(ri.intersectSphere(ii,ai)===null||ri.origin.distanceToSquared(ai)>(e.far-e.near)**2))&&(ni.copy(i).invert(),ri.copy(e.ray).applyMatrix4(ni),(n.boundingBox===null||ri.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,ri)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=hi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=hi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=hi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=hi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function mi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;fi.copy(s),fi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(fi);return l<n.near||l>n.far?null:{distance:l,point:fi.clone(),object:e}}function hi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,oi),e.getVertexPosition(c,si),e.getVertexPosition(l,ci);let u=mi(e,t,n,r,oi,si,ci,di);if(u){let e=new q;Kn.getBarycoord(di,oi,si,ci,e),i&&(u.uv=Kn.getInterpolatedAttribute(i,s,c,l,e,new wt)),a&&(u.uv1=Kn.getInterpolatedAttribute(a,s,c,l,e,new wt)),o&&(u.normal=Kn.getInterpolatedAttribute(o,s,c,l,e,new q),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new q,materialIndex:0};Kn.getNormal(oi,si,ci,t.normal),u.face=t,u.barycoord=e}return u}var gi=new Wt,_i=new Wt,vi=new Wt,yi=new Wt,bi=new Yt,xi=new q,Si=new _r,Ci=new Yt,wi=new ei,Ti=class extends pi{constructor(t,n){super(t,n),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=e,this.bindMatrix=new Yt,this.bindMatrixInverse=new Yt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qn),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,xi),this.boundingBox.expandByPoint(xi)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _r),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,xi),this.boundingSphere.expandByPoint(xi)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Si.copy(this.boundingSphere),Si.applyMatrix4(r),e.ray.intersectsSphere(Si)!==!1&&(Ci.copy(r).invert(),wi.copy(e.ray).applyMatrix4(Ci),(this.boundingBox===null||wi.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,wi)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Wt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():W(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;_i.fromBufferAttribute(r.attributes.skinIndex,e),vi.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(gi.copy(t),t.set(0,0,0,0)):(gi.set(...t,1),t.set(0,0,0)),gi.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=vi.getComponent(e);if(r!==0){let i=_i.getComponent(e);bi.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(yi.copy(gi).applyMatrix4(bi),r)}}return t.isVector4&&(t.w=gi.w),t.applyMatrix4(this.bindMatrixInverse)}},Ei=class extends Cn{constructor(){super(),this.isBone=!0,this.type=`Bone`}},Di=class extends Ut{constructor(e=null,t=1,n=1,r,a,o,s,c,l=i,u=i,d,f){super(null,o,s,c,l,u,r,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Oi=new Yt,ki=new Yt,Ai=class e{constructor(e=[],t=[]){this.uuid=nt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){W(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new Yt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new Yt;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:ki;Oi.multiplyMatrices(i,t[r]),Oi.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Di(t,e,e,T,g);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(W(`Skeleton: No bone found with UUID:`,r),i=new Ei),this.bones.push(i),this.boneInverses.push(new Yt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},ji=class extends Y{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Mi=new Yt,Ni=new Yt,Pi=[],Fi=new qn,Ii=new Yt,Li=new pi,Ri=new _r,zi=class extends pi{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ji(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Ii)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mi),Fi.copy(e.boundingBox).applyMatrix4(Mi),this.boundingBox.union(Fi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _r),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mi),Ri.copy(e.boundingSphere).applyMatrix4(Mi),this.boundingSphere.union(Ri)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Li.geometry=this.geometry,Li.material=this.material,Li.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ri.copy(this.boundingSphere),Ri.applyMatrix4(n),e.ray.intersectsSphere(Ri)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Mi),Ni.multiplyMatrices(n,Mi),Li.matrixWorld=Ni,Li.raycast(e,Pi);for(let e=0,n=Pi.length;e<n;e++){let n=Pi[e];n.instanceId=i,n.object=this,t.push(n)}Pi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ji(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Di(new Float32Array(r*this.count),r,this.count,O,g));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Bi=new q,Vi=new q,Hi=new Ot,Ui=class{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Bi.subVectors(n,t).cross(Vi.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Bi),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Hi.getNormalMatrix(e),r=this.coplanarPoint(Bi).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wi=new _r,Gi=new wt(.5,.5),Ki=new q,qi=class{constructor(e=new Ui,t=new Ui,n=new Ui,r=new Ui,i=new Ui,a=new Ui){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Be,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(e){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476+Gi.distanceTo(e.center),Wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ki.x=r.normal.x>0?e.max.x:e.min.x,Ki.y=r.normal.y>0?e.max.y:e.min.y,Ki.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ki)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ji=class extends Ar{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new J(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Yi=new q,Xi=new q,Zi=new Yt,Qi=new ei,$i=new _r,ea=new q,ta=new q,na=class extends Cn{constructor(e=new Tr,t=new Ji){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Yi.fromBufferAttribute(t,e-1),Xi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Yi.distanceTo(Xi);e.setAttribute(`lineDistance`,new pr(n,1))}else W(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$i.copy(n.boundingSphere),$i.applyMatrix4(r),$i.radius+=i,e.ray.intersectsSphere($i)===!1)return;Zi.copy(r).invert(),Qi.copy(e.ray).applyMatrix4(Zi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=ra(this,e,Qi,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=ra(this,e,Qi,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=ra(this,e,Qi,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=ra(this,e,Qi,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ra(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Yi.fromBufferAttribute(s,i),Xi.fromBufferAttribute(s,a),n.distanceSqToSegment(Yi,Xi,ea,ta)>r)return;ea.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(ea);if(!(c<t.near||c>t.far))return{distance:c,point:ta.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var ia=new q,aa=new q,oa=class extends na{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)ia.fromBufferAttribute(t,e),aa.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+ia.distanceTo(aa);e.setAttribute(`lineDistance`,new pr(n,1))}else W(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},sa=class extends na{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},ca=class extends Ar{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new J(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},la=new Yt,ua=new ei,da=new _r,fa=new q,pa=class extends Cn{constructor(e=new Tr,t=new ca){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(r),da.radius+=i,e.ray.intersectsSphere(da)===!1)return;la.copy(r).invert(),ua.copy(e.ray).applyMatrix4(la);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);fa.fromBufferAttribute(l,n),ma(fa,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)fa.fromBufferAttribute(l,a),ma(fa,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ma(e,t,n,r,i,a,o){let s=ua.distanceSqToPoint(e);if(s<n){let n=new q;ua.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ha=class extends Ut{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ga=class extends Ut{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},_a=class extends Ut{constructor(e,t,n=h,r,a,o,s=i,c=i,l,u=E,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},va=class extends _a{constructor(e,t=h,n=301,r,a,o=i,s=i,c,l=E){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ya=class extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ba=class e extends Tr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new pr(c,3)),this.setAttribute(`normal`,new pr(l,3)),this.setAttribute(`uv`,new pr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new q;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},xa=class e extends Tr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new pr(p,3)),this.setAttribute(`normal`,new pr(m,3)),this.setAttribute(`uv`,new pr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Sa=class e extends Tr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new q,p=new wt;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new pr(s,3)),this.setAttribute(`normal`,new pr(c,3)),this.setAttribute(`uv`,new pr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ca=class e extends Tr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new q,d=new q,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new pr(p,3)),this.setAttribute(`normal`,new pr(m,3)),this.setAttribute(`uv`,new pr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},wa=class e extends Tr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new q,f=new q,p=new q;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new pr(c,3)),this.setAttribute(`normal`,new pr(l,3)),this.setAttribute(`uv`,new pr(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};function Ta(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Da(i))i.isRenderTargetTexture?(W(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Da(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Ea(e){let t={};for(let n=0;n<e.length;n++){let r=Ta(e[n]);for(let e in r)t[e]=r[e]}return t}function Da(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Oa(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function ka(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Nt.workingColorSpace}var Aa={clone:Ta,merge:Ea},ja=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ma=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Na=class extends Ar{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ja,this.fragmentShader=Ma,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ta(e.uniforms),this.uniformsGroups=Oa(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new J().setHex(r.value);break;case`v2`:this.uniforms[n].value=new wt().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new q().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Wt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Ot().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Yt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Pa=class extends Na{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Fa=class extends Ar{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new J(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new J(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ia=class extends Fa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new wt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return K(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new J(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new J(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new J(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},La=class extends Ar{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ne,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ra=class extends Ar{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function za(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ba(e){function t(t,n){return e[t]-e[n]}let n=e.length,r=Array(n);for(let e=0;e!==n;++e)r[e]=e;return r.sort(t),r}function Va(e,t,n){let r=e.length,i=new e.constructor(r);for(let a=0,o=0;o!==r;++a){let r=n[a]*t;for(let n=0;n!==t;++n)i[o++]=e[r+n]}return i}function Ha(e,t,n,r){let i=1,a=e[0];for(;a!==void 0&&a[r]===void 0;)a=e[i++];if(a===void 0)return;let o=a[r];if(o!==void 0){if(Array.isArray(o))do o=a[r],o!==void 0&&(t.push(a.time),n.push(...o)),a=e[i++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[r],o!==void 0&&(t.push(a.time),o.toArray(n,n.length)),a=e[i++];while(a!==void 0);else do o=a[r],o!==void 0&&(t.push(a.time),n.push(o)),a=e[i++];while(a!==void 0)}}var Ua=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Wa=class extends Ua{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:V,endingEnd:V}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Me:i=e,o=2*t-n;break;case H:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Me:a=e,s=2*n-t;break;case H:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Ga=class extends Ua{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ka=class extends Ua{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},qa=class extends Ua{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[p]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},Ja=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=za(t,this.TimeBufferType),this.values=za(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:za(e.times,Array),values:za(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ga(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new qa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case B:t=this.InterpolantFactoryMethodDiscrete;break;case ke:t=this.InterpolantFactoryMethodLinear;break;case Ae:t=this.InterpolantFactoryMethodSmooth;break;case je:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return W(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return B;case this.InterpolantFactoryMethodLinear:return ke;case this.InterpolantFactoryMethodSmooth:return Ae;case this.InterpolantFactoryMethodBezier:return je}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(G(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(G(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){G(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){G(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&He(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){G(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ae,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Ja.prototype.ValueTypeName=``,Ja.prototype.TimeBufferType=Float32Array,Ja.prototype.ValueBufferType=Float32Array,Ja.prototype.DefaultInterpolation=ke;var Ya=class extends Ja{constructor(e,t,n){super(e,t,n)}};Ya.prototype.ValueTypeName=`bool`,Ya.prototype.ValueBufferType=Array,Ya.prototype.DefaultInterpolation=B,Ya.prototype.InterpolantFactoryMethodLinear=void 0,Ya.prototype.InterpolantFactoryMethodSmooth=void 0;var Xa=class extends Ja{constructor(e,t,n,r){super(e,t,n,r)}};Xa.prototype.ValueTypeName=`color`;var Za=class extends Ja{constructor(e,t,n,r){super(e,t,n,r)}};Za.prototype.ValueTypeName=`number`;var Qa=class extends Ua{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Tt.slerpFlat(i,0,a,c-o,a,c,s);return i}},$a=class extends Ja{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Qa(this.times,this.values,this.getValueSize(),e)}};$a.prototype.ValueTypeName=`quaternion`,$a.prototype.InterpolantFactoryMethodSmooth=void 0;var eo=class extends Ja{constructor(e,t,n){super(e,t,n)}};eo.prototype.ValueTypeName=`string`,eo.prototype.ValueBufferType=Array,eo.prototype.DefaultInterpolation=B,eo.prototype.InterpolantFactoryMethodLinear=void 0,eo.prototype.InterpolantFactoryMethodSmooth=void 0;var to=class extends Ja{constructor(e,t,n,r){super(e,t,n,r)}};to.prototype.ValueTypeName=`vector`;var no=class{constructor(e=``,t=-1,n=[],r=U){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=nt(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let e=0,i=n.length;e!==i;++e)t.push(io(n[e]).scale(r));let i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i.userData=JSON.parse(e.userData||`{}`),i}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let e=0,r=n.length;e!==r;++e)t.push(Ja.toJSON(n[e]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let i=t.length,a=[];for(let e=0;e<i;e++){let o=[],s=[];o.push((e+i-1)%i,e,(e+1)%i),s.push(0,1,0);let c=Ba(o);o=Va(o,1,c),s=Va(s,1,c),!r&&o[0]===0&&(o.push(i),s.push(s[0])),a.push(new Za(`.morphTargetInfluences[`+t[e].name+`]`,o,s).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,n=e.length;t<n;t++){let n=e[t],a=n.name.match(i);if(a&&a.length>1){let e=a[1],t=r[e];t||(r[e]=t=[]),t.push(n)}}let a=[];for(let e in r)a.push(this.CreateFromMorphTargetSequence(e,r[e],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let e=this.tracks[n];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e&&=this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function ro(e){switch(e.toLowerCase()){case`scalar`:case`double`:case`float`:case`number`:case`integer`:return Za;case`vector`:case`vector2`:case`vector3`:case`vector4`:return to;case`color`:return Xa;case`quaternion`:return $a;case`bool`:case`boolean`:return Ya;case`string`:return eo}throw Error(`THREE.KeyframeTrack: Unsupported typeName: `+e)}function io(e){if(e.type===void 0)throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);let t=ro(e.type);if(e.times===void 0){let t=[],n=[];Ha(e.keys,t,n,`value`),e.times=t,e.values=n}return t.parse===void 0?new t(e.name,e.times,e.values,e.interpolation):t.parse(e)}var ao={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(oo(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!oo(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function oo(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var so=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},co=class{constructor(e){this.manager=e===void 0?so:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};co.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var lo={},uo=class extends Error{constructor(e,t){super(e),this.response=t}},fo=class extends co{constructor(e){super(e),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=ao.get(`file:${e}`);if(i!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0);return}if(lo[e]!==void 0){lo[e].push({onLoad:t,onProgress:n,onError:r});return}lo[e]=[],lo[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&W(`FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=lo[e],r=t.body.getReader(),i=t.headers.get(`X-File-Size`)||t.headers.get(`Content-Length`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}},t=>{e.error(t)})}}});return new Response(c)}throw new uo(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===``)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{ao.add(`file:${e}`,t);let n=lo[e];delete lo[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=lo[e];if(n===void 0)throw this.manager.itemError(e),t;delete lo[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},po=new WeakMap,mo=class extends co{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=ao.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=po.get(a);e===void 0&&(e=[],po.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=Ue(`img`);function s(){l(),t&&t(this);let n=po.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}po.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),ao.remove(`image:${e}`);let n=po.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}po.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ao.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},ho=class extends co{constructor(e){super(e)}load(e,t,n,r){let i=new Ut,a=new mo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},go=class extends Cn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new J(e),this.intensity=t}dispose(){this.dispatchEvent({type:`dispose`})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},_o=class extends go{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new J(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},vo=new Yt,yo=new q,bo=new q,xo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.mapType=u,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qi,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;yo.setFromMatrixPosition(e.matrixWorld),t.position.copy(yo),bo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bo),t.updateMatrixWorld(),vo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vo,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},So=new q,Co=new Tt,wo=new q,To=class extends Cn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Be,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(So,Co,wo),wo.x===1&&wo.y===1&&wo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(So,Co,wo.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(So,Co,wo),wo.x===1&&wo.y===1&&wo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(So,Co,wo.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Eo=new q,Do=new wt,Oo=new wt,ko=class extends To{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=tt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(et*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tt*2*Math.atan(Math.tan(et*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Eo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Eo.x,Eo.y).multiplyScalar(-e/Eo.z),Eo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Eo.x,Eo.y).multiplyScalar(-e/Eo.z)}getViewSize(e,t){return this.getViewBounds(e,Do,Oo),t.subVectors(Oo,Do)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(et*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ao=class extends xo{constructor(){super(new ko(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=tt*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},jo=class extends go{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new Ao}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Mo=class extends xo{constructor(){super(new ko(90,1,.5,500)),this.isPointLightShadow=!0}},No=class extends go{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Mo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Po=class extends To{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Fo=class extends xo{constructor(){super(new Po(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Io=class extends go{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new Fo}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Lo=class{static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.slice(0,t+1)}static resolveURL(e,t){return typeof e!=`string`||e===``?``:(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Ro=class extends Tr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},zo=new WeakMap,Bo=class extends co{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>`u`&&W(`ImageBitmapLoader: createImageBitmap() not supported.`),typeof fetch>`u`&&W(`ImageBitmapLoader: fetch() not supported.`),this.options={premultiplyAlpha:`none`},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=ao.get(`image-bitmap:${e}`);if(a!==void 0){if(i.manager.itemStart(e),a.then){a.then(n=>{zo.has(a)===!0?(r&&r(zo.get(a)),i.manager.itemError(e),i.manager.itemEnd(e)):(t&&t(n),i.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin===`anonymous`?`same-origin`:`include`,o.headers=this.requestHeader,o.signal=typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let s=fetch(e,o).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign(i.options,{colorSpaceConversion:`none`}))}).then(function(n){ao.add(`image-bitmap:${e}`,n),t&&t(n),i.manager.itemEnd(e)}).catch(function(t){r&&r(t),zo.set(s,t),ao.remove(`image-bitmap:${e}`),i.manager.itemError(e),i.manager.itemEnd(e)});ao.add(`image-bitmap:${e}`,s),i.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Vo=-90,Ho=1,Uo=class extends Cn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ko(Vo,Ho,e,t);r.layers=this.layers,this.add(r);let i=new ko(Vo,Ho,e,t);i.layers=this.layers,this.add(i);let a=new ko(Vo,Ho,e,t);a.layers=this.layers,this.add(a);let o=new ko(Vo,Ho,e,t);o.layers=this.layers,this.add(o);let s=new ko(Vo,Ho,e,t);s.layers=this.layers,this.add(s);let c=new ko(Vo,Ho,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Wo=class extends ko{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Go=`\\[\\]\\.:\\/`,Ko=RegExp(`[\\[\\]\\.:\\/]`,`g`),qo=`[^\\[\\]\\.:\\/]`,Jo=`[^`+Go.replace(`\\.`,``)+`]`,Yo=`((?:WC+[\\/:])*)`.replace(`WC`,qo),Xo=`(WCOD+)?`.replace(`WCOD`,Jo),Zo=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,qo),Qo=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,qo),$o=RegExp(`^`+Yo+Xo+Zo+Qo+`$`),es=[`material`,`materials`,`bones`,`map`],ts=class{constructor(e,t,n){let r=n||ns.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ns=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Ko,``)}static parseTrackName(e){let t=$o.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);es.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){W(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){G(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){G(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){G(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){G(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){G(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){G(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){G(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;G(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){G(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){G(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ns.Composite=ts,ns.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ns.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ns.prototype.GetterByBindingType=[ns.prototype._getValue_direct,ns.prototype._getValue_array,ns.prototype._getValue_arrayElement,ns.prototype._getValue_toArray],ns.prototype.SetterByBindingTypeAndVersioning=[[ns.prototype._setValue_direct,ns.prototype._setValue_direct_setNeedsUpdate,ns.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ns.prototype._setValue_array,ns.prototype._setValue_array_setNeedsUpdate,ns.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ns.prototype._setValue_arrayElement,ns.prototype._setValue_arrayElement_setNeedsUpdate,ns.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ns.prototype._setValue_fromArray,ns.prototype._setValue_fromArray_setNeedsUpdate,ns.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function rs(e,t,n,r){let i=is(r);switch(n){case C:return e*t;case O:return e*t/i.components*i.byteLength;case ee:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case te:return e*t*2/i.components*i.byteLength;case w:return e*t*3/i.components*i.byteLength;case T:return e*t*4/i.components*i.byteLength;case A:return e*t*4/i.components*i.byteLength;case j:case M:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ne:case N:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case P:case ae:return Math.max(e,16)*Math.max(t,8)/4;case re:case ie:return Math.max(e,8)*Math.max(t,8)/2;case F:case I:case L:case se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case oe:case ce:case le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ue:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case de:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case fe:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case pe:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case me:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case R:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case he:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ge:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case _e:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ye:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case xe:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Se:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ce:case we:case Te:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ee:case De:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Oe:case z:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function is(e){switch(e){case u:case d:return{byteLength:1,components:1};case p:case f:case _:return{byteLength:2,components:1};case v:case y:return{byteLength:2,components:4};case h:case m:case g:return{byteLength:4,components:1};case x:case S:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`185`}})),typeof window<`u`&&(window.__THREE__?W(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`185`);function as(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function os(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var ss={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},X={common:{diffuse:{value:new J(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new J(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new J(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new J(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},cs={basic:{uniforms:Ea([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.fog]),vertexShader:ss.meshbasic_vert,fragmentShader:ss.meshbasic_frag},lambert:{uniforms:Ea([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new J(0)},envMapIntensity:{value:1}}]),vertexShader:ss.meshlambert_vert,fragmentShader:ss.meshlambert_frag},phong:{uniforms:Ea([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new J(0)},specular:{value:new J(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ss.meshphong_vert,fragmentShader:ss.meshphong_frag},standard:{uniforms:Ea([X.common,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.roughnessmap,X.metalnessmap,X.fog,X.lights,{emissive:{value:new J(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ss.meshphysical_vert,fragmentShader:ss.meshphysical_frag},toon:{uniforms:Ea([X.common,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.gradientmap,X.fog,X.lights,{emissive:{value:new J(0)}}]),vertexShader:ss.meshtoon_vert,fragmentShader:ss.meshtoon_frag},matcap:{uniforms:Ea([X.common,X.bumpmap,X.normalmap,X.displacementmap,X.fog,{matcap:{value:null}}]),vertexShader:ss.meshmatcap_vert,fragmentShader:ss.meshmatcap_frag},points:{uniforms:Ea([X.points,X.fog]),vertexShader:ss.points_vert,fragmentShader:ss.points_frag},dashed:{uniforms:Ea([X.common,X.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ss.linedashed_vert,fragmentShader:ss.linedashed_frag},depth:{uniforms:Ea([X.common,X.displacementmap]),vertexShader:ss.depth_vert,fragmentShader:ss.depth_frag},normal:{uniforms:Ea([X.common,X.bumpmap,X.normalmap,X.displacementmap,{opacity:{value:1}}]),vertexShader:ss.meshnormal_vert,fragmentShader:ss.meshnormal_frag},sprite:{uniforms:Ea([X.sprite,X.fog]),vertexShader:ss.sprite_vert,fragmentShader:ss.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ss.background_vert,fragmentShader:ss.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:ss.backgroundCube_vert,fragmentShader:ss.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ss.cube_vert,fragmentShader:ss.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ss.equirect_vert,fragmentShader:ss.equirect_frag},distance:{uniforms:Ea([X.common,X.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ss.distance_vert,fragmentShader:ss.distance_frag},shadow:{uniforms:Ea([X.lights,X.fog,{color:{value:new J(0)},opacity:{value:1}}]),vertexShader:ss.shadow_vert,fragmentShader:ss.shadow_frag}};cs.physical={uniforms:Ea([cs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new J(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new J(0)},specularColor:{value:new J(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:ss.meshphysical_vert,fragmentShader:ss.meshphysical_frag};var ls={r:0,b:0,g:0},us=new Yt,ds=new Ot;ds.set(-1,0,0,0,1,0,0,0,1);function fs(e,t,n,r,i,a){let o=new J(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new pi(new ba(1,1,1),new Na({name:`BackgroundCubeMaterial`,uniforms:Ta(cs.backgroundCube.uniforms),vertexShader:cs.backgroundCube.vertexShader,fragmentShader:cs.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(us.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ds),l.material.toneMapped=Nt.getTransfer(i.colorSpace)!==Le,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new pi(new xa(2,2),new Na({name:`BackgroundMaterial`,uniforms:Ta(cs.background.uniforms),vertexShader:cs.background.vertexShader,fragmentShader:cs.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Nt.getTransfer(i.colorSpace)!==Le,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(ls,ka(e)),n.buffers.color.setClear(ls.r,ls.g,ls.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function ps(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function ms(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function hs(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(W(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&W(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function gs(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ui,s=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var _s=4,vs=[.125,.215,.35,.446,.526,.582],ys=20,bs=256,xs=new Po,Ss=new J,Cs=null,ws=0,Ts=0,Es=!1,Ds=new q,Os=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Ds}=i;Cs=this._renderer.getRenderTarget(),ws=this._renderer.getActiveCubeFace(),Ts=this._renderer.getActiveMipmapLevel(),Es=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ps(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Cs,ws,Ts),this._renderer.xr.enabled=Es,e.scissorTest=!1,js(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cs=this._renderer.getRenderTarget(),ws=this._renderer.getActiveCubeFace(),Ts=this._renderer.getActiveMipmapLevel(),Es=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:s,minFilter:s,generateMipmaps:!1,type:_,format:T,colorSpace:Fe,depthBuffer:!1},r=As(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=As(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ks(r)),this._blurMaterial=Ns(r,e,t),this._ggxMaterial=Ms(r,e,t)}return r}_compileMaterial(e){let t=new pi(new Tr,e);this._renderer.compile(t,xs)}_sceneToCubeUV(e,t,n,r,i){let a=new ko(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Ss),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pi(new ba,new ti({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Ss),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;js(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fs()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ps());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;js(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,xs)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-_s?n-d+_s:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,js(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,xs),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,js(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,xs)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&G(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):ys;m>ys&&W(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ys}`);let h=[],g=0;for(let e=0;e<ys;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];js(t,3*v*(r>_-_s?r-_+_s:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,xs)}};function ks(e){let t=[],n=[],r=[],i=e,a=e-_s+1+vs.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-_s?s=vs[o-e+_s-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Tr;h.setAttribute(`position`,new Y(f,3)),h.setAttribute(`uv`,new Y(p,2)),h.setAttribute(`faceIndex`,new Y(m,1)),r.push(new pi(h,null)),i>_s&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function As(e,t,n){let r=new Kt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function js(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Ms(e,t,n){return new Na({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:bs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Is(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ns(e,t,n){let r=new Float32Array(ys),i=new q(0,1,0);return new Na({name:`SphericalGaussianBlur`,defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Is(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ps(){return new Na({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Is(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Fs(){return new Na({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Is(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Is(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ls=class extends Kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ha(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ba(5,5,5),i=new Na({name:`CubemapFromEquirect`,uniforms:Ta(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new pi(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=s),new Uo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Rs(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Ls(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Os(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Os(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function zs(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Je(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Bs(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?fr:dr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Vs(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Hs(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:G(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Us(e,t,n){let r=new WeakMap,i=new Wt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),_=new qt(h,p,m,u);_.type=g,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new wt(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Ws(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Gs={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Ks(e,t,n,r,i,a){let o=new Kt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,depthTexture:i?new _a(t,n):void 0}),s=new Kt(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}),c=new Tr;c.setAttribute(`position`,new pr([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute(`uv`,new pr([0,2,0,0,2,0],2));let l=new Pa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new pi(c,l),d=new Po(-1,1,1,-1,0,1),f=null,p=null,m=!1,h,g=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(m||e.toneMapping===0&&v.length===0)return!1;if(g=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),h=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=h,m=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(f!==e.outputColorSpace||p!==e.toneMapping){f=e.outputColorSpace,p=e.toneMapping,l.defines={},Nt.getTransfer(f)===`srgb`&&(l.defines.SRGB_TRANSFER=``);let t=Gs[p];t&&(l.defines[t]=``),l.needsUpdate=!0}l.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(g),e.render(u,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),s.dispose(),c.dispose(),l.dispose()}}var qs=new Ut,Js=new _a(1,1),Ys=new qt,Xs=new Jt,Zs=new ha,Qs=[],$s=[],ec=new Float32Array(16),tc=new Float32Array(9),nc=new Float32Array(4);function rc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Qs[i];if(a===void 0&&(a=new Float32Array(i),Qs[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function ic(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function ac(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function oc(e,t){let n=$s[t];n===void 0&&(n=new Int32Array(t),$s[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function sc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function cc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ic(n,t))return;e.uniform2fv(this.addr,t),ac(n,t)}}function lc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ic(n,t))return;e.uniform3fv(this.addr,t),ac(n,t)}}function uc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ic(n,t))return;e.uniform4fv(this.addr,t),ac(n,t)}}function dc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ic(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ac(n,t)}else{if(ic(n,r))return;nc.set(r),e.uniformMatrix2fv(this.addr,!1,nc),ac(n,r)}}function fc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ic(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ac(n,t)}else{if(ic(n,r))return;tc.set(r),e.uniformMatrix3fv(this.addr,!1,tc),ac(n,r)}}function pc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ic(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ac(n,t)}else{if(ic(n,r))return;ec.set(r),e.uniformMatrix4fv(this.addr,!1,ec),ac(n,r)}}function mc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function hc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ic(n,t))return;e.uniform2iv(this.addr,t),ac(n,t)}}function gc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ic(n,t))return;e.uniform3iv(this.addr,t),ac(n,t)}}function _c(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ic(n,t))return;e.uniform4iv(this.addr,t),ac(n,t)}}function vc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function yc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ic(n,t))return;e.uniform2uiv(this.addr,t),ac(n,t)}}function bc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ic(n,t))return;e.uniform3uiv(this.addr,t),ac(n,t)}}function xc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ic(n,t))return;e.uniform4uiv(this.addr,t),ac(n,t)}}function Sc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Js.compareFunction=n.isReversedDepthBuffer()?518:515,a=Js):a=qs,n.setTexture2D(t||a,i)}function Cc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Xs,i)}function wc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Zs,i)}function Tc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Ys,i)}function Ec(e){switch(e){case 5126:return sc;case 35664:return cc;case 35665:return lc;case 35666:return uc;case 35674:return dc;case 35675:return fc;case 35676:return pc;case 5124:case 35670:return mc;case 35667:case 35671:return hc;case 35668:case 35672:return gc;case 35669:case 35673:return _c;case 5125:return vc;case 36294:return yc;case 36295:return bc;case 36296:return xc;case 35678:case 36198:case 36298:case 36306:case 35682:return Sc;case 35679:case 36299:case 36307:return Cc;case 35680:case 36300:case 36308:case 36293:return wc;case 36289:case 36303:case 36311:case 36292:return Tc}}function Dc(e,t){e.uniform1fv(this.addr,t)}function Oc(e,t){let n=rc(t,this.size,2);e.uniform2fv(this.addr,n)}function kc(e,t){let n=rc(t,this.size,3);e.uniform3fv(this.addr,n)}function Ac(e,t){let n=rc(t,this.size,4);e.uniform4fv(this.addr,n)}function jc(e,t){let n=rc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Mc(e,t){let n=rc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Nc(e,t){let n=rc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Pc(e,t){e.uniform1iv(this.addr,t)}function Fc(e,t){e.uniform2iv(this.addr,t)}function Ic(e,t){e.uniform3iv(this.addr,t)}function Lc(e,t){e.uniform4iv(this.addr,t)}function Rc(e,t){e.uniform1uiv(this.addr,t)}function zc(e,t){e.uniform2uiv(this.addr,t)}function Bc(e,t){e.uniform3uiv(this.addr,t)}function Vc(e,t){e.uniform4uiv(this.addr,t)}function Hc(e,t,n){let r=this.cache,i=t.length,a=oc(n,i);ic(r,a)||(e.uniform1iv(this.addr,a),ac(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Js:qs;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Uc(e,t,n){let r=this.cache,i=t.length,a=oc(n,i);ic(r,a)||(e.uniform1iv(this.addr,a),ac(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Xs,a[e])}function Wc(e,t,n){let r=this.cache,i=t.length,a=oc(n,i);ic(r,a)||(e.uniform1iv(this.addr,a),ac(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Zs,a[e])}function Gc(e,t,n){let r=this.cache,i=t.length,a=oc(n,i);ic(r,a)||(e.uniform1iv(this.addr,a),ac(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Ys,a[e])}function Kc(e){switch(e){case 5126:return Dc;case 35664:return Oc;case 35665:return kc;case 35666:return Ac;case 35674:return jc;case 35675:return Mc;case 35676:return Nc;case 5124:case 35670:return Pc;case 35667:case 35671:return Fc;case 35668:case 35672:return Ic;case 35669:case 35673:return Lc;case 5125:return Rc;case 36294:return zc;case 36295:return Bc;case 36296:return Vc;case 35678:case 36198:case 36298:case 36306:case 35682:return Hc;case 35679:case 36299:case 36307:return Uc;case 35680:case 36300:case 36308:case 36293:return Wc;case 36289:case 36303:case 36311:case 36292:return Gc}}var qc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ec(t.type)}},Jc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kc(t.type)}},Yc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Xc=/(\w+)(\])?(\[|\.)?/g;function Zc(e,t){e.seq.push(t),e.map[t.id]=t}function Qc(e,t,n){let r=e.name,i=r.length;for(Xc.lastIndex=0;;){let a=Xc.exec(r),o=Xc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Zc(n,l===void 0?new qc(s,e,t):new Jc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Yc(s),Zc(n,e)),n=e}}}var $c=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Qc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function el(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var tl=37297,nl=0;function rl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var il=new Ot;function al(e){Nt._getMatrix(il,Nt.workingColorSpace,e);let t=`mat3( ${il.elements.map(e=>e.toFixed(4))} )`;switch(Nt.getTransfer(e)){case Ie:return[t,`LinearTransferOETF`];case Le:return[t,`sRGBTransferOETF`];default:return W(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function ol(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+rl(e.getShaderSource(t),r)}return i}function sl(e,t){let n=al(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var cl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function ll(e,t){let n=cl[t];return n===void 0?(W(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var ul=new q;function dl(){return Nt.getLuminanceCoefficients(ul),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${ul.x.toFixed(4)}, ${ul.y.toFixed(4)}, ${ul.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function fl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(hl).join(`
`)}function pl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function ml(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function hl(e){return e!==``}function gl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _l(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var vl=/^[ \t]*#include +<([\w\d./]+)>/gm;function yl(e){return e.replace(vl,xl)}var bl=new Map;function xl(e,t){let n=ss[t];if(n===void 0){let e=bl.get(t);if(e!==void 0)n=ss[e],W(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return yl(n)}var Sl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cl(e){return e.replace(Sl,wl)}function wl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Tl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var El={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Dl(e){return El[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Ol={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function kl(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Ol[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Al={302:`ENVMAP_MODE_REFRACTION`};function jl(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Al[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Ml={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Nl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Ml[e.combine]||`ENVMAP_BLENDING_NONE`}function Pl(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Fl(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Dl(n),l=kl(n),u=jl(n),d=Nl(n),f=Pl(n),p=fl(n),m=pl(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(hl).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(hl).join(`
`),_.length>0&&(_+=`
`)):(g=[Tl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(hl).join(`
`),_=[Tl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:ss.tonemapping_pars_fragment,n.toneMapping===0?``:ll(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,ss.colorspace_pars_fragment,sl(`linearToOutputTexel`,n.outputColorSpace),dl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(hl).join(`
`)),o=yl(o),o=gl(o,n),o=_l(o,n),s=yl(s),s=gl(s,n),s=_l(s,n),o=Cl(o),s=Cl(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=el(i,i.VERTEX_SHADER,y),S=el(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=ol(i,x,`vertex`),n=ol(i,S,`fragment`);G(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):W(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new $c(i,h),T=ml(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,tl)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=nl++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Il=0,Ll=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Rl(e),t.set(e,n)),n}},Rl=class{constructor(e){this.id=Il++,this.code=e,this.usedTimes=0}};function zl(e){return e===1030||e===37490||e===36285}function Bl(e,t,n,r,i,a){let o=new sn,s=new Ll,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&W(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,ee,k;if(C){let e=cs[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),ee=e.id,k=t.id}let te=e.getRenderTarget(),A=e.state.buffers.depth.getReversed(),j=h.isInstancedMesh===!0,M=h.isBatchedMesh===!0,ne=!!i.map,N=!!i.matcap,re=!!x,P=!!i.aoMap,ie=!!i.lightMap,ae=!!i.bumpMap&&i.wireframe===!1,F=!!i.normalMap,I=!!i.displacementMap,oe=!!i.emissiveMap,L=!!i.metalnessMap,se=!!i.roughnessMap,ce=i.anisotropy>0,le=i.clearcoat>0,ue=i.dispersion>0,de=i.iridescence>0,fe=i.sheen>0,pe=i.transmission>0,me=ce&&!!i.anisotropyMap,R=le&&!!i.clearcoatMap,he=le&&!!i.clearcoatNormalMap,ge=le&&!!i.clearcoatRoughnessMap,_e=de&&!!i.iridescenceMap,ve=de&&!!i.iridescenceThicknessMap,ye=fe&&!!i.sheenColorMap,be=fe&&!!i.sheenRoughnessMap,xe=!!i.specularMap,Se=!!i.specularColorMap,Ce=!!i.specularIntensityMap,we=pe&&!!i.transmissionMap,Te=pe&&!!i.thicknessMap,Ee=!!i.gradientMap,De=!!i.alphaMap,Oe=i.alphaTest>0,z=!!i.alphaHash,B=!!i.extensions,ke=0;i.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ke=e.toneMapping);let Ae={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:ee,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:M,batchingColor:M&&h._colorsTexture!==null,instancing:j,instancingColor:j&&h.instanceColor!==null,instancingMorph:j&&h.morphTexture!==null,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Nt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ne,matcap:N,envMap:re,envMapMode:re&&x.mapping,envMapCubeUVHeight:S,aoMap:P,lightMap:ie,bumpMap:ae,normalMap:F,displacementMap:I,emissiveMap:oe,normalMapObjectSpace:F&&i.normalMapType===1,normalMapTangentSpace:F&&i.normalMapType===0,packedNormalMap:F&&i.normalMapType===0&&zl(i.normalMap.format),metalnessMap:L,roughnessMap:se,anisotropy:ce,anisotropyMap:me,clearcoat:le,clearcoatMap:R,clearcoatNormalMap:he,clearcoatRoughnessMap:ge,dispersion:ue,iridescence:de,iridescenceMap:_e,iridescenceThicknessMap:ve,sheen:fe,sheenColorMap:ye,sheenRoughnessMap:be,specularMap:xe,specularColorMap:Se,specularIntensityMap:Ce,transmission:pe,transmissionMap:we,thicknessMap:Te,gradientMap:Ee,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:De,alphaTest:Oe,alphaHash:z,combine:i.combine,mapUv:ne&&m(i.map.channel),aoMapUv:P&&m(i.aoMap.channel),lightMapUv:ie&&m(i.lightMap.channel),bumpMapUv:ae&&m(i.bumpMap.channel),normalMapUv:F&&m(i.normalMap.channel),displacementMapUv:I&&m(i.displacementMap.channel),emissiveMapUv:oe&&m(i.emissiveMap.channel),metalnessMapUv:L&&m(i.metalnessMap.channel),roughnessMapUv:se&&m(i.roughnessMap.channel),anisotropyMapUv:me&&m(i.anisotropyMap.channel),clearcoatMapUv:R&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:he&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:be&&m(i.sheenRoughnessMap.channel),specularMapUv:xe&&m(i.specularMap.channel),specularColorMapUv:Se&&m(i.specularColorMap.channel),specularIntensityMapUv:Ce&&m(i.specularIntensityMap.channel),transmissionMapUv:we&&m(i.transmissionMap.channel),thicknessMapUv:Te&&m(i.thicknessMap.channel),alphaMapUv:De&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(F||ce),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ne||De),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&F===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:A,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:ke,decodeVideoTexture:ne&&i.map.isVideoTexture===!0&&Nt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:oe&&i.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:B&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(B&&i.extensions.multiDraw===!0||M)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=cs[t];n=Aa.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Fl(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Vl(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Hl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ul(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Wl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t,a){n.length>1&&n.sort(e||Hl),r.length>1&&r.sort(t||Ul),i.length>1&&i.sort(t||Ul),a&&(n.reverse(),r.reverse(),i.reverse())}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Gl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Wl,e.set(t,[i])):n>=r.length?(i=new Wl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Kl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new q,color:new J};break;case`SpotLight`:n={position:new q,direction:new q,color:new J,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new q,color:new J,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new q,skyColor:new J,groundColor:new J};break;case`RectAreaLight`:n={color:new J,position:new q,halfWidth:new q,halfHeight:new q}}return e[t.id]=n,n}}}function ql(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Jl=0;function Yl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Xl(e){let t=new Kl,n=ql(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new q);let i=new q,a=new Yt,o=new Yt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(Yl);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=X.LTC_FLOAT_1,r.rectAreaLTC2=X.LTC_FLOAT_2):(r.rectAreaLTC1=X.LTC_HALF_1,r.rectAreaLTC2=X.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Jl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function Zl(e){let t=new Xl(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Ql(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Zl(e),t.set(n,[a])):r>=i.length?(a=new Zl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var $l=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,tu=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],nu=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],ru=new Yt,iu=new q,au=new q;function ou(e,t,n){let r=new qi,a=new wt,o=new wt,c=new Wt,l=new La,u=new Ra,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new Na({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:$l,fragmentShader:eu}),v=m.clone();v.defines.HORIZONTAL_PASS=1;let y=new Tr;y.setAttribute(`position`,new Y(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new pi(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(W(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){W(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),o.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(o.x=Math.floor(f/y.x),a.x=o.x*y.x,p.mapSize.x=o.x),a.y>f&&(o.y=Math.floor(f/y.y),a.y=o.y*y.y,p.mapSize.y=o.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){W(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Kt(a.x,a.y,{format:k,type:_,minFilter:s,magFilter:s,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new _a(a.x,a.y,g),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=E,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=i,p.map.depthTexture.magFilter=i}else d.isPointLight?(p.map=new Ls(a.x),p.map.depthTexture=new va(a.x,h)):(p.map=new Kt(a.x,a.y),p.map.depthTexture=new _a(a.x,a.y,h)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=E,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=s,p.map.depthTexture.magFilter=s):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=i,p.map.depthTexture.magFilter=i);p.camera.updateProjectionMatrix()}let x=p.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<x;t++){if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),m.viewport(c)}if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),iu.setFromMatrixPosition(d.matrixWorld),e.position.copy(iu),au.copy(e.position),au.add(tu[t]),e.up.copy(nu[t]),e.lookAt(au),e.updateMatrixWorld(),n.makeTranslation(-iu.x,-iu.y,-iu.z),ru.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(ru,e.coordinateSystem,e.reversedDepth)}else p.updateMatrices(d);r=p.getFrustum(),T(n,l,p.camera,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Kt(a.x,a.y,{format:k,type:_})),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,m,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value=n.mapSize,v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)T(c[e],i,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function su(e,t){function n(){let t=!1,n=new Wt,r=null,i=new Wt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?L(e.DEPTH_TEST):se(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Xe[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?L(e.STENCIL_TEST):se(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new J(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,te=null,A=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,M=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),j=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(ne)[1]),j=M>=1);let N=null,re={},P=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new Wt().fromArray(P),F=new Wt().fromArray(ie);function I(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let oe={};oe[e.TEXTURE_2D]=I(e.TEXTURE_2D,e.TEXTURE_2D,1),oe[e.TEXTURE_CUBE_MAP]=I(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[e.TEXTURE_2D_ARRAY]=I(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),oe[e.TEXTURE_3D]=I(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),L(e.DEPTH_TEST),o.setFunc(3),R(!1),he(1),L(e.CULL_FACE),pe(0);function L(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function se(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ce(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function le(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ue(t){return h!==t&&(e.useProgram(t),h=t,!0)}let de={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};de[103]=e.MIN,de[104]=e.MAX;let fe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function pe(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(se(e.BLEND),g=!1);return}if(g===!1&&(L(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:G(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:G(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:G(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:G(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(de[n],de[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(fe[r],fe[i],fe[o],fe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function me(t,n){t.side===2?se(e.CULL_FACE):L(e.CULL_FACE);let r=t.side===1;n&&(r=!r),R(r),t.blending===1&&t.transparent===!1?pe(0):pe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),_e(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?L(e.SAMPLE_ALPHA_TO_COVERAGE):se(e.SAMPLE_ALPHA_TO_COVERAGE)}function R(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function he(t){t===0?se(e.CULL_FACE):(L(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ge(t){t!==ee&&(j&&e.lineWidth(t),ee=t)}function _e(t,n,r){t?(L(e.POLYGON_OFFSET_FILL),(k!==n||te!==r)&&(k=n,te=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):se(e.POLYGON_OFFSET_FILL)}function ve(t){t?L(e.SCISSOR_TEST):se(e.SCISSOR_TEST)}function ye(t){t===void 0&&(t=e.TEXTURE0+A-1),N!==t&&(e.activeTexture(t),N=t)}function be(t,n,r){r===void 0&&(r=N===null?e.TEXTURE0+A-1:N);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(N!==r&&(e.activeTexture(r),N=r),e.bindTexture(t,n||oe[t]),i.type=t,i.texture=n)}function xe(){let t=re[N];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Se(){try{e.compressedTexImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Ce(){try{e.compressedTexImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function we(){try{e.texSubImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Te(){try{e.texSubImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function De(){try{e.compressedTexSubImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Oe(){try{e.texStorage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function z(){try{e.texStorage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function B(){try{e.texImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function ke(){try{e.texImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Ae(t){return d[t]===void 0?e.getParameter(t):d[t]}function je(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function V(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function Me(t){F.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),F.copy(t))}function H(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function U(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ne(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},N=null,re={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new J(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,te=null,ae.set(0,0,e.canvas.width,e.canvas.height),F.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:L,disable:se,bindFramebuffer:ce,drawBuffers:le,useProgram:ue,setBlending:pe,setMaterial:me,setFlipSided:R,setCullFace:he,setLineWidth:ge,setPolygonOffset:_e,setScissorTest:ve,activeTexture:ye,bindTexture:be,unbindTexture:xe,compressedTexImage2D:Se,compressedTexImage3D:Ce,texImage2D:B,texImage3D:ke,pixelStorei:je,getParameter:Ae,updateUBOMapping:H,uniformBlockBinding:U,texStorage2D:Oe,texStorage3D:z,texSubImage2D:we,texSubImage3D:Te,compressedTexSubImage2D:Ee,compressedTexSubImage3D:De,scissor:V,viewport:Me,reset:Ne}}function cu(e,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new wt,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Ue(`canvas`)}function T(e,t,n){let r=1,i=Ae(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),W(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&W(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function O(t){e.generateMipmap(t)}function ee(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function k(t,n,r,i,a,o=!1){if(t!==null){if(e[t]!==void 0)return e[t];W(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+t+`'`)}let s;i&&(s=u.get(`EXT_texture_norm16`),s||W(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let c=n;if(n===e.RED&&(r===e.FLOAT&&(c=e.R32F),r===e.HALF_FLOAT&&(c=e.R16F),r===e.UNSIGNED_BYTE&&(c=e.R8),r===e.UNSIGNED_SHORT&&s&&(c=s.R16_EXT),r===e.SHORT&&s&&(c=s.R16_SNORM_EXT)),n===e.RED_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.R8UI),r===e.UNSIGNED_SHORT&&(c=e.R16UI),r===e.UNSIGNED_INT&&(c=e.R32UI),r===e.BYTE&&(c=e.R8I),r===e.SHORT&&(c=e.R16I),r===e.INT&&(c=e.R32I)),n===e.RG&&(r===e.FLOAT&&(c=e.RG32F),r===e.HALF_FLOAT&&(c=e.RG16F),r===e.UNSIGNED_BYTE&&(c=e.RG8),r===e.UNSIGNED_SHORT&&s&&(c=s.RG16_EXT),r===e.SHORT&&s&&(c=s.RG16_SNORM_EXT)),n===e.RG_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RG8UI),r===e.UNSIGNED_SHORT&&(c=e.RG16UI),r===e.UNSIGNED_INT&&(c=e.RG32UI),r===e.BYTE&&(c=e.RG8I),r===e.SHORT&&(c=e.RG16I),r===e.INT&&(c=e.RG32I)),n===e.RGB_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RGB8UI),r===e.UNSIGNED_SHORT&&(c=e.RGB16UI),r===e.UNSIGNED_INT&&(c=e.RGB32UI),r===e.BYTE&&(c=e.RGB8I),r===e.SHORT&&(c=e.RGB16I),r===e.INT&&(c=e.RGB32I)),n===e.RGBA_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RGBA8UI),r===e.UNSIGNED_SHORT&&(c=e.RGBA16UI),r===e.UNSIGNED_INT&&(c=e.RGBA32UI),r===e.BYTE&&(c=e.RGBA8I),r===e.SHORT&&(c=e.RGBA16I),r===e.INT&&(c=e.RGBA32I)),n===e.RGB&&(r===e.UNSIGNED_SHORT&&s&&(c=s.RGB16_EXT),r===e.SHORT&&s&&(c=s.RGB16_SNORM_EXT),r===e.UNSIGNED_INT_5_9_9_9_REV&&(c=e.RGB9_E5),r===e.UNSIGNED_INT_10F_11F_11F_REV&&(c=e.R11F_G11F_B10F)),n===e.RGBA){let t=o?Ie:Nt.getTransfer(a);r===e.FLOAT&&(c=e.RGBA32F),r===e.HALF_FLOAT&&(c=e.RGBA16F),r===e.UNSIGNED_BYTE&&(c=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),r===e.UNSIGNED_SHORT&&s&&(c=s.RGBA16_EXT),r===e.SHORT&&s&&(c=s.RGBA16_SNORM_EXT),r===e.UNSIGNED_SHORT_4_4_4_4&&(c=e.RGBA4),r===e.UNSIGNED_SHORT_5_5_5_1&&(c=e.RGB5_A1)}return(c===e.R16F||c===e.R32F||c===e.RG16F||c===e.RG32F||c===e.RGBA16F||c===e.RGBA32F)&&u.get(`EXT_color_buffer_float`),c}function te(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,W(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function A(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function j(e){let t=e.target;t.removeEventListener(`dispose`,j),ne(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),re(t)}function ne(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&N(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function N(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=S.get(r);delete i[n.__cacheKey],h.memory.textures--}function re(t){let n=f.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),f.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=f.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(r[t])}f.remove(t)}let P=0;function ie(){P=0}function ae(){return P}function F(e){P=e}function I(){let e=P;return e>=p.maxTextures&&W(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+p.maxTextures),P+=1,e}function oe(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function L(t,n){let r=f.get(t);if(t.isVideoTexture&&B(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)W(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)W(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ge(r,t,n);return}}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function se(t,n){let r=f.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){ge(r,t,n);return}t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null),d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n)}function ce(t,n){let r=f.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){ge(r,t,n);return}d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function le(t,n){let r=f.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&r.__version!==t.version){_e(r,t,n);return}d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let ue={[t]:e.REPEAT,[n]:e.CLAMP_TO_EDGE,[r]:e.MIRRORED_REPEAT},de={[i]:e.NEAREST,[a]:e.NEAREST_MIPMAP_NEAREST,[o]:e.NEAREST_MIPMAP_LINEAR,[s]:e.LINEAR,[c]:e.LINEAR_MIPMAP_NEAREST,[l]:e.LINEAR_MIPMAP_LINEAR},fe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function pe(t,n){if(n.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(n.magFilter===1006||n.magFilter===1007||n.magFilter===1005||n.magFilter===1008||n.minFilter===1006||n.minFilter===1007||n.minFilter===1005||n.minFilter===1008)&&W(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(t,e.TEXTURE_WRAP_S,ue[n.wrapS]),e.texParameteri(t,e.TEXTURE_WRAP_T,ue[n.wrapT]),(t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY)&&e.texParameteri(t,e.TEXTURE_WRAP_R,ue[n.wrapR]),e.texParameteri(t,e.TEXTURE_MAG_FILTER,de[n.magFilter]),e.texParameteri(t,e.TEXTURE_MIN_FILTER,de[n.minFilter]),n.compareFunction&&(e.texParameteri(t,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(t,e.TEXTURE_COMPARE_FUNC,fe[n.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(n.magFilter===1003||n.minFilter!==1005&&n.minFilter!==1008||n.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(n.anisotropy>1||f.get(n).__currentAnisotropy){let r=u.get(`EXT_texture_filter_anisotropic`);e.texParameterf(t,r.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(n.anisotropy,p.getMaxAnisotropy())),f.get(n).__currentAnisotropy=n.anisotropy}}}function me(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,j));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=oe(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&N(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function R(e,t,n){return Math.floor(Math.floor(e/n)/t)}function he(t,n,r,i){let a=t.updateRanges;if(a.length===0)d.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,r,i,n.data);else{a.sort((e,t)=>e.start-t.start);let o=0;for(let e=1;e<a.length;e++){let t=a[o],r=a[e],i=t.start+t.count,s=R(r.start,n.width,4),c=R(t.start,n.width,4);r.start<=i+1&&s===c&&R(r.start+r.count-1,n.width,4)===s?t.count=Math.max(t.count,r.start+r.count-t.start):(++o,a[o]=r)}a.length=o+1;let s=d.getParameter(e.UNPACK_ROW_LENGTH),c=d.getParameter(e.UNPACK_SKIP_PIXELS),l=d.getParameter(e.UNPACK_SKIP_ROWS);d.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,o=a.length;t<o;t++){let o=a[t],s=Math.floor(o.start/4),c=Math.ceil(o.count/4),l=s%n.width,u=Math.floor(s/n.width),f=c;d.pixelStorei(e.UNPACK_SKIP_PIXELS,l),d.pixelStorei(e.UNPACK_SKIP_ROWS,u),d.texSubImage2D(e.TEXTURE_2D,0,l,u,f,1,r,i,n.data)}t.clearUpdateRanges(),d.pixelStorei(e.UNPACK_ROW_LENGTH,s),d.pixelStorei(e.UNPACK_SKIP_PIXELS,c),d.pixelStorei(e.UNPACK_SKIP_ROWS,l)}}function ge(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=me(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=f.get(o);if(o.version!==s.__version||a===!0){if(d.activeTexture(e.TEXTURE0+r),!(typeof ImageBitmap<`u`&&n.image instanceof ImageBitmap)){let t=Nt.getPrimaries(Nt.workingColorSpace),r=n.colorSpace===``?null:Nt.getPrimaries(n.colorSpace),i=n.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment);let t=T(n.image,!1,p.maxTextureSize);t=ke(n,t);let c=m.convert(n.format,n.colorSpace),l=m.convert(n.type),u=k(n.internalFormat,c,l,n.normalized,n.colorSpace,n.isVideoTexture);pe(i,n);let f,h=n.mipmaps,g=n.isVideoTexture!==!0,_=s.__version===void 0||a===!0,v=o.dataReady,y=A(n,t);if(n.isDepthTexture)u=te(n.format===D,n.type),_&&(g?d.texStorage2D(e.TEXTURE_2D,1,u,t.width,t.height):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,null));else if(n.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data);n.generateMipmaps=!1}else g?(_&&d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height),v&&he(n,t,c,l)):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,t.data)}else if(n.isCompressedTexture){if(n.isCompressedArrayTexture){g&&_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,t.depth);for(let r=0,i=h.length;r<i;r++)if(f=h[r],n.format!==1023){if(c!==null){if(g){if(v){if(n.layerUpdates.size>0){let t=rs(f.width,f.height,n.format,n.type);for(let i of n.layerUpdates){let n=f.data.subarray(i*t/f.data.BYTES_PER_ELEMENT,(i+1)*t/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,i,f.width,f.height,1,c,n)}n.clearLayerUpdates()}else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,f.data)}}else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,f.data,0,0)}else W(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,l,f.data):d.texImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,c,l,f.data)}else{g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,r=h.length;t<r;t++)f=h[t],n.format===1023?g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data):c===null?W(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,f.data):d.compressedTexImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,f.data)}}else if(n.isDataArrayTexture){if(g){if(_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,t.width,t.height,t.depth),v){if(n.layerUpdates.size>0){let r=rs(t.width,t.height,n.format,n.type);for(let i of n.layerUpdates){let n=t.data.subarray(i*r/t.data.BYTES_PER_ELEMENT,(i+1)*r/t.data.BYTES_PER_ELEMENT);d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,i,t.width,t.height,1,c,l,n)}n.clearLayerUpdates()}else d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)}}else d.texImage3D(e.TEXTURE_2D_ARRAY,0,u,t.width,t.height,t.depth,0,c,l,t.data)}else if(n.isData3DTexture)g?(_&&d.texStorage3D(e.TEXTURE_3D,y,u,t.width,t.height,t.depth),v&&d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)):d.texImage3D(e.TEXTURE_3D,0,u,t.width,t.height,t.depth,0,c,l,t.data);else if(n.isFramebufferTexture){if(_){if(g)d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height);else{let n=t.width,r=t.height;for(let t=0;t<y;t++)d.texImage2D(e.TEXTURE_2D,t,u,n,r,0,c,l,null),n>>=1,r>>=1}}}else if(n.isHTMLTexture){if(`texElementImage2D`in e){let r=e.canvas;if(r.hasAttribute(`layoutsubtree`)||r.setAttribute(`layoutsubtree`,`true`),t.parentNode!==r){r.appendChild(t),b.add(n),r.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},r.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Ae(h[0]);d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height)}for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,c,l,f):d.texImage2D(e.TEXTURE_2D,t,u,c,l,f);n.generateMipmaps=!1}else if(g){if(_){let n=Ae(t);d.texStorage2D(e.TEXTURE_2D,y,u,n.width,n.height)}v&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,c,l,t)}else d.texImage2D(e.TEXTURE_2D,0,u,c,l,t);E(n)&&O(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function _e(t,n,r){if(n.image.length!==6)return;let i=me(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=Nt.getPrimaries(Nt.workingColorSpace),s=n.colorSpace===``?null:Nt.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=T(n.image[e],!0,p.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=ke(n,f[e]);let h=f[0],g=m.convert(n.format,n.colorSpace),_=m.convert(n.type),v=k(n.internalFormat,g,_,n.normalized,n.colorSpace),y=n.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=A(n,h);pe(e.TEXTURE_CUBE_MAP,n);let C;if(l){y&&b&&d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?W(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=Ae(f[0]);d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(u){y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let n=0;n<C.length;n++){let r=C[n].image[t].image;y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,r.width,r.height,0,g,_,r.data)}}else{y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let n=0;n<C.length;n++){let r=C[n];y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,r.image[t])}}}E(n)&&O(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function ve(t,n,r,i,a,o){let s=m.convert(r.format,r.colorSpace),c=m.convert(r.type),l=k(r.internalFormat,s,c,r.normalized,r.colorSpace),u=f.get(n),p=f.get(r);if(p.__renderTarget=n,!u.__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),z(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,p.__webglTexture,0,Oe(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,p.__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function ye(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=te(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;z(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Oe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Oe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=k(a.internalFormat,o,s,a.normalized,a.colorSpace);z(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Oe(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Oe(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function be(t,n,r){let i=n.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let a=f.get(n.depthTexture);if(a.__renderTarget=n,(!a.__webglTexture||n.depthTexture.image.width!==n.width||n.depthTexture.image.height!==n.height)&&(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),i){if(a.__webglInit===void 0&&(a.__webglInit=!0,n.depthTexture.addEventListener(`dispose`,j)),a.__webglTexture===void 0){a.__webglTexture=e.createTexture(),d.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture),pe(e.TEXTURE_CUBE_MAP,n.depthTexture);let t=m.convert(n.depthTexture.format),r=m.convert(n.depthTexture.type),i;n.depthTexture.format===1026?i=e.DEPTH_COMPONENT24:n.depthTexture.format===1027&&(i=e.DEPTH24_STENCIL8);for(let a=0;a<6;a++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,i,n.width,n.height,0,t,r,null)}}else L(n.depthTexture,0);let o=a.__webglTexture,s=Oe(n),c=i?e.TEXTURE_CUBE_MAP_POSITIVE_X+r:e.TEXTURE_2D,l=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)z(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else if(n.depthTexture.format===1027)z(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function xe(t){let n=f.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(r)for(let e=0;e<6;e++)be(n.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?be(n.__webglFramebuffer[0],t,0):be(n.__webglFramebuffer,t,0)}}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),ye(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),ye(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}}d.bindFramebuffer(e.FRAMEBUFFER,null)}function Se(t,n,r){let i=f.get(t);n!==void 0&&ve(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&xe(t)}function Ce(t){let n=t.texture,r=f.get(t),i=f.get(n);t.addEventListener(`dispose`,M);let a=t.textures,o=t.isWebGLCubeRenderTarget===!0,s=a.length>1;if(s||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,h.memory.textures++),o){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(s)for(let t=0,n=a.length;t<n;t++){let n=f.get(a[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&z(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){let i=a[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=m.convert(i.format,i.colorSpace),s=m.convert(i.type),c=k(i.internalFormat,o,s,i.normalized,i.colorSpace,t.isXRRenderTarget===!0),l=Oe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),ye(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(o){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),pe(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps&&n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)ve(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else ve(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);E(n)&&O(e.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(s){for(let n=0,i=a.length;n<i;n++){let i=a[n],o=f.get(i),s=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(s,o.__webglTexture),pe(s,i),ve(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,s,0),E(i)&&O(s)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(a,i.__webglTexture),pe(a,n),n.mipmaps&&n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)ve(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else ve(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);E(n)&&O(a),d.unbindTexture()}t.depthBuffer&&xe(t)}function we(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(E(r)){let t=ee(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),O(t),d.unbindTexture()}}}let Te=[],Ee=[];function De(t){if(t.samples>0){if(z(t)===!1){let n=t.textures,r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,s=f.get(t),c=n.length>1;if(c)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer);let l=t.texture.mipmaps;l&&l.length>0?d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer[0]):d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let l=0;l<n.length;l++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),c){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,s.__webglColorRenderbuffer[l]);let t=f.get(n[l]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),_===!0&&(Te.length=0,Ee.length=0,Te.push(e.COLOR_ATTACHMENT0+l),t.depthBuffer&&t.resolveDepthBuffer===!1&&(Te.push(o),Ee.push(o),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ee)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Te))}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),c)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,s.__webglColorRenderbuffer[t]);let r=f.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Oe(e){return Math.min(p.maxSamples,e.samples)}function z(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function B(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function ke(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Nt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&W(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):G(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ae(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=I,this.resetTextureUnits=ie,this.getTextureUnits=ae,this.setTextureUnits=F,this.setTexture2D=L,this.setTexture2DArray=se,this.setTexture3D=ce,this.setTextureCube=le,this.rebindTextures=Se,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=z,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function lu(e,t){function n(n,r=``){let i,a=Nt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var uu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,du=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,fu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ya(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Na({vertexShader:uu,fragmentShader:du,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pi(new xa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},pu=class extends Ze{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,d=null,f=null,p=null,m=null,g=typeof XRWebGLBinding<`u`,_=new fu,v={},y=t.getContextAttributes(),x=null,S=null,C=[],w=[],O=new wt,ee=null,k=new ko;k.viewport=new Wt;let te=new ko;te.viewport=new Wt;let A=[k,te],j=new Wo,M=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new En,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new En,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new En,C[e]=t),t.getHandSpace()};function N(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function re(){r.removeEventListener(`select`,N),r.removeEventListener(`selectstart`,N),r.removeEventListener(`selectend`,N),r.removeEventListener(`squeeze`,N),r.removeEventListener(`squeezestart`,N),r.removeEventListener(`squeezeend`,N),r.removeEventListener(`end`,re),r.removeEventListener(`inputsourceschange`,P);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}M=null,ne=null,_.reset();for(let e in v)delete v[e];e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(ee),e.setSize(O.width,O.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&W(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&W(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,N),r.addEventListener(`selectstart`,N),r.addEventListener(`selectend`,N),r.addEventListener(`squeeze`,N),r.addEventListener(`squeezestart`,N),r.addEventListener(`squeezeend`,N),r.addEventListener(`end`,re),r.addEventListener(`inputsourceschange`,P),y.xrCompatible!==!0&&await t.makeXRCompatible(),ee=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?D:E,a=y.stencil?b:h);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Kt(f.textureWidth,f.textureHeight,{format:T,type:u,depthTexture:new _a(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Kt(p.framebufferWidth,p.framebufferHeight,{format:T,type:u,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ce.setContext(r),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function P(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let ie=new q,ae=new q;function F(e,t,n){ie.setFromMatrixPosition(t.matrixWorld),ae.setFromMatrixPosition(n.matrixWorld);let r=ie.distanceTo(ae),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function I(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),j.near=te.near=k.near=t,j.far=te.far=k.far=n,(M!==j.near||ne!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),M=j.near,ne=j.far),j.layers.mask=e.layers.mask|6,k.layers.mask=j.layers.mask&-5,te.layers.mask=j.layers.mask&-3;let i=e.parent,a=j.cameras;I(j,i);for(let e=0;e<a.length;e++)I(a[e],i);a.length===2?F(j,k,te):j.projectionMatrix.copy(k.projectionMatrix),oe(e,j,i)};function oe(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=tt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(j)},this.getCameraTexture=function(e){return v[e]};let L=null;function se(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==j.cameras.length&&(j.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=A[n];o===void 0&&(o=new ko,o.layers.enable(n),o.viewport=new Wt,A[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),i===!0&&j.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new ya,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}L&&L(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let ce=new as;ce.setAnimationLoop(se),this.setAnimationLoop=function(e){L=e},this.dispose=function(){}}},mu=new Yt,hu=new Ot;hu.set(-1,0,0,0,1,0,0,0,1);function gu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ka(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(mu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(hu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function _u(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return G(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?W(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):W(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var vu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),yu=null;function bu(){return yu===null&&(yu=new Di(vu,16,16,k,_),yu.name=`DFG_LUT`,yu.minFilter=s,yu.magFilter=s,yu.wrapS=n,yu.wrapT=n,yu.generateMipmaps=!1,yu.needsUpdate=!0),yu}var xu=class{constructor(e={}){let{canvas:t=We(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:m=!1,outputBufferType:g=u}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=g,C=new Set([A,te,ee]),w=new Set([u,h,p,b,v,y]),T=new Uint32Array(4),E=new Int32Array(4),D=new q,O=null,k=null,j=[],M=[],ne=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,re=!1,P=null,ie=null,ae=null,F=null;this._outputColorSpace=Pe;let I=0,oe=0,L=null,se=-1,ce=null,le=new Wt,ue=new Wt,de=null,fe=new J(0),pe=0,me=t.width,R=t.height,he=1,ge=null,_e=null,ve=new Wt(0,0,me,R),ye=new Wt(0,0,me,R),be=!1,xe=new qi,Se=!1,Ce=!1,we=new Yt,Te=new q,Ee=new Wt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function z(){return L===null?he:1}let B=n;function ke(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r185`),t.addEventListener(`webglcontextlost`,K,!1),t.addEventListener(`webglcontextrestored`,rt,!1),t.addEventListener(`webglcontextcreationerror`,it,!1),B===null){let t=`webgl2`;if(B=ke(t,e),B===null)throw ke(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(e){throw G(`WebGLRenderer: `+e.message),e}let Ae,je,V,Me,H,U,Ne,Fe,Ie,Le,Re,ze,Ve,He,Ue,Ge,qe,Je,Xe,Ze,Qe,$e,et;function tt(){Ae=new zs(B),Ae.init(),Qe=new lu(B,Ae),je=new hs(B,Ae,e,Qe),V=new su(B,Ae),je.reversedDepthBuffer&&m&&V.buffers.depth.setReversed(!0),ie=B.createFramebuffer(),ae=B.createFramebuffer(),F=B.createFramebuffer(),Me=new Hs(B),H=new Vl,U=new cu(B,Ae,V,H,je,Qe,Me),Ne=new Rs(N),Fe=new os(B),$e=new ps(B,Fe),Ie=new Bs(B,Fe,Me,$e),Le=new Ws(B,Ie,Fe,$e,Me),Je=new Us(B,je,U),Ue=new gs(H),Re=new Bl(N,Ne,Ae,je,$e,Ue),ze=new gu(N,H),Ve=new Gl,He=new Ql(Ae),qe=new fs(N,Ne,V,Le,x,s),Ge=new ou(N,Le,je),et=new _u(B,Me,je,V),Xe=new ms(B,Ae,Me),Ze=new Vs(B,Ae,Me),Me.programs=Re.programs,N.capabilities=je,N.extensions=Ae,N.properties=H,N.renderLists=Ve,N.shadowMap=Ge,N.state=V,N.info=Me}tt(),S!==1009&&(ne=new Ks(S,t.width,t.height,o,r,i));let nt=new pu(N,B);this.xr=nt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let e=Ae.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ae.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(e){e!==void 0&&(he=e,this.setSize(me,R,!1))},this.getSize=function(e){return e.set(me,R)},this.setSize=function(e,n,r=!0){if(nt.isPresenting){W(`WebGLRenderer: Can't change size while VR device is presenting.`);return}me=e,R=n,t.width=Math.floor(e*he),t.height=Math.floor(n*he),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ne!==null&&ne.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(me*he,R*he).floor()},this.setDrawingBufferSize=function(e,n,r){me=e,R=n,he=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009){G(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){W(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ne.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(le)},this.getViewport=function(e){return e.copy(ve)},this.setViewport=function(e,t,n,r){e.isVector4?ve.set(e.x,e.y,e.z,e.w):ve.set(e,t,n,r),V.viewport(le.copy(ve).multiplyScalar(he).round())},this.getScissor=function(e){return e.copy(ye)},this.setScissor=function(e,t,n,r){e.isVector4?ye.set(e.x,e.y,e.z,e.w):ye.set(e,t,n,r),V.scissor(ue.copy(ye).multiplyScalar(he).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(e){V.setScissorTest(be=e)},this.setOpaqueSort=function(e){ge=e},this.setTransparentSort=function(e){_e=e},this.getClearColor=function(e){return e.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(L!==null){let t=L.texture.format;e=C.has(t)}if(e){let e=L.texture.type,t=w.has(e),n=qe.getClearColor(),r=qe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,B.clearBufferuiv(B.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,B.clearBufferiv(B.COLOR,0,E))}else r|=B.COLOR_BUFFER_BIT}t&&(r|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&B.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),P=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,K,!1),t.removeEventListener(`webglcontextrestored`,rt,!1),t.removeEventListener(`webglcontextcreationerror`,it,!1),qe.dispose(),Ve.dispose(),He.dispose(),H.dispose(),Ne.dispose(),Le.dispose(),$e.dispose(),et.dispose(),Re.dispose(),nt.dispose(),nt.removeEventListener(`sessionstart`,dt),nt.removeEventListener(`sessionend`,ft),pt.stop()};function K(e){e.preventDefault(),Ke(`WebGLRenderer: Context Lost.`),re=!0}function rt(){Ke(`WebGLRenderer: Context Restored.`),re=!1;let e=Me.autoReset,t=Ge.enabled,n=Ge.autoUpdate,r=Ge.needsUpdate,i=Ge.type;tt(),Me.autoReset=e,Ge.enabled=t,Ge.autoUpdate=n,Ge.needsUpdate=r,Ge.type=i}function it(e){G(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function at(e){let t=e.target;t.removeEventListener(`dispose`,at),ot(t)}function ot(e){st(e),H.remove(e)}function st(e){let t=H.get(e).programs;t!==void 0&&(t.forEach(function(e){Re.releaseProgram(e)}),e.isShaderMaterial&&Re.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=De);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Ct(e,t,n,r,i);V.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ie.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;$e.setup(i,r,s,n,c);let h,g=Xe;if(c!==null&&(h=Fe.get(c),g=Ze,g.setIndex(h)),i.isMesh)r.wireframe===!0?(V.setLineWidth(r.wireframeLinewidth*z()),g.setMode(B.LINES)):g.setMode(B.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),V.setLineWidth(e*z()),i.isLineSegments?g.setMode(B.LINES):i.isLineLoop?g.setMode(B.LINE_LOOP):g.setMode(B.LINE_STRIP)}else i.isPoints?g.setMode(B.POINTS):i.isSprite&&g.setMode(B.TRIANGLES);if(i.isBatchedMesh){if(Ae.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Fe.get(c).bytesPerElement:1,o=H.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(B,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ct(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,yt(e,t,n),e.side=0,e.needsUpdate=!0,yt(e,t,n),e.side=2):yt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),k=He.get(n),k.init(t),M.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];ct(a,n,e),r.add(a)}else ct(t,n,e),r.add(t)}}),k=M.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){H.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Ae.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let lt=null;function ut(e){lt&&lt(e)}function dt(){pt.stop()}function ft(){pt.start()}let pt=new as;pt.setAnimationLoop(ut),typeof self<`u`&&pt.setContext(self),this.setAnimationLoop=function(e){lt=e,nt.setAnimationLoop(e),e===null?pt.stop():pt.start()},nt.addEventListener(`sessionstart`,dt),nt.addEventListener(`sessionend`,ft),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){G(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(re===!0)return;P!==null&&P.renderStart(e,t);let n=nt.enabled===!0&&nt.isPresenting===!0,r=ne!==null&&(L===null||n)&&ne.begin(N,L);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(ne===null||ne.isCompositing()===!1)&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(t),t=nt.getCamera()),e.isScene===!0&&e.onBeforeRender(N,e,t,L),k=He.get(e,M.length),k.init(t),k.state.textureUnits=U.getTextureUnits(),M.push(k),we.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),xe.setFromProjectionMatrix(we,Be,t.reversedDepth),Ce=this.localClippingEnabled,Se=Ue.init(this.clippingPlanes,Ce),O=Ve.get(e,j.length),O.init(),j.push(O),nt.enabled===!0&&nt.isPresenting===!0){let e=N.xr.getDepthSensingMesh();e!==null&&mt(e,t,-1/0,N.sortObjects)}mt(e,t,0,N.sortObjects),O.finish(),N.sortObjects===!0&&O.sort(ge,_e,t.reversedDepth),Oe=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,Oe&&qe.addToRenderList(O,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Se===!0&&Ue.beginShadows();let i=k.state.shadowsArray;if(Ge.render(i,e,t),Se===!0&&Ue.endShadows(),(r&&ne.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];gt(n,r,e,a)}Oe&&qe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];ht(O,e,n,n.viewport)}}else r.length>0&&gt(n,r,e,t),Oe&&qe.render(e),ht(O,e,t)}L!==null&&oe===0&&(U.updateMultisampleRenderTarget(L),U.updateRenderTargetMipmap(L)),r&&ne.end(N),e.isScene===!0&&e.onAfterRender(N,e,t),$e.resetDefaultState(),se=-1,ce=null,M.pop(),M.length>0?(k=M[M.length-1],U.setTextureUnits(k.state.textureUnits),Se===!0&&Ue.setGlobalState(N.clippingPlanes,k.state.camera)):k=null,j.pop(),O=j.length>0?j[j.length-1]:null,P!==null&&P.renderEnd()};function mt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)k.pushLightProbeGrid(e);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||xe.intersectsSprite(e)){r&&Ee.setFromMatrixPosition(e.matrixWorld).applyMatrix4(we);let t=Le.update(e),i=e.material;i.visible&&O.push(e,t,i,n,Ee.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||xe.intersectsObject(e))){let t=Le.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),Ee.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ee.copy(e.boundingSphere.center)),Ee.applyMatrix4(e.matrixWorld).applyMatrix4(we)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&O.push(e,t,s,n,Ee.z,o)}}else i.visible&&O.push(e,t,i,n,Ee.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)mt(i[e],t,n,r)}function ht(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),Se===!0&&Ue.setGlobalState(N.clippingPlanes,n),r&&V.viewport(le.copy(r)),i.length>0&&_t(i,t,n),a.length>0&&_t(a,t,n),o.length>0&&_t(o,t,n),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function gt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Ae.has(`EXT_color_buffer_half_float`)||Ae.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new Kt(1,1,{generateMipmaps:!0,type:e?_:u,minFilter:l,samples:Math.max(4,je.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Nt.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||le;a.setSize(o.z*N.transmissionResolutionScale,o.w*N.transmissionResolutionScale);let s=N.getRenderTarget(),c=N.getActiveCubeFace(),d=N.getActiveMipmapLevel();N.setRenderTarget(a),N.getClearColor(fe),pe=N.getClearAlpha(),pe<1&&N.setClearColor(16777215,.5),N.clear(),Oe&&qe.render(n);let f=N.toneMapping;N.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),Se===!0&&Ue.setGlobalState(N.clippingPlanes,r),_t(e,n,r),U.updateMultisampleRenderTarget(a),U.updateRenderTargetMipmap(a),Ae.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,vt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(U.updateMultisampleRenderTarget(a),U.updateRenderTargetMipmap(a))}N.setRenderTarget(s,c,d),N.setClearColor(fe,pe),p!==void 0&&(r.viewport=p),N.toneMapping=f}function _t(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&vt(o,t,n,s,l,c)}}function vt(e,t,n,r,i,a){e.onBeforeRender(N,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(N,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=2):N.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(N,t,n,r,i,a)}function yt(e,t,n){t.isScene!==!0&&(t=De);let r=H.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=Re.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=Re.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ne.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,at),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return xt(e,s),d}else s.uniforms=Re.getUniforms(e),P!==null&&e.isNodeMaterial&&P.build(e,n,s),e.onBeforeCompile(s,N),d=Re.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ue.uniform),xt(e,s),r.needsLights=Tt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=k.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function bt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=$c.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function xt(e,t){let n=H.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function St(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function Ct(e,t,n,r,i){t.isScene!==!0&&(t=De),U.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=L===null?N.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Nt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ne.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(h=N.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=H.get(r),y=k.state.lights;if(Se===!0&&(Ce===!0||e!==ce)){let t=e===ce&&r.id===se;Ue.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ue.numPlanes||v.numIntersection!==Ue.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=k.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=yt(r,t,i),P&&r.isNodeMaterial&&P.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(V.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==se&&(se=r.id,C=!0),v.needsLights){let e=St(k.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||ce!==e){V.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(B,`projectionMatrix`,e.projectionMatrix),T.setValue(B,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(B,Te.setFromMatrixPosition(e.matrixWorld)),je.logarithmicDepthBuffer&&T.setValue(B,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(B,`isOrthographic`,e.isOrthographicCamera===!0),ce!==e&&(ce=e,C=!0,w=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&T.setValue(B,`directionalShadowMap`,y.state.directionalShadowMap,U),y.state.spotShadowMap.length>0&&T.setValue(B,`spotShadowMap`,y.state.spotShadowMap,U),y.state.pointShadowMap.length>0&&T.setValue(B,`pointShadowMap`,y.state.pointShadowMap,U)),i.isSkinnedMesh){T.setOptional(B,i,`bindMatrix`),T.setOptional(B,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(B,`boneTexture`,e.boneTexture,U))}i.isBatchedMesh&&(T.setOptional(B,i,`batchingTexture`),T.setValue(B,`batchingTexture`,i._matricesTexture,U),T.setOptional(B,i,`batchingIdTexture`),T.setValue(B,`batchingIdTexture`,i._indirectTexture,U),T.setOptional(B,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(B,`batchingColorTexture`,i._colorsTexture,U));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Je.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(B,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=bu()),C){if(T.setValue(B,`toneMappingExposure`,N.toneMappingExposure),v.needsLights&&wt(E,w),a&&r.fog===!0&&ze.refreshFogUniforms(E,a),ze.refreshMaterialUniforms(E,r,he,R,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}$c.upload(B,bt(v),E,U)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&($c.upload(B,bt(v),E,U),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(B,`center`,i.center),T.setValue(B,`modelViewMatrix`,i.modelViewMatrix),T.setValue(B,`normalMatrix`,i.normalMatrix),T.setValue(B,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];et.update(n,x),et.bind(n,x)}}return x}function wt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Tt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return oe},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(e,t,n){let r=H.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),H.get(e.texture).__webglTexture=t,H.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=H.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){L=e,I=t,oe=n;let r=null,i=!1,a=!1;if(e){let o=H.get(e);if(o.__useDefaultFramebuffer!==void 0){V.bindFramebuffer(B.FRAMEBUFFER,o.__webglFramebuffer),le.copy(e.viewport),ue.copy(e.scissor),de=e.scissorTest,V.viewport(le),V.scissor(ue),V.setScissorTest(de),se=-1;return}if(o.__webglFramebuffer===void 0)U.setupRenderTarget(e);else if(o.__hasExternalTextures)U.rebindTextures(e,H.get(e.texture).__webglTexture,H.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&H.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);U.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=H.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&U.useMultisampledRTT(e)===!1?H.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,le.copy(e.viewport),ue.copy(e.scissor),de=e.scissorTest}else le.copy(ve).multiplyScalar(he).floor(),ue.copy(ye).multiplyScalar(he).floor(),de=be;if(n!==0&&(r=ie),V.bindFramebuffer(B.FRAMEBUFFER,r)&&V.drawBuffers(e,r),V.viewport(le),V.scissor(ue),V.setScissorTest(de),i){let r=H.get(e.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=H.get(e.textures[t]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=H.get(e.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,t.__webglTexture,n)}se=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){G(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=H.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){V.bindFramebuffer(B.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+s),!je.textureFormatReadable(c)){G(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!je.textureTypeReadable(l)){G(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&B.readPixels(t,n,r,i,Qe.convert(c),Qe.convert(l),a)}finally{let e=L===null?null:H.get(L).__webglFramebuffer;V.bindFramebuffer(B.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=H.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){V.bindFramebuffer(B.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+s),!je.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!je.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,d),B.bufferData(B.PIXEL_PACK_BUFFER,a.byteLength,B.STREAM_READ),B.readPixels(t,n,r,i,Qe.convert(l),Qe.convert(u),0);let f=L===null?null:H.get(L).__webglFramebuffer;V.bindFramebuffer(B.FRAMEBUFFER,f);let p=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Ye(B,p,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,d),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,a),B.deleteBuffer(d),B.deleteSync(p),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;U.setTexture2D(e,0),B.copyTexSubImage2D(B.TEXTURE_2D,n,0,0,o,s,i,a),V.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Qe.convert(t.format),_=Qe.convert(t.type),v;t.isData3DTexture?(U.setTexture3D(t,0),v=B.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(U.setTexture2DArray(t,0),v=B.TEXTURE_2D_ARRAY):(U.setTexture2D(t,0),v=B.TEXTURE_2D),V.activeTexture(B.TEXTURE0),V.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,t.flipY),V.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),V.pixelStorei(B.UNPACK_ALIGNMENT,t.unpackAlignment);let y=V.getParameter(B.UNPACK_ROW_LENGTH),b=V.getParameter(B.UNPACK_IMAGE_HEIGHT),x=V.getParameter(B.UNPACK_SKIP_PIXELS),S=V.getParameter(B.UNPACK_SKIP_ROWS),C=V.getParameter(B.UNPACK_SKIP_IMAGES);V.pixelStorei(B.UNPACK_ROW_LENGTH,h.width),V.pixelStorei(B.UNPACK_IMAGE_HEIGHT,h.height),V.pixelStorei(B.UNPACK_SKIP_PIXELS,l),V.pixelStorei(B.UNPACK_SKIP_ROWS,u),V.pixelStorei(B.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=H.get(e),r=H.get(t),h=H.get(n.__renderTarget),g=H.get(r.__renderTarget);V.bindFramebuffer(B.READ_FRAMEBUFFER,h.__webglFramebuffer),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,H.get(e).__webglTexture,i,d+n),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,H.get(t).__webglTexture,a,m+n)),B.blitFramebuffer(l,u,o,s,f,p,o,s,B.DEPTH_BUFFER_BIT,B.NEAREST);V.bindFramebuffer(B.READ_FRAMEBUFFER,null),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||H.has(e)){let n=H.get(e),r=H.get(t);V.bindFramebuffer(B.READ_FRAMEBUFFER,ae),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,F);for(let e=0;e<c;e++)w?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,n.__webglTexture,i),T?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,r.__webglTexture,a),i===0?T?B.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):B.copyTexSubImage2D(v,a,f,p,l,u,o,s):B.blitFramebuffer(l,u,o,s,f,p,o,s,B.COLOR_BUFFER_BIT,B.NEAREST);V.bindFramebuffer(B.READ_FRAMEBUFFER,null),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?B.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?B.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):B.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):B.texSubImage2D(B.TEXTURE_2D,a,f,p,o,s,g,_,h);V.pixelStorei(B.UNPACK_ROW_LENGTH,y),V.pixelStorei(B.UNPACK_IMAGE_HEIGHT,b),V.pixelStorei(B.UNPACK_SKIP_PIXELS,x),V.pixelStorei(B.UNPACK_SKIP_ROWS,S),V.pixelStorei(B.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&B.generateMipmap(v),V.unbindTexture()},this.initRenderTarget=function(e){H.get(e).__webglFramebuffer===void 0&&U.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?U.setTextureCube(e,0):e.isData3DTexture?U.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?U.setTexture2DArray(e,0):U.setTexture2D(e,0),V.unbindTexture()},this.resetState=function(){I=0,oe=0,L=null,V.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Be}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Nt._getUnpackColorSpace()}},Su=new q(0,0,1),Cu=new Yt,wu=new Tt,Tu=new q,Eu=new q,Du=class{constructor(e,t){this.camera=e,this.dom=t,this.pos=new Float64Array(3),this.quat=new Tt,this.mode=`orbit`,this.focus=null,this.focusPos=new Float64Array(3),this.dist=1e5,this.yaw=.6,this.pitch=.35,this.speedMul=1,this.flySpeed=0,this.nearestSurface=1e9,this.keys=new Set,this.transition=null,this.onModeChange=null,this._drag=null,this._bind()}_bind(){let e=this.dom;e.addEventListener(`contextmenu`,e=>e.preventDefault()),e.addEventListener(`pointerdown`,t=>{(t.button===0||t.button===2)&&(this._drag={x:t.clientX,y:t.clientY,button:t.button,moved:0},e.setPointerCapture(t.pointerId))}),e.addEventListener(`pointermove`,e=>{if(!this._drag)return;let t=e.clientX-this._drag.x,n=e.clientY-this._drag.y;this._drag.x=e.clientX,this._drag.y=e.clientY,this._drag.moved+=Math.abs(t)+Math.abs(n);let r=.005;this.mode===`orbit`&&this._drag.button===0&&!this.transition?(this.yaw-=t*r,this.pitch=Ct.clamp(this.pitch+n*r,-1.55,1.55)):(this.transition=null,wu.setFromAxisAngle(Su,-t*r),this.quat.premultiply(wu),Tu.set(1,0,0).applyQuaternion(this.quat),wu.setFromAxisAngle(Tu,-n*r),this.quat.premultiply(wu),this.mode===`orbit`&&this._enterFree())});let t=t=>{if(this._drag)try{e.releasePointerCapture(t.pointerId)}catch{}this._drag=null};e.addEventListener(`pointerup`,t),e.addEventListener(`pointercancel`,t),e.addEventListener(`wheel`,e=>{e.preventDefault();let t=this.focus&&this.focus.radius<5&&this.mode===`orbit`,n=Math.exp(Ct.clamp(e.deltaY,-200,200)*(t?.0012:.0025));if(this.mode===`orbit`){this.transition=null;let e=this.focus?this.focus.radius*1.05+this.minApproach(this.focus):1;this.dist=Math.max(e,this.dist*n)}else this.speedMul=Ct.clamp(this.speedMul/n,1e-4,1e4)},{passive:!1}),window.addEventListener(`keydown`,e=>{e.target.tagName!==`INPUT`&&(this.keys.add(e.code),[`KeyW`,`KeyA`,`KeyS`,`KeyD`,`Space`,`ShiftLeft`,`KeyR`,`KeyC`].includes(e.code)&&this.mode===`orbit`&&this._enterFree())}),window.addEventListener(`keyup`,e=>this.keys.delete(e.code)),window.addEventListener(`blur`,()=>this.keys.clear())}minApproach(e){return e.kind===`satellite`||e.kind===`spacecraft`?.002:0}get dragMoved(){return this._drag?this._drag.moved:0}_enterFree(){this.mode!==`free`&&(this.mode=`free`,this.transition=null,this.onModeChange?.(this.mode))}toggleMode(){this.mode===`free`?this.setOrbit(this.focus):this._enterFree()}setOrbit(e){if(!e)return;this.focus=e,this.mode=`orbit`,this.focus.getPos(this._jd,this.focusPos);let t=this.pos[0]-this.focusPos[0],n=this.pos[1]-this.focusPos[1],r=this.pos[2]-this.focusPos[2];this.dist=Math.hypot(t,n,r)||e.radius*5,this.yaw=Math.atan2(n,t),this.pitch=Math.asin(Ct.clamp(r/this.dist,-1,1)),this.onModeChange?.(this.mode)}goTo(e,t){if(!e)return;e.getPos(this._jd,this.focusPos);let n=this.pos[0]-this.focusPos[0],r=this.pos[1]-this.focusPos[1],i=this.pos[2]-this.focusPos[2],a=Math.hypot(n,r,i),o=e.kind===`star`||e.kind===`sun`?8:e.kind===`galaxy`?2.6:e.kind===`dso`?3.2:e.kind===`satellite`||e.kind===`asteroid`||e.kind===`comet`?3.5:4.5,s=t||Math.max(e.radius*o,e.radius+this.minApproach(e)*4,.001);this.focus=e,this.mode=`orbit`,a>1e-6&&(this.yaw=Math.atan2(r,n),this.pitch=Math.asin(Ct.clamp(i/a,-1,1)));let c=this.yaw,l=Ct.clamp(this.pitch,-1,1),u=e.lightPos||e.faceFrom;if(u){let t=u[0]-this.focusPos[0],n=u[1]-this.focusPos[1],r=u[2]-this.focusPos[2],i=Math.hypot(t,n,r);i>0&&(c=Math.atan2(n,t)+(e.lightPos?.55:0),l=Math.asin(Ct.clamp(r/i,-1,1))+(e.lightPos?.25:0),l=Ct.clamp(l,-1.3,1.3))}for(;c-this.yaw>Math.PI;)c-=2*Math.PI;for(;c-this.yaw<-Math.PI;)c+=2*Math.PI;let d=Math.abs(Math.log10(Math.max(a,1e-6)/s)),f=Ct.clamp(1.2+d*.35,1.5,6);this.transition={t:0,duration:f,d0:Math.max(a,s*.5),d1:s,q0:this.quat.clone(),yaw0:this.yaw,pitch0:this.pitch,yaw1:c,pitch1:l},this.dist=this.transition.d0,this.onModeChange?.(this.mode)}update(e,t){if(this._jd=t,this.focus&&(this.focus.getPos(t,this.focusPos),this.mode===`free`&&this._followObj===this.focus&&this._followPos&&(this.pos[0]+=this.focusPos[0]-this._followPos[0],this.pos[1]+=this.focusPos[1]-this._followPos[1],this.pos[2]+=this.focusPos[2]-this._followPos[2]),this._followObj=this.focus,this._followPos=this._followPos||new Float64Array(3),this._followPos.set(this.focusPos)),this.transition){let t=this.transition;t.t=Math.min(1,t.t+e/t.duration);let n=t.t<.5?4*t.t**3:1-(-2*t.t+2)**3/2;this.dist=Math.exp(Ct.lerp(Math.log(t.d0),Math.log(t.d1),n)),this.pitch=Ct.lerp(t.pitch0,t.pitch1,n),this.yaw=Ct.lerp(t.yaw0,t.yaw1,n),this._placeOrbit(),this._lookAtFocus(wu);let r=Math.min(1,t.t*2.2);this.quat.copy(t.q0).slerp(wu,r),t.t>=1&&(this.transition=null)}else if(this.mode===`orbit`&&this.focus){let e=this.focus.radius*1.02+this.minApproach(this.focus);this.dist<e&&(this.dist=e),this._placeOrbit(),this._lookAtFocus(this.quat)}else this._fly(e);this.camera.quaternion.copy(this.quat),this.camera.position.set(0,0,0),this.camera.updateMatrixWorld()}_placeOrbit(){let e=Math.cos(this.pitch);this.pos[0]=this.focusPos[0]+this.dist*e*Math.cos(this.yaw),this.pos[1]=this.focusPos[1]+this.dist*e*Math.sin(this.yaw),this.pos[2]=this.focusPos[2]+this.dist*Math.sin(this.pitch)}_lookAtFocus(e){Tu.set(this.pos[0]-this.focusPos[0],this.pos[1]-this.focusPos[1],this.pos[2]-this.focusPos[2]),Cu.lookAt(Tu,Eu.set(0,0,0),Su),e.setFromRotationMatrix(Cu)}_fly(e){let t=Math.max(this.nearestSurface,5e-4),n=t*(t<1?.12:.2);this.flySpeed=n*this.speedMul;let r=this.keys,i=0,a=0,o=0;(r.has(`KeyW`)||r.has(`ArrowUp`))&&--o,(r.has(`KeyS`)||r.has(`ArrowDown`))&&(o+=1),(r.has(`KeyA`)||r.has(`ArrowLeft`))&&--i,(r.has(`KeyD`)||r.has(`ArrowRight`))&&(i+=1),(r.has(`Space`)||r.has(`KeyR`))&&(a+=1),(r.has(`ShiftLeft`)||r.has(`ShiftRight`)||r.has(`KeyC`))&&--a,(r.has(`KeyQ`)||r.has(`KeyE`))&&(Tu.set(0,0,1).applyQuaternion(this.quat),wu.setFromAxisAngle(Tu,(r.has(`KeyQ`)?1:-1)*e*1.2),this.quat.premultiply(wu)),(i||a||o)&&(Tu.set(i,a,o).normalize().applyQuaternion(this.quat).multiplyScalar(this.flySpeed*e),this.pos[0]+=Tu.x,this.pos[1]+=Tu.y,this.pos[2]+=Tu.z)}rel(e,t){return t.set(e[0]-this.pos[0],e[1]-this.pos[1],e[2]-this.pos[2]),t}distanceTo(e){return Math.hypot(e[0]-this.pos[0],e[1]-this.pos[1],e[2]-this.pos[2])}},Ou=149597870.7,Z=30856775814913.67,ku=9460730472580.8,Au=Z*1e6,ju=299792.458,Q=Math.PI/180,Mu=23.4392911*Q,Nu=695700,Pu=6371.0084,Fu=2451545;function Iu(e){return e.getTime()/864e5+2440587.5}function Lu(e){return new Date((e-2440587.5)*864e5)}function Ru(e,t=3){let n=Math.abs(e);return n<1?`${(e*1e3).toPrecision(t)} m`:n<1e6||n<7479893.535?`${$(e,t)} km`:n<946073047258.0801?`${$(e/Ou,t)} AU`:n<9460730472580800?`${$(e/ku,t)} ly`:n<0x834b443d5de46000?`${$(e/ku/1e3,t)} kly`:n<9460730472580801e6?`${$(e/ku/1e6,t)} Mly`:`${$(e/ku/1e9,t)} Gly`}function $(e,t=3){if(!Number.isFinite(e))return`—`;let n=Math.abs(e);if(n===0)return`0`;if(n>=1e6||n<.001)return e.toExponential(t-1).replace(`e+`,`e`);let r=Math.max(0,t-1-Math.floor(Math.log10(n)));return e.toLocaleString(`en-US`,{maximumFractionDigits:Math.min(r,6),minimumFractionDigits:0})}function zu(e){let t=Math.abs(e);return t<60?`${$(e,3)} s`:t<3600?`${$(e/60,3)} min`:t<86400?`${$(e/3600,3)} h`:t<31557600?`${$(e/86400,3)} days`:`${$(e/86400/365.25,3)} yr`}var Bu=[-1e7,-1e6,-86400,-3600,-60,-1,0,1,60,3600,86400,1e6,1e7,1e8],Vu=class{constructor(){this.jd=Iu(new Date),this.speedIndex=7,this.paused=!1,this._pausedIndex=7}get speed(){return this.paused?0:Bu[this.speedIndex]}get date(){return Lu(this.jd)}get unixMs(){return(this.jd-2440587.5)*864e5}update(e){this.paused||(this.jd+=e*Bu[this.speedIndex]/86400)}setNow(){this.jd=Iu(new Date)}faster(){this.paused=!1,this.speedIndex=Math.min(Bu.length-1,this.speedIndex+1),Bu[this.speedIndex]===0&&this.speedIndex++}slower(){this.paused=!1,this.speedIndex=Math.max(0,this.speedIndex-1),Bu[this.speedIndex]===0&&this.speedIndex--}togglePause(){this.paused=!this.paused}speedLabel(){if(this.paused)return`paused`;let e=Bu[this.speedIndex],t=Math.abs(e),n=e<0?`−`:``;return t===1?n+`real time`:t<3600?`${n}${t}× (1 s = ${t} s)`:t===3600?`${n}1 h / s`:t===86400?`${n}1 day / s`:t===1e6?`${n}11.6 days / s`:t===1e7?`${n}116 days / s`:`${n}3.2 yr / s`}dateLabel(){let e=this.date;return Number.isFinite(e.getTime())?e.toISOString().replace(`T`,` `).slice(0,19)+` UTC`:`—`}},Hu=new q,Uu=class e{constructor(e,t){this.container=e,this.camera=t,this.pool=[],this.max=90;for(let t=0;t<this.max;t++){let t=document.createElement(`div`);t.className=`label`,t.style.display=`none`,e.appendChild(t),this.pool.push(t)}this.selectedKey=null,this.onClick=null}static key(e){return e?`${e.layer}:${e.index??e.id??e.name??e.k}`:null}render(t,n,r,i=[],a=1e3){let o=[];for(let a of t){Hu.set(a.x,a.y,a.z);let t=Hu.length();if(t<=0)continue;let s=e.key(a.ref);if(s&&a.prio<5e3&&s===this.selectedKey)continue;let c=!1;for(let e of i){let n=Math.hypot(e.x,e.y,e.z);if(n>=t)continue;let r=(a.x*e.x+a.y*e.y+a.z*e.z)/(t*n);if(Math.acos(Math.min(1,Math.max(-1,r)))<Math.asin(Math.min(1,e.r/n))*.98){c=!0;break}}if(c||(Hu.project(this.camera),Hu.z>1||Hu.z<-1))continue;let l=(Hu.x*.5+.5)*n,u=(-Hu.y*.5+.5)*r;l<-50||l>n+50||u<-20||u>r+20||(a.sx=l,a.sy=u-(a.offsetPx||6)-4,a.key=e.key(a.ref),a.key&&a.key===this.selectedKey&&(a.prio+=1e3),o.push(a))}o.sort((e,t)=>t.prio-e.prio);let s=[],c=0;for(let e of o){if(c>=this.max)break;let t=e.text.length*6.2+8,n=e.sx-t/2,r=e.sy-14,i=!1;for(let e of s)if(n<e[2]&&n+t>e[0]&&r<e[3]&&r+14>e[1]){i=!0;break}if(i&&e.prio<1e3)continue;s.push([n,r,n+t,r+14]);let a=this.pool[c++];a.textContent=e.text,a.className=`label ${e.cls||``}${e.key&&e.key===this.selectedKey?` selected`:``}${e.noLine?` noline`:``}`,a.style.display=`block`,a.style.transform=`translate(${e.sx.toFixed(1)}px, ${e.sy.toFixed(1)}px) translate(-50%, -100%)`,a.__ref=e.ref}for(let e=c;e<this.max;e++)this.pool[e].style.display=`none`}},Wu={Alp:`Alpha`,Bet:`Beta`,Gam:`Gamma`,Del:`Delta`,Eps:`Epsilon`,Zet:`Zeta`,Eta:`Eta`,The:`Theta`,Iot:`Iota`,Kap:`Kappa`,Lam:`Lambda`,Mu:`Mu`,Nu:`Nu`,Xi:`Xi`,Omi:`Omicron`,Pi:`Pi`,Rho:`Rho`,Sig:`Sigma`,Tau:`Tau`,Ups:`Upsilon`,Phi:`Phi`,Chi:`Chi`,Psi:`Psi`,Ome:`Omega`},Gu={And:`Andromedae`,Ant:`Antliae`,Aps:`Apodis`,Aqr:`Aquarii`,Aql:`Aquilae`,Ara:`Arae`,Ari:`Arietis`,Aur:`Aurigae`,Boo:`Boötis`,Cae:`Caeli`,Cam:`Camelopardalis`,Cnc:`Cancri`,CVn:`Canum Venaticorum`,CMa:`Canis Majoris`,CMi:`Canis Minoris`,Cap:`Capricorni`,Car:`Carinae`,Cas:`Cassiopeiae`,Cen:`Centauri`,Cep:`Cephei`,Cet:`Ceti`,Cha:`Chamaeleontis`,Cir:`Circini`,Col:`Columbae`,Com:`Comae Berenices`,CrA:`Coronae Australis`,CrB:`Coronae Borealis`,Crv:`Corvi`,Crt:`Crateris`,Cru:`Crucis`,Cyg:`Cygni`,Del:`Delphini`,Dor:`Doradus`,Dra:`Draconis`,Equ:`Equulei`,Eri:`Eridani`,For:`Fornacis`,Gem:`Geminorum`,Gru:`Gruis`,Her:`Herculis`,Hor:`Horologii`,Hya:`Hydrae`,Hyi:`Hydri`,Ind:`Indi`,Lac:`Lacertae`,Leo:`Leonis`,LMi:`Leonis Minoris`,Lep:`Leporis`,Lib:`Librae`,Lup:`Lupi`,Lyn:`Lyncis`,Lyr:`Lyrae`,Men:`Mensae`,Mic:`Microscopii`,Mon:`Monocerotis`,Mus:`Muscae`,Nor:`Normae`,Oct:`Octantis`,Oph:`Ophiuchi`,Ori:`Orionis`,Pav:`Pavonis`,Peg:`Pegasi`,Per:`Persei`,Phe:`Phoenicis`,Pic:`Pictoris`,Psc:`Piscium`,PsA:`Piscis Austrini`,Pup:`Puppis`,Pyx:`Pyxidis`,Ret:`Reticuli`,Sge:`Sagittae`,Sgr:`Sagittarii`,Sco:`Scorpii`,Scl:`Sculptoris`,Sct:`Scuti`,Ser:`Serpentis`,Sex:`Sextantis`,Tau:`Tauri`,Tel:`Telescopii`,Tri:`Trianguli`,TrA:`Trianguli Australis`,Tuc:`Tucanae`,UMa:`Ursae Majoris`,UMi:`Ursae Minoris`,Vel:`Velorum`,Vir:`Virginis`,Vol:`Volantis`,Vul:`Vulpeculae`},Ku={"Rigil Kentaurus":`Alpha Centauri A`,Toliman:`Alpha Centauri B`,"ISS (ZARYA)":`International Space Station`,"CSS (TIANHE)":`Tiangong space station`,HST:`Hubble Space Telescope`,JUICE:`Jupiter Icy Moons Explorer`,SOHO:`Solar and Heliospheric Observatory`,"STEREO-A":`STEREO`,Hayabusa2:`Hayabusa2`,"Sgr A*":`Sagittarius A*`,"Sagittarius A*":`Sagittarius A*`,LMC:`Large Magellanic Cloud`,Sun:`Sun`,Moon:`Moon`},qu=new Map,Ju=e=>{try{return JSON.parse(localStorage.getItem(e))}catch{return null}},Yu=(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch{}};function Xu(e){let t=[],n=e.name;Ku[n]&&t.push(Ku[n]);let r=Object.fromEntries((e.rows||[]).map(e=>[e[0],String(e[1])]));switch(e.kind){case`sun`:t.push(`Sun`);break;case`planet`:t.push(n);break;case`dwarf`:t.push(`${n} (dwarf planet)`,n);break;case`moon`:t.push(n===`Moon`?`Moon`:`${n} (moon)`,n);break;case`star`:{let e=(r.Designations||``).split(`,`).map(e=>e.trim());for(let n of e){if(/^HIP |^HD |^HR /.test(n))continue;let e=n.match(/^([A-Z][a-z]{1,2})(?:-?\d)?\s+([A-Z][A-Za-z]{2})$/);if(e&&Wu[e[1]]&&Gu[e[2]]){t.push(`${Wu[e[1]]} ${Gu[e[2]]}`);continue}let r=n.match(/^(\d+)\s+([A-Z][A-Za-z]{2})$/);if(r&&Gu[r[2]]){t.push(`${r[1]} ${Gu[r[2]]}`);continue}let i=n.match(/^(Gl|GJ)\s*(\d+\.?\d*[A-Z]?)$/);if(i){t.push(`Gliese ${i[2]}`);continue}t.push(n)}t.includes(n)||t.push(n);for(let n of e)/^HD /.test(n)&&t.push(n);break}case`exoplanet`:t.push(n.replace(/\s+([a-h])$/,`$1`),n);break;case`dso`:case`galaxy`:{let e=(r.Designations||``).split(`,`).map(e=>e.trim()),i=e.filter(e=>!/^(M|NGC|IC|Mel|Cr|Tr|C)\s?\d/.test(e));t.push(...i);for(let n of e){let e=n.match(/^M\s?(\d+)$/);e&&t.push(`Messier ${e[1]}`)}for(let n of e)/^(NGC|IC) \d+/.test(n)&&t.push(n);t.includes(n)||t.push(n);break}case`asteroid`:{t.push(n);let e=n.match(/^\d+\s+(.+)$/);e&&t.push(`${e[1]} (asteroid)`,e[1]);break}case`comet`:{let e=n.match(/^\d+P\/(.+?)( \d)?$/);e&&t.push(`Comet ${e[1]}`,`${e[1]}'s Comet`),t.push(n.replace(/\s*\(.*\)$/,``));break}case`satellite`:t.push(n.replace(/\s*\(.*\)$/,``),n);break;case`spacecraft`:t.push(n,`${n} (spacecraft)`);break;case`constellation`:t.push(`${n} (constellation)`,n);break;case`blackhole`:case`quasar`:for(let r of[n,...e.wiki||[]]){let e=r.match(/^(V\d+|[A-Z]{1,2})\s+([A-Z][a-z]{2})$/);e&&Gu[e[2]]&&t.push(`${e[1]} ${Gu[e[2]]}`),t.push(r.replace(/ central black hole$/,``).replace(/ black hole$/,``))}}return[...new Set(t.filter(Boolean))]}async function Zu(e){let t=`wiki:`+e;if(qu.has(t))return qu.get(t);let n=Ju(t);if(n!==null)return qu.set(t,n),n;let r=!1;try{let t=await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(e.replace(/ /g,`_`))}`,{headers:{Accept:`application/json`}});if(t.ok){let e=await t.json();if(e.type===`standard`&&e.extract){let t=e.thumbnail?.source||null;t&&/map|chart|diagram|location|constellation|orbit|svg|plot|graph|comparison|size_|_sizes|light_?curve/i.test(decodeURIComponent(t))&&(t=null),r={title:e.title,extract:e.extract,image:t,original:e.originalimage?.source||null,url:e.content_urls?.desktop?.page}}}}catch{}return qu.set(t,r),Yu(t,r),r}function Qu(e){return/star|planet|moon|galaxy|nebula|cluster|comet|asteroid|satellite|spacecraft|probe|telescope|constellation|light-year|orbit|astronom|solar|space station|dwarf|remnant|quasar|black hole|sun/i.test(e.extract)}async function $u(e){for(let t of Xu(e).slice(0,6)){let e=await Zu(t);if(e&&Qu(e))return e}return null}function ed(e){let t=Object.fromEntries((e.rows||[]).map(e=>[e[0],String(e[1])])),n=(t[`Spectral type`]||``).trim(),r=parseFloat((t[`Luminosity (est.)`]||``).replace(/[^\d.e+-]/g,``)),i=n[0]?.toUpperCase(),a=null;if(/^W/.test(n)?a=`wolfrayet`:/^D/.test(n)||/VII/.test(n)?a=`whitedwarf`:/^[LT]/.test(n)?a=`browndwarf`:/^[OB]/.test(n)&&(/\bI(a|b)?\b/.test(n)||r>2e4)?a=`bluegiant`:/^[KM]/.test(n)&&(/\bI(a|b)?\b/.test(n)||r>3e3)?a=`supergiant`:/^[KM]/.test(n)&&(/III|II/.test(n)||r>30)?a=`giant`:`OBAFGKM`.includes(i)&&(a=i),!a)return null;let o={O:`O-type star`,B:`B-type star`,A:`A-type star`,F:`F-type star`,G:`G-type (Sun-like) star`,K:`K-type orange star`,M:`M-type red dwarf`,giant:`red giant`,supergiant:`red supergiant`,bluegiant:`blue supergiant`,whitedwarf:`white dwarf`,browndwarf:`brown dwarf`,wolfrayet:`Wolf-Rayet star`}[a];return{image:`/Starmap/img/stars/${a}.jpg`,caption:`Representative artist's impression of a ${o} (AI-generated, not a photograph of this star)`}}async function td(e){return null}async function nd(e){return null}var rd=Math.PI,id=rd*2,ad=rd/180,od=180/rd,sd=1440,cd=398600.8,ld=6378.135,ud=60/Math.sqrt(ld*ld*ld/cd),dd=ld*ud/60,fd=1/ud,pd=.001082616,md=-253881e-11,hd=-165597e-11,gd=md/pd,_d=2/3,vd=1440/(2*rd);function yd(e,t){let n=[31,e%4==0?29:28,31,30,31,30,31,31,30,31,30,31],r=Math.floor(t),i=1,a=0;for(;r>a+n[i-1]&&i<12;)a+=n[i-1],i+=1;let o=i,s=r-a,c=(t-r)*24,l=Math.floor(c);c=(c-l)*60;let u=Math.floor(c);return{mon:o,day:s,hr:l,minute:u,sec:(c-u)*60}}function bd(e,t,n,r,i,a,o=0){return 367*e-Math.floor(7*(e+Math.floor((t+9)/12))*.25)+Math.floor(275*t/9)+n+1721013.5+((o/6e4+a/60+i)/60+r)/24}function xd(e,t,n,r,i,a,o=0){if(e instanceof Date){let t=e;return bd(t.getUTCFullYear(),t.getUTCMonth()+1,t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds(),t.getUTCMilliseconds())}return bd(e,t,n,r,i,a,o)}function Sd(e,t){let{e3:n,ee2:r,peo:i,pgho:a,pho:o,pinco:s,plo:c,se2:l,se3:u,sgh2:d,sgh3:f,sgh4:p,sh2:m,sh3:h,si2:g,si3:_,sl2:v,sl3:y,sl4:b,t:x,xgh2:S,xgh3:C,xgh4:w,xh2:T,xh3:E,xi2:D,xi3:O,xl2:ee,xl3:k,xl4:te,zmol:A,zmos:j}=e,{init:M,opsmode:ne}=t,{ep:N,inclp:re,nodep:P,argpp:ie,mp:ae}=t,F,I,oe,L,se,ce,le,ue,de,fe,pe,me,R,he,ge,_e,ve,ye,be,xe,Se;Se=j+119459e-10*x,M===`y`&&(Se=j),xe=Se+.0335*Math.sin(Se),ve=Math.sin(xe),fe=.5*ve*ve-.25,pe=-.5*ve*Math.cos(xe);let Ce=l*fe+u*pe,we=g*fe+_*pe,Te=v*fe+y*pe+b*ve,Ee=d*fe+f*pe+p*ve,De=m*fe+h*pe;Se=A+.00015835218*x,M===`y`&&(Se=A),xe=Se+.1098*Math.sin(Se),ve=Math.sin(xe),fe=.5*ve*ve-.25,pe=-.5*ve*Math.cos(xe);let Oe=r*fe+n*pe,z=D*fe+O*pe,B=ee*fe+k*pe+te*ve,ke=S*fe+C*pe+w*ve,Ae=T*fe+E*pe;return me=Ce+Oe,ge=we+z,_e=Te+B,R=Ee+ke,he=De+Ae,M===`n`&&(me-=i,ge-=s,_e-=c,R-=a,he-=o,re+=ge,N+=me,L=Math.sin(re),oe=Math.cos(re),re>=.2?(he/=L,R-=oe*he,ie+=R,P+=he,ae+=_e):(ce=Math.sin(P),se=Math.cos(P),F=L*ce,I=L*se,le=he*se+ge*oe*ce,ue=-he*ce+ge*oe*se,F+=le,I+=ue,P%=id,P<0&&ne===`a`&&(P+=id),ye=ae+ie+oe*P,de=_e+R-ge*P*L,ye+=de,be=P,P=Math.atan2(F,I),P<0&&ne===`a`&&(P+=id),Math.abs(be-P)>rd&&(P<be?P+=id:P-=id),ae+=_e,ie=ye-ae-oe*P)),{ep:N,inclp:re,nodep:P,argpp:ie,mp:ae}}function Cd(e){let{epoch:t,ep:n,argpp:r,tc:i,inclp:a,nodep:o,np:s}=e,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,ee,k,te,A,j,M,ne,N,re,P,ie,ae,F,I,oe,L,se,ce,le,ue,de,fe,pe,me,R,he,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,z,B,ke,Ae=.01675,je=.0549,V=s,Me=n,H=Math.sin(o),U=Math.cos(o),Ne=Math.sin(r),Pe=Math.cos(r),Fe=Math.sin(a),Ie=Math.cos(a),Le=Me*Me,Re=1-Le,ze=Math.sqrt(Re),Be=t+18261.5+i/1440,Ve=(4.523602-.00092422029*Be)%id,He=Math.sin(Ve),Ue=Math.cos(Ve),We=.91375164-.03568096*Ue,Ge=Math.sqrt(1-We*We),Ke=.089683511*He/Ge,qe=Math.sqrt(1-Ke*Ke),W=5.8351514+.001944368*Be,G=.39785416*He/Ge,Je=qe*Ue+.91744867*Ke*He;G=Math.atan2(G,Je),G+=W-Ve;let Ye=Math.cos(G),Xe=Math.sin(G);D=.1945905,O=-.98088458,te=.91744867,A=.39785416,ee=U,k=H,v=29864797e-13;let Ze=1/V,Qe=0;for(;Qe<2;)Qe+=1,c=D*ee+O*te*k,u=-O*ee+D*te*k,m=-D*k+O*te*ee,h=O*A,g=O*k+D*te*ee,_=D*A,l=Ie*m+Fe*h,d=Ie*g+Fe*_,f=-Fe*m+Ie*h,p=-Fe*g+Ie*_,y=c*Pe+l*Ne,b=u*Pe+d*Ne,x=-c*Ne+l*Pe,S=-u*Ne+d*Pe,C=f*Ne,w=p*Ne,T=f*Pe,E=p*Pe,z=12*y*y-3*x*x,B=24*y*b-6*x*S,ke=12*b*b-3*S*S,be=3*(c*c+l*l)+z*Le,xe=6*(c*u+l*d)+B*Le,Se=3*(u*u+d*d)+ke*Le,Ce=-6*c*f+Le*(-24*y*T-6*x*C),we=-6*(c*p+u*f)+Le*(-24*(b*T+y*E)+-6*(x*w+S*C)),Te=-6*u*p+Le*(-24*b*E-6*S*w),Ee=6*l*f+Le*(24*y*C-6*x*T),De=6*(d*f+l*p)+Le*(24*(b*C+y*w)-6*(S*T+x*E)),Oe=6*d*p+Le*(24*b*w-6*S*E),be=be+be+Re*z,xe=xe+xe+Re*B,Se=Se+Se+Re*ke,he=v*Ze,R=-.5*he/ze,ge=he*ze,me=-15*Me*ge,_e=y*x+b*S,ve=b*x+y*S,ye=b*S-y*x,Qe===1&&(j=me,M=R,ne=he,N=ge,re=_e,P=ve,ie=ye,ae=be,F=xe,I=Se,oe=Ce,L=we,se=Te,ce=Ee,le=De,ue=Oe,de=z,fe=B,pe=ke,D=Ye,O=Xe,te=We,A=Ge,ee=qe*U+Ke*H,k=H*qe-U*Ke,v=4.7968065e-7);let $e=(4.7199672+(.2299715*Be-W))%id,et=(6.2565837+.017201977*Be)%id,tt=2*j*P,nt=2*j*ie,K=2*M*L,rt=2*M*(se-oe),it=-2*ne*F,at=-2*ne*(I-ae),ot=-2*ne*(-21-9*Le)*Ae,st=2*N*fe,ct=2*N*(pe-de),lt=-18*N*Ae,ut=-2*M*le,dt=-2*M*(ue-ce),ft=2*me*ve,pt=2*me*ye,mt=2*R*we,ht=2*R*(Te-Ce),gt=-2*he*xe,_t=-2*he*(Se-be),vt=-2*he*(-21-9*Le)*je,yt=2*ge*B,bt=2*ge*(ke-z),xt=-18*ge*je,St=-2*R*De,Ct=-2*R*(Oe-Ee);return{snodm:H,cnodm:U,sinim:Fe,cosim:Ie,sinomm:Ne,cosomm:Pe,day:Be,e3:pt,ee2:ft,em:Me,emsq:Le,gam:W,peo:0,pgho:0,pho:0,pinco:0,plo:0,rtemsq:ze,se2:tt,se3:nt,sgh2:st,sgh3:ct,sgh4:lt,sh2:ut,sh3:dt,si2:K,si3:rt,sl2:it,sl3:at,sl4:ot,s1:me,s2:R,s3:he,s4:ge,s5:_e,s6:ve,s7:ye,ss1:j,ss2:M,ss3:ne,ss4:N,ss5:re,ss6:P,ss7:ie,sz1:ae,sz2:F,sz3:I,sz11:oe,sz12:L,sz13:se,sz21:ce,sz22:le,sz23:ue,sz31:de,sz32:fe,sz33:pe,xgh2:yt,xgh3:bt,xgh4:xt,xh2:St,xh3:Ct,xi2:mt,xi3:ht,xl2:gt,xl3:_t,xl4:vt,nm:V,z1:be,z2:xe,z3:Se,z11:Ce,z12:we,z13:Te,z21:Ee,z22:De,z23:Oe,z31:z,z32:B,z33:ke,zmol:$e,zmos:et}}function wd(e){let{cosim:t,argpo:n,s1:r,s2:i,s3:a,s4:o,s5:s,sinim:c,ss1:l,ss2:u,ss3:d,ss4:f,ss5:p,sz1:m,sz3:h,sz11:g,sz13:_,sz21:v,sz23:y,sz31:b,sz33:x,t:S,tc:C,gsto:w,mo:T,mdot:E,no:D,nodeo:O,nodedot:ee,xpidot:k,z1:te,z3:A,z11:j,z13:M,z21:ne,z23:N,z31:re,z33:P,ecco:ie,eccsq:ae}=e,{emsq:F,em:I,argpm:oe,inclm:L,mm:se,nm:ce,nodem:le,irez:ue,atime:de,d2201:fe,d2211:pe,d3210:me,d3222:R,d4410:he,d4422:ge,d5220:_e,d5232:ve,d5421:ye,d5433:be,dedt:xe,didt:Se,dmdt:Ce,dnodt:we,domdt:Te,del1:Ee,del2:De,del3:Oe,xfact:z,xlamo:B,xli:ke,xni:Ae}=e,je,V,Me,H,U,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,W,G,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,K,rt=.0043752690880113,it=.00015835218,at=119459e-10;ue=0,ce<.0052359877&&ce>.0034906585&&(ue=1),ce>=.00826&&ce<=.00924&&I>=.5&&(ue=2);let ot=l*at*p,st=u*at*(g+_),ct=-119459e-10*d*(m+h-14-6*F),lt=f*at*(b+x-6),ut=-119459e-10*u*(v+y);(L<.052359877||L>rd-.052359877)&&(ut=0),c!==0&&(ut/=c);let dt=lt-t*ut;xe=ot+r*it*s,Se=st+i*it*(j+M),Ce=ct-it*a*(te+A-14-6*F);let ft=o*it*(re+P-6),pt=-.00015835218*i*(ne+N);(L<.052359877||L>rd-.052359877)&&(pt=0),Te=dt+ft,we=ut,c!==0&&(Te-=t/c*pt,we+=pt/c);let mt=(w+C*rt)%id;if(I+=xe*S,L+=Se*S,oe+=Te*S,le+=we*S,se+=Ce*S,ue!==0){if(tt=(ce/ud)**_d,ue===2){nt=t*t;let e=I;I=ie;let n=F;F=ae,K=I*F,Ve=-.306-(I-.64)*.44,I<=.65?(He=3.616-13.247*I+16.29*F,We=-19.302+117.39*I-228.419*F+156.591*K,Ge=-18.9068+109.7927*I-214.6334*F+146.5816*K,Ke=-41.122+242.694*I-471.094*F+313.953*K,qe=-146.407+841.88*I-1629.014*F+1083.435*K,W=-532.114+3017.977*I-5740.032*F+3708.276*K):(He=-72.099+331.819*I-508.738*F+266.724*K,We=-346.844+1582.851*I-2415.925*F+1246.113*K,Ge=-342.585+1554.908*I-2366.899*F+1215.972*K,Ke=-1052.797+4758.686*I-7193.992*F+3651.957*K,qe=-3581.69+16178.11*I-24462.77*F+12422.52*K,W=I>.715?-5149.66+29936.92*I-54087.36*F+31324.56*K:1464.74-4664.75*I+3763.64*F),I<.7?(Ye=-919.2277+4988.61*I-9064.77*F+5542.21*K,G=-822.71072+4568.6173*I-8491.4146*F+5337.524*K,Je=-853.666+4690.25*I-8624.77*F+5341.4*K):(Ye=-37995.78+161616.52*I-229838.2*F+109377.94*K,G=-51752.104+218913.95*I-309468.16*F+146349.42*K,Je=-40023.88+170470.89*I-242699.48*F+115605.82*K),Xe=c*c,je=.75*(1+2*t+nt),V=1.5*Xe,H=1.875*c*(1-2*t-3*nt),U=-1.875*c*(1+2*t-3*nt),Pe=35*Xe*je,Fe=39.375*Xe*Xe,Ie=9.84375*c*(Xe*(1-2*t-5*nt)+.33333333*(-2+4*t+6*nt)),Le=c*(4.92187512*Xe*(-2-4*t+10*nt)+6.56250012*(1+2*t-3*nt)),Re=29.53125*c*(2-8*t+nt*(-12+8*t+10*nt)),ze=29.53125*c*(-2-8*t+nt*(12+8*t-10*nt)),$e=ce*ce,et=tt*tt,Qe=3*$e*et,Ze=Qe*17891679e-13,fe=Ze*je*Ve,pe=Ze*V*He,Qe*=tt,Ze=Qe*3.7393792e-7,me=Ze*H*We,R=Ze*U*Ge,Qe*=tt,Ze=2*Qe*7.3636953e-9,he=Ze*Pe*Ke,ge=Ze*Fe*qe,Qe*=tt,Ze=Qe*1.1428639e-7,_e=Ze*Ie*W,ve=Ze*Le*Je,Ze=2*Qe*2.1765803e-9,ye=Ze*Re*G,be=Ze*ze*Ye,B=(T+O+O-(mt+mt))%id,z=E+Ce+2*(ee+we-rt)-D,I=e,F=n}ue===1&&(Be=1+F*(-2.5+.8125*F),We=1+2*F,Ue=1+F*(-6+6.60937*F),je=.75*(1+t)*(1+t),Me=.9375*c*c*(1+3*t)-.75*(1+t),Ne=1+t,Ne=1.875*Ne*Ne*Ne,Ee=3*ce*ce*tt*tt,De=2*Ee*je*Be*17891679e-13,Oe=3*Ee*Ne*Ue*2.2123015e-7*tt,Ee=Ee*Me*We*21460748e-13*tt,B=(T+O+n-mt)%id,z=E+k+Ce+Te+we-(D+rt)),ke=B,Ae=D,de=0,ce=D+0}return{em:I,argpm:oe,inclm:L,mm:se,nm:ce,nodem:le,irez:ue,atime:de,d2201:fe,d2211:pe,d3210:me,d3222:R,d4410:he,d4422:ge,d5220:_e,d5232:ve,d5421:ye,d5433:be,dedt:xe,didt:Se,dmdt:Ce,dndt:0,dnodt:we,domdt:Te,del1:Ee,del2:De,del3:Oe,xfact:z,xlamo:B,xli:ke,xni:Ae}}function Td(e){let t=(e-2451545)/36525,n=-62e-7*t*t*t+.093104*t*t+3164400184.812866*t+67310.54841;return n=n*ad/240%id,n<0&&(n+=id),n}function Ed(e,t,n,r,i,a,o){return e instanceof Date?Td(xd(e)):Td(t===void 0?e:xd(e,t,n,r,i,a,o))}function Dd(e){let{ecco:t,epoch:n,inclo:r,opsmode:i}=e,{no:a}=e,o=t*t,s=1-o,c=Math.sqrt(s),l=Math.cos(r),u=l*l,d=(ud/a)**_d,f=.75*pd*(3*u-1)/(c*s),p=f/(d*d),m=d*(1-p*p-p*(1/3+134*p*p/81));p=f/(m*m),a/=1+p;let h=(ud/a)**_d,g=Math.sin(r),_=h*s,v=1-5*u,y=-v-u-u,b=1/h,x=_*_,S=h*(1-t),C;if(i===`a`){let e=n-7305,t=Math.floor(e+1e-8),r=e-t,i=.017202791694070362,a=i+id;C=(1.7321343856509375+i*t+a*r+e*e*5075514194322695e-30)%id,C<0&&(C+=id)}else C=Ed(n+2433281.5);return{no:a,method:`n`,ainv:b,ao:h,con41:y,con42:v,cosio:l,cosio2:u,eccsq:o,omeosq:s,posq:x,rp:S,rteosq:c,sinio:g,gsto:C}}function Od(e){let{irez:t,d2201:n,d2211:r,d3210:i,d3222:a,d4410:o,d4422:s,d5220:c,d5232:l,d5421:u,d5433:d,dedt:f,del1:p,del2:m,del3:h,didt:g,dmdt:_,dnodt:v,domdt:y,argpo:b,argpdot:x,t:S,tc:C,gsto:w,xfact:T,xlamo:E,no:D}=e,{atime:O,em:ee,argpm:k,inclm:te,xli:A,mm:j,xni:M,nodem:ne,nm:N}=e,re=.13130908,P=2.8843198,ie=.37448087,ae=5.7686396,F=.95240898,I=1.8014998,oe=1.050833,L=4.4108898,se=259200,ce,le,ue,de,fe,pe,me,R,he=0,ge=0,_e=(w+C*.0043752690880113)%id;if(ee+=f*S,te+=g*S,k+=y*S,ne+=v*S,j+=_*S,t!==0){(O===0||S*O<=0||Math.abs(S)<Math.abs(O))&&(O=0,M=D,A=E),ce=S>0?720:-720;let e=381;for(;e===381;)t===2?(R=b+x*O,ue=R+R,le=A+A,me=n*Math.sin(ue+A-ae)+r*Math.sin(A-ae)+i*Math.sin(R+A-F)+a*Math.sin(-R+A-F)+o*Math.sin(ue+le-I)+s*Math.sin(le-I)+c*Math.sin(R+A-oe)+l*Math.sin(-R+A-oe)+u*Math.sin(R+le-L)+d*Math.sin(-R+le-L),fe=M+T,pe=n*Math.cos(ue+A-ae)+r*Math.cos(A-ae)+i*Math.cos(R+A-F)+a*Math.cos(-R+A-F)+c*Math.cos(R+A-oe)+l*Math.cos(-R+A-oe)+2*(o*Math.cos(ue+le-I)+s*Math.cos(le-I)+u*Math.cos(R+le-L)+d*Math.cos(-R+le-L)),pe*=fe):(me=p*Math.sin(A-re)+m*Math.sin(2*(A-P))+h*Math.sin(3*(A-ie)),fe=M+T,pe=p*Math.cos(A-re)+2*m*Math.cos(2*(A-P))+3*h*Math.cos(3*(A-ie)),pe*=fe),Math.abs(S-O)>=720?e=381:(ge=S-O,e=0),e===381&&(A+=fe*ce+me*se,M+=me*ce+pe*se,O+=ce);N=M+me*ge+pe*ge*ge*.5,de=A+fe*ge+me*ge*ge*.5,t===1?(j=de-ne-k+_e,he=N-D):(j=de-2*ne+2*_e,he=N-D),N=D+he}return{atime:O,em:ee,argpm:k,inclm:te,xli:A,mm:j,xni:M,nodem:ne,dndt:he,nm:N}}var kd;(function(e){e[e.None=0]=`None`,e[e.MeanEccentricityOutOfRange=1]=`MeanEccentricityOutOfRange`,e[e.MeanMotionBelowZero=2]=`MeanMotionBelowZero`,e[e.PerturbedEccentricityOutOfRange=3]=`PerturbedEccentricityOutOfRange`,e[e.SemiLatusRectumBelowZero=4]=`SemiLatusRectumBelowZero`,e[e.Decayed=6]=`Decayed`})(kd||={});function Ad(e,t){let n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;e.t=t,e.error=kd.None;let ee=e.mo+e.mdot*e.t,k=e.argpo+e.argpdot*e.t,te=e.nodeo+e.nodedot*e.t;u=k,S=ee;let A=e.t*e.t;if(w=te+e.nodecf*A,v=1-e.cc1*e.t,y=e.bstar*e.cc4*e.t,b=e.t2cof*A,e.isimp!==1){c=e.omgcof*e.t;let t=1+e.eta*Math.cos(ee);s=e.xmcof*(t*t*t-e.delmo),_=c+s,S=ee+_,u=k-_,p=A*e.t,m=p*e.t,v=v-e.d2*A-e.d3*p-e.d4*m,y+=e.bstar*e.cc5*(Math.sin(S)-e.sinmao),b=b+e.t3cof*p+m*(e.t4cof+e.t*e.t5cof)}e.tempa=v,C=e.no;let j=e.ecco;if(x=e.inclo,e.method===`d`){h=e.t;let t=Od({irez:e.irez,d2201:e.d2201,d2211:e.d2211,d3210:e.d3210,d3222:e.d3222,d4410:e.d4410,d4422:e.d4422,d5220:e.d5220,d5232:e.d5232,d5421:e.d5421,d5433:e.d5433,dedt:e.dedt,del1:e.del1,del2:e.del2,del3:e.del3,didt:e.didt,dmdt:e.dmdt,dnodt:e.dnodt,domdt:e.domdt,argpo:e.argpo,argpdot:e.argpdot,t:e.t,tc:h,gsto:e.gsto,xfact:e.xfact,xlamo:e.xlamo,no:e.no,atime:e.atime,em:j,argpm:u,inclm:x,xli:e.xli,mm:S,xni:e.xni,nodem:w,nm:C});({em:j,argpm:u,inclm:x,mm:S,nodem:w,nm:C}=t)}if(C<=0)return e.error=kd.MeanMotionBelowZero,null;let M=(ud/C)**_d*v*v;if(C=ud/M**1.5,j-=y,j>=1||j<-.001)return e.error=kd.MeanEccentricityOutOfRange,null;j<1e-6&&(j=1e-6),S+=e.no*b,E=S+u+w,w%=id,u%=id,E%=id,S=(E-u-w)%id;let ne={am:M,em:j,im:x,Om:w,om:u,mm:S,nm:C},N=Math.sin(x),re=Math.cos(x),P=j;if(T=x,d=u,O=w,D=S,a=N,i=re,e.method===`d`){let t=Sd(e,{inclo:e.inclo,init:`n`,ep:P,inclp:T,nodep:O,argpp:d,mp:D,opsmode:e.operationmode});if({ep:P,nodep:O,argpp:d,mp:D}=t,T=t.inclp,T<0&&(T=-T,O+=rd,d-=rd),P<0||P>1)return e.error=kd.PerturbedEccentricityOutOfRange,null}e.method===`d`&&(a=Math.sin(T),i=Math.cos(T),e.aycof=-.5*gd*a,e.xlcof=Math.abs(i+1)>15e-13?-.25*gd*a*(3+5*i)/(1+i):-.25*gd*a*(3+5*i)/15e-13);let ie=P*Math.cos(d);_=1/(M*(1-P*P));let ae=P*Math.sin(d)+_*e.aycof,F=(D+d+O+_*e.xlcof*ie-O)%id;l=F,g=9999.9;let I=1;for(;Math.abs(g)>=1e-12&&I<=10;)r=Math.sin(l),n=Math.cos(l),g=1-n*ie-r*ae,g=(F-ae*n+ie*r-l)/g,Math.abs(g)>=.95&&(g=g>0?.95:-.95),l+=g,I+=1;let oe=ie*n+ae*r,L=ie*r-ae*n,se=ie*ie+ae*ae,ce=M*(1-se);if(ce<0)return e.error=kd.SemiLatusRectumBelowZero,null;let le=M*(1-oe),ue=Math.sqrt(M)*L/le,de=Math.sqrt(ce)/le,fe=Math.sqrt(1-se);_=L/(1+fe);let pe=M/le*(r-ae-ie*_),me=M/le*(n-ie+ae*_);f=Math.atan2(pe,me);let R=(me+me)*pe,he=1-2*pe*pe;_=1/ce;let ge=.5*pd*_,_e=ge*_;e.method===`d`&&(o=i*i,e.con41=3*o-1,e.x1mth2=1-o,e.x7thm1=7*o-1);let ve=le*(1-1.5*_e*fe*e.con41)+.5*ge*e.x1mth2*he;if(ve<1)return e.error=kd.Decayed,null;f-=.25*_e*e.x7thm1*R;let ye=O+1.5*_e*i*R,be=T+1.5*_e*i*a*he,xe=ue-C*ge*e.x1mth2*R/ud,Se=de+C*ge*(e.x1mth2*he+1.5*e.con41)/ud,Ce=Math.sin(f),we=Math.cos(f),Te=Math.sin(ye),Ee=Math.cos(ye),De=Math.sin(be),Oe=Math.cos(be),z=-Te*Oe,B=Ee*Oe,ke=z*Ce+Ee*we,Ae=B*Ce+Te*we,je=De*Ce,V=z*we-Ee*Ce,Me=B*we-Te*Ce,H=De*we;return{position:{x:ve*ke*ld,y:ve*Ae*ld,z:ve*je*ld},velocity:{x:(xe*ke+Se*V)*dd,y:(xe*Ae+Se*Me)*dd,z:(xe*je+Se*H)*dd},meanElements:ne}}function jd(e,t){let{opsmode:n,satn:r,epoch:i,xbstar:a,xecco:o,xargpo:s,xinclo:c,xmo:l,xno:u,xnodeo:d}=t,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,ee,k,te,A,j,M,ne,N,re,P,ie,ae,F,I,oe,L,se,ce,le,ue,de,fe,pe,me,R,he,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,z=e;z.isimp=0,z.method=`n`,z.aycof=0,z.con41=0,z.cc1=0,z.cc4=0,z.cc5=0,z.d2=0,z.d3=0,z.d4=0,z.delmo=0,z.eta=0,z.argpdot=0,z.omgcof=0,z.sinmao=0,z.t=0,z.t2cof=0,z.t3cof=0,z.t4cof=0,z.t5cof=0,z.x1mth2=0,z.x7thm1=0,z.mdot=0,z.nodedot=0,z.xlcof=0,z.xmcof=0,z.nodecf=0,z.irez=0,z.d2201=0,z.d2211=0,z.d3210=0,z.d3222=0,z.d4410=0,z.d4422=0,z.d5220=0,z.d5232=0,z.d5421=0,z.d5433=0,z.dedt=0,z.del1=0,z.del2=0,z.del3=0,z.didt=0,z.dmdt=0,z.dnodt=0,z.domdt=0,z.e3=0,z.ee2=0,z.peo=0,z.pgho=0,z.pho=0,z.pinco=0,z.plo=0,z.se2=0,z.se3=0,z.sgh2=0,z.sgh3=0,z.sgh4=0,z.sh2=0,z.sh3=0,z.si2=0,z.si3=0,z.sl2=0,z.sl3=0,z.sl4=0,z.gsto=0,z.xfact=0,z.xgh2=0,z.xgh3=0,z.xgh4=0,z.xh2=0,z.xh3=0,z.xi2=0,z.xi3=0,z.xl2=0,z.xl3=0,z.xl4=0,z.xlamo=0,z.zmol=0,z.zmos=0,z.atime=0,z.xli=0,z.xni=0,z.bstar=a,z.ecco=o,z.argpo=s,z.inclo=c,z.mo=l,z.no=u,z.nokozai=u,z.nodeo=d,z.operationmode=n;let B=78/ld+1,ke=42/ld,Ae=ke*ke*ke*ke;z.init=`y`,z.t=0;let je=Dd({satn:r,ecco:z.ecco,epoch:i,inclo:z.inclo,no:z.no,method:z.method,opsmode:z.operationmode}),{ao:V,con42:Me,cosio:H,cosio2:U,eccsq:Ne,omeosq:Pe,posq:Fe,rp:Ie,rteosq:Le,sinio:Re}=je;if(z.no=je.no,z.con41=je.con41,z.gsto=je.gsto,z.a=(z.no*fd)**(-2/3),z.alta=z.a*(1+z.ecco)-1,z.altp=z.a*(1-z.ecco)-1,z.error=0,Pe>=0||z.no>=0){if(z.isimp=0,Ie<220/6378.135+1&&(z.isimp=1),P=B,A=Ae,ee=(Ie-1)*ld,ee<156){P=ee-78,ee<98&&(P=20);let e=(120-P)/ld;A=e*e*e*e,P=P/ld+1}k=1/Fe,ve=1/(V-P),z.eta=V*z.ecco*ve,C=z.eta*z.eta,S=z.ecco*z.eta,te=Math.abs(1-C),_=A*ve**4,v=_/te**3.5,h=v*z.no*(V*(1+1.5*C+S*(4+C))+.375*pd*ve/te*z.con41*(8+3*C*(8+C))),z.cc1=z.bstar*h,g=0,z.ecco>1e-4&&(g=-2*_*ve*gd*z.no*Re/z.ecco),z.x1mth2=1-U,z.cc4=2*z.no*v*V*Pe*(z.eta*(2+.5*C)+z.ecco*(.5+2*C)-pd*ve/(V*te)*(-3*z.con41*(1-2*S+C*(1.5-.5*S))+.75*z.x1mth2*(2*C-S*(1+C))*Math.cos(2*z.argpo))),z.cc5=2*v*V*Pe*(1+2.75*(C+S)+S*C),y=U*U,he=1.5*pd*k*z.no,ge=.5*he*pd*k,_e=-.46875*hd*k*k*z.no,z.mdot=z.no+.5*he*Le*z.con41+.0625*ge*Le*(13-78*U+137*y),z.argpdot=-.5*he*Me+.0625*ge*(7-114*U+395*y)+_e*(3-36*U+49*y),be=-he*H,z.nodedot=be+(.5*ge*(4-19*U)+2*_e*(3-7*U))*H,ye=z.argpdot+z.nodedot,z.omgcof=z.bstar*g*Math.cos(z.argpo),z.xmcof=0,z.ecco>1e-4&&(z.xmcof=-_d*_*z.bstar/S),z.nodecf=3.5*Pe*be*z.cc1,z.t2cof=1.5*z.cc1,z.xlcof=Math.abs(H+1)>15e-13?-.25*gd*Re*(3+5*H)/(1+H):-.25*gd*Re*(3+5*H)/15e-13,z.aycof=-.5*gd*Re;let e=1+z.eta*Math.cos(z.mo);if(z.delmo=e*e*e,z.sinmao=Math.sin(z.mo),z.x7thm1=7*U-1,2*rd/z.no>=225){z.method=`d`,z.isimp=1,me=0,E=z.inclo;let e=Cd({epoch:i,ep:z.ecco,argpp:z.argpo,tc:me,inclp:z.inclo,nodep:z.nodeo,np:z.no,e3:z.e3,ee2:z.ee2,peo:z.peo,pgho:z.pgho,pho:z.pho,pinco:z.pinco,plo:z.plo,se2:z.se2,se3:z.se3,sgh2:z.sgh2,sgh3:z.sgh3,sgh4:z.sgh4,sh2:z.sh2,sh3:z.sh3,si2:z.si2,si3:z.si3,sl2:z.sl2,sl3:z.sl3,sl4:z.sl4,xgh2:z.xgh2,xgh3:z.xgh3,xgh4:z.xgh4,xh2:z.xh2,xh3:z.xh3,xi2:z.xi2,xi3:z.xi3,xl2:z.xl2,xl3:z.xl3,xl4:z.xl4,zmol:z.zmol,zmos:z.zmos});z.e3=e.e3,z.ee2=e.ee2,z.peo=e.peo,z.pgho=e.pgho,z.pho=e.pho,z.pinco=e.pinco,z.plo=e.plo,z.se2=e.se2,z.se3=e.se3,z.sgh2=e.sgh2,z.sgh3=e.sgh3,z.sgh4=e.sgh4,z.sh2=e.sh2,z.sh3=e.sh3,z.si2=e.si2,z.si3=e.si3,z.sl2=e.sl2,z.sl3=e.sl3,z.sl4=e.sl4,{sinim:p,cosim:f,em:b,emsq:x,s1:j,s2:M,s3:ne,s4:N,s5:re,ss1:ie,ss2:ae,ss3:F,ss4:I,ss5:oe,sz1:L,sz3:se,sz11:ce,sz13:le,sz21:ue,sz23:de,sz31:fe,sz33:pe}=e,z.xgh2=e.xgh2,z.xgh3=e.xgh3,z.xgh4=e.xgh4,z.xh2=e.xh2,z.xh3=e.xh3,z.xi2=e.xi2,z.xi3=e.xi3,z.xl2=e.xl2,z.xl3=e.xl3,z.xl4=e.xl4,z.zmol=e.zmol,z.zmos=e.zmos,{nm:O,z1:xe,z3:Se,z11:Ce,z13:we,z21:Te,z23:Ee,z31:De,z33:Oe}=e;let t=Sd(z,{inclo:E,init:z.init,ep:z.ecco,inclp:z.inclo,nodep:z.nodeo,argpp:z.argpo,mp:z.mo,opsmode:z.operationmode});z.ecco=t.ep,z.inclo=t.inclp,z.nodeo=t.nodep,z.argpo=t.argpp,z.mo=t.mp,w=0,T=0,D=0;let n=wd({cosim:f,emsq:x,argpo:z.argpo,s1:j,s2:M,s3:ne,s4:N,s5:re,sinim:p,ss1:ie,ss2:ae,ss3:F,ss4:I,ss5:oe,sz1:L,sz3:se,sz11:ce,sz13:le,sz21:ue,sz23:de,sz31:fe,sz33:pe,t:z.t,tc:me,gsto:z.gsto,mo:z.mo,mdot:z.mdot,no:z.no,nodeo:z.nodeo,nodedot:z.nodedot,xpidot:ye,z1:xe,z3:Se,z11:Ce,z13:we,z21:Te,z23:Ee,z31:De,z33:Oe,ecco:z.ecco,eccsq:Ne,em:b,argpm:w,inclm:E,mm:D,nm:O,nodem:T,irez:z.irez,atime:z.atime,d2201:z.d2201,d2211:z.d2211,d3210:z.d3210,d3222:z.d3222,d4410:z.d4410,d4422:z.d4422,d5220:z.d5220,d5232:z.d5232,d5421:z.d5421,d5433:z.d5433,dedt:z.dedt,didt:z.didt,dmdt:z.dmdt,dnodt:z.dnodt,domdt:z.domdt,del1:z.del1,del2:z.del2,del3:z.del3,xfact:z.xfact,xlamo:z.xlamo,xli:z.xli,xni:z.xni});z.irez=n.irez,z.atime=n.atime,z.d2201=n.d2201,z.d2211=n.d2211,z.d3210=n.d3210,z.d3222=n.d3222,z.d4410=n.d4410,z.d4422=n.d4422,z.d5220=n.d5220,z.d5232=n.d5232,z.d5421=n.d5421,z.d5433=n.d5433,z.dedt=n.dedt,z.didt=n.didt,z.dmdt=n.dmdt,z.dnodt=n.dnodt,z.domdt=n.domdt,z.del1=n.del1,z.del2=n.del2,z.del3=n.del3,z.xfact=n.xfact,z.xlamo=n.xlamo,z.xli=n.xli,z.xni=n.xni}z.isimp!==1&&(m=z.cc1*z.cc1,z.d2=4*V*ve*m,R=z.d2*ve*z.cc1/3,z.d3=(17*V+P)*R,z.d4=.5*R*V*ve*(221*V+31*P)*z.cc1,z.t3cof=z.d2+2*m,z.t4cof=.25*(3*z.d3+z.cc1*(12*z.d2+10*m)),z.t5cof=.2*(3*z.d4+12*z.cc1*z.d3+6*z.d2*z.d2+15*m*(2*z.d2+m)))}Ad(z,0),z.init=`n`}function Md(e,t){jd(e,{opsmode:t,satn:e.satnum,epoch:e.jdsatepoch-2433281.5,xbstar:e.bstar,xecco:e.ecco,xargpo:e.argpo,xinclo:e.inclo,xmo:e.mo,xno:e.no,xnodeo:e.nodeo})}function Nd(e,t){let n=e.substring(2,7),r=parseInt(e.substring(18,20),10),i=parseFloat(e.substring(20,32)),a=parseFloat(e.substring(33,43)),o=parseFloat(`${e.substring(44,45)}.${e.substring(45,50)}E${e.substring(50,52)}`),s=parseFloat(`${e.substring(53,54)}.${e.substring(54,59)}E${e.substring(59,61)}`),c=parseFloat(t.substring(8,16))*ad,l=parseFloat(t.substring(17,25))*ad,u=parseFloat(`.${t.substring(26,33).replace(/\s/g,`0`)}`),d=parseFloat(t.substring(34,42))*ad,f=parseFloat(t.substring(43,51))*ad,p=parseFloat(t.substring(52,63))/vd;a/=vd*1440,o/=vd*1440*1440;let m=r<57?r+2e3:r+1900,{mon:h,day:g,hr:_,minute:v,sec:y}=yd(m,i),b=xd(m,h,g,_,v,y),x={error:0,satnum:n,epochyr:r,epochdays:i,ndot:a,nddot:o,bstar:s,inclo:c,nodeo:l,ecco:u,argpo:d,mo:f,no:p,jdsatepoch:b};return Md(x,`i`),x}function Pd(e,t=`i`){let n=e.NORAD_CAT_ID.toString(),r=new Date(e.EPOCH.endsWith(`Z`)?e.EPOCH:`${e.EPOCH}Z`),i=r.getUTCFullYear(),a=Number(i.toString().slice(-2)),o=(r.valueOf()-new Date(Date.UTC(i,0,1,0,0,0)).valueOf())/864e5+1,s=Number(e.MEAN_MOTION_DOT),c=Number(e.MEAN_MOTION_DDOT);s/=vd*1440,c/=vd*1440*1440;let l=Number(e.BSTAR),u=Number(e.INCLINATION)*ad,d=Number(e.RA_OF_ASC_NODE)*ad,f=Number(e.ECCENTRICITY),p=Number(e.ARG_OF_PERICENTER)*ad,m=Number(e.MEAN_ANOMALY)*ad,h=Number(e.MEAN_MOTION)/vd,{mon:g,day:_,hr:v,minute:y,sec:b}=yd(i,o),x=xd(i,g,_,v,y,b),S={error:0,satnum:n,epochyr:a,epochdays:o,ndot:s,nddot:c,bstar:l,inclo:u,nodeo:d,ecco:f,argpo:p,mo:m,no:h,jdsatepoch:x};return Md(S,t),S}var Fd=e=>e.tempa<=0;function Id(e,...t){let n=t.at(-1),r=typeof n==`object`&&!(n instanceof Date)?n:void 0,i=Ad(e,(xd(...r?t.slice(0,-1):t)-e.jdsatepoch)*sd);return r?.communityDecayCheckEnabled&&i&&Fd(e)?(e.error=kd.Decayed,null):i}function Ld(e){return e*od}function Rd(e){if(e<-rd/2||e>rd/2)throw RangeError(`Latitude radians must be in range [-pi/2; pi/2].`);return Ld(e)}function zd(e){if(e<-rd||e>rd)throw RangeError(`Longitude radians must be in range [-pi; pi].`);return Ld(e)}function Bd(e,t){let n=6378.137,r=Math.sqrt(e.x*e.x+e.y*e.y),i=21.384685799999716/n,a=2*i-i*i,o=((Math.atan2(e.y,e.x)-t+rd)%id+id)%id-rd,s=0,c=Math.atan2(e.z,Math.sqrt(e.x*e.x+e.y*e.y)),l=0;for(;s++<20;)l=1/Math.sqrt(1-Math.sin(c)*Math.sin(c)*a),c=Math.atan2(e.z+n*l*a*Math.sin(c),r);let u=r/Math.cos(c)-n*l;return{longitude:o,latitude:c,height:u}}var Vd={stations:`#ffffff`,visual:`#ffe9a0`,starlink:`#7fd0ff`,oneweb:`#9fe0ff`,"gps-ops":`#ffd27f`,"glo-ops":`#ffb07f`,galileo:`#ffc47f`,beidou:`#ffb87f`,gnss:`#ffd27f`,sbas:`#ffdc9f`,weather:`#a0ffb8`,noaa:`#a0ffb8`,goes:`#a0ffb8`,resource:`#b8ffa0`,sarsat:`#c8ffa0`,dmc:`#b8ffa0`,tdrss:`#ffa0d0`,argos:`#b0ffb0`,planet:`#c0ffc0`,spire:`#c0ffd0`,geo:`#ff9fdc`,intelsat:`#ff9fdc`,ses:`#ff9fdc`,"iridium-NEXT":`#ffa0f0`,orbcomm:`#ffa0e8`,globalstar:`#ffa0e8`,swarm:`#d0d0ff`,amateur:`#d8a0ff`,"x-comm":`#ffa0c8`,"other-comm":`#ffa0c8`,satnogs:`#c8a0ff`,gorizont:`#ff9fdc`,raduga:`#ff9fdc`,molniya:`#ffb0b0`,nnss:`#ffdca0`,musson:`#ffd0a0`,science:`#a0f0ff`,geodetic:`#a0e8ff`,engineering:`#c0c0ff`,education:`#d0c0ff`,military:`#ff8080`,radar:`#ff9090`,cubesat:`#c0ffe0`,other:`#cccccc`,analyst:`#666666`},Hd={25544:`ISS`,48274:`Tiangong`,20580:`Hubble`,43013:`NOAA-20`,25994:`Terra`,27424:`Aqua`,39084:`Landsat 8`,49260:`Landsat 9`,41866:`GOES-16`,43226:`GOES-17`,40697:`Sentinel-2A`,44714:`Starlink-1007`,33591:`NOAA-19`,25338:`NOAA-15`,28654:`NOAA-18`,37849:`Suomi NPP`,36411:`CryoSat-2`,27386:`Envisat`,22675:`Cosmos 2251 debris`,20638:`Ofeq`,38771:`Metop-B`,41240:`Jason-3`,48859:`Shijian-21`,43689:`SAOCOM 1A`,39634:`Sentinel-1A`,41335:`Sentinel-3A`,42063:`Sentinel-2B`,43437:`Sentinel-3B`,25989:`XMM-Newton`,25867:`Chandra`,26464:`Cluster II`,37820:`Tiangong-1`,43435:`TESS`,39144:`IRIS`,36577:`SDO`,40376:`Fermi`,33053:`Fermi (GLAST)`,27540:`INTEGRAL`,39197:`Gaia`,44874:`CHEOPS`,41783:`Yaogan`,32711:`GPS IIR-M`,40730:`GPS IIF-10`,43873:`GPS III-1`,28474:`Swift`,36395:`SES-1`,27386.1:``,46984:`Sentinel-6A`,48915:`Landsat 9`,25063:`Iridium 8`,40258:`CZ-4B debris`,44420:`Starlink`},Ud={sat_station:.109,sat_telescope:.0132,sat_comms:.0065,sat_gps:.0052,sat_weather:.0045,sat_starlink:.0085,sat_cubesat:3e-4,sat_rocketbody:.009,fam_starlink_v1:.0085,fam_starlink_v2:.03,fam_oneweb:.0035,fam_dove:7e-4,fam_lemur:6e-4,fam_iridium:.0094,fam_glonass:.0072,fam_beidou:.012,fam_galileo:.0147,fam_gps:.0147,fam_globalstar:.008,fam_geo_comms:.04,fam_kineis:9e-4,fam_eo_china:.01,fam_o3b:.01,fam_gonets:.0025,fam_orbcomm:.007,fam_tianmu:.0015},Wd={fam_starlink_v1:`Starlink v1.5`,fam_starlink_v2:`Starlink v2 mini`,fam_oneweb:`OneWeb`,fam_dove:`Planet Dove (Flock) 3U cubesat`,fam_lemur:`Spire Lemur 3U cubesat`,fam_iridium:`Iridium NEXT`,fam_glonass:`GLONASS-K (Cosmos)`,fam_beidou:`BeiDou-3`,fam_galileo:`Galileo FOC`,fam_gps:`GPS Block III`,fam_globalstar:`Globalstar second generation`,fam_geo_comms:`geostationary communications satellite (Intelsat/SES/Eutelsat class)`,fam_kineis:`Kineis IoT nanosatellite`,fam_eo_china:`Chinese Earth-observation satellite (Gaofen/Yaogan/Jilin class)`,fam_o3b:`O3b mPOWER`,fam_gonets:`Gonets-M`,fam_orbcomm:`Orbcomm OG2`,fam_tianmu:`Tianmu-1 microsatellite`},Gd=class{constructor(e,t,n){this.u=e,this.solar=n,this.visible=!0,this.groups=t.groups,this.fetched=t.fetched,this.bundleSource=t.source||`CelesTrak`,this.sats=t.sats,this.count=this.sats.length,this.satrec=Array(this.count).fill(null),this.pos=new Float64Array(this.count*3),this.vel=new Float64Array(this.count*3),this.lastT=new Float64Array(this.count).fill(NaN),this.rel=new Float32Array(this.count*3),this.posD=new Float64Array(this.count*3),this.nearIdx=[];let r=new Float32Array(this.count*3),i=new Float32Array(this.count);this.alpha=new Float32Array(this.count).fill(1);let a=new J;for(let e=0;e<this.count;e++){let t=this.sats[e],n=t.g.map(e=>this.groups[e]),o=n.find(e=>e!==`active`&&e!==`visual`&&e!==`analyst`)||n[0];a.set(Vd[o]||`#ccc`),n.includes(`stations`)&&a.set(`#ffffff`),r[3*e]=a.r,r[3*e+1]=a.g,r[3*e+2]=a.b,i[e]=Hd[t.id]||n.includes(`stations`)?6:n.includes(`starlink`)||n.includes(`oneweb`)?2.2:3.2,t.primary=o}let o=new Tr;o.setAttribute(`position`,new Y(this.rel,3)),o.setAttribute(`color`,new Y(r,3)),o.setAttribute(`alpha`,new Y(this.alpha,1)),o.setAttribute(`size`,new Y(i,1)),o.boundingSphere=new _r(new q,1e30),this.mat=new Na({uniforms:{uPixelRatio:{value:1}},vertexShader:`attribute vec3 color; attribute float alpha; attribute float size; varying vec3 vColor; varying float vAlpha; uniform float uPixelRatio;
        #include <common>
#include <logdepthbuf_pars_vertex>
        void main() { vColor = color; vAlpha = alpha; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = size * uPixelRatio; if (alpha < 0.01) gl_Position = vec4(2.0,2.0,2.0,1.0);
        #include <logdepthbuf_vertex>
  }`,fragmentShader:`varying vec3 vColor; varying float vAlpha;
        #include <logdepthbuf_pars_fragment>
        void main() {
    #include <logdepthbuf_fragment>
          vec2 c = gl_PointCoord - 0.5; float r = length(c) * 2.0; float a = smoothstep(1.0, 0.5, r) * vAlpha; gl_FragColor = vec4(vColor, a); }`,transparent:!0,depthWrite:!1,depthTest:!0}),this.points=new pa(o,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=15,e.scene.add(this.points),this.byId=new Map(this.sats.map((e,t)=>[e.id,t])),this.hideMarker=new Set,this._cursor=0,this._built=0,this.selectedTrack=null,this.tmpDate=new Date,this.liveStatus=`bundled elements`,this._refreshLive()}async _refreshLive(){try{let e=await fetch(`https://celestrak.org/NORAD/elements/gp.php?GROUP=active&FORMAT=json`,{cache:`no-store`});if(!e.ok)throw Error(e.status);let t=await e.json();if(!Array.isArray(t)||t.length<100)throw Error(`bad payload`);let n=0;for(let e of t){let t=this.byId.get(e.NORAD_CAT_ID);if(t===void 0)continue;let r=this.sats[t];Object.assign(r,{ep:e.EPOCH,mm:e.MEAN_MOTION,ecc:e.ECCENTRICITY,inc:e.INCLINATION,raan:e.RA_OF_ASC_NODE,argp:e.ARG_OF_PERICENTER,ma:e.MEAN_ANOMALY,bstar:e.BSTAR,mmdot:e.MEAN_MOTION_DOT,mmddot:e.MEAN_MOTION_DDOT,rev:e.REV_AT_EPOCH,els:e.ELEMENT_SET_NO}),r.l1=r.l2=null,this.satrec[t]=null,this.lastT[t]=NaN,n++}this.liveStatus=`live elements from CelesTrak (${n} updated ${new Date().toISOString().slice(11,16)} UTC)`,this._built=0}catch(e){let t=(Date.now()-new Date(this.fetched))/864e5,n=t<2?``:` — ${t.toFixed(0)} days old, so positions have drifted by roughly ${(t*10).toFixed(0)} km`;this.liveStatus=`bundled ${this.bundleSource} elements from ${this.fetched.slice(0,16).replace(`T`,` `)} UTC${n} (live refresh unavailable: ${e.message})`}}_rec(e){if(this.satrec[e])return this.satrec[e];let t=this.sats[e];if(t.l1&&t.l2){try{this.satrec[e]=Nd(t.l1,t.l2)}catch{this.satrec[e]=!1}if(this.satrec[e])return this.satrec[e]}try{this.satrec[e]=Pd({OBJECT_NAME:t.n,OBJECT_ID:t.intl,EPOCH:t.ep,MEAN_MOTION:t.mm,ECCENTRICITY:t.ecc,INCLINATION:t.inc,RA_OF_ASC_NODE:t.raan,ARG_OF_PERICENTER:t.argp,MEAN_ANOMALY:t.ma,EPHEMERIS_TYPE:0,CLASSIFICATION_TYPE:t.cls||`U`,NORAD_CAT_ID:t.id,ELEMENT_SET_NO:t.els,REV_AT_EPOCH:t.rev,BSTAR:t.bstar,MEAN_MOTION_DOT:t.mmdot,MEAN_MOTION_DDOT:t.mmddot})}catch{this.satrec[e]=!1}return this.satrec[e]}_propagate(e,t){let n=this._rec(e);if(!n)return!1;t=Math.floor(t),this.tmpDate.setTime(t);let r;try{r=Id(n,this.tmpDate)}catch{return!1}return!r||!r.position||!Number.isFinite(r.position.x)?!1:(this.pos[3*e]=r.position.x,this.pos[3*e+1]=r.position.y,this.pos[3*e+2]=r.position.z,this.vel[3*e]=r.velocity.x,this.vel[3*e+1]=r.velocity.y,this.vel[3*e+2]=r.velocity.z,this.lastT[e]=t,!0)}update(e){if(this.points.visible=this.visible,!this.visible)return;let t=this.solar.earth.pos,n=e.camPos,r=t[0]-n[0],i=t[1]-n[1],a=t[2]-n[2],o=Math.hypot(r,i,a)<3e6;if(this.points.visible=o,!o)return;let s=e.time.unixMs,c=Math.abs(e.time.speed)>50?6:3.5,l=performance.now(),u=0;for(;performance.now()-l<c&&u<this.count;)this._propagate(this._cursor,s),this._cursor=(this._cursor+1)%this.count,u++;for(let e of[25544,48274,20580]){let t=this.byId.get(e);t!==void 0&&this._propagate(t,s)}this.selectedIndex!==void 0&&this.selectedIndex>=0&&this._propagate(this.selectedIndex,s);let d=e.rig.focus;d&&d.ref&&d.ref.layer===`sats`&&this._propagate(d.ref.index,s);for(let e of this.nearIdx)this._propagate(e,s);let f=n[0]-t[0],p=n[1]-t[1],m=n[2]-t[2],h=[];this.points.position.set(r,i,a);for(let e=0;e<this.count;e++){if(!Number.isFinite(this.lastT[e])){this.alpha[e]=0;continue}let t=(s-this.lastT[e])/1e3;if(Math.abs(t)>600){this.alpha[e]=0;continue}let n=this.pos[3*e]+this.vel[3*e]*t,r=this.pos[3*e+1]+this.vel[3*e+1]*t,i=this.pos[3*e+2]+this.vel[3*e+2]*t;this.posD[3*e]=n,this.posD[3*e+1]=r,this.posD[3*e+2]=i,this.rel[3*e]=n,this.rel[3*e+1]=r,this.rel[3*e+2]=i,this.alpha[e]=this.hideMarker.has(e)?.02:1,Math.abs(n-f)<40&&Math.abs(r-p)<40&&Math.abs(i-m)<40&&h.length<40&&h.push(e)}if(this.nearIdx=h,this.earthAtUpdate=[t[0],t[1],t[2]],this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.alpha.needsUpdate=!0,this.mat.uniforms.uPixelRatio.value=e.pixelRatio,this.selectedTrack){Math.abs(s-this.trackT0)>2500&&this._buildTrack(this.selectedIndex);let e=this.trackAnchor;this.selectedTrack.position.set(r+e[0],i+e[1],a+e[2])}}variant(e){let t=this.sats[e],n=t.n.toUpperCase();return/^STARLINK/.test(n)?t.id>55300?`fam_starlink_v2`:`fam_starlink_v1`:/^ONEWEB/.test(n)?`fam_oneweb`:/^FLOCK|^DOVE|^SKYSAT/.test(n)?`fam_dove`:/^LEMUR/.test(n)?`fam_lemur`:/^IRIDIUM/.test(n)?`fam_iridium`:/^COSMOS/.test(n)&&t.g.some(e=>/glo-ops|gnss/.test(this.groups[e]))?`fam_glonass`:/^BEIDOU/.test(n)?`fam_beidou`:/^GSAT0|^GALILEO/.test(n)?`fam_galileo`:/^GPS|^NAVSTAR/.test(n)?`fam_gps`:/^GLOBALSTAR/.test(n)?`fam_globalstar`:/^INTELSAT|^SES[ -]|^EUTELSAT|^GALAXY|^ECHOSTAR|^ASTRA|^JCSAT|^INMARSAT|^ZHONGXING|^CHINASAT|^ARABSAT|^TELSTAR|^VIASAT|^SKYNET|^HOTBIRD|^THAICOM|^AMAZONAS|^YAMAL|^EXPRESS|^DIRECTV|^SIRIUS|^XM /.test(n)&&t.g.some(e=>/geo|intelsat|ses|x-comm|other-comm|gorizont|raduga/.test(this.groups[e]))?`fam_geo_comms`:/^KINEIS/.test(n)?`fam_kineis`:/^GAOFEN|^YAOGAN|^JILIN|^SHIJIAN|^ZIYUAN|^HAIYANG|^HUANJING/.test(n)?`fam_eo_china`:/^O3B/.test(n)?`fam_o3b`:/^GONETS/.test(n)?`fam_gonets`:/^ORBCOMM/.test(n)?`fam_orbcomm`:/^TIANMU/.test(n)?`fam_tianmu`:this.genericVariant(e)}genericVariant(e){let t=this.sats[e],n=t.g.map(e=>this.groups[e]);return/ R\/B/.test(t.n)||/ DEB/.test(t.n)?`sat_rocketbody`:n.includes(`stations`)&&/ISS|TIANHE|CSS|MENGTIAN|WENTIAN|ZARYA|NAUKA|PROGRESS|SOYUZ|DRAGON|CYGNUS/.test(t.n)?`sat_station`:n.includes(`starlink`)||n.includes(`oneweb`)||n.includes(`iridium-NEXT`)?`sat_starlink`:n.includes(`gps-ops`)||n.includes(`glo-ops`)||n.includes(`galileo`)||n.includes(`beidou`)||n.includes(`gnss`)||n.includes(`sbas`)?`sat_gps`:/HST|HUBBLE|TESS|CHANDRA|XMM|SWIFT|FERMI|GAIA|WISE|KEPLER|IRIS|SDO|INTEGRAL|CHEOPS/.test(t.n)?`sat_telescope`:n.includes(`weather`)||n.includes(`noaa`)||n.includes(`goes`)||n.includes(`resource`)||n.includes(`planet`)||n.includes(`spire`)||n.includes(`sarsat`)||n.includes(`science`)||n.includes(`geodetic`)?`sat_weather`:n.includes(`cubesat`)||n.includes(`amateur`)||n.includes(`satnogs`)||n.includes(`education`)?`sat_cubesat`:`sat_comms`}_buildTrack(e){let t=this._rec(e);if(!t)return;let n=2*Math.PI/t.no,r=1600,i=new Float32Array(r*3),a=this.u.time.unixMs;this.tmpDate.setTime(a);let o;try{o=Id(t,this.tmpDate).position}catch{return}this.trackAnchor=[o.x,o.y,o.z],this.trackT0=a;for(let e=0;e<r;e++){this.tmpDate.setTime(a+(e/1599-.5)*n*6e4);try{let n=Id(t,this.tmpDate);i[3*e]=n.position.x-o.x,i[3*e+1]=n.position.y-o.y,i[3*e+2]=n.position.z-o.z}catch{}}if(this.selectedTrack)this.selectedTrack.geometry.attributes.position.array.set(i),this.selectedTrack.geometry.attributes.position.needsUpdate=!0;else{let e=new Tr;e.setAttribute(`position`,new Y(i,3)),e.boundingSphere=new _r(new q,1e30),this.selectedTrack=new na(e,new Ji({color:10482120,transparent:!0,opacity:.6,depthWrite:!1})),this.selectedTrack.frustumCulled=!1,this.u.scene.add(this.selectedTrack)}}satWorld(e,t){let n=this.solar.earth.pos;this.lastT[e]!==Math.floor(this.u.time.unixMs)&&this._propagate(e,this.u.time.unixMs);let r=(this.u.time.unixMs-this.lastT[e])/1e3;return t[0]=n[0]+this.pos[3*e]+this.vel[3*e]*r,t[1]=n[1]+this.pos[3*e+1]+this.vel[3*e+1]*r,t[2]=n[2]+this.pos[3*e+2]+this.vel[3*e+2]*r,t}nearestSurface(e){if(!this.points.visible)return 1/0;let t=this.earthAtUpdate||this.solar.earth.pos,n=e[0]-t[0],r=e[1]-t[1],i=e[2]-t[2],a=1/0;for(let e=0;e<this.count;e++){if(this.alpha[e]<.5&&!this.hideMarker.has(e))continue;let t=Math.hypot(this.posD[3*e]-n,this.posD[3*e+1]-r,this.posD[3*e+2]-i)-Ud[this.variant(e)]/2;t<a&&(a=t)}return a}pick(e,t,n){if(!this.points.visible)return null;let r=this.solar.earth.pos,i=t[0]-r[0],a=t[1]-r[1],o=t[2]-r[2],s=-1,c=10;for(let t=0;t<this.count;t++){if(this.alpha[t]<.5&&!this.hideMarker.has(t))continue;let r=this.posD[3*t]-i,l=this.posD[3*t+1]-a,u=this.posD[3*t+2]-o,d=Math.sqrt(r*r+l*l+u*u),f=(r*e.x+l*e.y+u*e.z)/d;if(f<.999)continue;let p=Math.acos(Math.min(1,f))*n;p<c&&(c=p,s=t)}return s<0?null:{sepPx:c,desc:this.describe(s)}}showTrack(e){if(this.selectedTrack&&=(this.u.scene.remove(this.selectedTrack),this.selectedTrack.geometry.dispose(),null),this.selectedIndex=-1,!e||e.ref.layer!==`sats`)return;let t=e.ref.index;this.selectedIndex=t,this._buildTrack(t)}describe(e){let t=this,n=this.sats[e];this._rec(e);let r=[[`NORAD ID`,String(n.id)],[`International designator`,`${n.intl} (launched ${Kd(n.intl)})`]],i=n.g.map(e=>this.groups[e]).filter(e=>e!==`analyst`).join(`, `);r.push([`Categories`,i||`—`]);let a=n.mm,o=1440/a,s=Math.cbrt(398600.4418/(a*2*Math.PI/86400)**2);r.push([`Orbital period`,zu(o*60)],[`Inclination`,`${$(n.inc,3)}°`],[`Eccentricity`,$(n.ecc,5)]),r.push([`Perigee / apogee altitude`,`${$(s*(1-n.ecc)-Pu,4)} / ${$(s*(1+n.ecc)-Pu,4)} km`]),this._propagate(e,this.u.time.unixMs);let c=Math.hypot(this.pos[3*e],this.pos[3*e+1],this.pos[3*e+2]),l=Math.hypot(this.vel[3*e],this.vel[3*e+1],this.vel[3*e+2]);r.push([`Altitude (now)`,`${$(c-Pu,4)} km`],[`Speed (now)`,`${$(l,4)} km/s (${$(l*3600,5)} km/h)`]);try{let t=Ed(this.u.time.date),n=Bd({x:this.pos[3*e],y:this.pos[3*e+1],z:this.pos[3*e+2]},t);r.push([`Sub-satellite point`,`${$(Rd(n.latitude),3)}°, ${$(zd(n.longitude),3)}°`])}catch{}let u=(this.u.time.unixMs-Date.parse(n.ep+`Z`))/864e5;r.push([`Element set epoch`,`${n.ep.slice(0,19).replace(`T`,` `)} UTC (${$(u,2)} days ago)`],[`Drag term B*`,n.bstar.toExponential(3)],[`Revolutions at epoch`,String(n.rev)]);let d=n.primary===`analyst`?`Unidentified / analyst object`:n.n.includes(`DEB`)?`Debris`:n.n.includes(`R/B`)?`Rocket body`:`Satellite`;Hd[n.id];let f=`${d} tracked by radar and optical sensors. Position is computed live with the SGP4 propagator from the latest published orbital elements (accuracy typically ~1 km near the epoch, degrading by a few km per day). Shown as a marker: element sets carry no information about physical size.`;return n.id===25544?f=`The International Space Station, the largest structure ever built in space: 109 m across, 420 tonnes, continuously crewed since November 2000. It circles Earth every 93 minutes at 7.66 km/s, seeing 16 sunrises a day. `+f:n.id===48274?f=`Tiangong, China's space station, permanently crewed since 2022, about 55 m long with three modules. `+f:n.id===20580&&(f=`The Hubble Space Telescope, launched 1990: a 2.4 m telescope that has made over 1.5 million observations and transformed astronomy. `+f),{kind:`satellite`,kindLabel:d,name:n.n,variant:this.variant(e),sub:`${d} · ${i.split(`,`)[0]||``} · ${$(o,3)} min orbit`,radius:Ud[this.variant(e)]/2,rows:r,desc:f,source:`CelesTrak GP element sets — ${this.liveStatus}. Propagation: SGP4 (satellite.js). TEME frame treated as J2000 (≈0.4° precession offset ignored).`,ref:{layer:`sats`,index:e},getPos:(n,r)=>t.satWorld(e,r)}}labels(e,t){if(!this.points.visible)return;let n=this.solar.earth.pos,r=e.camPos,i=n[0]-r[0],a=n[1]-r[1],o=n[2]-r[2],s=Math.hypot(i,a,o),c=new Set([25544,48274,20580]);if(s<6e4)for(let t of Object.keys(Hd))e.labelDensity>.4&&c.add(+t);for(let e of c){let n=this.byId.get(e);n===void 0||this.alpha[n]<.5||t.push({text:Hd[e]||this.sats[n].n,x:i+this.rel[3*n],y:a+this.rel[3*n+1],z:o+this.rel[3*n+2],cls:`sat`,prio:e===25544?80:30,ref:{layer:`sats`,index:n}})}if(s<8e4&&e.labelDensity>.2){let e=r[0]-n[0],s=r[1]-n[1],l=r[2]-n[2],u=[];for(let t=0;t<this.count;t++){if(this.alpha[t]<.5)continue;let n=Math.hypot(this.rel[3*t]-e,this.rel[3*t+1]-s,this.rel[3*t+2]-l);n<1500&&u.push([n,t])}u.sort((e,t)=>e[0]-t[0]);for(let[,e]of u.slice(0,12))c.has(this.sats[e].id)||t.push({text:this.sats[e].n,x:i+this.rel[3*e],y:a+this.rel[3*e+1],z:o+this.rel[3*e+2],cls:`sat`,prio:25,ref:{layer:`sats`,index:e}})}}searchEntries(){return this.sats.map((e,t)=>({name:e.n,alt:`NORAD ${e.id}`,kind:`satellite`,ref:{layer:`sats`,index:t},lowPrio:!Hd[e.id]}))}};function Kd(e){let t=parseInt(e.slice(0,4));return Number.isFinite(t)?t:`?`}var qd=e=>document.getElementById(e),Jd=class{constructor(e){this.u=e,this.searchIndex=null,this._bind()}_bind(){let e=this.u;qd(`info-close`).onclick=()=>e.select(null),qd(`btn-goto`).onclick=()=>e.selection&&e.rig.goTo(e.selection),qd(`btn-follow`).onclick=()=>e.selection&&e.rig.setOrbit(e.selection),qd(`t-pause`).onclick=()=>e.time.togglePause(),qd(`t-fwd`).onclick=()=>e.time.faster(),qd(`t-rev`).onclick=()=>e.time.slower(),qd(`t-now`).onclick=()=>e.time.setNow(),qd(`btn-mode`).onclick=()=>e.rig.toggleMode(),qd(`btn-help`).onclick=()=>qd(`help`).hidden=!1,qd(`help-close`).onclick=()=>qd(`help`).hidden=!0,qd(`help`).addEventListener(`click`,e=>{e.target===qd(`help`)&&(qd(`help`).hidden=!0)}),qd(`limit-mag`).oninput=t=>{e.layers.stars.setLimitMag(+t.target.value),e.layers.mcstars.setLimitMag(+t.target.value),e.layers.gaia.setLimitMag(+t.target.value),qd(`limit-mag-out`).textContent=(+t.target.value).toFixed(1)},qd(`label-density`).oninput=t=>{e.labelDensity=+t.target.value},qd(`all-stars`).onchange=t=>{let n=+!!t.target.checked;for(let t of[`stars`,`mcstars`,`gaia`])e.layers[t].mat.uniforms.uAllStars.value=n;qd(`limit-mag`).disabled=!!n};let t=[[`stars`,`Stars (HYG, 113k)`],[`gaia`,`Deep star field (Gaia DR3, 1.1M)`],[`con`,`Constellation figures`],[`solar`,`Planets & moons`],[`orbits`,`Orbit lines`],[`asteroids`,`Asteroids (36k, JPL)`],[`comets`,`Comets (600)`],[`exo`,`Exoplanets 6,360 + 7,034 candidates`],[`dso`,`Nebulae & clusters & galaxies (13.8k)`],[`galaxies`,`2MRS galaxies (43k, shaped)`],[`gmodels`,`Galaxy particle models (on demand)`],[`volumes`,`3D nebula & cluster volumes`],[`mw`,`Milky Way model`],[`sats`,`Satellites (14k, live SGP4)`],[`craft`,`Deep-space probes`],[`models`,`Close-range 3D models (generic)`],[`mcstars`,`Magellanic Cloud stars (Gaia, 108k)`],[`bh`,`Black holes (stellar, intermediate & supermassive)`],[`quasars`,`Quasars & active galaxies (Milliquas, 1.0M)`]],n=qd(`layer-toggles`);for(let[r,i]of t){let t=document.createElement(`label`),a=document.createElement(`input`);a.type=`checkbox`,a.checked=!0,a.onchange=()=>e.setLayerVisible(r,a.checked),t.appendChild(a),t.appendChild(document.createTextNode(` `+i)),n.appendChild(t)}let r=[[`Earth`,{layer:`solar`,id:`earth`}],[`Moon`,{layer:`solar`,id:`moon301`}],[`ISS`,{layer:`sats`,norad:25544}],[`Mars`,{layer:`solar`,id:`mars`}],[`Jupiter`,{layer:`solar`,id:`jupiter`}],[`Saturn`,{layer:`solar`,id:`saturn`}],[`Pluto`,{layer:`solar`,id:`pluto`}],[`Voyager 1`,{layer:`craft`,name:`Voyager 1`}],[`Solar System`,{special:`solarsystem`}],[`α Centauri`,{layer:`stars`,proper:`Rigil Kentaurus`}],[`Sirius`,{layer:`stars`,proper:`Sirius`}],[`Betelgeuse`,{layer:`stars`,proper:`Betelgeuse`}],[`TRAPPIST-1`,{layer:`exo`,name:`TRAPPIST-1 e`}],[`Orion Nebula`,{layer:`dso`,name:`M42`}],[`Pleiades`,{layer:`dso`,name:`Pleiades`}],[`Sgr A*`,{layer:`dso`,name:`Sagittarius A*`}],[`Milky Way`,{special:`milkyway`}],[`Andromeda`,{layer:`dso`,name:`M31`}],[`Virgo Cluster`,{layer:`dso`,name:`Virgo Cluster`}],[`Local universe`,{special:`universe`}],[`Sgr A*`,{layer:`bh`,name:`Sagittarius A*`}],[`Observable universe`,{special:`cosmos`}]],i=qd(`quick-travel`);for(let[t,n]of r){let r=document.createElement(`button`);r.className=`chip`,r.textContent=t,r.onclick=()=>e.travel(n),i.appendChild(r)}let a=qd(`search`),o=qd(`search-results`),s=-1,c=[],l=()=>{o.innerHTML=``,c.forEach((e,t)=>{let n=document.createElement(`div`);n.className=`sr-item`+(t===s?` active`:``),n.innerHTML=`<span>${Yd(e.name)}${e.alt?` <span class="dim">${Yd(e.alt)}</span>`:``}</span><span class="sr-kind">${Yd(e.kind)}</span>`,n.onmousedown=t=>{t.preventDefault(),u(e)},o.appendChild(n)}),o.hidden=c.length===0},u=t=>{a.value=``,o.hidden=!0,a.blur(),e.travel(t.ref)};a.addEventListener(`input`,()=>{c=this.search(a.value),s=c.length?0:-1,l()}),a.addEventListener(`keydown`,e=>{e.key===`ArrowDown`?(s=Math.min(c.length-1,s+1),l(),e.preventDefault()):e.key===`ArrowUp`?(s=Math.max(0,s-1),l(),e.preventDefault()):e.key===`Enter`?c[s]&&u(c[s]):e.key===`Escape`&&(a.value=``,o.hidden=!0,a.blur())}),a.addEventListener(`blur`,()=>setTimeout(()=>{o.hidden=!0},150)),a.addEventListener(`focus`,()=>{c.length&&(o.hidden=!1)}),window.addEventListener(`keydown`,t=>{t.target.tagName!==`INPUT`&&(t.key===`/`?(t.preventDefault(),a.focus()):t.key===`.`?e.time.togglePause():t.key===`]`?e.time.faster():t.key===`[`?e.time.slower():t.key===`Escape`?e.select(null):t.key===`h`||t.key===`H`?qd(`help`).hidden=!qd(`help`).hidden:(t.key===`f`||t.key===`F`)&&e.rig.toggleMode())})}buildSearchIndex(){let e=[];for(let[t,n]of Object.entries(this.u.layers))if(n.searchEntries)for(let t of n.searchEntries())t.lc=t.name.toLowerCase(),t.lcAlt=(t.alt||``).toLowerCase(),e.push(t);this.searchIndex=e}search(e){if(e=e.trim().toLowerCase(),!e||!this.searchIndex)return[];let t=[],n=[],r=[];for(let t of this.searchIndex)if(t.lc.startsWith(e)?n.push(t):(t.lc.includes(e)||t.lcAlt&&t.lcAlt.includes(e))&&r.push(t),n.length>400)break;let i=e=>(e.lowPrio?10:0)+e.lc.length*.01-(e.prio||0);n.sort((e,t)=>i(e)-i(t)),r.sort((e,t)=>i(e)-i(t));for(let e of[...n,...r]){if(t.length>=25)break;t.push(e)}return t}showInfo(e){let t=qd(`info-panel`);if(!e){t.hidden=!0;return}t.hidden=!1,qd(`info-kind`).textContent=e.kindLabel||e.kind,qd(`info-name`).textContent=e.name,qd(`info-sub`).textContent=e.sub||``,qd(`info-desc`).textContent=e.desc||``;let n=qd(`info-table`);n.innerHTML=``;for(let[t,r]of e.rows||[]){let e=document.createElement(`tr`);e.innerHTML=`<td>${Yd(t)}</td><td>${Yd(String(r))}</td>`,n.appendChild(e)}qd(`info-source`).textContent=e.source?`Source: `+e.source:``,this._loadMedia(e)}async _loadMedia(e){let t=this._mediaToken=(this._mediaToken||0)+1,n=qd(`info-media`),r=qd(`info-img`),i=qd(`info-caption`),a=qd(`info-wiki`);if(n.hidden=!0,a.hidden=!0,r.removeAttribute(`src`),e.kind===`galaxy`&&e.ref?.layer===`galaxies`)return;let o=await $u(e);if(t===this._mediaToken){if(o&&(o.image&&(r.src=o.image,i.textContent=`Photograph: Wikipedia / Wikimedia Commons (${o.title})`,n.hidden=!1),a.innerHTML=`<span class="tag">From Wikipedia</span>${Yd(o.extract)} <a href="${o.url}" target="_blank" rel="noopener">Read more ↗</a>`,a.hidden=!1),!o||!o.image){if(e.kind===`exoplanet`){i.textContent=`Generating artist's impression…`,n.hidden=!1;let a=await td(e);if(t!==this._mediaToken)return;a?(r.src=a.image,i.textContent=a.caption):n.hidden=!0}else if(e.kind===`star`){let t=ed(e);t&&(r.src=t.image,i.textContent=t.caption,n.hidden=!1)}else if(e.variant){let t={sat_station:`space station`,sat_telescope:`space telescope`,sat_comms:`communications satellite`,sat_gps:`navigation satellite`,sat_weather:`Earth-observation satellite`,sat_starlink:`flat-panel broadband satellite`,sat_cubesat:`cubesat`,sat_rocketbody:`spent rocket stage`,ast_rubble:`rubble-pile asteroid`,ast_elongated:`elongated asteroid`,ast_cratered:`cratered asteroid`,ast_irregular:`irregular asteroid`,ast_metallic:`metallic asteroid`,comet_nucleus:`comet nucleus`}[e.variant]||e.variant;r.src=`/Starmap/models/${e.variant}.jpg`,i.textContent=Wd[e.variant]?`Rendering based on the ${Wd[e.variant]} design (AI-generated from the published spacecraft design; not a photograph of this unit). The 3D model you see up close is built from it.`:`Representative rendering of a ${t} (AI-generated; no photograph of this specific object exists). The same generic shape is used for its 3D model.`,n.hidden=!1}}if(!o&&[`star`,`exoplanet`,`dso`,`asteroid`,`comet`,`satellite`,`blackhole`,`quasar`].includes(e.kind)){let n=await nd(e);if(t!==this._mediaToken||!n)return;a.innerHTML=`<span class="tag">AI-written summary from the catalogue values above (may simplify; verify before citing)</span>${Yd(n)}`,a.hidden=!1}}}updateHUD(e){let t=this.u,n=t.rig;qd(`t-date`).textContent=t.time.dateLabel(),qd(`t-speed`).textContent=t.time.speedLabel(),qd(`t-pause`).classList.toggle(`active`,t.time.paused),qd(`btn-mode`).textContent=n.mode===`orbit`?`orbit`:`free flight`,qd(`btn-mode`).classList.toggle(`active`,n.mode===`free`);let r=n.focus;qd(`hud-focus`).textContent=r?n.mode===`orbit`?`around ${r.name}`:`near ${r.name}`:``;let i=Math.hypot(n.pos[0],n.pos[1],n.pos[2]),a=r?`${Ru(Math.max(0,n.distanceTo(n.focusPos)-r.radius))} above surface`:``;a+=` · ${Ru(i)} from Sun`,qd(`hud-dist`).textContent=a,qd(`hud-speed`).textContent=n.mode===`free`?`speed ${Ru(n.flySpeed)}/s`:``;let o=(r?n.distanceTo(n.focusPos):i)/e.pxPerRad,s=o*140,c=[[1,`km`],[Ou,`AU`],[ku,`ly`],[ku*1e3,`kly`],[ku*1e6,`Mly`],[ku*1e9,`Gly`]],l=c[0];for(let e of c)s>e[0]*.5&&(l=e);let u=s/l[0],d=10**Math.floor(Math.log10(u)),f=[1,2,5,10].map(e=>e*d).reduce((e,t)=>Math.abs(t-u)<Math.abs(e-u)?t:e),p=f*l[0]/o;qd(`scale-line`).style.width=`${p.toFixed(0)}px`,qd(`scale-text`).textContent=`${f>=1e3?f.toExponential(0).replace(`e+`,`e`):f} ${l[1]}`}};function Yd(e){return e.replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e])}var Xd=`
#include <common>
#include <logdepthbuf_pars_vertex>
`,Zd=`
#include <logdepthbuf_vertex>
`,Qd=`
#include <logdepthbuf_pars_fragment>
`,$d=`
#include <logdepthbuf_fragment>
`;function ef(e={}){return new Na({uniforms:{map:{value:null},hasMap:{value:0},nightMap:{value:null},hasNight:{value:0},baseColor:{value:new J(e.color||`#888`)},sunPos:{value:new q},ambient:{value:e.ambient??.02},emissive:{value:e.emissive??0},shadowCenter:{value:new q},shadowRadius:{value:0},specular:{value:+!!e.specular},bump:{value:e.bump??.6},ringInner:{value:0},ringOuter:{value:0},ringNormal:{value:new q(0,1,0)},ringOpacity:{value:0}},vertexShader:`
      varying vec3 vNormal; varying vec3 vWorld; varying vec2 vUv;
      ${Xd}
      void main() {
        vUv = uv;
        vNormal = normalize(mat3(modelMatrix) * normal);
        vec4 w = modelMatrix * vec4(position, 1.0); vWorld = w.xyz;
        gl_Position = projectionMatrix * viewMatrix * w;
        ${Zd}
      }`,fragmentShader:`
      uniform sampler2D map; uniform float hasMap; uniform sampler2D nightMap; uniform float hasNight; uniform vec3 baseColor; uniform vec3 sunPos; uniform float ambient; uniform float emissive; uniform float specular; uniform float bump;
      uniform float ringInner; uniform float ringOuter; uniform vec3 ringNormal; uniform float ringOpacity; uniform vec3 shadowCenter;
      varying vec3 vNormal; varying vec3 vWorld; varying vec2 vUv;
      ${Qd}
      void main() {
        ${$d}
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
      }`})}function tf(e,t=1){return new Na({uniforms:{color:{value:new J(e)},sunPos:{value:new q},strength:{value:t}},vertexShader:`
      varying vec3 vNormal; varying vec3 vWorld;
      ${Xd}
      void main() { vNormal = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position, 1.0); vWorld = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; ${Zd} }`,fragmentShader:`
      uniform vec3 color; uniform vec3 sunPos; uniform float strength; varying vec3 vNormal; varying vec3 vWorld;
      ${Qd}
      void main() { ${$d}
        vec3 N = normalize(vNormal); vec3 V = normalize(-vWorld); vec3 L = normalize(sunPos - vWorld);
        float rim = pow(1.0 - abs(dot(N, V)), 3.5);
        float lit = smoothstep(-0.3, 0.3, dot(N, L));
        float a = rim * (0.15 + 0.85 * lit) * strength;
        gl_FragColor = vec4(color * a, a);
      }`,transparent:!0,blending:2,depthWrite:!1,side:0})}function nf(){return new Na({uniforms:{map:{value:null},sunPos:{value:new q}},vertexShader:`
      varying vec3 vNormal; varying vec3 vWorld; varying vec2 vUv; ${Xd}
      void main() { vUv = uv; vNormal = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position, 1.0); vWorld = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; ${Zd} }`,fragmentShader:`
      uniform sampler2D map; uniform vec3 sunPos; varying vec3 vNormal; varying vec3 vWorld; varying vec2 vUv; ${Qd}
      void main() { ${$d}
        float c = texture2D(map, vUv).r; vec3 N = normalize(vNormal); vec3 L = normalize(sunPos - vWorld);
        float lit = smoothstep(-0.1, 0.15, dot(N, L)) * max(dot(N, L), 0.0) * 0.9 + 0.02;
        gl_FragColor = vec4(vec3(lit), c * 0.95);
      }`,transparent:!0,depthWrite:!1})}function rf(e,t,n,r,i){return new Na({uniforms:{map:{value:i||null},hasMap:{value:+!!i},inner:{value:e},outer:{value:t},color:{value:new J(n)},opacity:{value:r},sunPos:{value:new q},center:{value:new q},planetRadius:{value:1},normal:{value:new q(0,1,0)}},vertexShader:`
      varying vec3 vWorld; varying vec3 vLocal; ${Xd}
      void main() { vLocal = position; vec4 w = modelMatrix * vec4(position, 1.0); vWorld = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; ${Zd} }`,fragmentShader:`
      uniform sampler2D map; uniform float hasMap; uniform float inner; uniform float outer; uniform vec3 color; uniform float opacity; uniform vec3 sunPos; uniform vec3 center; uniform float planetRadius; uniform vec3 normal;
      varying vec3 vWorld; varying vec3 vLocal; ${Qd}
      void main() { ${$d}
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
      }`,transparent:!0,side:2,depthWrite:!1})}function af(){return new Na({uniforms:{map:{value:null},hasMap:{value:0},color:{value:new J(`#fff2cc`)}},vertexShader:`
      varying vec3 vNormal; varying vec3 vWorld; varying vec2 vUv; ${Xd}
      void main() { vUv = uv; vNormal = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position, 1.0); vWorld = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; ${Zd} }`,fragmentShader:`
      uniform sampler2D map; uniform float hasMap; uniform vec3 color; varying vec3 vNormal; varying vec3 vWorld; varying vec2 vUv; ${Qd}
      void main() { ${$d}
        vec3 N = normalize(vNormal); vec3 V = normalize(-vWorld);
        float limb = 0.55 + 0.45 * pow(max(dot(N, V), 0.0), 0.6);
        vec3 c = hasMap > 0.5 ? texture2D(map, vUv).rgb * 1.15 : color;
        gl_FragColor = vec4(hasMap > 0.5 ? c * limb * 1.1 : c * (0.75 + 0.35 * limb), 1.0);
      }`})}function of(){return new Na({uniforms:{uPixelRatio:{value:1}},vertexShader:`
      attribute vec3 color; attribute float alpha; attribute float size; varying vec3 vColor; varying float vAlpha; uniform float uPixelRatio; ${Xd}
      void main() { vColor = color; vAlpha = alpha; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = size * uPixelRatio; if (alpha <= 0.001) gl_Position = vec4(2.0,2.0,2.0,1.0); ${Zd} }`,fragmentShader:`
      varying vec3 vColor; varying float vAlpha; ${Qd}
      void main() { ${$d}
        vec2 c = gl_PointCoord - 0.5; float r = length(c) * 2.0;
        float ring = smoothstep(1.0, 0.75, r) * (1.0 - smoothstep(0.55, 0.7, r) * 0.65);
        gl_FragColor = vec4(vColor, ring * vAlpha);
      }`,transparent:!0,depthWrite:!1,depthTest:!0})}function sf(){return new Na({uniforms:{type:{value:0},teq:{value:300},seed:{value:1},starPos:{value:new q},starColor:{value:new J(1,1,1)},locked:{value:0},spin:{value:0},hotspot:{value:0},cloudSide:{value:0}},vertexShader:`
      varying vec3 vNormal; varying vec3 vWorld; varying vec3 vLocal; varying vec3 vUp;
      #include <common>
      #include <logdepthbuf_pars_vertex>
      void main() { vLocal = position; vNormal = normalize(mat3(modelMatrix) * normal); vUp = normalize(mat3(modelMatrix) * vec3(0.0, 1.0, 0.0)); vec4 w = modelMatrix * vec4(position, 1.0); vWorld = w.xyz; gl_Position = projectionMatrix * viewMatrix * w;
      #include <logdepthbuf_vertex>
      }`,fragmentShader:`
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
      }`})}function cf(e){return 4600*(1/(.92*e+1.7)+1/(.92*e+.62))}function lf(e,t=5772){let n=0;return t>8e3?n=-.3-2*Math.log10(t/8e3):t<4500&&(n=-.6-3.5*Math.log10(4500/t)),10**((4.74-(e+n))/2.5)}function uf(e,t){return Math.sqrt(e)*(5772/t)**2}function df(e){return e<.03?(e/.23)**(1/2.3):e<16?e**(1/4):e<17e5?(e/1.4)**(1/3.5):e/32e3}function ff(e){let t=Math.min(4e4,Math.max(1e3,e))/100,n,r,i;t<=66?(n=255,r=99.4708025861*Math.log(t)-161.1195681661):(n=329.698727446*(t-60)**-.1332047592,r=288.1221695283*(t-60)**-.0755148492),i=t>=66?255:t<=19?0:138.5177312231*Math.log(t-10)-305.0447927307;let a=e=>Math.min(255,Math.max(0,e))/255,o=a(n),s=a(r),c=a(i),l=.88;return[o*l+.12,s*l+.12,c*l+.12]}function pf(e){if(!e)return``;let t=e[0].toUpperCase(),n=(e.match(/(Ia|Ib|II|III|IV|V|VI|VII|D)/)||[])[1];return[{O:`blue, extremely hot and luminous (over 30,000 K)`,B:`blue-white, very hot (10,000–30,000 K)`,A:`white (7,500–10,000 K)`,F:`yellow-white (6,000–7,500 K)`,G:`yellow, Sun-like (5,200–6,000 K)`,K:`orange (3,700–5,200 K)`,M:`red, cool (below 3,700 K)`,L:`very cool brown dwarf`,T:`methane brown dwarf`,W:`Wolf-Rayet star shedding its outer layers`,C:`carbon star`,S:`S-type giant`,D:`white dwarf`}[t]||``,{Ia:`luminous supergiant`,Ib:`supergiant`,II:`bright giant`,III:`giant`,IV:`subgiant`,V:`main-sequence dwarf`,VI:`subdwarf`,VII:`white dwarf`,D:`white dwarf`}[n]||``].filter(Boolean).join(`, `)}var mf={Alp:`α`,Bet:`β`,Gam:`γ`,Del:`δ`,Eps:`ε`,Zet:`ζ`,Eta:`η`,The:`θ`,Iot:`ι`,Kap:`κ`,Lam:`λ`,Mu:`μ`,Nu:`ν`,Xi:`ξ`,Omi:`ο`,Pi:`π`,Rho:`ρ`,Sig:`σ`,Tau:`τ`,Ups:`υ`,Phi:`φ`,Chi:`χ`,Psi:`ψ`,Ome:`ω`},hf={And:`Andromeda`,Ant:`Antlia`,Aps:`Apus`,Aqr:`Aquarius`,Aql:`Aquila`,Ara:`Ara`,Ari:`Aries`,Aur:`Auriga`,Boo:`Boötes`,Cae:`Caelum`,Cam:`Camelopardalis`,Cnc:`Cancer`,CVn:`Canes Venatici`,CMa:`Canis Major`,CMi:`Canis Minor`,Cap:`Capricornus`,Car:`Carina`,Cas:`Cassiopeia`,Cen:`Centaurus`,Cep:`Cepheus`,Cet:`Cetus`,Cha:`Chamaeleon`,Cir:`Circinus`,Col:`Columba`,Com:`Coma Berenices`,CrA:`Corona Australis`,CrB:`Corona Borealis`,Crv:`Corvus`,Crt:`Crater`,Cru:`Crux`,Cyg:`Cygnus`,Del:`Delphinus`,Dor:`Dorado`,Dra:`Draco`,Equ:`Equuleus`,Eri:`Eridanus`,For:`Fornax`,Gem:`Gemini`,Gru:`Grus`,Her:`Hercules`,Hor:`Horologium`,Hya:`Hydra`,Hyi:`Hydrus`,Ind:`Indus`,Lac:`Lacerta`,Leo:`Leo`,LMi:`Leo Minor`,Lep:`Lepus`,Lib:`Libra`,Lup:`Lupus`,Lyn:`Lynx`,Lyr:`Lyra`,Men:`Mensa`,Mic:`Microscopium`,Mon:`Monoceros`,Mus:`Musca`,Nor:`Norma`,Oct:`Octans`,Oph:`Ophiuchus`,Ori:`Orion`,Pav:`Pavo`,Peg:`Pegasus`,Per:`Perseus`,Phe:`Phoenix`,Pic:`Pictor`,Psc:`Pisces`,PsA:`Piscis Austrinus`,Pup:`Puppis`,Pyx:`Pyxis`,Ret:`Reticulum`,Sge:`Sagitta`,Sgr:`Sagittarius`,Sco:`Scorpius`,Scl:`Sculptor`,Sct:`Scutum`,Ser:`Serpens`,Sex:`Sextans`,Tau:`Taurus`,Tel:`Telescopium`,Tri:`Triangulum`,TrA:`Triangulum Australe`,Tuc:`Tucana`,UMa:`Ursa Major`,UMi:`Ursa Minor`,Vel:`Vela`,Vir:`Virgo`,Vol:`Volans`,Vul:`Vulpecula`},gf=`
  attribute float absmag; attribute vec3 color; attribute float rad;
  uniform vec3 uCamPc; uniform float uKmPerPc; uniform float uPixelRatio; uniform float uLimitMag; uniform float uSizeScale; uniform float uHidePc; uniform float uFovScale; uniform float uAllStars;
  varying vec3 vColor; varying float vAlpha; varying float vCore;
  #include <common>
#include <logdepthbuf_pars_vertex>
  void main() {
    vec3 rel = position - uCamPc;
    float d = max(length(rel * 1e-3) * 1e3, 1e-9);
    float m = absmag + 5.0 * log(d / 10.0) / 2.302585;
    float s = uSizeScale * pow(10.0, -0.2 * (m - 1.0));
    float alpha = 1.0;
    if (s < 1.8) { alpha = pow(s / 1.8, 1.5); s = 1.8; }
    alpha *= smoothstep(uLimitMag + 1.2, uLimitMag - 0.3, m);
    if (uAllStars > 0.5) alpha = max(alpha, 0.55); // "every star" mode: the faintest still show as a dim point
    s = min(s, 90.0);
    float discPx = rad / (d * uKmPerPc) * uFovScale * 2.0;
    if (discPx > s * 0.35 || d < uHidePc) alpha = 0.0;
    vAlpha = alpha; vColor = color; vCore = clamp((3.0 - m) * 0.12, 0.0, 0.8);
    vec4 mv = modelViewMatrix * vec4(rel * uKmPerPc, 1.0);
    gl_Position = projectionMatrix * mv;
    if (alpha <= 0.001) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = s * uPixelRatio;
    #include <logdepthbuf_vertex>
  }`,_f=`
  varying vec3 vColor; varying float vAlpha; varying float vCore;
  #include <logdepthbuf_pars_fragment>
  void main() {
    #include <logdepthbuf_fragment>
    vec2 c = gl_PointCoord - 0.5; float r2 = dot(c, c) * 4.0;
    float core = exp(-r2 * 9.0); float halo = exp(-r2 * 2.2) * 0.32;
    float a = (core + halo) * vAlpha;
    vec3 col = vColor * a + vec3(core * a * (0.35 + vCore));
    gl_FragColor = vec4(col, a);
  }`,vf=class{constructor(e,t,n){this.u=e,this.count=n.count,this.pos=t.pos,this.absmag=t.absmag,this.ci=t.ci,this.mag=t.mag,this.dist=t.dist,this.pm=t.pm,this.ids=t.ids,this.spectIdx=t.spect,this.conIdx=t.con,this.meta=n,this.snapped=t.snapped,this.proper=new Map(n.proper),this.bayer=new Map(n.bayer),this.flam=new Map(n.flam),this.gl=new Map(n.gl),this.bf=new Map(n.bf),this.vars=new Map(n.vars.map(e=>[e[0],e])),this.notes=new Map(n.notes),this.exoHost=new Map,this.visible=!0;let r=this.count,i=new Float32Array(r*3),a=new Float32Array(r);this.radiusKm=a,this.teff=new Float32Array(r);for(let e=0;e<r;e++){let t=cf(this.ci[e]);this.teff[e]=t;let[n,r,o]=ff(t);i[3*e]=n,i[3*e+1]=r,i[3*e+2]=o;let s=lf(this.absmag[e],t);a[e]=uf(s,t)*Nu}let o=new Float32Array((r+1)*3);o.set(this.pos);let s=new Float32Array(r+1);s.set(this.absmag),s[r]=4.83;let c=new Float32Array((r+1)*3);c.set(i),c.set(ff(5772),3*r);let l=new Float32Array(r+1);l.set(a),l[r]=Nu;let u=new Tr;u.setAttribute(`position`,new Y(o,3)),u.setAttribute(`absmag`,new Y(s,1)),u.setAttribute(`color`,new Y(c,3)),u.setAttribute(`rad`,new Y(l,1)),u.boundingSphere=new _r(new q,1e30),this.mat=new Na({vertexShader:gf,fragmentShader:_f,transparent:!0,depthWrite:!1,depthTest:!0,blending:2,uniforms:{uCamPc:{value:new q},uKmPerPc:{value:Z},uPixelRatio:{value:1},uLimitMag:{value:7.5},uSizeScale:{value:7},uAllStars:{value:0},uHidePc:{value:.003},uFovScale:{value:1e3}}}),this.points=new pa(u,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,e.scene.add(this.points),this.pool=[];let d=new Ca(1,48,32);for(let t=0;t<6;t++){let t=new pi(d,af());t.visible=!1,t.frustumCulled=!1,t.renderOrder=6;let n=new Gr(new jr({map:Sf(),color:16777215,transparent:!0,blending:2,depthWrite:!1,depthTest:!0}));n.visible=!1,n.renderOrder=7,e.scene.add(t),e.scene.add(n),this.pool.push({mesh:t,glow:n,star:-1})}this.nearStars=[],this._frame=0,this._tmp=new q}setLimitMag(e){this.mat.uniforms.uLimitMag.value=e}name(e){if(e===this.count)return`Sun`;let t=this.proper.get(e);if(t)return t;let n=this.bayer.get(e),r=this.meta.conDict[this.conIdx[e]-1]||``;if(n){let e=n.match(/^([A-Za-z]+)(-?\d*)$/);return`${e?(mf[e[1]]||e[1])+(e[2]?e[2].replace(`-`,``):``):n} ${r}`}let i=this.flam.get(e);if(i)return`${i} ${r}`;let a=this.bf.get(e);if(a)return`${a} ${r}`.trim();let o=this.gl.get(e);if(o)return o;let s=this.ids[3*e],c=this.ids[3*e+1],l=this.ids[3*e+2];return s?`HIP ${s}`:c?`HD ${c}`:l?`HR ${l}`:`Star #${e}`}worldPos(e,t){return e===this.count?(t[0]=t[1]=t[2]=0,t):(t[0]=this.pos[3*e]*Z,t[1]=this.pos[3*e+1]*Z,t[2]=this.pos[3*e+2]*Z,t)}describe(e){let t=this,n=this.exoHost.has(e),r=this.teff[e],i=this.absmag[e],a=lf(i,r),o=uf(a,r),s=this.meta.spectDict[this.spectIdx[e]-1]||``,c=this.meta.conDict[this.conIdx[e]-1]||``,l=this.dist[e],u=[],d=[],f=this.proper.get(e);f&&d.push(f);let p=this.bayer.get(e);p&&d.push(`${p} ${c}`);let m=this.flam.get(e);m&&d.push(`${m} ${c}`);let h=this.gl.get(e);h&&d.push(h);let g=this.ids[3*e],_=this.ids[3*e+1],v=this.ids[3*e+2];g&&d.push(`HIP ${g}`),_&&d.push(`HD ${_}`),v&&d.push(`HR ${v}`),u.push([`Designations`,d.join(`, `)||`—`]),c&&u.push([`Constellation`,hf[c]||c]),u.push([`Distance`,`${$(l*3.26156)} ly (${$(l)} pc)${this.snapped&&this.snapped[e]?` — member of an open cluster: placed at the cluster's Gaia distance, which is far more accurate than its own parallax`:``}`]),u.push([`Apparent magnitude`,$(this.mag[e],3)]),u.push([`Absolute magnitude`,$(i,3)]),s&&u.push([`Spectral type`,`${s}${pf(s)?` — `+pf(s):``}`]),u.push([`Colour index (B−V)`,$(this.ci[e],2)]),u.push([`Temperature (est.)`,`${$(r,4)} K`]),u.push([`Luminosity (est.)`,`${$(a,3)} × Sun`]),u.push([`Radius (est.)`,`${$(o,3)} × Sun (${Ru(o*Nu)})`]),u.push([`Mass (rough est.)`,`${$(df(a),2)} × Sun`]);let y=this.pm[3*e],b=this.pm[3*e+1],x=this.pm[3*e+2];(y||b)&&u.push([`Proper motion`,`${$(Math.hypot(y,b),3)} mas/yr`]),x&&u.push([`Radial velocity`,`${$(x,3)} km/s`]);let S=this.vars.get(e);S&&u.push([`Variable star`,`${S[1]}${Number.isFinite(S[2])?` (mag ${$(S[3],2)}–${$(S[2],2)})`:``}`]);let C=Math.atan2(this.pos[3*e+1],this.pos[3*e])/Q,w=Math.asin(this.pos[3*e+2]/l)/Q;u.push([`RA / Dec (J2000)`,`${yf(C)} / ${bf(w)}`]);let T=this.notes.get(e)||``;if(n){let t=this.exoHost.get(e);u.push([`Known planets`,`${t.p.length}: ${t.p.map(e=>e.n).join(`, `)}`]),T||=`Host star of ${t.p.length} confirmed exoplanet${t.p.length>1?`s`:``} (NASA Exoplanet Archive).`}return T||=`A ${pf(s)||`star`} ${$(l*3.26156,3)} light-years from the Sun.`+(e>=this.meta.hygCount?` Position and properties from the NASA Exoplanet Archive (not in the Hipparcos catalog).`:``),{kind:`star`,name:this.name(e),sub:s?`${s} star · ${$(l*3.26156,3)} ly`:`${$(l*3.26156,3)} ly`,radius:this.radiusKm[e],rows:u,desc:T,source:e>=this.meta.hygCount?`NASA Exoplanet Archive (pscomppars); temperature/radius estimated from colour and magnitude where not given.`:`HYG v4.1 (Hipparcos, Yale BSC, Gliese); temperature, luminosity, radius and mass are estimates derived from B−V colour and absolute magnitude.`,getPos:(n,r)=>t.worldPos(e,r),ref:{layer:`stars`,index:e}}}pick(e,t,n){let r=this.count,i=-1,a=14,o=t[0]/Z,s=t[1]/Z,c=t[2]/Z,l=this.mat.uniforms.uLimitMag.value+1;for(let t=0;t<=r;t++){let u=(t===r?0:this.pos[3*t])-o,d=(t===r?0:this.pos[3*t+1])-s,f=(t===r?0:this.pos[3*t+2])-c,p=Math.sqrt(u*u+d*d+f*f),m=(u*e.x+d*e.y+f*e.z)/p;if(m<.9999)continue;let h=(t===r?4.83:this.absmag[t])+5*Math.log10(p/10);if(h>l)continue;let g=Math.acos(Math.min(1,m))*n,_=Math.max(0,6-h);g-_<a&&(a=g-_,i=t)}return i<0?null:{sepPx:a,desc:i===r?null:this.describe(i),sunHit:i===r}}update(e){let t=this.mat.uniforms;t.uCamPc.value.set(e.camPos[0]/Z,e.camPos[1]/Z,e.camPos[2]/Z),t.uPixelRatio.value=e.pixelRatio,t.uFovScale.value=e.pxPerRad,this.points.visible=this.visible,this._frame++%8==0&&this._refreshNear(e);for(let t of this.pool){if(t.star<0||!this.visible){t.mesh.visible=t.glow.visible=!1;continue}let n=t.star,r=this._tmp.set(this.pos[3*n]*Z-e.camPos[0],this.pos[3*n+1]*Z-e.camPos[1],this.pos[3*n+2]*Z-e.camPos[2]),i=this.radiusKm[n],a=r.length();t.mesh.position.copy(r),t.mesh.scale.setScalar(i),t.mesh.visible=!0;let o=i/a*e.pxPerRad,s=Math.max(i*3.2,a/e.pxPerRad*Math.max(12,Math.min(90,40-5*(this.absmag[n]+5*Math.log10(a/Z/10)))));t.glow.position.copy(r),t.glow.scale.set(s,s,1),t.glow.visible=!0,t.glow.material.opacity=o>200?.3:.9}}_refreshNear(e){let t=e.camPos[0]/Z,n=e.camPos[1]/Z,r=e.camPos[2]/Z,i=this.mat.uniforms.uHidePc.value,a=i*i,o=[];for(let e=0;e<this.count;e++){let i=this.pos[3*e]-t,s=this.pos[3*e+1]-n,c=this.pos[3*e+2]-r,l=i*i+s*s+c*c;l<a&&o.push([l,e])}o.sort((e,t)=>e[0]-t[0]),this.nearStars=o.slice(0,this.pool.length).map(e=>e[1]);for(let e=0;e<this.pool.length;e++){let t=this.pool[e],n=this.nearStars[e]??-1;if(n!==t.star&&(t.star=n,n>=0)){let[e,r,i]=ff(this.teff[n]),a=.3*e+.5*r+.2*i,o=1.9,s=Math.min(1,Math.max(0,a+(e-a)*o)),c=Math.min(1,Math.max(0,a+(r-a)*o)),l=Math.min(1,Math.max(0,a+(i-a)*o)),u=Ct.clamp((5e3-this.teff[n])/1800,0,1);t.mesh.material.uniforms.color.value.setRGB(s,c**(1+.9*u),l**(1+1.4*u)),t.glow.material.color.setRGB(e,r,i)}}}nearestSurface(e){let t=1/0;for(let n of this.nearStars){let r=Math.hypot(this.pos[3*n]*Z-e[0],this.pos[3*n+1]*Z-e[1],this.pos[3*n+2]*Z-e[2])-this.radiusKm[n];r<t&&(t=r)}return t}labels(e,t,n){let r=e.camPos[0]/Z,i=e.camPos[1]/Z,a=e.camPos[2]/Z,o=[];for(let[t,n]of this.proper){let s=this.pos[3*t]-r,c=this.pos[3*t+1]-i,l=this.pos[3*t+2]-a,u=Math.sqrt(s*s+c*c+l*l),d=this.absmag[t]+5*Math.log10(u/10);d>4.5+e.labelDensity*4||(s*e.forward.x+c*e.forward.y+l*e.forward.z)/u<e.cosHalfFov||o.push([d,t,n,s*Z,c*Z,l*Z])}o.sort((e,t)=>e[0]-t[0]);for(let e of o.slice(0,n))t.push({text:e[2],x:e[3],y:e[4],z:e[5],cls:`star`,prio:10-e[0],ref:{layer:`stars`,index:e[1]}})}searchEntries(){let e=[];for(let[t,n]of this.proper)e.push({name:n,kind:`star`,ref:{layer:`stars`,index:t}});for(let[t,n]of this.bayer){let r=this.meta.conDict[this.conIdx[t]-1]||``,i=n.match(/^([A-Za-z]+)(-?\d*)$/),a=i?(mf[i[1]]||i[1])+(i[2]||``):n;e.push({name:`${a} ${r}`,alt:`${n} ${r} ${this.name(t)}`,kind:`star`,ref:{layer:`stars`,index:t}})}for(let[t,n]of this.flam){if(this.bayer.has(t))continue;let r=this.meta.conDict[this.conIdx[t]-1]||``;e.push({name:`${n} ${r}`,kind:`star`,ref:{layer:`stars`,index:t}})}for(let[t,n]of this.gl)e.push({name:n,kind:`star`,ref:{layer:`stars`,index:t}});for(let t=0;t<this.count;t++){let n=this.ids[3*t],r=this.ids[3*t+1];n?e.push({name:`HIP ${n}`,kind:`star`,ref:{layer:`stars`,index:t},lowPrio:!0}):r&&e.push({name:`HD ${r}`,kind:`star`,ref:{layer:`stars`,index:t},lowPrio:!0})}return e}};function yf(e){let t=e/15,n=Math.floor(t),r=Math.floor((t-n)*60),i=((t-n)*60-r)*60;return`${n}h ${String(r).padStart(2,`0`)}m ${i.toFixed(1).padStart(4,`0`)}s`}function bf(e){let t=e<0?`−`:`+`,n=Math.abs(e),r=Math.floor(n),i=Math.floor((n-r)*60),a=((n-r)*60-i)*60;return`${t}${r}° ${String(i).padStart(2,`0`)}′ ${a.toFixed(0).padStart(2,`0`)}″`}var xf=null;function Sf(){if(xf)return xf;let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.08,`rgba(255,255,255,0.9)`),n.addColorStop(.25,`rgba(255,255,255,0.28)`),n.addColorStop(.6,`rgba(255,255,255,0.05)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,128,128),xf=new ga(e),xf}var Cf={id:`sun`,name:`Sun`,kind:`sun`,radius:695700,mass:19885e26,density:1.408,gravity:274,rot:609.12,tilt:7.25,temp:5772,pole:[286.13,63.87],W0:84.176,Wd:14.1844,texture:`8k_sun.jpg`,color:`#fff4d6`,desc:`Our star: a G2V yellow dwarf 4.6 billion years old, containing 99.86% of the mass of the Solar System. It fuses 600 million tonnes of hydrogen into helium every second, and light from its surface takes 8 minutes 20 seconds to reach Earth.`,facts:{"Spectral type":`G2V`,Luminosity:`3.828 × 10²⁶ W`,Age:`4.6 billion years`,"Core temperature":`15.7 million K`,"Rotation (equator)":`25.4 days`,"Distance to galactic centre":`26,700 ly`}},wf=[{id:`mercury`,name:`Mercury`,el:`Mercury`,radius:2439.7,mass:33011e19,density:5.427,gravity:3.7,rot:1407.6,tilt:.034,temp:440,moons:0,escape:4.25,albedo:.142,pole:[281.0103,61.4155],W0:329.5988,Wd:6.1385108,texture:`8k_mercury.jpg`,color:`#9c9791`,desc:`The smallest planet and closest to the Sun, a heavily cratered world with no real atmosphere. Its surface swings from 430 °C in daylight to −180 °C at night, and it has a surprisingly large iron core that makes up 85% of its radius.`,facts:{"Orbital period":`87.97 days`,"Day length (solar)":`176 Earth days`,Atmosphere:`Exosphere (O, Na, H, He, K)`,Discovered:`Known to antiquity`,"Visited by":`Mariner 10, MESSENGER, BepiColombo (arriving 2026)`}},{id:`venus`,name:`Venus`,el:`Venus`,radius:6051.8,mass:48675e20,density:5.243,gravity:8.87,rot:-5832.5,tilt:177.36,temp:737,moons:0,escape:10.36,albedo:.689,pole:[272.76,67.16],W0:160.2,Wd:-1.4813688,texture:`2k_venus_atmosphere.jpg`,surface:`8k_venus_surface.jpg`,color:`#e8cf9a`,atmosphere:{color:`#f2dfb0`,scale:1.012,strength:.9},desc:`Earth's scorching twin. A runaway greenhouse effect under 92 bars of carbon dioxide keeps the surface at 465 °C, hot enough to melt lead, beneath clouds of sulphuric acid. It spins backwards, so slowly that its day is longer than its year.`,facts:{"Orbital period":`224.7 days`,"Surface pressure":`92 bar`,Atmosphere:`96.5% CO₂, 3.5% N₂`,"Cloud tops":`Sulphuric acid, ~65 km`,"Visited by":`Venera 7–14 (landers), Magellan, Venus Express, Akatsuki`}},{id:`earth`,name:`Earth`,el:`EMB`,radius:6378.137,mass:59722e20,density:5.514,gravity:9.807,rot:23.9345,tilt:23.44,temp:288,moons:1,escape:11.19,albedo:.306,pole:[0,90],W0:190.147,Wd:360.9856235,texture:`8k_earth_daymap.jpg`,night:`8k_earth_nightmap.jpg`,clouds:`8k_earth_clouds.jpg`,color:`#5f8fd8`,atmosphere:{color:`#6fa8ff`,scale:1.02,strength:1},specular:!0,desc:`Home. The only world known to harbour life, with liquid water covering 71% of its surface and an oxygen-rich atmosphere maintained by that life. Plate tectonics and a strong magnetic field set it apart from its neighbours.`,facts:{"Orbital period":`365.256 days`,Atmosphere:`78% N₂, 21% O₂, 1% Ar`,"Surface pressure":`1.013 bar`,Age:`4.54 billion years`,"Highest point":`Everest, 8,849 m`,Population:`8.2 billion`}},{id:`mars`,name:`Mars`,el:`Mars`,radius:3396.2,mass:64171e19,density:3.9335,gravity:3.71,rot:24.6229,tilt:25.19,temp:210,moons:2,escape:5.03,albedo:.17,pole:[317.269,54.433],W0:176.049863,Wd:350.891982443,texture:`8k_mars.jpg`,color:`#c46a44`,atmosphere:{color:`#d9a58a`,scale:1.008,strength:.25},desc:`The Red Planet, rusted by iron oxide dust. It has the tallest volcano (Olympus Mons, 22 km) and the largest canyon (Valles Marineris, 4,000 km) in the Solar System, polar ice caps, and abundant evidence that rivers and lakes once flowed on its surface.`,facts:{"Orbital period":`687 days (1.88 yr)`,"Day length":`24 h 39 min`,Atmosphere:`95% CO₂, 2.8% N₂, 2% Ar`,"Surface pressure":`0.006 bar`,"Active rovers":`Curiosity, Perseverance, Zhurong (dormant)`}},{id:`jupiter`,name:`Jupiter`,el:`Jupiter`,radius:71492,mass:18982e23,density:1.326,gravity:24.79,rot:9.925,tilt:3.13,temp:165,moons:95,escape:59.5,albedo:.503,pole:[268.056595,64.495303],W0:284.95,Wd:870.536,texture:`8k_jupiter.jpg`,color:`#c9a882`,rings:{inner:122500,outer:129e3,color:`#a08c70`,opacity:.08},desc:`The giant of the Solar System, 2.5 times as massive as all the other planets combined. Its banded atmosphere hosts the Great Red Spot, a storm larger than Earth that has raged for at least 190 years. Its four largest moons were the first found orbiting another world.`,facts:{"Orbital period":`11.86 years`,Composition:`90% H, 10% He`,"Great Red Spot":`~16,000 km wide`,"Magnetic field":`20,000× Earth's`,"Orbiting spacecraft":`Juno (since 2016)`}},{id:`saturn`,name:`Saturn`,el:`Saturn`,radius:60268,mass:56834e22,density:.687,gravity:10.44,rot:10.56,tilt:26.73,temp:134,moons:274,escape:35.5,albedo:.342,pole:[40.589,83.537],W0:38.9,Wd:810.7939024,texture:`8k_saturn.jpg`,color:`#e3cc98`,rings:{inner:74500,outer:140220,texture:`2k_saturn_ring_alpha.jpg`,color:`#d8c8a8`,opacity:.95},desc:`The ringed planet. Its spectacular rings are made of water ice, stretching 280,000 km across yet averaging only about 10 metres thick. Saturn is less dense than water, and its moon Titan is the only moon with a thick atmosphere.`,facts:{"Orbital period":`29.46 years`,"Ring span":`~282,000 km (to F ring)`,"Ring thickness":`~10 m to 1 km`,Composition:`96% H, 3% He`,"Visited by":`Pioneer 11, Voyager 1 & 2, Cassini (2004–2017)`}},{id:`uranus`,name:`Uranus`,el:`Uranus`,radius:25559,mass:8681e22,density:1.27,gravity:8.69,rot:-17.24,tilt:97.77,temp:76,moons:28,escape:21.3,albedo:.3,pole:[257.311,-15.175],W0:203.81,Wd:-501.1600928,texture:`2k_uranus.jpg`,color:`#a6d8de`,rings:{inner:41837,outer:51149,color:`#8a9a9a`,opacity:.25},desc:`An ice giant tipped on its side: its axis is tilted 98°, so its poles take turns facing the Sun for 42 years at a time. Methane gives it a pale cyan colour, and it is the coldest planet with cloud tops at −224 °C.`,facts:{"Orbital period":`84.0 years`,Composition:`H, He, ~2% CH₄`,Discovered:`1781 by William Herschel`,Rings:`13 known`,"Visited by":`Voyager 2 (1986) only`}},{id:`neptune`,name:`Neptune`,el:`Neptune`,radius:24764,mass:102413e21,density:1.638,gravity:11.15,rot:16.11,tilt:28.32,temp:72,moons:16,escape:23.5,albedo:.29,pole:[299.36,43.46],W0:249.978,Wd:541.1397757,texture:`2k_neptune.jpg`,color:`#4b70dd`,rings:{inner:41900,outer:62930,color:`#8a8aa0`,opacity:.12},desc:`The outermost planet, a deep-blue ice giant with the fastest winds in the Solar System, over 2,000 km/h. It was the first planet found by mathematical prediction rather than observation, in 1846. Its moon Triton orbits backwards and is probably a captured Kuiper Belt object.`,facts:{"Orbital period":`164.8 years`,Composition:`H, He, CH₄`,Discovered:`1846 (Le Verrier, Galle)`,"Wind speed":`up to 2,100 km/h`,"Visited by":`Voyager 2 (1989) only`}}],Tf=[{id:`pluto`,name:`Pluto`,el:`Pluto`,texture:`moons/Pluto.jpg`,radius:1188.3,mass:1303e19,density:1.854,gravity:.62,rot:-153.29,tilt:122.53,temp:44,moons:5,escape:1.21,albedo:.52,pole:[132.993,-6.163],W0:302.695,Wd:56.3625225,color:`#d6c2a8`,desc:`The largest known dwarf planet and king of the Kuiper Belt. New Horizons revealed a world of nitrogen-ice glaciers, water-ice mountains and a thin blue haze. It and its large moon Charon orbit a point in the space between them.`,facts:{"Orbital period":`248 years`,Atmosphere:`N₂, CH₄, CO (tenuous)`,Discovered:`1930 by Clyde Tombaugh`,Reclassified:`Dwarf planet, 2006`,"Visited by":`New Horizons (2015)`}},{id:`ceres`,name:`Ceres`,sb:`1 Ceres`,texture:`moons/Ceres.jpg`,radius:469.7,mass:0x32d95d6e4354680000,density:2.16,gravity:.28,rot:9.07,temp:168,color:`#8d857b`,desc:`The largest object in the asteroid belt and the only dwarf planet in the inner Solar System. Dawn found bright salt deposits in Occator crater and evidence of a subsurface briny ocean in the past.`,facts:{"Orbital period":`4.6 years`,Discovered:`1801 by Giuseppe Piazzi`,"Share of belt mass":`~25–40%`,"Visited by":`Dawn (2015–2018)`}},{id:`vesta`,name:`Vesta`,sb:`4 Vesta`,texture:`moons/Vesta.png`,radius:262.7,mass:0xe0a58d7c25a2c0000,density:3.456,gravity:.25,rot:5.342,temp:180,color:`#a8a09a`,desc:`The second-most-massive body in the asteroid belt and the brightest asteroid seen from Earth, a differentiated protoplanet with an iron core and a giant impact basin at its south pole. Dawn mapped it in 2011–2012.`,facts:{"Orbital period":`3.63 years`,Discovered:`1807 by Heinrich Olbers`,"Visited by":`Dawn (2011–2012)`,Meteorites:`HED meteorites are fragments of Vesta`}},{id:`eris`,name:`Eris`,sb:`136199 Eris`,radius:1163,mass:166e20,density:2.43,gravity:.82,rot:378.9,temp:42,moons:1,color:`#e3e3e3`,desc:`Slightly smaller than Pluto but 27% more massive, Eris is the most massive known dwarf planet. Its discovery in 2005 triggered the redefinition of "planet". It is currently three times farther from the Sun than Pluto.`,facts:{"Orbital period":`559 years`,Discovered:`2005 (Brown, Trujillo, Rabinowitz)`,Moon:`Dysnomia`,"Perihelion / aphelion":`38 / 97.5 AU`}},{id:`haumea`,name:`Haumea`,sb:`136108 Haumea`,radius:816,mass:4006e18,density:1.885,rot:3.915,temp:50,moons:2,color:`#d9d4c8`,rings:{inner:2252,outer:2322,color:`#8a8580`,opacity:.4},desc:`A fast-spinning dwarf planet stretched into an elongated ellipsoid about 2,100 × 1,680 × 1,070 km. It has two moons and, uniquely among dwarf planets, a ring, discovered in 2017 during a stellar occultation.`,facts:{"Orbital period":`284 years`,Rotation:`3.9 hours`,Discovered:`2004–2005`,Moons:`Hiʻiaka, Namaka`}},{id:`makemake`,name:`Makemake`,sb:`136472 Makemake`,radius:715,mass:31e20,density:1.7,rot:22.83,temp:40,moons:1,color:`#c9a48a`,desc:`A reddish dwarf planet in the classical Kuiper Belt, second-brightest after Pluto, with a surface of frozen methane and ethane and one known moon.`,facts:{"Orbital period":`306 years`,Discovered:`2005`,Moon:`MK2 (S/2015 (136472) 1)`}},{id:`gonggong`,name:`Gonggong`,sb:`225088 Gonggong`,radius:615,mass:175e19,density:1.74,rot:22.4,temp:30,moons:1,color:`#b8776a`,desc:`One of the largest known trans-Neptunian objects, very red from tholins, with a highly eccentric orbit that carries it out to 101 AU. It has one moon, Xiangliu.`,facts:{"Orbital period":`554 years`,Discovered:`2007`,Named:`2020, after a Chinese water god`}},{id:`quaoar`,name:`Quaoar`,sb:`50000 Quaoar`,radius:545,mass:12e20,density:1.7,rot:17.68,temp:44,moons:1,color:`#a88a7a`,rings:{inner:4057,outer:4100,color:`#807870`,opacity:.3},desc:`A Kuiper Belt dwarf-planet candidate with a moon, Weywot, and two rings discovered in 2023 that lie far outside the classical Roche limit, challenging ring theory.`,facts:{"Orbital period":`289 years`,Discovered:`2002`,Moon:`Weywot`}},{id:`orcus`,name:`Orcus`,sb:`90482 Orcus`,radius:458,mass:0x226c652fa0350c0000,density:1.5,temp:44,moons:1,color:`#c0bcb4`,desc:`The "anti-Pluto": a plutino with a nearly identical orbit to Pluto but always on the opposite side of the Sun. Its large moon Vanth is about a third of its size.`,facts:{"Orbital period":`245 years`,Discovered:`2004`,Moon:`Vanth`}},{id:`sedna`,name:`Sedna`,sb:`90377 Sedna`,radius:500,temp:12,color:`#c95f4a`,desc:`One of the most distant known objects, on an extremely elongated 11,400-year orbit reaching 937 AU. Its origin far beyond the Kuiper Belt hints at a passing star or an undiscovered planet.`,facts:{"Orbital period":`~11,400 years`,"Perihelion / aphelion":`76 / 937 AU`,Discovered:`2003`,"Next perihelion":`2076`}}],Ef={301:{name:`Moon`,radius:1737.4,mass:7342e19,density:3.344,gravity:1.62,temp:250,texture:`8k_moon.jpg`,color:`#b5b5b5`,pole:[266.86,65.64],W0:38.3213,Wd:13.17635815,desc:`Earth's only natural satellite and the only other world humans have walked on. Formed 4.5 billion years ago from debris of a giant impact, it is tidally locked and drifting away at 3.8 cm per year. Its gravity drives the ocean tides.`,facts:{"Orbital period":`27.32 days`,Distance:`363,300–405,500 km`,"Surface gravity":`1/6 of Earth`,"Human landings":`Apollo 11–17 (1969–1972)`}},401:{name:`Phobos`,radius:11.1,mass:0x25de4dd4a93000,density:1.876,color:`#7a6f66`,desc:`The larger, inner moon of Mars, a lumpy body 27 km long spiralling inward; within 50 million years it will break apart into a ring or crash into Mars. It orbits faster than Mars rotates, rising in the west.`},402:{name:`Deimos`,radius:6.2,mass:0x53e98989e1000,density:1.471,color:`#8c8279`,desc:`The smaller, outer moon of Mars, a smooth rubble-pile 15 km across, possibly a captured asteroid.`},501:{name:`Io`,radius:1821.6,mass:89319e18,density:3.528,gravity:1.796,temp:110,color:`#d9c56b`,desc:`The most volcanically active body in the Solar System, with over 400 active volcanoes driven by tidal flexing from Jupiter. Its sulphur-coated surface is constantly repaved by lava.`},502:{name:`Europa`,texture:`moons/Europa.jpg`,radius:1560.8,mass:47998e18,density:3.013,gravity:1.314,temp:102,color:`#c8b8a2`,desc:`An icy moon hiding a global saltwater ocean beneath a 15–25 km ice shell, holding twice as much water as all of Earth's oceans. A prime candidate for life; NASA's Europa Clipper arrives in 2030.`},503:{name:`Ganymede`,texture:`moons/Ganymede.png`,radius:2634.1,mass:14819e19,density:1.936,gravity:1.428,temp:110,color:`#9a8f80`,desc:`The largest moon in the Solar System, bigger than Mercury. It is the only moon with its own magnetic field and likely has a subsurface ocean sandwiched between ice layers.`},504:{name:`Callisto`,texture:`moons/Callisto.jpg`,radius:2410.3,mass:10759e19,density:1.834,gravity:1.235,temp:134,color:`#6e665d`,desc:`The most heavily cratered object known, a dead, ancient surface unchanged for 4 billion years. It may hide a salty ocean deep beneath its crust.`},505:{name:`Amalthea`,radius:83.5,mass:0x1cdda4faccd00000,color:`#9c5a48`,desc:`A red, irregular inner moon of Jupiter, 250 km long, coloured by sulphur from Io.`},506:{name:`Himalia`,radius:85,mass:0x3a4965bf58a40000,color:`#8a8580`,desc:`The largest of Jupiter's irregular outer moons, probably a captured asteroid.`},514:{name:`Thebe`,radius:49.3,mass:0x5f7aab8c56b0000,color:`#8f7a6c`,desc:`Small inner moon of Jupiter that supplies material to the Thebe gossamer ring.`},515:{name:`Adrastea`,radius:8.2,mass:0x71afd498d0000,color:`#8c8c8c`,desc:`Tiny moon orbiting at the outer edge of Jupiter's main ring.`},516:{name:`Metis`,radius:21.5,mass:0x7fe5cf2bea0000,color:`#8c8c8c`,desc:`Jupiter's innermost known moon, orbiting inside the main ring in under 7 hours.`},601:{name:`Mimas`,texture:`moons/Mimas.jpg`,radius:198.2,mass:0x20851e4da83b88000,density:1.149,color:`#c5c5c5`,desc:`The "Death Star" moon, dominated by the 130 km crater Herschel. Recent evidence suggests a young ocean beneath its icy crust.`},602:{name:`Enceladus`,texture:`moons/Enceladus.jpg`,radius:252.1,mass:0x5db1421af7db20000,density:1.609,temp:75,color:`#f0f0f0`,desc:`A brilliant white ice moon that sprays geysers of salty water from its south pole, feeding Saturn's E ring. Cassini found a global ocean and organic molecules, making it a top astrobiology target.`},603:{name:`Tethys`,texture:`moons/Tethys.jpg`,radius:531.1,mass:0x2178d70f9c14f00000,density:.984,color:`#d6d6d6`,desc:`An icy moon of almost pure water ice, scarred by the 400 km crater Odysseus and the vast Ithaca Chasma canyon.`},604:{name:`Dione`,texture:`moons/Dione.jpg`,radius:561.4,mass:10955e17,density:1.478,color:`#cfcfcf`,desc:`Icy moon with bright "wispy terrain" of ice cliffs; it may have a subsurface ocean.`},605:{name:`Rhea`,texture:`moons/Rhea.jpg`,radius:763.8,mass:23065e17,density:1.236,color:`#c9c9c9`,desc:`Saturn's second-largest moon, a heavily cratered ice ball that may once have had its own rings.`},606:{name:`Titan`,texture:`moons/Titan.png`,radius:2574.7,mass:13452e19,density:1.88,gravity:1.352,temp:94,color:`#d9a04a`,atmosphere:{color:`#e8b25a`,scale:1.15,strength:.9},desc:`The only moon with a thick atmosphere (1.5 bar of nitrogen) and the only world besides Earth with liquid on its surface: lakes and seas of methane and ethane. Huygens landed here in 2005; NASA's Dragonfly drone will follow in the 2030s.`},607:{name:`Hyperion`,radius:135,mass:0x4db7325476300000,density:.544,color:`#a8998a`,desc:`A sponge-like, chaotically tumbling moon with a porosity of over 40%.`},608:{name:`Iapetus`,texture:`moons/Iapetus.jpg`,radius:734.5,mass:18056e17,density:1.088,color:`#b5ab9c`,desc:`Two-toned moon with one hemisphere as dark as coal and the other bright as snow, plus a 20 km high equatorial ridge that gives it a walnut shape.`},609:{name:`Phoebe`,radius:106.5,mass:0x730bff13e3fd0000,density:1.638,color:`#5a5550`,desc:`A dark captured Centaur orbiting Saturn backwards, source of the enormous Phoebe ring and the dark material coating Iapetus.`},610:{name:`Janus`,radius:89.5,mass:0x1a5e27eef13e0000,color:`#bdbdbd`,desc:`Co-orbital with Epimetheus: the two moons swap orbits every four years.`},611:{name:`Epimetheus`,radius:58.1,mass:0x75af03122f50000,color:`#b8b8b8`,desc:`Small moon sharing an orbit with Janus.`},616:{name:`Prometheus`,radius:43.1,mass:0x2386f26fc100000,color:`#c4c4c4`,desc:`Inner shepherd moon of Saturn's F ring, sculpting streamers in the ring as it passes.`},617:{name:`Pandora`,radius:40.7,mass:0x1f161421c8e0000,color:`#c4c4c4`,desc:`Outer shepherd of the F ring.`},701:{name:`Ariel`,radius:578.9,mass:1251e18,density:1.592,color:`#bdbdb8`,desc:`The brightest moon of Uranus, with young surfaces crossed by canyons and possible cryovolcanic flows.`},702:{name:`Umbriel`,texture:`moons/Umbriel.jpg`,radius:584.7,mass:1275e18,density:1.39,color:`#6e6e6a`,desc:`The darkest of the large Uranian moons, with a mysterious bright ring called Wunda on its crater floor.`},703:{name:`Titania`,texture:`moons/Titania.jpg`,radius:788.4,mass:34e20,density:1.66,color:`#a8a49e`,desc:`The largest moon of Uranus, with huge canyons that suggest its interior expanded as it froze.`},704:{name:`Oberon`,radius:761.4,mass:3076e18,density:1.559,color:`#8f8a84`,desc:`Outermost large moon of Uranus, old and heavily cratered with an 11 km mountain.`},705:{name:`Miranda`,radius:235.8,mass:0x3782dace9d9000000,density:1.2,color:`#b8b8b8`,desc:`Small moon with the most bizarre terrain in the Solar System: Verona Rupes, a 20 km cliff, and giant oval "coronae".`},715:{name:`Puck`,radius:81,mass:0x283edea298a20000,color:`#7a7a7a`,desc:`The largest inner moon of Uranus, discovered by Voyager 2.`},801:{name:`Triton`,texture:`moons/Triton.jpg`,radius:1353.4,mass:2139e19,density:2.061,gravity:.779,temp:38,color:`#d1c4b2`,desc:`Neptune's largest moon orbits backwards, marking it as a captured Kuiper Belt object. Voyager 2 saw nitrogen geysers erupting from its −235 °C surface, one of the coldest places known.`},802:{name:`Nereid`,radius:170,mass:0x1a055690d9db80000,color:`#8c8c8c`,desc:`Moon with the most eccentric orbit of any known moon, ranging from 1.4 to 9.7 million km from Neptune.`},808:{name:`Proteus`,radius:210,mass:0x2629f66e0c5300000,color:`#6a6a6a`,desc:`Neptune's second-largest moon, dark and irregular, about as big as a body can be without becoming round.`},901:{name:`Charon`,texture:`moons/Charon.jpg`,radius:606,mass:1586e18,density:1.702,gravity:.288,temp:53,color:`#9e9186`,desc:`Half the size of Pluto, making the pair a double dwarf planet. Its north pole is stained red by methane escaping from Pluto, and it is split by a vast canyon system.`},902:{name:`Nix`,radius:24.5,mass:0x9fdf42f6e48000,color:`#b5aca0`,desc:`Small, elongated moon of Pluto discovered in 2005.`},903:{name:`Hydra`,radius:25.5,mass:0xaa87bee5380000,color:`#c0c0c0`,desc:`Pluto's outermost known moon, a bright, icy, irregular body.`},904:{name:`Kerberos`,radius:9.5,mass:0x3a9ea99ecb4000,color:`#8a8a8a`,desc:`Tiny double-lobed moon of Pluto.`},905:{name:`Styx`,radius:8,mass:75e14,color:`#8a8a8a`,desc:`Smallest and innermost of Pluto's minor moons.`}},Df=.01720209895;function Of(e,t){e%=2*Math.PI,e<0&&(e+=2*Math.PI);let n=t<.8?e:Math.PI;for(let r=0;r<30;r++){let r=(n-t*Math.sin(n)-e)/(1-t*Math.cos(n));if(n-=r,Math.abs(r)<1e-12)break}return n}function kf(e,t,n,r,i,a,o=[0,0,0]){let s=Of(a,t),c=e*(Math.cos(s)-t),l=e*Math.sqrt(1-t*t)*Math.sin(s),u=Math.cos(i),d=Math.sin(i),f=Math.cos(r),p=Math.sin(r),m=Math.cos(n),h=Math.sin(n);return o[0]=(u*f-d*p*m)*c+(-d*f-u*p*m)*l,o[1]=(u*p+d*f*m)*c+(-d*p+u*f*m)*l,o[2]=d*h*c+u*h*l,o}function Af(e){let t=Math.cos(Mu),n=Math.sin(Mu),r=e[1],i=e[2];return e[1]=r*t-i*n,e[2]=r*n+i*t,e}var jf={Mercury:{el:[.38709927,.20563593,7.00497902,252.2503235,77.45779628,48.33076593],rate:[37e-8,1906e-8,-.00594749,149472.67411175,.16047689,-.12534081]},Venus:{el:[.72333566,.00677672,3.39467605,181.9790995,131.60246718,76.67984255],rate:[39e-7,-4107e-8,-7889e-7,58517.81538729,.00268329,-.27769418]},EMB:{el:[1.00000261,.01671123,-1531e-8,100.46457166,102.93768193,0],rate:[562e-8,-4392e-8,-.01294668,35999.37244981,.32327364,0]},Mars:{el:[1.52371034,.0933941,1.84969142,-4.55343205,-23.94362959,49.55953891],rate:[1847e-8,7882e-8,-.00813131,19140.30268499,.44441088,-.29257343]},Jupiter:{el:[5.202887,.04838624,1.30439695,34.39644051,14.72847983,100.47390909],rate:[-11607e-8,-13253e-8,-.00183714,3034.74612775,.21252668,.20469106]},Saturn:{el:[9.53667594,.05386179,2.48599187,49.95424423,92.59887831,113.66242448],rate:[-.0012506,-50991e-8,.00193609,1222.49362201,-.41897216,-.28867794]},Uranus:{el:[19.18916464,.04725744,.77263783,313.23810451,170.9542763,74.01692503],rate:[-.00196176,-4397e-8,-.00242939,428.48202785,.40805281,.04240589]},Neptune:{el:[30.06992276,.00859048,1.77004347,-55.12002969,44.96476227,131.78422574],rate:[26291e-8,5105e-8,35372e-8,218.45945325,-.32241464,-.00508664]},Pluto:{el:[39.48211675,.2488273,17.14001206,238.92903833,224.06891629,110.30393684],rate:[-31596e-8,517e-7,4818e-8,145.20780515,-.04062942,-.01183482]}};function Mf(e,t,n=[0,0,0]){let r=jf[e],i=(t-Fu)/36525,a=r.el[0]+r.rate[0]*i,o=r.el[1]+r.rate[1]*i,s=(r.el[2]+r.rate[2]*i)*Q,c=(r.el[3]+r.rate[3]*i)*Q,l=(r.el[4]+r.rate[4]*i)*Q,u=(r.el[5]+r.rate[5]*i)*Q;return kf(a,o,s,u,l-u,c-l,n),n[0]*=Ou,n[1]*=Ou,n[2]*=Ou,Af(n)}function Nf(e,t){let n=jf[e],r=(t-Fu)/36525,i=n.el[4]+n.rate[4]*r,a=n.el[5]+n.rate[5]*r;return{a:(n.el[0]+n.rate[0]*r)*Ou,e:n.el[1]+n.rate[1]*r,i:(n.el[2]+n.rate[2]*r)*Q,om:a*Q,w:(i-a)*Q,ecliptic:!0}}function Pf(e,t,n,r,i,a,o,s,c=[0,0,0]){let l=Df/e**1.5,u=a*Q+l*(s-o);return kf(e,t,n*Q,r*Q,i*Q,u,c),c[0]*=Ou,c[1]*=Ou,c[2]*=Ou,Af(c)}function Ff(e,t,n,r,i,a,o,s,c,l=[0,0,0]){let u=(a+o*(c-s)*86400)*Q;return kf(e,t,n*Q,r*Q,i*Q,u,l)}function If(e,t,n,r,i,a=256,o=!1){let s=new Float32Array((a+1)*3),c=[0,0,0];for(let l=0;l<=a;l++)kf(e,t,n,r,i,l/a*2*Math.PI,c),o&&Af(c),s[3*l]=c[0],s[3*l+1]=c[1],s[3*l+2]=c[2];return s}function Lf(e,t=[0,0,0]){let n=(e-Fu)/36525,r=e=>(e%360+360)%360*Q,i=r(218.3164477+481267.88123421*n-.0015786*n*n),a=r(297.8501921+445267.1114034*n-.0018819*n*n),o=r(357.5291092+35999.0502909*n-1536e-7*n*n),s=r(134.9633964+477198.8675055*n+.0087414*n*n),c=r(93.272095+483202.0175233*n-.0036539*n*n),l=1-.002516*n-74e-7*n*n,u=[[0,0,1,0,6288774],[2,0,-1,0,1274027],[2,0,0,0,658314],[0,0,2,0,213618],[0,1,0,0,-185116],[0,0,0,2,-114332],[2,0,-2,0,58793],[2,-1,-1,0,57066],[2,0,1,0,53322],[2,-1,0,0,45758],[0,1,-1,0,-40923],[1,0,0,0,-34720],[0,1,1,0,-30383],[2,0,0,-2,15327],[0,0,1,2,-12528],[0,0,1,-2,10980],[4,0,-1,0,10675],[0,0,3,0,10034],[4,0,-2,0,8548],[2,1,-1,0,-7888],[2,1,0,0,-6766],[1,0,-1,0,-5163],[1,1,0,0,4987],[2,-1,1,0,4036],[2,0,2,0,3994],[4,0,0,0,3861],[2,0,-3,0,3665],[0,1,-2,0,-2689],[2,0,-1,2,-2602],[2,-1,-2,0,2390]],d=[[0,0,1,0,-20905355],[2,0,-1,0,-3699111],[2,0,0,0,-2955968],[0,0,2,0,-569925],[0,1,0,0,48888],[0,0,0,2,-3149],[2,0,-2,0,246158],[2,-1,-1,0,-152138],[2,0,1,0,-170733],[2,-1,0,0,-204586],[0,1,-1,0,-129620],[1,0,0,0,108743],[0,1,1,0,104755],[2,0,0,-2,10321],[0,0,1,-2,79661],[4,0,-1,0,-34782],[0,0,3,0,-23210],[4,0,-2,0,-21636],[2,1,-1,0,24208],[2,1,0,0,30824],[1,0,-1,0,-8379],[1,1,0,0,-16675],[2,-1,1,0,-12831],[2,0,2,0,-10445],[4,0,0,0,-11650],[2,0,-3,0,14403],[0,1,-2,0,-7003],[2,-1,-2,0,10056]],f=[[0,0,0,1,5128122],[0,0,1,1,280602],[0,0,1,-1,277693],[2,0,0,-1,173237],[2,0,-1,1,55413],[2,0,-1,-1,46271],[2,0,0,1,32573],[0,0,2,1,17198],[2,0,1,-1,9266],[0,0,2,-1,8822],[2,-1,0,-1,8216],[2,0,-2,-1,4324],[2,0,1,1,4200],[2,1,0,-1,-3359],[2,-1,-1,1,2463],[2,-1,0,1,2211],[2,-1,-1,-1,2065],[0,1,-1,-1,-1870],[4,0,-1,-1,1828],[0,1,0,1,-1794]],p=0,m=0,h=0;for(let[e,t,n,r,i]of u){let u=e*a+t*o+n*s+r*c,d=Math.abs(t)===1?l:Math.abs(t)===2?l*l:1;p+=i*d*Math.sin(u)}for(let[e,t,n,r,i]of d){let u=e*a+t*o+n*s+r*c,d=Math.abs(t)===1?l:Math.abs(t)===2?l*l:1;m+=i*d*Math.cos(u)}for(let[e,t,n,r,i]of f){let u=e*a+t*o+n*s+r*c,d=Math.abs(t)===1?l:Math.abs(t)===2?l*l:1;h+=i*d*Math.sin(u)}let g=r(119.75+131.849*n),_=r(53.09+479264.29*n),v=r(313.45+481266.484*n);p+=3958*Math.sin(g)+1962*Math.sin(i-c)+318*Math.sin(_),h+=-2235*Math.sin(i)+382*Math.sin(v)+175*Math.sin(g-c)+175*Math.sin(g+c)+127*Math.sin(i-s)-115*Math.sin(i+s);let y=i+p/1e6*Q-(1.396971*n+3086e-7*n*n)*Q,b=h/1e6*Q,x=385000.56+m/1e3;return t[0]=x*Math.cos(b)*Math.cos(y),t[1]=x*Math.cos(b)*Math.sin(y),t[2]=x*Math.sin(b),Af(t)}function Rf(e){let t=(e-Fu)/36525,n=280.46061837+360.98564736629*(e-Fu)+387933e-9*t*t-t*t*t/3871e4;return n=(n%360+360)%360,n*Q}function zf(e,t,n=[0,0,0]){let r=e.t.length;if(t<=e.t[0]){let r=(t-e.t[0])*86400;for(let t=0;t<3;t++)n[t]=e.r[t]+e.v[t]*r;return n}if(t>=e.t[r-1]){let i=3*(r-1),a=(t-e.t[r-1])*86400;for(let t=0;t<3;t++)n[t]=e.r[i+t]+e.v[i+t]*a;return n}let i=0,a=r-1;for(;a-i>1;){let n=i+a>>1;e.t[n]<=t?i=n:a=n}let o=(e.t[a]-e.t[i])*86400,s=(t-e.t[i])*86400/o,c=s*s,l=c*s,u=2*l-3*c+1,d=l-2*c+s,f=-2*l+3*c,p=l-c;for(let t=0;t<3;t++)n[t]=u*e.r[3*i+t]+d*o*e.v[3*i+t]+f*e.r[3*a+t]+p*o*e.v[3*a+t];return n}var Bf=new ho,Vf=new q,Hf=new q,Uf=new q,Wf=new Yt,Gf=new Tt,Kf=132712440018;function qf(e,t=!0,n){let r=Bf.load(`/Starmap/textures/`+e,n);return t&&(r.colorSpace=Pe),r.anisotropy=8,r}function Jf(e,t,n,r,i,a=!1){let o=r-Fu,s=e[0]*Q,c=e[1]*Q,l=Vf.set(Math.cos(c)*Math.cos(s),Math.cos(c)*Math.sin(s),Math.sin(c)),u,d=Hf;a?(d.set(1,0,0),u=Rf(r)):(d.set(-Math.sin(s),Math.cos(s),0),u=(t+n*o)*Q),Gf.setFromAxisAngle(l,u);let f=d.applyQuaternion(Gf).normalize(),p=Uf.crossVectors(f,l).normalize();return Wf.makeBasis(f,l,p),i.setFromRotationMatrix(Wf)}var Yf=class{constructor(e,t,n,r){this.layer=e,this.def=t,this.kind=n,this.parent=r,this.id=t.id||String(t.hid),this.name=t.name,this.radius=t.radius,this.pos=new Float64Array(3),this.color=new J(t.color||`#aaa`),this.group=new wn,this.group.visible=!1,this.group.frustumCulled=!1,e.u.scene.add(this.group);let i=e.sphereGeo;if(this.mat=n===`sun`?af():ef({color:t.color,specular:!!t.specular,bump:t.rings||n===`sun`?0:t.id===`jupiter`||t.id===`saturn`||t.id===`uranus`||t.id===`neptune`||t.id===`venus`?.15:.8}),this.mesh=new pi(i,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=10,this.mesh.scale.setScalar(this.radius),this.group.add(this.mesh),t.atmosphere&&(this.atm=new pi(i,tf(t.atmosphere.color,t.atmosphere.strength)),this.atm.scale.setScalar(this.radius*t.atmosphere.scale),this.atm.renderOrder=12,this.atm.frustumCulled=!1,this.group.add(this.atm)),t.clouds&&(this.clouds=new pi(i,nf()),this.clouds.scale.setScalar(this.radius*1.0016),this.clouds.renderOrder=11,this.clouds.frustumCulled=!1,this.group.add(this.clouds)),t.rings){let e=t.rings,n=new Sa(e.inner,e.outer,256,4);if(this.ring=new pi(n,rf(e.inner,e.outer,e.color,e.opacity,null)),e.texture){let t=qf(e.texture,!0,()=>{this.ring.material.uniforms.map.value=t,this.ring.material.uniforms.hasMap.value=1})}this.ring.rotation.x=-Math.PI/2,this.ring.renderOrder=11,this.ring.frustumCulled=!1,this.group.add(this.ring),this.mat.uniforms.ringInner.value=e.inner,this.mat.uniforms.ringOuter.value=e.outer,this.mat.uniforms.ringOpacity.value=e.opacity}n===`sun`&&(this.glow=new Gr(new jr({map:Sf(),color:16773580,transparent:!0,blending:2,depthWrite:!1,depthTest:!0})),this.glow.renderOrder=8,e.u.scene.add(this.glow)),this.texLoaded=!1,this.quat=new Tt}ensureTextures(){if(this.texLoaded)return;this.texLoaded=!0;let e=this.def;e.texture&&(this.mat.uniforms.map.value=qf(e.texture,!0,()=>{this.mat.uniforms.hasMap.value=1})),e.night&&(this.mat.uniforms.nightMap.value=qf(e.night,!0,()=>{this.mat.uniforms.hasNight.value=1})),e.clouds&&(this.clouds.visible=!1,this.clouds.material.uniforms.map.value=qf(e.clouds,!1,()=>{this.clouds.visible=!0}))}},Xf=class{constructor(e,t,n){this.u=e,this.sphereGeo=new Ca(1,96,64),this.bodies=[],this.byId=new Map,this.visible=!0,this.showOrbits=!0,this.sun=this._add(Cf,`sun`,null);for(let e of wf)this._add(e,`planet`,this.sun);for(let e of Tf){let t=this._add(e,`dwarf`,this.sun);e.sb&&n&&(t.sbEl=n.elementsByName(e.sb),t.sbEl||console.warn(`no elements for`,e.sb))}let r={399:`earth`,499:`mars`,599:`jupiter`,699:`saturn`,799:`uranus`,899:`neptune`,999:`pluto`};for(let e of t){let t=Ef[e.id];if(!t)continue;let n=this.byId.get(r[e.parent]);if(!n)continue;let i={...t,id:`moon`+e.id,hid:e.id,el:e},a=this._add(i,`moon`,n);a.el=e}let i=this.bodies.length;this.markerGeo=new Tr,this.markerPos=new Float32Array(i*3),this.markerAlpha=new Float32Array(i),this.markerSize=new Float32Array(i);let a=new Float32Array(i*3);this.bodies.forEach((e,t)=>{a[3*t]=e.color.r,a[3*t+1]=e.color.g,a[3*t+2]=e.color.b,this.markerSize[t]=e.kind===`planet`?9:e.kind===`sun`?12:e.kind===`dwarf`?7:6}),this.markerGeo.setAttribute(`position`,new Y(this.markerPos,3)),this.markerGeo.setAttribute(`color`,new Y(a,3)),this.markerGeo.setAttribute(`alpha`,new Y(this.markerAlpha,1)),this.markerGeo.setAttribute(`size`,new Y(this.markerSize,1)),this.markerGeo.boundingSphere=new _r(new q,1e30),this.markers=new pa(this.markerGeo,of()),this.markers.frustumCulled=!1,this.markers.renderOrder=20,e.scene.add(this.markers);for(let e of this.bodies)e.parent&&this._makeOrbit(e);this.earth=this.byId.get(`earth`),this.moon=this.byId.get(`moon301`),this._tmp=[0,0,0],this._tmp2=[0,0,0],this._rel=new q,this._sunRel=new q,this._nrm=new q}_add(e,t,n){let r=new Yf(this,e,t,n);return this.bodies.push(r),this.byId.set(r.id,r),r}_makeOrbit(e){let t,n=this.u.time.jd;if(e.kind===`planet`||e.kind===`dwarf`&&e.def.el){let r=Nf(e.def.el,n);t=If(r.a,r.e,r.i,r.om,r.w,720,!0)}else if(e.kind===`dwarf`&&e.sbEl){let n=e.sbEl;t=If(n.a*Ou,n.e,n.i*Q,n.om*Q,n.w*Q,720,!0)}else if(e.kind===`moon`&&e.el){let n=e.el;t=If(n.a,n.e,n.i*Q,n.om*Q,n.w*Q,360,!1)}else return;let r=new Tr;r.setAttribute(`position`,new Y(t,3)),r.boundingSphere=new _r(new q,1e30);let i=new na(r,new Ji({color:e.color.clone().lerp(new J(1,1,1),.25),transparent:!0,opacity:e.kind===`moon`?.3:.38,depthWrite:!1}));i.frustumCulled=!1,i.renderOrder=3,e.orbit=i,e.orbitA=e.kind===`moon`?e.el.a:e.sbEl?e.sbEl.a*Ou:Nf(e.def.el,n).a,this.u.scene.add(i)}computePositions(e){let t=this._tmp;this.sun.pos.fill(0);for(let n of this.bodies)if(n.kind===`planet`||n.kind===`dwarf`&&n.def.el){if(Mf(n.def.el,e,t),n.pos[0]=t[0],n.pos[1]=t[1],n.pos[2]=t[2],n.id===`earth`){Lf(e,this._tmp2);let t=.0121505;n.pos[0]-=this._tmp2[0]*t,n.pos[1]-=this._tmp2[1]*t,n.pos[2]-=this._tmp2[2]*t}}else if(n.kind===`dwarf`&&n.sbEl){let r=n.sbEl;Pf(r.a,r.e,r.i,r.om,r.w,r.ma,r.epoch,e,t),n.pos[0]=t[0],n.pos[1]=t[1],n.pos[2]=t[2]}for(let n of this.bodies){if(n.kind!==`moon`)continue;let r=n.parent.pos;if(n.def.hid===301)Lf(e,t);else{let r=n.el;Ff(r.a,r.e,r.i,r.om,r.w,r.ma,r.n_degps,r.jd,e,t)}n.pos[0]=r[0]+t[0],n.pos[1]=r[1]+t[1],n.pos[2]=r[2]+t[2]}}bodyPos(e,t,n){let r=this.byId.get(e);return n[0]=r.pos[0],n[1]=r.pos[1],n[2]=r.pos[2],n}update(e){let t=e.jd,n=e.camPos;this.computePositions(t);let r=this._sunRel.set(-n[0],-n[1],-n[2]);this.bodies.forEach((i,a)=>{let o=this._rel.set(i.pos[0]-n[0],i.pos[1]-n[1],i.pos[2]-n[2]),s=o.length(),c=i.radius/s*e.pxPerRad,l=this.visible&&c>.4;i.group.visible=l,i.screenPx=c,i.dist=s,this.markerPos[3*a]=o.x,this.markerPos[3*a+1]=o.y,this.markerPos[3*a+2]=o.z;let u=this.visible?Ct.clamp((4-c)/3,0,1):0;if(i.kind===`moon`){let t=i.parent,n=Math.hypot(i.pos[0]-t.pos[0],i.pos[1]-t.pos[1],i.pos[2]-t.pos[2])/s*e.pxPerRad;u*=Ct.clamp((n-6)/10,0,1)}if(this.markerAlpha[a]=u,l){i.group.position.copy(o),c>2&&i.ensureTextures();let e=i.def;if(e.pole?Jf(e.pole,e.W0,e.Wd,t,i.quat,i.id===`earth`):i.parent&&i.parent.def.pole?i.quat.copy(i.parent.quat):i.quat.identity(),i.group.quaternion.copy(i.quat),i.mat.uniforms.sunPos?.value.copy(r),i.ring){i.ring.material.uniforms.sunPos.value.copy(r),i.ring.material.uniforms.center.value.copy(o),i.ring.material.uniforms.planetRadius.value=i.radius;let e=this._nrm.set(0,1,0).applyQuaternion(i.quat);i.ring.material.uniforms.normal.value.copy(e),i.mat.uniforms.ringNormal.value.copy(e),i.mat.uniforms.shadowCenter.value.copy(o)}i.atm&&i.atm.material.uniforms.sunPos.value.copy(r),i.clouds&&i.clouds.material.uniforms.sunPos.value.copy(r)}if(i.glow){i.glow.position.copy(o);let t=Math.max(i.radius*5.5,s/e.pxPerRad*44);i.glow.scale.set(t,t,1),i.glow.visible=this.visible,i.glow.material.opacity=c>400?.15:.85}if(i.orbit){let t=i.orbitA/Math.max(1,Math.hypot(i.parent.pos[0]-n[0],i.parent.pos[1]-n[1],i.parent.pos[2]-n[2]))*e.pxPerRad,r=e.rig.distanceTo(i.parent.pos)<i.orbitA*1.15,a=this.visible&&this.showOrbits&&t>12&&!r;i.orbit.visible=a,a&&(i.orbit.position.set(i.parent.pos[0]-n[0],i.parent.pos[1]-n[1],i.parent.pos[2]-n[2]),i.orbit.material.opacity=(i.kind===`moon`?.3:.4)*Ct.clamp((t-12)/30,0,1))}}),this.markerGeo.attributes.position.needsUpdate=!0,this.markerGeo.attributes.alpha.needsUpdate=!0,this.markers.material.uniforms.uPixelRatio.value=e.pixelRatio}nearestSurface(e){let t=1/0;for(let n of this.bodies){let r=Math.hypot(n.pos[0]-e[0],n.pos[1]-e[1],n.pos[2]-e[2])-n.radius;r<t&&(t=r)}return t}pick(e,t,n){let r=null,i=16;for(let a of this.bodies){if(!this.visible)break;let o=a.pos[0]-t[0],s=a.pos[1]-t[1],c=a.pos[2]-t[2],l=Math.hypot(o,s,c);if(l<a.radius)continue;let u=(o*e.x+s*e.y+c*e.z)/l;if(u<.99)continue;let d=Math.acos(Math.min(1,u))*n,f=a.radius/l*n,p=Math.max(0,d-f);if(a.kind===`moon`){let e=this.bodies.indexOf(a);if(this.markerAlpha[e]<=.01&&f<2)continue}p<i&&(i=p,r=a)}return r?{sepPx:i,desc:this.describe(r)}:null}describe(e){let t=e.def,n=[];this.u.time.jd;let r=Math.hypot(...e.pos),i=Math.hypot(e.pos[0]-this.earth.pos[0],e.pos[1]-this.earth.pos[1],e.pos[2]-this.earth.pos[2]);if(e.kind!==`sun`){if(e.parent&&e.kind===`moon`){let t=Math.hypot(e.pos[0]-e.parent.pos[0],e.pos[1]-e.parent.pos[1],e.pos[2]-e.parent.pos[2]);n.push([`Distance from ${e.parent.name}`,Ru(t)]),e.el&&n.push([`Orbital period`,zu(e.el.per_s)],[`Semi-major axis`,Ru(e.el.a)],[`Eccentricity`,$(e.el.e,4)],[`Inclination (ICRF)`,`${$(e.el.i,3)}°`]),e.def.hid===301&&n.push([`Orbital period`,`27.32 days (sidereal)`])}else{n.push([`Distance from Sun`,`${$(r/Ou,4)} AU (${Ru(r)})`]);let t=Math.sqrt(Kf*(2/r-1/(e.orbitA||r)));Number.isFinite(t)&&n.push([`Orbital speed (now)`,`${$(t,3)} km/s`]),e.orbitA&&n.push([`Orbital period`,zu(2*Math.PI*Math.sqrt(e.orbitA**3/Kf))])}e.id!==`earth`&&n.push([`Distance from Earth`,`${$(i/Ou,4)} AU · light time ${zu(i/299792.458)}`])}n.push([`Equatorial radius`,`${$(e.radius,4)} km`]),t.mass&&n.push([`Mass`,`${t.mass.toExponential(3).replace(`e+`,` × 10^`)} kg${e.kind===`sun`?``:` (${$(t.mass/59722e20,3)} Earths)`}`]),t.density&&n.push([`Mean density`,`${$(t.density,3)} g/cm³`]),t.gravity&&n.push([`Surface gravity`,`${$(t.gravity,3)} m/s² (${$(t.gravity/9.807,2)} g)`]),t.escape&&n.push([`Escape velocity`,`${$(t.escape,3)} km/s`]),t.rot&&n.push([`Rotation period`,`${zu(Math.abs(t.rot)*3600)}${t.rot<0?` (retrograde)`:``}`]),t.tilt!==void 0&&n.push([`Axial tilt`,`${$(t.tilt,3)}°`]),t.temp&&n.push([`Mean temperature`,`${t.temp} K (${$(t.temp-273.15,3)} °C)`]),t.albedo&&n.push([`Albedo`,$(t.albedo,3)]),t.moons!==void 0&&n.push([`Known moons`,String(t.moons)]);for(let[e,r]of Object.entries(t.facts||{}))n.push([e,r]);let a={sun:`Star`,planet:`Planet`,dwarf:`Dwarf planet`,moon:`Moon of ${e.parent?.name}`}[e.kind];return{kind:e.kind,kindLabel:a,name:e.name,sub:a,radius:e.radius,rows:n,desc:t.desc||``,ref:{layer:`solar`,id:e.id},source:e.kind===`moon`&&e.def.hid!==301?`Orbit: JPL Horizons osculating elements (epoch 2026-09-07), propagated as a two-body orbit. Physical data: NASA/JPL fact sheets.`:e.kind===`moon`?`Orbit: truncated ELP-2000 lunar theory (Meeus). Physical data: NASA fact sheets.`:e.kind===`dwarf`&&e.sbEl?`Orbit: JPL Small-Body Database elements. Physical data: NASA/JPL, IAU.`:`Orbit: JPL approximate Keplerian elements (Standish). Rotation: IAU WGCCRE. Physical data: NASA planetary fact sheets. Textures: Solar System Scope (CC BY 4.0).`,getPos:(t,n)=>(n[0]=e.pos[0],n[1]=e.pos[1],n[2]=e.pos[2],n),lightPos:e.kind===`sun`?null:[0,0,0]}}descriptorById(e){let t=this.byId.get(e);return t?this.describe(t):null}labels(e,t){for(let n of this.bodies){if(!this.visible)return;let r=n.pos[0]-e.camPos[0],i=n.pos[1]-e.camPos[1],a=n.pos[2]-e.camPos[2],o=Math.sqrt(r*r+i*i+a*a);if(n.kind===`moon`){let e=this.bodies.indexOf(n);if(this.markerAlpha[e]<.3&&n.screenPx<3)continue}if(n.kind===`dwarf`&&e.labelDensity<.3&&n.screenPx<1||n.kind!==`sun`&&o>15e9)continue;let s=n.kind===`moon`?`moon`:`planet`,c=n.kind===`sun`&&o>3e9;t.push({text:n.name,x:r,y:i,z:a,cls:s,prio:c?20:n.kind===`planet`||n.kind===`sun`?100:n.kind===`dwarf`?60:50,offsetPx:Math.min(60,n.screenPx),ref:{layer:`solar`,id:n.id}})}}searchEntries(){return this.bodies.map(e=>({name:e.name,kind:e.kind===`moon`?`moon of ${e.parent.name}`:e.kind===`dwarf`?`dwarf planet`:e.kind,ref:{layer:`solar`,id:e.id},prio:5}))}},Zf={MBA:[`Main-belt asteroid`,`#b8a890`],IMB:[`Inner main-belt asteroid`,`#c0b09a`],OMB:[`Outer main-belt asteroid`,`#a89c8c`],MCA:[`Mars-crossing asteroid`,`#d09a70`],APO:[`Apollo near-Earth asteroid`,`#ff8a5a`],ATE:[`Aten near-Earth asteroid`,`#ff7a4a`],AMO:[`Amor near-Earth asteroid`,`#ff9a6a`],IEO:[`Atira (interior-Earth) asteroid`,`#ff6a3a`],TJN:[`Jupiter Trojan`,`#9a7a5a`],CEN:[`Centaur`,`#7ab0d0`],TNO:[`Trans-Neptunian object`,`#8ab8ff`],HYA:[`Hyperbolic asteroid`,`#ffffff`],PAA:[`Parabolic asteroid`,`#fff`],AST:[`Asteroid`,`#bbb`],JFc:[`Jupiter-family comet`,`#8ff`],JFC:[`Jupiter-family comet`,`#8ff`],HTC:[`Halley-type comet`,`#9ff`],ETc:[`Encke-type comet`,`#8ff`],COM:[`Comet`,`#8ff`],CTc:[`Chiron-type comet`,`#8ff`],HYP:[`Hyperbolic comet`,`#aff`],PAR:[`Parabolic comet`,`#aff`]},Qf=`
  attribute vec4 el0; attribute vec4 el1; attribute vec3 color;
  uniform float uT; uniform vec3 uCam; uniform float uPixelRatio; uniform float uRef; uniform float uAU; uniform float uBoost;
  varying vec3 vColor; varying float vAlpha;
  #include <common>
#include <logdepthbuf_pars_vertex>
  const float K = 0.01720209895; const float OBL = 0.4090926;
  void main() {
    float a = el0.x, e = el0.y, inc = el0.z, om = el0.w, w = el1.x, ma0 = el1.y, ep = el1.z, H = el1.w;
    float n = K / pow(a, 1.5);
    float M = mod(ma0 + n * (uT - ep), 6.283185307);
    float E = e < 0.8 ? M : 3.14159265;
    for (int i = 0; i < 14; i++) { float dE = (E - e * sin(E) - M) / (1.0 - e * cos(E)); E -= dE; }
    float xp = a * (cos(E) - e), yp = a * sqrt(1.0 - e * e) * sin(E);
    float cw = cos(w), sw = sin(w), co = cos(om), so = sin(om), ci = cos(inc), si = sin(inc);
    vec3 p = vec3((cw*co - sw*so*ci) * xp + (-sw*co - cw*so*ci) * yp, (cw*so + sw*co*ci) * xp + (-sw*so + cw*co*ci) * yp, (sw*si) * xp + (cw*si) * yp);
    // ecliptic -> equatorial
    float c = cos(OBL), s = sin(OBL);
    p = vec3(p.x, p.y * c - p.z * s, p.y * s + p.z * c);
    float rSun = length(p);
    vec3 rel = p * uAU - uCam;
    float d = length(rel);
    float m = H + 5.0 * log(max(rSun * d / uAU, 1e-6)) / 2.302585;
    float sz = 2.6 * pow(10.0, -0.2 * (m - mix(15.5, uRef, uBoost)));
    vAlpha = clamp(sz / 1.4, mix(0.0, 0.35, uBoost), 1.0);
    if (sz < 0.5) vAlpha *= sz / 0.5;
    sz = clamp(sz, 1.4, 7.0);
    vColor = color;
    vec4 mv = modelViewMatrix * vec4(rel, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = sz * uPixelRatio;
    #include <logdepthbuf_vertex>
  }`,$f=`
  varying vec3 vColor; varying float vAlpha;
  #include <logdepthbuf_pars_fragment>
  void main() {
    #include <logdepthbuf_fragment>
    vec2 c = gl_PointCoord - 0.5; float r2 = dot(c, c) * 4.0; float a = exp(-r2 * 3.0) * vAlpha;
    gl_FragColor = vec4(vColor * a, a);
  }`,ep=class{constructor(e,t,n,r){this.u=e,this.el=t.el,this.names=n.names,this.extra=n.extra,this.notable=n.notable,this.count=this.names.length,this.visible=!0,this.cometsVisible=!0,this.nameIndex=new Map(this.names.map((e,t)=>[e.toLowerCase(),t]));let i=this.count,a=new Float32Array(i*4),o=new Float32Array(i*4),s=new Float32Array(i*3),c=new J;for(let e=0;e<i;e++){let t=9*e;a[4*e]=this.el[t],a[4*e+1]=this.el[t+1],a[4*e+2]=this.el[t+2]*Q,a[4*e+3]=this.el[t+3]*Q,o[4*e]=this.el[t+4]*Q,o[4*e+1]=this.el[t+5]*Q,o[4*e+2]=this.el[t+6],o[4*e+3]=this.el[t+7],c.set((Zf[this.extra[e][0]]||Zf.AST)[1]),s[3*e]=c.r,s[3*e+1]=c.g,s[3*e+2]=c.b}let l=new Tr;l.setAttribute(`position`,new Y(new Float32Array(i*3),3)),l.setAttribute(`el0`,new Y(a,4)),l.setAttribute(`el1`,new Y(o,4)),l.setAttribute(`color`,new Y(s,3)),l.boundingSphere=new _r(new q,1e30),this.mat=new Na({vertexShader:Qf,fragmentShader:$f,transparent:!0,depthWrite:!1,depthTest:!0,blending:2,uniforms:{uT:{value:0},uCam:{value:new q},uPixelRatio:{value:1},uRef:{value:21},uAU:{value:Ou},uBoost:{value:1}}}),this.points=new pa(l,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=4,e.scene.add(this.points),this.comets=r.filter(e=>e.e<1&&e.a);let u=this.comets.length;this.cometPos=new Float64Array(u*3);let d=new Tr;this.cometRel=new Float32Array(u*3),d.setAttribute(`position`,new Y(this.cometRel,3)),d.boundingSphere=new _r(new q,1e30),this.cometPoints=new pa(d,new ca({color:10352639,size:9,map:Sf(),sizeAttenuation:!1,transparent:!0,opacity:.85,depthWrite:!1,depthTest:!0,blending:2})),this.cometPoints.frustumCulled=!1,this.cometPoints.renderOrder=4,e.scene.add(this.cometPoints),this.tailRel=new Float32Array(u*6);let f=new Tr;f.setAttribute(`position`,new Y(this.tailRel,3)),f.boundingSphere=new _r(new q,1e30),this.tails=new oa(f,new Ji({color:8382975,transparent:!0,opacity:.22,depthWrite:!1})),this.tails.frustumCulled=!1,e.scene.add(this.tails),this.selectedOrbit=null,this._tmp=[0,0,0],this.notablePos=new Float64Array(this.notable.length*3),this.skipLabel=new Set([`4 Vesta`,`1 Ceres`,`134340 Pluto`,`136199 Eris`,`136108 Haumea`,`136472 Makemake`,`225088 Gonggong`,`50000 Quaoar`,`90482 Orcus`,`90377 Sedna`])}elementsByName(e){let t=this.nameIndex.get(e.toLowerCase());return t===void 0?null:this.elementsOf(t)}elementsOf(e){let t=9*e;return{a:this.el[t],e:this.el[t+1],i:this.el[t+2],om:this.el[t+3],w:this.el[t+4],ma:this.el[t+5],epoch:this.el[t+6]+Fu,H:this.el[t+7],dia:this.el[t+8]}}position(e,t,n){let r=this.elementsOf(e);return Pf(r.a,r.e,r.i,r.om,r.w,r.ma,r.epoch,t,n)}cometPosition(e,t,n){return Pf(e.a,e.e,e.i,e.om,e.w,e.ma??0,e.ep,t,n)}update(e){this.mat.uniforms.uT.value=e.jd-Fu,this.mat.uniforms.uCam.value.set(e.camPos[0],e.camPos[1],e.camPos[2]),this.mat.uniforms.uPixelRatio.value=e.pixelRatio;let t=Math.hypot(e.camPos[0],e.camPos[1],e.camPos[2])/Ou;if(this.mat.uniforms.uBoost.value=Ct.smoothstep(t,1.3,6),this.points.visible=this.visible,this.cometPoints.visible=this.tails.visible=this.cometsVisible,this.cometsVisible){let t=this._tmp,n=e.camPos;for(let r=0;r<this.comets.length;r++){this.cometPosition(this.comets[r],e.jd,t),this.cometPos[3*r]=t[0],this.cometPos[3*r+1]=t[1],this.cometPos[3*r+2]=t[2];let i=t[0]-n[0],a=t[1]-n[1],o=t[2]-n[2];this.cometRel[3*r]=i,this.cometRel[3*r+1]=a,this.cometRel[3*r+2]=o;let s=Math.hypot(t[0],t[1],t[2])/Ou,c=(s<3?Math.min(.25,.03*(2/s)**2)*Ou:0)/(s*Ou);this.tailRel[6*r]=i,this.tailRel[6*r+1]=a,this.tailRel[6*r+2]=o,this.tailRel[6*r+3]=i+t[0]*c,this.tailRel[6*r+4]=a+t[1]*c,this.tailRel[6*r+5]=o+t[2]*c}this.cometPoints.geometry.attributes.position.needsUpdate=!0,this.tails.geometry.attributes.position.needsUpdate=!0}for(let t=0;t<this.notable.length;t++)this.position(this.notable[t],e.jd,this._tmp),this.notablePos[3*t]=this._tmp[0],this.notablePos[3*t+1]=this._tmp[1],this.notablePos[3*t+2]=this._tmp[2];this.selectedOrbit&&this.selectedOrbit.position.set(-e.camPos[0],-e.camPos[1],-e.camPos[2])}nearestSurface(e){let t=1/0;for(let n of[this.u.rig.focus,this.u.selection]){if(!n||n.kind!==`asteroid`&&n.kind!==`comet`)continue;n.getPos(this.u.time.jd,this._tmp);let r=Math.hypot(this._tmp[0]-e[0],this._tmp[1]-e[1],this._tmp[2]-e[2])-n.radius;r<t&&(t=r)}return t}showOrbitFor(e){if(this.selectedOrbit&&=(this.u.scene.remove(this.selectedOrbit),this.selectedOrbit.geometry.dispose(),null),!e||e.ref.layer!==`asteroids`&&e.ref.layer!==`comets`)return;let t=e.ref.layer===`asteroids`?this.elementsOf(e.ref.index):this.comets[e.ref.index],n=If(t.a*Ou,t.e,t.i*Q,t.om*Q,t.w*Q,720,!0),r=new Tr;r.setAttribute(`position`,new Y(n,3)),r.boundingSphere=new _r(new q,1e30),this.selectedOrbit=new na(r,new Ji({color:e.ref.layer===`comets`?8382975:16761466,transparent:!0,opacity:.55,depthWrite:!1})),this.selectedOrbit.frustumCulled=!1,this.u.scene.add(this.selectedOrbit)}pick(e,t,n,r){let i=-1,a=12,o=null,s=this._tmp;if(this.visible)for(let c=0;c<this.count;c++){this.position(c,r,s);let l=s[0]-t[0],u=s[1]-t[1],d=s[2]-t[2],f=Math.sqrt(l*l+u*u+d*d),p=(l*e.x+u*e.y+d*e.z)/f;if(p<.9995)continue;let m=Math.acos(Math.min(1,p))*n;m<a&&(a=m,i=c,o=`asteroids`)}if(this.cometsVisible)for(let r=0;r<this.comets.length;r++){let s=this.cometPos[3*r]-t[0],c=this.cometPos[3*r+1]-t[1],l=this.cometPos[3*r+2]-t[2],u=Math.sqrt(s*s+c*c+l*l),d=(s*e.x+c*e.y+l*e.z)/u;if(d<.9995)continue;let f=Math.acos(Math.min(1,d))*n;f<a&&(a=f,i=r,o=`comets`)}return i<0?null:{sepPx:a,desc:o===`asteroids`?this.describe(i):this.describeComet(i)}}describe(e){let t=this,n=this.elementsOf(e),r=this.extra[e],i=Zf[r[0]]||Zf.AST,a=n.a**1.5,o=[[`Orbit class`,`${i[0]} (${r[0]})`],[`Semi-major axis`,`${$(n.a,4)} AU`],[`Eccentricity`,$(n.e,4)],[`Inclination`,`${$(n.i,3)}°`],[`Perihelion / aphelion`,`${$(n.a*(1-n.e),3)} / ${$(n.a*(1+n.e),3)} AU`],[`Orbital period`,`${$(a,4)} yr`],[`Absolute magnitude H`,$(n.H,2)]];n.dia?o.push([`Diameter`,`${$(n.dia,3)} km`]):o.push([`Diameter (est. from H)`,`${$(1329/Math.sqrt(.14)*10**(-.2*n.H),2)} km (assuming albedo 0.14)`]),r[1]!=null&&o.push([`Geometric albedo`,$(r[1],3)]),r[2]!=null&&o.push([`Rotation period`,`${$(r[2],4)} h`]);let s=this.position(e,this.u.time.jd,[0,0,0]);o.push([`Distance from Sun (now)`,`${$(Math.hypot(...s)/Ou,4)} AU`]);let c=(n.dia||1329/Math.sqrt(.14)*10**(-.2*n.H))/2;return{kind:`asteroid`,kindLabel:i[0],name:this.names[e],sub:i[0],radius:c,rows:o,variant:[`ast_rubble`,`ast_elongated`,`ast_cratered`,`ast_irregular`,`ast_metallic`][e%5],desc:`${i[0]} catalogued by the JPL Small-Body Database. Orbital elements at epoch JD ${$(n.epoch,8)}.`,source:`JPL Small-Body Database (SBDB) query API, numbered asteroids.`,ref:{layer:`asteroids`,index:e},getPos:(n,r)=>t.position(e,n,r)}}describeComet(e){let t=this,n=this.comets[e],r=Zf[n.cls]||Zf.COM,i=[[`Orbit class`,`${r[0]} (${n.cls})`],[`Perihelion distance`,`${$(n.q,4)} AU`],[`Eccentricity`,$(n.e,4)],[`Inclination`,`${$(n.i,3)}°`]];n.a&&i.push([`Semi-major axis`,`${$(n.a,3)} AU`],[`Aphelion`,`${$(n.a*(1+n.e),3)} AU`]),n.per&&i.push([`Orbital period`,`${$(n.per,4)} yr`]),n.tp&&i.push([`Perihelion passage (JD)`,$(n.tp,8)]),n.dia&&i.push([`Nucleus diameter`,`${$(n.dia,3)} km`]);let a=this.cometPosition(n,this.u.time.jd,[0,0,0]);return i.push([`Distance from Sun (now)`,`${$(Math.hypot(...a)/Ou,4)} AU`]),{kind:`comet`,kindLabel:`Comet`,name:n.n,sub:r[0],radius:(n.dia||2)/2,rows:i,variant:`comet_nucleus`,desc:`${r[0]}. Tail drawn schematically pointing away from the Sun; length grows as it approaches perihelion.`,source:`JPL Small-Body Database (SBDB).`,ref:{layer:`comets`,index:e},getPos:(e,r)=>t.cometPosition(n,e,r)}}labels(e,t){if(this.visible)for(let n=0;n<this.notable.length;n++){let r=this.notable[n];if(this.skipLabel.has(this.names[r]))continue;let i=this.notablePos[3*n]-e.camPos[0],a=this.notablePos[3*n+1]-e.camPos[1],o=this.notablePos[3*n+2]-e.camPos[2];t.push({text:this.names[r].replace(/^\d+\s+/,``),x:i,y:a,z:o,cls:`small`,prio:20,ref:{layer:`asteroids`,index:r}})}if(this.cometsVisible)for(let n=0;n<this.comets.length;n++){let r=this.comets[n],i=Math.hypot(this.cometPos[3*n],this.cometPos[3*n+1],this.cometPos[3*n+2])/Ou;if(!/Halley|Encke|Churyumov|Hale-Bopp|Tempel 1|Wild 2|Hartley 2|Borrelly|Giacobini|Swift-Tuttle|Tuttle|Wirtanen/.test(r.n)&&!(i<1.6&&e.labelDensity>.5))continue;let a=this.cometPos[3*n]-e.camPos[0],o=this.cometPos[3*n+1]-e.camPos[1],s=this.cometPos[3*n+2]-e.camPos[2];Math.hypot(a,o,s)>11967829656||t.push({text:r.n.replace(/\s*\(.*\)$/,``),x:a,y:o,z:s,cls:`small`,prio:22,ref:{layer:`comets`,index:n}})}}searchEntries(){let e=[];for(let t=0;t<this.count;t++)e.push({name:this.names[t],kind:`asteroid`,ref:{layer:`asteroids`,index:t},lowPrio:t>200});return this.comets.forEach((t,n)=>e.push({name:t.n,kind:`comet`,ref:{layer:`comets`,index:n}})),e}},tp=.03,np=new q,rp=new q,ip=new q,ap=new Tt,op=new Yt,sp=class{constructor(e,t,n){this.u=e,this.systems=t,this.stars=n,this.visible=!0,this.hostPos=new Float64Array(t.length*3),t.forEach((e,t)=>{n.worldPos(e.s,this._tmp=[0,0,0]),this.hostPos[3*t]=this._tmp[0],this.hostPos[3*t+1]=this._tmp[1],this.hostPos[3*t+2]=this._tmp[2],n.exoHost.set(e.s,e),e.k=t;for(let t of e.p)!Number.isFinite(t.a)&&Number.isFinite(t.per)&&Number.isFinite(e.smass)&&(t.a=Math.cbrt(e.smass*(t.per/365.25)**2)),!Number.isFinite(t.per)&&Number.isFinite(t.a)&&Number.isFinite(e.smass)&&(t.per=Math.sqrt(t.a**3/e.smass)*365.25),Number.isFinite(t.rade)||(t.rade=Number.isFinite(t.masse)?t.masse<2?t.masse**.27:t.masse<130?t.masse**.55:11.5*(t.masse/318)**-.04:2),Number.isFinite(t.e)||(t.e=0),t.radiusKm=t.rade*Pu,t.color=dp(t)});let r=t.length;this.hostRel=new Float32Array(r*3),this.hostAlpha=new Float32Array(r);let i=new Float32Array(r*3),a=new Float32Array(r).fill(5);for(let e=0;e<r;e++)i[3*e]=.55,i[3*e+1]=1,i[3*e+2]=.75;let o=new Tr;o.setAttribute(`position`,new Y(this.hostRel,3)),o.setAttribute(`color`,new Y(i,3)),o.setAttribute(`alpha`,new Y(this.hostAlpha,1)),o.setAttribute(`size`,new Y(a,1)),o.boundingSphere=new _r(new q,1e30),this.hostMarkers=new pa(o,of()),this.hostMarkers.frustumCulled=!1,this.hostMarkers.renderOrder=19,e.scene.add(this.hostMarkers),this.sphereGeo=new Ca(1,48,32),this.pool=[];for(let t=0;t<12;t++){let t=new pi(this.sphereGeo,sf());t.visible=!1,t.frustumCulled=!1,t.renderOrder=10;let n=new pi(this.sphereGeo,tf(`#88aaff`,.8));n.renderOrder=12,n.frustumCulled=!1,t.add(n);let r=new na(new Tr,new Ji({color:8388528,transparent:!0,opacity:.35,depthWrite:!1}));r.visible=!1,r.frustumCulled=!1,e.scene.add(t),e.scene.add(r),this.pool.push({mesh:t,orbit:r,sys:null,p:null,pos:new Float64Array(3)})}let s=new Tr;this.pMarkerRel=new Float32Array(36),this.pMarkerAlpha=new Float32Array(12);let c=new Float32Array(36);this.pMarkerCol=c,s.setAttribute(`position`,new Y(this.pMarkerRel,3)),s.setAttribute(`color`,new Y(c,3)),s.setAttribute(`alpha`,new Y(this.pMarkerAlpha,1)),s.setAttribute(`size`,new Y(new Float32Array(12).fill(7),1)),s.boundingSphere=new _r(new q,1e30),this.pMarkers=new pa(s,of()),this.pMarkers.frustumCulled=!1,this.pMarkers.renderOrder=20,e.scene.add(this.pMarkers),this.nearSystems=[],this._frame=0}_orbitBasis(e,t,n){let r=np.set(this.hostPos[3*e],this.hostPos[3*e+1],this.hostPos[3*e+2]).normalize(),i=rp.set(0,0,1).sub(r.clone().multiplyScalar(r.z)).normalize(),a=(Number.isFinite(t.inc)?t.inc:60)*Q,o=ip.copy(r).multiplyScalar(Math.cos(a)).addScaledVector(i,Math.sin(a)).normalize(),s=new q().crossVectors(i,r).normalize(),c=(Number.isFinite(t.w)?t.w:0)*Q,l=s.clone().applyQuaternion(ap.setFromAxisAngle(o,c));l.sub(o.clone().multiplyScalar(l.dot(o))).normalize();let u=new q().crossVectors(o,l);return n.makeBasis(l,u,o),n}planetPos(e,t,n,r){let i=this.systems[e],a=(Number.isFinite(t.a)?t.a:.1)*Ou,o=Number.isFinite(t.per)?t.per:365,s=i.p.indexOf(t)*2.399963%(2*Math.PI)+2*Math.PI*((n-Fu)/o),c=kf(a,Math.min(t.e,.95),0,0,0,s,[0,0,0]),l=new q(c[0],c[1],c[2]).applyMatrix4(this._orbitBasis(e,t,op));return r[0]=this.hostPos[3*e]+l.x,r[1]=this.hostPos[3*e+1]+l.y,r[2]=this.hostPos[3*e+2]+l.z,r}update(e){let t=e.camPos,n=this.systems.length;if(this.hostMarkers.visible=this.visible,this.pMarkers.visible=this.visible,!this.visible){for(let e of this.pool)e.mesh.visible=e.orbit.visible=!1;return}let r=[],i=tp*Z;for(let a=0;a<n;a++){let n=this.hostPos[3*a]-t[0],o=this.hostPos[3*a+1]-t[1],s=this.hostPos[3*a+2]-t[2];this.hostRel[3*a]=n,this.hostRel[3*a+1]=o,this.hostRel[3*a+2]=s;let c=Math.sqrt(n*n+o*o+s*s),l=Ct.clamp((80*Z-c)/(40*Z),0,1)*Ct.clamp((c-.001*Z)/(.003*Z),0,1)*(.1+.3*e.labelDensity);this.hostAlpha[a]=l,c<i&&r.push(a)}this.hostMarkers.geometry.attributes.position.needsUpdate=!0,this.hostMarkers.geometry.attributes.alpha.needsUpdate=!0,this.hostMarkers.material.uniforms.uPixelRatio.value=e.pixelRatio;let a=[];for(let e of r)for(let t of this.systems[e].p)a.push([e,t]);this.nearSystems=r,np.set(-t[0],-t[1],-t[2]);for(let n=0;n<this.pool.length;n++){let r=this.pool[n],i=a[n];if(!i){r.mesh.visible=r.orbit.visible=!1,r.p=null,this.pMarkerAlpha[n]=0;continue}let[o,s]=i;if(r.p!==s){r.p=s,r.k=o;let e=this.systems[o],t=r.mesh.material.uniforms;t.type.value=cp(s),t.teq.value=Number.isFinite(s.eqt)?s.eqt:250,t.seed.value=(o*7+e.p.indexOf(s)*13)%97,t.locked.value=Number.isFinite(s.per)&&s.per<12?1:0;let i=lp[s.n];t.hotspot.value=i?i.hotspot*Q:0,t.cloudSide.value=i?i.cloud:0,s.rings&&!r.ring&&(r.ring=new pi(new Sa(s.rings.inner,s.rings.outer,192,1),new ti({color:13154464,transparent:!0,opacity:.5,side:2,depthWrite:!1})),r.ring.rotation.x=-Math.PI/2+.2,r.mesh.add(r.ring)),r.ring&&(r.ring.visible=!!s.rings,s.rings&&r.ring.scale.setScalar(1/s.radiusKm));let[a,c,l]=ff(Number.isFinite(e.teff)?e.teff:5500);t.starColor.value.setRGB(.6+.4*a,.6+.4*c,.6+.4*l);let u=r.mesh.children[0],d=cp(s);u.visible=d>=1&&d<=4,u.scale.setScalar(d>=3?1.04:1.025),u.material.uniforms.color.value.set(d>=3.5?d>4.5?`#ff9a60`:`#e0c8a0`:d>=2.5?`#7fa8ff`:`#6fa8ff`),r.mesh.scale.setScalar(s.radiusKm);let f=If((Number.isFinite(s.a)?s.a:.1)*Ou,Math.min(s.e,.95),0,0,0,256,!1),p=this._orbitBasis(o,s,new Yt),m=new q;for(let e=0;e<f.length;e+=3)m.set(f[e],f[e+1],f[e+2]).applyMatrix4(p),f[e]=m.x,f[e+1]=m.y,f[e+2]=m.z;r.orbit.geometry.dispose(),r.orbit.geometry=new Tr,r.orbit.geometry.setAttribute(`position`,new Y(f,3)),r.orbit.geometry.boundingSphere=new _r(new q,1e30);let h=new J(s.color);up(this.pMarkerCol,n,h)}this.planetPos(o,s,e.jd,r.pos);let c=r.pos[0]-t[0],l=r.pos[1]-t[1],u=r.pos[2]-t[2],d=Math.sqrt(c*c+l*l+u*u),f=s.radiusKm/d*e.pxPerRad;r.mesh.visible=f>.4,r.mesh.position.set(c,l,u),r.mesh.material.uniforms.starPos.value.set(this.hostPos[3*o]-t[0],this.hostPos[3*o+1]-t[1],this.hostPos[3*o+2]-t[2]),r.mesh.material.uniforms.spin.value=e.jd%1*6.283*(r.mesh.material.uniforms.locked.value>.5?0:1),r.mesh.children[0].material.uniforms.sunPos.value.copy(r.mesh.material.uniforms.starPos.value),r.orbit.visible=!0,r.orbit.position.set(this.hostPos[3*o]-t[0],this.hostPos[3*o+1]-t[1],this.hostPos[3*o+2]-t[2]),this.pMarkerRel[3*n]=c,this.pMarkerRel[3*n+1]=l,this.pMarkerRel[3*n+2]=u,this.pMarkerAlpha[n]=Ct.clamp((4-f)/3,0,1)}this.pMarkers.geometry.attributes.position.needsUpdate=!0,this.pMarkers.geometry.attributes.alpha.needsUpdate=!0,this.pMarkers.geometry.attributes.color.needsUpdate=!0,this.pMarkers.material.uniforms.uPixelRatio.value=e.pixelRatio}nearestSurface(e){let t=1/0;for(let n of this.pool)if(n.p){let r=Math.hypot(n.pos[0]-e[0],n.pos[1]-e[1],n.pos[2]-e[2])-n.p.radiusKm;r<t&&(t=r)}return t}pick(e,t,n){if(!this.visible)return null;let r=null,i=14;for(let a of this.pool){if(!a.p)continue;let o=a.pos[0]-t[0],s=a.pos[1]-t[1],c=a.pos[2]-t[2],l=Math.sqrt(o*o+s*s+c*c);if(l<a.p.radiusKm)continue;let u=(o*e.x+s*e.y+c*e.z)/l;if(u<.99)continue;let d=Math.max(0,Math.acos(Math.min(1,u))*n-a.p.radiusKm/l*n);d<i&&(i=d,r=a)}return r?{sepPx:i,desc:this.describe(r.k,r.p)}:null}describe(e,t){let n=this,r=this.systems[e],i=[[`Host star`,`${r.host}${r.sp?` (`+r.sp.trim()+`)`:``}`],[`System`,`${r.nstars} star${r.nstars>1?`s`:``}, ${r.p.length} known planet${r.p.length>1?`s`:``}`]];i.push([`Distance from Sun`,`${$(this.stars.dist[r.s]*3.26156,3)} ly`]),i.push([`Radius`,`${$(t.rade,3)} Earth radii (${Ru(t.radiusKm)})${Number.isFinite(t.masse)&&!Number.isFinite(t.rade)?` — estimated from mass`:``}`]),Number.isFinite(t.masse)&&i.push([`Mass`,`${$(t.masse,3)} Earth masses (${$(t.masse/317.8,3)} Jupiter)`]),Number.isFinite(t.dens)&&i.push([`Density`,`${$(t.dens,3)} g/cm³`]),Number.isFinite(t.per)&&i.push([`Orbital period`,zu(t.per*86400)]),Number.isFinite(t.a)&&i.push([`Semi-major axis`,`${$(t.a,4)} AU`]),t.e&&i.push([`Eccentricity`,$(t.e,3)]),Number.isFinite(t.inc)&&i.push([`Inclination (to sky plane)`,`${$(t.inc,2)}°`]),Number.isFinite(t.eqt)&&i.push([`Equilibrium temperature`,`${$(t.eqt,4)} K (${$(t.eqt-273.15,3)} °C)`]),i.push([`Discovered`,`${t.yr||`?`} · ${t.m}${t.fac?` · `+t.fac:``}`]),Number.isFinite(r.teff)&&i.push([`Star temperature`,`${$(r.teff,4)} K`]),Number.isFinite(r.srad)&&i.push([`Star radius`,`${$(r.srad,3)} × Sun`]),Number.isFinite(r.smass)&&i.push([`Star mass`,`${$(r.smass,3)} × Sun`]);let a=t.rade<1.25?`Earth-sized`:t.rade<2?`super-Earth`:t.rade<6?`Neptune-like`:`gas giant`;t.cand&&i.unshift([`Status`,t.cand]);let o=lp[t.n];o&&i.push([`Measured brightness map`,o.note]),t.rings&&i.push([`Ring system`,`inner ${Ru(t.rings.inner)}, outer ${Ru(t.rings.outer)} (inferred from the 2007 eclipse light curve)`]);let s=Number.isFinite(t.eqt)?t.eqt>1e3?`, scorching hot`:t.eqt>400?`, hot`:t.eqt>200?`, temperate`:`, frigid`:``;return{kind:`exoplanet`,kindLabel:t.cand?`Exoplanet candidate`:`Exoplanet`,name:t.n,sub:`${a} ${t.cand?`candidate `:``}orbiting ${r.host}`,radius:t.radiusKm,rows:i,desc:(t.cand?`Candidate, not yet confirmed: ${t.cand}. `:``)+(o?o.desc+` `:``)+`A ${a} exoplanet${s}, ${t.yr?`discovered in `+t.yr:`detected`} by the ${t.m.toLowerCase()} method. Orbit orientation uses the measured inclination where available; the longitude of the node and the orbital phase are not known, so the position along the orbit is illustrative. Colour is a guess from temperature and size.`,source:t.cand?t.fac===`TESS`?`NASA Exoplanet Archive, TESS Objects of Interest (TOI) table.`:t.fac===`Kepler`?`NASA Exoplanet Archive, Kepler cumulative KOI table; distance estimated from Kepler magnitude and stellar parameters.`:`Kenworthy & Mamajek 2015 (ApJ 800, 126); SuperWASP light curve of V1400 Cen.`:`NASA Exoplanet Archive, Planetary Systems Composite Parameters (pscomppars).`,ref:{layer:`exo`,k:e,name:t.n},getPos:(r,i)=>n.planetPos(e,t,r,i),lightPos:[this.hostPos[3*e],this.hostPos[3*e+1],this.hostPos[3*e+2]]}}descriptorByName(e){for(let t of this.systems)for(let n of t.p)if(n.n===e)return this.describe(t.k,n);return null}labels(e,t){if(this.visible)for(let e=0;e<this.pool.length;e++){let n=this.pool[e];n.p&&t.push({text:n.p.n,x:this.pMarkerRel[3*e],y:this.pMarkerRel[3*e+1],z:this.pMarkerRel[3*e+2],cls:`exo`,prio:70,ref:{layer:`exo`,k:n.k,name:n.p.n}})}}searchEntries(){let e=[];for(let t of this.systems)for(let n of t.p)e.push({name:n.n,kind:`exoplanet`,ref:{layer:`exo`,k:t.k,name:n.n}});return e}};function cp(e){let t=Number.isFinite(e.eqt)?e.eqt:250,n=Number.isFinite(e.dens)?e.dens:e.rade>6?1:e.rade>2?2:5;return e.rade>6||e.rade>3.5&&n<2?t>1e3?5:4:e.rade>1.8&&n<3.5?3:t>900?5:t>200&&t<330?1:t<=200?2:0}var lp={"HD 189733 b":{hotspot:30,cloud:0,note:`Spitzer 8 µm phase curve (Knutson+ 2007): hottest point offset ~30° east of the substellar point — the first exoplanet brightness map.`,desc:`This is one of the few exoplanets with a measured brightness map: Spitzer phase curves place its hotspot about 30° east of the point facing the star, so its glow is drawn shifted accordingly.`},"Kepler-7 b":{hotspot:41,cloud:-1,note:`Kepler optical + Spitzer thermal phase curves (Demory+ 2013): reflective clouds cover the western half of the dayside, the east is clear.`,desc:`Kepler-7 b has a real cloud map: its western dayside is covered in bright reflective clouds while the east is clear, so clouds are drawn on the western hemisphere.`},"WASP-43 b":{hotspot:7,cloud:1,note:`HST/Spitzer and JWST MIRI phase curves (Stevenson+ 2014, Bell+ 2024): hotspot ~7° east, nightside blanketed by clouds.`,desc:`WASP-43 b has a JWST temperature map: a hotspot just east of the substellar point and a cloud-covered nightside.`},"WASP-18 b":{hotspot:0,cloud:0,note:`JWST NIRISS eclipse map (Coulombe+ 2023): hotspot at the substellar point, steep temperature drop toward the limb.`,desc:`WASP-18 b was mapped by JWST eclipse mapping: the hotspot sits at the substellar point with a steep temperature gradient.`},"HD 209458 b":{hotspot:20,cloud:0,note:`Spitzer phase curve (Zellem+ 2014): hotspot offset ~20° east.`,desc:`Spitzer phase curves give HD 209458 b a hotspot about 20° east of the substellar point.`},"WASP-121 b":{hotspot:5,cloud:0,note:`HST/JWST phase curves (Mikal-Evans+ 2022): small eastward hotspot offset, nightside clouds of minerals.`,desc:`WASP-121 b has a measured thermal map from HST and JWST phase curves.`},"LTT 9779 b":{hotspot:20,cloud:-1,note:`JWST NIRISS phase curve (Coulombe+ 2025): highly reflective western dayside clouds.`,desc:`JWST mapped LTT 9779 b: reflective clouds on its western dayside make it unusually shiny.`},"HD 80606 b":{hotspot:0,cloud:0,note:`Spitzer observed its atmosphere heating by ~700 K during periastron passage (Laughlin+ 2009).`,desc:`HD 80606 b is known for Spitzer catching its atmosphere heat up violently as it swings past its star on a highly eccentric orbit.`}};function up(e,t,n){e[3*t]=n.r,e[3*t+1]=n.g,e[3*t+2]=n.b}function dp(e){let t=e.eqt;if(e.rade>6)return Number.isFinite(t)&&t>1e3?`#e0906a`:Number.isFinite(t)&&t<150?`#8fb4e6`:`#d8b98a`;if(e.rade>2)return Number.isFinite(t)&&t>800?`#d8a080`:`#7fa8e0`;if(Number.isFinite(t)){if(t>1200)return`#ff9a5a`;if(t>500)return`#c8a080`;if(t>230&&t<330)return`#6fa4c8`;if(t<=230)return`#c8d8e8`}return`#a89c90`}var fp={G:`Galaxy`,GPair:`Galaxy pair`,GTrpl:`Galaxy triplet`,GGroup:`Galaxy group / cluster`,OCl:`Open cluster`,GCl:`Globular cluster`,PN:`Planetary nebula`,HII:`HII region (emission nebula)`,EmN:`Emission nebula`,Neb:`Nebula`,RfN:`Reflection nebula`,SNR:`Supernova remnant`,DrkN:`Dark nebula`,"Cl+N":`Cluster with nebulosity`,"*Ass":`Stellar association`,BH:`Supermassive black hole`,QSO:`Quasar`,Other:`Region`,"*":`Star`},pp={c:`literature value`,g:`Gaia parallax (cluster catalogue)`,p:`parallax`,z:`redshift (Hubble law, H₀ = 70 km/s/Mpc)`,e:`rough estimate from apparent magnitude — treat with caution`,u:`unknown — placed at a nominal distance for its type`},mp={G:`#e8dcc8`,GPair:`#e8dcc8`,GTrpl:`#e8dcc8`,GGroup:`#b0a0ff`,OCl:`#cfe0ff`,GCl:`#ffe6b8`,PN:`#8affd8`,HII:`#ff8aa8`,EmN:`#ff8aa8`,Neb:`#ffa8c0`,RfN:`#8ab0ff`,SNR:`#ffb890`,DrkN:`#5a3a30`,"Cl+N":`#ffb0c8`,"*Ass":`#c0d0ff`,BH:`#ffffff`,QSO:`#c8f0ff`,Other:`#8899aa`,"*":`#fff`},hp={ellip:0,spiral:1,irr:2,emn:3,refl:4,pn:5,snr:6,ocl:7,gcl:8,dark:9,point:10,ring:11,bar:12},gp=`
  attribute vec3 iPos; attribute vec4 iQuat; attribute vec2 iSize; attribute vec4 iUV; attribute vec3 iColor; attribute float iAlpha; attribute float iImg; attribute float iFade;
  uniform float uFovScale; uniform float uMinPx;
  varying vec2 vUv; varying vec3 vColor; varying float vAlpha; varying float vImg; varying float vDot;
  #include <common>
#include <logdepthbuf_pars_vertex>
  vec3 rot(vec4 q, vec3 v) { return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v); }
  void main() {
    float d = length(iPos * 1e-10) * 1e10; // rescaled: km^2 overflows float32 beyond ~1e19 km
    float pxH = iSize.y / d * uFovScale;
    float scale = 1.0; float alpha = iAlpha;
    if (pxH < uMinPx) { scale = uMinPx / pxH; alpha *= max(0.5, pow(pxH / uMinPx, 0.3)); }
    if (iImg < 0.5 && iFade > 0.5) alpha *= 1.0 - smoothstep(250.0, 700.0, pxH); // a 3D stand-in takes over
    if (iImg < 0.5 && iFade < 0.5) alpha *= 1.0 - 0.6 * smoothstep(400.0, 1600.0, pxH); // nothing replaces it: just soften
    vec3 local = vec3(position.x * iSize.x * scale, position.y * iSize.y * scale, 0.0);
    vec3 world = iPos + rot(iQuat, local);
    vUv = vec2(mix(iUV.x, iUV.z, uv.x), mix(iUV.y, iUV.w, uv.y));
    vColor = iColor * (1.0 + 2.5 * (1.0 - smoothstep(2.0, 30.0, pxH))); vAlpha = alpha; vImg = iImg; vDot = 1.0 - smoothstep(4.0, 14.0, pxH);
    // fade when the camera is inside the object
    vAlpha *= smoothstep(0.3, 1.2, d / iSize.y);
    gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
    #include <logdepthbuf_vertex>
  }`,_p=`
  uniform sampler2D uAtlas; varying vec2 vUv; varying vec3 vColor; varying float vAlpha; varying float vImg; varying float vDot;
  #include <logdepthbuf_pars_fragment>
  void main() {
    #include <logdepthbuf_fragment>
    vec4 t = texture2D(uAtlas, vUv);
    vec2 cell = fract(vUv * 32.0) - 0.5;
    float vign = smoothstep(0.5, mix(0.3, 0.4, vImg), length(cell));
    vec3 c = t.rgb * vColor * vign * vAlpha * (1.0 + 0.1 * vImg);
    float rr = length(cell) * 2.0;
    vec3 dotc = vColor * exp(-rr * rr * 5.0) * 1.4 * vAlpha; // sub-pixel galaxies read as bright points, not smeared texture
    c = mix(c, dotc, vDot);
    gl_FragColor = vec4(c, max(max(c.r, c.g), c.b));
  }`,vp=class{constructor(e,t){this.u=e,this.items=t,this.visible=!0;let n=t.length;this.pos=new Float64Array(n*3),this.sizeKm=new Float32Array(n*2),this.quat=new Float32Array(n*4),this.rel=new Float32Array(n*3),this.uvs=new Float32Array(n*4),this.colors=new Float32Array(n*3),this.alphas=new Float32Array(n),this.imgFlag=new Float32Array(n),this.fadeFlag=new Float32Array(n),this.named=[];let r=new Tt,i=new Yt,a=new q,o=new q,s=new q,c=new Tt,u=new J;for(let e=0;e<n;e++){let n=t[e],l=n.ra*Q,d=n.dec*Q,f=n.d*Z,p=Math.cos(d)*Math.cos(l),m=Math.cos(d)*Math.sin(l),h=Math.sin(d);this.pos[3*e]=p*f,this.pos[3*e+1]=m*f,this.pos[3*e+2]=h*f;let g=n.maj||bp(n.t),_=n.min||g*(n.t.startsWith(`G`)?.7:1);if(n.img){let t=Math.min(Math.max(g*1.5/60,.04),6);this.sizeKm[2*e]=this.sizeKm[2*e+1]=f*t*Q}else this.sizeKm[2*e+1]=f*g/60*Q,this.sizeKm[2*e]=f*_/60*Q;o.set(-Math.sin(d)*Math.cos(l),-Math.sin(d)*Math.sin(l),Math.cos(d)),a.set(Math.sin(l),-Math.cos(l),0),s.crossVectors(a,o),i.makeBasis(a,o,s),r.setFromRotationMatrix(i),!n.img&&n.pa&&(c.setFromAxisAngle(s,n.pa*Q),r.premultiply(c)),this.quat[4*e]=r.x,this.quat[4*e+1]=r.y,this.quat[4*e+2]=r.z,this.quat[4*e+3]=r.w,u.set(n.img?`#ffffff`:mp[n.t]||`#ccc`),this.colors[3*e]=u.r,this.colors[3*e+1]=u.g,this.colors[3*e+2]=u.b,this.setCell(e,xp(n)),this.alphas[e]=n.img?1:n.t===`DrkN`?.04:n.t===`GGroup`?.25:n.t===`*Ass`?.06:n.t===`OCl`?.45:n.t===`GCl`?.7:.6,(n.cn||n.m)&&this.named.push(e)}this.canvas=document.createElement(`canvas`),this.canvas.width=this.canvas.height=4096,this.ctx2d=this.canvas.getContext(`2d`),Cp(this.ctx2d),this.atlas=new ga(this.canvas),this.atlas.colorSpace=Pe,this.atlas.generateMipmaps=!0,this.atlas.minFilter=l,this.nextCell=16;let d=new xa(1,1),f=new Ro;f.index=d.index,f.attributes.position=d.attributes.position,f.attributes.uv=d.attributes.uv,f.instanceCount=n,f.setAttribute(`iPos`,new ji(this.rel,3)),f.setAttribute(`iQuat`,new ji(this.quat,4)),f.setAttribute(`iSize`,new ji(this.sizeKm,2)),f.setAttribute(`iUV`,new ji(this.uvs,4)),f.setAttribute(`iColor`,new ji(this.colors,3)),f.setAttribute(`iAlpha`,new ji(this.alphas,1)),f.setAttribute(`iImg`,new ji(this.imgFlag,1)),f.setAttribute(`iFade`,new ji(this.fadeFlag,1)),f.boundingSphere=new _r(new q,1e30),this.mat=new Na({vertexShader:gp,fragmentShader:_p,transparent:!0,depthWrite:!1,depthTest:!0,blending:2,side:2,uniforms:{uAtlas:{value:this.atlas},uFovScale:{value:1e3},uMinPx:{value:3}}}),this.mesh=new pi(f,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=2,e.scene.add(this.mesh),this.byName=new Map,t.forEach((e,t)=>{this.byName.set(yp(e.n),t),e.m&&this.byName.set(yp(e.m),t)}),this._loadImages()}setCell(e,t){let n=t%32,r=Math.floor(t/32);this.uvs[4*e]=n/32,this.uvs[4*e+1]=1-(r+1)/32,this.uvs[4*e+2]=(n+1)/32,this.uvs[4*e+3]=1-r/32}async _loadImages(){let e=this.items.map((e,t)=>e.img?t:-1).filter(e=>e>=0);e.sort((e,t)=>+!this.items[e].m-!this.items[t].m||(this.items[e].mag??15)-(this.items[t].mag??15));let t=!1,n=()=>{t&&=(this.atlas.needsUpdate=!0,this.mesh.geometry.attributes.iUV.needsUpdate=!0,this.mesh.geometry.attributes.iColor.needsUpdate=!0,this.mesh.geometry.attributes.iImg.needsUpdate=!0,!1)},r=setInterval(n,400),i=e=>new Promise(n=>{let r=new Image;r.onload=()=>{if(this.nextCell<1024){let n=this.nextCell++,i=n%32*128,a=Math.floor(n/32)*128;this.ctx2d.drawImage(r,i,a,128,128),this.setCell(e,n);let o=this.ctx2d.getImageData(i,a,128,128).data,s=0;for(let e=0;e<o.length;e+=16)s+=(o[e]+o[e+1]+o[e+2])/765;let c=s/(o.length/16),l=c>.35?Math.max(.3,.35/c):1;this.colors[3*e]=this.colors[3*e+1]=this.colors[3*e+2]=l,this.imgFlag[e]=1,t=!0,this.volumes?.addFromImage(e,r)}n()},r.onerror=()=>n(),r.src=`/Starmap/dso/${this.items[e].img}.jpg`}),a=[...e],o=async()=>{for(;a.length;)await i(a.shift())};await Promise.all([o(),o(),o(),o()]),n(),clearInterval(r)}update(e){if(this.mesh.visible=this.visible,!this.visible)return;let t=e.camPos,n=this.items.length,r=this.rel,i=this.pos;for(let e=0;e<n;e++)r[3*e]=i[3*e]-t[0],r[3*e+1]=i[3*e+1]-t[1],r[3*e+2]=i[3*e+2]-t[2];this.mesh.geometry.attributes.iPos.needsUpdate=!0,this.mat.uniforms.uFovScale.value=e.pxPerRad}worldPos(e,t){return t[0]=this.pos[3*e],t[1]=this.pos[3*e+1],t[2]=this.pos[3*e+2],t}pick(e,t,n){if(!this.visible)return null;let r=-1,i=14;for(let a=0;a<this.items.length;a++){let o=this.pos[3*a]-t[0],s=this.pos[3*a+1]-t[1],c=this.pos[3*a+2]-t[2],l=Math.sqrt(o*o+s*s+c*c),u=(o*e.x+s*e.y+c*e.z)/l;if(u<.98)continue;let d=Math.acos(Math.min(1,u))*n,f=Math.min(this.sizeKm[2*a+1]*(this.items[a].img?.33:.5)/l*n,200),p=Math.max(0,d-f*.7);p<i&&(i=p,r=a)}return r<0?null:{sepPx:i,desc:this.describe(r)}}displayName(e){return e.cn?e.cn.split(`,`)[0].trim():e.m?`${e.m} (${e.n})`:e.n}describe(e){let t=this,n=this.items[e],r=[n.m,n.n,...n.cn?n.cn.split(`,`).map(e=>e.trim()):[]].filter(Boolean).filter((e,t,n)=>n.indexOf(e)===t),i=n.d*3.26156,a=this.sizeKm[2*e+1],o=[[`Type`,fp[n.t]||n.t],[`Designations`,r.join(`, `)]];n.ids&&o.push([`Other identifiers`,n.ids.split(`,`).slice(0,6).join(`, `)]),n.con&&o.push([`Constellation`,hf[n.con]||n.con]),o.push([`Distance`,`${i>=1e6?$(i/1e6,3)+` million ly`:i>=1e4?$(i/1e3,3)+` thousand ly`:$(i,3)+` ly`} (${n.d>=1e6?$(n.d/1e6,3)+` Mpc`:n.d>=1e3?$(n.d/1e3,3)+` kpc`:$(n.d,3)+` pc`})`]),o.push([`Distance source`,pp[n.dq]||n.dq]),n.maj&&o.push([`Apparent size`,`${$(n.maj,3)}′${n.min?` × `+$(n.min,3)+`′`:``}${n.pa?`, PA `+n.pa+`°`:``}`]),o.push([`Physical size (major axis)`,a>473036523629.04004?`${$(a/ku,3)} ly`:Ru(a)]),n.mag!=null&&o.push([`Apparent magnitude`,$(n.mag,2)]),n.hub&&o.push([`Morphology`,n.hub]),n.z!=null&&o.push([`Redshift z`,$(n.z,5)]),n.rv!=null&&o.push([`Radial velocity`,`${$(n.rv,4)} km/s`]),n.age&&o.push([`Age (Gaia estimate)`,`${$(10**n.age/1e6,3)} million years`]),n.nstars&&o.push([`Member stars (Gaia)`,String(n.nstars)]),n.rper&&o.push([`Galactic orbit (peri / apo)`,`${$(n.rper,3)} / ${$(n.rapo,3)} kpc`]),o.push([`RA / Dec (J2000)`,`${yf(n.ra)} / ${bf(n.dec)}`]),n.notes&&o.push([`Notes`,n.notes]);let s=n.desc;return s||=Sp(n,i),{kind:n.t.startsWith(`G`)||n.t===`QSO`?`galaxy`:`dso`,kindLabel:fp[n.t]||n.t,name:this.displayName(n),sub:`${fp[n.t]||n.t}${n.con?` in `+(hf[n.con]||n.con):``}`,radius:a/2,rows:o,desc:s,source:n.img?`OpenNGC (NGC/IC catalogue) · Cantat-Gaudin 2020 & Baumgardt 2019 for clusters · image: DSS2 colour via CDS hips2fits (real photograph)`+(this.volumes&&this.volumes.eligible.has(e)?` · 3D volume: particles sampled from the photograph (PanSTARRS DR1 / Mellinger / DSS2); depth along the line of sight is a model (shell for planetary nebulae and remnants, slab for emission nebulae, sphere for clusters).`:`.`):`OpenNGC (NGC/IC catalogue) · Cantat-Gaudin 2020 (Gaia open clusters) · Baumgardt 2019 (globulars). Shape drawn schematically from catalogued size, axis ratio and position angle.`,ref:{layer:`dso`,index:e},getPos:(n,r)=>t.worldPos(e,r),faceFrom:[0,0,0]}}labels(e,t,n){if(!this.visible)return;let r=[],i=e.camPos;for(let t of this.named){let n=this.items[t],a=this.pos[3*t]-i[0],o=this.pos[3*t+1]-i[1],s=this.pos[3*t+2]-i[2],c=Math.sqrt(a*a+o*o+s*s);if((a*e.forward.x+o*e.forward.y+s*e.forward.z)/c<e.cosHalfFov)continue;let l=(n.mag??12)-(n.m?3:0)-!!n.img-(n.dq===`c`?1.5:0),u=this.sizeKm[2*t+1]/c*e.pxPerRad;u>40&&(l-=3),r.push([l,t,a,o,s,u])}r.sort((e,t)=>e[0]-t[0]);for(let e of r.slice(0,n)){let n=this.items[e[1]];t.push({text:this.displayName(n),x:e[2],y:e[3],z:e[4],cls:n.t.startsWith(`G`)?`galaxy`:`dso`,prio:8-e[0]*.1,offsetPx:Math.min(50,e[5]/2),ref:{layer:`dso`,index:e[1]}})}}searchEntries(){let e=[];return this.items.forEach((t,n)=>{if(e.push({name:t.n,kind:fp[t.t]||t.t,ref:{layer:`dso`,index:n},lowPrio:!(t.m||t.cn)}),t.m&&e.push({name:t.m,alt:t.n,kind:fp[t.t]||t.t,ref:{layer:`dso`,index:n}}),t.cn)for(let r of t.cn.split(`,`))e.push({name:r.trim(),alt:t.n,kind:fp[t.t]||t.t,ref:{layer:`dso`,index:n}})}),e}};function yp(e){return e.toUpperCase().replace(/\s+/g,``).replace(/^([A-Z]+)0+(\d)/,`$1$2`)}function bp(e){return{G:1,GPair:2,GTrpl:3,GGroup:60,OCl:6,GCl:4,PN:.4,HII:5,EmN:5,Neb:4,RfN:3,SNR:5,DrkN:10,"Cl+N":6,"*Ass":30,BH:.001,QSO:.05}[e]||2}function xp(e){let t=e.t,n=(e.hub||``).toUpperCase();return e.t===`G`||t===`GPair`||t===`GTrpl`?/^E|^S0|^DSPH|^DE/.test(n)?hp.ellip:/^SB|^IB/.test(n)?hp.bar:/^S/.test(n)?hp.spiral:/^I|IRR|IM|DIRR/.test(n)?hp.irr:hp.spiral:{GGroup:hp.ring,OCl:hp.ocl,GCl:hp.gcl,PN:hp.pn,HII:hp.emn,EmN:hp.emn,Neb:hp.emn,RfN:hp.refl,SNR:hp.snr,DrkN:hp.dark,"Cl+N":hp.emn,"*Ass":hp.ocl,BH:hp.point,QSO:hp.point,Other:hp.ring}[t]??hp.ellip}function Sp(e,t){let n=fp[e.t]||e.t,r=e.con?` in ${hf[e.con]||e.con}`:``,i=t>=1e6?`${$(t/1e6,3)} million light-years`:`${$(t,3)} light-years`;return{G:`A ${e.hub?e.hub+` `:``}galaxy${r}, about ${i} away${e.dq===`z`?` (from its redshift)`:``}.`,OCl:`An open star cluster${r}, ${i} from the Sun${e.age?`, about ${$(10**e.age/1e6,2)} million years old`:``}. Open clusters are loose families of a few hundred to a few thousand stars born from the same cloud.`,GCl:`A globular cluster${r}, ${i} away: a dense, ancient ball of hundreds of thousands of stars orbiting in the halo of the Milky Way.`,PN:`A planetary nebula${r}, ${i} away: the glowing shell of gas thrown off by a dying Sun-like star, lit by the hot white dwarf left behind.`,HII:`An HII region${r}, ${i} away: a cloud of hydrogen ionised by newborn massive stars, glowing pink-red.`,EmN:`An emission nebula${r}, ${i} away.`,Neb:`A nebula${r}, ${i} away.`,RfN:`A reflection nebula${r}, ${i} away: dust scattering the blue light of nearby stars.`,SNR:`A supernova remnant${r}, ${i} away: the expanding debris of an exploded star.`,DrkN:`A dark nebula${r}, ${i} away: a cold dust cloud that blocks the light of stars behind it.`,"Cl+N":`A young star cluster still embedded in the nebula it formed from${r}, ${i} away.`,"*Ass":`A loose association of young stars${r}, ${i} away.`,GPair:`A pair of galaxies${r}, about ${i} away.`,GTrpl:`A triplet of galaxies${r}, about ${i} away.`,GGroup:`A group of galaxies${r}, about ${i} away.`}[e.t]||`${n}${r}, ${i} away.`}function Cp(e){let t=(t,n)=>{let r=t%32*128,i=Math.floor(t/32)*128;e.save(),e.translate(r+64,i+64),n(),e.restore()},n=e=>()=>(e=(e*1664525+1013904223)%4294967296,e/4294967296),r=(t,n,r)=>{let i=e.createRadialGradient(0,0,t,0,0,n);for(let[e,t]of r)i.addColorStop(e,t);return i};e.fillStyle=`#000`,e.fillRect(0,0,4096,4096),t(hp.ellip,()=>{e.fillStyle=r(0,60,[[0,`rgba(255,240,215,1)`],[.12,`rgba(255,230,190,0.85)`],[.4,`rgba(255,220,180,0.25)`],[1,`rgba(0,0,0,0)`]]),e.fillRect(-64,-64,128,128)}),t(hp.spiral,()=>wp(e,n(7),2,.28)),t(hp.bar,()=>{wp(e,n(11),2,.22),e.save(),e.rotate(.3),e.fillStyle=`rgba(255,225,190,0.55)`,e.beginPath(),e.ellipse(0,0,30,6,0,0,Math.PI*2),e.fill(),e.restore()}),t(hp.irr,()=>{let t=n(3);for(let n=0;n<40;n++){let n=(t()-.5)*70,i=(t()-.5)*50,a=6+t()*14;e.fillStyle=r(0,a,[[0,`rgba(200,220,255,0.35)`],[1,`rgba(0,0,0,0)`]]),e.save(),e.translate(n,i),e.fillRect(-a,-a,2*a,2*a),e.restore()}}),t(hp.emn,()=>{let t=n(5);for(let n=0;n<28;n++){let n=(t()-.5)*60,i=(t()-.5)*60,a=12+t()*22;e.fillStyle=r(0,a,[[0,`rgba(255,255,255,0.22)`],[.5,`rgba(255,255,255,0.1)`],[1,`rgba(0,0,0,0)`]]),e.save(),e.translate(n,i),e.fillRect(-a,-a,2*a,2*a),e.restore()}for(let n=0;n<12;n++)e.fillStyle=`rgba(255,255,255,0.9)`,e.beginPath(),e.arc((t()-.5)*50,(t()-.5)*50,.8+t(),0,7),e.fill()}),t(hp.refl,()=>{e.fillStyle=r(0,45,[[0,`rgba(255,255,255,0.6)`],[.3,`rgba(255,255,255,0.25)`],[1,`rgba(0,0,0,0)`]]),e.fillRect(-64,-64,128,128)}),t(hp.pn,()=>{e.fillStyle=r(20,48,[[0,`rgba(255,255,255,0.05)`],[.5,`rgba(255,255,255,0.7)`],[1,`rgba(0,0,0,0)`]]),e.fillRect(-64,-64,128,128),e.fillStyle=r(0,18,[[0,`rgba(255,255,255,0.5)`],[1,`rgba(255,255,255,0.05)`]]),e.fillRect(-64,-64,128,128),e.fillStyle=`#fff`,e.beginPath(),e.arc(0,0,1.5,0,7),e.fill()}),t(hp.snr,()=>{let t=n(9);e.fillStyle=r(30,58,[[0,`rgba(255,255,255,0.03)`],[.55,`rgba(255,255,255,0.45)`],[.8,`rgba(255,255,255,0.2)`],[1,`rgba(0,0,0,0)`]]),e.fillRect(-64,-64,128,128);for(let n=0;n<40;n++){let n=t()*6.283,r=30+t()*25;e.fillStyle=`rgba(255,255,255,0.35)`,e.beginPath(),e.arc(Math.cos(n)*r,Math.sin(n)*r,1+t()*3,0,7),e.fill()}}),t(hp.ocl,()=>{let t=n(13);for(let n=0;n<70;n++){let n=t()*6.283,i=t()**.7*55,a=.6+t()*t()*2.4;e.fillStyle=r(0,a*2.5,[[0,`rgba(255,255,255,1)`],[.4,`rgba(255,255,255,0.5)`],[1,`rgba(0,0,0,0)`]]),e.save(),e.translate(Math.cos(n)*i,Math.sin(n)*i),e.fillRect(-a*3,-a*3,a*6,a*6),e.restore()}}),t(hp.gcl,()=>{let t=n(17);e.fillStyle=r(0,55,[[0,`rgba(255,255,255,0.9)`],[.15,`rgba(255,255,255,0.5)`],[.5,`rgba(255,255,255,0.12)`],[1,`rgba(0,0,0,0)`]]),e.fillRect(-64,-64,128,128);for(let n=0;n<400;n++){let n=t()*6.283,r=t()**2.2*58;e.fillStyle=`rgba(255,255,255,0.7)`,e.beginPath(),e.arc(Math.cos(n)*r,Math.sin(n)*r,.5+t()*1.2,0,7),e.fill()}}),t(hp.dark,()=>{let t=n(21);for(let n=0;n<20;n++){let n=(t()-.5)*60,i=(t()-.5)*60,a=15+t()*25;e.fillStyle=r(0,a,[[0,`rgba(255,255,255,0.25)`],[1,`rgba(0,0,0,0)`]]),e.save(),e.translate(n,i),e.fillRect(-a,-a,2*a,2*a),e.restore()}}),t(hp.point,()=>{e.fillStyle=r(0,40,[[0,`rgba(255,255,255,1)`],[.1,`rgba(255,255,255,0.8)`],[.3,`rgba(255,255,255,0.15)`],[1,`rgba(0,0,0,0)`]]),e.fillRect(-64,-64,128,128),e.strokeStyle=`rgba(255,255,255,0.6)`,e.lineWidth=1.5,e.beginPath(),e.moveTo(-60,0),e.lineTo(-12,0),e.moveTo(12,0),e.lineTo(60,0),e.moveTo(0,-60),e.lineTo(0,-12),e.moveTo(0,12),e.lineTo(0,60),e.stroke()}),t(hp.ring,()=>{e.strokeStyle=`rgba(255,255,255,0.7)`,e.lineWidth=2,e.setLineDash([6,6]),e.beginPath(),e.arc(0,0,56,0,7),e.stroke()})}function wp(e,t,n,r){e.fillStyle=`rgba(255,240,215,0.9)`,e.beginPath(),e.arc(0,0,5,0,7),e.fill();let i=e.createRadialGradient(0,0,0,0,0,58);i.addColorStop(0,`rgba(255,235,205,0.75)`),i.addColorStop(.25,`rgba(230,225,255,0.22)`),i.addColorStop(1,`rgba(0,0,0,0)`),e.fillStyle=i,e.fillRect(-64,-64,128,128);for(let i=0;i<n;i++){let a=i*Math.PI*2/n;for(let n=.4;n<4.2;n+=.035){let i=7*Math.exp(r*n*1.6);if(i>58)break;let o=n+a+(t()-.5)*.25,s=Math.cos(o)*i+(t()-.5)*6,c=Math.sin(o)*i+(t()-.5)*6,l=2.5+t()*4*(i/58),u=t()<.25?`rgba(255,170,190,`:`rgba(200,215,255,`,d=e.createRadialGradient(s,c,0,s,c,l);d.addColorStop(0,u+(.5-i/160)+`)`),d.addColorStop(1,u+`0)`),e.fillStyle=d,e.fillRect(s-l,c-l,2*l,2*l)}}}var Tp=`
  attribute vec3 iPos; attribute vec4 iQuat; attribute vec2 iSize; attribute vec4 iUV; attribute vec3 iColor; attribute float iAlpha;
  uniform float uFovScale; uniform float uMinPx; uniform float uDim;
  varying vec2 vUv; varying vec3 vColor; varying float vAlpha; varying float vDot;
  #include <common>
  #include <logdepthbuf_pars_vertex>
  vec3 rot(vec4 q, vec3 v) { return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v); }
  void main() {
    float d = length(iPos * 1e-10) * 1e10;
    float pxH = iSize.y / d * uFovScale;
    float scale = 1.0; float alpha = iAlpha * uDim;
    if (pxH < uMinPx) { scale = uMinPx / pxH; alpha *= max(0.6, pow(pxH / uMinPx, 0.3)); }
    vec3 local = vec3(position.x * iSize.x * scale, position.y * iSize.y * scale, 0.0);
    vec3 world = iPos + rot(iQuat, local);
    vUv = vec2(mix(iUV.x, iUV.z, uv.x), mix(iUV.y, iUV.w, uv.y));
    vColor = iColor * (1.0 + 2.5 * (1.0 - smoothstep(2.0, 30.0, pxH))); vAlpha = alpha * smoothstep(0.3, 1.2, d / iSize.y); vDot = 1.0 - smoothstep(4.0, 14.0, pxH);
    gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
    #include <logdepthbuf_vertex>
  }`,Ep=`
  uniform sampler2D uAtlas; varying vec2 vUv; varying vec3 vColor; varying float vAlpha; varying float vDot;
  #include <logdepthbuf_pars_fragment>
  void main() {
    #include <logdepthbuf_fragment>
    vec4 t = texture2D(uAtlas, vUv);
    vec2 cell = fract(vUv * 32.0) - 0.5;
    float vign = smoothstep(0.5, 0.3, length(cell));
    vec3 c = t.rgb * vColor * vign * vAlpha;
    float rr = length(cell) * 2.0;
    vec3 dotc = vColor * exp(-rr * rr * 5.0) * 1.4 * vAlpha; // sub-pixel galaxies read as bright points, not smeared texture
    c = mix(c, dotc, vDot);
    gl_FragColor = vec4(c, max(max(c.r, c.g), c.b));
  }`,Dp=class{constructor(e,t,n,r){this.u=e,this.visible=!0,this.raDecDist=t.pos,this.attr=t.attr,this.ids=n;let i=this.raDecDist.length/3;this.count=i,this.pos=new Float64Array(i*3),this.rel=new Float32Array(i*3),this.sizeKm=new Float32Array(i*2),this.quat=new Float32Array(i*4),this.uvs=new Float32Array(i*4);let a=new Float32Array(i*3);this.alpha=new Float32Array(i),this.baseAlpha=new Float32Array(i);let o=new J(`#ffd9a8`),s=new J(`#ffe8c8`),c=new J(`#c8d6ff`),l=new J(`#c8e0ff`),u=new J(`#d8d8e8`),d=new Tt,f=new Yt,p=new q,m=new q,h=new q,g=new Tt,_=Op(31);this.pa=new Float32Array(i);for(let e=0;e<i;e++){let t=this.raDecDist[3*e]*Q,n=this.raDecDist[3*e+1]*Q,r=this.raDecDist[3*e+2]*Au,i=Math.cos(n)*Math.cos(t),v=Math.cos(n)*Math.sin(t),y=Math.sin(n);this.pos[3*e]=r*i,this.pos[3*e+1]=r*v,this.pos[3*e+2]=r*y;let b=this.attr[4*e+3],x=this.attr[4*e+2],S=r*(this.attr[4*e+1]*2/60)*Q*1.6;this.sizeKm[2*e+1]=S,this.sizeKm[2*e]=S*Math.max(.15,Math.min(1,x)),m.set(-Math.sin(n)*Math.cos(t),-Math.sin(n)*Math.sin(t),Math.cos(n)),p.set(Math.sin(t),-Math.cos(t),0),h.crossVectors(p,m),f.makeBasis(p,m,h),d.setFromRotationMatrix(f);let C=_()*Math.PI;this.pa[e]=C,g.setFromAxisAngle(h,C),d.premultiply(g),this.quat[4*e]=d.x,this.quat[4*e+1]=d.y,this.quat[4*e+2]=d.z,this.quat[4*e+3]=d.w;let w=b>=90||b<=1?hp.ellip:b<=8?_()<.45?hp.bar:hp.spiral:hp.irr,T=w%32,E=Math.floor(w/32);this.uvs[4*e]=T/32,this.uvs[4*e+1]=1-(E+1)/32,this.uvs[4*e+2]=(T+1)/32,this.uvs[4*e+3]=1-E/32;let D=b>=90?u:b<=-4?o:b<=0?s:b<=8?c:l;a[3*e]=D.r,a[3*e+1]=D.g,a[3*e+2]=D.b;let O=this.attr[4*e];this.baseAlpha[e]=this.alpha[e]=Ct.clamp(1.3-(O-9)*.25,.35,1)}this.dup=new Int32Array(i).fill(-1);{let e=new Map,t=(e,t)=>Math.floor(e*2)+1e3*Math.floor((t+90)*2);r.items.forEach((n,r)=>{if(n.t!==`G`&&n.t!==`GPair`&&n.t!==`GTrpl`&&n.t!==`QSO`)return;let i=t(n.ra,n.dec);e.has(i)||e.set(i,[]),e.get(i).push(r)});let n=0;for(let a=0;a<i;a++){let i=this.raDecDist[3*a],o=this.raDecDist[3*a+1],s=Math.cos(o*Q),c=-1,l=1.5/60;for(let n=-1;n<=1;n++)for(let a=-1;a<=1;a++){let u=e.get(t(i+n*.5,o+a*.5));if(u)for(let e of u){let t=r.items[e],n=Math.hypot((t.ra-i)*s,t.dec-o);n<l&&(l=n,c=e)}}c>=0&&(this.dup[a]=c,this.baseAlpha[a]=this.alpha[a]=0,n++)}this.hiddenDup=n}let v=new xa(1,1),y=new Ro;y.index=v.index,y.attributes.position=v.attributes.position,y.attributes.uv=v.attributes.uv,y.instanceCount=i,y.setAttribute(`iPos`,new ji(this.rel,3)),y.setAttribute(`iQuat`,new ji(this.quat,4)),y.setAttribute(`iSize`,new ji(this.sizeKm,2)),y.setAttribute(`iUV`,new ji(this.uvs,4)),y.setAttribute(`iColor`,new ji(a,3)),y.setAttribute(`iAlpha`,new ji(this.alpha,1)),y.boundingSphere=new _r(new q,1e30),this.mat=new Na({vertexShader:Tp,fragmentShader:Ep,transparent:!0,depthWrite:!1,depthTest:!0,blending:2,side:2,uniforms:{uAtlas:{value:r.atlas},uFovScale:{value:1e3},uMinPx:{value:3},uDim:{value:1}}}),this.mesh=new pi(y,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,e.scene.add(this.mesh),this.alphaAttr=y.attributes.iAlpha}update(e){if(this.mesh.visible=this.visible,!this.visible)return;let t=e.camPos,n=this.count,r=this.rel,i=this.pos;for(let e=0;e<n;e++)r[3*e]=i[3*e]-t[0],r[3*e+1]=i[3*e+1]-t[1],r[3*e+2]=i[3*e+2]-t[2];this.mesh.geometry.attributes.iPos.needsUpdate=!0,this.mat.uniforms.uFovScale.value=e.pxPerRad;let a=Math.hypot(t[0],t[1],t[2])/Au*1e6;this.mat.uniforms.uDim.value=.18+.82*Ct.smoothstep(a,3e4,3e5)}modelInfo(e){let t=this.attr[4*e+3];return{center:[this.pos[3*e],this.pos[3*e+1],this.pos[3*e+2]],Rkm:this.sizeKm[2*e+1]/2,ratio:Math.max(.15,Math.min(1,this.attr[4*e+2])),kind:t>=90||t<=-4?`E`:t<=0?`S0`:t<=8?`S`:`I`,ra:this.raDecDist[3*e],dec:this.raDecDist[3*e+1],pa:this.pa[e]/Q,name:this.name(e)}}worldPos(e,t){return t[0]=this.pos[3*e],t[1]=this.pos[3*e+1],t[2]=this.pos[3*e+2],t}pick(e,t,n){if(!this.visible)return null;let r=-1,i=10;for(let a=0;a<this.count;a++){if(this.dup[a]>=0)continue;let o=this.pos[3*a]-t[0],s=this.pos[3*a+1]-t[1],c=this.pos[3*a+2]-t[2],l=Math.sqrt(o*o+s*s+c*c),u=(o*e.x+s*e.y+c*e.z)/l;if(u<.9995)continue;let d=Math.acos(Math.min(1,u))*n-Math.min(30,this.sizeKm[2*a+1]*.4/l*n);d<i&&(i=d,r=a)}return r<0?null:{sepPx:i+2,desc:this.describe(r)}}name(e){return`2MASX J`+this.ids.slice(16*e,16*e+16).trim()}describe(e){let t=this,n=this.raDecDist[3*e],r=this.raDecDist[3*e+1],i=this.raDecDist[3*e+2],a=this.attr[4*e],o=this.attr[4*e+1],s=this.attr[4*e+2],c=this.attr[4*e+3],l=c>=90?`unclassified`:c<=-6?`compact elliptical`:c<=-4?`elliptical (E)`:c<=-1?`lenticular (S0)`:c<=0?`S0/a`:c<=2?`early spiral (Sa–Sab)`:c<=4?`spiral (Sb–Sbc)`:c<=6?`late spiral (Sc–Scd)`:c<=8?`Sd–Sdm`:`irregular / Magellanic`,u=i*70,d=i*3.26156,f=[[`Catalog`,`2MASS Redshift Survey (Huchra et al. 2012)`],[`Morphology`,`${l} (T = ${c>=90?`?`:c})`],[`Distance`,`${$(d,3)} million ly (${$(i,3)} Mpc), from recession velocity ${$(u,4)} km/s with H₀ = 70`],[`Redshift z`,$(u/299792.458,5)],[`K-band magnitude`,$(a,2)],[`Isophotal radius`,`${$(o,3)}′`],[`Axis ratio b/a`,$(s,2)],[`Light travel time`,`${$(d,3)} million years`],[`RA / Dec (J2000)`,`${yf(n)} / ${bf(r)}`],[`Orientation`,`axis ratio measured; position angle not published, drawn at a random angle`]];return{kind:`galaxy`,kindLabel:`Galaxy (2MRS)`,name:this.name(e),sub:`${l} galaxy · ${$(d,3)} Mly`,radius:this.sizeKm[2*e+1]/2,rows:f,desc:`A ${l} galaxy from the 2MASS Redshift Survey, an all-sky map of 44,599 galaxies with measured recession velocities that traces the large-scale structure of the local universe. Its shape here follows the catalogued type and axis ratio; up close it is drawn as a particle model.`,source:`2MRS (Huchra+ 2012) via VizieR J/ApJS/199/26. Distance is a Hubble-flow estimate and ignores peculiar velocities.`,ref:{layer:`galaxies`,index:e},getPos:(n,r)=>t.worldPos(e,r),faceFrom:[0,0,0]}}searchEntries(){return[]}};function Op(e){return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var kp=8178,Ap=20.8;function jp(){let e=Mp(192.85948,27.12825),t=Mp(266.40499,-28.93617),n=new q(...e),r=new q(...t);r.sub(n.clone().multiplyScalar(r.dot(n))).normalize();let i=new q().crossVectors(n,r).normalize();return new Yt().makeBasis(r,i,n)}function Mp(e,t){let n=e*Q,r=t*Q;return[Math.cos(r)*Math.cos(n),Math.cos(r)*Math.sin(n),Math.sin(r)]}var Np=jp(),Pp=`
  attribute vec3 color; attribute float size; attribute float kind;
  uniform vec3 uCam; uniform float uPixelRatio; uniform float uFovScale; uniform float uKmPerPc; uniform float uOpacity; uniform float uGlobal;
  varying vec3 vColor; varying float vAlpha; varying float vKind;
  #include <common>
#include <logdepthbuf_pars_vertex>
  void main() {
    vec3 relPc = position - uCam;
    float d = length(relPc);
    float px = size / d * uFovScale;
    // model particles fade out near the camera: the real star catalogue takes over there
    float fade = smoothstep(250.0, 1800.0, d) * (1.0 - smoothstep(22.0, 70.0, px));
    vAlpha = fade * uOpacity * uGlobal * clamp(px / 3.0, 0.15, 1.0);
    vColor = color; vKind = kind;
    vec4 mv = modelViewMatrix * vec4(relPc * uKmPerPc, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = clamp(px, 1.0, 110.0) * uPixelRatio;
    if (vAlpha < 0.002) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    #include <logdepthbuf_vertex>
  }`,Fp=`
  varying vec3 vColor; varying float vAlpha; varying float vKind;
  #include <logdepthbuf_pars_fragment>
  void main() {
    #include <logdepthbuf_fragment>
    vec2 c = gl_PointCoord - 0.5; float r2 = dot(c, c) * 4.0;
    float a = exp(-r2 * 2.6) * vAlpha;
    if (vKind > 0.5) { gl_FragColor = vec4(vColor * 0.0, a * 0.9); } // dust: darkens (normal blending pass)
    else gl_FragColor = vec4(vColor * a, a);
  }`,Ip=class{constructor(e){this.u=e,this.visible=!0;let t=Lp(1234),n=()=>{let e=0,n=0;for(;e===0;)e=t();for(;n===0;)n=t();return Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*n)},r=[],i=[],a=(e,t,n,r,i,a)=>e.push(t,n,r,i[0],i[1],i[2],a),o=[1,.92,.78],s=[.72,.8,1],c=[1,.55,.65],l=[1,.8,.55],u=[.95,.95,1];for(let e=0;e<26e3;e++){let e=-2600*Math.log(t())*(.6+.4*t());if(e>16e3||e<300)continue;let n=t()*2*Math.PI,i=300*Rp(t())*.7;a(r,e*Math.cos(n),e*Math.sin(n),i,zp(o,u,t()*.5),220+t()*260)}for(let e=0;e<6e3;e++){let e=-3600*Math.log(t());if(e>18e3)continue;let n=t()*2*Math.PI,i=900*Rp(t());a(r,e*Math.cos(n),e*Math.sin(n),i,l,400+t()*400)}let d=27*Q;for(let e=0;e<9e3;e++){let e=n()*1900,i=n()*650,s=n()*500;a(r,e*Math.cos(d)-i*Math.sin(d),e*Math.sin(d)+i*Math.cos(d),s,zp(l,o,t()),150+t()*250)}for(let e=0;e<4e3;e++){let e=Math.abs(n())*900,i=t()*2*Math.PI,o=Math.acos(2*t()-1);a(r,e*Math.sin(o)*Math.cos(i),e*Math.sin(o)*Math.sin(i),e*Math.cos(o)*.7,l,140+t()*200)}let f=Math.tan(12.5*Q),p=[{th0:0+d,major:!0},{th0:Math.PI+d,major:!0},{th0:Math.PI/2+d,major:!1},{th0:1.5*Math.PI+d,major:!1}];for(let e of p){let o=e.major?9e3:5500;for(let l=0;l<o;l++){let o=t()*2.1,l=3300*Math.exp(f*o*2.2);if(l>15500)continue;let d=e.th0+o*2.2+0,p=330*(.6+l/15e3),m=l*Math.cos(d)+n()*p,h=l*Math.sin(d)+n()*p,g=n()*140,_=t();a(r,m,h,g,_<.12?c:_<.7?s:u,_<.12?260+t()*320:170+t()*240),t()<.45&&a(i,l*Math.cos(d)+n()*p*.8,l*Math.sin(d)+n()*p*.8,n()*70,[0,0,0],300+t()*500)}}for(let e=0;e<1400;e++){let e=(t()-.5)*3e3;a(r,-8178+e*Math.cos(.9)+n()*250,e*Math.sin(.9)+n()*250,n()*120,s,150+t()*200)}for(let e=0;e<9e3;e++){let e=-3e3*Math.log(t());if(e>14e3||e<1500)continue;let r=t()*2*Math.PI;a(i,e*Math.cos(r),e*Math.sin(r),n()*90,[0,0,0],350+t()*550)}this.starPoints=this._build(r,0),this.dustPoints=this._build(i,1),this.dustPoints.material.blending=1,this.dustPoints.renderOrder=0,this.starPoints.renderOrder=0,this.dustPoints.material.uniforms.uOpacity.value=.14,this.centerKm=new Float64Array(3);let m=new q(kp,0,-20.8).applyMatrix4(Np).multiplyScalar(Z);this.centerKm.set([m.x,m.y,m.z])}_build(e,t){let n=e.length/7,r=new Float32Array(n*3),i=new Float32Array(n*3),a=new Float32Array(n),o=new Float32Array(n).fill(t),s=new q;for(let t=0;t<n;t++)s.set(e[7*t]+kp,e[7*t+1],e[7*t+2]-Ap).applyMatrix4(Np),r[3*t]=s.x,r[3*t+1]=s.y,r[3*t+2]=s.z,i[3*t]=e[7*t+3],i[3*t+1]=e[7*t+4],i[3*t+2]=e[7*t+5],a[t]=e[7*t+6];let c=new Tr;c.setAttribute(`position`,new Y(r,3)),c.setAttribute(`color`,new Y(i,3)),c.setAttribute(`size`,new Y(a,1)),c.setAttribute(`kind`,new Y(o,1)),c.boundingSphere=new _r(new q,1e30);let l=new pa(c,new Na({vertexShader:Pp,fragmentShader:Fp,transparent:!0,depthWrite:!1,depthTest:!0,blending:2,uniforms:{uCam:{value:new q},uPixelRatio:{value:1},uFovScale:{value:1e3},uKmPerPc:{value:Z},uOpacity:{value:.32},uGlobal:{value:1}}}));return l.frustumCulled=!1,this.u.scene.add(l),l}update(e){for(let t of[this.starPoints,this.dustPoints]){t.visible=this.visible,t.material.uniforms.uCam.value.set(e.camPos[0]/Z,e.camPos[1]/Z,e.camPos[2]/Z),t.material.uniforms.uPixelRatio.value=e.pixelRatio,t.material.uniforms.uFovScale.value=e.pxPerRad;let n=Math.hypot(e.camPos[0],e.camPos[1],e.camPos[2])/Z;t.material.uniforms.uGlobal.value=Ct.smoothstep(n,2e3,12e3)}}labels(e,t){this.visible&&e.rig.distanceTo(this.centerKm)>0xab4a1da5a0b7b80&&t.push({text:`Milky Way`,x:this.centerKm[0]-e.camPos[0],y:this.centerKm[1]-e.camPos[1],z:this.centerKm[2]-e.camPos[2],cls:`galaxy`,prio:90})}pick(){return null}searchEntries(){return[]}};function Lp(e){return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Rp(e){return Math.atanh(2*e-1)*.9}function zp(e,t,n){return[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,e[2]+(t[2]-e[2])*n]}var Bp=class{constructor(e,t,n){this.u=e,this.solar=n,this.visible=!0,this.items=t.filter(e=>e.frame),this.items.forEach(e=>{e.pos=new Float64Array(3)});let r=this.items.length;this.rel=new Float32Array(r*3),this.alpha=new Float32Array(r).fill(1);let i=new Float32Array(r*3),a=new Float32Array(r).fill(8);for(let e=0;e<r;e++)i[3*e]=1,i[3*e+1]=.75,i[3*e+2]=.45;let o=new Tr;o.setAttribute(`position`,new Y(this.rel,3)),o.setAttribute(`color`,new Y(i,3)),o.setAttribute(`alpha`,new Y(this.alpha,1)),o.setAttribute(`size`,new Y(a,1)),o.boundingSphere=new _r(new q,1e30),this.points=new pa(o,of()),this.points.frustumCulled=!1,this.points.renderOrder=21,e.scene.add(this.points),this.track=null,this._tmp=[0,0,0]}position(e,t,n){if(e.frame===`helio`)return zf(e,t,n);if(e.frame===`geo`){zf(e,t,n);let r=this.solar.earth.pos;return n[0]+=r[0],n[1]+=r[1],n[2]+=r[2],n}let r=this.solar.byId.get(e.parent===599?`jupiter`:`mars`).pos;return Ff(e.a,e.e,e.i,e.om,e.w,e.ma,e.n_degps,e.jd,t,n),n[0]+=r[0],n[1]+=r[1],n[2]+=r[2],n}velocity(e,t){if(e.frame===`kepler`)return null;let n=this.position(e,t-1/86400,[0,0,0]),r=this.position(e,t+1/86400,[0,0,0]);return Math.hypot(r[0]-n[0],r[1]-n[1],r[2]-n[2])/2}update(e){this.points.visible=this.visible;let t=e.camPos;if(this.items.forEach((n,r)=>{if(this.position(n,e.jd,n.pos),this.rel[3*r]=n.pos[0]-t[0],this.rel[3*r+1]=n.pos[1]-t[1],this.rel[3*r+2]=n.pos[2]-t[2],n.frame===`kepler`||n.frame===`geo`){let t=n.frame===`geo`?this.solar.earth:this.solar.byId.get(n.parent===599?`jupiter`:`mars`),i=Math.hypot(n.pos[0]-t.pos[0],n.pos[1]-t.pos[1],n.pos[2]-t.pos[2])/Math.hypot(this.rel[3*r],this.rel[3*r+1],this.rel[3*r+2])*e.pxPerRad;this.alpha[r]=Ct.clamp((i-8)/12,0,1)}else this.alpha[r]=1}),this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.alpha.needsUpdate=!0,this.points.material.uniforms.uPixelRatio.value=e.pixelRatio,this.track){let e=this.track.sc.frame===`geo`?this.solar.earth.pos:[0,0,0];this.track.position.set(e[0]-t[0],e[1]-t[1],e[2]-t[2])}}showTrack(e){if(this.track&&=(this.u.scene.remove(this.track),this.track.geometry.dispose(),null),!e||e.ref.layer!==`craft`)return;let t=this.items[e.ref.index];if(!t.t)return;let n=new Float32Array(t.r.length);for(let e=0;e<t.r.length;e++)n[e]=t.r[e];let r=new Tr;r.setAttribute(`position`,new Y(n,3)),r.boundingSphere=new _r(new q,1e30),this.track=new na(r,new Ji({color:16756848,transparent:!0,opacity:.55,depthWrite:!1})),this.track.frustumCulled=!1,this.track.sc=t,this.u.scene.add(this.track)}pick(e,t,n){if(!this.visible)return null;let r=-1,i=12;return this.items.forEach((a,o)=>{if(this.alpha[o]<.3)return;let s=a.pos[0]-t[0],c=a.pos[1]-t[1],l=a.pos[2]-t[2],u=Math.sqrt(s*s+c*c+l*l),d=(s*e.x+c*e.y+l*e.z)/u;if(d<.999)return;let f=Math.acos(Math.min(1,d))*n;f<i&&(i=f,r=o)}),r<0?null:{sepPx:i,desc:this.describe(r)}}describe(e){let t=this,n=this.items[e],r=this.u.time.jd,i=this.position(n,r,[0,0,0]),a=Math.hypot(...i),o=this.solar.earth.pos,s=Math.hypot(i[0]-o[0],i[1]-o[1],i[2]-o[2]),c=[[`Distance from Sun`,`${$(a/Ou,4)} AU (${Ru(a)})`],[`Distance from Earth`,`${$(s/Ou,4)} AU (${Ru(s)})`],[`One-way light time`,zu(s/ju)]],l=this.velocity(n,r);if(l&&c.push([`Heliocentric speed`,`${$(l,4)} km/s`]),n.frame===`kepler`){let e=n.parent===599?`Jupiter`:`Mars`;c.push([`Orbit around ${e}`,`a = ${Ru(n.a)}, e = ${$(n.e,3)}, period ${zu(n.per_s)}`])}return n.t&&c.push([`Ephemeris coverage`,`${Vp(n.t[0])} → ${Vp(n.t[n.t.length-1])}${r>n.t[n.t.length-1]||r<n.t[0]?` (extrapolating linearly outside this range)`:``}`]),c.push([`Horizons ID`,n.id]),{kind:`spacecraft`,kindLabel:`Spacecraft`,name:n.n,sub:`Spacecraft`,radius:.01,rows:c,desc:n.desc,source:`NASA/JPL Horizons system: state vectors at daily steps (Hermite-interpolated) or osculating elements for planetary orbiters.`,ref:{layer:`craft`,index:e},getPos:(e,r)=>t.position(n,e,r)}}labels(e,t){this.visible&&this.items.forEach((e,n)=>{this.alpha[n]<.3||Math.hypot(this.rel[3*n],this.rel[3*n+1],this.rel[3*n+2])>15e9||t.push({text:e.n,x:this.rel[3*n],y:this.rel[3*n+1],z:this.rel[3*n+2],cls:`craft`,prio:45,ref:{layer:`craft`,index:n}})})}searchEntries(){return this.items.map((e,t)=>({name:e.n,kind:`spacecraft`,ref:{layer:`craft`,index:t}}))}};function Vp(e){return new Date((e-2440587.5)*864e5).toISOString().slice(0,10)}var Hp=class{constructor(e,t,n){this.u=e,this.stars=n,this.visible=!0,this.cons=t.constellations;let r=[];for(let e of this.cons)for(let t of e.lines)for(let e=0;e+1<t.length;e++)r.push(t[e],t[e+1]);this.segIdx=r,this.rel=new Float32Array(r.length*3);let i=new Tr;i.setAttribute(`position`,new Y(this.rel,3)),i.boundingSphere=new _r(new q,1e30),this.lines=new oa(i,new Ji({color:5929160,transparent:!0,opacity:.45,depthWrite:!1,depthTest:!0})),this.lines.frustumCulled=!1,this.lines.renderOrder=6,e.scene.add(this.lines);for(let e of this.cons){let t=new q,r=0;for(let i of e.lines)for(let e of i)t.add(new q(n.pos[3*e],n.pos[3*e+1],n.pos[3*e+2]).normalize()),r++;e.dir=r?t.normalize():null}}update(e){if(this.lines.visible=this.visible,!this.visible)return;let t=e.camPos,n=this.stars.pos;for(let e=0;e<this.segIdx.length;e++){let r=this.segIdx[e];this.rel[3*e]=n[3*r]*Z-t[0],this.rel[3*e+1]=n[3*r+1]*Z-t[1],this.rel[3*e+2]=n[3*r+2]*Z-t[2]}this.lines.geometry.attributes.position.needsUpdate=!0;let r=Math.hypot(t[0],t[1],t[2])/Z;this.lines.material.opacity=.45*Ct.clamp((60-r)/40,0,1)}labels(e,t){if(!(!this.visible||this.lines.material.opacity<.05||e.labelDensity<.15))for(let n of this.cons){if(!n.dir)continue;let r=400*Z;t.push({text:n.native||n.name,x:n.dir.x*r-e.camPos[0],y:n.dir.y*r-e.camPos[1],z:n.dir.z*r-e.camPos[2],cls:`con`,prio:1,noLine:!0})}}pick(){return null}searchEntries(){return this.cons.map(e=>({name:e.name,alt:e.native,kind:`constellation`,ref:{layer:`con`,id:e.id}}))}describe(e){let t=this.cons.find(t=>t.id===e);if(!t)return null;let n=60*Z;return{kind:`constellation`,kindLabel:`Constellation`,name:t.name,sub:t.native,radius:5*Z,rows:[[`Latin name`,t.native],[`IAU abbreviation`,t.id],[`Stick-figure stars`,String(new Set(t.lines.flat()).size)]],desc:`One of the 88 IAU constellations. The lines connect the real 3D positions of the stars, so the familiar shape only holds from near the Sun: move a few dozen light-years and it distorts.`,source:`Stellarium "modern" sky culture; star positions HYG v4.1.`,ref:{layer:`con`,id:e},getPos:(e,r)=>(r[0]=t.dir.x*n,r[1]=t.dir.y*n,r[2]=t.dir.z*n,r)}}},Up=48,Wp=`
  attribute vec3 color; attribute float size;
  uniform vec3 uCenter; uniform float uFade;
  uniform float uPixelRatio; uniform float uFovScale;
  varying vec3 vColor; varying float vAlpha;
  #include <common>
  #include <logdepthbuf_pars_vertex>
  void main() {
    vec3 rel = uCenter + position;
    float d = length(rel * 1e-10) * 1e10;
    float px = size / d * uFovScale;
    float fade = uFade * (1.0 - smoothstep(30.0, 90.0, px));
    float soft = smoothstep(6.0, 30.0, px);
    vAlpha = fade * clamp(px / 2.0, 0.55, 1.0) * mix(0.6, 0.12, soft);
    vColor = color;
    vec4 mv = modelViewMatrix * vec4(rel, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = clamp(px, 1.7, 120.0) * uPixelRatio;
    if (vAlpha < 0.003) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    #include <logdepthbuf_vertex>
  }`,Gp=`
  varying vec3 vColor; varying float vAlpha;
  #include <logdepthbuf_pars_fragment>
  void main() {
    #include <logdepthbuf_fragment>
    vec2 c = gl_PointCoord - 0.5; float r2 = dot(c, c) * 4.0;
    float a = exp(-r2 * 2.8) * vAlpha;
    gl_FragColor = vec4(vColor * a, a);
  }`,Kp=class{constructor(e,t){this.u=e,this.dso=t,this.visible=!0,this.mrs=null,this.dsoGal=[],t.items.forEach((e,n)=>{(e.t===`G`||e.t===`GPair`||e.t===`GTrpl`)&&e.maj&&(this.dsoGal.push(n),t.fadeFlag[n]=1)}),t.mesh.geometry.attributes.iFade.needsUpdate=!0,this.slots=new Map,this.group=new wn,e.scene.add(this.group),this.baseMat={vertexShader:Wp,fragmentShader:Gp,transparent:!0,depthWrite:!1,depthTest:!0,blending:2},this.rnd=Jp(99),this._v=new q,this._m=new Yt,this.count=0}dsoInfo(e){let t=this.dso.items[e],n=(t.hub||``).toUpperCase(),r=/^E|^DSPH|^DE/.test(n)?`E`:/^S0/.test(n)?`S0`:/IRR|^I|^IB|^SM|^IM|DIRR/.test(n)?`I`:`S`;return{center:[this.dso.pos[3*e],this.dso.pos[3*e+1],this.dso.pos[3*e+2]],Rkm:this.dso.sizeKm[2*e+1]/(t.img?3:2),ratio:t.min&&t.maj?Math.min(1,t.min/t.maj):.7,kind:r,ra:t.ra,dec:t.dec,pa:t.pa||0,name:this.dso.displayName(t),dsoIndex:e}}_build(e,t){let{center:n,Rkm:r,ratio:i,kind:a,ra:o,dec:s,pa:c}=t,l=new q,u=new q,d=new q,f=this._v,p=this._m,m=o*Q,h=s*Q,g=new q(Math.cos(h)*Math.cos(m),Math.cos(h)*Math.sin(m),Math.sin(h)),_=new q(-Math.sin(h)*Math.cos(m),-Math.sin(h)*Math.sin(m),Math.cos(h)),v=new q(-Math.sin(m),Math.cos(m),0),y=c*Q;l.copy(_).multiplyScalar(Math.cos(y)).addScaledVector(v,Math.sin(y)).normalize();let b=a===`E`?0:Math.acos(Math.max(.12,i));d.copy(g).applyAxisAngle(l,b).normalize(),u.crossVectors(d,l).normalize(),p.makeBasis(l,u,d);let x=qp(a,i,this.rnd,r>0x429d069189e0000),S=x.length/7,C=new Float32Array(S*3),w=new Float32Array(S*3),T=new Float32Array(S);for(let e=0,t=0;e<x.length;e+=7,t++)f.set(x[e],x[e+1],x[e+2]).multiplyScalar(r).applyMatrix4(p),C[3*t]=f.x,C[3*t+1]=f.y,C[3*t+2]=f.z,w[3*t]=x[e+3],w[3*t+1]=x[e+4],w[3*t+2]=x[e+5],T[t]=x[e+6]*r;let E=new Tr;E.setAttribute(`position`,new Y(C,3)),E.setAttribute(`color`,new Y(w,3)),E.setAttribute(`size`,new Y(T,1)),E.boundingSphere=new _r(new q,1e30);let D=new pa(E,new Na({...this.baseMat,uniforms:{uCenter:{value:new q},uFade:{value:0},uPixelRatio:{value:1},uFovScale:{value:1e3}}}));D.frustumCulled=!1,D.renderOrder=2,this.group.add(D);let O={key:e,points:D,center:n,R:r,fade:0,px:0,info:t,n:S};return this.slots.set(e,O),this.count+=S,O}_evict(e){this.group.remove(e.points),e.points.geometry.dispose(),e.points.material.dispose(),this.slots.delete(e.key),this.count-=e.n}update(e){this.group.visible=this.visible;let t=e.camPos,n=[],r=(r,i,a,o,s,c)=>{let l=s/Math.hypot(i-t[0],a-t[1],o-t[2])*e.pxPerRad;l>40&&n.push([l,r,c])},i=this.dso;for(let e of this.dsoGal)r(`d`+e,i.pos[3*e],i.pos[3*e+1],i.pos[3*e+2],i.sizeKm[2*e+1]/(i.items[e].img?3:2),()=>this.dsoInfo(e));if(this.mrs){let e=this.mrs;for(let t=0;t<e.count;t++)e.dup[t]<0&&r(`m`+t,e.pos[3*t],e.pos[3*t+1],e.pos[3*t+2],e.sizeKm[2*t+1]/2,()=>e.modelInfo(t))}n.sort((e,t)=>t[0]-e[0]);let a=new Set;for(let[e,t,r]of n.slice(0,Up))if(a.add(t),!this.slots.has(t)){if(this.slots.size>=Up){let e=null;for(let t of this.slots.values())!a.has(t.key)&&(!e||t.px<e.px)&&(e=t);if(e)this._evict(e);else break}this._build(t,r())}for(let e of[...this.slots.values()])a.has(e.key)||this._evict(e);let o=!1,s=!1;for(let n of this.slots.values()){let r=n.center[0]-t[0],i=n.center[1]-t[1],a=n.center[2]-t[2],c=Math.sqrt(r*r+i*i+a*a);n.px=n.R/c*e.pxPerRad,n.fade=this.visible?Ct.smoothstep(n.px,40,160):0;let l=n.points.material.uniforms;if(l.uCenter.value.set(r,i,a),l.uFade.value=n.fade,l.uPixelRatio.value=e.pixelRatio,l.uFovScale.value=e.pxPerRad,n.points.visible=n.fade>.005,n.info.dsoIndex!==void 0){let e=n.info.dsoIndex,t=(n.baseAlpha??=this.dso.alphas[e])*(1-.85*n.fade);Math.abs(this.dso.alphas[e]-t)>.001&&(this.dso.alphas[e]=t,o=!0)}else if(this.mrs&&n.key[0]===`m`){let e=+n.key.slice(1),t=this.mrs.baseAlpha[e]*(1-.85*n.fade);Math.abs(this.mrs.alpha[e]-t)>.001&&(this.mrs.alpha[e]=t,s=!0)}}o&&(this.dso.mesh.geometry.attributes.iAlpha.needsUpdate=!0),s&&(this.mrs.alphaAttr.needsUpdate=!0)}pick(e,t,n){if(!this.visible)return null;let r=null,i=9,a=-1;for(let o of this.slots.values()){if(o.fade<.3)continue;let s=o.points.geometry.attributes.position.array;for(let c=0;c<o.n;c++){let l=o.center[0]+s[3*c]-t[0],u=o.center[1]+s[3*c+1]-t[1],d=o.center[2]+s[3*c+2]-t[2],f=Math.sqrt(l*l+u*u+d*d),p=(l*e.x+u*e.y+d*e.z)/f;if(p<.9998)continue;let m=Math.acos(Math.min(1,p))*n;m<i&&(i=m,r=o,a=c)}}return r?{sepPx:i+3,desc:this.describeParticle(r,a)}:null}describeParticle(e,t){let n=e.points.geometry.attributes.position.array,r=e.points.geometry.attributes.color.array,i=n[3*t],a=n[3*t+1],o=n[3*t+2],s=Math.hypot(i,a,o),c=s/e.R,l=r[3*t+2]>r[3*t]?`young blue stars and star-forming regions (spiral arm)`:r[3*t]>.98&&r[3*t+1]<.7?`HII region: hot young stars in glowing hydrogen`:`older yellow stars (disk / bulge population)`,u=c<.18?`central bulge`:c<.7?`inner disk`:`outer disk`,d=e.info.name,f=[[`Host galaxy`,d],[`Region`,`${u}, ${(c*100).toFixed(0)}% of the way to the visible edge`],[`Distance from galaxy centre`,`${(s/94607e8).toLocaleString(`en-US`,{maximumFractionDigits:0})} ly`],[`Stellar population (model)`,l],[`Represents`,`roughly 10⁵–10⁶ stars whose combined light is drawn as one particle`]],p=e.center;return{kind:`galaxy`,kindLabel:`Star cloud (model)`,name:`Star cloud in ${d}`,sub:`${u} of ${d}`,radius:e.R*.01,rows:f,desc:`No survey resolves individual stars in this galaxy, so it is drawn as a particle model shaped by its catalogued size, axis ratio, orientation and type. Each particle stands for a cloud of stars; the population label comes from its place in the model, not from a measurement.`,source:`Model particle (see Nearby galaxy models). Galaxy data: OpenNGC / 2MRS.`,ref:{layer:`gmodels`,key:e.key,k:t},getPos:(e,t)=>(t[0]=p[0]+i,t[1]=p[1]+a,t[2]=p[2]+o,t)}}describeByRef(e){let t=this.slots.get(e.key);return t?this.describeParticle(t,e.k):null}labels(){}searchEntries(){return[]}};function qp(e,t,n,r){let i=()=>{let e=0,t=0;for(;e===0;)e=n();for(;t===0;)t=n();return Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*t)},a=[],o=r?1:.5,s=[1,.9,.72],c=[.7,.8,1],l=[1,.6,.7],u=[.95,.95,1],d=[1,.82,.6],f=(e,t,n,r,i)=>a.push(e,t,n,r[0],r[1],r[2],i),p=.011;if(e===`E`){for(let e=0;e<5e3*o;e++){let r=n()**1.6,i=n()*6.283,a=Math.acos(2*n()-1);f(r*Math.sin(a)*Math.cos(i),r*Math.sin(a)*Math.sin(i)*t,r*Math.cos(a)*Math.min(t,.75),e%3?s:d,(e%6==0?.05:p)*(1+n()))}return a}if(e===`I`){for(let e=0;e<4500*o;e++){let t=n()**.8,r=n()*6.283;f(t*Math.cos(r)+i()*.08,t*Math.sin(r)*.8+i()*.08,i()*.06,n()<.3?l:n()<.6?c:u,(e%5==0?.05:p)*(.8+n()*1.5))}return a}let m=(e===`S0`?2600:1300)*o;for(let e=0;e<m;e++){let t=Math.abs(i())*.1,r=n()*6.283,a=Math.acos(2*n()-1);f(t*Math.sin(a)*Math.cos(r),t*Math.sin(a)*Math.sin(r),t*Math.cos(a)*.55,e%2?s:d,p*(.7+n()*.8))}for(let t=0;t<4e3*o;t++){let t=Math.min(1.05,-.32*Math.log(n())),r=n()*6.283;f(t*Math.cos(r),t*Math.sin(r),i()*.012,e===`S0`?s:u,p*(.8+n()*.8))}for(let t=0;t<900*o;t++){let t=Math.min(1,-.3*Math.log(n())),r=n()*6.283;f(t*Math.cos(r),t*Math.sin(r),i()*.01,e===`S0`?s:[.85,.85,.95],.06*(.6+n()))}if(e===`S`){let e=n()<.5?2:n()<.5?3:4,t=Math.tan((10+n()*10)*Q);for(let r=0;r<e;r++){let a=r*6.283/e+n();for(let e=0;e<1600*o;e++){let r=n()*2.4,o=.22*Math.exp(t*r*2.5);if(o>1.02)continue;let s=a+r*2.5,d=.05+.05*o,m=n(),h=m<.15?l:m<.7?c:u;f(o*Math.cos(s)+i()*d,o*Math.sin(s)+i()*d,i()*.008,h,p*(m<.15?1.4:.9)*(.7+n())),e%4==0&&f(o*Math.cos(s)+i()*d,o*Math.sin(s)+i()*d,i()*.008,m<.3?l:c,.045*(.6+n()))}}}return a}function Jp(e){return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Yp=new Set([`HII`,`EmN`,`Neb`,`RfN`,`PN`,`SNR`,`Cl+N`]),Xp=new Set([`OCl`,`GCl`,`*Ass`]),Zp=7e3,Qp=6e3,$p=2200,em=500,tm=128,nm=32,rm=`
  attribute vec3 center; attribute float halfSize; attribute vec3 color; attribute float size; attribute float kind;
  uniform vec3 uCam; uniform float uPixelRatio; uniform float uFovScale;
  varying vec3 vColor; varying float vAlpha; varying float vKind; varying float vSeed;
  #include <common>
  #include <logdepthbuf_pars_vertex>
  void main() {
    vec3 cRel = center - uCam;
    float objPx = halfSize / (length(cRel * 1e-10) * 1e10) * uFovScale;
    float fade = smoothstep(25.0, 110.0, objPx);          // volume appears as the object grows on screen
    vec3 rel = position - uCam;
    float d = length(rel * 1e-10) * 1e10;
    float px = size / d * uFovScale;
    fade *= 1.0 - smoothstep(600.0, 1400.0, px);          // no single particle may swallow the view
    if (kind >= 2.0) {
      float b = kind - 2.0;
      vAlpha = fade * (0.55 + 0.45 * b);
      gl_PointSize = (1.6 + 4.5 * b * b) * uPixelRatio * clamp(uFovScale / 1000.0, 0.7, 1.6);
    } else if (kind > 0.5) {
      vAlpha = fade * clamp(px / 2.0, 0.7, 1.0) * 0.8;
      gl_PointSize = clamp(px, 2.2, 420.0) * uPixelRatio;
    } else {
      // gas: overlapping soft clouds; the bigger a blob is on screen the fainter it is, so many layers add up to smooth structure
      vAlpha = fade * 0.3 * clamp(px / 6.0, 0.35, 1.0) * clamp(90.0 / max(px, 1.0), 0.18, 1.0);
      gl_PointSize = clamp(px, 3.0, 1400.0) * uPixelRatio;
    }
    vSeed = fract(size * 0.000731 + kind * 0.37);
    vColor = color; vKind = kind;
    vec4 mv = modelViewMatrix * vec4(rel, 1.0);
    gl_Position = projectionMatrix * mv;
    if (vAlpha < 0.003) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    #include <logdepthbuf_vertex>
  }`,im=`
  varying vec3 vColor; varying float vAlpha; varying float vKind; varying float vSeed;
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
  }`,am=class{constructor(e,t){this.u=e,this.dso=t,this.visible=!0,this.eligible=new Set,this.schematicQueue=[];let n=0;t.items.forEach((e,t)=>{let r=Yp.has(e.t),i=Xp.has(e.t);(r||i)&&e.dq!==`u`&&(e.img?(this.eligible.add(t),n+=(r?Zp:Qp)+1500):(r||i&&(e.maj>=4||(e.nstars||0)>=40))&&(this.eligible.add(t),this.schematicQueue.push(t),n+=(r?$p:em)+400))});for(let e of this.eligible)t.fadeFlag[e]=1;t.mesh.geometry.attributes.iFade.needsUpdate=!0,this.pos=new Float32Array(n*3),this.center=new Float32Array(n*3),this.half=new Float32Array(n),this.col=new Float32Array(n*3),this.size=new Float32Array(n),this.kind=new Float32Array(n),this.count=0,this.mat=new Na({vertexShader:rm,fragmentShader:im,transparent:!0,depthWrite:!1,depthTest:!0,blending:2,uniforms:{uCam:{value:new q},uPixelRatio:{value:1},uFovScale:{value:1e3}}}),this.group=new wn,e.scene.add(this.group),this.built=[],this._c64=Object.assign(document.createElement(`canvas`),{width:64,height:64}),this._g64=this._c64.getContext(`2d`,{willReadFrequently:!0}),this._c192=Object.assign(document.createElement(`canvas`),{width:192,height:192}),this._g192=this._c192.getContext(`2d`,{willReadFrequently:!0}),this._q=new Tt,this._v=new q,this._rnd=sm(7),this._dirty=!1,t.volumes=this}addFromImage(e,t){if(!this.eligible.has(e)||!this.dso.items[e].img)return;let n=this.dso.items[e],r=Xp.has(n.t),i=n.t===`PN`||n.t===`SNR`,a=t=>{let n=this._analyse((e,n)=>e.drawImage(t,0,0,n,n),r,i,192);n&&this._build(e,n,!1)};if(Yp.has(n.t)){let e=new Image;e.onload=()=>a(e),e.onerror=()=>a(t),e.src=`/Starmap/dso_vol/${n.img}.jpg`}else a(t)}_buildSchematic(e){let t=this.dso.uvs[4*e],n=this.dso.uvs[4*e+1],r=Math.round(t*nm)*tm,i=Math.round((1-n)*nm-1)*tm,a=[this.dso.colors[3*e],this.dso.colors[3*e+1],this.dso.colors[3*e+2]],o=this.dso.items[e],s=Xp.has(o.t),c=o.t===`PN`||o.t===`SNR`,l=r+`,`+i+`:`+s+`:`+c;this._cellCache=this._cellCache||new Map;let u=this._cellCache.get(l);u===void 0&&(u=this._analyse((e,t)=>e.drawImage(this.dso.canvas,r,i,tm,tm,0,0,t,t),s,c,96),this._cellCache.set(l,u)),u&&this._build(e,u,!0,a)}_analyse(e,t,n,r){let i=this._g64;i.clearRect(0,0,64,64),e(i,64);let a=i.getImageData(0,0,64,64).data,o=new Float32Array(4096),s=0;for(let e=0;e<4096;e++){let t=e%64/64-.5,n=Math.floor(e/64)/64-.5,r=1-om(.3,.5,Math.hypot(t,n)),i=(.3*a[4*e]+.5*a[4*e+1]+.2*a[4*e+2])/255*r;o[e]=i,i>s&&(s=i)}if(s<=.02)return null;let c=t?.12:n?.3:.2;for(let e=0;e<4096;e++){let r=o[e]/s;o[e]=r>c?(r-c)**(t?1.3:n?2.6:2):0}if(t){let e=0,t=0;for(let n=0;n<4096;n++)o[n]>0&&(e+=o[n],t++);let n=t?3*e/t:1;for(let e=0;e<4096;e++)o[e]>n&&(o[e]=n)}let l=new Float32Array(4096),u=0;for(let e=0;e<4096;e++)u+=o[e],l[e]=u;if(u<=0)return null;let d=this._g192;d.clearRect(0,0,192,192),e(d,r);let f=d.getImageData(0,0,r,r).data,p=new Float32Array(r*r);for(let e=0;e<r*r;e++)p[e]=(.3*f[4*e]+.5*f[4*e+1]+.2*f[4*e+2])/255;let m=[];for(let e=2;e<r-2;e++)for(let t=2;t<r-2;t++){let n=e*r+t,i=p[n];if(i<.35)continue;let a=!0,o=0;for(let e=-1;e<=1&&a;e++)for(let t=-1;t<=1;t++)if((t||e)&&p[n+e*r+t]>i){a=!1;break}if(!a)continue;for(let e=-2;e<=2;e++)for(let t=-2;t<=2;t++)(Math.abs(t)===2||Math.abs(e)===2)&&(o+=p[n+e*r+t]);o/=16;let s=i-o;if(s<.045)continue;let c=(t+.5)/r,l=(e+.5)/r;Math.hypot(c-.5,l-.5)>.5||m.push([s*(.5+i),c,l,n])}return m.sort((e,t)=>t[0]-e[0]),{S:64,px:a,cdf:l,acc:u,S2:r,p2:f,stars:m}}_build(e,t,n,r=null){let i=this.dso.items[e],a=Xp.has(i.t),o=n?a?em:$p:a?Qp:Zp;if(this.count+o+1500>this.half.length)return;let{S:s,px:c,cdf:l,acc:u,S2:d,p2:f,stars:p}=t,m=i.t===`PN`||i.t===`SNR`,h=this.count,g=this.dso.sizeKm[2*e+1]/2,_=this.dso.sizeKm[2*e]/2;this._q.set(this.dso.quat[4*e],this.dso.quat[4*e+1],this.dso.quat[4*e+2],this.dso.quat[4*e+3]);let v=this.dso.pos[3*e],y=this.dso.pos[3*e+1],b=this.dso.pos[3*e+2],x=this._rnd,S=()=>{let e=0,t=0;for(;e===0;)e=x();for(;t===0;)t=x();return Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*t)},C=a?.6:.22,w=Math.min(Math.max((i.maj||5)*1.5/60,.04),6),T=n?1:Math.min(1,(i.maj||5)/60/w),E=g*T,D=n?_/g:1,O=Array(o),ee=0;for(let e=0;e<o;e++){let t=x()*u,n=0,r=s*s-1;for(;n<r;){let e=n+r>>1;l[e]<t?n=e+1:r=e}let i=n,a=(i%s+x())/s,o=(Math.floor(i/s)+x())/s;O[e]=[a,o,i];let c=(a-.5)*2*D,d=(.5-o)*2;ee+=c*c+d*d}let k=.5*Math.max(.02,Math.sqrt(ee/(2*o))),te=(e,t)=>S()*.667*Math.sqrt(k*k+e*e+t*t)*g,A=new Map,j=(t,n,r)=>{let i=A.get(t);if(i===void 0){let n=sm(t*2654435+e*97+11),r=0,a=0;for(;r===0;)r=n();for(;a===0;)a=n();i=Math.sqrt(-2*Math.log(r))*Math.cos(2*Math.PI*a),A.set(t,i)}return(i*.667*Math.sqrt(k*k+n*n+r*r)+(x()-.5)*4/s)*g};for(let e=0;e<o;e++){let[t,n,i]=O[e],o=(t-.5)*2*g*D,s=(.5-n)*2*g,l=Math.hypot(t-.5,n-.5)*2,u;if(m){let e=Math.min(1,l/T);u=(x()<.5?-1:1)*Math.sqrt(Math.max(0,1-e*e))*E*.85+S()*.1*E}else u=a?j(i,(t-.5)*2*D,(.5-n)*2):S()*C*E;this._v.set(o,s,u).applyQuaternion(this._q);let d=this.count++;this.pos[3*d]=v+this._v.x,this.pos[3*d+1]=y+this._v.y,this.pos[3*d+2]=b+this._v.z,this.center[3*d]=v,this.center[3*d+1]=y,this.center[3*d+2]=b,this.half[d]=g;let f=c[4*i]/255,p=c[4*i+1]/255,h=c[4*i+2]/255;r&&(f*=r[0],p*=r[1],h*=r[2]);let _=Math.max(f,p,h,.05);f/=_,p/=_,h/=_;let w=.3*f+.5*p+.2*h,ee=a?1.2:1.4;f=Math.min(1,Math.max(0,w+(f-w)*ee)),p=Math.min(1,Math.max(0,w+(p-w)*ee)),h=Math.min(1,Math.max(0,w+(h-w)*ee)),a&&(f=.6+.4*f,p=.6+.4*p,h=.6+.4*h),this.col[3*d]=f,this.col[3*d+1]=p,this.col[3*d+2]=h;let k=a&&e%9==0,te;if(k)te=E*(.05+.06*x());else if(a)te=g*.008*(.6+x());else{let e=x();te=E*(e<.25?.1+.14*x():e<.65?.04+.06*x():.012+.03*x())}this.size[d]=te,this.kind[d]=a&&!k?1:0}let M=p.length?p[0][0]:1,ne=n?400:a?1500:500;for(let[e,t,n,r]of p.slice(0,ne)){if(this.count>=this.half.length)break;let i=Math.min(1,(e/M)**.5),o=(t-.5)*2*g*D,s=(.5-n)*2*g,c=Math.min(1,Math.hypot(t-.5,n-.5)*2/T),l=a?te((t-.5)*2*D,(.5-n)*2):S()*.3*E*Math.sqrt(Math.max(.1,1-c*c*.7));this._v.set(o,s,l).applyQuaternion(this._q);let u=this.count++;this.pos[3*u]=v+this._v.x,this.pos[3*u+1]=y+this._v.y,this.pos[3*u+2]=b+this._v.z,this.center[3*u]=v,this.center[3*u+1]=y,this.center[3*u+2]=b,this.half[u]=g;let d=f[4*r]/255,p=f[4*r+1]/255,m=f[4*r+2]/255,h=Math.max(d,p,m,.05);d/=h,p/=h,m/=h,this.col[3*u]=.55+.45*d,this.col[3*u+1]=.55+.45*p,this.col[3*u+2]=.55+.45*m,this.size[u]=1,this.kind[u]=2+i}let N=h,re=this.count-N,P=new Tr;P.setAttribute(`position`,new Y(this.pos.subarray(3*N,3*(N+re)),3)),P.setAttribute(`center`,new Y(this.center.subarray(3*N,3*(N+re)),3)),P.setAttribute(`halfSize`,new Y(this.half.subarray(N,N+re),1)),P.setAttribute(`color`,new Y(this.col.subarray(3*N,3*(N+re)),3)),P.setAttribute(`size`,new Y(this.size.subarray(N,N+re),1)),P.setAttribute(`kind`,new Y(this.kind.subarray(N,N+re),1)),P.boundingSphere=new _r(new q,1e30);let ie=new pa(P,this.mat);ie.frustumCulled=!1,ie.renderOrder=3,ie.visible=!1,this.group.add(ie),this.built.push([e,this.dso.alphas[e],ie])}update(e){for(let e=0;e<12&&this.schematicQueue.length;e++)this._buildSchematic(this.schematicQueue.shift());this.group.visible=this.visible,this.mat.uniforms.uCam.value.set(e.camPos[0],e.camPos[1],e.camPos[2]),this.mat.uniforms.uPixelRatio.value=e.pixelRatio,this.mat.uniforms.uFovScale.value=e.pxPerRad;let t=!1;for(let[n,r,i]of this.built){let a=Math.hypot(this.dso.pos[3*n]-e.camPos[0],this.dso.pos[3*n+1]-e.camPos[1],this.dso.pos[3*n+2]-e.camPos[2]),o=this.dso.sizeKm[2*n+1]/2/a*e.pxPerRad;i.visible=o>22;let s=r*(1-.97*(this.visible?Ct.smoothstep(o,20,70):0));Math.abs(this.dso.alphas[n]-s)>.001&&(this.dso.alphas[n]=s,t=!0)}t&&(this.dso.mesh.geometry.attributes.iAlpha.needsUpdate=!0)}pick(){return null}labels(){}searchEntries(){return[]}};function om(e,t,n){let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)}function sm(e){return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function cm(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`);let a=e.clone();return a.setIndex(i),a.clearGroups(),a}return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}function lm(e){let t=new Map,n=new Map,r=e.clone();return um(e,r,function(e,r){t.set(r,e),n.set(e,r)}),r.traverse(function(e){if(!e.isSkinnedMesh)return;let r=e,i=t.get(e),a=i.skeleton.bones;r.skeleton=i.skeleton.clone(),r.bindMatrix.copy(i.bindMatrix),r.skeleton.bones=a.map(function(e){return n.get(e)}),r.bind(r.skeleton,r.bindMatrix)}),r}function um(e,t,n){n(e,t);for(let r=0;r<e.children.length;r++)um(e.children[r],t.children[r],n)}var dm=class extends co{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new vm(e)}),this.register(function(e){return new ym(e)}),this.register(function(e){return new Om(e)}),this.register(function(e){return new km(e)}),this.register(function(e){return new Am(e)}),this.register(function(e){return new xm(e)}),this.register(function(e){return new Sm(e)}),this.register(function(e){return new Cm(e)}),this.register(function(e){return new wm(e)}),this.register(function(e){return new _m(e)}),this.register(function(e){return new Tm(e)}),this.register(function(e){return new bm(e)}),this.register(function(e){return new Dm(e)}),this.register(function(e){return new Em(e)}),this.register(function(e){return new hm(e)}),this.register(function(e){return new jm(e,mm.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new jm(e,mm.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new Mm(e)})}load(e,t,n,r){let i=this,a;if(this.resourcePath!==``)a=this.resourcePath;else if(this.path!==``){let t=Lo.extractUrlBase(e);a=Lo.resolveURL(t,this.path)}else a=Lo.extractUrlBase(e);this.manager.itemStart(e);let o=function(t){r?r(t):console.error(t),i.manager.itemError(e),i.manager.itemEnd(e)},s=new fo(this.manager);s.setPath(this.path),s.setResponseType(`arraybuffer`),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(n){try{i.parse(n,a,function(n){t(n),i.manager.itemEnd(e)},o)}catch(e){o(e)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let i,a={},o={},s=new TextDecoder;if(typeof e==`string`)i=JSON.parse(e);else if(e instanceof ArrayBuffer){if(s.decode(new Uint8Array(e,0,4))===Nm){try{a[mm.KHR_BINARY_GLTF]=new Im(e)}catch(e){r&&r(e);return}i=JSON.parse(a[mm.KHR_BINARY_GLTF].content)}else i=JSON.parse(s.decode(e))}else i=e;if(i.asset===void 0||i.asset.version[0]<2){r&&r(Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`));return}let c=new ch(i,{path:t||this.resourcePath||``,crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](c);t.name||console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),o[t.name]=t,a[t.name]=!0}if(i.extensionsUsed)for(let e=0;e<i.extensionsUsed.length;++e){let t=i.extensionsUsed[e],n=i.extensionsRequired||[];switch(t){case mm.KHR_MATERIALS_UNLIT:a[t]=new gm;break;case mm.KHR_DRACO_MESH_COMPRESSION:a[t]=new Lm(i,this.dracoLoader);break;case mm.KHR_TEXTURE_TRANSFORM:a[t]=new Rm;break;case mm.KHR_MESH_QUANTIZATION:a[t]=new zm;break;default:n.indexOf(t)>=0&&o[t]===void 0&&console.warn(`THREE.GLTFLoader: Unknown extension "`+t+`".`)}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,i){n.parse(e,t,r,i)})}};function fm(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function pm(e,t,n){let r=e.json.materials[t];return r.extensions&&r.extensions[n]?r.extensions[n]:null}var mm={KHR_BINARY_GLTF:`KHR_binary_glTF`,KHR_DRACO_MESH_COMPRESSION:`KHR_draco_mesh_compression`,KHR_LIGHTS_PUNCTUAL:`KHR_lights_punctual`,KHR_MATERIALS_CLEARCOAT:`KHR_materials_clearcoat`,KHR_MATERIALS_DISPERSION:`KHR_materials_dispersion`,KHR_MATERIALS_IOR:`KHR_materials_ior`,KHR_MATERIALS_SHEEN:`KHR_materials_sheen`,KHR_MATERIALS_SPECULAR:`KHR_materials_specular`,KHR_MATERIALS_TRANSMISSION:`KHR_materials_transmission`,KHR_MATERIALS_IRIDESCENCE:`KHR_materials_iridescence`,KHR_MATERIALS_ANISOTROPY:`KHR_materials_anisotropy`,KHR_MATERIALS_UNLIT:`KHR_materials_unlit`,KHR_MATERIALS_VOLUME:`KHR_materials_volume`,KHR_TEXTURE_BASISU:`KHR_texture_basisu`,KHR_TEXTURE_TRANSFORM:`KHR_texture_transform`,KHR_MESH_QUANTIZATION:`KHR_mesh_quantization`,KHR_MATERIALS_EMISSIVE_STRENGTH:`KHR_materials_emissive_strength`,EXT_MATERIALS_BUMP:`EXT_materials_bump`,EXT_TEXTURE_WEBP:`EXT_texture_webp`,EXT_TEXTURE_AVIF:`EXT_texture_avif`,EXT_MESHOPT_COMPRESSION:`EXT_meshopt_compression`,KHR_MESHOPT_COMPRESSION:`KHR_meshopt_compression`,EXT_MESH_GPU_INSTANCING:`EXT_mesh_gpu_instancing`},hm=class{constructor(e){this.parser=e,this.name=mm.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n=`light:`+e,r=t.cache.get(n);if(r)return r;let i=t.json,a=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e],o,s=new J(16777215);a.color!==void 0&&s.setRGB(a.color[0],a.color[1],a.color[2],Fe);let c=a.range===void 0?0:a.range;switch(a.type){case`directional`:o=new Io(s),o.target.position.set(0,0,-1),o.add(o.target);break;case`point`:o=new No(s),o.distance=c;break;case`spot`:o=new jo(s),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle===void 0?0:a.spot.innerConeAngle,a.spot.outerConeAngle=a.spot.outerConeAngle===void 0?Math.PI/4:a.spot.outerConeAngle,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw Error(`THREE.GLTFLoader: Unexpected light type: `+a.type)}return o.position.set(0,0,0),eh(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||`light_`+e),r=Promise.resolve(o),t.cache.add(n,r),r}getDependency(e,t){if(e===`light`)return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],i=(r.extensions&&r.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(e){return n._getNodeRef(t.cache,i,e)})}},gm=class{constructor(){this.name=mm.KHR_MATERIALS_UNLIT}getMaterialType(){return ti}extendParams(e,t,n){let r=[];e.color=new J(1,1,1),e.opacity=1;let i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){let t=i.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],Fe),e.opacity=t[3]}i.baseColorTexture!==void 0&&r.push(n.assignTexture(e,`map`,i.baseColorTexture,Pe))}return Promise.all(r)}},_m=class{constructor(e){this.parser=e,this.name=mm.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=pm(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},vm=class{constructor(e){this.parser=e,this.name=mm.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return pm(this.parser,e,this.name)===null?null:Ia}extendMaterialParams(e,t){let n=pm(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatMap`,n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatRoughnessMap`,n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,`clearcoatNormalMap`,n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let e=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new wt(e,e)}return Promise.all(r)}},ym=class{constructor(e){this.parser=e,this.name=mm.KHR_MATERIALS_DISPERSION}getMaterialType(e){return pm(this.parser,e,this.name)===null?null:Ia}extendMaterialParams(e,t){let n=pm(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion===void 0?0:n.dispersion),Promise.resolve()}},bm=class{constructor(e){this.parser=e,this.name=mm.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return pm(this.parser,e,this.name)===null?null:Ia}extendMaterialParams(e,t){let n=pm(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceMap`,n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceThicknessMap`,n.iridescenceThicknessTexture)),Promise.all(r)}},xm=class{constructor(e){this.parser=e,this.name=mm.KHR_MATERIALS_SHEEN}getMaterialType(e){return pm(this.parser,e,this.name)===null?null:Ia}extendMaterialParams(e,t){let n=pm(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new J(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let e=n.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],Fe)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenColorMap`,n.sheenColorTexture,Pe)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenRoughnessMap`,n.sheenRoughnessTexture)),Promise.all(r)}},Sm=class{constructor(e){this.parser=e,this.name=mm.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return pm(this.parser,e,this.name)===null?null:Ia}extendMaterialParams(e,t){let n=pm(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,`transmissionMap`,n.transmissionTexture)),Promise.all(r)}},Cm=class{constructor(e){this.parser=e,this.name=mm.KHR_MATERIALS_VOLUME}getMaterialType(e){return pm(this.parser,e,this.name)===null?null:Ia}extendMaterialParams(e,t){let n=pm(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor===void 0?0:n.thicknessFactor,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`thicknessMap`,n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let i=n.attenuationColor||[1,1,1];return t.attenuationColor=new J().setRGB(i[0],i[1],i[2],Fe),Promise.all(r)}},wm=class{constructor(e){this.parser=e,this.name=mm.KHR_MATERIALS_IOR}getMaterialType(e){return pm(this.parser,e,this.name)===null?null:Ia}extendMaterialParams(e,t){let n=pm(this.parser,e,this.name);return n===null?Promise.resolve():(t.ior=n.ior===void 0?1.5:n.ior,t.ior===0&&(t.ior=1e3),Promise.resolve())}},Tm=class{constructor(e){this.parser=e,this.name=mm.KHR_MATERIALS_SPECULAR}getMaterialType(e){return pm(this.parser,e,this.name)===null?null:Ia}extendMaterialParams(e,t){let n=pm(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor===void 0?1:n.specularFactor,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularIntensityMap`,n.specularTexture));let i=n.specularColorFactor||[1,1,1];return t.specularColor=new J().setRGB(i[0],i[1],i[2],Fe),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularColorMap`,n.specularColorTexture,Pe)),Promise.all(r)}},Em=class{constructor(e){this.parser=e,this.name=mm.EXT_MATERIALS_BUMP}getMaterialType(e){return pm(this.parser,e,this.name)===null?null:Ia}extendMaterialParams(e,t){let n=pm(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor===void 0?1:n.bumpFactor,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,`bumpMap`,n.bumpTexture)),Promise.all(r)}},Dm=class{constructor(e){this.parser=e,this.name=mm.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return pm(this.parser,e,this.name)===null?null:Ia}extendMaterialParams(e,t){let n=pm(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,`anisotropyMap`,n.anisotropyTexture)),Promise.all(r)}},Om=class{constructor(e){this.parser=e,this.name=mm.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let i=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`);return null}return t.loadTextureImage(e,i.source,a)}},km=class{constructor(e){this.parser=e,this.name=mm.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},Am=class{constructor(e){this.parser=e,this.name=mm.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},jm=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let e=n.extensions[this.name],r=this.parser.getDependency(`buffer`,e.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`);return null}return r.then(function(t){let n=e.byteOffset||0,r=e.byteLength||0,a=e.count,o=e.byteStride,s=new Uint8Array(t,n,r);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(a,o,s,e.mode,e.filter).then(function(e){return e.buffer}):i.ready.then(function(){let t=new ArrayBuffer(a*o);return i.decodeGltfBuffer(new Uint8Array(t),a,o,s,e.mode,e.filter),t})})}return null}},Mm=class{constructor(e){this.name=mm.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let e of r.primitives)if(e.mode!==Um.TRIANGLES&&e.mode!==Um.TRIANGLE_STRIP&&e.mode!==Um.TRIANGLE_FAN&&e.mode!==void 0)return null;let i=n.extensions[this.name].attributes,a=[],o={};for(let e in i)a.push(this.parser.getDependency(`accessor`,i[e]).then(t=>(o[e]=t,o[e])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(e=>{let t=e.pop(),n=t.isGroup?t.children:[t],r=e[0].count,i=[];for(let e of n){let t=new Yt,n=new q,a=new Tt,s=new q(1,1,1),c=new zi(e.geometry,e.material,r);for(let e=0;e<r;e++)o.TRANSLATION&&n.fromBufferAttribute(o.TRANSLATION,e),o.ROTATION&&a.fromBufferAttribute(o.ROTATION,e),o.SCALE&&s.fromBufferAttribute(o.SCALE,e),c.setMatrixAt(e,t.compose(n,a,s));for(let t in o)if(t===`_COLOR_0`){let e=o[t];c.instanceColor=new ji(e.array,e.itemSize,e.normalized)}else t!==`TRANSLATION`&&t!==`ROTATION`&&t!==`SCALE`&&e.geometry.setAttribute(t,o[t]);Cn.prototype.copy.call(c,e),this.parser.assignFinalMaterial(c),i.push(c)}return t.isGroup?(t.clear(),t.add(...i),t):i[0]}))}},Nm=`glTF`,Pm=12,Fm={JSON:1313821514,BIN:5130562},Im=class{constructor(e){this.name=mm.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Pm),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Nm)throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);if(this.header.version<2)throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);let r=this.header.length-Pm,i=new DataView(e,Pm),a=0;for(;a<r;){let t=i.getUint32(a,!0);a+=4;let r=i.getUint32(a,!0);if(a+=4,r===Fm.JSON){let r=new Uint8Array(e,Pm+a,t);this.content=n.decode(r)}else if(r===Fm.BIN){let n=Pm+a;this.body=e.slice(n,n+t)}a+=t}if(this.content===null)throw Error(`THREE.GLTFLoader: JSON content not found.`)}},Lm=class{constructor(e,t){if(!t)throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);this.name=mm.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},s={},c={};for(let e in a){let t=Jm[e]||e.toLowerCase();o[t]=a[e]}for(let t in e.attributes){let r=Jm[t]||t.toLowerCase();if(a[t]!==void 0){let i=n.accessors[e.attributes[t]];c[r]=Wm[i.componentType].name,s[r]=i.normalized===!0}}return t.getDependency(`bufferView`,i).then(function(e){return new Promise(function(t,n){r.decodeDracoFile(e,function(e){for(let t in e.attributes){let n=e.attributes[t],r=s[t];r!==void 0&&(n.normalized=r)}t(e)},o,c,Fe,n)})})}},Rm=class{constructor(){this.name=mm.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0?e:(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0,e)}},zm=class{constructor(){this.name=mm.KHR_MESH_QUANTIZATION}},Bm=class extends Ua{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r*3+r;for(let e=0;e!==r;e++)t[e]=n[i+e];return t}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=o*2,c=o*3,l=r-t,u=(n-t)/l,d=u*u,f=d*u,p=e*c,m=p-c,h=-2*f+3*d,g=f-d,_=1-h,v=g-d+u;for(let e=0;e!==o;e++){let t=a[m+e+o],n=a[m+e+s]*l,r=a[p+e+o],c=a[p+e]*l;i[e]=_*t+v*n+h*r+g*c}return i}},Vm=new Tt,Hm=class extends Bm{interpolate_(e,t,n,r){let i=super.interpolate_(e,t,n,r);return Vm.fromArray(i).normalize().toArray(i),i}},Um={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Wm={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Gm={9728:i,9729:s,9984:a,9985:c,9986:o,9987:l},Km={33071:n,33648:r,10497:t},qm={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Jm={POSITION:`position`,NORMAL:`normal`,TANGENT:`tangent`,TEXCOORD_0:`uv`,TEXCOORD_1:`uv1`,TEXCOORD_2:`uv2`,TEXCOORD_3:`uv3`,COLOR_0:`color`,WEIGHTS_0:`skinWeight`,JOINTS_0:`skinIndex`},Ym={scale:`scale`,translation:`position`,rotation:`quaternion`,weights:`morphTargetInfluences`},Xm={CUBICSPLINE:void 0,LINEAR:ke,STEP:B},Zm={OPAQUE:`OPAQUE`,MASK:`MASK`,BLEND:`BLEND`};function Qm(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new Fa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),e.DefaultMaterial}function $m(e,t,n){for(let r in n.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=n.extensions[r])}function eh(e,t){t.extras!==void 0&&(typeof t.extras==`object`?Object.assign(e.userData,t.extras):console.warn(`THREE.GLTFLoader: Ignoring primitive type .extras, `+t.extras))}function th(e,t,n){let r=!1,i=!1,a=!1;for(let e=0,n=t.length;e<n;e++){let n=t[e];if(n.POSITION!==void 0&&(r=!0),n.NORMAL!==void 0&&(i=!0),n.COLOR_0!==void 0&&(a=!0),r&&i&&a)break}if(!r&&!i&&!a)return Promise.resolve(e);let o=[],s=[],c=[];for(let l=0,u=t.length;l<u;l++){let u=t[l];if(r){let t=u.POSITION===void 0?e.attributes.position:n.getDependency(`accessor`,u.POSITION);o.push(t)}if(i){let t=u.NORMAL===void 0?e.attributes.normal:n.getDependency(`accessor`,u.NORMAL);s.push(t)}if(a){let t=u.COLOR_0===void 0?e.attributes.color:n.getDependency(`accessor`,u.COLOR_0);c.push(t)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c)]).then(function(t){let n=t[0],o=t[1],s=t[2];return r&&(e.morphAttributes.position=n),i&&(e.morphAttributes.normal=o),a&&(e.morphAttributes.color=s),e.morphTargetsRelative=!0,e})}function nh(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,r=t.weights.length;n<r;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){let n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let t=0,r=n.length;t<r;t++)e.morphTargetDictionary[n[t]]=t}else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`)}}function rh(e){let t,n=e.extensions&&e.extensions[mm.KHR_DRACO_MESH_COMPRESSION];if(t=n?`draco:`+n.bufferView+`:`+n.indices+`:`+ih(n.attributes):e.indices+`:`+ih(e.attributes)+`:`+e.mode,e.targets!==void 0)for(let n=0,r=e.targets.length;n<r;n++)t+=`:`+ih(e.targets[n]);return t}function ih(e){let t=``,n=Object.keys(e).sort();for(let r=0,i=n.length;r<i;r++)t+=n[r]+`:`+e[n[r]]+`;`;return t}function ah(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error(`THREE.GLTFLoader: Unsupported normalized accessor component type.`)}}function oh(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?`image/jpeg`:e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?`image/webp`:e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?`image/ktx2`:`image/png`}var sh=new Yt,ch=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new fm,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,i=!1,a=-1;if(typeof navigator<`u`&&navigator.userAgent!==void 0){let e=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(e)===!0;let t=e.match(/Version\/(\d+)/);r=n&&t?parseInt(t[1],10):-1,i=e.indexOf(`Firefox`)>-1,a=i?e.match(/Firefox\/([0-9]+)\./)[1]:-1}this.textureLoader=typeof createImageBitmap>`u`||n&&r<17||i&&a<98?new ho(this.options.manager):new Bo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new fo(this.options.manager),this.fileLoader.setResponseType(`arraybuffer`),this.options.crossOrigin===`use-credentials`&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([n.getDependencies(`scene`),n.getDependencies(`animation`),n.getDependencies(`camera`)])}).then(function(t){let a={scene:t[0][r.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:r.asset,parser:n,userData:{}};return $m(i,a,r),eh(a,r),Promise.all(n._invokeAll(function(e){return e.afterRoot&&e.afterRoot(a)})).then(function(){for(let e of a.scenes)e.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n].joints;for(let t=0,n=r.length;t<n;t++)e[r[t]].isBone=!0}for(let t=0,r=e.length;t<r;t++){let r=e[t];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),i=(e,t)=>{let n=this.associations.get(e);n!=null&&this.associations.set(t,n);for(let[n,r]of e.children.entries())i(r,t.children[n])};return i(n,r),r.name+=`_instance_`+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let i=e(t[r]);i&&n.push(i)}return n}getDependency(e,t){let n=e+`:`+t,r=this.cache.get(n);if(!r){switch(e){case`scene`:r=this.loadScene(t);break;case`node`:r=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case`mesh`:r=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case`accessor`:r=this.loadAccessor(t);break;case`bufferView`:r=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case`buffer`:r=this.loadBuffer(t);break;case`material`:r=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case`texture`:r=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case`skin`:r=this.loadSkin(t);break;case`animation`:r=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case`camera`:r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!r)throw Error(`Unknown type: `+e)}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e===`mesh`?`es`:`s`)]||[];t=Promise.all(r.map(function(t,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!==`arraybuffer`)throw Error(`THREE.GLTFLoader: `+t.type+` buffer type is not supported.`);if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[mm.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(e,i){n.load(Lo.resolveURL(t.uri,r.path),e,void 0,function(){i(Error(`THREE.GLTFLoader: Failed to load buffer "`+t.uri+`".`))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency(`buffer`,t.buffer).then(function(e){let n=t.byteLength||0,r=t.byteOffset||0;return e.slice(r,r+n)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let e=qm[r.type],t=Wm[r.componentType],n=r.normalized===!0,i=new t(r.count*e);return Promise.resolve(new Y(i,e,n))}let i=[];return r.bufferView===void 0?i.push(null):i.push(this.getDependency(`bufferView`,r.bufferView)),r.sparse!==void 0&&(i.push(this.getDependency(`bufferView`,r.sparse.indices.bufferView)),i.push(this.getDependency(`bufferView`,r.sparse.values.bufferView))),Promise.all(i).then(function(e){let i=e[0],a=qm[r.type],o=Wm[r.componentType],s=o.BYTES_PER_ELEMENT,c=s*a,l=r.byteOffset||0,u=r.bufferView===void 0?void 0:n.bufferViews[r.bufferView].byteStride,d=r.normalized===!0,f,p;if(u&&u!==c){let e=Math.floor(l/u),n=`InterleavedBuffer:`+r.bufferView+`:`+r.componentType+`:`+e+`:`+r.count,c=t.cache.get(n);c||(f=new o(i,e*u,r.count*u/s),c=new Er(f,u/s),t.cache.add(n,c)),p=new Or(c,a,l%u/s,d)}else f=i===null?new o(r.count*a):new o(i,l,r.count*a),p=new Y(f,a,d);if(r.sparse!==void 0){let t=qm.SCALAR,n=Wm[r.sparse.indices.componentType],s=r.sparse.indices.byteOffset||0,c=r.sparse.values.byteOffset||0,l=new n(e[1],s,r.sparse.count*t),u=new o(e[2],c,r.sparse.count*a);i!==null&&(p=new Y(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(p.setX(t,u[e*a]),a>=2&&p.setY(t,u[e*a+1]),a>=3&&p.setZ(t,u[e*a+2]),a>=4&&p.setW(t,u[e*a+3]),a>=5)throw Error(`THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`)}p.normalized=d}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,i=t.images[r],a=this.textureLoader;if(i.uri){let e=n.manager.getHandler(i.uri);e!==null&&(a=e)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let r=this,i=this.json,a=i.textures[e],o=i.images[t],s=(o.uri||o.bufferView)+`:`+a.sampler;if(this.textureCache[s])return this.textureCache[s];let c=this.loadImageSource(t,n).then(function(t){t.flipY=!1,t.name=a.name||o.name||``,t.name===``&&typeof o.uri==`string`&&o.uri.startsWith(`data:image/`)===!1&&(t.name=o.uri);let n=(i.samplers||{})[a.sampler]||{};return t.magFilter=Gm[n.magFilter]||1006,t.minFilter=Gm[n.minFilter]||1008,t.wrapS=Km[n.wrapS]||1e3,t.wrapT=Km[n.wrapT]||1e3,t.generateMipmaps=!t.isCompressedTexture&&t.minFilter!==1003&&t.minFilter!==1006,r.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[s]=c,c}loadImageSource(e,t){let n=this,r=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(e=>e.clone());let a=r.images[e],o=self.URL||self.webkitURL,s=a.uri||``,c=!1;if(a.bufferView!==void 0)s=n.getDependency(`bufferView`,a.bufferView).then(function(e){c=!0;let t=new Blob([e],{type:a.mimeType});return s=o.createObjectURL(t),s});else if(a.uri===void 0)throw Error(`THREE.GLTFLoader: Image `+e+` is missing URI and bufferView`);let l=Promise.resolve(s).then(function(e){return new Promise(function(n,r){let a=n;t.isImageBitmapLoader===!0&&(a=function(e){let t=new Ut(e);t.needsUpdate=!0,n(t)}),t.load(Lo.resolveURL(e,i.path),a,void 0,r)})}).then(function(e){return c===!0&&o.revokeObjectURL(s),eh(e,a),e.userData.mimeType=a.mimeType||oh(a.uri),e}).catch(function(e){throw console.error(`THREE.GLTFLoader: Couldn't load texture`,s),e});return this.sourceCache[e]=l,l}assignTexture(e,t,n,r){let i=this;return this.getDependency(`texture`,n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),i.extensions[mm.KHR_TEXTURE_TRANSFORM]){let e=n.extensions===void 0?void 0:n.extensions[mm.KHR_TEXTURE_TRANSFORM];if(e){let t=i.associations.get(a);a=i.extensions[mm.KHR_TEXTURE_TRANSFORM].extendTexture(a,e),i.associations.set(a,t)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let e=`PointsMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new ca,Ar.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,t.sizeAttenuation=!1,this.cache.add(e,t)),n=t}else if(e.isLine){let e=`LineBasicMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new Ji,Ar.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,this.cache.add(e,t)),n=t}if(r||i||a){let e=`ClonedMaterial:`+n.uuid+`:`;r&&(e+=`derivative-tangents:`),i&&(e+=`vertex-colors:`),a&&(e+=`flat-shading:`);let t=this.cache.get(e);t||(t=n.clone(),i&&(t.vertexColors=!0),a&&(t.flatShading=!0),r&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(n))),n=t}e.material=n}getMaterialType(){return Fa}loadMaterial(e){let t=this,n=this.json,r=this.extensions,i=n.materials[e],a,o={},s=i.extensions||{},c=[];if(s[mm.KHR_MATERIALS_UNLIT]){let e=r[mm.KHR_MATERIALS_UNLIT];a=e.getMaterialType(),c.push(e.extendParams(o,i,t))}else{let n=i.pbrMetallicRoughness||{};if(o.color=new J(1,1,1),o.opacity=1,Array.isArray(n.baseColorFactor)){let e=n.baseColorFactor;o.color.setRGB(e[0],e[1],e[2],Fe),o.opacity=e[3]}n.baseColorTexture!==void 0&&c.push(t.assignTexture(o,`map`,n.baseColorTexture,Pe)),o.metalness=n.metallicFactor===void 0?1:n.metallicFactor,o.roughness=n.roughnessFactor===void 0?1:n.roughnessFactor,n.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,`metalnessMap`,n.metallicRoughnessTexture)),c.push(t.assignTexture(o,`roughnessMap`,n.metallicRoughnessTexture))),a=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=2);let l=i.alphaMode||Zm.OPAQUE;if(l===Zm.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===Zm.MASK&&(o.alphaTest=i.alphaCutoff===void 0?.5:i.alphaCutoff)),i.normalTexture!==void 0&&a!==ti&&(c.push(t.assignTexture(o,`normalMap`,i.normalTexture)),o.normalScale=new wt(1,1),i.normalTexture.scale!==void 0)){let e=i.normalTexture.scale;o.normalScale.set(e,e)}if(i.occlusionTexture!==void 0&&a!==ti&&(c.push(t.assignTexture(o,`aoMap`,i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&a!==ti){let e=i.emissiveFactor;o.emissive=new J().setRGB(e[0],e[1],e[2],Fe)}return i.emissiveTexture!==void 0&&a!==ti&&c.push(t.assignTexture(o,`emissiveMap`,i.emissiveTexture,Pe)),Promise.all(c).then(function(){let n=new a(o);return i.name&&(n.name=i.name),eh(n,i),t.associations.set(n,{materials:e}),i.extensions&&$m(r,n,i),n})}createUniqueName(e){let t=ns.sanitizeNodeName(e||``);return t in this.nodeNamesUsed?t+`_`+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function i(e){return n[mm.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(n){return uh(n,e,t)})}let a=[];for(let n=0,o=e.length;n<o;n++){let o=e[n],s=rh(o),c=r[s];if(c)a.push(c.promise);else{let e;e=o.extensions&&o.extensions[mm.KHR_DRACO_MESH_COMPRESSION]?i(o):uh(new Tr,o,t),r[s]={primitive:o,promise:e},a.push(e)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,i=n.meshes[e],a=i.primitives,o=[];for(let e=0,t=a.length;e<t;e++){let t=a[e].material===void 0?Qm(this.cache):this.getDependency(`material`,a[e].material);o.push(t)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(n){let o=n.slice(0,n.length-1),s=n[n.length-1],c=[];for(let n=0,l=s.length;n<l;n++){let l=s[n],u=a[n],d,f=o[n];if(u.mode===Um.TRIANGLES||u.mode===Um.TRIANGLE_STRIP||u.mode===Um.TRIANGLE_FAN||u.mode===void 0)d=i.isSkinnedMesh===!0?new Ti(l,f):new pi(l,f),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),u.mode===Um.TRIANGLE_STRIP?d.geometry=cm(d.geometry,1):u.mode===Um.TRIANGLE_FAN&&(d.geometry=cm(d.geometry,2));else if(u.mode===Um.LINES)d=new oa(l,f);else if(u.mode===Um.LINE_STRIP)d=new na(l,f);else if(u.mode===Um.LINE_LOOP)d=new sa(l,f);else if(u.mode===Um.POINTS)d=new pa(l,f);else throw Error(`THREE.GLTFLoader: Primitive mode unsupported: `+u.mode);Object.keys(d.geometry.morphAttributes).length>0&&nh(d,i),d.name=t.createUniqueName(i.name||`mesh_`+e),eh(d,i),u.extensions&&$m(r,d,u),t.assignFinalMaterial(d),c.push(d)}for(let n=0,r=c.length;n<r;n++)t.associations.set(c[n],{meshes:e,primitives:n});if(c.length===1)return i.extensions&&$m(r,c[0],i),c[0];let l=new wn;i.extensions&&$m(r,l,i),t.associations.set(l,{meshes:e});for(let e=0,t=c.length;e<t;e++)l.add(c[e]);return l})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn(`THREE.GLTFLoader: Missing camera parameters.`);return}return n.type===`perspective`?t=new ko(Ct.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type===`orthographic`&&(t=new Po(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),eh(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let e=0,r=t.joints.length;e<r;e++)n.push(this._loadNodeShallow(t.joints[e]));return t.inverseBindMatrices===void 0?n.push(null):n.push(this.getDependency(`accessor`,t.inverseBindMatrices)),Promise.all(n).then(function(e){let n=e.pop(),r=e,i=[],a=[];for(let e=0,o=r.length;e<o;e++){let o=r[e];if(o){i.push(o);let t=new Yt;n!==null&&t.fromArray(n.array,e*16),a.push(t)}else console.warn(`THREE.GLTFLoader: Joint "%s" could not be found.`,t.joints[e])}return new Ai(i,a)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],i=r.name?r.name:`animation_`+e,a=[],o=[],s=[],c=[],l=[];for(let e=0,t=r.channels.length;e<t;e++){let t=r.channels[e],n=r.samplers[t.sampler],i=t.target,u=i.node,d=r.parameters===void 0?n.input:r.parameters[n.input],f=r.parameters===void 0?n.output:r.parameters[n.output];i.node!==void 0&&(a.push(this.getDependency(`node`,u)),o.push(this.getDependency(`accessor`,d)),s.push(this.getDependency(`accessor`,f)),c.push(n),l.push(i))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(s),Promise.all(c),Promise.all(l)]).then(function(e){let t=e[0],a=e[1],o=e[2],s=e[3],c=e[4],l=[];for(let e=0,r=t.length;e<r;e++){let r=t[e],i=a[e],u=o[e],d=s[e],f=c[e];if(r===void 0)continue;r.updateMatrix&&r.updateMatrix();let p=n._createAnimationTracks(r,i,u,d,f);if(p)for(let e=0;e<p.length;e++)l.push(p[e])}let u=new no(i,void 0,l);return eh(u,r),u})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency(`mesh`,r.mesh).then(function(e){let t=n._getNodeRef(n.meshCache,r.mesh,e);return r.weights!==void 0&&t.traverse(function(e){if(e.isMesh)for(let t=0,n=r.weights.length;t<n;t++)e.morphTargetInfluences[t]=r.weights[t]}),t})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],i=n._loadNodeShallow(e),a=[],o=r.children||[];for(let e=0,t=o.length;e<t;e++)a.push(n.getDependency(`node`,o[e]));let s=r.skin===void 0?Promise.resolve(null):n.getDependency(`skin`,r.skin);return Promise.all([i,Promise.all(a),s]).then(function(e){let t=e[0],n=e[1],r=e[2];r!==null&&t.traverse(function(e){e.isSkinnedMesh&&e.bind(r,sh)});for(let e=0,r=n.length;e<r;e++)t.add(n[e]);if(t.userData.pivot!==void 0&&n.length>0){let e=t.userData.pivot,r=n[0];t.pivot=new q().fromArray(e),t.position.x-=e[0],t.position.y-=e[1],t.position.z-=e[2],r.position.set(0,0,0),delete t.userData.pivot}return t})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let i=t.nodes[e],a=i.name?r.createUniqueName(i.name):``,o=[],s=r._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return s&&o.push(s),i.camera!==void 0&&o.push(r.getDependency(`camera`,i.camera).then(function(e){return r._getNodeRef(r.cameraCache,i.camera,e)})),r._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){o.push(e)}),this.nodeCache[e]=Promise.all(o).then(function(t){let o;if(o=i.isBone===!0?new Ei:t.length>1?new wn:t.length===1?t[0]:new Cn,o!==t[0])for(let e=0,n=t.length;e<n;e++)o.add(t[e]);if(i.name&&(o.userData.name=i.name,o.name=a),eh(o,i),i.extensions&&$m(n,o,i),i.matrix!==void 0){let e=new Yt;e.fromArray(i.matrix),o.applyMatrix4(e)}else i.translation!==void 0&&o.position.fromArray(i.translation),i.rotation!==void 0&&o.quaternion.fromArray(i.rotation),i.scale!==void 0&&o.scale.fromArray(i.scale);if(!r.associations.has(o))r.associations.set(o,{});else if(i.mesh!==void 0&&r.meshCache.refs[i.mesh]>1){let e=r.associations.get(o);r.associations.set(o,{...e})}return r.associations.get(o).nodes=e,o}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,i=new wn;n.name&&(i.name=r.createUniqueName(n.name)),eh(i,n),n.extensions&&$m(t,i,n);let a=n.nodes||[],o=[];for(let e=0,t=a.length;e<t;e++)o.push(r.getDependency(`node`,a[e]));return Promise.all(o).then(function(e){for(let t=0,n=e.length;t<n;t++){let n=e[t];n.parent===null?i.add(n):i.add(lm(n))}return r.associations=(e=>{let t=new Map;for(let[e,n]of r.associations)(e instanceof Ar||e instanceof Ut)&&t.set(e,n);return e.traverse(e=>{let n=r.associations.get(e);n!=null&&t.set(e,n)}),t})(i),i})}_createAnimationTracks(e,t,n,r,i){let a=[],o=e.name?e.name:e.uuid,s=[];function c(e){e.morphTargetInfluences&&s.push(e.name?e.name:e.uuid)}Ym[i.path]===Ym.weights?(c(e),e.isGroup&&e.children.forEach(c)):s.push(o);let l;switch(Ym[i.path]){case Ym.weights:l=Za;break;case Ym.rotation:l=$a;break;case Ym.translation:case Ym.scale:l=to;break;default:switch(n.itemSize){case 1:l=Za;break;default:l=to}}let u=r.interpolation===void 0?ke:Xm[r.interpolation],d=this._getArrayFromAccessor(n);for(let e=0,n=s.length;e<n;e++){let n=new l(s[e]+`.`+Ym[i.path],t.array,d,u);r.interpolation===`CUBICSPLINE`&&this._createCubicSplineTrackInterpolant(n),a.push(n)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let e=ah(t.constructor),n=new Float32Array(t.length);for(let r=0,i=t.length;r<i;r++)n[r]=t[r]*e;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(e){return new(this instanceof $a?Hm:Bm)(this.times,this.values,this.getValueSize()/3,e)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function lh(e,t,n){let r=t.attributes,i=new qn;if(r.POSITION!==void 0){let e=n.json.accessors[r.POSITION],t=e.min,a=e.max;if(t!==void 0&&a!==void 0){if(i.set(new q(t[0],t[1],t[2]),new q(a[0],a[1],a[2])),e.normalized){let t=ah(Wm[e.componentType]);i.min.multiplyScalar(t),i.max.multiplyScalar(t)}}else{console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`);return}}else return;let a=t.targets;if(a!==void 0){let e=new q,t=new q;for(let r=0,i=a.length;r<i;r++){let i=a[r];if(i.POSITION!==void 0){let r=n.json.accessors[i.POSITION],a=r.min,o=r.max;if(a!==void 0&&o!==void 0){if(t.setX(Math.max(Math.abs(a[0]),Math.abs(o[0]))),t.setY(Math.max(Math.abs(a[1]),Math.abs(o[1]))),t.setZ(Math.max(Math.abs(a[2]),Math.abs(o[2]))),r.normalized){let e=ah(Wm[r.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)}}i.expandByVector(e)}e.boundingBox=i;let o=new _r;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,e.boundingSphere=o}function uh(e,t,n){let r=t.attributes,i=[];function a(t,r){return n.getDependency(`accessor`,t).then(function(t){e.setAttribute(r,t)})}for(let t in r){let n=Jm[t]||t.toLowerCase();n in e.attributes||i.push(a(r[t],n))}if(t.indices!==void 0&&!e.index){let r=n.getDependency(`accessor`,t.indices).then(function(t){e.setIndex(t)});i.push(r)}return Nt.workingColorSpace!==`srgb-linear`&&`COLOR_0`in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Nt.workingColorSpace}" not supported.`),eh(e,t),lh(e,t,n),Promise.all(i).then(function(){return t.targets===void 0?e:th(e,t.targets,n)})}var dh=[`ast_rubble`,`ast_elongated`,`ast_cratered`,`ast_irregular`,`ast_metallic`],fh=class{constructor(e,t,n){this.u=e,this.sats=t,this.sb=n,this.visible=!0,this.loader=new dm,this.templates=new Map,this.loading=new Set,this.group=new wn,e.scene.add(this.group),this.sun=new Io(16774368,3.2),e.scene.add(this.sun),e.scene.add(this.sun.target),this.fill=new _o(10070732,1118481,.35),e.scene.add(this.fill),this.instances=new Map,this._tmp=[0,0,0]}_template(e){return this.templates.has(e)?this.templates.get(e):this.loading.has(e)?null:(this.loading.add(e),this.loader.load(`/Starmap/models/${e}.glb`,t=>{let n=t.scene,r=new qn().setFromObject(n),i=new q;r.getSize(i);let a=new q;r.getCenter(a);let o=1/Math.max(i.x,i.y,i.z,1e-6);n.position.sub(a).multiplyScalar(o),n.scale.setScalar(o);let s=new wn;s.add(n),n.traverse(e=>{e.isMesh&&(e.frustumCulled=!1,e.material&&(e.material.side=0,e.material.needsUpdate=!0))}),this.templates.set(e,s)},void 0,()=>{this.templates.set(e,!1)}),null)}satVariant(e){let t=e.g.map(e=>this.sats.groups[e]);return/ R\/B/.test(e.n)||/ DEB/.test(e.n)?`sat_rocketbody`:t.includes(`stations`)&&/ISS|TIANHE|CSS|MENGTIAN|WENTIAN|ZARYA|NAUKA|PROGRESS|SOYUZ|DRAGON|CYGNUS/.test(e.n)?`sat_station`:t.includes(`starlink`)||t.includes(`oneweb`)||t.includes(`iridium-NEXT`)?`sat_starlink`:t.includes(`gps-ops`)||t.includes(`glo-ops`)||t.includes(`galileo`)||t.includes(`beidou`)||t.includes(`gnss`)||t.includes(`sbas`)?`sat_gps`:/HST|HUBBLE|TESS|CHANDRA|XMM|SWIFT|FERMI|GAIA|WISE|KEPLER|IRIS|SDO|INTEGRAL|CHEOPS/.test(e.n)?`sat_telescope`:t.includes(`weather`)||t.includes(`noaa`)||t.includes(`goes`)||t.includes(`resource`)||t.includes(`planet`)||t.includes(`spire`)||t.includes(`sarsat`)||t.includes(`science`)||t.includes(`geodetic`)?`sat_weather`:t.includes(`cubesat`)||t.includes(`amateur`)||t.includes(`satnogs`)||t.includes(`education`)?`sat_cubesat`:`sat_comms`}_place(e,t,n,r,i){let a=this.instances.get(e);if(!a){let n=this._template(t);if(!n)return!1;a={mesh:n.clone(!0),spin:i},this.group.add(a.mesh),this.instances.set(e,a)}a.used=!0;let o=this.u.rig.pos;return a.mesh.position.set(r[0]-o[0],r[1]-o[1],r[2]-o[2]),a.mesh.scale.setScalar(n),a.mesh.rotation.y+=i*5e-4,a.mesh.visible=!0,!0}update(e){for(let e of this.instances.values())e.used=!1;this.group.visible=this.visible;let t=e.camPos,n=Math.hypot(t[0],t[1],t[2])||1;if(this.sun.position.set(-t[0]/n,-t[1]/n,-t[2]/n).multiplyScalar(10),this.sun.target.position.set(0,0,0),this.visible){let n=this.sats;if(n.points.visible){let r=n.solar.earth.pos,i=t[0]-r[0],a=t[1]-r[1],o=t[2]-r[2],s=0;for(let t=0;t<n.count&&s<24;t++){if(n.alpha[t]<.5&&!n.hideMarker.has(t))continue;let c=n.posD[3*t]-i,l=n.posD[3*t+1]-a,u=n.posD[3*t+2]-o,d=Math.sqrt(c*c+l*l+u*u),f=n.variant(t),p=Ud[f];if(this.templates.get(f)===!1&&(f=n.genericVariant(t)),!(p/d*e.pxPerRad<1.5)){if(f===`sat_station`&&n.sats[t].id!==25544&&n.sats[t].id!==48274){let e=!1;for(let r of[25544,48274]){let i=n.byId.get(r);i!==void 0&&Math.hypot(n.posD[3*i]-n.posD[3*t],n.posD[3*i+1]-n.posD[3*t+1],n.posD[3*i+2]-n.posD[3*t+2])<1&&(e=!0)}if(e){n.hideMarker.add(t);continue}}this._place(`sat`+t,f,p,[r[0]+n.posD[3*t],r[1]+n.posD[3*t+1],r[2]+n.posD[3*t+2]],1+t%7)?(n.hideMarker.add(t),s++):this.templates.get(f)===void 0&&this._template(f)}}}let r=this.u.rig.focus;if(r&&(r.kind===`asteroid`||r.kind===`comet`)){r.getPos(e.jd,this._tmp);let t=this.u.rig.distanceTo(this._tmp),n=r.radius*2;if(n/t*e.pxPerRad>1.5){let e=r.ref.index,t=r.kind===`comet`?`comet_nucleus`:dh[e%dh.length];this._place(r.kind+e,t,n,this._tmp,.4)}}}for(let[e,t]of this.instances)t.used||(t.mesh.visible=!1,e.startsWith(`sat`)&&this.sats.hideMarker.delete(+e.slice(3)))}pick(){return null}labels(){}searchEntries(){return[]}},ph=[{key:`lmc`,name:`Large Magellanic Cloud`,dpc:49970,dm:18.49,depthPc:1500},{key:`smc`,name:`Small Magellanic Cloud`,dpc:62440,dm:18.98,depthPc:2500}],mh=class{constructor(e,t,n){this.u=e,this.visible=!0,this.ids=n,this.ra=t.ra,this.dec=t.dec,this.g=t.g,this.bprp=t.bprp,this.which=t.which;let r=this.count=this.ra.length;this.pos=new Float32Array(r*3);let i=new Float32Array(r),a=new Float32Array(r*3),o=new Float32Array(r);this.teff=new Float32Array(r),this.absmag=i,this.radiusKm=o;let s=hh(5),c=()=>{let e=0,t=0;for(;e===0;)e=s();for(;t===0;)t=s();return Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*t)};for(let e=0;e<r;e++){let t=ph[this.which[e]],n=t.dpc+c()*t.depthPc,r=this.ra[e]*Q,s=this.dec[e]*Q;this.pos[3*e]=n*Math.cos(s)*Math.cos(r),this.pos[3*e+1]=n*Math.cos(s)*Math.sin(r),this.pos[3*e+2]=n*Math.sin(s),i[e]=this.g[e]-t.dm;let l=cf(Math.max(-.3,Math.min(2.4,.8*this.bprp[e]-.05)));this.teff[e]=l;let[u,d,f]=ff(l);a[3*e]=u,a[3*e+1]=d,a[3*e+2]=f,o[e]=uf(lf(i[e],l),l)*Nu}let l=new Tr;l.setAttribute(`position`,new Y(this.pos,3)),l.setAttribute(`absmag`,new Y(i,1)),l.setAttribute(`color`,new Y(a,3)),l.setAttribute(`rad`,new Y(o,1)),l.boundingSphere=new _r(new q,1e30),this.mat=new Na({vertexShader:gf,fragmentShader:_f,transparent:!0,depthWrite:!1,depthTest:!0,blending:2,uniforms:{uCamPc:{value:new q},uKmPerPc:{value:Z},uPixelRatio:{value:1},uLimitMag:{value:7.5},uSizeScale:{value:7},uAllStars:{value:0},uHidePc:{value:0},uFovScale:{value:1e3}}}),this.points=new pa(l,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,e.scene.add(this.points)}setLimitMag(e){this.mat.uniforms.uLimitMag.value=e}update(e){this.points.visible=this.visible;let t=this.mat.uniforms;t.uCamPc.value.set(e.camPos[0]/Z,e.camPos[1]/Z,e.camPos[2]/Z),t.uPixelRatio.value=e.pixelRatio,t.uFovScale.value=e.pxPerRad}worldPos(e,t){return t[0]=this.pos[3*e]*Z,t[1]=this.pos[3*e+1]*Z,t[2]=this.pos[3*e+2]*Z,t}pick(e,t,n){if(!this.visible)return null;let r=t[0]/Z,i=t[1]/Z,a=t[2]/Z,o=-1,s=12,c=this.mat.uniforms.uLimitMag.value+1;for(let t=0;t<this.count;t++){let l=this.pos[3*t]-r,u=this.pos[3*t+1]-i,d=this.pos[3*t+2]-a,f=Math.sqrt(l*l+u*u+d*d),p=(l*e.x+u*e.y+d*e.z)/f;if(p<.9999)continue;let m=this.absmag[t]+5*Math.log10(f/10);if(m>c)continue;let h=Math.acos(Math.min(1,p))*n-Math.max(0,5-m);h<s&&(s=h,o=t)}return o<0?null:{sepPx:s,desc:this.describe(o)}}name(e){return`Gaia DR3 `+this.ids.slice(19*e,19*e+19).trim()}describe(e){let t=this,n=ph[this.which[e]],r=this.teff[e],i=this.absmag[e],a=lf(i,r),o=uf(a,r),s=a>2e4?`supergiant`:a>1500?`bright giant`:a>100?`giant`:`luminous star`,c=[[`Galaxy`,`${n.name} (${$(n.dpc*3.26156/1e3,3)} thousand ly)`],[`Gaia DR3 source`,this.ids.slice(19*e,19*e+19).trim()],[`Apparent magnitude (G)`,$(this.g[e],3)],[`Colour BP−RP`,$(this.bprp[e],2)],[`Absolute magnitude`,`${$(i,2)} (at the galaxy's distance)`],[`Temperature (est.)`,`${$(r,4)} K`],[`Luminosity (est.)`,`${$(a,3)} × Sun`],[`Radius (est.)`,`${$(o,3)} × Sun`],[`RA / Dec (J2000)`,`${yf(this.ra[e])} / ${bf(this.dec[e])}`]];return{kind:`star`,kindLabel:`Star in the ${n.name}`,name:this.name(e),sub:`${s} in the ${n.name}`,radius:this.radiusKm[e],rows:c,desc:`A ${s} in the ${n.name}, one of the brightest stars of that galaxy measured by ESA's Gaia mission. Its sky position, brightness and colour are measured; its exact depth within the galaxy is not, so it is placed at the galaxy's distance with a modelled spread of a few thousand light-years. Membership is inferred from its proper motion and parallax.`,source:`Gaia DR3 (ESA), gaia_source_lite, selected by proper motion and parallax within the galaxy's footprint. Temperature, luminosity and radius are estimates from colour and magnitude.`,ref:{layer:`mcstars`,index:e},getPos:(n,r)=>t.worldPos(e,r)}}labels(){}searchEntries(){return[]}};function hh(e){return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var gh=class{constructor(e,t,n){this.u=e,this.visible=!0,this.ids=n,this.pos=t.pos,this.absmag=t.absmag,this.ci=t.ci,this.mag=t.mag;let r=this.count=this.absmag.length,i=new Float32Array(r*3),a=new Float32Array(r);this.teff=new Float32Array(r),this.radiusKm=a;for(let e=0;e<r;e++){let t=cf(this.ci[e]);this.teff[e]=t;let[n,r,o]=ff(t);i[3*e]=n,i[3*e+1]=r,i[3*e+2]=o,a[e]=uf(lf(this.absmag[e],t),t)*Nu}let o=new Tr;o.setAttribute(`position`,new Y(this.pos,3)),o.setAttribute(`absmag`,new Y(this.absmag,1)),o.setAttribute(`color`,new Y(i,3)),o.setAttribute(`rad`,new Y(a,1)),o.boundingSphere=new _r(new q,1e30),this.mat=new Na({vertexShader:gf,fragmentShader:_f,transparent:!0,depthWrite:!1,depthTest:!0,blending:2,uniforms:{uCamPc:{value:new q},uKmPerPc:{value:Z},uPixelRatio:{value:1},uLimitMag:{value:7.5},uSizeScale:{value:7},uAllStars:{value:0},uHidePc:{value:0},uFovScale:{value:1e3}}}),this.points=new pa(o,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,e.scene.add(this.points)}setLimitMag(e){this.mat.uniforms.uLimitMag.value=e}update(e){this.points.visible=this.visible;let t=this.mat.uniforms;t.uCamPc.value.set(e.camPos[0]/Z,e.camPos[1]/Z,e.camPos[2]/Z),t.uPixelRatio.value=e.pixelRatio,t.uFovScale.value=e.pxPerRad}worldPos(e,t){return t[0]=this.pos[3*e]*Z,t[1]=this.pos[3*e+1]*Z,t[2]=this.pos[3*e+2]*Z,t}nearestSurface(e){if(Math.hypot(e[0],e[1],e[2])/30856775814913.67<.05)return 1/0;let t=e[0]/Z,n=e[1]/Z,r=e[2]/Z,i=1/0;for(let e=0;e<this.count;e++){let a=this.pos[3*e]-t;if(a>.05||a<-.05)continue;let o=this.pos[3*e+1]-n;if(o>.05||o<-.05)continue;let s=this.pos[3*e+2]-r;if(s>.05||s<-.05)continue;let c=Math.sqrt(a*a+o*o+s*s)*Z-this.radiusKm[e];c<i&&(i=c)}return i}pick(e,t,n){if(!this.visible)return null;let r=t[0]/Z,i=t[1]/Z,a=t[2]/Z,o=-1,s=10,c=this.mat.uniforms.uLimitMag.value+1;for(let t=0;t<this.count;t++){let l=this.pos[3*t]-r,u=this.pos[3*t+1]-i,d=this.pos[3*t+2]-a,f=Math.sqrt(l*l+u*u+d*d),p=(l*e.x+u*e.y+d*e.z)/f;if(p<.9999)continue;let m=this.absmag[t]+5*Math.log10(f/10);if(m>c)continue;let h=Math.acos(Math.min(1,p))*n-Math.max(0,6-m);h<s&&(s=h,o=t)}return o<0?null:{sepPx:s,desc:this.describe(o)}}name(e){return`Gaia DR3 `+this.ids.slice(19*e,19*e+19).trim()}describe(e){let t=this,n=this.teff[e],r=this.absmag[e],i=lf(r,n),a=uf(i,n),o=Math.hypot(this.pos[3*e],this.pos[3*e+1],this.pos[3*e+2]),s=(Math.atan2(this.pos[3*e+1],this.pos[3*e])/Q+360)%360,c=Math.asin(this.pos[3*e+2]/o)/Q,l=n>3e4?`O`:n>1e4?`B`:n>7500?`A`:n>6e3?`F`:n>5200?`G`:n>3700?`K`:`M`,u=[[`Designation`,this.name(e)],[`Distance`,`${$(o*3.26156)} ly (${$(o)} pc), from the Gaia parallax`],[`Apparent magnitude (G)`,$(this.mag[e],3)],[`Absolute magnitude`,$(r,2)],[`Temperature (est.)`,`${$(n,4)} K (${l}-type)`],[`Luminosity (est.)`,`${$(i,3)} × Sun`],[`Radius (est.)`,`${$(a,3)} × Sun`],[`RA / Dec (J2000)`,`${yf(s)} / ${bf(c)}`]];return{kind:`star`,kindLabel:`Star (Gaia DR3)`,name:this.name(e),sub:`${l}-type star · ${$(o*3.26156,3)} ly`,radius:this.radiusKm[e],rows:u,desc:`A ${pf(l)||`star`} ${$(o*3.26156,3)} light-years away, measured by ESA's Gaia mission. Its distance comes from Gaia's parallax; temperature, luminosity and radius are estimates from its colour and brightness.`,source:`Gaia DR3 (ESA), gaia_source_lite: G < 11, parallax signal-to-noise > 5.`,ref:{layer:`gaia`,index:e},getPos:(n,r)=>t.worldPos(e,r)}}labels(){}searchEntries(){return[]}},_h={stellar:`Black hole (stellar-mass)`,imbh:`Black hole (intermediate-mass candidate)`,smbh:`Supermassive black hole`},vh=`
  attribute float kind; attribute float alpha;
  uniform vec3 uCam; uniform float uPixelRatio;
  varying float vKind; varying float vAlpha;
  #include <common>
  #include <logdepthbuf_pars_vertex>
  void main() {
    vec3 rel = position - uCam;
    vKind = kind; vAlpha = alpha;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(rel, 1.0);
    if (alpha <= 0.001) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = (kind > 1.5 ? 11.0 : 7.0) * uPixelRatio * (0.6 + 0.4 * alpha);
    #include <logdepthbuf_vertex>
  }`,yh=`
  varying float vKind; varying float vAlpha;
  #include <logdepthbuf_pars_fragment>
  void main() {
    #include <logdepthbuf_fragment>
    float r = length(gl_PointCoord - 0.5) * 2.0;
    // black disc with a thin orange-white ring: an "event horizon" glyph
    float ring = smoothstep(0.42, 0.52, r) * (1.0 - smoothstep(0.72, 0.85, r));
    vec3 c = vKind > 1.5 ? vec3(1.0, 0.72, 0.35) : vKind > 0.5 ? vec3(0.8, 0.6, 1.0) : vec3(0.55, 0.8, 1.0);
    float disc = 1.0 - smoothstep(0.38, 0.46, r);
    float a = max(ring, disc * 0.9) * vAlpha;
    if (a < 0.02) discard;
    gl_FragColor = vec4(c * ring * vAlpha, a);
  }`,bh=`
  varying vec2 vUv;
  #include <common>
  #include <logdepthbuf_pars_vertex>
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  #include <logdepthbuf_vertex>
  }`,xh=`
  varying vec2 vUv; uniform float uTime; uniform float uInner;
  #include <logdepthbuf_pars_fragment>
  void main() {
    #include <logdepthbuf_fragment>
    vec2 p = vUv * 2.0 - 1.0; float r = length(p); float ang = atan(p.y, p.x);
    if (r < uInner || r > 1.0) discard;
    float t = (r - uInner) / (1.0 - uInner);
    float lanes = 0.75 + 0.25 * sin(ang * 9.0 + r * 40.0 - uTime * 1.5) * sin(ang * 3.0 - r * 25.0 + uTime);
    float heat = pow(1.0 - t, 1.6);
    vec3 col = mix(vec3(1.0, 0.35, 0.05), vec3(1.0, 0.95, 0.8), heat);
    float a = heat * lanes * (1.0 - smoothstep(0.85, 1.0, r)) * smoothstep(uInner, uInner + 0.03, r);
    gl_FragColor = vec4(col * a * 1.4, a);
  }`,Sh=class{constructor(e){this.group=new wn,this.group.visible=!1,e.add(this.group),this.horizon=new pi(new Ca(1,48,32),new ti({color:0})),this.photon=new pi(new wa(1,.03,8,96),new ti({color:16769200,transparent:!0,opacity:.9,blending:2,depthWrite:!1})),this.discMat=new Na({vertexShader:bh,fragmentShader:xh,transparent:!0,depthWrite:!1,blending:2,side:2,uniforms:{uTime:{value:0},uInner:{value:.25}}}),this.disc=new pi(new xa(2,2,1,1),this.discMat),this.glow=new pi(new Ca(1,24,16),new ti({color:16752720,transparent:!0,opacity:.08,blending:2,depthWrite:!1,side:1})),this.group.add(this.horizon,this.photon,this.disc,this.glow),this.seed=-1}hide(){this.group.visible=!1}show(e,t,n,r,i){this.group.position.set(e,t,n),this.group.visible=!0,this.horizon.scale.setScalar(r),this.photon.scale.setScalar(r*2.6),this.disc.scale.setScalar(r*12),this.discMat.uniforms.uInner.value=3/12,this.discMat.uniforms.uTime.value=performance.now()*.001,this.glow.scale.setScalar(r*4),this.seed!==i&&(this.seed=i,this.disc.rotation.set(1.22+.4*(i*7%5)/5,0,i*13%7/7)),this.photon.lookAt(-e,-t,-n)}},Ch=class{constructor(e,t,n){this.u=e,this.visible=!0,this.items=t;let r=this.count=t.length;this.pos=new Float64Array(r*3);let i=new Float32Array(r*3),a=new Float32Array(r);this.alpha=new Float32Array(r).fill(1);let o=new Map,s=(e,t)=>Math.floor(e*4)+4e3*Math.floor((t+90)*4);n&&n.items.forEach((e,t)=>{if(e.t===`G`||e.t===`GPair`||e.t===`QSO`){let n=s(e.ra,e.dec);o.has(n)||o.set(n,[]),o.get(n).push(t)}});for(let e=0;e<r;e++){let r=t[e],c=r.d;if(r.hostIndex=-1,r.kind===`smbh`&&n){let e=Math.cos(r.dec*Q),t=-1,i=.5/60;for(let a=-1;a<=1;a++)for(let c=-1;c<=1;c++){let l=o.get(s(r.ra+a*.25,r.dec+c*.25));if(l)for(let a of l){let o=n.items[a],s=Math.hypot((o.ra-r.ra)*e,o.dec-r.dec);s<i&&(i=s,t=a)}}if(t>=0){let e=n.items[t];r.hostIndex=t,r.hostName=n.displayName(e),(e.dq===`c`||e.dq===`z`||e.dq===`e`)&&(c=e.d)}}r.dpc=c;let l=r.ra*Q,u=r.dec*Q,d=c*Z,f=Math.cos(u),p=f*Math.cos(l)*d,m=f*Math.sin(l)*d,h=Math.sin(u)*d;this.pos[3*e]=p,this.pos[3*e+1]=m,this.pos[3*e+2]=h,i[3*e]=p,i[3*e+1]=m,i[3*e+2]=h,a[e]=r.kind===`smbh`?2:+(r.kind===`imbh`),r.rsKm=r.rs||(r.kind===`smbh`?3e7:30)}let c=new Tr;c.setAttribute(`position`,new Y(i,3)),c.setAttribute(`kind`,new Y(a,1)),c.setAttribute(`alpha`,new Y(this.alpha,1)),c.boundingSphere=new _r(new q,1e30),this.mat=new Na({vertexShader:vh,fragmentShader:yh,transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{uCam:{value:new q},uPixelRatio:{value:1}}}),this.points=new pa(c,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=8,e.scene.add(this.points),this.model=new Sh(e.scene),this.modelIndex=-1}update(e){if(this.points.visible=this.visible,this.model.hide(),!this.visible)return;let t=e.camPos;this.mat.uniforms.uCam.value.set(t[0],t[1],t[2]),this.mat.uniforms.uPixelRatio.value=e.pixelRatio;let n=Math.hypot(t[0],t[1],t[2])/Z,r=.75*(1-Ct.smoothstep(n,5e4,3e5)),i=Ct.smoothstep(n,1e5,1e6),a=this.u.selection?.ref?.layer===`bh`?this.u.selection.ref.index:-1,o=!1,s=-1,c=0;for(let n=0;n<this.count;n++){let l=this.items[n],u=this.pos[3*n]-t[0],d=this.pos[3*n+1]-t[1],f=this.pos[3*n+2]-t[2],p=Math.sqrt(u*u+d*d+f*f),m=l.rsKm*12/p*e.pxPerRad;m>c&&(c=m,s=n);let h=l.kind===`stellar`?r:Math.max(i,1-Ct.smoothstep(p/Z,2e6,4e6));n===a&&(h=1),h*=1-Ct.smoothstep(m,4,12),Math.abs(this.alpha[n]-h)>.001&&(this.alpha[n]=h,o=!0)}if(o&&(this.points.geometry.attributes.alpha.needsUpdate=!0),s>=0&&c>2){let e=this.items[s].rsKm,n=this.pos[3*s]-t[0],r=this.pos[3*s+1]-t[1],i=this.pos[3*s+2]-t[2];this.modelIndex=s,this.model.show(n,r,i,e,s)}}worldPos(e,t){return t[0]=this.pos[3*e],t[1]=this.pos[3*e+1],t[2]=this.pos[3*e+2],t}nearestSurface(e){let t=1/0;for(let n=0;n<this.count;n++){let r=Math.hypot(this.pos[3*n]-e[0],this.pos[3*n+1]-e[1],this.pos[3*n+2]-e[2])-this.items[n].rsKm;r<t&&(t=r)}return t}pick(e,t,n){if(!this.visible)return null;let r=-1,i=12;for(let a=0;a<this.count;a++){if(this.alpha[a]<.05&&a!==this.modelIndex)continue;let o=this.pos[3*a]-t[0],s=this.pos[3*a+1]-t[1],c=this.pos[3*a+2]-t[2],l=Math.sqrt(o*o+s*s+c*c),u=(o*e.x+s*e.y+c*e.z)/l;if(u<.999)continue;let d=Math.min(200,this.items[a].rsKm*12/l*n),f=Math.max(0,Math.acos(Math.min(1,u))*n-d);f<i&&(i=f,r=a)}return r<0?null:{sepPx:i,desc:this.describe(r)}}describe(e){let t=this,n=this.items[e],r=n.rsKm,i=n.dpc*3.26156,a=n.massText?`${n.massText} solar masses`:`not measured`,o=[[`Type`,_h[n.kind]],[`Mass`,a],[`How the mass was measured`,n.method||`—`],[`Schwarzschild radius`,n.mass?`${Ru(r)} (event-horizon radius for a non-rotating hole)`:`unknown mass — drawn with a nominal ${Ru(r)} horizon`],[`Distance`,`${Ru(n.dpc*Z)}${n.dq===`u`?` — distance unknown, placed at a nominal value`:``}${n.hostIndex>=0?` (host galaxy catalogue distance)`:``}`]];(n.hostName||n.host)&&o.push([`Host`,n.hostName||n.host]),n.spec&&o.push([`Companion star`,n.spec]),n.porb&&o.push([`Orbital period`,/[a-z]/.test(n.porb)?n.porb:`${n.porb} days`]),n.year&&o.push([`Discovered`,n.year]),n.aka?.length&&o.push([`Other names`,n.aka.join(`, `)]),o.push([`RA / Dec (J2000)`,`${yf(n.ra)} / ${bf(n.dec)}`]);let s=n.kind===`smbh`?`the supermassive black hole at the heart of ${n.hostName||n.host||`its galaxy`}`:n.kind===`imbh`?`a candidate intermediate-mass black hole`:n.spec?`a stellar-mass black hole pulling gas from a ${n.spec}-type companion star`:`a stellar-mass black hole in a binary system`;return{kind:`blackhole`,kindLabel:_h[n.kind],name:n.n,sub:`${_h[n.kind]} · ${$(i,3)} ly`,radius:r*12,rows:o,desc:n.desc||`${n.n} is ${s}, ${$(i,3)} light-years away.${n.mass?` With ${a}, its event horizon would be ${Ru(r)} across in radius.`:``} Nothing of the hole itself can be seen — what glows is the accretion disc of infalling matter, drawn here to scale around a horizon of the measured size.`,source:n.src,wiki:[n.n,...n.aka||[]],ref:{layer:`bh`,index:e},getPos:(n,r)=>t.worldPos(e,r),faceFrom:[0,0,0]}}labels(e,t){if(!this.visible)return;let n=e.camPos,r=e.forward;for(let i=0;i<this.count;i++){if(this.alpha[i]<.3&&i!==this.modelIndex)continue;let a=this.pos[3*i]-n[0],o=this.pos[3*i+1]-n[1],s=this.pos[3*i+2]-n[2],c=Math.sqrt(a*a+o*o+s*s);(a*r.x+o*r.y+s*r.z)/c<e.cosHalfFov||t.push({text:this.items[i].n,x:a,y:o,z:s,cls:`bh`,prio:this.items[i].kind===`smbh`?30:22,ref:{layer:`bh`,index:i}})}}searchEntries(){return this.items.map((e,t)=>({name:e.n,alt:(e.aka||[]).join(` `),kind:`black hole`,ref:{layer:`bh`,index:t}}))}byName(e){let t=e.toLowerCase();return this.items.findIndex(e=>e.n.toLowerCase()===t||(e.aka||[]).some(e=>e.toLowerCase()===t))}},wh=[`quasar (type-I, broad-line)`,`AGN (type-I Seyfert, host-dominated)`,`BL Lac object (blazar)`,`narrow-line quasar (type II)`,`narrow-line AGN (type-II Seyfert)`],Th=299792.458/70,Eh=977.8/70,Dh={DR16Q:`SDSS DR16 quasar catalogue (Lyke+ 2020), spectroscopic`,DR16:`SDSS DR16 spectroscopy`,DR17:`SDSS DR17 spectroscopy`,DR18Q:`SDSS DR18 quasar catalogue`,DR14Q:`SDSS DR14 quasar catalogue`,DR16QN:`SDSS DR16 quasar catalogue (new)`,DESEDR:`DESI Early Data Release spectroscopy`,DESVI:`DESI visual-inspection catalogue`,"2QZ":`2dF QSO Redshift Survey`,"2SLAQ":`2dF-SDSS LRG and QSO survey`,LOZAGN:`low-redshift AGN compilation (spectroscopic)`,LAMQ1:`LAMOST quasar survey DR1`,LAMQ3:`LAMOST quasar survey DR2-3`,LAMQ5:`LAMOST quasar survey DR4-5`,LAMQ9:`LAMOST quasar survey DR6-9`,"2MAGN":`2MASS-selected AGN spectroscopy`,"6dAGN":`6dF Galaxy Survey AGN`,AAOz:`AAOmega spectroscopy`,OzDES2:`OzDES survey`,AGES:`AGN and Galaxy Evolution Survey`,HETDEX:`HETDEX survey`,RLAGN:`radio-loud AGN spectroscopy`,DPeake:`Peake+ AGN spectroscopy`},Oh=295e7,kh=`
  attribute float qmag; attribute float qtype;
  uniform vec3 uCam; uniform float uPixelRatio; uniform float uDim; uniform float uFovScale; uniform vec3 uHide;
  varying vec3 vColor; varying float vAlpha;
  #include <common>
  #include <logdepthbuf_pars_vertex>
  void main() {
    vec3 rel = position - uCam;
    float d = length(rel * 1e-12) * 1e12;
    // colour by class: quasars blue-white, Seyferts warm white, blazars violet, narrow-line objects orange
    vec3 c = qtype < 0.5 ? vec3(0.75, 0.85, 1.0) : qtype < 1.5 ? vec3(1.0, 0.95, 0.85) : qtype < 2.5 ? vec3(0.8, 0.6, 1.0) : vec3(1.0, 0.75, 0.5);
    float bright = qmag <= 0.0 ? 0.5 : clamp((21.0 - qmag) / 6.0, 0.3, 1.4);
    float s = (1.6 + 1.2 * bright) * uPixelRatio;
    // grow into a soft disc when the camera comes within a few million light-years
    float px = 3e19 / d * uFovScale; s = max(s, min(px, 40.0));
    vColor = c * bright; vAlpha = uDim;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(rel, 1.0);
    if (all(equal(position, uHide))) gl_Position = vec4(2.0, 2.0, 2.0, 1.0); // the focused quasar is drawn exactly by the close-range model
    gl_PointSize = s;
    #include <logdepthbuf_vertex>
  }`,Ah=`
  varying vec3 vColor; varying float vAlpha;
  #include <logdepthbuf_pars_fragment>
  void main() {
    #include <logdepthbuf_fragment>
    vec2 c = gl_PointCoord - 0.5; float r2 = dot(c, c) * 4.0;
    float a = exp(-r2 * 4.0) * vAlpha;
    gl_FragColor = vec4(vColor * a, a);
  }`,jh=class{constructor(e,t,n,r=``){this.u=e,this.visible=!0,this.ra=t.ra,this.dec=t.dec,this.z=t.z,this.magRaw=t.mag,this.type=t.type,this.src=t.src,this.sources=r.split(`
`);let i=this.count=this.z.length,a=4e3;this.dcTab=new Float64Array(4001),this.ltTab=new Float64Array(4001);for(let e=1;e<=a;e++){let t=(e-.5)*8/a,n=Math.sqrt(.3*(1+t)**3+.7);this.dcTab[e]=this.dcTab[e-1]+8/a/n,this.ltTab[e]=this.ltTab[e-1]+8/a/((1+t)*n)}this.pos=new Float64Array(i*3);let o=new Float32Array(i*3),s=new Float32Array(i),c=new Float32Array(i);for(let e=0;e<i;e++){let t=this.comovingMpc(this.z[e])*Au,n=this.ra[e]*Q,r=this.dec[e]*Q,i=Math.cos(r),a=i*Math.cos(n)*t,l=i*Math.sin(n)*t,u=Math.sin(r)*t;this.pos[3*e]=a,this.pos[3*e+1]=l,this.pos[3*e+2]=u,o[3*e]=a,o[3*e+1]=l,o[3*e+2]=u,s[e]=this.magRaw[e]?this.magRaw[e]/10:0,c[e]=this.type[e]}this.names=new Map;for(let e of n.split(`
`)){let t=e.indexOf(`	`);t>0&&this.names.set(+e.slice(0,t),e.slice(t+1))}this.named=[...this.names.keys()].filter(e=>s[e]>0&&s[e]<17.5).sort((e,t)=>s[e]-s[t]);let l=new Tr;l.setAttribute(`position`,new Y(o,3)),l.setAttribute(`qmag`,new Y(s,1)),l.setAttribute(`qtype`,new Y(c,1)),l.boundingSphere=new _r(new q,1e30),this.mat=new Na({vertexShader:kh,fragmentShader:Ah,transparent:!0,depthWrite:!1,depthTest:!0,blending:2,uniforms:{uCam:{value:new q},uPixelRatio:{value:1},uDim:{value:1},uFovScale:{value:1e3},uHide:{value:new q(NaN,NaN,NaN)}}}),this.pos32=o,this.model=new Sh(e.scene),this.modelIndex=-1,this.points=new pa(l,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=1,e.scene.add(this.points),this.rel=new Float32Array(3)}comovingMpc(e){let t=4e3,n=Math.min(t,e/8*t),r=Math.floor(n),i=n-r;return Th*(this.dcTab[r]*(1-i)+this.dcTab[Math.min(t,r+1)]*i)}lookbackGyr(e){let t=4e3,n=Math.min(t,e/8*t),r=Math.floor(n),i=n-r;return Eh*(this.ltTab[r]*(1-i)+this.ltTab[Math.min(t,r+1)]*i)}update(e){if(this.points.visible=this.visible,!this.visible)return;let t=this.mat.uniforms,n=e.camPos;t.uCam.value.set(n[0],n[1],n[2]),t.uPixelRatio.value=e.pixelRatio,t.uFovScale.value=e.pxPerRad;let r=Math.hypot(n[0],n[1],n[2])/Au;t.uDim.value=.22+.78*Ct.smoothstep(r,1,60),this.model.hide(),t.uHide.value.set(NaN,NaN,NaN);let i=e.rig,a=i.focus?.ref?.layer===`quasars`?i.focus.ref:this.u.selection?.ref?.layer===`quasars`?this.u.selection.ref:null;if(a){let r=a.index,i=this.pos[3*r]-n[0],o=this.pos[3*r+1]-n[1],s=this.pos[3*r+2]-n[2],c=Math.sqrt(i*i+o*o+s*s),l=Oh;l*12/c*e.pxPerRad>1.5&&(this.model.show(i,o,s,l,r),t.uHide.value.set(this.pos32[3*r],this.pos32[3*r+1],this.pos32[3*r+2]))}}worldPos(e,t){return t[0]=this.pos[3*e],t[1]=this.pos[3*e+1],t[2]=this.pos[3*e+2],t}name(e){let t=this.names.get(e);if(t)return t;let n=this.ra[e]/15,r=this.dec[e],i=Math.floor(n),a=Math.floor((n-i)*60),o=((n-i)*60-a)*60,s=Math.abs(r),c=Math.floor(s),l=Math.floor((s-c)*60),u=((s-c)*60-l)*60;return`MQ J${String(i).padStart(2,`0`)}${String(a).padStart(2,`0`)}${o.toFixed(1).padStart(4,`0`)}${r<0?`-`:`+`}${String(c).padStart(2,`0`)}${String(l).padStart(2,`0`)}${u.toFixed(0).padStart(2,`0`)}`}pick(e,t,n){if(!this.visible)return null;let r=t[0],i=t[1],a=t[2],o=-1,s=8,c=this.pos;for(let t=0;t<this.count;t++){let l=c[3*t]-r,u=c[3*t+1]-i,d=c[3*t+2]-a,f=Math.sqrt(l*l+u*u+d*d),p=(l*e.x+u*e.y+d*e.z)/f;if(p<.99995)continue;let m=Math.acos(Math.min(1,p))*n;m<s&&(s=m,o=t)}return o<0?null:{sepPx:s+1,desc:this.describe(o)}}describe(e){let t=this,n=this.z[e],r=this.comovingMpc(n),i=r*3.26156/1e3,a=this.lookbackGyr(n),o=this.type[e],s=this.magRaw[e]?this.magRaw[e]/10:null,c=this.name(e),l=[[`Class`,wh[o]||`active galactic nucleus`],[`Redshift z`,$(n,4)],[`Comoving distance`,`${$(i,3)} billion ly (${$(r,4)} Mpc)`],[`Light travel time`,`${$(a,3)} billion years — seen as it was ${$(a,3)} Gyr ago`],[`Red magnitude`,s?$(s,2):`not measured`],[`RA / Dec (J2000)`,`${yf(this.ra[e])} / ${bf(this.dec[e])}`],[`Redshift source`,(()=>{let t=this.src?this.sources[this.src[e]]:``;return Dh[t]||(t?`${t} (literature reference indexed in Milliquas), spectroscopic`:`spectroscopic (Milliquas)`)})()],[`Position`,`catalogued sky position (0.1″ level) and spectroscopic redshift; distance = comoving distance in the cosmology below. Zoomed out, the wedge shapes are the footprints of the surveys that took spectra (SDSS covers the north galactic cap; DESI, 2QZ and LAMOST add strips), not structure in the universe; the Milky Way dust lane hides the galactic plane`],[`Cosmology`,`flat ΛCDM, H₀ = 70 km/s/Mpc, Ωm = 0.3 (comoving position)`],[`Black hole`,`mass not in this catalogue — up close it is drawn with a nominal 1-billion-solar-mass horizon (radius 3 billion km) and accretion disc`]];return{kind:`quasar`,kindLabel:`Quasar / active galactic nucleus`,name:c,sub:`${wh[o]?wh[o].split(` (`)[0]:`AGN`} · z = ${$(n,3)} · ${$(i,2)} Gly`,radius:Oh*12,rows:l,desc:`${c} is a ${wh[o]||`active galaxy`}: a supermassive black hole at the centre of a galaxy, feeding fast enough to outshine its host. Its light has travelled ${$(a,3)} billion years to reach us. Drawn as a point: at this distance only its accretion-disc glow is visible.`,source:`Million Quasars catalogue v8 (Flesch 2023, OJAp 6, 49) via CDS VII/294 — only objects with spectroscopic redshifts are placed; photometric estimates are excluded.`,wiki:this.names.has(e)?[c]:[],ref:{layer:`quasars`,index:e},getPos:(n,r)=>t.worldPos(e,r),faceFrom:[0,0,0]}}labels(e,t,n){if(!this.visible||e.labelDensity<=0)return;let r=e.camPos,i=e.forward,a=Math.round(20+200*e.labelDensity),o=0;for(let n of this.named){let s=this.pos[3*n]-r[0],c=this.pos[3*n+1]-r[1],l=this.pos[3*n+2]-r[2],u=Math.sqrt(s*s+c*c+l*l);if(!((s*i.x+c*i.y+l*i.z)/u<e.cosHalfFov)&&(t.push({text:this.names.get(n),x:s,y:c,z:l,cls:`quasar`,prio:6,ref:{layer:`quasars`,index:n}}),++o>=a))break}}searchEntries(){return this.named.slice(0,2e4).map(e=>({name:this.names.get(e),kind:`quasar`,ref:{layer:`quasars`,index:e}}))}nearestSurface(){return 1/0}byName(e){let t=e.toLowerCase();for(let[e,n]of this.names)if(n.toLowerCase()===t)return e;return-1}},Mh=class{constructor(e){this.canvas=e,this.renderer=new xu({canvas:e,antialias:!0,logarithmicDepthBuffer:!0,powerPreference:`high-performance`}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(0,1),this.renderer.outputColorSpace=Pe,this.scene=new Mn,this.camera=new ko(50,1,.001,1e24),this.rig=new Du(this.camera,e),this.time=new Vu,this.labels=new Uu(document.getElementById(`labels`),this.camera),this.labelDensity=.6,this.layers={},this.selection=null,this.ui=new Jd(this),this._resize(),window.addEventListener(`resize`,()=>this._resize()),this._bindPicking(),this._last=performance.now(),this.ctx={camPos:this.rig.pos,jd:this.time.jd,time:this.time,rig:this.rig,pixelRatio:this.renderer.getPixelRatio(),pxPerRad:1e3,forward:new q,cosHalfFov:.5,labelDensity:.6}}_resize(){let e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.width=e,this.height=t}init(e){let t=this.layers;t.asteroids=new ep(this,e.asteroids,e.asteroidsMeta,e.comets),t.solar=new Xf(this,e.moons,t.asteroids),t.stars=new vf(this,e.stars,e.starsMeta),t.exo=new sp(this,e.exoplanets,t.stars),t.dso=new vp(this,e.dso),t.galaxies=new Dp(this,e.mrs,e.mrsIds,t.dso),t.gmodels=new Kp(this,t.dso),t.gmodels.mrs=t.galaxies,t.volumes=new am(this,t.dso),t.mw=new Ip(this),t.sats=new Gd(this,e.satellites,t.solar),t.craft=new Bp(this,e.spacecraft,t.solar),t.con=new Hp(this,e.constellations,t.stars),t.models=new fh(this,t.sats,t.asteroids),t.mcstars=new mh(this,e.mcstars,e.mcstarsIds),t.gaia=new gh(this,e.gaia,e.gaiaIds),t.quasars=new jh(this,e.quasars,e.quasarNames,e.quasarSources),t.bh=new Ch(this,e.blackholes,t.dso),this.ui.buildSearchIndex(),t.solar.computePositions(this.time.jd);let n=t.solar.describe(t.solar.earth),r=t.solar.earth.pos,i=Math.atan2(-r[1],-r[0]);this.rig.focus=n,this.rig.dist=42e3,this.rig.yaw=i+.5,this.rig.pitch=.32,this.rig.mode=`orbit`,this.rig.update(0,this.time.jd),this.select(n,!1)}setLayerVisible(e,t){let n=this.layers;if(e===`orbits`){n.solar.showOrbits=t;return}if(e===`comets`){n.asteroids.cometsVisible=t;return}n[e]&&(n[e].visible=t)}resolveRef(e){let t=this.layers;if(!e||e.special)return null;switch(e.layer){case`stars`:if(e.proper!==void 0){for(let[n,r]of t.stars.proper)if(r===e.proper)return t.stars.describe(n);return null}return t.stars.describe(e.index);case`solar`:return t.solar.descriptorById(e.id);case`asteroids`:return t.asteroids.describe(e.index);case`comets`:return t.asteroids.describeComet(e.index);case`exo`:return e.name?t.exo.descriptorByName(e.name):null;case`dso`:if(e.name!==void 0){let n=t.dso.byName.get(e.name.toUpperCase().replace(/\s+/g,``).replace(/^([A-Z]+)0+(\d)/,`$1$2`));return n===void 0?t.dso.describe(t.dso.items.findIndex(t=>t.n===e.name||t.cn&&t.cn.split(`,`).map(e=>e.trim()).includes(e.name))):t.dso.describe(n)}return t.dso.describe(e.index);case`galaxies`:return t.galaxies.describe(e.index);case`sats`:if(e.norad!==void 0){let n=t.sats.byId.get(e.norad);return n===void 0?null:t.sats.describe(n)}return t.sats.describe(e.index);case`craft`:if(e.name!==void 0){let n=t.craft.items.findIndex(t=>t.n===e.name);return n<0?null:t.craft.describe(n)}return t.craft.describe(e.index);case`con`:return t.con.describe(e.id);case`gmodels`:return t.gmodels.describeByRef(e);case`mcstars`:return t.mcstars.describe(e.index);case`gaia`:return t.gaia.describe(e.index);case`quasars`:if(e.name!==void 0){let n=t.quasars.byName(e.name);return n<0?null:t.quasars.describe(n)}return t.quasars.describe(e.index);case`bh`:if(e.name!==void 0){let n=t.bh.byName(e.name);return n<0?null:t.bh.describe(n)}return t.bh.describe(e.index)}return null}travel(e){if(e.special===`solarsystem`){let e=this.layers.solar.describe(this.layers.solar.sun);this.select(e,!1),this.rig.goTo(e,45*Ou);return}if(e.special===`milkyway`){let e=this.resolveRef({layer:`dso`,name:`Sagittarius A*`});e&&(this.select(e,!1),this.rig.goTo(e,32e3*Z));return}if(e.special===`cosmos`){let e=this.layers.solar.describe(this.layers.solar.sun);this.select(e,!1),this.rig.goTo(e,32e9*ku);return}if(e.special===`universe`){let e=this.resolveRef({layer:`dso`,name:`Virgo Cluster`});e&&(this.select(e,!1),this.rig.goTo(e,120*Au));return}let t=this.resolveRef(e);t&&(this.select(t,!1),this.rig.goTo(t))}select(e,t=!0){this.selection=e,this.ui.showInfo(e),this.labels.selectedKey=e?Uu.key(e.ref):null,this.layers.asteroids.showOrbitFor(e),this.layers.sats.showTrack(e),this.layers.craft.showTrack(e)}_bindPicking(){let e=this.canvas,t=0,n=null;e.addEventListener(`pointerdown`,e=>{n=[e.clientX,e.clientY]}),e.addEventListener(`pointerup`,e=>{if(!n||e.button!==0)return;let r=Math.hypot(e.clientX-n[0],e.clientY-n[1]);if(n=null,r>4)return;let i=performance.now(),a=this.pick(e.clientX,e.clientY);if(i-t<320){let e=a||this.selection;e&&(this.select(e),this.rig.goTo(e)),t=0;return}t=i,a&&this.select(a)}),document.getElementById(`labels`).style.pointerEvents=`none`}pick(e,t){let n=new q(e/this.width*2-1,-(t/this.height)*2+1,.5).unproject(this.camera).normalize(),r=this.ctx.pxPerRad,i=this.rig.pos,a=this.layers,o=null,s=e=>{e&&(!o||e.sepPx<o.sepPx)&&(o=e)},c=a.stars.pick(n,i,r);return c&&c.sunHit?s({sepPx:c.sepPx,desc:a.solar.describe(a.solar.sun)}):s(c),s(a.solar.pick(n,i,r)),s(a.exo.pick(n,i,r)),s(a.dso.pick(n,i,r)),s(a.craft.pick(n,i,r)),s(a.sats.pick(n,i,r)),s(a.galaxies.pick(n,i,r)),s(a.gmodels.pick(n,i,r)),s(a.mcstars.pick(n,i,r)),s(a.gaia.pick(n,i,r)),s(a.bh.pick(n,i,r)),s(a.quasars.pick(n,i,r)),(!o||o.sepPx>4)&&s(a.asteroids.pick(n,i,r,this.time.jd)),o?o.desc:null}start(){let e=()=>{this.frame(),requestAnimationFrame(e)};requestAnimationFrame(e)}frame(){this._frames=(this._frames||0)+1;let e=performance.now(),t=(e-this._last)/1e3;this._last=e;let n=Math.min(.1,t);this.time.update(Math.min(t,5));let r=this.layers;r.solar.computePositions(this.time.jd);let i=Math.min(r.solar.nearestSurface(this.rig.pos),r.stars.nearestSurface(this.rig.pos),r.exo.nearestSurface(this.rig.pos),r.sats.nearestSurface(this.rig.pos),r.asteroids.nearestSurface(this.rig.pos),r.gaia.nearestSurface(this.rig.pos),r.bh.nearestSurface(this.rig.pos)),a=this.rig.focus;if(a){a.getPos(this.time.jd,this._fp||=[0,0,0]);let e=this.rig.distanceTo(this._fp);i=Math.min(i,Math.max(Math.abs(e-a.radius),a.radius*.06))}this.rig.nearestSurface=Math.max(.001,i),this.rig.update(n,this.time.jd);let o=this.ctx;o.jd=this.time.jd,o.pixelRatio=this.renderer.getPixelRatio(),o.labelDensity=this.labelDensity,o.pxPerRad=this.height/2/Math.tan(this.camera.fov*Q/2),o.forward.set(0,0,-1).applyQuaternion(this.camera.quaternion),o.cosHalfFov=Math.cos(Math.min(1.4,this.camera.fov*Q/2*Math.hypot(1,this.camera.aspect)+.05));for(let e of[`mw`,`galaxies`,`dso`,`gmodels`,`volumes`,`stars`,`con`,`asteroids`,`solar`,`exo`,`sats`,`craft`,`models`,`mcstars`,`gaia`,`quasars`,`bh`])r[e].update(o);let s=[];r.solar.labels(o,s),r.stars.labels(o,s,Math.round(6+30*this.labelDensity)),r.dso.labels(o,s,Math.round(4+26*this.labelDensity)),r.exo.labels(o,s),r.craft.labels(o,s),r.sats.labels(o,s),r.asteroids.labels(o,s),r.con.labels(o,s),r.mw.labels(o,s);let c=r.solar.bodies.filter(e=>e.screenPx>25).map(e=>({x:e.pos[0]-this.rig.pos[0],y:e.pos[1]-this.rig.pos[1],z:e.pos[2]-this.rig.pos[2],r:e.radius}));if(this.selection){let e=this.selection.getPos(this.time.jd,[0,0,0]);s.push({text:this.selection.name,x:e[0]-this.rig.pos[0],y:e[1]-this.rig.pos[1],z:e[2]-this.rig.pos[2],cls:`selected`,prio:5e3,ref:this.selection.ref,offsetPx:Math.min(60,this.selection.radius/Math.max(1e-9,this.rig.distanceTo(e))*o.pxPerRad)})}this.labels.render(s,this.width,this.height,c,o.pxPerRad),this.ui.updateHUD(o),this.renderer.render(this.scene,this.camera)}},Nh={Float32Array,Float64Array,Uint32Array,Uint16Array,Uint8Array,Int32Array,Int16Array};async function Ph(e,t){let n=await fetch(e);if(!n.ok)throw Error(`${e}: ${n.status}`);let r=await Lh(n,t),i=new DataView(r).getUint32(0,!0),a=JSON.parse(new TextDecoder().decode(new Uint8Array(r,4,i))),o=4+i+(8-(4+i)%8)%8,s={};for(let e of a.segments)s[e.name]=new Nh[e.type](r,o+e.offset,e.length);return s}async function Fh(e,t){let n=await fetch(e);if(!n.ok)throw Error(`${e}: ${n.status}`);let r=await Lh(n,t);return JSON.parse(new TextDecoder().decode(r))}async function Ih(e){let t=await fetch(e);if(!t.ok)throw Error(`${e}: ${t.status}`);return t.text()}async function Lh(e,t){let n=+e.headers.get(`content-length`)||0;if(!e.body||!t)return e.arrayBuffer();let r=e.body.getReader(),i=[],a=0;for(;;){let{done:e,value:o}=await r.read();if(e)break;i.push(o),a+=o.length,t(a,n)}let o=new Uint8Array(a),s=0;for(let e of i)o.set(e,s),s+=e.length;return o.buffer}var Rh=8,zh=document.getElementById(`load-fill`),Bh=document.getElementById(`load-status`),Vh=[[`stars`,`stars.bin`,Ph],[`starsMeta`,`stars_meta.json`,Fh],[`exoplanets`,`exoplanets.json`,Fh],[`constellations`,`constellations.json`,Fh],[`dso`,`dso.json`,Fh],[`mrs`,`mrs.bin`,Ph],[`mrsIds`,`mrs_ids.txt`,e=>Ih(e)],[`asteroids`,`asteroids.bin`,Ph],[`asteroidsMeta`,`asteroids_meta.json`,Fh],[`comets`,`comets.json`,Fh],[`satellites`,`satellites.json`,Fh],[`spacecraft`,`spacecraft.json`,Fh],[`moons`,`moons.json`,Fh],[`mcstars`,`mcstars.bin`,Ph],[`mcstarsIds`,`mcstars_ids.txt`,e=>Ih(e)],[`gaia`,`gaia_bright.bin`,Ph],[`gaiaIds`,`gaia_bright_ids.txt`,e=>Ih(e)],[`quasars`,`quasars.bin`,Ph],[`quasarNames`,`quasar_names.txt`,e=>Ih(e)],[`quasarSources`,`quasar_sources.txt`,e=>Ih(e)],[`blackholes`,`blackholes.json`,Fh]];async function Hh(){let e={},t=0,n={},r=()=>{let e=Object.values(n).reduce((e,t)=>e+t,0)/Vh.length;zh.style.width=`${(e*100).toFixed(0)}%`};await Promise.all(Vh.map(async([i,a,o])=>{Bh.textContent=`loading ${a}`,e[i]=await o(`/Starmap/data/${a}?v=${Rh}`,(e,t)=>{n[i]=t?e/t*.95:.5,r()}),n[i]=1,t++,r()})),Bh.textContent=`building scene`,await new Promise(e=>setTimeout(e,30));let i=new Mh(document.getElementById(`gl`));i.init(e),window.universe=i,i.start(),document.getElementById(`loading`).classList.add(`done`),setTimeout(()=>document.getElementById(`loading`).remove(),800),localStorage.getItem(`starmap-help-seen`)||(document.getElementById(`help`).hidden=!1,localStorage.setItem(`starmap-help-seen`,`1`))}Hh().catch(e=>{console.error(e),Bh.textContent=`Failed: `+e.message,Bh.style.color=`#f77`});