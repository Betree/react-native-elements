"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3577],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,h=s["".concat(c,".").concat(u)]||s[u]||d[u]||o;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9219:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>c,metadata:()=>p,toc:()=>m,default:()=>s});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),l=["components"],i={id:"image",title:"Image"},c=void 0,p={unversionedId:"image",id:"version-1.2.0/image",isDocsHomePage:!1,title:"Image",description:"Drop-in replacement for the standard React Native Image component that displays",source:"@site/versioned_docs/version-1.2.0/image.md",sourceDirName:".",slug:"/image",permalink:"/docs/1.2.0/image",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-1.2.0/image.md",version:"1.2.0",frontMatter:{id:"image",title:"Image"},sidebar:"version-1.2.0/docs",previous:{title:"Icon",permalink:"/docs/1.2.0/icon"},next:{title:"Input",permalink:"/docs/1.2.0/input"}},m=[{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[]},{value:"Reference",id:"reference",children:[{value:"<code>containerStyle</code>",id:"containerstyle",children:[]},{value:"<code>placeholderStyle</code>",id:"placeholderstyle",children:[]},{value:"<code>PlaceholderContent</code>",id:"placeholdercontent",children:[]},{value:"<code>ImageComponent</code>",id:"imagecomponent",children:[]}]}],d={toc:m};function s(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Drop-in replacement for the standard React Native Image component that displays\nimages with a placeholder and smooth image load transitioning."),(0,o.kt)("div",{class:"component-preview component-preview--single margin-none"},(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/5962998/48658581-f4170a00-ea1a-11e8-866c-df4f42f21947.gif",alt:"Image Component"})),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { ActivityIndicator } from 'react-native';\nimport { Image } from 'react-native-elements';\n\n// Standard Image\n<Image\n  source={{ uri: image }}\n  style={{ width: 200, height: 200 }}\n/>\n\n\n// Image with custom placeholder content\n<Image\n  source={{ uri: image }}\n  style={{ width: 200, height: 200 }}\n  PlaceholderContent={<ActivityIndicator />}\n/>\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Also receives all\n",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/image#props"},"React Native Image")," props")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#containerstyle"},(0,o.kt)("inlineCode",{parentName:"a"},"containerStyle"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#placeholderstyle"},(0,o.kt)("inlineCode",{parentName:"a"},"placeholderStyle"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#placeholdercontent"},(0,o.kt)("inlineCode",{parentName:"a"},"PlaceholderContent"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#imagecomponent"},(0,o.kt)("inlineCode",{parentName:"a"},"ImageComponent")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("h3",{id:"containerstyle"},(0,o.kt)("inlineCode",{parentName:"h3"},"containerStyle")),(0,o.kt)("p",null,"Additional styling for the container (optional)"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"View style (object)"),(0,o.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"placeholderstyle"},(0,o.kt)("inlineCode",{parentName:"h3"},"placeholderStyle")),(0,o.kt)("p",null,"Additional styling for the placeholder container (optional)"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"View style (object)"),(0,o.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"placeholdercontent"},(0,o.kt)("inlineCode",{parentName:"h3"},"PlaceholderContent")),(0,o.kt)("p",null,"Content to render when image is loading."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"component"),(0,o.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"imagecomponent"},(0,o.kt)("inlineCode",{parentName:"h3"},"ImageComponent")),(0,o.kt)("p",null,"Specify a different component as the Image component."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"React Native Component"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Image")))),(0,o.kt)("hr",null))}s.isMDXComponent=!0}}]);