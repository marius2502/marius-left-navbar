/*! For license information please see main.js.LICENSE */
!function(t){var e={};function n(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(s,i,function(e){return t[e]}.bind(null,i));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){},function(t,e,n){var s=n(2);t.exports="string"==typeof s?s:s.toString()},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,":host {\n  --item-width: 10em;\n  --item-height: 2.5em;\n  --skew-degree-x: 20deg;\n  --skew-degree-y: 5deg;\n  --background-color: #000;\n  --color: #838383;\n  --hover-background-color: var(--selectedColor);\n  --hover-color: white;\n  --shadow-x: 1.5em;\n  --shadow-y: 1em;\n  --selectedColor: rgb(29, 202, 255); }\n\nul {\n  position: fixed;\n  margin: 0;\n  padding: 0px;\n  list-style: none;\n  z-index: 99; }\n\n.listItem {\n  margin-top: 10px;\n  background: var(--background-color);\n  color: var(--color);\n  text-align: center;\n  height: var(--item-height);\n  width: var(--item-width);\n  line-height: 2.5em;\n  border-bottom: 1px solid #060606;\n  position: relative;\n  text-decoration: none;\n  vertical-align: middle;\n  box-shadow: var(--shadow-x) var(--shadow-y) 0 #e1e1e1;\n  transition: all .20s linear;\n  cursor: pointer; }\n  .listItem:hover {\n    background: var(--hover-background-color);\n    color: var(--hover-color);\n    -webkit-transform: translate(0.9em, 0em);\n            transform: translate(0.9em, 0em);\n    transition: all .25s linear;\n    box-shadow: -1.5em 1em 0 #e1e1e1; }\n\nsvg {\n  margin: 10px 10px; }\n\n.selected {\n  color: var(--selectedColor);\n  -webkit-transform: translate(0.9em, -0.19em);\n          transform: translate(0.9em, -0.19em); }\n\n.selected:hover {\n  color: var(--hover-color); }\n\n.loop {\n  background: var(--hover-background-color);\n  color: var(--hover-color);\n  -webkit-transform: translate(0.9em, -0.9em);\n          transform: translate(0.9em, -0.9em);\n  transition: all .25s linear;\n  box-shadow: -2em 2em 0 #e1e1e1;\n  -webkit-animation: turner .4s infinite linear;\n          animation: turner .4s infinite linear; }\n\n@-webkit-keyframes turner {\n  from {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg); }\n  to {\n    -webkit-transform: rotateY(360deg);\n            transform: rotateY(360deg); } }\n\n@keyframes turner {\n  from {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg); }\n  to {\n    -webkit-transform: rotateY(360deg);\n            transform: rotateY(360deg); } }\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",s=t[3];if(!s)return n;if(e&&"function"==typeof btoa){var i=(o=s,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),r=s.sources.map(function(t){return"/*# sourceURL="+s.sourceRoot+t+" */"});return[n].concat(r).concat([i]).join("\n")}var o;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var s={},i=0;i<this.length;i++){var r=this[i][0];null!=r&&(s[r]=!0)}for(i=0;i<t.length;i++){var o=t[i];null!=o[0]&&s[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(t,e,n){"use strict";n.r(e);n(0);const s=new WeakMap,i=t=>"function"==typeof t&&s.has(t),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(t,e,n=null)=>{let s=e;for(;s!==n;){const e=s.nextSibling;t.removeChild(s),s=e}},a={},l={},c=`{{lit-${String(Math.random()).slice(2)}}}`,h=`\x3c!--${c}--\x3e`,d=new RegExp(`${c}|${h}`),u="$lit$";class p{constructor(t,e){this.parts=[],this.element=e;let n=-1,s=0;const i=[],r=e=>{const o=e.content,a=document.createTreeWalker(o,133,null,!1);let l=0;for(;a.nextNode();){n++;const e=a.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const i=e.attributes;let r=0;for(let t=0;t<i.length;t++)i[t].value.indexOf(c)>=0&&r++;for(;r-- >0;){const i=t.strings[s],r=g.exec(i)[2],o=r.toLowerCase()+u,a=e.getAttribute(o).split(d);this.parts.push({type:"attribute",index:n,name:r,strings:a}),e.removeAttribute(o),s+=a.length-1}}"TEMPLATE"===e.tagName&&r(e)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(c)>=0){const r=e.parentNode,o=t.split(d),a=o.length-1;for(let t=0;t<a;t++)r.insertBefore(""===o[t]?f():document.createTextNode(o[t]),e),this.parts.push({type:"node",index:++n});""===o[a]?(r.insertBefore(f(),e),i.push(e)):e.data=o[a],s+=a}}else if(8===e.nodeType)if(e.data===c){const t=e.parentNode;null!==e.previousSibling&&n!==l||(n++,t.insertBefore(f(),e)),l=n,this.parts.push({type:"node",index:n}),null===e.nextSibling?e.data="":(i.push(e),n--),s++}else{let t=-1;for(;-1!==(t=e.data.indexOf(c,t+1));)this.parts.push({type:"node",index:-1})}}};r(e);for(const t of i)t.parentNode.removeChild(t)}}const m=t=>-1!==t.index,f=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class y{constructor(t,e,n){this._parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this._parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const t=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let n=0,s=0;const i=t=>{const r=document.createTreeWalker(t,133,null,!1);let o=r.nextNode();for(;n<e.length&&null!==o;){const t=e[n];if(m(t))if(s===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(o.previousSibling),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(o,t.name,t.strings,this.options));n++}else s++,"TEMPLATE"===o.nodeName&&i(o.content),o=r.nextNode();else this._parts.push(void 0),n++}};return i(t),r&&(document.adoptNode(t),customElements.upgrade(t)),t}}class v{constructor(t,e,n,s){this.strings=t,this.values=e,this.type=n,this.processor=s}getHTML(){const t=this.strings.length-1;let e="";for(let n=0;n<t;n++){const t=this.strings[n],s=g.exec(t);e+=s?t.substr(0,s.index)+s[1]+s[2]+u+s[3]+c:t+h}return e+this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}const _=t=>null===t||!("object"==typeof t||"function"==typeof t);class S{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new w(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let s=0;s<e;s++){n+=t[s];const e=this.parts[s];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)n+="string"==typeof e?e:String(e);else n+="string"==typeof t?t:String(t)}}return n+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class w{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===a||_(t)&&t===this.value||(this.value=t,i(t)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const t=this.value;this.value=a,t(this)}this.value!==a&&this.committer.commit()}}class b{constructor(t){this.value=void 0,this._pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(f()),this.endNode=t.appendChild(f())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=f()),t._insert(this.endNode=f())}insertAfterPart(t){t._insert(this.startNode=f()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;i(this._pendingValue);){const t=this._pendingValue;this._pendingValue=a,t(this)}const t=this._pendingValue;t!==a&&(_(t)?t!==this.value&&this._commitText(t):t instanceof v?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):t===l?(this.value=l,this.clear()):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&3===e.nodeType?e.data=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===e)this.value.update(t.values);else{const n=new y(e,t.processor,this.options),s=n._clone();n.update(t.values),this._commitNode(s),this.value=n}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,s=0;for(const i of t)void 0===(n=e[s])&&(n=new b(this.options),e.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(e[s-1])),n.setValue(i),n.commit(),s++;s<e.length&&(e.length=s,this.clear(n&&n.endNode))}clear(t=this.startNode){o(this.startNode.parentNode,t.nextSibling,this.endNode)}}class x{constructor(t,e,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this._pendingValue=t}commit(){for(;i(this._pendingValue);){const t=this._pendingValue;this._pendingValue=a,t(this)}if(this._pendingValue===a)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=a}}class P extends S{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new C(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class C extends w{}let N=!1;try{const t={get capture(){return N=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class k{constructor(t,e,n){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this._boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this._pendingValue=t}commit(){for(;i(this._pendingValue);){const t=this._pendingValue;this._pendingValue=a,t(this)}if(this._pendingValue===a)return;const t=this._pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),s&&(this._options=A(t),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=t,this._pendingValue=a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const A=t=>t&&(N?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);const T=new class{handleAttributeExpressions(t,e,n,s){const i=e[0];return"."===i?new P(t,e.slice(1),n).parts:"@"===i?[new k(t,e.slice(1),s.eventContext)]:"?"===i?[new x(t,e.slice(1),n)]:new S(t,e,n).parts}handleTextExpression(t){return new b(t)}};function E(t){let e=V.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},V.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const s=t.strings.join(c);return void 0===(n=e.keyString.get(s))&&(n=new p(t,t.getTemplateElement()),e.keyString.set(s,n)),e.stringsArray.set(t.strings,n),n}const V=new Map,O=new WeakMap;(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const M=(t,...e)=>new v(t,e,"html",T),R=133;function j(t,e){const{element:{content:n},parts:s}=t,i=document.createTreeWalker(n,R,null,!1);let r=I(s),o=s[r],a=-1,l=0;const c=[];let h=null;for(;i.nextNode();){a++;const t=i.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(c.push(t),null===h&&(h=t)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,o=s[r=I(s,r)]}c.forEach(t=>t.parentNode.removeChild(t))}const U=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,R,null,!1);for(;n.nextNode();)e++;return e},I=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(m(e))return n}return-1};const z=(t,e)=>`${t}--${e}`;let L=!0;void 0===window.ShadyCSS?L=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),L=!1);const $=t=>e=>{const n=z(e.type,t);let s=V.get(n);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},V.set(n,s));let i=s.stringsArray.get(e.strings);if(void 0!==i)return i;const r=e.strings.join(c);if(void 0===(i=s.keyString.get(r))){const n=e.getTemplateElement();L&&window.ShadyCSS.prepareTemplateDom(n,t),i=new p(e,n),s.keyString.set(r,i)}return s.stringsArray.set(e.strings,i),i},q=["html","svg"],F=new Set,B=(t,e,n)=>{F.add(n);const s=t.querySelectorAll("style");if(0===s.length)return void window.ShadyCSS.prepareTemplateStyles(e.element,n);const i=document.createElement("style");for(let t=0;t<s.length;t++){const e=s[t];e.parentNode.removeChild(e),i.textContent+=e.textContent}if((t=>{q.forEach(e=>{const n=V.get(z(e,t));void 0!==n&&n.keyString.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),j(t,n)})})})(n),function(t,e,n=null){const{element:{content:s},parts:i}=t;if(null==n)return void s.appendChild(e);const r=document.createTreeWalker(s,R,null,!1);let o=I(i),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===n&&(a=U(e),n.parentNode.insertBefore(e,n));-1!==o&&i[o].index===l;){if(a>0){for(;-1!==o;)i[o].index+=a,o=I(i,o);return}o=I(i,o)}}(e,i,e.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(e.element,n),window.ShadyCSS.nativeShadow){const n=e.element.content.querySelector("style");t.insertBefore(n.cloneNode(!0),t.firstChild)}else{e.element.content.insertBefore(i,e.element.content.firstChild);const t=new Set;t.add(i),j(e,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const H={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},W=(t,e)=>e!==t&&(e==e||t==t),J={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:W},Y=Promise.resolve(!0),D=1,G=4,K=8,Q=16,X=32;class Z extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=Y,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,n)=>{const s=this._attributeNameForProperty(n,e);void 0!==s&&(this._attributeToPropertyMap.set(s,n),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=J){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[n]},set(e){const s=this[t];this[n]=e,this._requestUpdate(t,s)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const t=Object.getPrototypeOf(this);if("function"==typeof t.finalize&&t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=W){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,s=e.converter||H,i="function"==typeof s?s:s.fromAttribute;return i?i(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,s=e.converter;return(s&&s.toAttribute||H.toAttribute)(t,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|X,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=J){const s=this.constructor,i=s._attributeNameForProperty(t,n);if(void 0!==i){const t=s._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=this._updateState|K,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=this._updateState&~K}}_attributeToProperty(t,e){if(this._updateState&K)return;const n=this.constructor,s=n._attributeToPropertyMap.get(t);if(void 0!==s){const t=n._classProperties.get(s)||J;this._updateState=this._updateState|Q,this[s]=n._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~Q}}_requestUpdate(t,e){let n=!0;if(void 0!==t){const s=this.constructor,i=s._classProperties.get(t)||J;s._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||this._updateState&Q||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|G;const n=this._updatePromise;this._updatePromise=new Promise((n,s)=>{t=n,e=s});try{await n}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&X}get _hasRequestedUpdate(){return this._updateState&G}get hasUpdated(){return this._updateState&D}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{(t=this.shouldUpdate(e))&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(this._updateState&D||(this._updateState=this._updateState|D,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~G}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}Z.finalized=!0;const tt=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}}:Object.assign({},e,{finisher(n){n.createProperty(e.key,t)}}),et=(t,e,n)=>{e.constructor.createProperty(n,t)};function nt(t){return(e,n)=>void 0!==n?et(t,e,n):tt(t,e)}const st="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,it=Symbol();class rt{constructor(t,e){if(e!==it)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(st?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const ot=t=>t.flat?t.flat(1/0):function t(e,n=[]){for(let s=0,i=e.length;s<i;s++){const i=e[s];Array.isArray(i)?t(i,n):n.push(i)}return n}(t);class at extends Z{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){ot(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?st?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof v&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}at.finalized=!0,at.render=(t,e,n)=>{const s=n.scopeName,i=O.has(e),r=e instanceof ShadowRoot&&L&&t instanceof v,a=r&&!F.has(s),l=a?document.createDocumentFragment():e;if(((t,e,n)=>{let s=O.get(e);void 0===s&&(o(e,e.firstChild),O.set(e,s=new b(Object.assign({templateFactory:E},n))),s.appendInto(e)),s.setValue(t),s.commit()})(t,l,Object.assign({templateFactory:$(s)},n)),a){const t=O.get(l);O.delete(l),t.value instanceof y&&B(l,t.value.template,s),o(e,e.firstChild),e.appendChild(l),O.set(e,t)}!i&&r&&window.ShadyCSS.styleElement(e.host)},window.navigator.userAgent.match("Trident")&&(DOMTokenList.prototype.toggle=function(t,e){return void 0===e||e?this.add(t):this.remove(t),void 0===e||e});const lt=new WeakMap,ct=new WeakMap,ht=(t=>(...e)=>{const n=t(...e);return s.set(n,!0),n})(t=>e=>{if(!(e instanceof w)||e instanceof C||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");ct.has(e)||(e.committer.element.className=e.committer.strings.join(" "),ct.set(e,!0));const n=lt.get(e);for(const s in n)s in t||e.committer.element.classList.remove(s);for(const s in t)n&&n[s]===t[s]||e.committer.element.classList.toggle(s,Boolean(t[s]));lt.set(e,t)});var dt=function(t,e,n,s){var i,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,s);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(r<3?i(o):r>3?i(e,n,o):i(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o};const ut=n(1);let pt=class extends at{constructor(){super(...arguments),this.title="Example button",this.selectedItem="Components",this.navigationItems=["Home","Components","Documentation","Get started","Account"]}getClassMap(t){return{listItem:!0,selected:this.selectedItem===t}}emit(){console.log("Button clicked"),this.dispatchEvent(new CustomEvent("buttonClick",{bubbles:!0}))}render(){return M`
          <ul>
            ${this.navigationItems.map(t=>M`
            <li @click=${()=>this.selectedItem=t} class=${ht(this.getClassMap(t))}>
              ${t}

            </li>
            `)}
          </ul>
`}};pt.styles=((t,...e)=>{const n=e.reduce((e,n,s)=>e+(t=>{if(t instanceof rt)return t.cssText;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+t[s+1],t[0]);return new rt(n,it)})`${(t=>new rt(String(t),it))(ut)}`,dt([nt()],pt.prototype,"title",void 0),dt([nt()],pt.prototype,"selectedItem",void 0),dt([nt()],pt.prototype,"navigationItems",void 0),pt=dt([(t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:n,elements:s}=e;return{kind:n,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e))("marius-left-navbar")],pt)}]);