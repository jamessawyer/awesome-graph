---
title: 沿着Path进行动画
---

## 使用 `path` 特性指定运动轨迹

📚 动画元素上的 `path` 特性用于指定运动轨迹，它的语法和 `d` 一样：

- 运动路径动画的效果是在被引用对象的当前转换矩阵上添加一个补充转换矩阵，该转换矩阵通过随时间计算的X和Y值沿当前用户坐标系的X和Y轴进行平移。
- 换句话说，指定的路径是相对于元素的当前位置计算的，通过使用路径数据将元素转换为路径位置。

🌰 比如某个圆沿着特定路径动画：

```html {6}
<animateMotion
  xlink:href="#circle"
  dur="1s"
  begin="begin"
  fill="freeze"
  path="M0,0c3.2-3.4,18.4-0.6,23.4-0.6c5.7,0.1,10.8,0.9,16.3,2.3c13.5,3.5,26.1,9.6,38.5,16.2c12.3,6.5,21.3,16.8,31.9,25.4c10.8,8.7,21,18.3,31.7,26.9c9.3,7.4,20.9,11.5,31.4,16.7c13.7,6.8,26.8,9.7,41.8,9c21.4-1,40.8-3.7,61.3-10.4c10.9-3.5,18.9-11.3,28.5-17.8c5.4-3.7,10.4-6.7,14.8-11.5c1.9-2.1,3.7-5.5,6.5-6.5"
/>
```

