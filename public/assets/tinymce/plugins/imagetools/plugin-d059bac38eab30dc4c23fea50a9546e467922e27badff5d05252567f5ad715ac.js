/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.0.16 (2019-09-24)
 */

!function(v){"use strict";function e(){}function n(){return c}var t,r=function(e){function n(){return t}var t=e;return{get:n,set:function(e){t=e},clone:function(){return r(n())}}},o=tinymce.util.Tools.resolve("tinymce.PluginManager"),i=tinymce.util.Tools.resolve("tinymce.util.Tools"),l=function(e){return function(){return e}},u=l(!1),a=l(!0),c=(t={fold:function(e,n){return e()},is:u,isSome:u,isNone:a,getOr:d,getOrThunk:f,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:l(null),getOrUndefined:l(undefined),or:d,orThunk:f,map:n,each:e,bind:n,exists:u,forall:a,filter:n,equals:s,equals_:s,toArray:function(){return[]},toString:l("none()")},Object.freeze&&Object.freeze(t),t);function s(e){return e.isNone()}function f(e){return e()}function d(e){return e}var m=function(t){function e(){return o}function n(e){return e(t)}var r=l(t),o={fold:function(e,n){return n(t)},is:function(e){return t===e},isSome:a,isNone:u,getOr:r,getOrThunk:r,getOrDie:r,getOrNull:r,getOrUndefined:r,or:e,orThunk:e,map:function(e){return m(e(t))},each:function(e){e(t)},bind:n,exists:n,forall:n,filter:function(e){return e(t)?o:c},toArray:function(){return[t]},toString:function(){return"some("+t+")"},equals:function(e){return e.is(t)},equals_:function(e,n){return e.fold(u,function(e){return n(t,e)})}};return o},p={some:m,none:n,from:function(e){return null===e||e===undefined?c:m(e)}};function h(e,n){return w(v.document.createElement("canvas"),e,n)}function g(e){var n=h(e.width,e.height);return y(n).drawImage(e,0,0),n}function y(e){return e.getContext("2d")}function w(e,n,t){return e.width=n,e.height=t,e}var b,E,O=window.Promise?window.Promise:(b=T.immediateFn||"function"==typeof window.setImmediate&&window.setImmediate||function(e){v.setTimeout(e,1)},E=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},T.prototype["catch"]=function(e){return this.then(null,e)},T.prototype.then=function(t,r){var o=this;return new T(function(e,n){N.call(o,new R(t,r,e,n))})},T.all=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var c=Array.prototype.slice.call(1===e.length&&E(e[0])?e[0]:e);return new T(function(o,i){if(0===c.length)return o([]);var u=c.length;function a(n,e){try{if(e&&("object"==typeof e||"function"==typeof e)){var t=e.then;if("function"==typeof t)return void t.call(e,function(e){a(n,e)},i)}c[n]=e,0==--u&&o(c)}catch(r){i(r)}}for(var e=0;e<c.length;e++)a(e,c[e])})},T.resolve=function(n){return n&&"object"==typeof n&&n.constructor===T?n:new T(function(e){e(n)})},T.reject=function(t){return new T(function(e,n){n(t)})},T.race=function(o){return new T(function(e,n){for(var t=0,r=o;t<r.length;t++)r[t].then(e,n)})},T);function T(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],A(e,I(S,this),I(_,this))}function I(e,n){return function(){return e.apply(n,arguments)}}function N(r){var o=this;null!==this._state?b(function(){var e=o._state?r.onFulfilled:r.onRejected;if(null!==e){var n;try{n=e(o._value)}catch(t){return void r.reject(t)}r.resolve(n)}else(o._state?r.resolve:r.reject)(o._value)}):this._deferreds.push(r)}function S(e){try{if(e===this)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if("function"==typeof n)return void A(I(n,e),I(S,this),I(_,this))}this._state=!0,this._value=e,x.call(this)}catch(t){_.call(this,t)}}function _(e){this._state=!1,this._value=e,x.call(this)}function x(){for(var e=0,n=this._deferreds;e<n.length;e++){var t=n[e];N.call(this,t)}this._deferreds=[]}function R(e,n,t,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof n?n:null,this.resolve=t,this.reject=r}function A(e,n,t){var r=!1;try{e(function(e){r||(r=!0,n(e))},function(e){r||(r=!0,t(e))})}catch(o){if(r)return;r=!0,t(o)}}function C(e){var n=e.src;return 0===n.indexOf("data:")?D(n):function t(r){return new O(function(e,t){var n=new v.XMLHttpRequest;n.open("GET",r,!0),n.responseType="blob",n.onload=function(){200===this.status&&e(this.response)},n.onerror=function(){var e,n=this;t(0===this.status?((e=new Error("No access to download image")).code=18,e.name="SecurityError",e):new Error("Error "+n.status+" downloading image"))},n.send()})}(n)}function U(a){return new O(function(e,n){var t=v.URL.createObjectURL(a),r=new v.Image,o=function(){r.removeEventListener("load",i),r.removeEventListener("error",u)};function i(){o(),e(r)}function u(){o(),n("Unable to load data of type "+a.type+": "+t)}r.addEventListener("load",i),r.addEventListener("error",u),r.src=t,r.complete&&i()})}function D(t){return new O(function(e,n){(function g(e){var n=e.split(","),t=/data:([^;]+)/.exec(n[0]);if(!t)return p.none();for(var r=t[1],o=n[1],i=v.atob(o),u=i.length,a=Math.ceil(u/1024),c=new Array(a),s=0;s<a;++s){for(var f=1024*s,l=Math.min(1024+f,u),d=new Array(l-f),m=f,h=0;m<l;++h,++m)d[h]=i[m].charCodeAt(0);c[s]=new Uint8Array(d)}return p.some(new v.Blob(c,{type:r}))})(t).fold(function(){n("uri is not base64: "+t)},e)})}function j(e,r,o){return r=r||"image/png",v.HTMLCanvasElement.prototype.toBlob?new O(function(n,t){e.toBlob(function(e){e?n(e):t()},r,o)}):D(e.toDataURL(r,o))}function L(e){return U(e).then(function(e){!function t(e){v.URL.revokeObjectURL(e.src)}(e);var n=h(function r(e){return e.naturalWidth||e.width}(e),function o(e){return e.naturalHeight||e.height}(e));return y(n).drawImage(e,0,0),n})}function k(e,n,t){var r=n.type;function o(n,t){return e.then(function(e){return function r(e,n,t){return n=n||"image/png",e.toDataURL(n,t)}(e,n,t)})}return{getType:l(r),toBlob:function i(){return O.resolve(n)},toDataURL:function u(){return t},toBase64:function a(){return t.split(",")[1]},toAdjustedBlob:function c(n,t){return e.then(function(e){return j(e,n,t)})},toAdjustedDataURL:o,toAdjustedBase64:function s(e,n){return o(e,n).then(function(e){return e.split(",")[1]})},toCanvas:function f(){return e.then(g)}}}function P(n){return function e(t){return new O(function(e){var n=new v.FileReader;n.onloadend=function(){e(n.result)},n.readAsDataURL(t)})}(n).then(function(e){return k(L(n),n,e)})}function M(n,e){return j(n,e).then(function(e){return k(O.resolve(n),e,n.toDataURL())})}function B(n,t){return n.toCanvas().then(function(e){return function a(e,n,t){var r=h(e.width,e.height),o=y(r),i=0,u=0;90!==(t=t<0?360+t:t)&&270!==t||w(r,r.height,r.width);90!==t&&180!==t||(i=r.width);270!==t&&180!==t||(u=r.height);return o.translate(i,u),o.rotate(t*Math.PI/180),o.drawImage(e,0,0),M(r,n)}(e,n.getType(),t)})}function F(n,t){return n.toCanvas().then(function(e){return function i(e,n,t){var r=h(e.width,e.height),o=y(r);"v"===t?(o.scale(1,-1),o.drawImage(e,0,-r.height)):(o.scale(-1,1),o.drawImage(e,-r.width,0));return M(r,n)}(e,n.getType(),t)})}function z(e){return P(e)}var H=tinymce.util.Tools.resolve("tinymce.util.Delay"),q=tinymce.util.Tools.resolve("tinymce.util.Promise"),$=tinymce.util.Tools.resolve("tinymce.util.URI");function X(e,n){for(var t=0,r=e.length;t<r;t++){var o=e[t];if(n(o,t))return p.some(o)}return p.none()}function W(e){return null!==e&&e!==undefined}function G(n){return"ImageProxy HTTP error: "+X(ue,function(e){return n===e.code}).fold(l("Unknown ImageProxy error"),function(e){return e.message})}function Y(e){var n=G(e);return q.reject(n)}function V(n){return X(ae,function(e){return e.type===n}).fold(l("Unknown service error"),function(e){return e.message})}function J(e,n){return re(n).then(function(e){var n=function(e){var n=ie(e),t=te(n,["error","type"]);return"ImageProxy Service error: "+(t?V(t):"Invalid JSON in service error message")}(e);return q.reject(n)})}function K(e,n){var t={"Content-Type":"application/json;charset=UTF-8","tiny-api-key":n};return oe(function(e,n){var t=-1===e.indexOf("?")?"?":"&";return/[?&]apiKey=/.test(e)||!n?e:e+t+"apiKey="+encodeURIComponent(n)}(e,n),t,!1).then(function(e){return e.status<200||300<=e.status?ce(e.status,e.blob):q.resolve(e.blob)})}var Q,Z={getImageSize:function On(e){var n,t;function r(e){return/^[0-9\.]+px$/.test(e)}return n=e.style.width,t=e.style.height,n||t?r(n)&&r(t)?{w:parseInt(n,10),h:parseInt(t,10)}:null:(n=e.width,t=e.height,n&&t?{w:parseInt(n,10),h:parseInt(t,10)}:null)},setImageSize:function Tn(e,n){var t,r;n&&(t=e.style.width,r=e.style.height,(t||r)&&(e.style.width=n.w+"px",e.style.height=n.h+"px",e.removeAttribute("data-mce-style")),t=e.width,r=e.height,(t||r)&&(e.setAttribute("width",n.w),e.setAttribute("height",n.h)))},getNaturalImageSize:function In(e){return{w:e.naturalWidth,h:e.naturalHeight}}},ee=(Q="function",function(e){return function(e){if(null===e)return"null";var n=typeof e;return"object"==n&&(Array.prototype.isPrototypeOf(e)||e.constructor&&"Array"===e.constructor.name)?"array":"object"==n&&(String.prototype.isPrototypeOf(e)||e.constructor&&"String"===e.constructor.name)?"string":n}(e)===Q}),ne=Array.prototype.slice,te=(ee(Array.from)&&Array.from,function(e,n){var t;return t=n.reduce(function(e,n){return W(e)?e[n]:undefined},e),W(t)?t:null}),re=function(n){return new q(function(t){var e=new v.FileReader;e.onload=function(e){var n=e.target;t(n.result)},e.readAsText(n)})},oe=function(n,r,o){return new q(function(e){var t;(t=new v.XMLHttpRequest).onreadystatechange=function(){4===t.readyState&&e({status:t.status,blob:this.response})},t.open("GET",n,!0),t.withCredentials=o,i.each(r,function(e,n){t.setRequestHeader(n,e)}),t.responseType="blob",t.send()})},ie=function(e){var n;try{n=JSON.parse(e)}catch(t){}return n},ue=[{code:404,message:"Could not find Image Proxy"},{code:403,message:"Rejected request"},{code:0,message:"Incorrect Image Proxy URL"}],ae=[{type:"key_missing",message:"The request did not include an api key."},{type:"key_not_found",message:"The provided api key could not be found."},{type:"domain_not_trusted",message:"The api key is not valid for the request origins."}],ce=function(e,n){return function(e){return 400===e||403===e||500===e}(e)?J(0,n):Y(e)},se=Y;function fe(e,n,t){return n?K(e,n):function r(e,n){return oe(e,{},n).then(function(e){return e.status<200||300<=e.status?se(e.status):q.resolve(e.blob)})}(e,t)}function le(e,n,t){return 0!=(e.compareDocumentPosition(n)&t)}function de(e,n){var t=function(e,n){for(var t=0;t<e.length;t++){var r=e[t];if(r.test(n))return r}return undefined}(e,n);if(!t)return{major:0,minor:0};function r(e){return Number(n.replace(t,"$"+e))}return je(r(1),r(2))}function me(e,n){return function(){return n===e}}function he(e,n){return function(){return n===e}}function ge(e,n){var t=String(n).toLowerCase();return X(e,function(e){return e.search(t)})}function ve(e,n){return-1!==e.indexOf(n)}function pe(n){return function(e){return ve(e,n)}}function ye(e,n){return function(e,n){return X(e.dom().childNodes,function(e){return n(en.fromDom(e))}).map(en.fromDom)}(e,function(e){return function(e,n){var t=e.dom();if(t.nodeType!==tn)return!1;var r=t;if(r.matches!==undefined)return r.matches(n);if(r.msMatchesSelector!==undefined)return r.msMatchesSelector(n);if(r.webkitMatchesSelector!==undefined)return r.webkitMatchesSelector(n);if(r.mozMatchesSelector!==undefined)return r.mozMatchesSelector(n);throw new Error("Browser lacks native selectors")}(e,n)})}function we(e){return ye(en.fromDom(e),"img")}function be(e,n){return e.dom.is(n,"figure")}function Ee(e,n){e.notificationManager.open({text:n,type:"error"})}function Oe(e){var n=e.selection.getNode();return be(e,n)?we(n):p.some(en.fromDom(n))}function Te(e,n){var t,r=n.src;return un(e,n)?fe(n.src,null,function(e,n){return-1!==i.inArray(function(e){return e.getParam("imagetools_credentials_hosts",[],"string[]")}(e),new $(n.src).host)}(e,n)):on(e,n)?function(e){return C(e)}(n):(r=function(e){return e.getParam("imagetools_proxy")}(e),r+=(-1===r.indexOf("?")?"?":"&")+"url="+encodeURIComponent(n.src),t=function(e){return e.getParam("api_key",e.getParam("imagetools_api_key","","string"),"string")}(e),fe(r,t,!1))}function Ie(e,n){return function(e){return p.from(e.getParam("imagetools_fetch_image",null,"function"))}(e).fold(function(){return Te(e,n)},function(e){return e(n)})}function Ne(e,n){var t;return(t=e.editorUpload.blobCache.getByUri(n.src))?q.resolve(t.blob()):Ie(e,n)}function Se(e){H.clearTimeout(e.get())}function _e(i,u,a,c,s,f){return u.toBlob().then(function(e){var n,t,r,o;return r=i.editorUpload.blobCache,n=s.src,function(e){return e.getParam("images_reuse_filename",!1,"boolean")}(i)&&(t=(o=r.getByUri(n))?(n=o.uri(),o.name()):function(e,n){var t=n.match(/\/([^\/\?]+)?\.(?:jpeg|jpg|png|gif)(?:\?|$)/i);return t?e.dom.encode(t[1]):null}(i,n)),o=r.create({id:"imagetools"+rn++,blob:e,base64:u.toBase64(),uri:n,name:t}),r.add(o),i.undoManager.transact(function(){i.$(s).on("load",function e(){i.$(s).off("load",e),i.nodeChanged(),a?i.editorUpload.uploadImagesAuto():(Se(c),function(e,n){var t=H.setEditorTimeout(e,function(){e.editorUpload.uploadImagesAuto()},function(e){return e.getParam("images_upload_timeout",3e4,"number")}(e));n.set(t)}(i,c))}),f&&i.$(s).attr({width:f.w,height:f.h}),i.$(s).attr({src:o.blobUri()}).removeAttr("data-mce-src")}),o})}function xe(t,r,e,o){return function(){return Oe(t).fold(function(){Ee(t,"Could not find selected image")},function(n){return t._scanForImages().then(function(){return Ne(t,n.dom())}).then(z).then(e).then(function(e){return _e(t,e,!1,r,n.dom(),o)},function(e){Ee(t,e)})})}}var Re,Ae,Ce,Ue=function(e,n){return le(e,n,v.Node.DOCUMENT_POSITION_CONTAINED_BY)},De=function(){return je(0,0)},je=function(e,n){return{major:e,minor:n}},Le={nu:je,detect:function(e,n){var t=String(n).toLowerCase();return 0===e.length?De():de(e,t)},unknown:De},ke="Firefox",Pe=function(e){var n=e.current;return{current:n,version:e.version,isEdge:me("Edge",n),isChrome:me("Chrome",n),isIE:me("IE",n),isOpera:me("Opera",n),isFirefox:me(ke,n),isSafari:me("Safari",n)}},Me={unknown:function(){return Pe({current:undefined,version:Le.unknown()})},nu:Pe,edge:l("Edge"),chrome:l("Chrome"),ie:l("IE"),opera:l("Opera"),firefox:l(ke),safari:l("Safari")},Be="Windows",Fe="Android",ze="Solaris",He="FreeBSD",qe=function(e){var n=e.current;return{current:n,version:e.version,isWindows:he(Be,n),isiOS:he("iOS",n),isAndroid:he(Fe,n),isOSX:he("OSX",n),isLinux:he("Linux",n),isSolaris:he(ze,n),isFreeBSD:he(He,n)}},$e={unknown:function(){return qe({current:undefined,version:Le.unknown()})},nu:qe,windows:l(Be),ios:l("iOS"),android:l(Fe),linux:l("Linux"),osx:l("OSX"),solaris:l(ze),freebsd:l(He)},Xe=function(e,t){return ge(e,t).map(function(e){var n=Le.detect(e.versionRegexes,t);return{current:e.name,version:n}})},We=function(e,t){return ge(e,t).map(function(e){var n=Le.detect(e.versionRegexes,t);return{current:e.name,version:n}})},Ge=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,Ye=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){return ve(e,"edge/")&&ve(e,"chrome")&&ve(e,"safari")&&ve(e,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,Ge],search:function(e){return ve(e,"chrome")&&!ve(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return ve(e,"msie")||ve(e,"trident")}},{name:"Opera",versionRegexes:[Ge,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:pe("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:pe("firefox")},{name:"Safari",versionRegexes:[Ge,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(ve(e,"safari")||ve(e,"mobile/"))&&ve(e,"applewebkit")}}],Ve=[{name:"Windows",search:pe("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return ve(e,"iphone")||ve(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:pe("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:pe("os x"),versionRegexes:[/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:pe("linux"),versionRegexes:[]},{name:"Solaris",search:pe("sunos"),versionRegexes:[]},{name:"FreeBSD",search:pe("freebsd"),versionRegexes:[]}],Je={browsers:l(Ye),oses:l(Ve)},Ke=function(e){var n=Je.browsers(),t=Je.oses(),r=Xe(n,e).fold(Me.unknown,Me.nu),o=We(t,e).fold($e.unknown,$e.nu);return{browser:r,os:o,deviceType:function(e,n,t){var r=e.isiOS()&&!0===/ipad/i.test(t),o=e.isiOS()&&!r,i=e.isAndroid()&&3===e.version.major,u=e.isAndroid()&&4===e.version.major,a=r||i||u&&!0===/mobile/i.test(t),c=e.isiOS()||e.isAndroid(),s=c&&!a,f=n.isSafari()&&e.isiOS()&&!1===/safari/i.test(t);return{isiPad:l(r),isiPhone:l(o),isTablet:l(a),isPhone:l(s),isTouch:l(c),isAndroid:e.isAndroid,isiOS:e.isiOS,isWebView:l(f)}}(o,r,e)}},Qe={detect:(Ce=!(Re=function(){var e=v.navigator.userAgent;return Ke(e)}),function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return Ce||(Ce=!0,Ae=Re.apply(null,e)),Ae})},Ze=function(e){if(null===e||e===undefined)throw new Error("Node cannot be null or undefined");return{dom:l(e)}},en={fromHtml:function(e,n){var t=(n||v.document).createElement("div");if(t.innerHTML=e,!t.hasChildNodes()||1<t.childNodes.length)throw v.console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node");return Ze(t.childNodes[0])},fromTag:function(e,n){var t=(n||v.document).createElement(e);return Ze(t)},fromText:function(e,n){var t=(n||v.document).createTextNode(e);return Ze(t)},fromDom:Ze,fromPoint:function(e,n,t){var r=e.dom();return p.from(r.elementFromPoint(n,t)).map(Ze)}},nn=(v.Node.ATTRIBUTE_NODE,v.Node.CDATA_SECTION_NODE,v.Node.COMMENT_NODE,v.Node.DOCUMENT_NODE,v.Node.DOCUMENT_TYPE_NODE,v.Node.DOCUMENT_FRAGMENT_NODE,v.Node.ELEMENT_NODE),tn=(v.Node.TEXT_NODE,v.Node.PROCESSING_INSTRUCTION_NODE,v.Node.ENTITY_REFERENCE_NODE,v.Node.ENTITY_NODE,v.Node.NOTATION_NODE,nn),rn=(Qe.detect().browser.isIE(),"undefined"!=typeof v.window?v.window:Function("return this;")(),0),on=function(e,n){var t=n.src;return 0===t.indexOf("data:")||0===t.indexOf("blob:")||new $(t).host===e.documentBaseURI.host},un=function(e,n){return-1!==i.inArray(function(e){return e.getParam("imagetools_cors_hosts",[],"string[]")}(e),new $(n.src).host)},an=function(n,t,r){return function(){var e=Oe(n).fold(function(){return null},function(e){var n=Z.getImageSize(e.dom());return n?{w:n.h,h:n.w}:null});return xe(n,t,function(e){return function(e,n){return B(e,n)}(e,r)},e)()}},cn=function(e,n,t){return function(){return xe(e,n,function(e){return function(e,n){return F(e,n)}(e,t)})()}},sn=function(n,e){function t(e){return function(e){return n.dom.is(e,"img:not([data-mce-object],[data-mce-placeholder])")}(e)&&(on(n,e)||un(n,e)||n.settings.imagetools_proxy)}return be(n,e)?we(e).map(function(e){return t(e.dom())?p.some(e.dom()):p.none()}):t(e)?p.some(e):p.none()},fn=Se,ln=Ne,dn=Oe,mn=function(n,t,r,o,i){return new q(function(e){(function(e){return U(e)})(i).then(function(e){var n=Z.getNaturalImageSize(e);return o.w===n.w&&o.h===n.h||Z.getImageSize(r)&&Z.setImageSize(r,n),v.URL.revokeObjectURL(e.src),i}).then(z).then(function(e){return _e(n,e,!0,t,r)},function(){})})},hn=l("save-state"),gn=l("disable"),vn=l("enable"),pn=function(i,u){return function(){var r=dn(i),o=r.map(function(e){return Z.getNaturalImageSize(e.dom())});dn(i).each(function(n){sn(i,n.dom()).each(function(e){ln(i,n.dom()).then(function(e){var n=function(e){return{blob:e,url:v.URL.createObjectURL(e)}}(e);i.windowManager.open(function(e){return{title:"Edit Image",size:"large",body:{type:"panel",items:[{type:"imagetools",name:"imagetools",label:"Edit Image",currentState:e}]},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0,disabled:!0}],onSubmit:function(e){var t=e.getData().imagetools.blob;r.each(function(n){o.each(function(e){mn(i,u,n.dom(),e,t)})}),e.close()},onCancel:function(){},onAction:function(e,n){switch(n.name){case hn():n.value?e.enable("save"):e.disable("save");break;case gn():e.disable("save"),e.disable("cancel");break;case vn():e.enable("cancel")}}}}(n))})})})}},yn=function(t,e){i.each({mceImageRotateLeft:an(t,e,-90),mceImageRotateRight:an(t,e,90),mceImageFlipVertical:cn(t,e,"v"),mceImageFlipHorizontal:cn(t,e,"h"),mceEditImage:pn(t,e)},function(e,n){t.addCommand(n,e)})},wn=function(t,r,o){t.on("NodeChange",function(e){var n=o.get();n&&n.src!==e.element.src&&(fn(r),t.editorUpload.uploadImagesAuto(),o.set(null)),sn(t,e.element).each(o.set)})},bn=function(r){function n(e){return function(){return r.execCommand(e)}}r.ui.registry.addButton("rotateleft",{tooltip:"Rotate counterclockwise",icon:"rotate-left",onAction:n("mceImageRotateLeft")}),r.ui.registry.addButton("rotateright",{tooltip:"Rotate clockwise",icon:"rotate-right",onAction:n("mceImageRotateRight")}),r.ui.registry.addButton("flipv",{tooltip:"Flip vertically",icon:"flip-vertically",onAction:n("mceImageFlipVertical")}),r.ui.registry.addButton("fliph",{tooltip:"Flip horizontally",icon:"flip-horizontally",onAction:n("mceImageFlipHorizontal")}),r.ui.registry.addButton("editimage",{tooltip:"Edit image",icon:"edit-image",onAction:n("mceEditImage"),onSetup:function(t){function e(){dn(r).each(function(e){var n=sn(r,e.dom()).isNone();t.setDisabled(n)})}return r.on("NodeChange",e),function(){r.off("NodeChange",e)}}}),r.ui.registry.addButton("imageoptions",{tooltip:"Image options",icon:"image-options",onAction:n("mceImage")}),r.ui.registry.addContextMenu("imagetools",{update:function(e){return sn(r,e).fold(function(){return[]},function(e){return[{text:"Edit image",icon:"edit-image",onAction:n("mceEditImage")}]})}})},En=function(n){n.ui.registry.addContextToolbar("imagetools",{items:function(e){return e.getParam("imagetools_toolbar","rotateleft rotateright flipv fliph editimage imageoptions")}(n),predicate:function(e){return sn(n,e).isSome()},position:"node",scope:"node"})};!function Nn(){o.add("imagetools",function(e){var n=r(0),t=r(null);yn(e,n),bn(e),En(e),wn(e,n,t)})}()}(window);