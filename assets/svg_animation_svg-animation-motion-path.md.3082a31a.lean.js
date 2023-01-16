import{_ as o,c as l,o as p,a,b as s,d as n}from"./app.23517c4e.js";const R=JSON.parse('{"title":"沿着Path进行动画","description":"","frontmatter":{"title":"沿着Path进行动画"},"headers":[{"level":2,"title":"使用 path 特性指定运动轨迹","slug":"使用-path-特性指定运动轨迹","link":"#使用-path-特性指定运动轨迹","children":[]},{"level":2,"title":"使用mpath 元素引用路径","slug":"使用mpath-元素引用路径","link":"#使用mpath-元素引用路径","children":[]},{"level":2,"title":"animtionMotion 特性优先级","slug":"animtionmotion-特性优先级","link":"#animtionmotion-特性优先级","children":[]},{"level":2,"title":"⭐ 元素沿着路径的旋转方向 - rotate","slug":"⭐-元素沿着路径的旋转方向-rotate","link":"#⭐-元素沿着路径的旋转方向-rotate","children":[]},{"level":2,"title":"使用keyPoints控制路径动画的动画距离","slug":"使用keypoints控制路径动画的动画距离","link":"#使用keypoints控制路径动画的动画距离","children":[]},{"level":2,"title":"⭐ 文本路径动画 - startOffset","slug":"⭐-文本路径动画-startoffset","link":"#⭐-文本路径动画-startoffset","children":[]}],"relativePath":"svg/animation/svg-animation-motion-path.md","lastUpdated":1673837579000}'),e={name:"svg/animation/svg-animation-motion-path.md"},t=a("",7),c=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"Untitled",src:"https://codepen.io/JamesSawyer/embed/preview/qBKXEwM?default-tab=result&editable=true&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/qBKXEwM">
  Untitled</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),r=a("",9),D=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"#13 animateMotion + path路径动画",src:"https://codepen.io/JamesSawyer/embed/preview/mdKMJVb?default-tab=result&editable=true&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/mdKMJVb">
  #13 animateMotion + path路径动画</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),y=a("",3),F=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"#14 animateMotion + mpath元素路径动画",src:"https://codepen.io/JamesSawyer/embed/preview/GRGvJjg?default-tab=result&editable=true&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/GRGvJjg">
  #14 animateMotion + mpath元素路径动画</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),i=s("p",null,[n("🌰小圆围绕圆圈路径运动的示例："),s("a",{href:"https://codepen.io/JamesSawyer/pen/WNyEvRp",target:"_blank",rel:"noreferrer"},"小球绕圆形路径运动")],-1),C=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"#15 animateMotion + mpath元素修复版本",src:"https://codepen.io/JamesSawyer/embed/preview/WNyEvRp?default-tab=result&editable=true&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/WNyEvRp">
  #15 animateMotion + mpath元素修复版本</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),d=a("",7),h=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"#16 animateMotion + mpath元素绕圆圈路径运动",src:"https://codepen.io/JamesSawyer/embed/preview/NWzvqvp?default-tab=result&editable=true&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/NWzvqvp">
  #16 animateMotion + mpath元素绕圆圈路径运动</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),A=a("",5),u=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"#17 animateMotion + car路径诡异动画",src:"https://codepen.io/JamesSawyer/embed/preview/vYrJOpE?default-tab=result&editable=true&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/vYrJOpE">
  #17 animateMotion + car路径诡异动画</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),m=s("p",null,[n("🌰修复2："),s("code",null,'roate="auto-reverse"'),n(" 小车沿着路径自动转向，沿着"),s("code",null,"外圈逆时针"),n("运动，但车头是反的 - "),s("a",{href:"https://codepen.io/JamesSawyer/pen/NWzvqMg",target:"_blank",rel:"noreferrer"},"rotate-auto-reverse")],-1),g=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"#17-1 animateMotion + car 修复rotate-auto",src:"https://codepen.io/JamesSawyer/embed/preview/NWzvqMg?default-tab=result&editable=true&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/NWzvqMg">
  #17-1 animateMotion + car 修复rotate-auto</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),E=a("",2),q=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"#17-2 animateMotion + car 修复rotate-auto-reverse",src:"https://codepen.io/JamesSawyer/embed/preview/oNyeXMv?default-tab=result&editable=true&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/oNyeXMv">
  #17-2 animateMotion + car 修复rotate-auto-reverse</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),f=a("",8),_=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"Motion along a closed path, arbitrary start point",src:"https://codepen.io/AmeliaBR/embed/preview/VwNvpw?default-tab=result&editable=true&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/AmeliaBR/pen/VwNvpw">
  Motion along a closed path, arbitrary start point</a> by Amelia Bellamy-Royds (<a href="https://codepen.io/AmeliaBR">@AmeliaBR</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),b=a("",5),w=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"#18 textPath将文字沿着路径摆放",src:"https://codepen.io/JamesSawyer/embed/preview/GRGvpmM?default-tab=result&editable=true&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/GRGvpmM">
  #18 textPath将文字沿着路径摆放</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),v=a("",2),k=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"#18 textPath将文字沿着路径摆放",src:"https://codepen.io/JamesSawyer/embed/preview/OJEjyzv?default-tab=result&editable=true&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/OJEjyzv">
  #18 textPath将文字沿着路径摆放</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),S=a("",6),P=[t,c,r,D,y,F,i,C,d,h,A,u,m,g,E,q,f,_,b,w,v,k,S];function T(M,J,x,B,V,N){return p(),l("div",null,P)}const I=o(e,[["render",T]]);export{R as __pageData,I as default};
