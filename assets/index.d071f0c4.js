var He=Object.defineProperty;var c=(e,t)=>He(e,"name",{value:t,configurable:!0});import{R as U,r as f}from"./index.0eb7e1b9.js";import{r as Ue}from"./index.865412e0.js";import{a as j,j as x,F as P}from"./jsx-runtime.de83721e.js";function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},A.apply(this,arguments)}c(A,"_extends");var v="colors",E="sizes",g="space",ve={gap:g,gridGap:g,columnGap:g,gridColumnGap:g,rowGap:g,gridRowGap:g,inset:g,insetBlock:g,insetBlockEnd:g,insetBlockStart:g,insetInline:g,insetInlineEnd:g,insetInlineStart:g,margin:g,marginTop:g,marginRight:g,marginBottom:g,marginLeft:g,marginBlock:g,marginBlockEnd:g,marginBlockStart:g,marginInline:g,marginInlineEnd:g,marginInlineStart:g,padding:g,paddingTop:g,paddingRight:g,paddingBottom:g,paddingLeft:g,paddingBlock:g,paddingBlockEnd:g,paddingBlockStart:g,paddingInline:g,paddingInlineEnd:g,paddingInlineStart:g,top:g,right:g,bottom:g,left:g,scrollMargin:g,scrollMarginTop:g,scrollMarginRight:g,scrollMarginBottom:g,scrollMarginLeft:g,scrollMarginX:g,scrollMarginY:g,scrollMarginBlock:g,scrollMarginBlockEnd:g,scrollMarginBlockStart:g,scrollMarginInline:g,scrollMarginInlineEnd:g,scrollMarginInlineStart:g,scrollPadding:g,scrollPaddingTop:g,scrollPaddingRight:g,scrollPaddingBottom:g,scrollPaddingLeft:g,scrollPaddingX:g,scrollPaddingY:g,scrollPaddingBlock:g,scrollPaddingBlockEnd:g,scrollPaddingBlockStart:g,scrollPaddingInline:g,scrollPaddingInlineEnd:g,scrollPaddingInlineStart:g,fontSize:"fontSizes",background:v,backgroundColor:v,backgroundImage:v,borderImage:v,border:v,borderBlock:v,borderBlockEnd:v,borderBlockStart:v,borderBottom:v,borderBottomColor:v,borderColor:v,borderInline:v,borderInlineEnd:v,borderInlineStart:v,borderLeft:v,borderLeftColor:v,borderRight:v,borderRightColor:v,borderTop:v,borderTopColor:v,caretColor:v,color:v,columnRuleColor:v,fill:v,outline:v,outlineColor:v,stroke:v,textDecorationColor:v,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:E,minBlockSize:E,maxBlockSize:E,inlineSize:E,minInlineSize:E,maxInlineSize:E,width:E,minWidth:E,maxWidth:E,height:E,minHeight:E,maxHeight:E,flexBasis:E,gridTemplateColumns:E,gridTemplateRows:E,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},Ve=c((e,t)=>typeof t=="function"?{"()":Function.prototype.toString.call(t)}:t,"i"),Y=c(()=>{const e=Object.create(null);return(t,r,...n)=>{const o=(i=>JSON.stringify(i,Ve))(t);return o in e?e[o]:e[o]=r(t,...n)}},"o"),T=Symbol.for("sxs.internal"),ce=c((e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),"s"),fe=c(e=>{for(const t in e)return!0;return!1},"a"),{hasOwnProperty:Ge}=Object.prototype,ae=c(e=>e.includes("-")?e:e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()),"d"),Ye=/\s+(?![^()]*\))/,V=c(e=>t=>e(...typeof t=="string"?String(t).split(Ye):[t]),"p"),pe={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:V((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e})),marginInline:V((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e})),maxSize:V((e,t)=>({maxBlockSize:e,maxInlineSize:t||e})),minSize:V((e,t)=>({minBlockSize:e,minInlineSize:t||e})),paddingBlock:V((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e})),paddingInline:V((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e}))},se=/([\d.]+)([^]*)/,qe=c((e,t)=>e.length?e.reduce((r,n)=>(r.push(...t.map(o=>o.includes("&")?o.replace(/&/g,/[ +>|~]/.test(n)&&/&.*&/.test(o)?`:is(${n})`:n):n+" "+o)),r),[]):t,"f"),Ze=c((e,t)=>e in Ke&&typeof t=="string"?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(r,n,o,i)=>n+(o==="stretch"?`-moz-available${i};${ae(e)}:${n}-webkit-fill-available`:`-moz-fit-content${i};${ae(e)}:${n}fit-content`)+i):String(t),"m"),Ke={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},L=c(e=>e?e+"-":"","S"),ke=c((e,t,r)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(n,o,i,l,s)=>l=="$"==!!i?n:(o||l=="--"?"calc(":"")+"var(--"+(l==="$"?L(t)+(s.includes("$")?"":L(r))+s.replace(/\$/g,"-"):s)+")"+(o||l=="--"?"*"+(o||"")+(i||"1")+")":"")),"k"),Je=/\s*,\s*(?![^()]*\))/,Xe=Object.prototype.toString,G=c((e,t,r,n,o)=>{let i,l,s;const a=c((u,m,p)=>{let d,h;const b=c(k=>{for(d in k){const S=d.charCodeAt(0)===64,R=S&&Array.isArray(k[d])?k[d]:[k[d]];for(h of R){const w=/[A-Z]/.test($=d)?$:$.replace(/-[^]/g,I=>I[1].toUpperCase()),q=typeof h=="object"&&h&&h.toString===Xe&&(!n.utils[w]||!m.length);if(w in n.utils&&!q){const I=n.utils[w];if(I!==l){l=I,b(I(h)),l=null;continue}}else if(w in pe){const I=pe[w];if(I!==s){s=I,b(I(h)),s=null;continue}}if(S&&(y=d.slice(1)in n.media?"@media "+n.media[d.slice(1)]:d,d=y.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(I,z,M,N,B,W)=>{const H=se.test(z),X=.0625*(H?-1:1),[Q,ue]=H?[N,z]:[z,N];return"("+(M[0]==="="?"":M[0]===">"===H?"max-":"min-")+Q+":"+(M[0]!=="="&&M.length===1?ue.replace(se,(De,oe,ie)=>Number(oe)+X*(M===">"?1:-1)+ie):ue)+(B?") and ("+(B[0]===">"?"min-":"max-")+Q+":"+(B.length===1?W.replace(se,(De,oe,ie)=>Number(oe)+X*(B===">"?-1:1)+ie):W):"")+")"})),q){const I=S?p.concat(d):[...p],z=S?[...m]:qe(m,d.split(Je));i!==void 0&&o(ge(...i)),i=void 0,a(h,z,I)}else i===void 0&&(i=[[],m,p]),d=S||d.charCodeAt(0)!==36?d:`--${L(n.prefix)}${d.slice(1).replace(/\$/g,"-")}`,h=q?h:typeof h=="number"?h&&w in Qe?String(h)+"px":String(h):ke(Ze(w,h==null?"":h),n.prefix,n.themeMap[w]),i[0].push(`${S?`${d} `:`${ae(d)}:`}${h}`)}}var y,$},"p");b(u),i!==void 0&&o(ge(...i)),i=void 0},"a");a(e,t,r)},"$"),ge=c((e,t,r)=>`${r.map(n=>`${n}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(r.length?r.length+1:0).join("}")}`,"x"),Qe={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},he=c(e=>String.fromCharCode(e+(e>25?39:97)),"R"),_=c(e=>(t=>{let r,n="";for(r=Math.abs(t);r>52;r=r/52|0)n=he(r%52)+n;return he(r%52)+n})(((t,r)=>{let n=r.length;for(;n;)t=33*t^r.charCodeAt(--n);return t})(5381,JSON.stringify(e))>>>0),"z"),K=["themed","global","styled","onevar","resonevar","allvar","inline"],et=c(e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch{return!1}},"j"),tt=c(e=>{let t;const r=c(()=>{const{cssRules:o}=t.sheet;return[].map.call(o,(i,l)=>{const{cssText:s}=i;let a="";if(s.startsWith("--sxs"))return"";if(o[l-1]&&(a=o[l-1].cssText).startsWith("--sxs")){if(!i.cssRules.length)return"";for(const u in t.rules)if(t.rules[u].group===i)return`--sxs{--sxs:${[...t.rules[u].cache].join(" ")}}${s}`;return i.cssRules.length?`${a}${s}`:""}return s}).join("")},"r"),n=c(()=>{if(t){const{rules:s,sheet:a}=t;if(!a.deleteRule){for(;Object(Object(a.cssRules)[0]).type===3;)a.cssRules.splice(0,1);a.cssRules=[]}for(const u in s)delete s[u]}const o=Object(e).styleSheets||[];for(const s of o)if(et(s)){for(let a=0,u=s.cssRules;u[a];++a){const m=Object(u[a]);if(m.type!==1)continue;const p=Object(u[a+1]);if(p.type!==4)continue;++a;const{cssText:d}=m;if(!d.startsWith("--sxs"))continue;const h=d.slice(14,-3).trim().split(/\s+/),b=K[h[0]];b&&(t||(t={sheet:s,reset:n,rules:{},toString:r}),t.rules[b]={group:p,index:a,cache:new Set(h)})}if(t)break}if(!t){const s=c((a,u)=>({type:u,cssRules:[],insertRule(m,p){this.cssRules.splice(p,0,s(m,{import:3,undefined:1}[(m.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return a==="@media{}"?`@media{${[].map.call(this.cssRules,m=>m.cssText).join("")}}`:a}}),"i");t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:s("","text/css"),rules:{},reset:n,toString:r}}const{sheet:i,rules:l}=t;for(let s=K.length-1;s>=0;--s){const a=K[s];if(!l[a]){const u=K[s+1],m=l[u]?l[u].index:i.cssRules.length;i.insertRule("@media{}",m),i.insertRule(`--sxs{--sxs:${s}}`,m),l[a]={group:i.cssRules[m+1],index:m,cache:new Set([s])}}rt(l[a])}},"n");return n(),t},"E"),rt=c(e=>{const t=e.group;let r=t.cssRules.length;e.apply=n=>{try{t.insertRule(n,r),++r}catch{}}},"v"),Z=Symbol(),nt=Y(),me=c((e,t)=>nt(e,()=>(...r)=>{let n={type:null,composers:new Set};for(const o of r)if(o!=null)if(o[T]){n.type==null&&(n.type=o[T].type);for(const i of o[T].composers)n.composers.add(i)}else o.constructor!==Object||o.$$typeof?n.type==null&&(n.type=o):n.composers.add(ot(o,e));return n.type==null&&(n.type="span"),n.composers.size||n.composers.add(["PJLV",{},[],[],{},[]]),it(e,n,t)}),"M"),ot=c(({variants:e,compoundVariants:t,defaultVariants:r,...n},o)=>{const i=`${L(o.prefix)}c-${_(n)}`,l=[],s=[],a=Object.create(null),u=[];for(const d in r)a[d]=String(r[d]);if(typeof e=="object"&&e)for(const d in e){m=a,p=d,Ge.call(m,p)||(a[d]="undefined");const h=e[d];for(const b in h){const k={[d]:String(b)};String(b)==="undefined"&&u.push(d);const y=h[b],$=[k,y,!fe(y)];l.push($)}}var m,p;if(typeof t=="object"&&t)for(const d of t){let{css:h,...b}=d;h=typeof h=="object"&&h||{};for(const y in b)b[y]=String(b[y]);const k=[b,h,!fe(h)];s.push(k)}return[i,n,l,s,a,u]},"C"),it=c((e,t,r)=>{const[n,o,i,l]=st(t.composers),s=typeof t.type=="function"||t.type.$$typeof?(p=>{function d(){for(let h=0;h<d[Z].length;h++){const[b,k]=d[Z][h];p.rules[b].apply(k)}return d[Z]=[],null}return c(d,"t"),d[Z]=[],d.rules={},K.forEach(h=>d.rules[h]={apply:b=>d[Z].push([h,b])}),d})(r):null,a=(s||r).rules,u=`.${n}${o.length>1?`:where(.${o.slice(1).join(".")})`:""}`,m=c(p=>{p=typeof p=="object"&&p||at;const{css:d,...h}=p,b={};for(const $ in i)if(delete h[$],$ in p){let S=p[$];typeof S=="object"&&S?b[$]={"@initial":i[$],...S}:(S=String(S),b[$]=S!=="undefined"||l.has($)?S:i[$])}else b[$]=i[$];const k=new Set([...o]);for(const[$,S,R,w]of t.composers){r.rules.styled.cache.has($)||(r.rules.styled.cache.add($),G(S,[`.${$}`],[],e,z=>{a.styled.apply(z)}));const q=be(R,b,e.media),I=be(w,b,e.media,!0);for(const z of q)if(z!==void 0)for(const[M,N,B]of z){const W=`${$}-${_(N)}-${M}`;k.add(W);const H=(B?r.rules.resonevar:r.rules.onevar).cache,X=B?a.resonevar:a.onevar;H.has(W)||(H.add(W),G(N,[`.${W}`],[],e,Q=>{X.apply(Q)}))}for(const z of I)if(z!==void 0)for(const[M,N]of z){const B=`${$}-${_(N)}-${M}`;k.add(B),r.rules.allvar.cache.has(B)||(r.rules.allvar.cache.add(B),G(N,[`.${B}`],[],e,W=>{a.allvar.apply(W)}))}}if(typeof d=="object"&&d){const $=`${n}-i${_(d)}-css`;k.add($),r.rules.inline.cache.has($)||(r.rules.inline.cache.add($),G(d,[`.${$}`],[],e,S=>{a.inline.apply(S)}))}for(const $ of String(p.className||"").trim().split(/\s+/))$&&k.add($);const y=h.className=[...k].join(" ");return{type:t.type,className:y,selector:u,props:h,toString:()=>y,deferredInjector:s}},"p");return ce(m,{className:n,selector:u,[T]:t,toString:()=>(r.rules.styled.cache.has(n)||m(),n)})},"P"),st=c(e=>{let t="";const r=[],n={},o=[];for(const[i,,,,l,s]of e){t===""&&(t=i),r.push(i),o.push(...s);for(const a in l){const u=l[a];(n[a]===void 0||u!=="undefined"||s.includes(u))&&(n[a]=u)}}return[t,r,n,new Set(o)]},"L"),be=c((e,t,r,n)=>{const o=[];e:for(let[i,l,s]of e){if(s)continue;let a,u=0,m=!1;for(a in i){const p=i[a];let d=t[a];if(d!==p){if(typeof d!="object"||!d)continue e;{let h,b,k=0;for(const y in d){if(p===String(d[y])){if(y!=="@initial"){const $=y.slice(1);(b=b||[]).push($ in r?r[$]:y.replace(/^@media ?/,"")),m=!0}u+=k,h=!0}++k}if(b&&b.length&&(l={["@media "+b.join(", ")]:l}),!h)continue e}}}(o[u]=o[u]||[]).push([n?"cv":`${a}-${i[a]}`,l,m])}return o},"O"),at={},lt=Y(),ct=c((e,t)=>lt(e,()=>(...r)=>{const n=c(()=>{for(let o of r){o=typeof o=="object"&&o||{};let i=_(o);if(!t.rules.global.cache.has(i)){if(t.rules.global.cache.add(i),"@import"in o){let l=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let s of[].concat(o["@import"]))s=s.includes('"')||s.includes("'")?s:`"${s}"`,t.sheet.insertRule(`@import ${s};`,l++);delete o["@import"]}G(o,[],[],e,l=>{t.rules.global.apply(l)})}}return""},"n");return ce(n,{toString:n})}),"D"),dt=Y(),ut=c((e,t)=>dt(e,()=>r=>{const n=`${L(e.prefix)}k-${_(r)}`,o=c(()=>{if(!t.rules.global.cache.has(n)){t.rules.global.cache.add(n);const i=[];G(r,[],[],e,s=>i.push(s));const l=`@keyframes ${n}{${i.join("")}}`;t.rules.global.apply(l)}return n},"i");return ce(o,{get name(){return o()},toString:o})}),"V"),ft=c(class{constructor(e,t,r,n){this.token=e==null?"":String(e),this.value=t==null?"":String(t),this.scale=r==null?"":String(r),this.prefix=n==null?"":String(n)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+L(this.prefix)+L(this.scale)+this.token}toString(){return this.computedValue}},"G"),pt=Y(),gt=c((e,t)=>pt(e,()=>(r,n)=>{n=typeof r=="object"&&r||Object(n);const o=`.${r=(r=typeof r=="string"?r:"")||`${L(e.prefix)}t-${_(n)}`}`,i={},l=[];for(const a in n){i[a]={};for(const u in n[a]){const m=`--${L(e.prefix)}${a}-${u}`,p=ke(String(n[a][u]),e.prefix,a);i[a][u]=new ft(u,p,a,e.prefix),l.push(`${m}:${p}`)}}const s=c(()=>{if(l.length&&!t.rules.themed.cache.has(r)){t.rules.themed.cache.add(r);const a=`${n===e.theme?":root,":""}.${r}{${l.join(";")}}`;t.rules.themed.apply(a)}return r},"s");return{...i,get className(){return s()},selector:o,toString:s}}),"J"),ht=Y(),mt=Y(),bt=c(e=>{const t=(r=>{let n=!1;const o=ht(r,i=>{n=!0;const l="prefix"in(i=typeof i=="object"&&i||{})?String(i.prefix):"",s=typeof i.media=="object"&&i.media||{},a=typeof i.root=="object"?i.root||null:globalThis.document||null,u=typeof i.theme=="object"&&i.theme||{},m={prefix:l,media:s,theme:u,themeMap:typeof i.themeMap=="object"&&i.themeMap||{...ve},utils:typeof i.utils=="object"&&i.utils||{}},p=tt(a),d={css:me(m,p),globalCss:ct(m,p),keyframes:ut(m,p),createTheme:gt(m,p),reset(){p.reset(),d.theme.toString()},theme:{},sheet:p,config:m,prefix:l,getCssText:p.toString,toString:p.toString};return String(d.theme=d.createTheme(u)),d});return n||o.reset(),o})(e);return t.styled=(({config:r,sheet:n})=>mt(r,()=>{const o=me(r,n);return(...i)=>{const l=o(...i),s=l[T].type,a=U.forwardRef((u,m)=>{const p=u&&u.as||s,{props:d,deferredInjector:h}=l(u);return delete d.as,d.ref=m,h?U.createElement(U.Fragment,null,U.createElement(p,d),U.createElement(h,null)):U.createElement(p,d)});return a.className=l.className,a.displayName=`Styled.${s.displayName||s.name||s}`,a.selector=l.selector,a.toString=()=>l.selector,a[T]=l[T],a}}))(t),t},"q"),$t=f.exports.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Se=c(function(t,r,n){var o=n.get(t);return o?o(r):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)},"renderPathForWeight");function $e(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}c($e,"_objectWithoutPropertiesLoose");var Ce=f.exports.forwardRef(function(e,t){var r=e.alt,n=e.color,o=e.size,i=e.weight,l=e.mirrored,s=e.children,a=e.renderPath,u=$e(e,["alt","color","size","weight","mirrored","children","renderPath"]),m=f.exports.useContext($t),p=m.color,d=p===void 0?"currentColor":p,h=m.size,b=m.weight,k=b===void 0?"regular":b,y=m.mirrored,$=y===void 0?!1:y,S=$e(m,["color","size","weight","mirrored"]);return j("svg",{...Object.assign({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o!=null?o:h,height:o!=null?o:h,fill:n!=null?n:d,viewBox:"0 0 256 256",transform:l||$?"scale(-1, 1)":void 0},S,u),children:[!!r&&x("title",{children:r}),s,x("rect",{width:"256",height:"256",fill:"none"}),a(i!=null?i:k,n!=null?n:d)]})});Ce.displayName="IconBase";const we=Ce;var F=new Map;F.set("bold",function(e){return x(P,{children:x("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});F.set("duotone",function(e){return x(P,{children:x("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});F.set("fill",function(){return x(P,{children:x("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"})})});F.set("light",function(e){return x(P,{children:x("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});F.set("thin",function(e){return x(P,{children:x("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});F.set("regular",function(e){return x(P,{children:x("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var xt=c(function(t,r){return Se(t,r,F)},"renderPath"),Re=f.exports.forwardRef(function(e,t){return x(we,{...Object.assign({ref:t},e,{renderPath:xt})})});Re.displayName="Check";const yt=Re;var D=new Map;D.set("bold",function(e){return j(P,{children:[x("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),x("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});D.set("duotone",function(e){return j(P,{children:[x("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),x("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),x("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});D.set("fill",function(){return x(P,{children:x("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"})})});D.set("light",function(e){return j(P,{children:[x("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),x("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});D.set("thin",function(e){return j(P,{children:[x("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),x("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});D.set("regular",function(e){return j(P,{children:[x("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),x("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var vt=c(function(t,r){return Se(t,r,D)},"renderPath"),Ee=f.exports.forwardRef(function(e,t){return x(we,{...Object.assign({ref:t},e,{renderPath:vt})})});Ee.displayName="User";const kt=Ee;function Ie(e,t=[]){let r=[];function n(i,l){const s=f.exports.createContext(l),a=r.length;r=[...r,l];function u(p){const{scope:d,children:h,...b}=p,k=(d==null?void 0:d[e][a])||s,y=f.exports.useMemo(()=>b,Object.values(b));return f.exports.createElement(k.Provider,{value:y},h)}c(u,"Provider");function m(p,d){const h=(d==null?void 0:d[e][a])||s,b=f.exports.useContext(h);if(b)return b;if(l!==void 0)return l;throw new Error(`\`${p}\` must be used within \`${i}\``)}return c(m,"useContext"),u.displayName=i+"Provider",[u,m]}c(n,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const o=c(()=>{const i=r.map(l=>f.exports.createContext(l));return c(function(s){const a=(s==null?void 0:s[e])||i;return f.exports.useMemo(()=>({[`__scope${e}`]:{...s,[e]:a}}),[s,a])},"useScope")},"createScope");return o.scopeName=e,[n,St(o,...t)]}c(Ie,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function St(...e){const t=e[0];if(e.length===1)return t;const r=c(()=>{const n=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return c(function(i){const l=n.reduce((s,{useScope:a,scopeName:u})=>{const p=a(i)[`__scope${u}`];return{...s,...p}},{});return f.exports.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])},"useComposedScopes")},"createScope1");return r.scopeName=t.scopeName,r}c(St,"$c512c27ab02ef895$var$composeContextScopes");function de(e){const t=f.exports.useRef(e);return f.exports.useEffect(()=>{t.current=e}),f.exports.useMemo(()=>(...r)=>{var n;return(n=t.current)===null||n===void 0?void 0:n.call(t,...r)},[])}c(de,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");const te=Boolean(globalThis==null?void 0:globalThis.document)?f.exports.useLayoutEffect:()=>{};function Ct(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}c(Ct,"$6ed0406888f73fc4$var$setRef");function ze(...e){return t=>e.forEach(r=>Ct(r,t))}c(ze,"$6ed0406888f73fc4$export$43e446d32b3d21af");function Be(...e){return f.exports.useCallback(ze(...e),e)}c(Be,"$6ed0406888f73fc4$export$c7b2cbe3552a0d05");const Pe=f.exports.forwardRef((e,t)=>{const{children:r,...n}=e,o=f.exports.Children.toArray(r),i=o.find(Rt);if(i){const l=i.props.children,s=o.map(a=>a===i?f.exports.Children.count(l)>1?f.exports.Children.only(null):f.exports.isValidElement(l)?l.props.children:null:a);return f.exports.createElement(le,A({},n,{ref:t}),f.exports.isValidElement(l)?f.exports.cloneElement(l,void 0,s):null)}return f.exports.createElement(le,A({},n,{ref:t}),r)});Pe.displayName="Slot";const le=f.exports.forwardRef((e,t)=>{const{children:r,...n}=e;return f.exports.isValidElement(r)?f.exports.cloneElement(r,{...Et(n,r.props),ref:ze(t,r.ref)}):f.exports.Children.count(r)>1?f.exports.Children.only(null):null});le.displayName="SlotClone";const wt=c(({children:e})=>f.exports.createElement(f.exports.Fragment,null,e),"$5e63c961fc1ce211$export$d9f1ccf0bdb05d45");function Rt(e){return f.exports.isValidElement(e)&&e.type===wt}c(Rt,"$5e63c961fc1ce211$var$isSlottable");function Et(e,t){const r={...t};for(const n in t){const o=e[n],i=t[n];/^on[A-Z]/.test(n)?o&&i?r[n]=(...s)=>{i(...s),o(...s)}:o&&(r[n]=o):n==="style"?r[n]={...o,...i}:n==="className"&&(r[n]=[o,i].filter(Boolean).join(" "))}return{...e,...r}}c(Et,"$5e63c961fc1ce211$var$mergeProps");const It=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],J=It.reduce((e,t)=>{const r=f.exports.forwardRef((n,o)=>{const{asChild:i,...l}=n,s=i?Pe:t;return f.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),f.exports.createElement(s,A({},l,{ref:o}))});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),Ae="Avatar",[zt,Tr]=Ie(Ae),[Bt,je]=zt(Ae),Pt=f.exports.forwardRef((e,t)=>{const{__scopeAvatar:r,...n}=e,[o,i]=f.exports.useState("idle");return f.exports.createElement(Bt,{scope:r,imageLoadingStatus:o,onImageLoadingStatusChange:i},f.exports.createElement(J.span,A({},n,{ref:t})))}),At="AvatarImage",jt=f.exports.forwardRef((e,t)=>{const{__scopeAvatar:r,src:n,onLoadingStatusChange:o=c(()=>{},"onLoadingStatusChange"),...i}=e,l=je(At,r),s=Lt(n),a=de(u=>{o(u),l.onImageLoadingStatusChange(u)});return te(()=>{s!=="idle"&&a(s)},[s,a]),s==="loaded"?f.exports.createElement(J.img,A({},i,{ref:t,src:n})):null}),Mt="AvatarFallback",Wt=f.exports.forwardRef((e,t)=>{const{__scopeAvatar:r,delayMs:n,...o}=e,i=je(Mt,r),[l,s]=f.exports.useState(n===void 0);return f.exports.useEffect(()=>{if(n!==void 0){const a=window.setTimeout(()=>s(!0),n);return()=>window.clearTimeout(a)}},[n]),l&&i.imageLoadingStatus!=="loaded"?f.exports.createElement(J.span,A({},o,{ref:t})):null});function Lt(e){const[t,r]=f.exports.useState("idle");return f.exports.useEffect(()=>{if(!e){r("error");return}let n=!0;const o=new window.Image,i=c(l=>()=>{!n||r(l)},"updateStatus");return r("loading"),o.onload=i("loaded"),o.onerror=i("error"),o.src=e,()=>{n=!1}},[e]),t}c(Lt,"$cddcb0b647441e34$var$useImageLoadingStatus");const Nt=Pt,Tt=jt,_t=Wt;function xe(e,t,{checkForDefaultPrevented:r=!0}={}){return c(function(o){if(e==null||e(o),r===!1||!o.defaultPrevented)return t==null?void 0:t(o)},"handleEvent")}c(xe,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function Ot({prop:e,defaultProp:t,onChange:r=c(()=>{},"onChange")}){const[n,o]=Ft({defaultProp:t,onChange:r}),i=e!==void 0,l=i?e:n,s=de(r),a=f.exports.useCallback(u=>{if(i){const p=typeof u=="function"?u(e):u;p!==e&&s(p)}else o(u)},[i,e,o,s]);return[l,a]}c(Ot,"$71cd76cc60e0454e$export$6f32135080cb4c3");function Ft({defaultProp:e,onChange:t}){const r=f.exports.useState(e),[n]=r,o=f.exports.useRef(n),i=de(t);return f.exports.useEffect(()=>{o.current!==n&&(i(n),o.current=n)},[n,o,i]),r}c(Ft,"$71cd76cc60e0454e$var$useUncontrolledState");function Dt(e){const t=f.exports.useRef({value:e,previous:e});return f.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}c(Dt,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");function Ht(e){const[t,r]=f.exports.useState(void 0);return te(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const n=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let l,s;if("borderBoxSize"in i){const a=i.borderBoxSize,u=Array.isArray(a)?a[0]:a;l=u.inlineSize,s=u.blockSize}else l=e.offsetWidth,s=e.offsetHeight;r({width:l,height:s})});return n.observe(e,{box:"border-box"}),()=>n.unobserve(e)}else r(void 0)},[e]),t}c(Ht,"$db6c3485150b8e66$export$1ab7ae714698c4b8");function Ut(e,t){return f.exports.useReducer((r,n)=>{const o=t[r][n];return o!=null?o:r},e)}c(Ut,"$fe963b355347cc68$export$3e6543de14f8614f");const Me=c(e=>{const{present:t,children:r}=e,n=Vt(t),o=typeof r=="function"?r({present:n.isPresent}):f.exports.Children.only(r),i=Be(n.ref,o.ref);return typeof r=="function"||n.isPresent?f.exports.cloneElement(o,{ref:i}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");Me.displayName="Presence";function Vt(e){const[t,r]=f.exports.useState(),n=f.exports.useRef({}),o=f.exports.useRef(e),i=f.exports.useRef("none"),l=e?"mounted":"unmounted",[s,a]=Ut(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return f.exports.useEffect(()=>{const u=ee(n.current);i.current=s==="mounted"?u:"none"},[s]),te(()=>{const u=n.current,m=o.current;if(m!==e){const d=i.current,h=ee(u);e?a("MOUNT"):h==="none"||(u==null?void 0:u.display)==="none"?a("UNMOUNT"):a(m&&d!==h?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,a]),te(()=>{if(t){const u=c(p=>{const h=ee(n.current).includes(p.animationName);p.target===t&&h&&Ue.exports.flushSync(()=>a("ANIMATION_END"))},"handleAnimationEnd"),m=c(p=>{p.target===t&&(i.current=ee(n.current))},"handleAnimationStart");return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",u),t.addEventListener("animationend",u),()=>{t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",u),t.removeEventListener("animationend",u)}}else a("ANIMATION_END")},[t,a]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:f.exports.useCallback(u=>{u&&(n.current=getComputedStyle(u)),r(u)},[])}}c(Vt,"$921a889cee6df7e8$var$usePresence");function ee(e){return(e==null?void 0:e.animationName)||"none"}c(ee,"$921a889cee6df7e8$var$getAnimationName");const We="Checkbox",[Gt,_r]=Ie(We),[Yt,qt]=Gt(We),Zt=f.exports.forwardRef((e,t)=>{const{__scopeCheckbox:r,name:n,checked:o,defaultChecked:i,required:l,disabled:s,value:a="on",onCheckedChange:u,...m}=e,[p,d]=f.exports.useState(null),h=Be(t,R=>d(R)),b=f.exports.useRef(!1),k=p?Boolean(p.closest("form")):!0,[y=!1,$]=Ot({prop:o,defaultProp:i,onChange:u}),S=f.exports.useRef(y);return f.exports.useEffect(()=>{const R=p==null?void 0:p.form;if(R){const w=c(()=>$(S.current),"reset");return R.addEventListener("reset",w),()=>R.removeEventListener("reset",w)}},[p,$]),f.exports.createElement(Yt,{scope:r,state:y,disabled:s},f.exports.createElement(J.button,A({type:"button",role:"checkbox","aria-checked":O(y)?"mixed":y,"aria-required":l,"data-state":Le(y),"data-disabled":s?"":void 0,disabled:s,value:a},m,{ref:h,onKeyDown:xe(e.onKeyDown,R=>{R.key==="Enter"&&R.preventDefault()}),onClick:xe(e.onClick,R=>{$(w=>O(w)?!0:!w),k&&(b.current=R.isPropagationStopped(),b.current||R.stopPropagation())})})),k&&f.exports.createElement(Xt,{control:p,bubbles:!b.current,name:n,value:a,checked:y,required:l,disabled:s,style:{transform:"translateX(-100%)"}}))}),Kt="CheckboxIndicator",Jt=f.exports.forwardRef((e,t)=>{const{__scopeCheckbox:r,forceMount:n,...o}=e,i=qt(Kt,r);return f.exports.createElement(Me,{present:n||O(i.state)||i.state===!0},f.exports.createElement(J.span,A({"data-state":Le(i.state),"data-disabled":i.disabled?"":void 0},o,{ref:t,style:{pointerEvents:"none",...e.style}})))}),Xt=c(e=>{const{control:t,checked:r,bubbles:n=!0,...o}=e,i=f.exports.useRef(null),l=Dt(r),s=Ht(t);return f.exports.useEffect(()=>{const a=i.current,u=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(u,"checked").set;if(l!==r&&p){const d=new Event("click",{bubbles:n});a.indeterminate=O(r),p.call(a,O(r)?!1:r),a.dispatchEvent(d)}},[l,r,n]),f.exports.createElement("input",A({type:"checkbox","aria-hidden":!0,defaultChecked:O(r)?!1:r},o,{tabIndex:-1,ref:i,style:{...e.style,...s,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function O(e){return e==="indeterminate"}c(O,"$e698a72e93240346$var$isIndeterminate");function Le(e){return O(e)?"indeterminate":e?"checked":"unchecked"}c(Le,"$e698a72e93240346$var$getState");const Qt=Zt,er=Jt;var tr=Object.defineProperty,rr=Object.defineProperties,nr=Object.getOwnPropertyDescriptors,re=Object.getOwnPropertySymbols,Ne=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable,ye=c((e,t,r)=>t in e?tr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,"__defNormalProp"),ne=c((e,t)=>{for(var r in t||(t={}))Ne.call(t,r)&&ye(e,r,t[r]);if(re)for(var r of re(t))Te.call(t,r)&&ye(e,r,t[r]);return e},"__spreadValues"),_e=c((e,t)=>rr(e,nr(t)),"__spreadProps"),or=c((e,t)=>{var r={};for(var n in e)Ne.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&re)for(var n of re(e))t.indexOf(n)<0&&Te.call(e,n)&&(r[n]=e[n]);return r},"__objRest"),ir={white:"#FFF",black:"#000",gray100:"#E1E1E6",gray200:"#A9A9B2",gray400:"#7C7C8A",gray500:"#505059",gray600:"#323238",gray700:"#29292E",gray800:"#202024",gray900:"#121214",ignite300:"#00B37E",ignite500:"#00875F",ignite700:"#015F43",ignite900:"#00291D"},sr={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",40:"10rem",64:"16rem",80:"20rem"},ar={px:"1px",xs:"4px",sm:"6px",md:"8px",lg:"16px",full:"99999px"},lr={default:"Roboto, sans-serif",code:"monospace"},cr={xxs:"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","4xl":"2rem","5xl":"2.25rem","6xl":"3rem","7xl":"4rem","8xl":"4.5rem","9xl":"6rem"},dr={regular:"400",medium:"500",bold:"700"},ur={shorter:"125%",short:"140%",base:"160%",tall:"180%"},{styled:C,css:Or,globalCss:Fr,keyframes:Oe,getCssText:Dr,theme:Hr,createTheme:Ur,config:Vr}=bt({themeMap:_e(ne({},ve),{height:"space",width:"space"}),theme:{colors:ir,fontSizes:cr,fontWeights:dr,fonts:lr,lineHeights:ur,radii:ar,space:sr}}),fr=C("div",{padding:"$4",borderRadius:"$md",backgroundColor:"$gray600",border:"1px solid $gray600"});fr.displayName="Box";var Fe=C("p",{fontFamily:"$default",lineHeight:"$base",margin:0,color:"$gray100",variants:{size:{xxs:{fontsize:"$xxs"},xs:{fontsize:"$xs"},sm:{fontsize:"$sm"},md:{fontsize:"$md"},lg:{fontsize:"$lg"},xl:{fontsize:"$xl"},"2xl":{fontsize:"$2xl"},"4xl":{fontsize:"$4xl"},"5xl":{fontsize:"$5xl"},"6xl":{fontsize:"$6xl"},"7xl":{fontsize:"$7xl"},"8xl":{fontsize:"$8xl"},"9xl":{fontsize:"$9xl"}}},defaultVariants:{size:"md"}});Fe.displayName="Text";var pr=C("h2",{fontFamily:"$default",lineHeight:"$shorter",margin:0,color:"$gray100",variants:{size:{sm:{fontSize:"$xl"},md:{fontSize:"$2xl"},lg:{fontSize:"$4xl"},"2xl":{fontSize:"$5xl"},"3xl":{fontSize:"$6xl"},"4xl":{fontSize:"$7xl"},"5xl":{fontSize:"$8xl"},"6xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});pr.displayName="Heading";var gr=C(Nt,{borderRadius:"$full",display:"inline-block",width:"$12",height:"$12",overflow:"hidden"}),hr=C(Tt,{width:"100%",height:"100%",objectFit:"cover",borderRadius:"inherit"}),mr=C(_t,{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"$gray600",color:"$gray800",svg:{width:"$6",height:"$6"}});function br(e){return j(gr,{children:[x(hr,ne({},e)),x(mr,{delayMs:600,children:x(kt,{})})]})}c(br,"Avatar2");br.displayName="Avatar";var $r=C("button",{all:"unset",borderRadius:"$sm",fontWeight:"$medium",fontFamily:"$default",textAlign:"center",minWidth:120,boxSizing:"border-box",padding:"0 $4",display:"flex",alignItems:"center",justifyContent:"center",gap:"$2",cursor:"pointer",svg:{width:"$4",height:"$4"},"&:disabled":{cursor:"not-allowed"},variants:{variant:{primary:{color:"$White",background:"$ignite500","&:not(:disabled):hover":{background:"$ignite300"},"&:disabled":{background:"$gray200"}},secondary:{color:"$ignite300",border:"2px solid $ignite500","&:not(:disabled):hover":{background:"$ignite500",color:"$white"},"&:disabled":{color:"$gray200",borderColor:"$gray200"}},tertiary:{color:"$gray100","&:not(:disabled):hover":{color:"$white"},"&:disabled":{color:"$gray600"}}},size:{sm:{height:38},md:{height:46}}},defaultVariants:{variant:"primary",size:"md"}});$r.displayName="Button";var xr=C("div",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",display:"flex",alignItems:"baseline","&:has(input:focus)":{borderColor:"$ignite300"},"&:has(input:Disabled)":{opacity:.5,cursor:"not-allowed"}}),yr=C("span",{fontFamily:"$default",fontSize:"$sm",color:"$gray400",fontWeight:"$regular"}),vr=C("input",{fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"$regular",background:"$transparent",border:0,width:"100%","&:focus":{outline:"none"},"&:disabled":{cursor:"not-allowed"},"&:placeholder":{color:"gray400"}});function kr(e){var t=e,{prefix:r}=t,n=or(t,["prefix"]);return j(xr,{children:[!!r&&x(yr,{children:r}),x(vr,ne({},n))]})}c(kr,"TextInput");kr.displayName="TextInput";var Sr=C("textarea",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"$regular",resize:"vertical",minHeight:80,"&:focus":{outline:0,borderColor:"$ignite300"},"&:disabled":{opacity:.5,cursor:"not-allowed"},"&:placeholder":{color:"$gray400"}});Sr.displayName="TextArea";var Cr=C(Qt,{all:"unset",width:"$6",height:"$6",backgroundColor:"$gray900",borderRadius:"xs",lineHeight:0,cursor:"pointer",overflow:"hidden",boxSizing:"border-box",display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid $gray900",'&[data-state="checked"]':{backgroundColor:"$ignite300"},"&:focus":{border:"2px solid $ignite300"}}),wr=Oe({from:{transform:"translateY(-100%)"},to:{transform:"translateY(0)"}}),Rr=Oe({from:{transform:"translateY(0)"},to:{transform:"translateY(-100%)"}}),Er=C(er,{color:"$white",width:"$4",height:"$4",'&[data-state="checked"]':{animation:`${wr} 200ms ease-out`},'&[data-state="unchecked"]':{animation:`${Rr} 200ms ease-out`}});function Ir(e){return x(Cr,_e(ne({},e),{children:x(Er,{asChild:!0,children:x(yt,{weight:"bold"})})}))}c(Ir,"Checkbox2");Ir.displayName="Checkbox";var zr=C("div",{}),Br=C(Fe,{color:"$gray200",defaultVariants:{size:"xs"}}),Pr=C("div",{display:"grid",gridTemplateColumns:"repeat(var(--steps-size), 1fr)",gap:2,marginTop:"$1"}),Ar=C("div",{height:"$1",borderRadius:"$px",backgroundColor:"$gray500",variants:{active:{true:{backgroundColor:"$gray100"}}}});function jr({size:e,currentStep:t=1}){return j(zr,{children:[j(Br,{children:[t," de ",e]}),x(Pr,{css:{"--steps-size":e},children:Array.from({length:e},(r,n)=>n+1).map(r=>x(Ar,{active:t>=r},r))})]})}c(jr,"MultiStep");jr.displayName="MultiStep";export{br as A,fr as B,Ir as C,pr as H,we as I,jr as M,Fe as T,$r as a,Sr as b,kr as c,Se as r};
//# sourceMappingURL=index.d071f0c4.js.map
