var lt={exports:{}},P=typeof Reflect=="object"?Reflect:null,ct=P&&typeof P.apply=="function"?P.apply:function(f,c,l){return Function.prototype.apply.call(f,c,l)},W;P&&typeof P.ownKeys=="function"?W=P.ownKeys:Object.getOwnPropertySymbols?W=function(f){return Object.getOwnPropertyNames(f).concat(Object.getOwnPropertySymbols(f))}:W=function(f){return Object.getOwnPropertyNames(f)};function Gt(s){console&&console.warn&&console.warn(s)}var at=Number.isNaN||function(f){return f!==f};function x(){x.init.call(this)}lt.exports=x;lt.exports.once=Ht;x.EventEmitter=x;x.prototype._events=void 0;x.prototype._eventsCount=0;x.prototype._maxListeners=void 0;var pt=10;function G(s){if(typeof s!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof s)}Object.defineProperty(x,"defaultMaxListeners",{enumerable:!0,get:function(){return pt},set:function(s){if(typeof s!="number"||s<0||at(s))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+s+".");pt=s}});x.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};x.prototype.setMaxListeners=function(f){if(typeof f!="number"||f<0||at(f))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+f+".");return this._maxListeners=f,this};function yt(s){return s._maxListeners===void 0?x.defaultMaxListeners:s._maxListeners}x.prototype.getMaxListeners=function(){return yt(this)};x.prototype.emit=function(f){for(var c=[],l=1;l<arguments.length;l++)c.push(arguments[l]);var a=f==="error",y=this._events;if(y!==void 0)a=a&&y.error===void 0;else if(!a)return!1;if(a){var p;if(c.length>0&&(p=c[0]),p instanceof Error)throw p;var o=new Error("Unhandled error."+(p?" ("+p.message+")":""));throw o.context=p,o}var d=y[f];if(d===void 0)return!1;if(typeof d=="function")ct(d,this,c);else for(var _=d.length,I=mt(d,_),l=0;l<_;++l)ct(I[l],this,c);return!0};function wt(s,f,c,l){var a,y,p;if(G(c),y=s._events,y===void 0?(y=s._events=Object.create(null),s._eventsCount=0):(y.newListener!==void 0&&(s.emit("newListener",f,c.listener?c.listener:c),y=s._events),p=y[f]),p===void 0)p=y[f]=c,++s._eventsCount;else if(typeof p=="function"?p=y[f]=l?[c,p]:[p,c]:l?p.unshift(c):p.push(c),a=yt(s),a>0&&p.length>a&&!p.warned){p.warned=!0;var o=new Error("Possible EventEmitter memory leak detected. "+p.length+" "+String(f)+" listeners added. Use emitter.setMaxListeners() to increase limit");o.name="MaxListenersExceededWarning",o.emitter=s,o.type=f,o.count=p.length,Gt(o)}return s}x.prototype.addListener=function(f,c){return wt(this,f,c,!1)};x.prototype.on=x.prototype.addListener;x.prototype.prependListener=function(f,c){return wt(this,f,c,!0)};function Yt(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function dt(s,f,c){var l={fired:!1,wrapFn:void 0,target:s,type:f,listener:c},a=Yt.bind(l);return a.listener=c,l.wrapFn=a,a}x.prototype.once=function(f,c){return G(c),this.on(f,dt(this,f,c)),this};x.prototype.prependOnceListener=function(f,c){return G(c),this.prependListener(f,dt(this,f,c)),this};x.prototype.removeListener=function(f,c){var l,a,y,p,o;if(G(c),a=this._events,a===void 0)return this;if(l=a[f],l===void 0)return this;if(l===c||l.listener===c)--this._eventsCount===0?this._events=Object.create(null):(delete a[f],a.removeListener&&this.emit("removeListener",f,l.listener||c));else if(typeof l!="function"){for(y=-1,p=l.length-1;p>=0;p--)if(l[p]===c||l[p].listener===c){o=l[p].listener,y=p;break}if(y<0)return this;y===0?l.shift():Kt(l,y),l.length===1&&(a[f]=l[0]),a.removeListener!==void 0&&this.emit("removeListener",f,o||c)}return this};x.prototype.off=x.prototype.removeListener;x.prototype.removeAllListeners=function(f){var c,l,a;if(l=this._events,l===void 0)return this;if(l.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):l[f]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete l[f]),this;if(arguments.length===0){var y=Object.keys(l),p;for(a=0;a<y.length;++a)p=y[a],p!=="removeListener"&&this.removeAllListeners(p);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(c=l[f],typeof c=="function")this.removeListener(f,c);else if(c!==void 0)for(a=c.length-1;a>=0;a--)this.removeListener(f,c[a]);return this};function xt(s,f,c){var l=s._events;if(l===void 0)return[];var a=l[f];return a===void 0?[]:typeof a=="function"?c?[a.listener||a]:[a]:c?qt(a):mt(a,a.length)}x.prototype.listeners=function(f){return xt(this,f,!0)};x.prototype.rawListeners=function(f){return xt(this,f,!1)};x.listenerCount=function(s,f){return typeof s.listenerCount=="function"?s.listenerCount(f):Et.call(s,f)};x.prototype.listenerCount=Et;function Et(s){var f=this._events;if(f!==void 0){var c=f[s];if(typeof c=="function")return 1;if(c!==void 0)return c.length}return 0}x.prototype.eventNames=function(){return this._eventsCount>0?W(this._events):[]};function mt(s,f){for(var c=new Array(f),l=0;l<f;++l)c[l]=s[l];return c}function Kt(s,f){for(;f+1<s.length;f++)s[f]=s[f+1];s.pop()}function qt(s){for(var f=new Array(s.length),c=0;c<f.length;++c)f[c]=s[c].listener||s[c];return f}function Ht(s,f){return new Promise(function(c,l){function a(p){s.removeListener(f,y),l(p)}function y(){typeof s.removeListener=="function"&&s.removeListener("error",a),c([].slice.call(arguments))}Bt(s,f,y,{once:!0}),f!=="error"&&Vt(s,a,{once:!0})})}function Vt(s,f,c){typeof s.on=="function"&&Bt(s,"error",f,c)}function Bt(s,f,c,l){if(typeof s.on=="function")l.once?s.once(f,c):s.on(f,c);else if(typeof s.addEventListener=="function")s.addEventListener(f,function a(y){l.once&&s.removeEventListener(f,a),c(y)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof s)}var Xt={},Y={};Y.byteLength=Zt;Y.toByteArray=te;Y.fromByteArray=ne;var T=[],R=[],Jt=typeof Uint8Array<"u"?Uint8Array:Array,X="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var O=0,zt=X.length;O<zt;++O)T[O]=X[O],R[X.charCodeAt(O)]=O;R["-".charCodeAt(0)]=62;R["_".charCodeAt(0)]=63;function gt(s){var f=s.length;if(f%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var c=s.indexOf("=");c===-1&&(c=f);var l=c===f?0:4-c%4;return[c,l]}function Zt(s){var f=gt(s),c=f[0],l=f[1];return(c+l)*3/4-l}function Qt(s,f,c){return(f+c)*3/4-c}function te(s){var f,c=gt(s),l=c[0],a=c[1],y=new Jt(Qt(s,l,a)),p=0,o=a>0?l-4:l,d;for(d=0;d<o;d+=4)f=R[s.charCodeAt(d)]<<18|R[s.charCodeAt(d+1)]<<12|R[s.charCodeAt(d+2)]<<6|R[s.charCodeAt(d+3)],y[p++]=f>>16&255,y[p++]=f>>8&255,y[p++]=f&255;return a===2&&(f=R[s.charCodeAt(d)]<<2|R[s.charCodeAt(d+1)]>>4,y[p++]=f&255),a===1&&(f=R[s.charCodeAt(d)]<<10|R[s.charCodeAt(d+1)]<<4|R[s.charCodeAt(d+2)]>>2,y[p++]=f>>8&255,y[p++]=f&255),y}function ee(s){return T[s>>18&63]+T[s>>12&63]+T[s>>6&63]+T[s&63]}function re(s,f,c){for(var l,a=[],y=f;y<c;y+=3)l=(s[y]<<16&16711680)+(s[y+1]<<8&65280)+(s[y+2]&255),a.push(ee(l));return a.join("")}function ne(s){for(var f,c=s.length,l=c%3,a=[],y=16383,p=0,o=c-l;p<o;p+=y)a.push(re(s,p,p+y>o?o:p+y));return l===1?(f=s[c-1],a.push(T[f>>2]+T[f<<4&63]+"==")):l===2&&(f=(s[c-2]<<8)+s[c-1],a.push(T[f>>10]+T[f>>4&63]+T[f<<2&63]+"=")),a.join("")}var J={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */J.read=function(s,f,c,l,a){var y,p,o=a*8-l-1,d=(1<<o)-1,_=d>>1,I=-7,A=c?a-1:0,b=c?-1:1,U=s[f+A];for(A+=b,y=U&(1<<-I)-1,U>>=-I,I+=o;I>0;y=y*256+s[f+A],A+=b,I-=8);for(p=y&(1<<-I)-1,y>>=-I,I+=l;I>0;p=p*256+s[f+A],A+=b,I-=8);if(y===0)y=1-_;else{if(y===d)return p?NaN:(U?-1:1)*(1/0);p=p+Math.pow(2,l),y=y-_}return(U?-1:1)*p*Math.pow(2,y-l)};J.write=function(s,f,c,l,a,y){var p,o,d,_=y*8-a-1,I=(1<<_)-1,A=I>>1,b=a===23?Math.pow(2,-24)-Math.pow(2,-77):0,U=l?0:y-1,k=l?1:-1,D=f<0||f===0&&1/f<0?1:0;for(f=Math.abs(f),isNaN(f)||f===1/0?(o=isNaN(f)?1:0,p=I):(p=Math.floor(Math.log(f)/Math.LN2),f*(d=Math.pow(2,-p))<1&&(p--,d*=2),p+A>=1?f+=b/d:f+=b*Math.pow(2,1-A),f*d>=2&&(p++,d/=2),p+A>=I?(o=0,p=I):p+A>=1?(o=(f*d-1)*Math.pow(2,a),p=p+A):(o=f*Math.pow(2,A-1)*Math.pow(2,a),p=0));a>=8;s[c+U]=o&255,U+=k,o/=256,a-=8);for(p=p<<a|o,_+=a;_>0;s[c+U]=p&255,U+=k,p/=256,_-=8);s[c+U-k]|=D*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(s){const f=Y,c=J,l=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;s.Buffer=o,s.SlowBuffer=Ft,s.INSPECT_MAX_BYTES=50;const a=2147483647;s.kMaxLength=a,o.TYPED_ARRAY_SUPPORT=y(),!o.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function y(){try{const r=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(r,t),r.foo()===42}catch{return!1}}Object.defineProperty(o.prototype,"parent",{enumerable:!0,get:function(){if(!!o.isBuffer(this))return this.buffer}}),Object.defineProperty(o.prototype,"offset",{enumerable:!0,get:function(){if(!!o.isBuffer(this))return this.byteOffset}});function p(r){if(r>a)throw new RangeError('The value "'+r+'" is invalid for option "size"');const t=new Uint8Array(r);return Object.setPrototypeOf(t,o.prototype),t}function o(r,t,e){if(typeof r=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return A(r)}return d(r,t,e)}o.poolSize=8192;function d(r,t,e){if(typeof r=="string")return b(r,t);if(ArrayBuffer.isView(r))return k(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(C(r,ArrayBuffer)||r&&C(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(C(r,SharedArrayBuffer)||r&&C(r.buffer,SharedArrayBuffer)))return D(r,t,e);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const n=r.valueOf&&r.valueOf();if(n!=null&&n!==r)return o.from(n,t,e);const i=It(r);if(i)return i;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return o.from(r[Symbol.toPrimitive]("string"),t,e);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}o.from=function(r,t,e){return d(r,t,e)},Object.setPrototypeOf(o.prototype,Uint8Array.prototype),Object.setPrototypeOf(o,Uint8Array);function _(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function I(r,t,e){return _(r),r<=0?p(r):t!==void 0?typeof e=="string"?p(r).fill(t,e):p(r).fill(t):p(r)}o.alloc=function(r,t,e){return I(r,t,e)};function A(r){return _(r),p(r<0?0:K(r)|0)}o.allocUnsafe=function(r){return A(r)},o.allocUnsafeSlow=function(r){return A(r)};function b(r,t){if((typeof t!="string"||t==="")&&(t="utf8"),!o.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const e=z(r,t)|0;let n=p(e);const i=n.write(r,t);return i!==e&&(n=n.slice(0,i)),n}function U(r){const t=r.length<0?0:K(r.length)|0,e=p(t);for(let n=0;n<t;n+=1)e[n]=r[n]&255;return e}function k(r){if(C(r,Uint8Array)){const t=new Uint8Array(r);return D(t.buffer,t.byteOffset,t.byteLength)}return U(r)}function D(r,t,e){if(t<0||r.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<t+(e||0))throw new RangeError('"length" is outside of buffer bounds');let n;return t===void 0&&e===void 0?n=new Uint8Array(r):e===void 0?n=new Uint8Array(r,t):n=new Uint8Array(r,t,e),Object.setPrototypeOf(n,o.prototype),n}function It(r){if(o.isBuffer(r)){const t=K(r.length)|0,e=p(t);return e.length===0||r.copy(e,0,0,t),e}if(r.length!==void 0)return typeof r.length!="number"||V(r.length)?p(0):U(r);if(r.type==="Buffer"&&Array.isArray(r.data))return U(r.data)}function K(r){if(r>=a)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a.toString(16)+" bytes");return r|0}function Ft(r){return+r!=r&&(r=0),o.alloc(+r)}o.isBuffer=function(t){return t!=null&&t._isBuffer===!0&&t!==o.prototype},o.compare=function(t,e){if(C(t,Uint8Array)&&(t=o.from(t,t.offset,t.byteLength)),C(e,Uint8Array)&&(e=o.from(e,e.offset,e.byteLength)),!o.isBuffer(t)||!o.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let n=t.length,i=e.length;for(let u=0,h=Math.min(n,i);u<h;++u)if(t[u]!==e[u]){n=t[u],i=e[u];break}return n<i?-1:i<n?1:0},o.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(t.length===0)return o.alloc(0);let n;if(e===void 0)for(e=0,n=0;n<t.length;++n)e+=t[n].length;const i=o.allocUnsafe(e);let u=0;for(n=0;n<t.length;++n){let h=t[n];if(C(h,Uint8Array))u+h.length>i.length?(o.isBuffer(h)||(h=o.from(h)),h.copy(i,u)):Uint8Array.prototype.set.call(i,h,u);else if(o.isBuffer(h))h.copy(i,u);else throw new TypeError('"list" argument must be an Array of Buffers');u+=h.length}return i};function z(r,t){if(o.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||C(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);const e=r.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&e===0)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":return H(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return e*2;case"hex":return e>>>1;case"base64":return ht(r).length;default:if(i)return n?-1:H(r).length;t=(""+t).toLowerCase(),i=!0}}o.byteLength=z;function At(r,t,e){let n=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((e===void 0||e>this.length)&&(e=this.length),e<=0)||(e>>>=0,t>>>=0,e<=t))return"";for(r||(r="utf8");;)switch(r){case"hex":return Mt(this,t,e);case"utf8":case"utf-8":return tt(this,t,e);case"ascii":return Nt(this,t,e);case"latin1":case"binary":return St(this,t,e);case"base64":return Tt(this,t,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return vt(this,t,e);default:if(n)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),n=!0}}o.prototype._isBuffer=!0;function S(r,t,e){const n=r[t];r[t]=r[e],r[e]=n}o.prototype.swap16=function(){const t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)S(this,e,e+1);return this},o.prototype.swap32=function(){const t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)S(this,e,e+3),S(this,e+1,e+2);return this},o.prototype.swap64=function(){const t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)S(this,e,e+7),S(this,e+1,e+6),S(this,e+2,e+5),S(this,e+3,e+4);return this},o.prototype.toString=function(){const t=this.length;return t===0?"":arguments.length===0?tt(this,0,t):At.apply(this,arguments)},o.prototype.toLocaleString=o.prototype.toString,o.prototype.equals=function(t){if(!o.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t?!0:o.compare(this,t)===0},o.prototype.inspect=function(){let t="";const e=s.INSPECT_MAX_BYTES;return t=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(t+=" ... "),"<Buffer "+t+">"},l&&(o.prototype[l]=o.prototype.inspect),o.prototype.compare=function(t,e,n,i,u){if(C(t,Uint8Array)&&(t=o.from(t,t.offset,t.byteLength)),!o.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(e===void 0&&(e=0),n===void 0&&(n=t?t.length:0),i===void 0&&(i=0),u===void 0&&(u=this.length),e<0||n>t.length||i<0||u>this.length)throw new RangeError("out of range index");if(i>=u&&e>=n)return 0;if(i>=u)return-1;if(e>=n)return 1;if(e>>>=0,n>>>=0,i>>>=0,u>>>=0,this===t)return 0;let h=u-i,w=n-e;const B=Math.min(h,w),m=this.slice(i,u),g=t.slice(e,n);for(let E=0;E<B;++E)if(m[E]!==g[E]){h=m[E],w=g[E];break}return h<w?-1:w<h?1:0};function Z(r,t,e,n,i){if(r.length===0)return-1;if(typeof e=="string"?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,V(e)&&(e=i?0:r.length-1),e<0&&(e=r.length+e),e>=r.length){if(i)return-1;e=r.length-1}else if(e<0)if(i)e=0;else return-1;if(typeof t=="string"&&(t=o.from(t,n)),o.isBuffer(t))return t.length===0?-1:Q(r,t,e,n,i);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(r,t,e):Uint8Array.prototype.lastIndexOf.call(r,t,e):Q(r,[t],e,n,i);throw new TypeError("val must be string, number or Buffer")}function Q(r,t,e,n,i){let u=1,h=r.length,w=t.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(r.length<2||t.length<2)return-1;u=2,h/=2,w/=2,e/=2}function B(g,E){return u===1?g[E]:g.readUInt16BE(E*u)}let m;if(i){let g=-1;for(m=e;m<h;m++)if(B(r,m)===B(t,g===-1?0:m-g)){if(g===-1&&(g=m),m-g+1===w)return g*u}else g!==-1&&(m-=m-g),g=-1}else for(e+w>h&&(e=h-w),m=e;m>=0;m--){let g=!0;for(let E=0;E<w;E++)if(B(r,m+E)!==B(t,E)){g=!1;break}if(g)return m}return-1}o.prototype.includes=function(t,e,n){return this.indexOf(t,e,n)!==-1},o.prototype.indexOf=function(t,e,n){return Z(this,t,e,n,!0)},o.prototype.lastIndexOf=function(t,e,n){return Z(this,t,e,n,!1)};function Ut(r,t,e,n){e=Number(e)||0;const i=r.length-e;n?(n=Number(n),n>i&&(n=i)):n=i;const u=t.length;n>u/2&&(n=u/2);let h;for(h=0;h<n;++h){const w=parseInt(t.substr(h*2,2),16);if(V(w))return h;r[e+h]=w}return h}function Lt(r,t,e,n){return j(H(t,r.length-e),r,e,n)}function _t(r,t,e,n){return j(Dt(t),r,e,n)}function Rt(r,t,e,n){return j(ht(t),r,e,n)}function Ct(r,t,e,n){return j($t(t,r.length-e),r,e,n)}o.prototype.write=function(t,e,n,i){if(e===void 0)i="utf8",n=this.length,e=0;else if(n===void 0&&typeof e=="string")i=e,n=this.length,e=0;else if(isFinite(e))e=e>>>0,isFinite(n)?(n=n>>>0,i===void 0&&(i="utf8")):(i=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const u=this.length-e;if((n===void 0||n>u)&&(n=u),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let h=!1;for(;;)switch(i){case"hex":return Ut(this,t,e,n);case"utf8":case"utf-8":return Lt(this,t,e,n);case"ascii":case"latin1":case"binary":return _t(this,t,e,n);case"base64":return Rt(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ct(this,t,e,n);default:if(h)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),h=!0}},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Tt(r,t,e){return t===0&&e===r.length?f.fromByteArray(r):f.fromByteArray(r.slice(t,e))}function tt(r,t,e){e=Math.min(r.length,e);const n=[];let i=t;for(;i<e;){const u=r[i];let h=null,w=u>239?4:u>223?3:u>191?2:1;if(i+w<=e){let B,m,g,E;switch(w){case 1:u<128&&(h=u);break;case 2:B=r[i+1],(B&192)===128&&(E=(u&31)<<6|B&63,E>127&&(h=E));break;case 3:B=r[i+1],m=r[i+2],(B&192)===128&&(m&192)===128&&(E=(u&15)<<12|(B&63)<<6|m&63,E>2047&&(E<55296||E>57343)&&(h=E));break;case 4:B=r[i+1],m=r[i+2],g=r[i+3],(B&192)===128&&(m&192)===128&&(g&192)===128&&(E=(u&15)<<18|(B&63)<<12|(m&63)<<6|g&63,E>65535&&E<1114112&&(h=E))}}h===null?(h=65533,w=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|h&1023),n.push(h),i+=w}return bt(n)}const et=4096;function bt(r){const t=r.length;if(t<=et)return String.fromCharCode.apply(String,r);let e="",n=0;for(;n<t;)e+=String.fromCharCode.apply(String,r.slice(n,n+=et));return e}function Nt(r,t,e){let n="";e=Math.min(r.length,e);for(let i=t;i<e;++i)n+=String.fromCharCode(r[i]&127);return n}function St(r,t,e){let n="";e=Math.min(r.length,e);for(let i=t;i<e;++i)n+=String.fromCharCode(r[i]);return n}function Mt(r,t,e){const n=r.length;(!t||t<0)&&(t=0),(!e||e<0||e>n)&&(e=n);let i="";for(let u=t;u<e;++u)i+=jt[r[u]];return i}function vt(r,t,e){const n=r.slice(t,e);let i="";for(let u=0;u<n.length-1;u+=2)i+=String.fromCharCode(n[u]+n[u+1]*256);return i}o.prototype.slice=function(t,e){const n=this.length;t=~~t,e=e===void 0?n:~~e,t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),e<t&&(e=t);const i=this.subarray(t,e);return Object.setPrototypeOf(i,o.prototype),i};function F(r,t,e){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+t>e)throw new RangeError("Trying to access beyond buffer length")}o.prototype.readUintLE=o.prototype.readUIntLE=function(t,e,n){t=t>>>0,e=e>>>0,n||F(t,e,this.length);let i=this[t],u=1,h=0;for(;++h<e&&(u*=256);)i+=this[t+h]*u;return i},o.prototype.readUintBE=o.prototype.readUIntBE=function(t,e,n){t=t>>>0,e=e>>>0,n||F(t,e,this.length);let i=this[t+--e],u=1;for(;e>0&&(u*=256);)i+=this[t+--e]*u;return i},o.prototype.readUint8=o.prototype.readUInt8=function(t,e){return t=t>>>0,e||F(t,1,this.length),this[t]},o.prototype.readUint16LE=o.prototype.readUInt16LE=function(t,e){return t=t>>>0,e||F(t,2,this.length),this[t]|this[t+1]<<8},o.prototype.readUint16BE=o.prototype.readUInt16BE=function(t,e){return t=t>>>0,e||F(t,2,this.length),this[t]<<8|this[t+1]},o.prototype.readUint32LE=o.prototype.readUInt32LE=function(t,e){return t=t>>>0,e||F(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+this[t+3]*16777216},o.prototype.readUint32BE=o.prototype.readUInt32BE=function(t,e){return t=t>>>0,e||F(t,4,this.length),this[t]*16777216+(this[t+1]<<16|this[t+2]<<8|this[t+3])},o.prototype.readBigUInt64LE=N(function(t){t=t>>>0,v(t,"offset");const e=this[t],n=this[t+7];(e===void 0||n===void 0)&&$(t,this.length-8);const i=e+this[++t]*2**8+this[++t]*2**16+this[++t]*2**24,u=this[++t]+this[++t]*2**8+this[++t]*2**16+n*2**24;return BigInt(i)+(BigInt(u)<<BigInt(32))}),o.prototype.readBigUInt64BE=N(function(t){t=t>>>0,v(t,"offset");const e=this[t],n=this[t+7];(e===void 0||n===void 0)&&$(t,this.length-8);const i=e*2**24+this[++t]*2**16+this[++t]*2**8+this[++t],u=this[++t]*2**24+this[++t]*2**16+this[++t]*2**8+n;return(BigInt(i)<<BigInt(32))+BigInt(u)}),o.prototype.readIntLE=function(t,e,n){t=t>>>0,e=e>>>0,n||F(t,e,this.length);let i=this[t],u=1,h=0;for(;++h<e&&(u*=256);)i+=this[t+h]*u;return u*=128,i>=u&&(i-=Math.pow(2,8*e)),i},o.prototype.readIntBE=function(t,e,n){t=t>>>0,e=e>>>0,n||F(t,e,this.length);let i=e,u=1,h=this[t+--i];for(;i>0&&(u*=256);)h+=this[t+--i]*u;return u*=128,h>=u&&(h-=Math.pow(2,8*e)),h},o.prototype.readInt8=function(t,e){return t=t>>>0,e||F(t,1,this.length),this[t]&128?(255-this[t]+1)*-1:this[t]},o.prototype.readInt16LE=function(t,e){t=t>>>0,e||F(t,2,this.length);const n=this[t]|this[t+1]<<8;return n&32768?n|4294901760:n},o.prototype.readInt16BE=function(t,e){t=t>>>0,e||F(t,2,this.length);const n=this[t+1]|this[t]<<8;return n&32768?n|4294901760:n},o.prototype.readInt32LE=function(t,e){return t=t>>>0,e||F(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},o.prototype.readInt32BE=function(t,e){return t=t>>>0,e||F(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},o.prototype.readBigInt64LE=N(function(t){t=t>>>0,v(t,"offset");const e=this[t],n=this[t+7];(e===void 0||n===void 0)&&$(t,this.length-8);const i=this[t+4]+this[t+5]*2**8+this[t+6]*2**16+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(e+this[++t]*2**8+this[++t]*2**16+this[++t]*2**24)}),o.prototype.readBigInt64BE=N(function(t){t=t>>>0,v(t,"offset");const e=this[t],n=this[t+7];(e===void 0||n===void 0)&&$(t,this.length-8);const i=(e<<24)+this[++t]*2**16+this[++t]*2**8+this[++t];return(BigInt(i)<<BigInt(32))+BigInt(this[++t]*2**24+this[++t]*2**16+this[++t]*2**8+n)}),o.prototype.readFloatLE=function(t,e){return t=t>>>0,e||F(t,4,this.length),c.read(this,t,!0,23,4)},o.prototype.readFloatBE=function(t,e){return t=t>>>0,e||F(t,4,this.length),c.read(this,t,!1,23,4)},o.prototype.readDoubleLE=function(t,e){return t=t>>>0,e||F(t,8,this.length),c.read(this,t,!0,52,8)},o.prototype.readDoubleBE=function(t,e){return t=t>>>0,e||F(t,8,this.length),c.read(this,t,!1,52,8)};function L(r,t,e,n,i,u){if(!o.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<u)throw new RangeError('"value" argument is out of bounds');if(e+n>r.length)throw new RangeError("Index out of range")}o.prototype.writeUintLE=o.prototype.writeUIntLE=function(t,e,n,i){if(t=+t,e=e>>>0,n=n>>>0,!i){const w=Math.pow(2,8*n)-1;L(this,t,e,n,w,0)}let u=1,h=0;for(this[e]=t&255;++h<n&&(u*=256);)this[e+h]=t/u&255;return e+n},o.prototype.writeUintBE=o.prototype.writeUIntBE=function(t,e,n,i){if(t=+t,e=e>>>0,n=n>>>0,!i){const w=Math.pow(2,8*n)-1;L(this,t,e,n,w,0)}let u=n-1,h=1;for(this[e+u]=t&255;--u>=0&&(h*=256);)this[e+u]=t/h&255;return e+n},o.prototype.writeUint8=o.prototype.writeUInt8=function(t,e,n){return t=+t,e=e>>>0,n||L(this,t,e,1,255,0),this[e]=t&255,e+1},o.prototype.writeUint16LE=o.prototype.writeUInt16LE=function(t,e,n){return t=+t,e=e>>>0,n||L(this,t,e,2,65535,0),this[e]=t&255,this[e+1]=t>>>8,e+2},o.prototype.writeUint16BE=o.prototype.writeUInt16BE=function(t,e,n){return t=+t,e=e>>>0,n||L(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=t&255,e+2},o.prototype.writeUint32LE=o.prototype.writeUInt32LE=function(t,e,n){return t=+t,e=e>>>0,n||L(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=t&255,e+4},o.prototype.writeUint32BE=o.prototype.writeUInt32BE=function(t,e,n){return t=+t,e=e>>>0,n||L(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=t&255,e+4};function rt(r,t,e,n,i){st(t,n,i,r,e,7);let u=Number(t&BigInt(4294967295));r[e++]=u,u=u>>8,r[e++]=u,u=u>>8,r[e++]=u,u=u>>8,r[e++]=u;let h=Number(t>>BigInt(32)&BigInt(4294967295));return r[e++]=h,h=h>>8,r[e++]=h,h=h>>8,r[e++]=h,h=h>>8,r[e++]=h,e}function nt(r,t,e,n,i){st(t,n,i,r,e,7);let u=Number(t&BigInt(4294967295));r[e+7]=u,u=u>>8,r[e+6]=u,u=u>>8,r[e+5]=u,u=u>>8,r[e+4]=u;let h=Number(t>>BigInt(32)&BigInt(4294967295));return r[e+3]=h,h=h>>8,r[e+2]=h,h=h>>8,r[e+1]=h,h=h>>8,r[e]=h,e+8}o.prototype.writeBigUInt64LE=N(function(t,e=0){return rt(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),o.prototype.writeBigUInt64BE=N(function(t,e=0){return nt(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),o.prototype.writeIntLE=function(t,e,n,i){if(t=+t,e=e>>>0,!i){const B=Math.pow(2,8*n-1);L(this,t,e,n,B-1,-B)}let u=0,h=1,w=0;for(this[e]=t&255;++u<n&&(h*=256);)t<0&&w===0&&this[e+u-1]!==0&&(w=1),this[e+u]=(t/h>>0)-w&255;return e+n},o.prototype.writeIntBE=function(t,e,n,i){if(t=+t,e=e>>>0,!i){const B=Math.pow(2,8*n-1);L(this,t,e,n,B-1,-B)}let u=n-1,h=1,w=0;for(this[e+u]=t&255;--u>=0&&(h*=256);)t<0&&w===0&&this[e+u+1]!==0&&(w=1),this[e+u]=(t/h>>0)-w&255;return e+n},o.prototype.writeInt8=function(t,e,n){return t=+t,e=e>>>0,n||L(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=t&255,e+1},o.prototype.writeInt16LE=function(t,e,n){return t=+t,e=e>>>0,n||L(this,t,e,2,32767,-32768),this[e]=t&255,this[e+1]=t>>>8,e+2},o.prototype.writeInt16BE=function(t,e,n){return t=+t,e=e>>>0,n||L(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=t&255,e+2},o.prototype.writeInt32LE=function(t,e,n){return t=+t,e=e>>>0,n||L(this,t,e,4,2147483647,-2147483648),this[e]=t&255,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},o.prototype.writeInt32BE=function(t,e,n){return t=+t,e=e>>>0,n||L(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=t&255,e+4},o.prototype.writeBigInt64LE=N(function(t,e=0){return rt(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),o.prototype.writeBigInt64BE=N(function(t,e=0){return nt(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function it(r,t,e,n,i,u){if(e+n>r.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function ot(r,t,e,n,i){return t=+t,e=e>>>0,i||it(r,t,e,4),c.write(r,t,e,n,23,4),e+4}o.prototype.writeFloatLE=function(t,e,n){return ot(this,t,e,!0,n)},o.prototype.writeFloatBE=function(t,e,n){return ot(this,t,e,!1,n)};function ut(r,t,e,n,i){return t=+t,e=e>>>0,i||it(r,t,e,8),c.write(r,t,e,n,52,8),e+8}o.prototype.writeDoubleLE=function(t,e,n){return ut(this,t,e,!0,n)},o.prototype.writeDoubleBE=function(t,e,n){return ut(this,t,e,!1,n)},o.prototype.copy=function(t,e,n,i){if(!o.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),!i&&i!==0&&(i=this.length),e>=t.length&&(e=t.length),e||(e=0),i>0&&i<n&&(i=n),i===n||t.length===0||this.length===0)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),t.length-e<i-n&&(i=t.length-e+n);const u=i-n;return this===t&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(e,n,i):Uint8Array.prototype.set.call(t,this.subarray(n,i),e),u},o.prototype.fill=function(t,e,n,i){if(typeof t=="string"){if(typeof e=="string"?(i=e,e=0,n=this.length):typeof n=="string"&&(i=n,n=this.length),i!==void 0&&typeof i!="string")throw new TypeError("encoding must be a string");if(typeof i=="string"&&!o.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(t.length===1){const h=t.charCodeAt(0);(i==="utf8"&&h<128||i==="latin1")&&(t=h)}}else typeof t=="number"?t=t&255:typeof t=="boolean"&&(t=Number(t));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;e=e>>>0,n=n===void 0?this.length:n>>>0,t||(t=0);let u;if(typeof t=="number")for(u=e;u<n;++u)this[u]=t;else{const h=o.isBuffer(t)?t:o.from(t,i),w=h.length;if(w===0)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(u=0;u<n-e;++u)this[u+e]=h[u%w]}return this};const M={};function q(r,t,e){M[r]=class extends e{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(i){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:i,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}q("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),q("ERR_INVALID_ARG_TYPE",function(r,t){return`The "${r}" argument must be of type number. Received type ${typeof t}`},TypeError),q("ERR_OUT_OF_RANGE",function(r,t,e){let n=`The value of "${r}" is out of range.`,i=e;return Number.isInteger(e)&&Math.abs(e)>2**32?i=ft(String(e)):typeof e=="bigint"&&(i=String(e),(e>BigInt(2)**BigInt(32)||e<-(BigInt(2)**BigInt(32)))&&(i=ft(i)),i+="n"),n+=` It must be ${t}. Received ${i}`,n},RangeError);function ft(r){let t="",e=r.length;const n=r[0]==="-"?1:0;for(;e>=n+4;e-=3)t=`_${r.slice(e-3,e)}${t}`;return`${r.slice(0,e)}${t}`}function Ot(r,t,e){v(t,"offset"),(r[t]===void 0||r[t+e]===void 0)&&$(t,r.length-(e+1))}function st(r,t,e,n,i,u){if(r>e||r<t){const h=typeof t=="bigint"?"n":"";let w;throw u>3?t===0||t===BigInt(0)?w=`>= 0${h} and < 2${h} ** ${(u+1)*8}${h}`:w=`>= -(2${h} ** ${(u+1)*8-1}${h}) and < 2 ** ${(u+1)*8-1}${h}`:w=`>= ${t}${h} and <= ${e}${h}`,new M.ERR_OUT_OF_RANGE("value",w,r)}Ot(n,i,u)}function v(r,t){if(typeof r!="number")throw new M.ERR_INVALID_ARG_TYPE(t,"number",r)}function $(r,t,e){throw Math.floor(r)!==r?(v(r,e),new M.ERR_OUT_OF_RANGE(e||"offset","an integer",r)):t<0?new M.ERR_BUFFER_OUT_OF_BOUNDS:new M.ERR_OUT_OF_RANGE(e||"offset",`>= ${e?1:0} and <= ${t}`,r)}const Pt=/[^+/0-9A-Za-z-_]/g;function kt(r){if(r=r.split("=")[0],r=r.trim().replace(Pt,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function H(r,t){t=t||1/0;let e;const n=r.length;let i=null;const u=[];for(let h=0;h<n;++h){if(e=r.charCodeAt(h),e>55295&&e<57344){if(!i){if(e>56319){(t-=3)>-1&&u.push(239,191,189);continue}else if(h+1===n){(t-=3)>-1&&u.push(239,191,189);continue}i=e;continue}if(e<56320){(t-=3)>-1&&u.push(239,191,189),i=e;continue}e=(i-55296<<10|e-56320)+65536}else i&&(t-=3)>-1&&u.push(239,191,189);if(i=null,e<128){if((t-=1)<0)break;u.push(e)}else if(e<2048){if((t-=2)<0)break;u.push(e>>6|192,e&63|128)}else if(e<65536){if((t-=3)<0)break;u.push(e>>12|224,e>>6&63|128,e&63|128)}else if(e<1114112){if((t-=4)<0)break;u.push(e>>18|240,e>>12&63|128,e>>6&63|128,e&63|128)}else throw new Error("Invalid code point")}return u}function Dt(r){const t=[];for(let e=0;e<r.length;++e)t.push(r.charCodeAt(e)&255);return t}function $t(r,t){let e,n,i;const u=[];for(let h=0;h<r.length&&!((t-=2)<0);++h)e=r.charCodeAt(h),n=e>>8,i=e%256,u.push(i),u.push(n);return u}function ht(r){return f.toByteArray(kt(r))}function j(r,t,e,n){let i;for(i=0;i<n&&!(i+e>=t.length||i>=r.length);++i)t[i+e]=r[i];return i}function C(r,t){return r instanceof t||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===t.name}function V(r){return r!==r}const jt=function(){const r="0123456789abcdef",t=new Array(256);for(let e=0;e<16;++e){const n=e*16;for(let i=0;i<16;++i)t[n+i]=r[e]+r[i]}return t}();function N(r){return typeof BigInt>"u"?Wt:r}function Wt(){throw new Error("BigInt not supported")}})(Xt);export{Y as a,Xt as b,lt as e,J as i};
