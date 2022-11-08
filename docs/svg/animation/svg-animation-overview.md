---
title: SVG动画概览
---

这是 [A Guide to SVG Animations (SMIL)](https://css-tricks.com/guide-svg-animations-smil/#aa-overview) 的部分内容。

## 1️⃣ ⭐ SVG动画概览



SVG图形可以使用 **动画元素（`animation elements`）** 进行动画。动画元素一开始定义在 [SMIL](http://www.w3.org/TR/2001/REC-smil-animation-20010904/) 动画规范中，包含以下元素：

1. `<animate></animate>` - 允许你在一段时间内对标量特性（`attributes`）和属性（`properties`）进行动画
2. `<set></set>` - `animate` 的简写方式，对非数字类型的特性和属性添加动画值有用，比如 `visibility` 属性
3. `<animateMotion></animateMotion>` - 用于沿着运动路径（`motion path`）移动元素⚡，路径动画的关键
4. `<animateColor></animateColor>` - 它随着时间的推移修改特定特性或属性的颜色值，已废弃🚨，使用 `<animate>` 元素替代



除了SMIL规范中的动画元素外，SVG还提供了兼容SMIL规范的扩展；这些扩展包括扩展了元素功能的特性和其它动画元素😎：

1. `<animateTransform></animateTransform>` - 允许你对SVG transformation特性进行动画，比如 `transform` 特性
2. `path (attribute)` - 允许任何SVG `path` 数据（即 `d` 特性）放置到 `<animateMotion>` 元素的 `path` 特性上进行动画（SMIL只支持SVG路径数据语法的子集）；我们将之后再讲到 `<animateMotion>`
3. `<mpath></mpath>` - 放在 `<animateMotion>` 元素内部，引用要运动的路径；`<animateMotion><mpath xlink:href="#motionPath"></mpath></animateMotion>`
4. `keypoints (attribute)` - 它是 `<animateMotion>` 的一个特性（`<animateMotion keypoints="xxx">`）， 用于对动画路径运动速度提供精确的控制
5. `rotate (attribute)` -  它是 `<animateMotion>` 的一个特性（`<animateMotion rotate="xxx">`），用于控制目标对象是否自动旋转，以便其x轴始终指向与运动路径 `正切` 的相同或相反的方向，达到想要的动画效果；它是路径动画关键的一个属性⚡



SVG动画在本质上可以类似于CSS动画和transitions。创建keyframes，物体移动，颜色改变等等。但是，它们能做一些CSS无法做到的事情，后面会讲到这个😎。







## 2️⃣ 为什么使用SVG动画？

📚 SVG可以使用CSS添加样式，以及使用CSS动画：

- [Styling animating svgs with CSS - slides](http://slides.com/sarasoueidan/styling-animating-svgs-with-css--2#/)

基本上任何可用于普通HTML元素的transformation和transitions，都可以用于SVG元素上；但是，有些SVG属性不能通过CSS进行动画，只能使用SVG进行动画😏：

- 比如，SVG路径（`path`），使用一组`数据`（`d=""` 特性）定义路径形状。这些数据可以被SMIL修改和动画，但是不能使用CSS；
- 这是因为SVG元素被一组称之为SVG表现特性（`presentation attributes`） 的特性所描述；某些特性可以使用CSS进行设置，修改和添加动画效果，而有些特性是无法使用CSS进行修改或添加动画的😅



📚 因此，现在很多动效是无法简单使用CSS完成的。CSS和SVG动效的空隙可以使用JS或者派生自SMIL规范的声明式SVG动画进行填补：

- 如果你更喜欢JS的方式，推荐使用 [snap.svg](http://snapsvg.io/) 这个库，它被称为SVG版本的jQuery
- 如果你更喜欢声明式动画的方式，则可以使用本文介绍的动画元素

SMIL方式比JS动画的一个优势是：JS无法对使用 `img` | `background-image` 方式引入的SVG资源进行控制，而SMIL动画则都可以，这也可以认为是SMIL的一个比较大的优势。本文的目的就是让你开始使用SMIL😁。



## 3️⃣ 浏览器兼容性

几乎没啥兼容性问题，除了IE和opera Mimi

- [svg smil - CANIUSE](https://caniuse.com/svg-smil)



2022年11月08日17:16:26