- [animateMotion + path attribute 路径动画 - @codepen](https://codepen.io/JamesSawyer/pen/qBKXEwM)

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/JamesSawyer/embed/preview/qBKXEwM?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/qBKXEwM">
  Untitled</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

::: warning

值得注意的是，上面的 `path` 的 `M0,0` 中的起始点 `(0,0)` 表示的是 `circle` 的位置，而不是SVG viewport坐标系左上角的位置。

:::



## 使用mpath 元素引用路径

除了上面 `<animateMotion path="xxx" />` 方式外，还可以使用 `<animateMotion><mpath xlink:href="#somet_path"/></animateMotion>` 引用外部路径：

```html
<animateMotion xlink:href="#circle" dur="1s" begin="click" fill="freeze">
 <mpath xlink:href="#motionPath"></mpath>
</animateMotion>
```

这种方式的特点：

- 运动路径可以定义在文档的任何位置，它可以定义在元素内，但是不在画布上进行渲染
- 这种情况和上面用法的不同之处在于，运动的元素需要设置为 `(0,0)` 位置，否则会出现跳动现象，因为元素已经被转换过了



🌰 没有将圆的 `cx` & `cy` 设置为 `(0,0)`，动画开始时，圆突然往下跳动：`注意这里的path并不是从 M0,0 开始的`

```html
<svg width="500" height="350" viewBox="0 0 500 350">
  <path id="motionPath" fill="none" stroke="#000000" stroke-miterlimit="10" d="M91.4,104.2c3.2-3.4,18.4-0.6,23.4-0.6c5.7,0.1,10.8,0.9,16.3,2.3
  c13.5,3.5,26.1,9.6,38.5,16.2c12.3,6.5,21.3,16.8,31.9,25.4c10.8,8.7,21,18.3,31.7,26.9c9.3,7.4,20.9,11.5,31.4,16.7
  c13.7,6.8,26.8,9.7,41.8,9c21.4-1,40.8-3.7,61.3-10.4c10.9-3.5,18.9-11.3,28.5-17.8c5.4-3.7,10.4-6.7,14.8-11.5
  c1.9-2.1,3.7-5.5,6.5-6.5"/>
  <circle id="circle" r="20" cx="100" cy="100" fill="tomato" />
   
  <animateMotion 
           xlink:href="#circle"
           dur="1s"
           begin="click"
           fill="freeze">
    <mpath xlink:href="#motionPath" />
  </animateMotion>
</svg>
<p>Click on the circle to animate it.</p>
```

[animateMotion + mpath元素 + 引用外部路径 - @codepen](https://codepen.io/JamesSawyer/pen/mdKMJVb) 异常版本

<iframe height="300" style="width: 100%;" scrolling="no" title="#13 animateMotion + path路径动画" src="https://codepen.io/JamesSawyer/embed/preview/mdKMJVb?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/mdKMJVb">
  #13 animateMotion + path路径动画</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

🧑‍🔧为了修复这个问题，将 `circle` 元素的 `cx` & `cy` 均设置为 `0`，即：

```html {12}
<svg width="500" height="350" viewBox="0 0 500 350">
  <path id="motionPath" fill="none" stroke="#000000" stroke-miterlimit="10" d="M91.4,104.2c3.2-3.4,18.4-0.6,23.4-0.6c5.7,0.1,10.8,0.9,16.3,2.3
  c13.5,3.5,26.1,9.6,38.5,16.2c12.3,6.5,21.3,16.8,31.9,25.4c10.8,8.7,21,18.3,31.7,26.9c9.3,7.4,20.9,11.5,31.4,16.7
  c13.7,6.8,26.8,9.7,41.8,9c21.4-1,40.8-3.7,61.3-10.4c10.9-3.5,18.9-11.3,28.5-17.8c5.4-3.7,10.4-6.7,14.8-11.5
  c1.9-2.1,3.7-5.5,6.5-6.5"/>
  <circle id="circle" r="20" cx="100" cy="100" fill="tomato" /> // [!code --]
  <circle id="circle" r="20" cx="0" cy="0" fill="tomato" /> // [!code ++]
   
  <animateMotion 
           xlink:href="#circle"
           dur="1s"
           begin="0s"
           fill="freeze">
    <mpath xlink:href="#motionPath" />
  </animateMotion>
</svg>
<p>Click on the circle to animate it.</p>
```

[fixed 版本](https://codepen.io/JamesSawyer/pen/GRGvJjg) 

<iframe height="300" style="width: 100%;" scrolling="no" title="#14 animateMotion + mpath元素路径动画" src="https://codepen.io/JamesSawyer/embed/preview/GRGvJjg?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/GRGvJjg">
  #14 animateMotion + mpath元素路径动画</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

🌰小圆围绕圆圈路径运动的示例：[小球绕圆形路径运动](https://codepen.io/JamesSawyer/pen/WNyEvRp)

<iframe height="300" style="width: 100%;" scrolling="no" title="#15 animateMotion + mpath元素修复版本" src="https://codepen.io/JamesSawyer/embed/preview/WNyEvRp?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/WNyEvRp">
  #15 animateMotion + mpath元素修复版本</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



## animtionMotion 特性优先级

`<animateMotion>` 可以定义多种动画方式，如果同时添加这些规则，势必存在某种覆盖另一种的情形：

- 关于运动路径的定义，`mpath`元素覆盖了`path`特性，`path`特性覆盖了`value`, `value`覆盖了`from, by & to`
- 关于确定与`keyTimes`属性对应的点，`keyPoints`属性覆盖 `path`，`path` 覆盖 `value`，`value` 覆盖`from、by & to`



## ⭐ 元素沿着路径的旋转方向 - `rotate`

上面的例子都是使用 `圆` 作为示例，它是对称的，但如果是一些不对称的物体沿着路径动画，就可能出现很奇怪的效果。比如下面这辆小车：

```html {9,23}
<svg width="500" height="350" viewBox="0 0 500 350">
  <path id="motionPath" fill="none" stroke="#000000" stroke-miterlimit="10" d="M202.4,58.3c-13.8,0.1-33.3,0.4-44.8,9.2
	c-14,10.7-26.2,29.2-31.9,45.6c-7.8,22.2-13.5,48-3.5,70.2c12.8,28.2,47.1,43.6,68.8,63.6c19.6,18.1,43.4,26.1,69.5,29.4
	c21.7,2.7,43.6,3.3,65.4,4.7c19.4,1.3,33.9-7.7,51.2-15.3c24.4-10.7,38.2-44,40.9-68.9c1.8-16.7,3.4-34.9-10.3-46.5
	c-9.5-8-22.6-8.1-33.2-14.1c-13.7-7.7-27.4-17.2-39.7-26.8c-5.4-4.2-10.4-8.8-15.8-12.9c-4.5-3.5-8.1-8.3-13.2-11
	c-6.2-3.3-14.3-5.4-20.9-8.2c-5-2.1-9.5-5.2-14.3-7.6c-6.5-3.3-12.1-7.4-19.3-8.9c-6-1.2-12.4-1.3-18.6-1.5
	C222.5,59,212.5,57.8,202.4,58.3"/>
  
  <g id="car" transform="translate(-234.4, -182.8)">
    <path d="M234.4,182.8c-3.5,0-6.4,2.9-6.4,6.4c0,3.5,2.9,6.4,6.4,6.4c3.5,0,6.4-2.9,6.4-6.4C240.8,185.6,238,182.8,234.4,182.8z"/>
    <circle cx="234.4" cy="189.2" r="2.8"/>
    <path d="M263,182.8c-3.5,0-6.4,2.9-6.4,6.4c0,3.5,2.9,6.4,6.4,6.4c3.5,0,6.4-2.9,6.4-6.4C269.4,185.6,266.6,182.8,263,182.8z"/>
    <circle cx="263" cy="189.2" r="2.8"/>
    <path d="M275,171.4c-2.8-0.7-5.2-3-6.3-5.1l-3.9-7.4c-1.1-2.1-3.9-3.8-6.3-3.8h-22.6c-2.4,0-5,1.8-5.7,4.1l-2.4,7
     c-0.2,0.9-1.8,5.5-5,5.5c-2.4,0-5,3.1-5,5.5v8.2c0,2.4,1.9,4.3,4.3,4.3h4.5c0-0.2,0-0.3,0-0.5c0-4.3,3.5-7.8,7.8-7.8
     c4.3,0,7.8,3.5,7.8,7.8c0,0.2,0,0.3,0,0.5h13.1c0-0.2,0-0.3,0-0.5c0-4.3,3.5-7.8,7.8-7.8s7.8,3.5,7.8,7.8c0,0.2,0,0.3,0,0.5h8.1
     c2.4,0,4.3-1.9,4.3-4.3v-6.5C283.2,172,277.3,172,275,171.4z"/>
    <path d="M241.8,170.3h-12.5c0.7-1.1,1.1-2.2,1.2-2.6l2-5.9c0.6-1.9,2.8-3.5,4.8-3.5h4.5V170.3z"/>
    <path d="M246.1,170.3v-12h10.4c2,0,4.4,1.5,5.3,3.3l3.3,6.3c0.4,0.8,1.1,1.7,2,2.4H246.1z"/>
  </g>
   
  <animateMotion 
           xlink:href="#car"
           dur="3s"
           begin="0s"
           fill="freeze"
           repeatCount="indefinite">
    <mpath xlink:href="#motionPath" />
  </animateMotion>
</svg>
```

[car沿着路径不改变朝向诡异动画效果 - @codeen](https://codepen.io/JamesSawyer/pen/NWzvqvp)

<iframe height="300" style="width: 100%;" scrolling="no" title="#16 animateMotion + mpath元素绕圆圈路径运动" src="https://codepen.io/JamesSawyer/embed/preview/NWzvqvp?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/NWzvqvp">
  #16 animateMotion + mpath元素绕圆圈路径运动</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

**因为小车的方向是固定的，没有随着路径的变化而变化，为了解决这个问题，需要使用 `rotate` 特性**。

::: tip 📚

`rotate` 特性有3个可选值：

1. `auto` - 指示物体随时间按运动路径的方向(即方向切向量)的角度旋转。
2. `auto-reverse` - 表示物体随时间旋转的角度是运动路径的方向(即方向切向量)加上180度。
3. `某个数值` - 指示目标元素具有应用于它的恒定旋转转换，其中旋转角度为指定的度数。

:::

下面使用 `rotate` 的值进行修复

🌰修复1：`roate="auto"` 小车沿着路径自动转向，沿着`内圈逆时针`运动，但车头是反的 - [rotate-auto](https://codepen.io/JamesSawyer/pen/vYrJOpE)

```html {6}
<animateMotion 
  xlink:href="#car"
  dur="3s"
  begin="0s"
  fill="freeze"
  rotate="auto"    
  repeatCount="indefinite">
    <mpath xlink:href="#motionPath" />
</animateMotion>
```



<iframe height="300" style="width: 100%;" scrolling="no" title="#17 animateMotion + car路径诡异动画" src="https://codepen.io/JamesSawyer/embed/preview/vYrJOpE?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/vYrJOpE">
  #17 animateMotion + car路径诡异动画</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

🌰修复2：`roate="auto-reverse"` 小车沿着路径自动转向，沿着`外圈逆时针`运动，但车头是反的 - [rotate-auto-reverse](https://codepen.io/JamesSawyer/pen/NWzvqMg)

<iframe height="300" style="width: 100%;" scrolling="no" title="#17-1 animateMotion + car 修复rotate-auto" src="https://codepen.io/JamesSawyer/embed/preview/NWzvqMg?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/NWzvqMg">
  #17-1 animateMotion + car 修复rotate-auto</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

🌰🎉修复3：修复车头反向的问题，上面都是在开倒车，为了修复这个问题，需要将 `<g id="car" transform="...">` 进行反转，这里有一个小技巧，就是使用 `scale(-1, 1)` 对某个轴进行镜像：

```html
<g id="car" transform="translate(-234.4, -182.8)"> // [!code --]
<g id="car" transform="scale(-1, 1) translate(-234.4, -182.8)"> // [!code ++]
  // ...car形状
</g>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="#17-2 animateMotion + car 修复rotate-auto-reverse" src="https://codepen.io/JamesSawyer/embed/preview/oNyeXMv?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/oNyeXMv">
  #17-2 animateMotion + car 修复rotate-auto-reverse</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



## 使用keyPoints控制路径动画的动画距离

📚 `keyPoints` 特性提供了为每个`keyTimes`指定值指定沿运动路径的进度的能力。如果指定了，`keyPoints`将导致`keyTimes`应用于`keyPoints`中的值，而不是应用于`values`特性数组中指定的点或`path`特性上的点：

- `keyPoints` - 表示在相应的`keyTimes`值指定的时刻，物体在运动路径上应该移动多远。 `0-1` 之间的值列表，用 `;` 分割，eg `0.3;1;0;0.3`
- 列表中的每个进度值都对应于`keyTimes`特性列表中的值；
- 这也意味着 `keyPoints` 的数量一定要等于 `keyTimes` 定义的数量

向前运动的定义的方式：

```bash
keyPoints: 
	(startPosition)
	1
	0
	(startPosition)
	
keyTimes:
  0
  (1 - startPosition)
  (1 - startPosition)
  1
```

反向运动：

```bash
keyPoints: 
	(startPosition)
	0
	1
	(startPosition)
	
keyTimes:
  0
  (startPosition)
  (startPosition)
  1
```

[Motion along a closed Path, arbitrary start point - @codepen](https://codepen.io/AmeliaBR/pen/VwNvpw)

<iframe height="300" style="width: 100%;" scrolling="no" title="Motion along a closed path, arbitrary start point" src="https://codepen.io/AmeliaBR/embed/preview/VwNvpw?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/AmeliaBR/pen/VwNvpw">
  Motion along a closed path, arbitrary start point</a> by Amelia Bellamy-Royds (<a href="https://codepen.io/AmeliaBR">@AmeliaBR</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



## ⭐ 文本路径动画 - startOffset

可以使用 `<textPath>` 元素，将文字沿着指定的路径放置。

🌰

```html
<svg>
  <path id="myPath" d="..." />
  <text>
    <textPath xlink:href="#myPath">
      Text laid out along a Path
    </textPath>
  </text>
</svg>
```

[textPath引用路径，使文字沿指定路径摆放 - @codepen](https://codepen.io/JamesSawyer/pen/GRGvpmM)

<iframe height="300" style="width: 100%;" scrolling="no" title="#18 textPath将文字沿着路径摆放" src="https://codepen.io/JamesSawyer/embed/preview/GRGvpmM?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/GRGvpmM">
  #18 textPath将文字沿着路径摆放</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

为了创建文字沿着路径运动的动画，可以对 `startOffset` 特性进行动画：[textPath + startOffset文字路径动画 - @codepen](https://codepen.io/JamesSawyer/pen/OJEjyzv)

```html {7}
<svg>
  <path id="myPath" d="..." />
  <text>
    <textPath xlink:href="#myPath">
      Text laid out along a Path
      <animate
        attributeName="startOffset"
        from="0%"
        to="100%"
        begin="0s"
        dur="5s"
        repeatCount="indefinite"
        keyTimes="0;1"
        calcMode="spline"
        keySplines="0.1 0.2 .22 1"
      />
    </textPath>
  </text>
</svg>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="#18 textPath将文字沿着路径摆放" src="https://codepen.io/JamesSawyer/embed/preview/OJEjyzv?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/OJEjyzv">
  #18 textPath将文字沿着路径摆放</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



::: info

`keyTimes + calcMode + keySplines` 用于定义类似keyframes，并制定每段keyframes之间的缓动函数:

- 可参考 [keysplines动画](./svg-animation-attributes.html#_1%EF%B8%8F⃣1%EF%B8%8F⃣-calcmode-keysplines-自定义keyframes缓动函数)

:::



译者注：

关于路径动画，最简单的还是使用 [GSAP MotionPathPlugin](https://greensock.com/docs/v3/Plugins/MotionPathPlugin) 



扩展阅读：

1. [Animate Anything Along an SVG Path - @codrops](https://tympanus.net/codrops/2022/01/19/animate-anything-along-an-svg-path/)



2022年11月15日16:47:33

