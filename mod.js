// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var e=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;function t(r){return r===e||r===n}function i(r){return Math.abs(r)}var a="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var o=Object.prototype.toString;var u=Object.prototype.hasOwnProperty;var c="function"==typeof Symbol?Symbol:void 0,f="function"==typeof c?c.toStringTag:"";var s=a&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return o.call(r);n=r[f],a=f,e=null!=(i=r)&&u.call(i,a);try{r[f]=void 0}catch(e){return o.call(r)}return t=o.call(r),e?r[f]=n:delete r[f],t}:function(r){return o.call(r)},l="function"==typeof Uint32Array;var p="function"==typeof Uint32Array?Uint32Array:null;var v,y="function"==typeof Uint32Array?Uint32Array:void 0;v=function(){var r,e,n;if("function"!=typeof p)return!1;try{e=new p(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(l&&n instanceof Uint32Array||"[object Uint32Array]"===s(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?y:function(){throw new Error("not implemented")};var g=v,d="function"==typeof Float64Array;var h="function"==typeof Float64Array?Float64Array:null;var w,b="function"==typeof Float64Array?Float64Array:void 0;w=function(){var r,e,n;if("function"!=typeof h)return!1;try{e=new h([1,3.14,-3.14,NaN]),n=e,r=(d&&n instanceof Float64Array||"[object Float64Array]"===s(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?b:function(){throw new Error("not implemented")};var m=w,A="function"==typeof Uint8Array;var _="function"==typeof Uint8Array?Uint8Array:null;var E,N="function"==typeof Uint8Array?Uint8Array:void 0;E=function(){var r,e,n;if("function"!=typeof _)return!1;try{e=new _(e=[1,3.14,-3.14,256,257]),n=e,r=(A&&n instanceof Uint8Array||"[object Uint8Array]"===s(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?N:function(){throw new Error("not implemented")};var U=E,k="function"==typeof Uint16Array;var I="function"==typeof Uint16Array?Uint16Array:null;var S,x="function"==typeof Uint16Array?Uint16Array:void 0;S=function(){var r,e,n;if("function"!=typeof I)return!1;try{e=new I(e=[1,3.14,-3.14,65536,65537]),n=e,r=(k&&n instanceof Uint16Array||"[object Uint16Array]"===s(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?x:function(){throw new Error("not implemented")};var F,j={uint16:S,uint8:U};(F=new j.uint16(1))[0]=4660;var T=52===new j.uint8(F.buffer)[0],O=!0===T?1:0,V=new m(1),$=new g(V.buffer);function G(r){return V[0]=r,$[O]}var H=!0===T?1:0,W=new m(1),C=new g(W.buffer);var L=.6931471803691238,P=1.9082149292705877e-10;function R(e){var t,i,a,o,u,c,f,s,l,p,v,y;return 0===e?n:r(e)||e<0?NaN:(u=0,(i=G(e))<1048576&&(u-=54,i=G(e*=0x40000000000000)),i>=2146435072?e+e:(u+=(i>>20)-1023|0,u+=(s=(i&=1048575)+614244&1048576|0)>>20|0,f=(e=function(r,e){return W[0]=r,C[H]=e>>>0,W[0]}(e,i|1072693248^s))-1,(1048575&2+i)<3?0===f?0===u?0:u*L+u*P:(c=f*f*(.5-.3333333333333333*f),0===u?f-c:u*L-(c-u*P-f)):(s=i-398458|0,l=440401-i|0,o=(v=(y=(p=f/(2+f))*p)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),a=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),c=a+o,(s|=l)>0?(t=.5*f*f,0===u?f-(t-p*(t+c)):u*L-(t-(p*(t+c)+u*P)-f)):0===u?f-p*(f-c):u*L-(p*(f-c)-u*P-f))))}var M=Math.floor,Z=Math.ceil;function X(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var Y=-.16666666666666632;function z(r,e){var n,t,i;return n=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*r,0===e?r+t*(Y+i*n):r-(i*(.5*e-t*n)-e-t*Y)}var q,B,D=!0===T?0:1,J=new m(1),K=new g(J.buffer);!0===T?(q=1,B=0):(q=0,B=1);var Q={HIGH:q,LOW:B},rr=new m(1),er=new g(rr.buffer),nr=Q.HIGH,tr=Q.LOW;function ir(r,e){return er[nr]=r,er[tr]=e,rr[0]}var ar="function"==typeof Object.defineProperty?Object.defineProperty:null;var or=Object.defineProperty;function ur(r){return"number"==typeof r}function cr(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function fr(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+cr(i):cr(i)+r,t&&(r="-"+r)),r}var sr=String.prototype.toLowerCase,lr=String.prototype.toUpperCase;function pr(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!ur(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=fr(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=fr(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===lr.call(r.specifier)?lr.call(n):sr.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function vr(r){return"string"==typeof r}var yr=Math.abs,gr=String.prototype.toLowerCase,dr=String.prototype.toUpperCase,hr=String.prototype.replace,wr=/e\+(\d)$/,br=/e-(\d)$/,mr=/^(\d+)$/,Ar=/^(\d+)e/,_r=/\.0$/,Er=/\.0*e/,Nr=/(\..*[^0])0*e/;function Ur(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!ur(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":yr(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=hr.call(n,Nr,"$1e"),n=hr.call(n,Er,"e"),n=hr.call(n,_r,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=hr.call(n,wr,"e+0$1"),n=hr.call(n,br,"e-0$1"),r.alternate&&(n=hr.call(n,mr,"$1."),n=hr.call(n,Ar,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===dr.call(r.specifier)?dr.call(n):gr.call(n)}function kr(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function Ir(r,e,n){var t=e-r.length;return t<0?r:r=n?r+kr(t):kr(t)+r}var Sr=String.fromCharCode,xr=isNaN,Fr=Array.isArray;function jr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Tr(r){var e,n,t,i,a,o,u,c,f;if(!Fr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,c=0;c<r.length;c++)if(vr(t=r[c]))o+=t;else{if(e=void 0!==t.precision,!(t=jr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,f=0;f<n.length;f++)switch(i=n.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,xr(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,xr(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=pr(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!xr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=xr(a)?String(t.arg):Sr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=Ur(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=fr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Ir(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o}var Or=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Vr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function $r(r){var e,n,t,i;for(n=[],i=0,t=Or.exec(r);t;)(e=r.slice(i,Or.lastIndex-t[0].length)).length&&n.push(e),n.push(Vr(t)),i=Or.lastIndex,t=Or.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function Gr(r){return"string"==typeof r}function Hr(r){var e,n,t;if(!Gr(r))throw new TypeError(Hr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=$r(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return Tr.apply(null,n)}var Wr=Object.prototype,Cr=Wr.toString,Lr=Wr.__defineGetter__,Pr=Wr.__defineSetter__,Rr=Wr.__lookupGetter__,Mr=Wr.__lookupSetter__;var Zr,Xr,Yr=function(){try{return ar({},"x",{}),!0}catch(r){return!1}}()?or:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Cr.call(r))throw new TypeError(Hr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===Cr.call(n))throw new TypeError(Hr("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(Rr.call(r,e)||Mr.call(r,e)?(t=r.__proto__,r.__proto__=Wr,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Lr&&Lr.call(r,e,n.get),o&&Pr&&Pr.call(r,e,n.set),r};function zr(r,e,n){Yr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===T?(Zr=1,Xr=0):(Zr=0,Xr=1);var qr={HIGH:Zr,LOW:Xr},Br=new m(1),Dr=new g(Br.buffer),Jr=qr.HIGH,Kr=qr.LOW;function Qr(r,e,n,t){return Br[0]=r,e[t]=Dr[Jr],e[t+n]=Dr[Kr],e}function re(r){return Qr(r,[0,0],1,0)}zr(re,"assign",Qr);var ee=[0,0];function ne(r,e){var n,t;return re.assign(r,ee,1,0),n=ee[0],n&=2147483647,t=G(e),ir(n|=t&=2147483648,ee[1])}function te(e,n,a,o){return r(e)||t(e)?(n[o]=e,n[o+a]=0,n):0!==e&&i(e)<22250738585072014e-324?(n[o]=4503599627370496*e,n[o+a]=-52,n):(n[o]=e,n[o+a]=0,n)}zr((function(r){return te(r,[0,0],1,0)}),"assign",te);var ie=[0,0],ae=[0,0];function oe(i,a){var o,u;return 0===a||0===i||r(i)||t(i)?i:(te(i,ie,1,0),a+=ie[1],a+=function(r){var e=G(r);return(e=(2146435072&e)>>>20)-1023|0}(i=ie[0]),a<-1074?ne(0,i):a>1023?i<0?n:e:(a<=-1023?(a+=52,u=2220446049250313e-31):u=1,re.assign(i,ae,1,0),o=ae[0],o&=2148532223,u*ir(o|=a+1023<<20,ae[1])))}function ue(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var ce=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],fe=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],se=5.960464477539063e-8,le=ue(20),pe=ue(20),ve=ue(20),ye=ue(20);function ge(r,e,n,t,i,a,o,u,c){var f,s,l,p,v,y,g,d,h;for(p=a,h=t[n],d=n,v=0;d>0;v++)s=se*h|0,ye[v]=h-16777216*s|0,h=t[d-1]+s,d-=1;if(h=oe(h,i),h-=8*M(.125*h),h-=g=0|h,l=0,i>0?(g+=v=ye[n-1]>>24-i,ye[n-1]-=v<<24-i,l=ye[n-1]>>23-i):0===i?l=ye[n-1]>>23:h>=.5&&(l=2),l>0){for(g+=1,f=0,v=0;v<n;v++)d=ye[v],0===f?0!==d&&(f=1,ye[v]=16777216-d):ye[v]=16777215-d;if(i>0)switch(i){case 1:ye[n-1]&=8388607;break;case 2:ye[n-1]&=4194303}2===l&&(h=1-h,0!==f&&(h-=oe(1,i)))}if(0===h){for(d=0,v=n-1;v>=a;v--)d|=ye[v];if(0===d){for(y=1;0===ye[a-y];y++);for(v=n+1;v<=n+y;v++){for(c[u+v]=ce[o+v],s=0,d=0;d<=u;d++)s+=r[d]*c[u+(v-d)];t[v]=s}return ge(r,e,n+=y,t,i,a,o,u,c)}}if(0===h)for(n-=1,i-=24;0===ye[n];)n-=1,i-=24;else(h=oe(h,-i))>=16777216?(s=se*h|0,ye[n]=h-16777216*s|0,i+=24,ye[n+=1]=s):ye[n]=0|h;for(s=oe(1,i),v=n;v>=0;v--)t[v]=s*ye[v],s*=se;for(v=n;v>=0;v--){for(s=0,y=0;y<=p&&y<=n-v;y++)s+=fe[y]*t[v+y];ve[n-v]=s}for(s=0,v=n;v>=0;v--)s+=ve[v];for(e[0]=0===l?s:-s,s=ve[0]-s,v=1;v<=n;v++)s+=ve[v];return e[1]=0===l?s:-s,7&g}function de(r,e,n,t){var i,a,o,u,c,f,s;for(4,(a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),f=a-(o=t-1),s=o+4,c=0;c<=s;c++)le[c]=f<0?0:ce[f],f+=1;for(c=0;c<=4;c++){for(i=0,f=0;f<=o;f++)i+=r[f]*le[o+(c-f)];pe[c]=i}return 4,ge(r,e,4,pe,u,4,a,o,le)}var he=Math.round;function we(r,e,n){var t,i,a,o,u;return a=r-1.5707963267341256*(t=he(.6366197723675814*r)),o=6077100506506192e-26*t,u=e>>20|0,n[0]=a-o,u-(G(n[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((i=a)-(a=i-(o=6077100506303966e-26*t))-o),n[0]=a-o,u-(G(n[0])>>20&2047)>49&&(o=84784276603689e-45*t-((i=a)-(a=i-(o=20222662487111665e-37*t))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var be=1.5707963267341256,me=6077100506506192e-26,Ae=2*me,_e=4*me,Ee=[0,0,0],Ne=[0,0];function Ue(r,e){var n,t,i,a,o,u,c;if((i=2147483647&G(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?we(r,i,e):i<=1073928572?r>0?(c=r-be,e[0]=c-me,e[1]=c-e[0]-me,1):(c=r+be,e[0]=c+me,e[1]=c-e[0]+me,-1):r>0?(c=r-2*be,e[0]=c-Ae,e[1]=c-e[0]-Ae,2):(c=r+2*be,e[0]=c+Ae,e[1]=c-e[0]+Ae,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?we(r,i,e):r>0?(c=r-3*be,e[0]=c-1.8231301519518578e-10,e[1]=c-e[0]-1.8231301519518578e-10,3):(c=r+3*be,e[0]=c+1.8231301519518578e-10,e[1]=c-e[0]+1.8231301519518578e-10,-3):1075388923===i?we(r,i,e):r>0?(c=r-4*be,e[0]=c-_e,e[1]=c-e[0]-_e,4):(c=r+4*be,e[0]=c+_e,e[1]=c-e[0]+_e,-4);if(i<1094263291)return we(r,i,e);if(i>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return J[0]=r,K[D]}(r),c=ir(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)Ee[o]=0|c,c=16777216*(c-Ee[o]);for(Ee[2]=c,a=3;0===Ee[a-1];)a-=1;return u=de(Ee,Ne,t,a),r<0?(e[0]=-Ne[0],e[1]=-Ne[1],-u):(e[0]=Ne[0],e[1]=Ne[1],u)}var ke=[0,0];function Ie(r){var e;if(e=G(r),(e&=2147483647)<=1072243195)return e<1044381696?1:X(r,0);if(e>=2146435072)return NaN;switch(3&Ue(r,ke)){case 0:return X(ke[0],ke[1]);case 1:return-z(ke[0],ke[1]);case 2:return-X(ke[0],ke[1]);default:return z(ke[0],ke[1])}}var Se=[0,0];function xe(r){var e;if(e=G(r),(e&=2147483647)<=1072243195)return e<1045430272?r:z(r,0);if(e>=2146435072)return NaN;switch(3&Ue(r,Se)){case 0:return z(Se[0],Se[1]);case 1:return X(Se[0],Se[1]);case 2:return-z(Se[0],Se[1]);default:return-X(Se[0],Se[1])}}var Fe=3.141592653589793;var je=1.4616321449683622,Te=1.4616321449683622;function Oe(n){var a,o,u,c,f,s,l,p,v,y,g,d,h;if(r(n)||t(n))return n;if(0===n)return e;if(n<0?(a=!0,n=-n):a=!1,n<8470329472543003e-37)return-R(n);if(a){if(n>=4503599627370496)return e;if(v=function(e){var n,a;return r(e)||t(e)?NaN:0===(n=i(a=e%2))||1===n?ne(0,a):n<.25?xe(Fe*a):n<.75?ne(Ie(Fe*(n=.5-n)),a):n<1.25?(a=ne(1,a)-a,xe(Fe*a)):n<1.75?-ne(Ie(Fe*(n-=1.5)),a):(a-=ne(2,a),xe(Fe*a))}(n),0===v)return e;o=R(Fe/i(v*n))}if(1===n||2===n)return 0;if(n<2)switch(n<=.9?(h=-R(n),n>=je-1+.27?(g=1-n,u=0):n>=je-1-.27?(g=n-(Te-1),u=1):(g=n,u=2)):(h=0,n>=je+.27?(g=2-n,u=0):n>=je-.27?(g=n-Te,u=1):(g=n-1,u=2)),u){case 0:s=.07721566490153287+(d=g*g)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(d),f=d*(.3224670334241136+d*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(d)),h+=(l=g*s+f)-.5*g;break;case 1:s=.48383612272381005+(y=(d=g*g)*g)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(y),f=y*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(y)-.1475877229945939,c=.06462494023913339+y*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(y),h+=-.12148629053584961+(l=d*s-(-3638676997039505e-33-y*(f+g*c)));break;case 2:s=g*(g*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(g)-.07721566490153287),f=1+g*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(g),h+=-.5*g+s/f}else if(n<8)switch(u=function(r){return r<0?Z(r):M(r)}(n),l=(g=n-u)*(g*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(g)-.07721566490153287),p=1+g*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(g),h=.5*g+l/p,d=1,u){case 7:d*=g+6;case 6:d*=g+5;case 5:d*=g+4;case 4:d*=g+3;case 3:h+=R(d*=g+2)}else n<0x400000000000000?(v=R(n),y=.4189385332046727+(d=1/n)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(g=d*d),h=(n-.5)*(v-1)+y):h=n*(R(n)-1);return a&&(h=o-h),h}export{Oe as default};
//# sourceMappingURL=mod.js.map