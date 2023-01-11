---
title: SVG Tricks
---

介绍一些写好SVG的小技巧：

1. [How to Scale SVG - Amelia Bellay@codepen.io](https://css-tricks.com/scale-svg)

   - 讲述如何控制SVG的缩放

   - SVG的几种用法：放在 `<img>` 元素中；放到 `<object> | <iframe>` 元素中；内联直接使用 `<svg>`

   - `viewBox` 特性的重要性

     - 定义图片的宽高比（`aspect ratio`）
     - 它定义了如何缩放SVG内使用的所有长度和坐标，以适应可用的总空间
     - 它定义了SVG**用户坐标系统**的原点

   - `preserveAspectRatio` 特性：

     - 它只有定义了 `viewBox` 特性，这个特性才能生效
     - 它描述当viewBox的宽高比和svg viewport的宽高比不一致时，图片应该如何进行缩放😎
     - 它类似于CSS中的 `background-size` + `background-postion`
     - `preserveAspectRatio="none"` 允许SVG像JPG,PNG这样栅格图片一样去缩放拉伸

   - 如果只给svg提供 `viewBox` & `width & height` 特性，而不提供 `preserveAspectRatio` 属性，它默认是 `xMidYMid meet`，即图片会居中，并且不会扭曲，然后根据 `width & height` 进行缩放📄

   - 🌰 将定义了 `viewBox` 的svg放到 `<img src="xxx.svg">` 中，图片会根据viewBox中定义的宽高比进行`自动缩放`

   - 🌰 将svg用作背景图时，为了图片根据容器宽度变化，可以使用 `padding-bottom` 的方式保持宽高比，以使高度根据高度来适配🎉

     - [padding hack的用法保持宽高比 - @alistapart](https://alistapart.com/article/creating-intrinsic-ratios-for-video/)

     - [svg as background - @codepen](https://codepen.io/AmeliaBR/pen/yyVQeB)

       <iframe height="300" style="width: 100%;" scrolling="no" title="Scaling a `&lt;div&gt;` to Match an Image Aspect Ratio" src="https://codepen.io/AmeliaBR/embed/preview/yyVQeB?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
         See the Pen <a href="https://codepen.io/AmeliaBR/pen/yyVQeB">
         Scaling a `&lt;div&gt;` to Match an Image Aspect Ratio</a> by Amelia Bellamy-Royds (<a href="https://codepen.io/AmeliaBR">@AmeliaBR</a>)
         on <a href="https://codepen.io">CodePen</a>.
       </iframe>

   - 🌰 内联的方式使用 `<svg viewBox="">`，只需要设置 `width`或者`height` 中的一个特性，没有设置的默认为 `auto`，这样，它便会自适应，如果 `width` 和 `height` 都没有设置，这默认为填充整个容器宽度

     - [Auto-Scaling Inline SVG - @codepen](https://codepen.io/AmeliaBR/pen/ZYBmOG?editors=1010)

       <iframe height="300" style="width: 100%;" scrolling="no" title="Auto-Scaling Inline SVG" src="https://codepen.io/AmeliaBR/embed/preview/ZYBmOG?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
         See the Pen <a href="https://codepen.io/AmeliaBR/pen/ZYBmOG">
         Auto-Scaling Inline SVG</a> by Amelia Bellamy-Royds (<a href="https://codepen.io/AmeliaBR">@AmeliaBR</a>)
         on <a href="https://codepen.io">CodePen</a>.
       </iframe>

   - 🌰 如果想要像JPG,PNG这样栅格图片一样去缩放拉伸，可以同时设置 `viewBox` + `preserveAspectRatio="none"`

     - [Flex-Scaling SVG Using Percentages - @codepen](https://codepen.io/AmeliaBR/pen/pvNQeo)

       <iframe height="300" style="width: 100%;" scrolling="no" title="Flex-Scaling SVG Using Percentages" src="https://codepen.io/AmeliaBR/embed/preview/pvNQeo?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
         See the Pen <a href="https://codepen.io/AmeliaBR/pen/pvNQeo">
         Flex-Scaling SVG Using Percentages</a> by Amelia Bellamy-Royds (<a href="https://codepen.io/AmeliaBR">@AmeliaBR</a>)
         on <a href="https://codepen.io">CodePen</a>.
       </iframe>

   - 🌰🚀 使用嵌套 `<svg>` 的方式，同时包含多个 `<svg>`，然后定义不同的 `viewBox` & `preserveAspectRatio` 得到不同的效果，使得有的svg拉伸扭曲，有的保持其宽高比

     - [Flex-Scaling SVG Using Nested SVGs - @codepen](https://codepen.io/AmeliaBR/pen/zxoMwo)

       <iframe height="300" style="width: 100%;" scrolling="no" title="Flex-Scaling SVG Using Nested SVGs" src="https://codepen.io/AmeliaBR/embed/preview/zxoMwo?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
         See the Pen <a href="https://codepen.io/AmeliaBR/pen/zxoMwo">
         Flex-Scaling SVG Using Nested SVGs</a> by Amelia Bellamy-Royds (<a href="https://codepen.io/AmeliaBR">@AmeliaBR</a>)
         on <a href="https://codepen.io">CodePen</a>.
       </iframe>

     
 



2023年01月11日18:55:25
