import{_ as p,c as e,b as s,d as n,e as o,a,o as t,r as c}from"./app.a496e31a.js";const r="/awesome-graph/assets/svg-css-namespace.0b0bd488.png",os=JSON.parse('{"title":"SMIL元素特性介绍","description":"","frontmatter":{"title":"SMIL元素特性介绍"},"headers":[{"level":2,"title":"4️⃣ ⭐ xlink:href 指定动画目标","slug":"_4️⃣-⭐-xlink-href-指定动画目标","link":"#_4️⃣-⭐-xlink-href-指定动画目标","children":[]},{"level":2,"title":"5️⃣ attributeName & attributeType 指定动画属性","slug":"_5️⃣-attributename-attributetype-指定动画属性","link":"#_5️⃣-attributename-attributetype-指定动画属性","children":[]},{"level":2,"title":"6️⃣ from, by, to, begin, dur, fill 特性","slug":"_6️⃣-from-by-to-begin-dur-fill-特性","link":"#_6️⃣-from-by-to-begin-dur-fill-特性","children":[]},{"level":2,"title":"7️⃣ restart 重启动画","slug":"_7️⃣-restart-重启动画","link":"#_7️⃣-restart-重启动画","children":[]},{"level":2,"title":"8️⃣ ⭐ 命名动画和同步多个动画","slug":"_8️⃣-⭐-命名动画和同步多个动画","link":"#_8️⃣-⭐-命名动画和同步多个动画","children":[]},{"level":2,"title":"9️⃣ 重复动画","slug":"_9️⃣-重复动画","link":"#_9️⃣-重复动画","children":[{"level":3,"title":"9.1 repeatCount 重复动画","slug":"_9-1-repeatcount-重复动画","link":"#_9-1-repeatcount-重复动画","children":[]},{"level":3,"title":"9.2 repeatDur 限制重复时间","slug":"_9-2-repeatdur-限制重复时间","link":"#_9-2-repeatdur-限制重复时间","children":[]},{"level":3,"title":"9.3 依据重复次数同步动画","slug":"_9-3-依据重复次数同步动画","link":"#_9-3-依据重复次数同步动画","children":[]}]},{"level":2,"title":"🔟 keyTimes&values 控制动画keyframes值","slug":"🔟-keytimes-values-控制动画keyframes值","link":"#🔟-keytimes-values-控制动画keyframes值","children":[]},{"level":2,"title":"1️⃣1️⃣ calcMode & keySplines 自定义keyframes缓动函数","slug":"_1️⃣1️⃣-calcmode-keysplines-自定义keyframes缓动函数","link":"#_1️⃣1️⃣-calcmode-keysplines-自定义keyframes缓动函数","children":[]},{"level":2,"title":"1️⃣2️⃣ additive & accumulate 叠加和累积动画","slug":"_1️⃣2️⃣-additive-accumulate-叠加和累积动画","link":"#_1️⃣2️⃣-additive-accumulate-叠加和累积动画","children":[]},{"level":2,"title":"1️⃣3️⃣ end 指定动画结束条件","slug":"_1️⃣3️⃣-end-指定动画结束条件","link":"#_1️⃣3️⃣-end-指定动画结束条件","children":[]},{"level":2,"title":"1️⃣4️⃣ 多组 begin + end 定义间歇性动画","slug":"_1️⃣4️⃣-多组-begin-end-定义间歇性动画","link":"#_1️⃣4️⃣-多组-begin-end-定义间歇性动画","children":[]},{"level":2,"title":"1️⃣5️⃣ min & max 限制动画时间","slug":"_1️⃣5️⃣-min-max-限制动画时间","link":"#_1️⃣5️⃣-min-max-限制动画时间","children":[]}],"relativePath":"svg/animation/svg-animation-attributes.md","lastUpdated":1673434777000}'),D={name:"svg/animation/svg-animation-attributes.md"},F=s("p",null,[n("这是 "),s("a",{href:"https://css-tricks.com/guide-svg-animations-smil/#aa-specifying-the-target-of-the-animation-with-xlinkhref",target:"_blank",rel:"noreferrer"},"A Guide to SVG Animations (SMIL)"),n(" 的部分内容2。")],-1),y={class:"table-of-contents"},i=s("li",null,[s("a",{href:"#_4️⃣-⭐-xlink-href-指定动画目标"},"4️⃣ ⭐ xlink:href 指定动画目标")],-1),C=s("li",null,[s("a",{href:"#_5️⃣-attributename-attributetype-指定动画属性"},"5️⃣ attributeName & attributeType 指定动画属性")],-1),d={href:"#_6️⃣-from-by-to-begin-dur-fill-特性"},u=a("",9),A=a("",21),h={id:"_6️⃣-from-by-to-begin-dur-fill-特性",tabindex:"-1"},q=s("code",null,"from, by, to, begin, dur, fill",-1),m=s("a",{class:"header-anchor",href:"#_6️⃣-from-by-to-begin-dur-fill-特性","aria-hidden":"true"},"#",-1),E=a("",4),g=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"#1 SVG animate",src:"https://codepen.io/JamesSawyer/embed/preview/qBKqJvV?default-tab=result&editable=true&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/qBKqJvV">
  #1 SVG animate</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),f=a("",23),_=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"Untitled",src:"https://codepen.io/JamesSawyer/embed/preview/ExRNOBd?default-tab=result&editable=true&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/ExRNOBd">
  Untitled</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),b=a("",10),S=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"#3 SVG SMIL repeatCount attribute",src:"https://codepen.io/JamesSawyer/embed/preview/BaVpzLX?default-tab=result&editable=true&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/BaVpzLX">
  #3 SVG SMIL repeatCount attribute</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),k=a("",8),v=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"Hexagon Ripple",src:"https://codepen.io/mileselam/embed/preview/QWVYXR?default-tab=result&editable=true&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/mileselam/pen/QWVYXR">
  Hexagon Ripple</a> by Miles Elam (<a href="https://codepen.io/mileselam">@mileselam</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),w=a("",5),T=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"#4 SVG SMIL repeatDur attribute",src:"https://codepen.io/JamesSawyer/embed/preview/MWXJJPo?default-tab=result&editable=true&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/MWXJJPo">
  #4 SVG SMIL repeatDur attribute</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),x=a("",8),I=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"#4 SVG SMIL repeatDur attribute",src:"https://codepen.io/JamesSawyer/embed/preview/mdKRWdy?default-tab=result&editable=true&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/mdKRWdy">
  #4 SVG SMIL repeatDur attribute</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),V=a("",9),B=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"#5 SVG SMIL 依据repeat同步多个动画",src:"https://codepen.io/JamesSawyer/embed/preview/eYKgvGP?default-tab=result&editable=true&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/eYKgvGP">
  #5 SVG SMIL 依据repeat同步多个动画</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),P=a("",6),J=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"SVG/SMIL calcMode comparison",src:"https://codepen.io/AmeliaBR/embed/preview/BaEjdP?default-tab=result&editable=true&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/AmeliaBR/pen/BaEjdP">
  SVG/SMIL calcMode comparison</a> by Amelia Bellamy-Royds (<a href="https://codepen.io/AmeliaBR">@AmeliaBR</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),N=a("",10),M=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"#6 SVG SMIL keyTimes & values",src:"https://codepen.io/JamesSawyer/embed/preview/MWXJmmN?default-tab=result&editable=true&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/MWXJmmN">
  #6 SVG SMIL keyTimes &amp; values</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),L=a("",10),G=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"#8 SVG SMIL additive",src:"https://codepen.io/JamesSawyer/embed/preview/qBKRmvX?default-tab=result&editable=true&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/qBKRmvX">
  #8 SVG SMIL additive</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),z=a("",3),R=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"#8 SVG SMIL additive",src:"https://codepen.io/JamesSawyer/embed/preview/vYrgZZv?default-tab=result&editable=true&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/vYrgZZv">
  #8 SVG SMIL additive</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),W=a("",6),j=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"#10 SVG SMIL end 结束动画1",src:"https://codepen.io/JamesSawyer/embed/preview/zYaZQOe?default-tab=result&editable=true&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/zYaZQOe">
  #10 SVG SMIL end 结束动画1</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),X=a("",3),K=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"#10 SVG SMIL end 结束动画1",src:"https://codepen.io/JamesSawyer/embed/preview/LYrWoGY?default-tab=result&editable=true&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/LYrWoGY">
  #10 SVG SMIL end 结束动画1</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),Y=a("",6),Z=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"#11 SVG SMIL end 结束动画2",src:"https://codepen.io/JamesSawyer/embed/preview/KKeWLvx?default-tab=result&editable=true&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/KKeWLvx">
  #11 SVG SMIL end 结束动画2</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),O=a("",5);function Q(U,$,H,ss,as,ns){const l=c("Badge");return t(),e("div",null,[F,s("nav",y,[s("ul",null,[i,C,s("li",null,[s("a",d,[n("6️⃣ from, by, to, begin, dur, fill 特性 "),o(l,{type:"tip",text:"⭐"})])]),u])]),A,s("h2",h,[n("6️⃣ "),q,n(" 特性 "),o(l,{type:"tip",text:"⭐"}),n(),m]),E,g,f,_,b,S,k,v,w,T,x,I,V,B,P,J,N,M,L,G,z,R,W,j,X,K,Y,Z,O])}const ps=p(D,[["render",Q]]);export{os as __pageData,ps as default};
