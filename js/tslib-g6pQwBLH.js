var y=function(){return y=Object.assign||function(u){for(var r,t=1,a=arguments.length;t<a;t++){r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(u[e]=r[e])}return u},y.apply(this,arguments)};function b(l,u){var r={};for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&u.indexOf(t)<0&&(r[t]=l[t]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(l);a<t.length;a++)u.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(l,t[a])&&(r[t[a]]=l[t[a]]);return r}function h(l,u,r,t){function a(e){return e instanceof r?e:new r(function(c){c(e)})}return new(r||(r=Promise))(function(e,c){function o(i){try{n(t.next(i))}catch(s){c(s)}}function f(i){try{n(t.throw(i))}catch(s){c(s)}}function n(i){i.done?e(i.value):a(i.value).then(o,f)}n((t=t.apply(l,u||[])).next())})}function d(l,u){var r={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},t,a,e,c;return c={next:o(0),throw:o(1),return:o(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function o(n){return function(i){return f([n,i])}}function f(n){if(t)throw new TypeError("Generator is already executing.");for(;c&&(c=0,n[0]&&(r=0)),r;)try{if(t=1,a&&(e=n[0]&2?a.return:n[0]?a.throw||((e=a.return)&&e.call(a),0):a.next)&&!(e=e.call(a,n[1])).done)return e;switch(a=0,e&&(n=[n[0]&2,e.value]),n[0]){case 0:case 1:e=n;break;case 4:return r.label++,{value:n[1],done:!1};case 5:r.label++,a=n[1],n=[0];continue;case 7:n=r.ops.pop(),r.trys.pop();continue;default:if(e=r.trys,!(e=e.length>0&&e[e.length-1])&&(n[0]===6||n[0]===2)){r=0;continue}if(n[0]===3&&(!e||n[1]>e[0]&&n[1]<e[3])){r.label=n[1];break}if(n[0]===6&&r.label<e[1]){r.label=e[1],e=n;break}if(e&&r.label<e[2]){r.label=e[2],r.ops.push(n);break}e[2]&&r.ops.pop(),r.trys.pop();continue}n=u.call(l,r)}catch(i){n=[6,i],a=0}finally{t=e=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}}function p(l,u){var r=typeof Symbol=="function"&&l[Symbol.iterator];if(!r)return l;var t=r.call(l),a,e=[],c;try{for(;(u===void 0||u-- >0)&&!(a=t.next()).done;)e.push(a.value)}catch(o){c={error:o}}finally{try{a&&!a.done&&(r=t.return)&&r.call(t)}finally{if(c)throw c.error}}return e}function w(l,u,r){if(r||arguments.length===2)for(var t=0,a=u.length,e;t<a;t++)(e||!(t in u))&&(e||(e=Array.prototype.slice.call(u,0,t)),e[t]=u[t]);return l.concat(e||Array.prototype.slice.call(u))}export{w as _,p as a,y as b,h as c,d,b as e};
