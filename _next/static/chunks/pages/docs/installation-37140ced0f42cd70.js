(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4442],{1622:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/installation",function(){return e(1783)}])},1783:function(t,n,e){"use strict";e.r(n),e.d(n,{meta:function(){return d},default:function(){return k}});e(7294);var o=e(3905),a=e(5048),r=e(3814),i=e(9522),l=e(9008),s=e(9118),c=e(4765);function u(t,n){if(null==t)return{};var e,o,a=function(t,n){if(null==t)return{};var e,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)e=r[o],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)e=r[o],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}function p(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var d={title:"Installation",description:"Install Sonnat-UI, the React component library using Sonnat Design System to build faster, elegant, and accessible web applications.",getLayout:function(){return function(t){return(0,o.kt)(i.Z,{mdxType:"WithSidebar"},t)}}},m={meta:d};function k(t){var n=t.components,e=u(t,["components"]);return(0,o.kt)("wrapper",Object.assign({},m,e,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(l.default,{mdxType:"Head"},(0,c.aT)("".concat(d.title," | Sonnat Developer Tools, React Components & Resources")),(0,c.u2)(d.description),(0,c.ai)("".concat(s.z,"/docs/installation")),(0,c.hL)(p(s.t).concat(["install","installation","getting started","get started","\u0634\u0631\u0648\u0639","\u0646\u0635\u0628","\u062f\u0627\u0646\u0644\u0648\u062f"]))),(0,o.kt)("h1",null,(0,o.kt)("span",null,d.title),(0,o.kt)(r.Z,{anchorId:"overview",mdxType:"AnchorButton"}),(0,o.kt)(a.Z,{href:"pages/docs/installation.mdx",mdxType:"PageEditButton"})),(0,o.kt)("p",null,d.description),(0,o.kt)("p",null,"If you have questions about anything related to Sonnat UI, you're always welcome to ask our community on"," ",(0,o.kt)("a",{href:"https://github.com/sonnat/sonnat-ui/discussions",target:"_blank",rel:"noopener noreferrer",title:"GitHub Discussions"},"GitHub Discussions")," ","and"," ",(0,o.kt)("a",{href:"https://discord.gg/h4Dpr4PnXW",target:"_blank",rel:"noopener noreferrer",title:"Discord"},"Discord"),"."),(0,o.kt)("h2",null,(0,o.kt)("span",null,"Setup"),(0,o.kt)(r.Z,{anchorId:"setup",mdxType:"AnchorButton"})),(0,o.kt)("p",null,"Ensure you have the latest version of NodeJS, and a package manager:"," ",(0,o.kt)("a",{href:"https://www.npmjs.com/get-npm",target:"_blank",rel:"noopener noreferrer",title:"Get NPM"},"NPM")," ","or"," ",(0,o.kt)("a",{href:"https://yarnpkg.com/getting-started/install",target:"_blank",rel:"noopener noreferrer",title:"Get Yarn"},"Yarn"),"."),(0,o.kt)("h3",null,(0,o.kt)("span",null,"Using ",(0,o.kt)("mark",null,"create-sonnat-app")),(0,o.kt)(r.Z,{anchorId:"create-sonnat-app",mdxType:"AnchorButton"})),(0,o.kt)("p",null,"We recommend creating a new Sonnat App using"," ",(0,o.kt)("inlineCode",null,"create-sonnat-app"),", which sets up everything automatically for you. To create a new project, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"yarn create sonnat-app <project-name> <project-template> [options]\n\n# or\nnpx create-sonnat-app <project-name> <project-template> [options]\n")),(0,o.kt)("p",null,"If you want to start with a TypeScript project you can use the"," ",(0,o.kt)("inlineCode",null,"--typescript")," flag."),(0,o.kt)("div",{"data-notebox":!0,style:{marginTop:"-0.5rem",marginBottom:"1rem"}},"For more information on how to use ",(0,o.kt)("inlineCode",null,"create-sonnat-app"),", you can review the"," ",(0,o.kt)("a",{href:"https://github.com/sonnat/create-sonnat-app",target:"_blank",rel:"noopener noreferrer",title:"Create Sonnat App Documentation"},"documentation"),"."),(0,o.kt)("h3",null,(0,o.kt)("span",null,"Adding Sonnat to existing project"),(0,o.kt)(r.Z,{anchorId:"adding-sonnat-to-existing-project",mdxType:"AnchorButton"})),(0,o.kt)("div",{"data-notebox":!0,style:{marginTop:"0.5rem",marginBottom:"1rem"}},"Please note that"," ",(0,o.kt)("a",{href:"https://www.npmjs.com/package/react",target:"_blank",rel:"noopener noreferrer",title:"ReactJs"},"react")," ",">= 17.0.2 and"," ",(0,o.kt)("a",{href:"https://www.npmjs.com/package/react-dom",target:"_blank",rel:"noopener noreferrer",title:"ReactJs"},"react-dom")," ",">= 17.0.2 are peer dependencies."),(0,o.kt)("ol",null,(0,o.kt)("li",null,"Run the following script to install and save in your"," ",(0,o.kt)("inlineCode",null,"package.json")," dependencies:",(0,o.kt)("code",{className:"language-bash",children:"# with npm\nnpm install @sonnat/ui\n\n# or with yarn\nyarn add @sonnat/ui"})),(0,o.kt)("li",null,"Initialize ",(0,o.kt)("inlineCode",null,"@sonnat/ui")," in your project:",(0,o.kt)("code",{className:"language-jsx",children:'import CssBaseline from "@sonnat/ui/CssBaseline";\nimport SonnatInitializer from "@sonnat/ui/styles/SonnatInitializer";\n\nconst App = () => (\n  <SonnatInitializer>\n    <CssBaseline />\n    <MyComponent />\n  </SonnatInitializer>\n);'}),(0,o.kt)("div",{"data-notebox":!0,style:{marginBottom:"1rem",marginTop:"-1rem"}},"Check out the documentations of"," ",(0,o.kt)("a",{href:"/docs/styling#sonnat-initializer",title:"SonnatInitializer documentation"},(0,o.kt)("strong",null,"<SonnatInitializer>"))," ","and"," ",(0,o.kt)("a",{href:"/docs/components/CssBaseline",title:"CssBaseline documentation"},(0,o.kt)("strong",null,"<CssBaseline>")),", to learn more about them.")),(0,o.kt)("li",null,"Use ",(0,o.kt)("inlineCode",null,"@sonnat/ui")," components and utilities anywhere in your React-Tree:",(0,o.kt)("code",{className:"language-jsx",children:'import Button from "@sonnat/ui/Button";\n\nconst MyComponent = () => <Button label="Text" />;'})),(0,o.kt)("li",null,"If your project needs to be rendered on the server as well, follow"," ",(0,o.kt)("a",{href:"/docs/server-side-rendering"},"this guide"),".")))}k.isMDXComponent=!0}},function(t){t.O(0,[8242,2389,9774,2888,179],(function(){return n=1622,t(t.s=n);var n}));var n=t.O();_N_E=n}]);