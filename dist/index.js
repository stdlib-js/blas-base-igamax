"use strict";var x=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var y=x(function(C,m){
var f=require('@stdlib/math-base-special-abs/dist');function j(a,r,e,c){var v,u,t,s,n,i,o;for(v=r.data,s=r.accessors[0],u=f(s(v,c)),t=0,n=c+e,i=1;i<a;i++)o=f(s(v,n)),o>u&&(t=i,u=o),n+=e;return t}m.exports=j
});var q=x(function(D,d){
var k=require('@stdlib/array-base-arraylike2object/dist'),b=require('@stdlib/math-base-special-abs/dist'),O=y();function P(a,r,e,c){var v,u,t,s,n,i;if(a<1)return-1;if(a===1)return 0;if(s=k(r),s.accessorProtocol)return O(a,s,e,c);for(v=b(r[c]),u=0,t=c+e,i=1;i<a;i++)n=b(r[t]),n>v&&(u=i,v=n),t+=e;return u}d.exports=P
});var p=x(function(E,g){
var R=require('@stdlib/strided-base-stride2offset/dist'),h=q();function w(a,r,e){return h(a,r,e,R(a,e))}g.exports=w
});var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=p(),A=q();z(l,"ndarray",A);module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
