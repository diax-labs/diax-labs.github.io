(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,32577,e=>{"use strict";var t,r=e.i(656778),n=e.i(479441),a=e.i(294237),o=e.i(7284),i=e.i(877130),s=e.i(346068);e.s([],584191),e.i(584191);var l=e.i(887642),d=e.i(462902),u=e.i(954588);let c=((t={}).disabled="data-disabled",t.valid="data-valid",t.invalid="data-invalid",t.touched="data-touched",t.dirty="data-dirty",t.filled="data-filled",t.focused="data-focused",t),f={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:null,valueMissing:!1},v={valid:null,touched:!1,dirty:!1,filled:!1,focused:!1},m={disabled:!1,...v},p={valid:e=>null===e?null:e?{[c.valid]:""}:{[c.invalid]:""}},g=r.createContext({invalid:void 0,name:void 0,validityData:{state:f,errors:[],error:"",value:"",initialValue:null},setValidityData:u.NOOP,disabled:void 0,touched:v.touched,setTouched:u.NOOP,dirty:v.dirty,setDirty:u.NOOP,filled:v.filled,setFilled:u.NOOP,focused:v.focused,setFocused:u.NOOP,validate:()=>null,validationMode:"onSubmit",validationDebounceTime:0,shouldValidateOnChange:()=>!1,state:m,markedDirtyRef:{current:!1},validation:{getValidationProps:(e=u.EMPTY_OBJECT)=>e,getInputValidationProps:(e=u.EMPTY_OBJECT)=>e,inputRef:{current:null},commit:async()=>{}}});function h(e=!0){let t=r.useContext(g);if(t.setValidityData===u.NOOP&&!e)throw Error((0,d.default)(28));return t}let x=r.createContext({legendId:void 0,setLegendId:()=>{},disabled:void 0}),b=r.createContext({formRef:{current:{fields:new Map}},errors:{},clearErrors:u.NOOP,validationMode:"onSubmit",submitAttemptedRef:{current:!1}});function y(){return r.useContext(b)}var w=e.i(903224),E=e.i(565455),C=e.i(207516);let I=r.createContext({controlId:void 0,registerControlId:u.NOOP,labelId:void 0,setLabelId:u.NOOP,messageIds:[],setMessageIds:u.NOOP,getDescriptionProps:e=>e});function A(){return r.useContext(I)}let S=function(e){let t=(0,C.useBaseUiId)(),n=void 0===e.controlId?t:e.controlId,[a,o]=r.useState(n),[i,d]=r.useState(e.labelId),[u,c]=r.useState([]),f=(0,w.useRefWithInit)(()=>new Map),{messageIds:v}=A(),m=(0,l.useStableCallback)((e,t)=>{let r=f.current;void 0===t?r.delete(e):(r.set(e,t),o(e=>{let t;if(0!==r.size){for(let n of r.values()){if(void 0!==e&&n===e)return e;void 0===t&&(t=n)}return t}}))}),p=r.useCallback(e=>(0,E.mergeProps)({"aria-describedby":v.concat(u).join(" ")||void 0},e),[v,u]),g=r.useMemo(()=>({controlId:a,registerControlId:m,labelId:i,setLabelId:d,messageIds:u,setMessageIds:c,getDescriptionProps:p}),[a,m,i,d,u,c,p]);return(0,s.jsx)(I.Provider,{value:g,children:e.children})};var O=e.i(581263),R=e.i(161476);function M(e,t){return{...e,state:{...e.state,valid:!t&&e.state.valid}}}let k=Object.keys(f),T=r.forwardRef(function(e,t){let{errors:n,validationMode:a,submitAttemptedRef:o}=y(),{render:i,className:c,validate:v,validationDebounceTime:m=0,validationMode:h=a,name:b,disabled:w=!1,invalid:C,dirty:I,touched:S,actionsRef:T,...P}=e,{disabled:L}=function(e=!1){let t=r.useContext(x);if(!t&&!e)throw Error((0,d.default)(86));return t}(),j=(0,l.useStableCallback)(v||(()=>null)),D=L||w,[N,U]=r.useState(!1),[V,W]=r.useState(!1),[q,F]=r.useState(!1),[B,z]=r.useState(!1),H=I??V,J=S??N,_=r.useRef(!1),$=(0,l.useStableCallback)(e=>{void 0===I&&(e&&(_.current=!0),W(e))}),X=(0,l.useStableCallback)(e=>{void 0===S&&U(e)}),K=(0,l.useStableCallback)(()=>"onChange"===h||"onSubmit"===h&&o.current),Y=!!b&&Object.hasOwn(n,b)&&void 0!==n[b],G=!0===C||Y,[Q,Z]=r.useState({state:f,error:"",errors:[],value:null,initialValue:null}),ee=!G&&Q.state.valid,et=r.useMemo(()=>({disabled:D,touched:J,dirty:H,valid:ee,filled:q,focused:B}),[D,J,H,ee,q,B]),er=function(e){let{formRef:t,clearErrors:n}=y(),{setValidityData:a,validate:o,validityData:i,validationDebounceTime:s,invalid:d,markedDirtyRef:c,state:v,name:m,shouldValidateOnChange:p}=e,{controlId:g,getDescriptionProps:h}=A(),x=(0,R.useTimeout)(),b=r.useRef(null),w=(0,l.useStableCallback)(async(e,r=!1)=>{let n,s=b.current;if(!s)return;if(r){if(!1!==v.valid)return;let r=s.validity;if(!r.valueMissing){let r={value:e,state:{...f,valid:!0},error:"",errors:[],initialValue:i.initialValue};if(s.setCustomValidity(""),g){let e=t.current.fields.get(g);e&&t.current.fields.set(g,{...e,...M(r,!1)})}a(r);return}let n=k.reduce((e,t)=>(e[t]=r[t],e),{});if(!n.valid&&!function(e){if(!e||e.valid||!e.valueMissing)return!1;let t=!1;for(let r of k)"valid"!==r&&("valueMissing"===r&&(t=e[r]),e[r]&&(t=!1));return t}(n))return}x.clear();let l=null,u=[],m=function(e){let t=k.reduce((t,r)=>(t[r]=e.validity[r],t),{}),r=!1;for(let e of k)if("valid"!==e){if("valueMissing"===e&&t[e])r=!0;else if(t[e])return t}return r&&!c.current&&(t.valid=!0,t.valueMissing=!1),t}(s),h=p();if(s.validationMessage&&!h)n=s.validationMessage,u=[s.validationMessage];else{let r=o(e,Array.from(t.current.fields.values()).reduce((e,t)=>(t.name&&(e[t.name]=t.getValue()),e),{}));null!==(l="object"==typeof r&&null!==r&&"then"in r?await r:r)?(m.valid=!1,m.customError=!0,Array.isArray(l)?(u=l,s.setCustomValidity(l.join("\n"))):l&&(u=[l],s.setCustomValidity(l))):h&&(s.setCustomValidity(""),m.customError=!1,s.validationMessage?(n=s.validationMessage,u=[s.validationMessage]):s.validity.valid&&!m.valid&&(m.valid=!0))}let y={value:e,state:m,error:n??(Array.isArray(l)?l[0]:l??""),errors:u,initialValue:i.initialValue};if(g){let e=t.current.fields.get(g);e&&t.current.fields.set(g,{...e,...M(y,d)})}a(y)}),C=r.useCallback((e={})=>(0,E.mergeProps)(h,!1===v.valid?{"aria-invalid":!0}:u.EMPTY_OBJECT,e),[h,v.valid]),I=r.useCallback((e={})=>(0,E.mergeProps)({onChange(e){if(e.nativeEvent.defaultPrevented)return;if(n(m),!p())return void w(e.currentTarget.value,!0);let t=e.currentTarget;""===t.value?w(t.value):(x.clear(),s?x.start(s,()=>{w(t.value)}):w(t.value))}},C(e)),[C,n,m,x,w,s,p]);return r.useMemo(()=>({getValidationProps:C,getInputValidationProps:I,inputRef:b,commit:w}),[C,I,w])}({setValidityData:Z,validate:j,validityData:Q,validationDebounceTime:m,invalid:G,markedDirtyRef:_,state:et,name:b,shouldValidateOnChange:K}),en=r.useCallback(()=>{_.current=!0,er.commit(Q.value)},[er,Q]);r.useImperativeHandle(T,()=>({validate:en}),[en]);let ea=r.useMemo(()=>({invalid:G,name:b,validityData:Q,setValidityData:Z,disabled:D,touched:J,setTouched:X,dirty:H,setDirty:$,filled:q,setFilled:F,focused:B,setFocused:z,validate:j,validationMode:h,validationDebounceTime:m,shouldValidateOnChange:K,state:et,markedDirtyRef:_,validation:er}),[G,b,Q,D,J,X,H,$,q,F,B,z,j,h,m,K,et,er]),eo=(0,O.useRenderElement)("div",e,{ref:t,state:et,props:P,stateAttributesMapping:p});return(0,s.jsx)(g.Provider,{value:ea,children:eo})}),P=r.forwardRef(function(e,t){return(0,s.jsx)(S,{children:(0,s.jsx)(T,{...e,ref:t})})});var L=e.i(92615),j=e.i(102094),D=e.i(682354),N=e.i(804849);let U=r.forwardRef(function(e,t){let{render:n,className:a,id:o,nativeLabel:i=!0,...s}=e,d=h(!1),{labelId:u}=A(),c=r.useRef(null),f=function(e={}){let t,{id:r,fallbackControlId:n,native:a=!1,setLabelId:o,focusControl:i}=e,{controlId:s,setLabelId:d}=A(),u=(0,l.useStableCallback)(e=>{d(e),o?.(e)}),c=(t=(0,C.useBaseUiId)(r),(0,N.useIsoLayoutEffect)(()=>(u(t),()=>{u(void 0)}),[t,u]),t),f=s??n;function v(e){let t=(0,D.getTarget)(e.nativeEvent);t?.closest("button,input,select,textarea")||(!e.defaultPrevented&&e.detail>1&&e.preventDefault(),a||function(e){if(i)return i(e,f);if(!f)return;let t=(0,j.ownerDocument)(e.currentTarget).getElementById(f);(0,L.isHTMLElement)(t)&&t.focus({focusVisible:!0})}(e))}return a?{id:c,htmlFor:f??void 0,onMouseDown:v}:{id:c,onClick:v,onPointerDown(e){e.preventDefault()}}}({id:u??o,native:i});return(0,O.useRenderElement)("label",e,{ref:[t,c],state:d.state,props:[f,s],stateAttributesMapping:p})});var V=e.i(504068),W=e.i(809058),q=e.i(193214);let F={...p,...W.transitionStatusMapping},B=r.forwardRef(function(e,t){let{render:n,id:a,className:o,match:i,...l}=e,d=(0,C.useBaseUiId)(a),{validityData:u,state:c,name:f}=h(!1),{setMessageIds:v}=A(),{errors:m}=y(),p=f?m[f]:null,g=!1;g=!!p||!0===i||(i?!!u.state[i]:!1===u.state.valid);let{mounted:x,transitionStatus:b,setMounted:w}=(0,q.useTransitionStatus)(g);(0,N.useIsoLayoutEffect)(()=>{if(g&&d)return v(e=>e.concat(d)),()=>{v(e=>e.filter(e=>e!==d))}},[g,d,v]);let E=r.useRef(null),[I,S]=r.useState(null),[R,M]=r.useState(null),k=p||(u.errors.length>1?(0,s.jsx)("ul",{children:u.errors.map(e=>(0,s.jsx)("li",{children:e},e))}):u.error),T=u.error;null!=p?T=Array.isArray(p)?JSON.stringify(p):p:u.errors.length>1&&(T=JSON.stringify(u.errors)),g&&T!==R&&(M(T),S(k)),(0,V.useOpenChangeComplete)({open:g,ref:E,onComplete(){g||w(!1)}});let P={...c,transitionStatus:b},L=(0,O.useRenderElement)("div",e,{ref:[t,E],state:P,props:[{id:d,children:g?k:I},l],stateAttributesMapping:F,enabled:x});return x?L:null}),z=r.forwardRef(function(e,t){let{render:r,id:n,className:a,...o}=e,i=(0,C.useBaseUiId)(n),s=h(!1),{setMessageIds:l}=A();return(0,N.useIsoLayoutEffect)(()=>{if(i)return l(e=>e.concat(i)),()=>{l(e=>e.filter(e=>e!==i))}},[i,l]),(0,O.useRenderElement)("p",e,{ref:t,state:s.state,props:[{id:i},o],stateAttributesMapping:p})});var H=e.i(314757),J=e.i(759584),_=e.i(67077),$=e.i(586622);let X=r.forwardRef(function(e,t){let{render:n,className:a,id:o,name:i,value:s,disabled:d=!1,onValueChange:c,defaultValue:f,autoFocus:v=!1,...m}=e,{state:g,name:x,disabled:b,setTouched:E,setDirty:I,validityData:S,setFocused:R,setFilled:k,validationMode:T,validation:P}=h(),U=b||d,V=x??i,W={...g,disabled:U},{labelId:q}=A(),F=function(e={}){let{id:t,implicit:n=!1,controlRef:a}=e,{controlId:o,registerControlId:i}=A(),s=(0,C.useBaseUiId)(t),d=n?o:void 0,c=(0,w.useRefWithInit)(()=>Symbol("labelable-control")),f=r.useRef(!1),v=r.useRef(null!=t),m=(0,l.useStableCallback)(()=>{f.current&&i!==u.NOOP&&(f.current=!1,i(c.current,void 0))});return(0,N.useIsoLayoutEffect)(()=>{let e;if(i!==u.NOOP){if(n){let r=a?.current;e=(0,L.isElement)(r)&&null!=r.closest("label")?t??null:d??s}else if(null!=t)v.current=!0,e=t;else{if(!v.current)return void m();e=s}if(void 0===e)return void m();f.current=!0,i(c.current,e)}},[t,a,d,i,n,s,c,m]),r.useEffect(()=>m,[m]),o??s}({id:o});(0,N.useIsoLayoutEffect)(()=>{let e=null!=s;P.inputRef.current?.value||e&&""!==s?k(!0):e&&""===s&&k(!1)},[P.inputRef,k,s]);let B=r.useRef(null);(0,N.useIsoLayoutEffect)(()=>{v&&B.current===(0,D.activeElement)((0,j.ownerDocument)(B.current))&&R(!0)},[v,R]);let[z]=(0,H.useControlled)({controlled:s,default:f,name:"FieldControl",state:"value"}),X=void 0!==s,K=X?z:void 0;return!function(e){let{enabled:t=!0,value:r,id:n,name:a,controlRef:o,commit:i}=e,{formRef:s}=y(),{invalid:d,markedDirtyRef:u,validityData:c,setValidityData:f}=h(),v=(0,l.useStableCallback)(e.getValue);(0,N.useIsoLayoutEffect)(()=>{if(!t)return;let e=r;void 0===e&&(e=v()),null===c.initialValue&&null!==e&&f(t=>({...t,initialValue:e}))},[t,f,r,c.initialValue,v]),(0,N.useIsoLayoutEffect)(()=>{t&&n&&s.current.fields.set(n,{getValue:v,name:a,controlRef:o,validityData:M(c,d),validate(e=!0){let t=r;void 0===t&&(t=v()),u.current=!0,e?J.flushSync(()=>i(t)):i(t)}})},[i,o,t,s,v,n,d,u,a,c,r]),(0,N.useIsoLayoutEffect)(()=>{let e=s.current.fields;return()=>{n&&e.delete(n)}},[s,n])}({id:F,name:V,commit:P.commit,value:K,getValue:()=>P.inputRef.current?.value,controlRef:P.inputRef}),(0,O.useRenderElement)("input",e,{ref:[t,B],state:W,props:[{id:F,disabled:U,name:V,ref:P.inputRef,"aria-labelledby":q,autoFocus:v,...X?{value:K}:{defaultValue:f},onChange(e){let t=e.currentTarget.value;c?.(t,(0,_.createChangeEventDetails)($.REASONS.none,e.nativeEvent)),I(t!==S.initialValue),k(""!==t)},onFocus(){R(!0)},onBlur(e){E(!0),R(!1),"onBlur"===T&&P.commit(e.currentTarget.value)},onKeyDown(e){"INPUT"===e.currentTarget.tagName&&"Enter"===e.key&&(E(!0),P.commit(e.currentTarget.value))}},P.getInputValidationProps(),m],stateAttributesMapping:p})}),K=r.createContext({disabled:!1}),Y=r.createContext(void 0),G=r.forwardRef(function(e,t){let{render:n,className:a,disabled:o=!1,...i}=e,{state:l,disabled:u}=h(!1),c=u||o,f=function(e=!0){let t=r.useContext(Y);if(void 0===t&&!e)throw Error((0,d.default)(3));return t}(),v=f?.parent.id,m=f?.allValues!==void 0,g=r.useMemo(()=>({disabled:c}),[c]),x=(0,O.useRenderElement)("div",e,{ref:t,state:l,props:i,stateAttributesMapping:p});return(0,s.jsx)(S,{controlId:m?v:void 0,children:(0,s.jsx)(K.Provider,{value:g,children:x})})});e.s(["Control",0,X,"Description",0,z,"Error",0,B,"Item",0,G,"Label",0,U,"Root",0,P,"Validity",0,function(e){let{children:t}=e,{validityData:n,invalid:a}=h(!1),o=r.useMemo(()=>M(n,a),[n,a]),i=!1===o.state.valid,{transitionStatus:l}=(0,q.useTransitionStatus)(i),d=r.useMemo(()=>({...o,validity:o.state,transitionStatus:l}),[o,l]);return(0,s.jsx)(r.Fragment,{children:t(d)})}],52388);var Q=e.i(52388),Q=Q;let Z=r.forwardRef(function(e,t){return(0,s.jsx)(Q.Control,{ref:t,...e})});function ee(...e){return(0,i.twMerge)((0,o.clsx)(e))}let et=(0,a.cva)("group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-[color,background-color,border-color,box-shadow,opacity,transform] outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",{variants:{variant:{default:"bg-primary text-primary-foreground [a]:hover:bg-primary/80",outline:"border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",ghost:"hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",destructive:"bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",xs:"h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",sm:"h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",lg:"h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",icon:"size-8","icon-xs":"size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3","icon-sm":"size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg","icon-lg":"size-9"}},defaultVariants:{variant:"default",size:"default"}}),er=`import { FlowDiagram } from '@diax/react'

# My Diagram

<FlowDiagram
  centered
  density="comfortable"
  nodes={[
    { id: "a", content: "Start" },
    { id: "b", content: "Process" },
    { id: "c", content: "End" },
  ]}
  relations={["a->b", "b->c"]}
/>

<div className="text-2xl font-bold mt-4">MDX + UnoCSS + DiaX ✨</div>
`,en=`flowchart LR
  A[Code Push] --> B[Lint]
  A --> C[Test]
  A --> D[SCA Scan]
  B --> E[Build]
  C --> E
  D --> E
  E --> F[Deploy]
`;function ea(e){return`requestAnimationFrame(function() {
  requestAnimationFrame(function() {
    window.parent.postMessage({ type: "diax-iframe-ready", revision: ${JSON.stringify(e)} }, "*");
  });
});`}function eo(e){let t=window.matchMedia("(prefers-color-scheme: dark)"),r=new MutationObserver(e);return r.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),t.addEventListener("change",e),()=>{r.disconnect(),t.removeEventListener("change",e)}}function ei(){return!!document.documentElement.classList.contains("dark")||!document.documentElement.classList.contains("light")&&window.matchMedia("(prefers-color-scheme: dark)").matches}function es(){return!0}function el(e){return new TextEncoder().encode(e).byteLength}function ed(e){return!!e&&"object"==typeof e&&!Array.isArray(e)}function eu(e,t){return e.startsWith("/")&&e.length>1&&e.length<=256&&524288>=el(t)}function ec(e){if(!ed(e)||!ed(e.files)||"string"!=typeof e.activeFile)return null;let t=Object.entries(e.files);if(0===t.length||t.length>64)return null;let r={};for(let[e,n]of t){if(!ed(n)||"string"!=typeof n.code||!eu(e,n.code)||void 0!==n.readOnly&&"boolean"!=typeof n.readOnly)return null;r[e]=void 0===n.readOnly?{code:n.code}:{code:n.code,readOnly:n.readOnly}}return e.activeFile in r?{files:r,activeFile:e.activeFile}:null}e.s(["_",0,function(e){return e.replace(/\.mdx?$/,".js")},"a",0,function(e){if(!e||el(e)>1048576)return null;try{let t=JSON.parse(e);if(!ed(t)||1!==t.version)return null;return ec(t)}catch{return null}},"c",0,function(e,t=2e3){let[n,a]=(0,r.useState)(null),o=(0,r.useRef)(0),i=(0,r.useRef)(null),s=(0,r.useCallback)(()=>{null!==i.current&&(clearTimeout(i.current),i.current=null)},[]);return(0,r.useEffect)(()=>()=>{o.current+=1,s()},[s]),{copy:(0,r.useCallback)(async()=>{let r=++o.current;s();try{if(await navigator.clipboard.writeText(e),o.current!==r)return;a({status:"copied",text:e}),i.current=setTimeout(()=>{o.current===r&&a(null),i.current=null},t)}catch{o.current===r&&a({status:"error",text:e})}},[s,t,e]),status:n?.text===e?n.status:"idle"}},"d",0,en,"f",0,function(e){return e.endsWith(".mdx")?"# New Page\n":e.endsWith(".tsx")?"export default function Component() {\n  return <div>Hello</div>;\n}\n":e.endsWith(".css")?"/* styles */\n":""},"g",0,function(e){return e.endsWith(".mdx")||e.endsWith(".md")},"h",0,function(e){return e.endsWith(".mdx")||e.endsWith(".md")?"mdx":e.endsWith(".tsx")?"typescriptreact":e.endsWith(".ts")?"typescript":e.endsWith(".jsx")?"javascriptreact":e.endsWith(".js")?"javascript":e.endsWith(".css")?"css":e.endsWith(".json")?"json":"plaintext"},"i",0,ec,"l",0,function({className:e,type:t,...r}){return(0,s.jsx)(Z,{type:t,"data-slot":"input",className:ee("h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",e),...r})},"m",0,ea,"n",0,function(e,t,r){let n=e&&Object.keys(e).length>0?e:r.files;return ec({files:n,activeFile:t??Object.keys(n)[0]??r.activeFile})??{files:Object.fromEntries(Object.entries(r.files).map(([e,t])=>[e,void 0===t.readOnly?{code:t.code}:{code:t.code,readOnly:t.readOnly}])),activeFile:r.activeFile}},"o",0,function(e){let t=ec(e);if(!t)return null;let r=JSON.stringify({version:1,files:t.files,activeFile:t.activeFile});return 1048576>=el(r)?r:null},"p",0,function(e,t="unversioned"){return`import { createRoot } from "react-dom/client";
import App from "${e.replace(/\.mdx$/,"")}";

const root = createRoot(document.getElementById("root"));
root.render(<App />);

// Transparent background for iframe
document.body.style.background = "transparent";
document.documentElement.style.background = "transparent";

// Helper: inject or update a <style> by id
function upsertStyle(id, css) {
  var style = document.getElementById(id);
  if (!style) {
    style = document.createElement("style");
    style.id = id;
    document.head.appendChild(style);
  }
  style.textContent = css;
}

// Listen for messages from parent (theme sync, dark mode, export)
window.addEventListener("message", function(e) {
  if (!e.data || !e.data.type) return;

  // Dark mode: toggle .dark class on <html>
  if (e.data.type === "diax-dark-mode") {
    if (e.data.dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    return;
  }

  // DiaX theme CSS variables (node bg, border, edge color, etc.)
  if (e.data.type === "diax-theme-css") {
    if (e.data.css) {
      upsertStyle("diax-theme-css", e.data.css);
    } else {
      var existing = document.getElementById("diax-theme-css");
      if (existing) existing.remove();
    }
    return;
  }

  // MDX content theme (typography, background, fonts)
  if (e.data.type === "diax-mdx-content-theme") {
    upsertStyle("diax-mdx-content-theme", e.data.css);
    return;
  }

  if (e.data.type === "diax-export-svg" || e.data.type === "diax-export-png") {
    if (e.data.revision !== ${JSON.stringify(t)}) {
      window.parent.postMessage({
        type: "diax-export-error",
        requestId: e.data.requestId,
        revision: ${JSON.stringify(t)},
        message: "The preview revision changed before export. Wait for Live, then try again."
      }, "*");
      return;
    }
    exportRoot(e.data).catch(function(error) {
      window.parent.postMessage({
        type: "diax-export-error",
        requestId: e.data.requestId,
        revision: ${JSON.stringify(t)},
        message: error instanceof Error ? error.message : "The sandbox could not export this visual."
      }, "*");
    });
  }
});

function nextPaint() {
  return new Promise(function(resolve) {
    requestAnimationFrame(function() {
      requestAnimationFrame(resolve);
    });
  });
}

function enterCanonicalExportState(root) {
  var previousAttribute = root.getAttribute("data-diax-canonical-export");
  var focused = document.activeElement instanceof HTMLElement && root.contains(document.activeElement)
    ? document.activeElement
    : null;
  var style = document.createElement("style");
  style.textContent = '[data-diax-canonical-export]{pointer-events:none!important}' +
    '[data-diax-canonical-export],[data-diax-canonical-export] *{' +
    'animation:none!important;caret-color:transparent!important;' +
    'scroll-behavior:auto!important;transition:none!important}' +
    '[data-diax-canonical-export] :focus,[data-diax-canonical-export] :focus-visible{' +
    'outline:none!important}';
  document.head.appendChild(style);
  root.setAttribute("data-diax-canonical-export", "canonical-static-v1");
  if (focused) focused.blur();

  return function restoreCanonicalExportState() {
    style.remove();
    if (previousAttribute === null) root.removeAttribute("data-diax-canonical-export");
    else root.setAttribute("data-diax-canonical-export", previousAttribute);
    if (focused) focused.focus({ preventScroll: true });
  };
}

function copyComputedPresentation(sourceRoot, cloneRoot) {
  var sourceElements = [sourceRoot].concat(Array.from(sourceRoot.querySelectorAll("*")));
  var cloneElements = [cloneRoot].concat(Array.from(cloneRoot.querySelectorAll("*")));

  for (var i = 0; i < sourceElements.length; i++) {
    var source = sourceElements[i];
    var clone = cloneElements[i];
    if (!(source instanceof Element) || !(clone instanceof Element)) continue;

    var computed = window.getComputedStyle(source);
    var declarations = "";
    for (var propertyIndex = 0; propertyIndex < computed.length; propertyIndex++) {
      var property = computed[propertyIndex];
      declarations += property + ":" + computed.getPropertyValue(property) + ";";
    }
    clone.setAttribute("style", declarations);

    if (source instanceof HTMLInputElement && clone instanceof HTMLInputElement) {
      clone.setAttribute("value", source.value);
      if (source.checked) clone.setAttribute("checked", "");
      else clone.removeAttribute("checked");
    } else if (source instanceof HTMLTextAreaElement && clone instanceof HTMLTextAreaElement) {
      clone.textContent = source.value;
    } else if (source instanceof HTMLSelectElement && clone instanceof HTMLSelectElement) {
      var sourceOptions = source.querySelectorAll("option");
      var cloneOptions = clone.querySelectorAll("option");
      for (var optionIndex = 0; optionIndex < sourceOptions.length; optionIndex++) {
        if (sourceOptions[optionIndex].selected) cloneOptions[optionIndex].setAttribute("selected", "");
        else cloneOptions[optionIndex].removeAttribute("selected");
      }
    }
  }
}

function isClosedExportAssetUrl(source) {
  var value = String(source || "").trim();
  return !value || value.startsWith("data:") || value.startsWith("#");
}

function resolveExportAssetUrl(source) {
  var value = String(source || "").trim();
  if (isClosedExportAssetUrl(value)) return value;
  try {
    return new URL(value, document.baseURI).href;
  } catch (_error) {
    return value;
  }
}

async function exportAssetToDataUrl(source, context) {
  var resolved = resolveExportAssetUrl(source);
  if (isClosedExportAssetUrl(resolved)) return resolved;
  if (!resolved.startsWith("http:") && !resolved.startsWith("https:") && !resolved.startsWith("blob:")) {
    throw new Error('Export asset closure failed for ' + context + ': unsupported URL "' + resolved + '". Use an imported, same-origin, or data URL asset.');
  }
  var response;
  try {
    response = await fetch(resolved);
  } catch (_error) {
    throw new Error('Export asset closure failed for ' + context + ': could not fetch "' + resolved + '". Check CORS or vendor the asset locally.');
  }
  if (!response.ok) {
    throw new Error('Export asset closure failed for ' + context + ': "' + resolved + '" returned HTTP ' + response.status + '.');
  }
  var blob = await response.blob();
  return await new Promise(function(resolve, reject) {
    var reader = new FileReader();
    reader.onload = function() { resolve(String(reader.result)); };
    reader.onerror = function() { reject(new Error('Export asset closure failed while reading ' + context + '.')); };
    reader.readAsDataURL(blob);
  });
}

async function inlineExportImages(sourceRoot, cloneRoot, closure) {
  var sourceImages = Array.from(sourceRoot.querySelectorAll("img"));
  var cloneImages = Array.from(cloneRoot.querySelectorAll("img"));
  await Promise.all(sourceImages.map(async function(image, index) {
    var cloneImage = cloneImages[index];
    if (!cloneImage) return;
    cloneImage.removeAttribute("srcset");
    var source = image.currentSrc || image.src;
    if (!source) return;
    closure.discovered += 1;
    var closed = await exportAssetToDataUrl(source, "<img> source");
    cloneImage.setAttribute("src", closed);
    if (closed.startsWith("data:") && !String(source).startsWith("data:")) closure.embedded += 1;
  }));
  Array.from(cloneRoot.querySelectorAll("source[srcset]")).forEach(function(source) {
    source.removeAttribute("srcset");
  });
}

async function inlineComputedStyleAssets(cloneRoot, closure) {
  var elements = [cloneRoot].concat(Array.from(cloneRoot.querySelectorAll("[style]")));
  var urlPattern = /url\\(\\s*(["']?)(.*?)\\1\\s*\\)/gi;
  for (var elementIndex = 0; elementIndex < elements.length; elementIndex++) {
    var element = elements[elementIndex];
    var style = element.getAttribute("style");
    if (!style || style.indexOf("url(") === -1) continue;
    var matches = Array.from(style.matchAll(urlPattern));
    for (var matchIndex = matches.length - 1; matchIndex >= 0; matchIndex--) {
      var match = matches[matchIndex];
      var source = match[2].trim();
      if (!source || source.startsWith("#") || source.startsWith("data:")) continue;
      closure.discovered += 1;
      var closed = await exportAssetToDataUrl(source, "computed style " + element.tagName.toLowerCase());
      closure.embedded += 1;
      style = style.slice(0, match.index) + 'url("' + closed + '")' + style.slice(match.index + match[0].length);
    }
    element.setAttribute("style", style);
  }
}

async function createDomExportArtifact() {
  var rootEl = document.getElementById("root");
  if (!rootEl) throw new Error("The sandbox preview has no #root element to export.");

  if (document.fonts && document.fonts.ready) await document.fonts.ready;
  var restoreCanonicalExportState = enterCanonicalExportState(rootEl);
  try {
    await nextPaint();

    var rect = rootEl.getBoundingClientRect();
    var width = Math.max(1, Math.ceil(Math.max(rect.width, rootEl.scrollWidth)));
    var height = Math.max(1, Math.ceil(Math.max(rect.height, rootEl.scrollHeight)));
    var clone = rootEl.cloneNode(true);
    var assetClosure = { policy: "embedded-or-rejected-v1", discovered: 0, embedded: 0, unresolved: 0 };
    copyComputedPresentation(rootEl, clone);
    await inlineExportImages(rootEl, clone, assetClosure);
    await inlineComputedStyleAssets(clone, assetClosure);
    clone.removeAttribute("data-diax-canonical-export");
    clone.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
    clone.setAttribute("data-diax-export-root", "");

    var content = new XMLSerializer().serializeToString(clone);
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '" viewBox="0 0 ' + width + ' ' + height + '"><foreignObject x="0" y="0" width="100%" height="100%">' + content + '</foreignObject></svg>';
    return { svg: svg, width: width, height: height, assetClosure: assetClosure };
  } finally {
    restoreCanonicalExportState();
  }
}

async function exportRoot(request) {
  var artifact = await createDomExportArtifact();
  if (request.type === "diax-export-svg") {
    window.parent.postMessage({
      type: "diax-svg-result",
      requestId: request.requestId,
      revision: ${JSON.stringify(t)},
      data: artifact.svg,
      width: artifact.width,
      height: artifact.height,
      assetClosure: artifact.assetClosure
    }, "*");
    return;
  }

  var scale = Math.min(4, Math.max(1, Number(request.scale) || 2));
  var pixelCount = artifact.width * artifact.height * scale * scale;
  if (pixelCount > 33554432) {
    throw new Error("The PNG would exceed 32 megapixels. Choose a lower export scale.");
  }

  var canvas = document.createElement("canvas");
  canvas.width = artifact.width * scale;
  canvas.height = artifact.height * scale;
  var context = canvas.getContext("2d");
  if (!context) throw new Error("This browser does not provide a 2D canvas for PNG export.");

  var svgUrl = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(artifact.svg);
  var image = await new Promise(function(resolve, reject) {
    var nextImage = new Image();
    nextImage.onload = function() { resolve(nextImage); };
    nextImage.onerror = function() { reject(new Error("The browser could not rasterize the DOM export.")); };
    nextImage.src = svgUrl;
  });
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  window.parent.postMessage({
    type: "diax-png-result",
    requestId: request.requestId,
    revision: ${JSON.stringify(t)},
    data: canvas.toDataURL("image/png"),
    width: artifact.width,
    height: artifact.height,
    scale: scale,
    assetClosure: artifact.assetClosure
  }, "*");
}

// Accept this exact runtime revision only after React commit + paint.
${ea(t)}
`},"r",0,eu,"s",0,function(){return(0,r.useSyncExternalStore)(eo,ei,es)},"t",0,"diax:playground:mdx-draft:v1","u",0,er,"v",0,function({className:e,variant:t="default",size:r="default",...a}){return(0,s.jsx)(n.Button,{"data-slot":"button",className:ee(et({variant:t,size:r,className:e})),...a})},"y",0,ee],32577)}]);