parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"j6o5":[function(require,module,exports) {
var t=function(){function t(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(i,e,n){return e&&t(i.prototype,e),n&&t(i,n),i}}();function i(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}var e=function(){function e(){i(this,e),this.dataSource=null,this.filter={},window.addEventListner("filterIn",this.filter,!1),window.addEventListner("dataSourceReady",this.initialize,!1)}return t(e,[{key:"filter",value:function(t){function i(i){return t.apply(this,arguments)}return i.toString=function(){return t.toString()},i}(function(t){filter=t.detail.filter,this.filter=filter;var i=this.dataSource.data(this.filter),e=new CustomEvent("filterOut",{detail:{data:i}});window.dispatchEvent(e)})},{key:"initialize",value:function(t){t=this.detail.dataSource,this.dataSource=t;var i=this.dataSource.data({}),e=new CustomEvent("initData",{detail:{data:i}});window.dispatchEvent(e)}}]),e}();
},{}]},{},["j6o5"], null)
//# sourceMappingURL=/DataManager.8867b31a.map