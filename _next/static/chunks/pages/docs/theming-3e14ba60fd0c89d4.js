(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3734],{7102:function(e,t,n){"use strict";var r=n(2305);t.Z=function(){return(0,r.useTheme)()}},567:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/theming",function(){return n(2836)}])},638:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}t.default=function(e,t){var n=a.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};i=e,u=Promise,(null!=u&&"undefined"!==typeof Symbol&&u[Symbol.hasInstance]?u[Symbol.hasInstance](i):i instanceof u)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=o({},r,e));var i,u;var s=r=o({},r,t);if(s.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(s.suspense)return n(s);r.loadableGenerated&&delete(r=o({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,l(n,r);delete r.ssr}return n(r)};i(n(7294));var a=i(n(4302));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}},6319:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=o},4302:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,l=(i=n(7294))&&i.__esModule?i:{default:i},u=n(7161),s=n(6319);var c=[],m=[],d=!1;function h(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var f=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,n,o;return t=e,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;if(t.loading){if("number"===typeof n.delay)if(0===n.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),n.delay)}if("number"===typeof n.timeout){var o=this;this._timeout=setTimeout((function(){o._update({timedOut:!0})}),n.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&r(t.prototype,n),o&&r(t,o),e}();function p(e){return function(e,t){var n=function(){if(!o){var t=new f(e,r);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=l.default.lazy(r.loader));var o=null;if(!d&&"function"===typeof r.webpack&&!r.suspense){var i=r.webpack();m.push((function(e){var t=!0,r=!1,o=void 0;try{for(var a,l=i[Symbol.iterator]();!(t=(a=l.next()).done);t=!0){var u=a.value;if(-1!==e.indexOf(u))return n()}}catch(s){r=!0,o=s}finally{try{t||null==l.return||l.return()}finally{if(r)throw o}}}))}var c=r.suspense?function(e,t){return l.default.createElement(r.lazy,a({},e,{ref:t}))}:function(e,t){n();var a=l.default.useContext(s.LoadableContext),i=u.useSubscription(o);return l.default.useImperativeHandle(t,(function(){return{retry:o.retry}}),[]),a&&Array.isArray(r.modules)&&r.modules.forEach((function(e){a(e)})),l.default.useMemo((function(){return i.loading||i.error?l.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:o.retry}):i.loaded?l.default.createElement(function(e){return e&&e.__esModule?e.default:e}(i.loaded),e):null}),[e,i])};return c.preload=function(){return!r.suspense&&n()},c.displayName="LoadableComponent",l.default.forwardRef(c)}(h,e)}function y(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return y(e,t)}))}p.preloadAll=function(){return new Promise((function(e,t){y(c).then(e,t)}))},p.preloadReady=function(e){var t=void 0===e?[]:e;return new Promise((function(e){var n=function(){return d=!0,e()};y(m,t).then(n,n)}))},window.__NEXT_PRELOADREADY=p.preloadReady;var b=p;t.default=b},2836:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O},meta:function(){return T}});var r=n(7294),o=n(3905),a=n(5048),i=n(3814),l=n(9522),u=n(5893),s=n(7102),c=n(5152);function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var h=function(e){var t=e.className,r=d(e,["className"]),o=(0,s.Z)(),a=(0,c.default)((function(){return n.e(5171).then(n.t.bind(n,1633,23))}),{loadableGenerated:{webpack:function(){return[1633]},modules:["../components/JsonViewBox/JsonViewBox.tsx -> react-json-view"]},ssr:!1});return(0,u.jsx)("div",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){m(e,t,n[t])}))}return e}({},r,{className:t,children:(0,u.jsx)(a,{style:{backgroundColor:o.colors.transparent},src:o,theme:o.darkMode?"google":"rjv-default",name:"defaultTheme",indentWidth:2,collapsed:!0,enableClipboard:!1,displayObjectSize:!1})}))},f=r.memo(h);f.displayName="JsonViewBox";var p=f,y=n(9008),b=n(9118),g=n(4765);function v(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function k(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var T={title:"Theming",description:"Customize Sonnat with your own theme. You can change the breakpoints, coloring, typography and etc.",getLayout:function(){return function(e){return(0,o.kt)(l.Z,{mdxType:"WithSidebar"},e)}}},w={meta:T};function O(e){var t=e.components,n=v(e,["components"]);return(0,o.kt)("wrapper",Object.assign({},w,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(y.default,{mdxType:"Head"},(0,g.aT)("".concat(T.title," | Sonnat Developer Tools, React Components & Resources")),(0,g.u2)(T.description),(0,g.ai)("".concat(b.z,"/docs/theming")),(0,g.hL)(k(b.t).concat(["theming","theming","customize theme","sonnat theme","\u062a\u0645","\u067e\u0648\u0633\u062a\u0647"]))),(0,o.kt)("h1",null,(0,o.kt)("span",null,T.title),(0,o.kt)(i.Z,{anchorId:"overview",mdxType:"AnchorButton"}),(0,o.kt)(a.Z,{href:"pages/docs/theming.mdx",mdxType:"PageEditButton"})),(0,o.kt)("p",null,T.description),(0,o.kt)("p",null,"Themes let you apply a consistent feeling and tone to your application. It allows you to customize all the design aspects of your application in order to meet the specific needs of your business or brand."),(0,o.kt)("h2",null,(0,o.kt)("span",null,"Creating the Theme"),(0,o.kt)(i.Z,{anchorId:"creating-the-theme",mdxType:"AnchorButton"})),(0,o.kt)("p",null,"Create a theme object that will be shared between the client and the server.",(0,o.kt)("br",null),"If you don't provide a theme object the theming will be defaults to"," ",(0,o.kt)("a",{href:"#default-theme"},"Default Theme"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'// file: theme.js\n\nimport createTheme from "@sonnat/ui/styles/createTheme";\n\n// Create a theme instance.\nconst theme = createTheme({\n  // Your theme options\n});\n\nexport default theme;\n')),(0,o.kt)("div",{"data-notebox":!0,style:{marginBottom:"1rem"}},"To learn more about the createTheme 's API, check out the"," ",(0,o.kt)("a",{href:"/docs/styling#create-theme",title:"createTheme's documentation"},(0,o.kt)("strong",null,"createTheme's documentation")),"."),(0,o.kt)("h2",null,(0,o.kt)("span",null,"Default Theme"),(0,o.kt)(i.Z,{anchorId:"default-theme",mdxType:"AnchorButton"})),(0,o.kt)("p",null,"Here's what the theme object looks like with the default values. Explore the default theme object:"),(0,o.kt)(p,{mdxType:"JsonViewBox"}),(0,o.kt)("div",{"data-notebox":!0},(0,o.kt)("strong",null,"Tip:")," you can play with the documentation theme object in your browser console, as the theme variable is exposed on all the documentation pages. Please note that the documentation site is using the default theme."),(0,o.kt)("h2",null,(0,o.kt)("span",null,"Passing Down the Theme Object"),(0,o.kt)(i.Z,{anchorId:"pass-theme",mdxType:"AnchorButton"})),(0,o.kt)("p",null,"If you wish to declare the parent theme of your application, you need to use the ",(0,o.kt)("inlineCode",null,"<SonnatInitializer>")," component in order to inject the main theme into your application. However, if you want to change the theming behaviour of an inner part of application's react-tree, you can always use nested ",(0,o.kt)("inlineCode",null,"<ThemeProvider>")," component to merge/augment the parent theme object."),(0,o.kt)("div",{"data-notebox":!0,style:{marginTop:"0",marginBottom:"1rem"}},"Check out the documentations of"," ",(0,o.kt)("a",{href:"/docs/styling#sonnat-initializer",title:"SonnatInitializer's documentation"},(0,o.kt)("strong",null,"<SonnatInitializer>"))," ","and"," ",(0,o.kt)("a",{href:"/docs/styling#theme-provider",title:"ThemeProvider's documentation"},(0,o.kt)("strong",null,"<ThemeProvider>")),", to learn more about them."),(0,o.kt)("pre",null,(0,o.kt)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'import ThemeProvider from "@sonnat/ui/styles/ThemeProvider";\nimport SonnatInitializer from "@sonnat/ui/styles/SonnatInitializer";\n\n<SonnatInitializer theme={mainTheme}>\n  <CustomComponent />\n  <ThemeProvider theme={theme2}>\n    <CustomComponent />\n  </ThemeProvider>;\n</SonnatInitializer>;\n')),(0,o.kt)("div",{"data-notebox":!0},"Please note that you cannot nest ",(0,o.kt)("strong",null,"<SonnatInitializer>"),"!",(0,o.kt)("br",null),"You can only use ",(0,o.kt)("strong",null,"<SonnatInitializer>")," once and at the top of your application's React-Tree."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",null,"<ThemeProvider>")," has a"," ",(0,o.kt)("inlineCode",null,"theme")," prop which should be an"," ",(0,o.kt)("inlineCode",null,"object")," or ",(0,o.kt)("inlineCode",null,"function"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"If it is"," ",(0,o.kt)("strong",null,(0,o.kt)("em",null,"Object")),", then it gets merged with the theme from a parent ",(0,o.kt)("em",null,"ThemeProvider")," and passed down the react tree.",(0,o.kt)("code",{className:"language-jsx",children:"const theme = { themed: true };\nconst patch = { merged: true };\n\n<ThemeProvider theme={theme}>\n  {/* { ...initializerTheme, themed: true } */}\n  <ThemeProvider theme={patch}>\n    <DemoBox /> {/* { ...initializerTheme, themed: true, merged: true } */}\n  </ThemeProvider>\n</ThemeProvider>;"})),(0,o.kt)("li",null,"If it is"," ",(0,o.kt)("strong",null,(0,o.kt)("em",null,"Function")),", then it's being applied to the theme from a parent ",(0,o.kt)("em",null,"ThemeProvider"),". If the result is an Object it will be passed down the react tree, throws otherwise.",(0,o.kt)("code",{className:"language-jsx",children:"const theme = { themed: true };\nconst augment = outerTheme => ({...outerTheme, { augmented: true }});\n\n<ThemeProvider theme={theme}>\n  {/* { ...initializerTheme, themed: true } */}\n  <ThemeProvider theme={augment}>\n    <DemoBox /> {/* { ...initializerTheme, themed: true, augmented: true } */}\n  </ThemeProvider>\n</ThemeProvider>;"}))),(0,o.kt)("h2",{style:{marginTop:"-2rem"}},(0,o.kt)("span",null,"Accessing the Theme Object"),(0,o.kt)(i.Z,{anchorId:"access-theme",mdxType:"AnchorButton"})),(0,o.kt)("p",null,"You can access the theme object in Function Components via"," ",(0,o.kt)("a",{href:"/docs/styling#use-theme",title:"useTheme's documentation"},"useTheme")," ","hook."),(0,o.kt)("pre",null,(0,o.kt)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'import React from "react";\nimport useTheme from "@sonnat/ui/styles/useTheme";\n\nexport default function MyComponent() {\n  const theme = useTheme();\n\n  return <div style={{ color: theme.colors.primary.origin }}></div>;\n}\n')),(0,o.kt)("p",null,"You can also access the theme object when styling components using"," ",(0,o.kt)("a",{href:"/docs/styling#make-styles",title:"makeStyles' documentation"},"makeStyles")," ","function.",(0,o.kt)("br",null),"This function uses"," ",(0,o.kt)("a",{href:"/docs/styling#overview",title:"Sonnat's styling solution documentation"},"our styling solution")," ","at its core."),(0,o.kt)("pre",null,(0,o.kt)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'import makeStyles from "@sonnat/ui/styles/makeStyles";\n\nconst useThemedStyles = makeStyles(\n  theme => ({\n    root: { color: theme.colors.text.dark.primary }\n  }),\n  { name: "MyThemedStyles" }\n);\n\nfunction ComponentA(props) {\n  const classes = useThemedStyles();\n  return <div className={classes.root} />;\n}\n')))}O.isMDXComponent=!0},5152:function(e,t,n){e.exports=n(638)}},function(e){e.O(0,[9774,8242,2389,2888,179],(function(){return t=567,e(e.s=t);var t}));var t=e.O();_N_E=t}]);