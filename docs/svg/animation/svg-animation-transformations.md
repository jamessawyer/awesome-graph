---
title: animateTransform元素
---
这是 [A Guide to SVG Animations (SMIL)](https://css-tricks.com/guide-svg-animations-smil/#aa-animating-transformations-the-animatetransform-animatetransform-element) 的部分内容5，也是最后一部分。

## animateTransform 动画元素

📚 可以使用 `<animateTransform>` 元素对 `translate, scale, rotate, skewX, skewY` 属性进行动画：

- 它使用 `type` 定义需要transform的属性，eg `type="translate"`

而 `from & to` 的写法根据 `type` 的不同而不同：

- `type="translate"` - 写法为 `<tx>` | `<tx> <ty>` 如果只写一个值，则表示只有x轴移动
- `type="scale"` - 写法为 `<sx> [,<sy>]` | `<sx> <sy>` 如果只写一个值，则表示x,y同时缩放
- `type="rotate"` - 写法为 `<rotate-angle> [<cx> <cy>]` 或者 `<rotate-angle> <cx> <cy>` 如果只写一个值，则表示旋转的中心为viewport坐标系的原点
- `type="skewX" | type="skewY"` - 写法为 `<skew-angle>`



🌰 假设我们想矩形沿着自己的中心旋转 `360°` ：[animateTransform动画元素 - @codepen](https://codepen.io/JamesSawyer/pen/OJEjyeB)

```html {4,6-8}
<rect id="rect" width="50" height="50" x="50" y="50" fill="deepPink">
  <animateTransform
    xlink:href="#rect"
    attributeName="transform"
    attributeType="XML"
    type="rotate"
    from="0 75 75"
    to="360 75 75"
    dur="2s"
    begin="0s"
    repeatCount="indefinite"
    fill="freeze"
  />
</rect>
```

其中 `from="360 75 75"` 表示以 `(75,75)` 为中心进行旋转（这里即矩形的中心）

<iframe height="300" style="width: 100%;" scrolling="no" title="#18-1 textPath startOffset路径动画" src="https://codepen.io/JamesSawyer/embed/preview/OJEjyeB?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/OJEjyeB">
  #18-1 textPath startOffset路径动画</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

::: tip

对于Transform SVGs，还是推荐直接使用CSS，这样更加的简单。

对于SVG 坐标系的转换，可以参考： [Understanding SVG Coordinate Systems and Transformaions Part2 - transform Attribute](http://sarasoueidan.com/blog/svg-transformations/)

:::



## set 元素

`<set>` 元素提供了对特性设置值的效果，它不提供动画效果😁。

- 由于用于在特定时间将元素设置为特定值，因此它不接受前面提到的所有动画元素的属性。例如，它没有from或by属性，因为更改的值不会随着时间的推移而逐步更改；
- 对于`set`，你可以指定你的目标元素、属性名称和类型、to值，动画时间可以通过:begin, dur, end, min, max, restart, repeatCount, repeatDur和fill来控制；

🌰下面的示例在单击旋转矩形时将其颜色设置为蓝色。颜色在3秒内保持蓝色，然后又变回原来的颜色。每次单击矩形时，都会触发设置的动画，颜色会改变三秒钟



[set设置动画属性](https://codepen.io/JamesSawyer/pen/OJEjMPa)

<iframe height="300" style="width: 100%;" scrolling="no" title="#19 animateTransform动画元素" src="https://codepen.io/JamesSawyer/embed/preview/OJEjMPa?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/OJEjMPa">
  #19 animateTransform动画元素</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



2022年11月15日17:15:37

