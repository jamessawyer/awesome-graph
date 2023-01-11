---
title: 动画教程
---

除了SMIL动画，通过SVG其他属性，也能制作很精美的动画效果:

1. [Animated line drawing in SVG - jakearchibald](https://jakearchibald.com/2013/animated-line-drawing-svg/)

   - 通过 `<path stroke-dasharray="" stroke-dashoffset="">` 的2个属性制作路径动画
   - 可通过 `path.getTotalLength()` 方法获取路径的总长度

2. [How SVG Line Animation Works - @csstricks](https://css-tricks.com/svg-line-animation-works/) 

   - 详细介绍 `stroke-dasharray` + `stroke-dashoffset ` + `CSS animations` 制作动画的原理

3. [🔥SVG基础及其动画应用浅析 - 网易云@掘金](https://juejin.cn/post/6976876179496124430)

   - 先介绍svg基础
   - 列举出SVG动画的几种方式：
     - SMIL动画 + 例子
     - SMIL + 路径动画
     - 描边动画 -> `stroke-dasharray` + `stroke-dashoffset` 属性的使用
     - 轨迹动画 -> SMIL中 `<animationMotion>` 天然支持轨迹动画

4. [🚀Animate Anything Along an SVG Path - @tympanus](https://tympanus.net/codrops/2022/01/19/animate-anything-along-an-svg-path/) 主要是SVG结合GSAP制作动画

   - gsap + path的 `getPointAtLength()` 制作酷炫动画效果

     - [Random dots along path - @codepen](https://codepen.io/Mamboleoo/pen/ZEXMjmm)

       <iframe height="300" style="width: 100%;" scrolling="no" title="Random dots along path - CodePen Challenge" src="https://codepen.io/Mamboleoo/embed/preview/ZEXMjmm?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
         See the Pen <a href="https://codepen.io/Mamboleoo/pen/ZEXMjmm">
         Random dots along path - CodePen Challenge</a> by Louis Hoebregts (<a href="https://codepen.io/Mamboleoo">@Mamboleoo</a>)
         on <a href="https://codepen.io">CodePen</a>.
       </iframe>

   - gsap + `getTotalLength()` 制作沿路径运动动画效果

     - [Animate single element along path - @codepen](https://codepen.io/Mamboleoo/pen/JjrxJXJ)

       <iframe height="300" style="width: 100%;" scrolling="no" title="Animate single element along path" src="https://codepen.io/Mamboleoo/embed/JjrxJXJ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
         See the Pen <a href="https://codepen.io/Mamboleoo/pen/JjrxJXJ">
         Animate single element along path</a> by Louis Hoebregts (<a href="https://codepen.io/Mamboleoo">@Mamboleoo</a>)
         on <a href="https://codepen.io">CodePen</a>.
       </iframe>

   - SVG + THREEJS 制作3D动画效果

     
2023年01月11日18:03:01
