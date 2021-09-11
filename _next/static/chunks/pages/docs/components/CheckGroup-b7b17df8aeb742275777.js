(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5365],{194:function(e,t,n){"use strict";var l=n(7462),o=n(4942),r=n(66),a=n(5987),u=n(7294),c=n(5697),i=n.n(c),s=n(4184),d=n.n(s),p=n(4425),h=n(4957),k=n(1424),m=n(5604),f=n(8396),v=["name","children","onChange","className","defaultValue","value","layoutDirection"],g="CheckGroup",b=["column","row"],y=(0,p.Z)((function(e){return{root:{direction:e.direction,fontFamily:e.typography.fontFamily[e.direction],display:"flex",flexWrap:"wrap"},column:{flexDirection:"column"},row:{flexDirection:"row"}}}),{name:"Sonnat".concat(g)}),x=u.memo(u.forwardRef((function(e,t){var n=e.name,c=e.children,i=e.onChange,s=e.className,p=e.defaultValue,x=e.value,C=e.layoutDirection,Z=void 0===C?"column":C,w=(0,a.Z)(e,v),T=y(),j=(0,u.useRef)(),D=(0,h.Z)(t,j),O=(0,u.useRef)(null!=x?void 0:null!=p?p:[]).current,N=(0,k.Z)(x,O,g),G=(0,r.Z)(N,2),P=G[0],A=G[1];if(!Array.isArray(P))throw new Error("[Sonnat]: The `value` prop of `CheckGroup` component must be an array.");var E=(0,m.Z)(Z,"column",!b.includes(Z));return u.createElement(f.Z.Provider,{value:{name:n,value:P,onChange:function(e){var t;t=e.target.checked?P.concat(e.target.value):P.filter((function(t){return t!==e.target.value})),i&&i(e,t),A(t)}}},u.createElement("div",(0,l.Z)({role:"group",ref:D,className:d()(T.root,s,(0,o.Z)({},T[E],b.includes(E)))},w),c))})));x.propTypes={children:i().node,name:i().string,className:i().string,value:i().arrayOf(i().string),defaultValue:i().arrayOf(i().string),onChange:i().func,layoutDirection:i().oneOf(b)},x.displayName=g,t.Z=x},3839:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T},meta:function(){return Z}});var l=n(2809),o=n(7841),r=n(3464),a=n(7294),u=n(3905),c=n(8055),i=n(1786),s=n(9568),d=n(5893),p=n(9961),h=n(1557),k=n(194),m=n(1600),f=function(){var e=a.useState([]),t=(0,p.Z)(e,2),n=t[0],l=t[1];return(0,d.jsx)(m.Z,{flexDirection:"column",code:'import CheckGroup from "@sonnat/ui/CheckGroup";\nimport Checkbox from "@sonnat/ui/Checkbox";\nimport * as React from "react";\n\nconst Demo: React.FC = () => {\n  const [values, setValues] = React.useState([]);\n\n  return (\n    <React.Fragment>\n      <CheckGroup\n        value={values}\n        onChange={(e, selectedValues) => void setValues(selectedValues)}\n      >\n        <Checkbox label="Ali" value="Ali" />\n        <Checkbox label="David" value="David" />\n        <Checkbox label="Mostafa" value="Mostafa" />\n        <Checkbox label="Jacob" value="Jacob" />\n        <Checkbox label="Mehdi" value="Mehdi" />\n      </CheckGroup>\n      {values.length > 0 && (\n        <small>{values.join(", ")}</small>\n      )}\n    </React.Fragment>\n  );\n};\n\nexport default Demo;\n',children:(0,d.jsxs)(a.Fragment,{children:[(0,d.jsxs)(k.Z,{value:n,onChange:function(e,t){l(t)},children:[(0,d.jsx)(h.Z,{label:"Ali",value:"Ali"}),(0,d.jsx)(h.Z,{label:"David",value:"David"}),(0,d.jsx)(h.Z,{label:"Mostafa",value:"Mostafa"}),(0,d.jsx)(h.Z,{label:"Jacob",value:"Jacob"}),(0,d.jsx)(h.Z,{label:"Mehdi",value:"Mehdi"})]}),n.length>0&&(0,d.jsxs)(a.Fragment,{children:[(0,d.jsx)("div",{style:{width:32,borderTop:"1px solid #ddd",paddingTop:16,marginTop:16}}),(0,d.jsx)("small",{children:n.join(", ")})]})]})})};f.displayName="CheckGroupDemo";var v=f,g=n(9008),b=n(4069),y=n(7210);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z={title:"CheckGroup",description:"CheckGroups are used to group and manage checkbox controls.",getLayout:function(){return function(e){return(0,u.kt)(s.Z,{mdxType:"WithSidebar"},e)}}},w={meta:Z};function T(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,u.kt)("wrapper",C(C(C({},w),n),{},{components:t,mdxType:"MDXLayout"}),(0,u.kt)(g.default,{mdxType:"Head"},(0,y.aT)("".concat(Z.title," | Sonnat Developer Tools, React Components & Resources")),(0,y.u2)(Z.description),(0,y.ai)("".concat(b.z,"/docs/components/").concat(Z.title)),(0,y.hL)([].concat((0,o.Z)(b.t),["checkgroup","group","checkbox"]))),(0,u.kt)("h1",null,(0,u.kt)("span",null,Z.title),(0,u.kt)(i.Z,{anchorId:"overview",mdxType:"AnchorButton"}),(0,u.kt)(c.Z,{href:"pages/docs/components/".concat(Z.title,".mdx"),mdxType:"PageEditButton"})),(0,u.kt)("p",null,Z.description),(0,u.kt)("h2",null,(0,u.kt)("span",null,"Example"),(0,u.kt)(i.Z,{anchorId:"example",mdxType:"AnchorButton"})),(0,u.kt)(v,{mdxType:"CheckGroupDemo"}),(0,u.kt)("h2",null,(0,u.kt)("span",null,"API"),(0,u.kt)(i.Z,{anchorId:"api",mdxType:"AnchorButton"})),(0,u.kt)("p",null,"Learn more about the properties and the customization points."),(0,u.kt)("h3",null,(0,u.kt)("span",null,"Usage"),(0,u.kt)(i.Z,{anchorId:"usage",mdxType:"AnchorButton"})),(0,u.kt)("pre",null,(0,u.kt)("code",C({parentName:"pre"},{className:"language-typescript"}),'// recommended\nimport CheckGroup from "@sonnat/ui/CheckGroup";\n\n//or\nimport { CheckGroup } from "@sonnat/ui";\n')),(0,u.kt)("h3",null,(0,u.kt)("span",null,"Properties"),(0,u.kt)(i.Z,{anchorId:"properties",mdxType:"AnchorButton"})),(0,u.kt)("p",null,"Note that the documentation avoids mentioning all the native props (there are a lot) in this section of the components."),(0,u.kt)("table",{cols:4},(0,u.kt)("caption",null,"CheckGroup Properties"),(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"Name"),(0,u.kt)("th",null,"Type"),(0,u.kt)("th",null,"Default"),(0,u.kt)("th",null,"Description"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"children"),(0,u.kt)("td",null,"node"),(0,u.kt)("td",null,"-"),(0,u.kt)("td",null,"The content of the group.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"className"),(0,u.kt)("td",null,"string"),(0,u.kt)("td",null,"-"),(0,u.kt)("td",null,"Append to the class names applied to the component so you can override or extend the styles.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"name"),(0,u.kt)("td",null,"string"),(0,u.kt)("td",null,"-"),(0,u.kt)("td",null,"The name of the checkbox controls.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"value"),(0,u.kt)("td",null,"string[]"),(0,u.kt)("td",null,"-"),(0,u.kt)("td",null,"The values of the selected checkboxes.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"defaultValue"),(0,u.kt)("td",null,"string[]"),(0,u.kt)("td",null,"-"),(0,u.kt)("td",null,"The default value. Use when the component is not controlled.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"layoutDirection"),(0,u.kt)("td",null,'"row" | "column"'),(0,u.kt)("td",null,'"column"'),(0,u.kt)("td",null,"The layout direction of the group.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"onChange"),(0,u.kt)("td",null,"function"),(0,u.kt)("td",null,"-"),(0,u.kt)("td",null,"The callback fires when a checkbox has selected.",(0,u.kt)("br",null),(0,u.kt)("em",null,(0,u.kt)("strong",null,"Signature:"))," ",(0,u.kt)("inlineCode",null,"function(event: React.ChangeEvent, selectedValues: string[]) => void")))),(0,u.kt)("tfoot",null,(0,u.kt)("tr",null,(0,u.kt)("td",{colSpan:"4"},(0,u.kt)("ul",null,(0,u.kt)("li",null,"The ",(0,u.kt)("inlineCode",null,"ref")," is forwarded to the root element."),(0,u.kt)("li",null,"Any other properties supplied will be provided to the root element.")))))))}T.isMDXComponent=!0},3852:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/components/CheckGroup",function(){return n(3839)}])}},function(e){e.O(0,[2423,197,5725,9774,2888,179],(function(){return t=3852,e(e.s=t);var t}));var t=e.O();_N_E=t}]);