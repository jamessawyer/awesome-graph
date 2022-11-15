---
title: SVG动画
---
接下来的5小节都是 [Guide SVG animations SMIL - Sara Soueidan@CSSTricks](https://css-tricks.com/guide-svg-animations-smil/) 上关于 `SVG SMIL` 动画文章的拆分，原文章实在是太长了，如果放一起会显得很恐怖。于是我按照大致主题对文章进行了拆分：

1. [1-概览](./svg-animation-overview) 整体介绍了SMIL动画元素以及SVG动画的优势
   - 动画元素 `<animate>` & `<set>` & `<animateMotion>` & `<animateTransform>`
2. [2-动画元素特性介绍](./svg-animation-attributes) 核心部分，介绍了大量动画所需的特性
   - `xlink:href` - 应用动画目标或者路径
   - `attributeName` - 要动画的属性名
   - `from, by, to, begin, dur, fill` - 核心属性
   - 如何对多个动画效果进行编排（类似GSAP timelines）
   - `repeatCount, repeatDur` - 关于重复动画，以及重复动画编排
   - `keyTimes & values` - 实现类似CSS中类似 `@keyframes` 效果
   - `calcMode + keySplines` - 定义 `@keyframes` 每个时间段之间的缓动函数
   - `additive, accumulate` - 对于重复动画，动画叠加效果
   - `end` - 指定动画结束条件
   - `多组 begin + end` - 定义间歇性动画效果
   - `min, max` - 定义动画执行的时长
3. [3-Morphing Path](./svg-animation-morphing-path) 对 `path | points` 形状 转换为另一个形状的动画效果
   - SMIL对于morphing效果存在一些现在，顶点数量必须保持一致
   - 额外补充了很多实现SVG Morphing Path效果的库以及资源（译者添加）
4. [4-沿路径动画](./svg-animation-motion-path) 很常见的一种动画形式，如何沿着指定路径进行动画
   - 使用 `animateMotion元素 + path特性` 或者 `animateMotion元素 + mpath元素引用外部路径` 进行路径动画；请注意使用它们是坐标系的差异
   - 使用 `rotate` 特性，保证物体始终沿着路径的正切方向进行动画
   - `keyPoints` 控制路径动画距离
   - `textPath` 使文本沿着路径摆放，`animate + attribute="startOffset"` 进行文本沿着路径进行动画
   - 推荐使用 [GSAP MotionPathPlugin](https://greensock.com/docs/v3/Plugins/MotionPathPlugin) 进行路径动画
5. [5-transform & set](./svg-animation-transformations)
   - `<animationTransform>` 元素，提供 `translate & scale & skew & rotate` 转换
   - `<set>` 元素，直接设置动画属性



扩展链接：

1. [SVG Animation Level 2 - w3.org](https://svgwg.org/specs/animations/)
2. [Sara Soueidan 关于 SVG Slides](http://slides.com/sarasoueidan/on-the-edge-of-svg)
3. [An introduction to SVG animation - @bigbite](https://bigbite.net/2013/11/27/introduction-svg-animation/)









2022年11月15日17:36:52

