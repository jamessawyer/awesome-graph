---
title: SVG资源和教程
---



## 基础知识

1. [When to Use SVG vs. When to Use Canvas - Chris Coyier@csstricks](https://css-tricks.com/when-to-use-svg-vs-when-to-use-canvas/)

   - 详细对比SVG vs Canvas的相同点和不同点

   - 通过 `矢量，DOM访问，CSS动画，性能` 等等指标进行对比

     - [SVG vs Canvas - @codepen](https://codepen.io/Rumyra/pen/qBBWryJ)

       <iframe height="300" style="width: 100%;" scrolling="no" title="SVG vs Canvas" src="https://codepen.io/Rumyra/embed/qBBWryJ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
         See the Pen <a href="https://codepen.io/Rumyra/pen/qBBWryJ">
         SVG vs Canvas</a> by Rumyra (<a href="https://codepen.io/Rumyra">@Rumyra</a>)
         on <a href="https://codepen.io">CodePen</a>.
       </iframe>

   - 分析SVG & Canvas的优缺点，然后针对不同的场景选择不同的技术方案

2. [The Winding Order of the Fill Rule](https://oreillymedia.github.io/Using_SVG/extras/ch06-fill-rule.html#:~:text=They%20are%20defined%20as%20the,that%20section%20%E2%80%9Cmore%E2%80%9D%20inside.)

   - 来自 `《Using SVG with CSS3 and HTML5》` 一书中的基础教程
   - paths,ploygons,polylines可能包含交叉线或者重叠部分，在进行填充的时候，需要判断哪些区域是在填充内（`inside`），哪些是在区域外的（`outside`）
   - 可通过 `fill-rule` 样式属性去定义在内还是外，存在2种 `fill-rule` 样式属性
     - `evenodd` - 每次交叉路径边缘时都会发生变化；从外部引入一点，到达指定区域，最后根据交叉方向（顺时针为1，逆时针为-1）总和是偶数还是奇数来判断，如果是 `偶数` 则不填充（0是偶数），如果是奇数，则填充
     - `nonzero`（默认值） - 取决于路径的方向，以`相同`方向循环的路径使该部分在内部。从外部引入一点，到达指定区域，最后根据交叉方向（顺时针为1，逆时针为-1）总和是否为0来判断，如果为0，则表示该区域在路径外，不进行填充；反之则进行填充🚀

3. [A Comprehensive Guide to Clipping and Masking in SVG - @tutsplus](https://webdesign.tutsplus.com/tutorials/a-comprehensive-guide-to-clipping-and-masking-in-svg--cms-30380) 

   - clipping & masking是SVG用于完全或部分隐藏SVG对象的一种工具，可用于制作复杂属性或者动画
     - `clipping` 即剪辑区域，区域之外的都不可见
     - `masking` 即蒙版，蒙版透明区域可见（使用 `白色` 填充，表示透明区域），蒙版不透明区域不可见，它和 `clipping` 很类似
   - SVG中的 `<clipPath>` 元素存在很多特性，比较重要的是 `clipPathUnits` & `clip-rule`
     - `clipPathUnits` 存在2个值：`userSpaceOnUse`（默认值） & `objectBoundingBox`
       - `userSpaceOnUse` 使用SVG用户坐标系统，适用于尺寸确定的情形
       - `objectBoundingBox` 使用包围盒坐标，左上角为`(0,0)`，右下角为`(1,1)`，适用于SVG图形尺寸不确认的场景
     - `clip-rule` 的值和上面的 `fill-rule` 的值一样，都是 `nonezero` & `evenodd`，用于判断某个点或区域是否在路径内
   - `<mask>` 不仅可以用在SVG中，还可以被CSS引用，使用 `mask-image: url(#the-mask-id)` 的形式
     - `maskUnits` 同 `clipPathUnits`





2023年01月11日18:02:33

