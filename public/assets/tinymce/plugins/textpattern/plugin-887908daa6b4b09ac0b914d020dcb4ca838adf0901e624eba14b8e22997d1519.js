/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.0.16 (2019-09-24)
 */

!function(f){"use strict";var r=function(t){function n(){return e}var e=t;return{get:n,set:function(t){e=t},clone:function(){return r(n())}}},t=tinymce.util.Tools.resolve("tinymce.PluginManager"),u=function(){return(u=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)};function n(){}function a(t){return function(){return t}}function o(t){return t}function e(){return l}var i,c=a(!1),s=a(!0),l=(i={fold:function(t,n){return t()},is:c,isSome:c,isNone:s,getOr:g,getOrThunk:m,getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},getOrNull:a(null),getOrUndefined:a(undefined),or:g,orThunk:m,map:e,each:n,bind:e,exists:c,forall:s,filter:e,equals:d,equals_:d,toArray:function(){return[]},toString:a("none()")},Object.freeze&&Object.freeze(i),i);function d(t){return t.isNone()}function m(t){return t()}function g(t){return t}function p(n){return function(t){return function(t){if(null===t)return"null";var n=typeof t;return"object"==n&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"==n&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":n}(t)===n}}function h(t,n){return-1<function(t,n){return st.call(t,n)}(t,n)}function v(t,n){for(var e=t.length,r=new Array(e),o=0;o<e;o++){var a=t[o];r[o]=n(a,o)}return r}function y(t,n){for(var e=0,r=t.length;e<r;e++){n(t[e],e)}}function k(t,n){for(var e=[],r=0,o=t.length;r<o;r++){var a=t[r];n(a,r)&&e.push(a)}return e}function b(t,n,e){return function(t,n){for(var e=t.length-1;0<=e;e--){n(t[e],e)}}(t,function(t){e=n(e,t)}),e}function O(t,n){for(var e=0,r=t.length;e<r;++e){if(!0!==n(t[e],e))return!1}return!0}function w(t){var n=[],e=[];return y(t,function(t){t.fold(function(t){n.push(t)},function(t){e.push(t)})}),{errors:n,values:e}}function E(t){return"inline-command"===t.type||"inline-format"===t.type}function C(t){return"block-command"===t.type||"block-format"===t.type}function x(t){return function(t,n){var e=ct.call(t,0);return e.sort(n),e}(t,function(t,n){return t.start.length===n.start.length?0:t.start.length>n.start.length?-1:1})}function T(o){function a(t){return vt.error({message:t,pattern:o})}function t(t,n,e){if(o.format===undefined)return o.cmd!==undefined?at(o.cmd)?vt.value(e(o.cmd,o.value)):a(t+" pattern has non-string `cmd` parameter"):a(t+" pattern is missing both `format` and `cmd` parameters");var r=void 0;if(ut(o.format)){if(!O(o.format,at))return a(t+" pattern has non-string items in the `format` array");r=o.format}else{if(!at(o.format))return a(t+" pattern has non-string `format` parameter");r=[o.format]}return vt.value(n(r))}if(!it(o))return a("Raw pattern is not an object");if(!at(o.start))return a("Raw pattern is missing `start` parameter");if(o.end===undefined)return o.replacement!==undefined?at(o.replacement)?0===o.start.length?a("Replacement pattern has empty `start` parameter"):vt.value({type:"inline-command",start:"",end:o.start,cmd:"mceInsertContent",value:o.replacement}):a("Replacement pattern has non-string `replacement` parameter"):0===o.start.length?a("Block pattern has empty `start` parameter"):t("Block",function(t){return{type:"block-format",start:o.start,format:t[0]}},function(t,n){return{type:"block-command",start:o.start,cmd:t,value:n}});if(!at(o.end))return a("Inline pattern has non-string `end` parameter");if(0===o.start.length&&0===o.end.length)return a("Inline pattern has empty `start` and `end` parameters");var e=o.start,r=o.end;return 0===r.length&&(r=e,e=""),t("Inline",function(t){return{type:"inline-format",start:e,end:r,format:t}},function(t,n){return{type:"inline-command",start:e,end:r,cmd:t,value:n}})}function N(t){return"block-command"===t.type?{start:t.start,cmd:t.cmd,value:t.value}:"block-format"===t.type?{start:t.start,format:t.format}:"inline-command"===t.type?"mceInsertContent"===t.cmd&&""===t.start?{start:t.end,replacement:t.value}:{start:t.start,end:t.end,cmd:t.cmd,value:t.value}:"inline-format"===t.type?{start:t.start,end:t.end,format:1===t.format.length?t.format[0]:t.format}:void 0}function R(t){return{inlinePatterns:k(t,E),blockPatterns:x(k(t,C))}}function P(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=kt.console;e&&(e.error?e.error.apply(e,t):e.log.apply(e,t))}function S(t){var n=function(t,n){return mt(t,n)?ot.from(t[n]):ot.none()}(t,"textpattern_patterns").getOr(bt);if(!ut(n))return P("The setting textpattern_patterns should be an array"),{inlinePatterns:[],blockPatterns:[]};var e=w(v(n,T));return y(e.errors,function(t){return P(t.message,t.pattern)}),R(e.values)}function M(t){return t.nodeType===f.Node.TEXT_NODE}function A(t,n,e,r){void 0===r&&(r=!0);var o=n.startContainer.parentNode,a=n.endContainer.parentNode;n.deleteContents(),r&&!e(n.startContainer)&&(M(n.startContainer)&&0===n.startContainer.data.length&&t.remove(n.startContainer),M(n.endContainer)&&0===n.endContainer.data.length&&t.remove(n.endContainer),xt(t,o,e),o!==a&&xt(t,a,e))}function D(t,n){var e=n.get(t);return ut(e)&&function(t){return 0===t.length?ot.none():ot.some(t[0])}(e).exists(function(t){return mt(t,"block")})}function j(t){return 0===t.start.length}function B(t,n){return function(t,n){for(var e=0,r=t.length;e<r;e++){var o=t[e];if(n(o,e))return ot.some(o)}return ot.none()}(t,function(t){return 0===n.indexOf(t.start)&&(!function(t){return mt(t,"end")}(t)||!t.end||n.lastIndexOf(t.end)===n.length-t.end.length)})}function I(t,n){return{element:t,offset:n}}function _(t,n){function e(t){for(var n=r[t]();n&&n.nodeType!==f.Node.TEXT_NODE;)n=r[t]();return n&&n.nodeType===f.Node.TEXT_NODE?ot.some(n):ot.none()}var r=new Ct(t,n);return{next:function(){return e("next")},prev:function(){return e("prev")},prev2:function(){return e("prev2")}}}function L(t,n,e){return M(t)&&0<=n?ot.some(I(t,n)):_(t,e).prev().map(function(t){return I(t,t.data.length)})}function U(t,n,e){if(M(n)&&(e<0||e>n.data.length))return[];for(var r=[e],o=n;o!==t&&o.parentNode;){for(var a=o.parentNode,i=0;i<a.childNodes.length;i++)if(a.childNodes[i]===o){r.push(i);break}o=a}return o===t?r.reverse():[]}function q(t,n,e,r,o){return{start:U(t,n,e),end:U(t,r,o)}}function V(t,n){var e=n.slice(),r=e.pop();return function(t,n,e){return y(t,function(t){e=n(e,t)}),e}(e,function(t,n){return t.bind(function(t){return ot.from(t.childNodes[n])})},ot.some(t)).bind(function(t){return M(t)&&0<=r&&t.data.length,ot.some({node:t,offset:r})})}function W(n,e){return V(n,e.start).bind(function(t){var o=t.node,a=t.offset;return V(n,e.end).map(function(t){var n=t.node,e=t.offset,r=f.document.createRange();return r.setStart(o,a),r.setEnd(n,e),r})})}function X(r,o,t){_(o,o).next().each(function(e){Nt(e,t.start.length,o).each(function(t){var n=r.createRng();n.setStart(e,0),n.setEnd(t.element,t.offset),A(r,n,function(t){return t===o})})})}function z(t,n){var e=t.dom,r=t.selection.getRng(),o=e.getParent(r.startContainer,e.isBlock);if(!e.is(o,"p")||!function(t){return t.nodeType===f.Node.ELEMENT_NODE}(o))return[];var a=o.textContent;return B(n,a).map(function(t){return Et.trim(a).length===t.start.length?[]:[{pattern:t,range:q(e.getRoot(),o,0,o,0)}]}).getOr([])}function F(n,t){if(0!==t.length){var e=n.selection.getBookmark();y(t,function(t){return function(t,n){var e=t.dom,r=n.pattern,o=W(e.getRoot(),n.range).getOrDie("Unable to resolve path range"),a=e.getParent(o.startContainer,e.isBlock);return"block-format"===r.type?D(r.format,t.formatter)&&t.undoManager.transact(function(){X(t.dom,a,r),t.formatter.apply(r.format)}):"block-command"===r.type&&t.undoManager.transact(function(){X(t.dom,a,r),t.execCommand(r.cmd,!1,r.value)}),!0}(n,t)}),n.selection.moveToBookmark(e)}}function J(t,n){return t.create("span",{"data-mce-type":"bookmark",id:n})}function K(t,n){var e=t.createRng();return e.setStartAfter(n.start),e.setEndBefore(n.end),e}function G(t,n,e){var r=W(t.getRoot(),e).getOrDie("Unable to resolve path range"),o=r.startContainer,a=r.endContainer,i=0===r.endOffset?a:a.splitText(r.endOffset),u=0===r.startOffset?o:o.splitText(r.startOffset);return{prefix:n,end:i.parentNode.insertBefore(J(t,n+"-end"),i),start:u.parentNode.insertBefore(J(t,n+"-start"),u)}}function H(t,n,e){xt(t,t.get(n.prefix+"-end"),e),xt(t,t.get(n.prefix+"-start"),e)}function Q(t,e,n,r,o,a){if(void 0===a&&(a=!1),0!==e.start.length||a)return L(n,r,o).bind(function(n){return function(t,n,e,r,o){var a=new Ct(n,o);return St(t,n,ot.some(e),r,a.prev,ot.none())}(t,n.element,n.offset,function(f,c,s){return function(e,r,t,n){if(r===c)return e.abort();var o=t.substring(0,n.getOr(t.length)),a=o.lastIndexOf(s.charAt(s.length-1)),i=o.lastIndexOf(s);if(-1===i)return-1!==a?Tt(r,a+1-s.length,c).fold(function(){return e.kontinue()},function(t){var n=f.createRng();return n.setStart(t.element,t.offset),n.setEnd(r,a+1),n.toString()===s?e.finish(n):e.kontinue()}):e.kontinue();var u=f.createRng();return u.setStart(r,i),u.setEnd(r,i+s.length),e.finish(u)}}(t,o,e.start),o).fold(ot.none,ot.none,ot.some).bind(function(t){if(a){if(t.endContainer===n.element&&t.endOffset===n.offset)return ot.none();if(0===n.offset&&t.endContainer.textContent.length===t.endOffset)return ot.none()}return ot.some(t)})});var i=t.createRng();return i.setStart(n,r),i.setEnd(n,r),ot.some(i)}function Y(a,i,u){var f=a.dom,c=f.getRoot(),s=u.pattern,l=u.position.element,d=u.position.offset;return Tt(l,d-u.pattern.end.length,i).bind(function(t){var e=q(c,t.element,t.offset,l,d);if(j(s))return ot.some({matches:[{pattern:s,startRng:e,endRng:e}],position:t});var n=At(a,u.remainingPatterns,t.element,t.offset,i),r=n.getOr({matches:[],position:t}),o=r.position;return Q(f,s,o.element,o.offset,i,n.isNone()).map(function(t){var n=function(t,n){return q(t,n.startContainer,n.startOffset,n.endContainer,n.endOffset)}(c,t);return{matches:r.matches.concat([{pattern:s,startRng:n,endRng:e}]),position:I(t.startContainer,t.startOffset)}})})}function Z(n,t,e){n.selection.setRng(e),"inline-format"===t.type?y(t.format,function(t){n.formatter.apply(t)}):n.execCommand(t.cmd,!1,t.value)}function $(o,t){var a=function(t){var n=(new Date).getTime();return t+"_"+Math.floor(1e9*Math.random())+ ++Mt+String(n)}("mce_textpattern"),i=b(t,function(t,n){var e=G(o,a+"_end"+t.length,n.endRng);return t.concat([u(u({},n),{endMarker:e})])},[]);return b(i,function(t,n){var e=i.length-t.length-1,r=j(n.pattern)?n.endMarker:G(o,a+"_start"+e,n.startRng);return t.concat([u(u({},n),{startMarker:r})])},[])}function tt(t,n,e){var r=t.selection.getRng();if(!1===r.collapsed)return[];var o=t.dom.getParent(r.startContainer,t.dom.isBlock),a=r.startOffset-(e?1:0);return At(t,n,r.startContainer,a,o).fold(function(){return[]},function(t){return t.matches})}function nt(r,t){if(0!==t.length){var o=r.dom,n=r.selection.getBookmark(),e=$(o,t);y(e,function(t){function n(t){return t===e}var e=o.getParent(t.startMarker.start,o.isBlock);j(t.pattern)?function(t,n,e,r){var o=K(t.dom,e);A(t.dom,o,r),Z(t,n,o)}(r,t.pattern,t.endMarker,n):function(t,n,e,r,o){var a=t.dom,i=K(a,r),u=K(a,e);A(a,u,o),A(a,i,o);var f={prefix:e.prefix,start:e.end,end:r.start},c=K(a,f);Z(t,n,c)}(r,t.pattern,t.startMarker,t.endMarker,n),H(o,t.endMarker,n),H(o,t.startMarker,n)}),r.selection.moveToBookmark(n)}}function et(t,n,e){for(var r=0;r<t.length;r++)if(e(t[r],n))return!0}var rt=function(e){function t(){return o}function n(t){return t(e)}var r=a(e),o={fold:function(t,n){return n(e)},is:function(t){return e===t},isSome:s,isNone:c,getOr:r,getOrThunk:r,getOrDie:r,getOrNull:r,getOrUndefined:r,or:t,orThunk:t,map:function(t){return rt(t(e))},each:function(t){t(e)},bind:n,exists:n,forall:n,filter:function(t){return t(e)?o:l},toArray:function(){return[e]},toString:function(){return"some("+e+")"},equals:function(t){return t.is(e)},equals_:function(t,n){return t.fold(c,function(t){return n(e,t)})}};return o},ot={some:rt,none:e,from:function(t){return null===t||t===undefined?l:rt(t)}},at=p("string"),it=p("object"),ut=p("array"),ft=p("function"),ct=Array.prototype.slice,st=Array.prototype.indexOf,lt=(ft(Array.from)&&Array.from,Object.keys),dt=Object.hasOwnProperty,mt=function(t,n){return dt.call(t,n)},gt=function(i){if(!ut(i))throw new Error("cases must be an array");if(0===i.length)throw new Error("there must be at least one case");var u=[],e={};return y(i,function(t,r){var n=lt(t);if(1!==n.length)throw new Error("one and only one name per case");var o=n[0],a=t[o];if(e[o]!==undefined)throw new Error("duplicate key detected:"+o);if("cata"===o)throw new Error("cannot have a case named cata (sorry)");if(!ut(a))throw new Error("case arguments must be an array");u.push(o),e[o]=function(){var t=arguments.length;if(t!==a.length)throw new Error("Wrong number of arguments to case "+o+". Expected "+a.length+" ("+a+"), got "+t);for(var e=new Array(t),n=0;n<e.length;n++)e[n]=arguments[n];return{fold:function(){if(arguments.length!==i.length)throw new Error("Wrong number of arguments to fold. Expected "+i.length+", got "+arguments.length);return arguments[r].apply(null,e)},match:function(t){var n=lt(t);if(u.length!==n.length)throw new Error("Wrong number of arguments to match. Expected: "+u.join(",")+"\nActual: "+n.join(","));if(!O(u,function(t){return h(n,t)}))throw new Error("Not all branches were specified when using match. Specified: "+n.join(", ")+"\nRequired: "+u.join(", "));return t[o].apply(null,e)},log:function(t){f.console.log(t,{constructors:u,constructor:o,params:e})}}}}),e},pt=(gt([{bothErrors:["error1","error2"]},{firstError:["error1","value2"]},{secondError:["value1","error2"]},{bothValues:["value1","value2"]}]),function(e){return{is:function(t){return e===t},isValue:s,isError:c,getOr:a(e),getOrThunk:a(e),getOrDie:a(e),or:function(t){return pt(e)},orThunk:function(t){return pt(e)},fold:function(t,n){return n(e)},map:function(t){return pt(t(e))},mapError:function(t){return pt(e)},each:function(t){t(e)},bind:function(t){return t(e)},exists:function(t){return t(e)},forall:function(t){return t(e)},toOption:function(){return ot.some(e)}}}),ht=function(e){return{is:c,isValue:c,isError:s,getOr:o,getOrThunk:function(t){return t()},getOrDie:function(){return function(t){return function(){throw new Error(t)}}(String(e))()},or:function(t){return t},orThunk:function(t){return t()},fold:function(t,n){return t(e)},map:function(t){return ht(e)},mapError:function(t){return ht(t(e))},each:n,bind:function(t){return ht(e)},exists:c,forall:s,toOption:ot.none}},vt={value:pt,error:ht,fromOption:function(t,n){return t.fold(function(){return ht(n)},pt)}},yt=function(r){return{setPatterns:function(t){var n=w(v(t,T));if(0<n.errors.length){var e=n.errors[0];throw new Error(e.message+":\n"+JSON.stringify(e.pattern,null,2))}r.set(R(n.values))},getPatterns:function(){return function f(){for(var t=0,n=0,e=arguments.length;n<e;n++)t+=arguments[n].length;var r=Array(t),o=0;for(n=0;n<e;n++)for(var a=arguments[n],i=0,u=a.length;i<u;i++,o++)r[o]=a[i];return r}(v(r.get().inlinePatterns,N),v(r.get().blockPatterns,N))}}},kt="undefined"!=typeof f.window?f.window:Function("return this;")(),bt=[{start:"*",end:"*",format:"italic"},{start:"**",end:"**",format:"bold"},{start:"#",format:"h1"},{start:"##",format:"h2"},{start:"###",format:"h3"},{start:"####",format:"h4"},{start:"#####",format:"h5"},{start:"######",format:"h6"},{start:"1. ",cmd:"InsertOrderedList"},{start:"* ",cmd:"InsertUnorderedList"},{start:"- ",cmd:"InsertUnorderedList"}],Ot=tinymce.util.Tools.resolve("tinymce.util.Delay"),wt=tinymce.util.Tools.resolve("tinymce.util.VK"),Et=tinymce.util.Tools.resolve("tinymce.util.Tools"),Ct=tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),xt=function(t,n,e){if(n&&t.isEmpty(n)&&!e(n)){var r=n.parentNode;t.remove(n),xt(t,r,e)}},Tt=function(t,e,r){if(!M(t))return ot.none();var n=t.textContent;return 0<=e&&e<=n.length?ot.some(I(t,e)):_(t,r).prev().bind(function(t){var n=t.textContent;return Tt(t,e+n.length,r)})},Nt=function(t,n,e){if(!M(t))return ot.none();var r=t.textContent;return n<=r.length?ot.some(I(t,n)):_(t,e).next().bind(function(t){return Nt(t,n-r.length,e)})},Rt=gt([{aborted:[]},{edge:["element"]},{success:["info"]}]),Pt=gt([{abort:[]},{kontinue:[]},{finish:["info"]}]),St=function(n,e,t,r,o,a){function i(){return a.fold(Rt.aborted,Rt.edge)}function u(){var t=o();return t?St(n,t,ot.none(),r,o,ot.some(e)):i()}if(n.isBlock(e))return i();if(M(e)){var f=e.textContent;return r(Pt,e,f,t).fold(Rt.aborted,function(){return u()},Rt.success)}return u()},Mt=0,At=function(c,s,l,d,m){var g=c.dom;return L(l,d,g.getRoot()).bind(function(t){var n=g.createRng();n.setStart(m,0),n.setEnd(l,d);for(var e,r,o=n.toString(),a=0;a<s.length;a++){var i=s[a];if(e=o,r=i.end,function(t,n,e){return""===n||!(t.length<n.length)&&t.substr(e,e+n.length)===n}(e,r,e.length-r.length)){var u=s.slice();u.splice(a,1);var f=Y(c,m,{pattern:i,remainingPatterns:u,position:t});if(f.isSome())return f}}return ot.none()})},Dt=function(e,t){if(!e.selection.isCollapsed())return!1;var r=tt(e,t.inlinePatterns,!1),o=z(e,t.blockPatterns);return(0<o.length||0<r.length)&&(e.undoManager.add(),e.undoManager.extra(function(){e.execCommand("mceInsertNewLine")},function(){e.insertContent("\ufeff"),nt(e,r),F(e,o);var t=e.selection.getRng(),n=L(t.startContainer,t.startOffset,e.dom.getRoot());e.execCommand("mceInsertNewLine"),n.each(function(t){"\ufeff"===t.element.data.charAt(t.offset-1)&&(t.element.deleteData(t.offset-1,1),xt(e.dom,t.element.parentNode,function(t){return t===e.dom.getRoot()}))})}),!0)},jt=function(t,n){var e=tt(t,n.inlinePatterns,!0);0<e.length&&t.undoManager.transact(function(){nt(t,e)})},Bt=function(t,n){return et(t,n,function(t,n){return t.charCodeAt(0)===n.charCode})},It=function(t,n){return et(t,n,function(t,n){return t===n.keyCode&&!1===wt.modifierPressed(n)})},_t=function(n,e){var r=[",",".",";",":","!","?"],o=[32];n.on("keydown",function(t){13!==t.keyCode||wt.modifierPressed(t)||Dt(n,e.get())&&t.preventDefault()},!0),n.on("keyup",function(t){It(o,t)&&jt(n,e.get())}),n.on("keypress",function(t){Bt(r,t)&&Ot.setEditorTimeout(n,function(){jt(n,e.get())})})};!function Lt(){t.add("textpattern",function(t){var n=r(S(t.settings));return _t(t,n),yt(n)})}()}(window);
