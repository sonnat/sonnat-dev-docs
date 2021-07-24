(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9790],{194:function(e,t,n){"use strict";var l=n(2122),o=n(6156),u=n(4699),a=n(1253),r=n(7294),c=n(5697),i=n.n(c),d=n(4184),k=n.n(d),s=n(4425),h=n(4957),p=n(1424),b=n(5604),m=n(8396),x=["name","children","onChange","className","defaultValue","value","layoutDirection"],f="CheckGroup",C=["column","row"],g=(0,s.Z)((function(e){return{root:{direction:e.direction,fontFamily:e.typography.fontFamily[e.direction],display:"flex",flexWrap:"wrap"},column:{flexDirection:"column"},row:{flexDirection:"row"}}}),{name:"Sonnat".concat(f)}),y=r.memo(r.forwardRef((function(e,t){var n=e.name,c=e.children,i=e.onChange,d=e.className,s=e.defaultValue,y=e.value,v=e.layoutDirection,T=void 0===v?"column":v,w=(0,a.Z)(e,x),Z=g(),P=(0,r.useRef)(),O=(0,h.Z)(t,P),S=(0,r.useRef)(null!=y?void 0:null!=s?s:[]).current,D=(0,p.Z)(y,S,f),j=(0,u.Z)(D,2),I=j[0],N=j[1];if(!Array.isArray(I))throw new Error("[Sonnat]: The `value` prop of `CheckGroup` component must be an array.");var B=(0,b.Z)(T,"column",!C.includes(T));return r.createElement(m.Z.Provider,{value:{name:n,value:I,onChange:function(e){var t;t=e.target.checked?I.concat(e.target.value):I.filter((function(t){return t!==e.target.value})),i&&i(e,t),N(t)}}},r.createElement("div",(0,l.Z)({role:"group",ref:O,className:k()(Z.root,d,(0,o.Z)({},Z[B],C.includes(B)))},w),c))})));y.propTypes={children:i().node,name:i().string,className:i().string,value:i().arrayOf(i().string),defaultValue:i().arrayOf(i().string),onChange:i().func,layoutDirection:i().oneOf(C)},y.displayName=f,t.Z=y},3788:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P},meta:function(){return w}});var l=n(6265),o=n(8140),u=n(8347),a=n(7294),r=n(3905),c=n(1557),i=n(194),d=n(8055),k=n(1786),s=n(9568),h=n(5893),p=n(2292),b=n(7913),m=n(1600),x=function(){var e=a.useState(!1),t=(0,p.Z)(e,2),n=t[0],l=t[1];return(0,h.jsx)(m.Z,{flexDirection:"column",code:'import Checkbox from "@sonnat/ui/Checkbox";\nimport Button from "@sonnat/ui/Button";\nimport * as React from "react";\n\nconst Demo: React.FC = () => {\n  const [checked, setChecked] = React.useState(false);\n\n  return (\n    <React.Fragment>\n      <Button\n        variant="outlined"\n        size="small"\n        label="Toggle the Checkbox"\n        onClick={() => void setChecked(c => !c)}\n      />\n      <Checkbox\n        label="Label"\n        checked={checked}\n        inputProps={{ id: "ch-box-2" }}\n        onChange={() => void setChecked(c => !c)}\n      />\n    </React.Fragment>\n  );\n};\n\nexport default Demo;\n',children:(0,h.jsxs)(a.Fragment,{children:[(0,h.jsx)(b.Z,{variant:"outlined",size:"small",label:"Toggle the Checkbox",onClick:function(){l((function(e){return!e}))}}),(0,h.jsx)(c.Z,{label:"Label",checked:n,inputProps:{id:"ch-box-2"},onChange:function(){l((function(e){return!e}))}})]})})};x.displayName="CheckboxControlledDemo";var f=x,C=n(9008),g=n(4069),y=n(7210);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w={title:"Checkbox",description:"Checkboxes are used for selecting multiple values from several options.",getLayout:function(){return function(e){return(0,r.kt)(s.Z,{mdxType:"WithSidebar"},e)}}},Z={meta:w};function P(e){var t=e.components,n=(0,u.Z)(e,["components"]);return(0,r.kt)("wrapper",T(T(T({},Z),n),{},{components:t,mdxType:"MDXLayout"}),(0,r.kt)(C.default,{mdxType:"Head"},(0,y.aT)("".concat(w.title," | Sonnat Developer Tools, React Components & Resources")),(0,y.u2)(w.description),(0,y.ai)("".concat(g.z,"/docs/components/").concat(w.title)),(0,y.hL)([].concat((0,o.Z)(g.t),["checkbox","\u0686\u06a9\u200c\u0628\u0627\u06a9\u0633","\u0686\u06a9 \u0628\u0627\u06a9\u0633"]))),(0,r.kt)("h1",null,(0,r.kt)("span",null,w.title),(0,r.kt)(k.Z,{anchorId:"overview",mdxType:"AnchorButton"}),(0,r.kt)(d.Z,{href:"pages/docs/components/".concat(w.title,".mdx"),mdxType:"PageEditButton"})),(0,r.kt)("p",null,w.description),(0,r.kt)("p",null,"If you use only one checkbox, it is the same as using"," ",(0,r.kt)("a",{href:"/docs/components/Switch",title:"Switch documentation"},"Switch")," ","to toggle between two states. The difference is that Switch will trigger the state change directly, but Checkbox just marks the state as changed and this needs to be submitted."),(0,r.kt)("h2",null,(0,r.kt)("span",null,"Simple Checkboxes"),(0,r.kt)(k.Z,{anchorId:"simple-checkboxes",mdxType:"AnchorButton"})),(0,r.kt)(m.Z,{code:'<Checkbox />\n<Checkbox disabled />\n<Checkbox defaultChecked disabled />\n<Checkbox indeterminated />\n<Checkbox indeterminated disabled />\n<Checkbox inputProps={{ id: "ch-box-0" }} defaultChecked label="Label" />\n<Checkbox\n  inputProps={{ id: "ch-box-1" }}\n  defaultChecked\n  label="Label"\n  disabled\n/>',mdxType:"DemoBox"},(0,r.kt)(c.Z,{mdxType:"Checkbox"}),(0,r.kt)(c.Z,{disabled:!0,mdxType:"Checkbox"}),(0,r.kt)(c.Z,{defaultChecked:!0,disabled:!0,mdxType:"Checkbox"}),(0,r.kt)(c.Z,{indeterminated:!0,mdxType:"Checkbox"}),(0,r.kt)(c.Z,{indeterminated:!0,disabled:!0,mdxType:"Checkbox"}),(0,r.kt)(c.Z,{inputProps:{id:"ch-box-0"},defaultChecked:!0,label:"Label",mdxType:"Checkbox"}),(0,r.kt)(c.Z,{inputProps:{id:"ch-box-1"},defaultChecked:!0,label:"Label",disabled:!0,mdxType:"Checkbox"})),(0,r.kt)("h2",null,(0,r.kt)("span",null,"Sizes"),(0,r.kt)(k.Z,{anchorId:"sizes",mdxType:"AnchorButton"})),(0,r.kt)("p",null,"To have the larger or smaller checkboxes, use the"," ",(0,r.kt)("inlineCode",null,"size")," property."),(0,r.kt)(m.Z,{code:['<Checkbox label="Small" size="small" />','<Checkbox label="Medium (default)" size="medium" />','<Checkbox label="Large" size="large" />'].join("\n"),mdxType:"DemoBox"},(0,r.kt)(c.Z,{label:"Small",size:"small",className:"demoSubject",mdxType:"Checkbox"}),(0,r.kt)(c.Z,{label:"Medium (default)",size:"medium",className:"demoSubject",mdxType:"Checkbox"}),(0,r.kt)(c.Z,{label:"Large",size:"large",className:"demoSubject",mdxType:"Checkbox"})),(0,r.kt)("h2",null,(0,r.kt)("span",null,"Controlled Checkboxes"),(0,r.kt)(k.Z,{anchorId:"controlled-checkboxes",mdxType:"AnchorButton"})),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",null,"checked"),", and"," ",(0,r.kt)("inlineCode",null,"onChange")," properties to control the behaviour of the checkbox."),(0,r.kt)(f,{mdxType:"CheckboxControlledDemo"}),(0,r.kt)("h2",null,(0,r.kt)("span",null,"With ",(0,r.kt)("mark",null,"CheckGroup")),(0,r.kt)(k.Z,{anchorId:"with-checkgroup",mdxType:"AnchorButton"})),(0,r.kt)("p",null,(0,r.kt)("a",{href:"/docs/components/CheckGroup",title:"CheckGroup documentation"},"CheckGroup")," ","is a helpful wrapper used to group and manage checkbox controls with an easier API. CheckGroup can also be controlled/uncontrolled like the checkboxes.",(0,r.kt)("br",null),"To learn more about ",(0,r.kt)("strong",null,"CheckGroup"),"'s API,"," ",(0,r.kt)("a",{href:"/docs/components/CheckGroup",title:"CheckGroup documentation"},"read it's documentation"),"."),(0,r.kt)(m.Z,{code:'<CheckGroup name="food" defaultValue={["kebab"]}>\n  <Checkbox inputProps={{ id: "ch-box-00" }} label="Burger" value="burger" />\n  <Checkbox inputProps={{ id: "ch-box-01" }} label="Sushi" value="sushi" />\n  <Checkbox inputProps={{ id: "ch-box-02" }} label="Kebab" value="kebab" />\n</CheckGroup>',mdxType:"DemoBox"},(0,r.kt)(i.Z,{name:"food",defaultValue:["kebab"],mdxType:"CheckGroup"},(0,r.kt)(c.Z,{inputProps:{id:"ch-box-00"},label:"Burger",value:"burger",mdxType:"Checkbox"}),(0,r.kt)(c.Z,{inputProps:{id:"ch-box-01"},label:"Sushi",value:"sushi",mdxType:"Checkbox"}),(0,r.kt)(c.Z,{inputProps:{id:"ch-box-02"},label:"Kebab",value:"kebab",mdxType:"Checkbox"}))),(0,r.kt)("h2",null,(0,r.kt)("span",null,"API"),(0,r.kt)(k.Z,{anchorId:"api",mdxType:"AnchorButton"})),(0,r.kt)("p",null,"Learn more about the properties and the customization points."),(0,r.kt)("h3",null,(0,r.kt)("span",null,"Usage"),(0,r.kt)(k.Z,{anchorId:"usage",mdxType:"AnchorButton"})),(0,r.kt)("pre",null,(0,r.kt)("code",T({parentName:"pre"},{className:"language-typescript"}),'// recommended\nimport Checkbox from "@sonnat/ui/Checkbox";\n\n//or\nimport { Checkbox } from "@sonnat/ui";\n')),(0,r.kt)("h3",null,(0,r.kt)("span",null,"Properties"),(0,r.kt)(k.Z,{anchorId:"properties",mdxType:"AnchorButton"})),(0,r.kt)("p",null,"Note that the documentation avoids mentioning all the native props (there are a lot) in this section of the components."),(0,r.kt)("table",{cols:4},(0,r.kt)("caption",null,"Checkbox Properties"),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Default"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"className"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"Append to the class names applied to the component so you can override or extend the styles.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"label"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"If ",(0,r.kt)("inlineCode",null,"label")," was provided, a"," ",(0,r.kt)("inlineCode",null,"<label>")," element will be rendered next to the checkbox.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"name"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"The name of the checkbox.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"value"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"The value of the checkbox. The DOM API casts this to a string.",(0,r.kt)("br",null),"The browser uses ",(0,r.kt)("inlineCode",null,'"on"')," as the default value.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"size"),(0,r.kt)("td",null,'"large"',(0,r.kt)("br",null),'| "medium"',(0,r.kt)("br",null),'| "small"'),(0,r.kt)("td",null,'"medium"'),(0,r.kt)("td",null,"The size of the checkbox.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"indeterminated"),(0,r.kt)("td",null,"boolean"),(0,r.kt)("td",null,"false"),(0,r.kt)("td",null,"If ",(0,r.kt)("inlineCode",null,"true"),", the checkbox will appear indeterminate.",(0,r.kt)("br",null),"This does not set the native input element to indeterminate due to inconsistent behavior across browsers.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"readOnly"),(0,r.kt)("td",null,"boolean"),(0,r.kt)("td",null,"false"),(0,r.kt)("td",null,"If ",(0,r.kt)("inlineCode",null,"true"),", the checkbox will be read-only.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"checked"),(0,r.kt)("td",null,"boolean"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"If ",(0,r.kt)("inlineCode",null,"true"),", the checkbox will be checked.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"defaultChecked"),(0,r.kt)("td",null,"boolean"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"The default state of ",(0,r.kt)("inlineCode",null,"checked"),". Use when the component is not controlled.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"disabled"),(0,r.kt)("td",null,"boolean"),(0,r.kt)("td",null,"false"),(0,r.kt)("td",null,"If ",(0,r.kt)("inlineCode",null,"true"),", the checkbox will be disabled.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"required"),(0,r.kt)("td",null,"boolean"),(0,r.kt)("td",null,"false"),(0,r.kt)("td",null,"If ",(0,r.kt)("inlineCode",null,"true"),", the checkbox will be required.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"hasError"),(0,r.kt)("td",null,"boolean"),(0,r.kt)("td",null,"false"),(0,r.kt)("td",null,"If ",(0,r.kt)("inlineCode",null,"true"),", the checkbox will indicate invalid input.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"inputProps"),(0,r.kt)("td",null,"object"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"The properties applied to the ",(0,r.kt)("inlineCode",null,"input")," element.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"labelProps"),(0,r.kt)("td",null,"object"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"The properties applied to the ",(0,r.kt)("inlineCode",null,"label")," element.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onChange"),(0,r.kt)("td",null,"function"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"The Callback fires when the state has changed.",(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("strong",null,"Signature:"))," ",(0,r.kt)("inlineCode",null,"function(event: React.ChangeEvent, checkedState: boolean) => void"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("strong",null,"Note:"))," ","You can also pull out the new checked state by accessing"," ",(0,r.kt)("inlineCode",null,"event.target.checked")," (boolean)."))),(0,r.kt)("tfoot",null,(0,r.kt)("tr",null,(0,r.kt)("td",{colSpan:"4"},(0,r.kt)("ul",null,(0,r.kt)("li",null,"The ",(0,r.kt)("inlineCode",null,"ref")," is forwarded to the root element."),(0,r.kt)("li",null,"Any other properties supplied will be provided to the root element.")))))))}P.isMDXComponent=!0},4602:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/components/Checkbox",function(){return n(3788)}])}},function(e){e.O(0,[7897,7077,5725,9774,2888,179],(function(){return t=4602,e(e.s=t);var t}));var t=e.O();_N_E=t}]);