/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;function b(n){if(n==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(n)}function i(){try{if(!Object.assign)return!1;var n=new String("abc");if(n[5]="de",Object.getOwnPropertyNames(n)[0]==="5")return!1;for(var c={},r=0;r<10;r++)c["_"+String.fromCharCode(r)]=r;var a=Object.getOwnPropertyNames(c).map(function(e){return c[e]});if(a.join("")!=="0123456789")return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach(function(e){t[e]=e}),Object.keys(Object.assign({},t)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}i();
