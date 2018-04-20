!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){var t=void 0,n=[],r=function(r){t=e(t,r),n.forEach(function(e){return e()})};return r({}),{getState:function(){return t},dispatch:r,subscribe:function(e){return n.push(e),function(){n=n.filter(function(t){return t!==e})}}}},o=function(e){return function(t){return console.group?function(n){console.group(n.type),console.log("%c prev state","color: gray",e.getState()),console.log("%c action","color: blue",n);var r=t(n);return console.log("%c next state","color: green",e.getState()),console.groupEnd(),r}:t}},u=function(e){return function(t){return function(n){return"function"==typeof n?n(e.dispatch,e.getState):t(n)}}};var c=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments[1];return Object.keys(e).reduce(function(r,o){return r[o]=e[o](t[o],n),r},{})}}({isAdding:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch(arguments[1].type){case"ADD_PAYMENT_REQUEST":return!0;case"ADD_PAYMENT_SUCCESS":case"ADD_PAYMENT_FAILURE":return!1;default:return e}},isFetching:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch(arguments[1].type){case"FETCH_PAYMENTS_REQUEST":return!0;case"FETCH_PAYMENTS_SUCCESS":case"FETCH_PAYMENTS_FAILURE":return!1;default:return e}},selectedCategory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,t=arguments[1];switch(t.type){case"CATEGORY_CHANGED":return+t.category_id;default:return e}},payments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case"ADD_PAYMENT_SUCCESS":return[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e),[t.response]).sort(function(e,t){return e.created_at<t.created_at?1:-1});case"FETCH_PAYMENTS_SUCCESS":return t.response.slice();default:return e}},categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case"FETCH_CATEGORIES_SUCCESS":return t.response.slice();default:return e}},paymentsCurrentYear:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case"FETCH_CURRENT_YEAR_PAYMENTS_SUCCESS":return t.response.slice();case"ADD_PAYMENT_SUCCESS":return new Date(t.response.created_at).getFullYear()===(new Date).getFullYear()?[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e),[t.response]):e;default:return e}},lastAction:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return arguments[1].type},errorMessages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case"ADD_PAYMENT_FAILURE":return t.errors;default:return e}}}),i=function(){var e=r(c);return function(e,t){t.slice().reverse().forEach(function(t){e.dispatch=t(e)(e.dispatch)})}(e,[u,o]),e},a=function(e){var t,n="/filter?"+(t=e,Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&"));return fetch(n).then(function(e){return e.json()})},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"FETCH_PAYMENTS";return function(n,r){return n({type:t+"_REQUEST",filter:e}),a(e).then(function(r){n({type:t+"_SUCCESS",filter:e,response:r})},function(r){n({type:t+"_FAILURE",filter:e,error:r.errors||"Something went wrong."})})}},f={};window.actions=f,f.fetchCurrentYearPayments=function(){var e=new Date((new Date).getFullYear(),0,1);return s({min_date:e},"FETCH_CURRENT_YEAR_PAYMENTS")},f.fetchPayments=s,f.addPayment=function(e){return function(t,n){return t({type:"ADD_PAYMENT_REQUEST",newPayment:e}),(r=e,fetch("/store",{method:"POST",body:r}).then(function(e){return e.json()}).then(function(e){return e.errors?Promise.reject(e):Promise.resolve(e)})).then(function(e){t({type:"ADD_PAYMENT_SUCCESS",response:e})},function(e){t({type:"ADD_PAYMENT_FAILURE",errors:e.errors||"Something went wrong."})});var r}},f.fetchCategories=function(){return function(e,t){return fetch("categories").then(function(e){return e.json()}).then(function(t){e({type:"FETCH_CATEGORIES_SUCCESS",response:t})})}};var l=i();window.store=l},function(e,t){}]);