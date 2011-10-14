/*

 Boom v2.3 , a javascript loader and manager
 MIT License
 http://dexbol.github.com/boom/
*/
(function(n,o){function A(a){if(!a)return false;return Object.prototype.toString.call(a)=="[object Object]"}function j(a,b){for(var c=a.length,d=0;d<c;d++)b(a[d],d)}function k(a,b,c,d,f,e){if(!b||!a)return a||this;if(f)switch(f){case 1:return k(a.prototype,b.prototype,c,d,0,e);case 2:k(a.prototype,b.prototype,c,d,0,e);break;case 3:return k(a,b.prototype,c,d,0,e);case 4:return k(a.prototype,b,c,d,0,e);default:}var g,h;if(d&&d.length){g=0;for(f=d.length;g<f;++g){h=d[g];if(b.hasOwnProperty(h))if(e&&
A(a[h]))k(a[h],b[h]);else if(c||!(h in a))a[h]=b[h]}}else for(g in b)if(b.hasOwnProperty(g))if(e&&A(a[g]))k(a[g],b[g],c,d,0,true);else if(c||!(g in a))a[g]=b[g];return a}function H(){var a=arguments,b={},c,d=a.length;for(c=0;c<d;c+=1)k(b,a[c],true,0,true);return b}function I(a,b,c,d){if(!b||!a)return a;var f=Object.prototype,e=b.prototype,g=function(h){function i(){}i.prototype=h;return new i}(e);a.prototype=g;g.constructor=a;a.superclass=e;if(b!==Object&&e.constructor===f.constructor)e.constructor=
b;c&&k(g,c,true);d&&k(a,d,true);return a}function B(a){if(q[a])return false;a=a.substring(a.lastIndexOf(".")+1);return a=="js"||a=="css"}function C(a){var b=s,c,d,f,e;for(c in b)if(b.hasOwnProperty(c)){d=b[c]&&b[c].mods||[];e=d.length;for(f=0;f<e;f++)if(d[f]==a)return c}return false}function x(a,b){var c=s,d=c[a]?c[a].path:a;c=d.substring(d.lastIndexOf(".")+1)=="css"?"css":"js";var f=r[a],e;d=d.charAt(0)=="/"||d.indexOf("//")>-1?d:m.base+d;f||(f=r[a]={n:a,h:[b?b:null],s:-1});if(c=="css"){e=o.createElement("link");
e.href=d;e.type="text/css";e.rel="stylesheet";t.parentNode.insertBefore(e,t);b&&b();f.s=u}else if(f.s==u)b&&b(a);else if(f.s==D)b&&f.h.push(b);else{e=o.createElement("script");e.src=d;e.async=false;f.t=n.setTimeout(function(){m.fail(a,d)},m.timeout);e.onload=e.onreadystatechange=function(){if(!this.readyState||this.readyState=="loaded"||this.readyState=="complete"){n.clearTimeout(f.t);f.s=u;for(var g=f.h,h;g.length>0;)(h=g.shift())&&h(a);e.load=e.onreadystatechange=null;!m.debug&&e.parentNode.removeChild(e)}};
t.parentNode.insertBefore(e,t);f.s=D}}function y(a,b){var c=a.f,d=a.unfound,f=q,e={},g=function(h){if(!(!h||e[h])){e[h]=true;if(B(h))r[h]&&r[h].s==u||c.push(h);else{var i=f[h];if(i)i&&i.details.requires&&j(i.details.requires,g);else{i=C(h);if(!i||r[i]&&r[i].s==u)throw new Error("Can't found the module : "+h);d.push(h);if(!e[i]){c.push(i);e[i]=true}}}}};j(b?d:a.mods,g);c.length>0?J(a):K(a)}function J(a){if(E){var b=a.f=F(a,true),c=b.length,d=function(){if(--c==0){a.f=[];d=b=null;y(a,true)}};j(b,function(f){x(f,
d)})}else{b=a.f=F(a);d=function(){if(b.length==0){y(a,true);a=d=b=null}else G(b.shift(),d)};G(b.shift(),d)}}function z(a){var b=[],c={},d=function(f){if(!c[f]){c[f]=true;var e=s[f];e&&e.requires&&j(e.requires,d);b.push(f)}};j(a,d);return b}function F(a,b){a=a.f;if(b)return z(a);var c=0;b=[];var d=[],f,e;for(j(a,function(g){g=z([g]);c=Math.max(c,g.length);d.push(g)});--c>=0;){f=[];e={};j(d,function(g){(g=g.shift())&&!e[g]&&f.push(g);e[g]=true});b.push(f)}return b}function G(a,b){if(a){var c=a.length,
d=function(){if(--c==0){b&&b();d=a=b=c=f=null}},f=function(e){x(e,d)};j(a,f)}}function K(a){var b=a.cx,c=a.cb,d=[],f=q,e={};p=function(g){if(!e[g]){e[g]=true;var h=f[g];h&&h.details.requires&&j(h.details.requires,p);h&&!B(g)&&d.push(g)}};j(a.mods,p);b._attach(d);c&&c(b);delete v[a.id];a=null}function l(){if(!this instanceof l)return new l;this._init()}var D=0,u=1,m={timeout:12E3,base:"",debug:false,util:[],fail:function(){}},s={},q={},r={},v={},w,t=function(){var a=o.getElementsByTagName("script");
return a[a.length-1]}(),L=t.getAttribute("data-boom-symbol")||"Boom",E=o.createElement("script").async===true||"MozAppearance"in o.documentElement.style||window.opera;E=false;w={_init:function(){if(!l.Env)l.Env={_attached:{},_guidp:"BOOM-",_cidx:0,_mods:q,_meta:s,_thread:v};if(!this.Env)this.Env={_attached:{}}},guid:function(){var a=l.Env;return a._guidp+ ++a._cidx},add:function(a,b,c){c=c||{};requires=c.requires||[];var d=C(a);d=d?z([d]):[];requires=requires.concat(d,m.util);c.requires=requires;
q[a]={name:a,fn:b,details:c};return this},addFile:function(a,b){if(typeof a=="object")for(var c in a)a.hasOwnProperty(c)&&this.addFile(c,a[c]);else s[a]=b;return this},load:function(){var a=[].slice.call(arguments,0);j(a,function(b){x(b)});return this},use:function(){var a=[].slice.call(arguments,0),b=a.length,c=this.guid();b=typeof a[b-1]=="function"?a.pop():null;v[c]={id:c,cb:b,mods:a,unfound:[],f:[],cx:this};y(v[c]);return this},_attach:function(a){var b=q,c=this.Env._attached,d=this;j(a,function(f){if(!c[f]){b[f].fn(d);
c[f]=true}})},config:function(a,b){if(b)m[a]=b;else k(m,a,true)},mix:k,merge:H,extend:I};l.prototype=w;for(p in w)l[p]=w[p];l._init();n[L]=n.CN6=n.Boom=l;if(n.location.search.indexOf("debug")>-1||o.cookie.indexOf("debug=")>-1)m.debug=true})(window,document);
