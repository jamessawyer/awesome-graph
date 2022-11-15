---
title: Morph Path动画
---

这是 [A Guide to SVG Animations (SMIL)](https://css-tricks.com/guide-svg-animations-smil/#aa-example-morphing-paths) 的部分内容3。

morphing path动画就是对描述形状的 `<path d="...">` 上的 `d` （即 `data`）或者是 `<polygon points="..." />` 上的 `points` 进行动画，从一个形状转变为另一个形状，形成很酷炫的效果。具体效果可以参考 [GreenSock MorphSVGPlugin](https://greensock.com/docs/v3/Plugins/MorphSVGPlugin)

- 为了实现SVG路径动画，需要指定 `attributeName="d"`



::: warning

SVG原生的Morphing path 动画存在如下要求：

1. `path A` -> `path B` 需要路径 `A` & `B` 以及中间路径的 `顶点` 数量一样，否则morphing path动画是不会生效的

:::



关于SVG Shape Morphing 原理可以看：

- [How SVG Shape Morphing Works - Chris Coyier@CSSTricks](https://css-tricks.com/svg-shape-morphing-works/)
- [MorphSVGPlugin - @GreenSock](https://greensock.com/morphSVG)



🌰一些示例：

```html {23}
<svg viewbox="0 0 100 100">
  <path fill="#1EB287">
    <animate 
             attributeName="d" 
             dur="1440ms" 
             repeatCount="indefinite"
             keyTimes="0;
                       .0625;
                       .208333333;
                       .3125;
                       .395833333;
                       .645833333;
                       .833333333;
                       1"
             calcMode="spline" 
             keySplines="0,0,1,1;
                         .42,0,.58,1;
                         .42,0,1,1;
                         0,0,.58,1;
                         .42,0,.58,1;
                         .42,0,.58,1;
                         .42,0,.58,1"
             values="M 0,0 
                     C 50,0 50,0 100,0
                     100,50 100,50 100,100
                     50,100 50,100 0,100
                     0,50 0,50 0,0
                     Z;

                     M 0,0 
                     C 50,0 50,0 100,0
                     100,50 100,50 100,100
                     50,100 50,100 0,100
                     0,50 0,50 0,0
                     Z;

                     M 50,0 
                     C 75,25 75,25 100,50 
                     75,75 75,75 50,100
                     25,75 25,75 0,50
                     25,25 25,25 50,0
                     Z;

                     M 25,50 
                     C 37.5,25 37.5,25 50,0 
                     75,50 75,50 100,100
                     50,100 50,100 0,100
                     12.5,75 12.5,75 25,50
                     Z;

                     M 25,50 
                     C 37.5,25 37.5,25 50,0 
                     75,50 75,50 100,100
                     50,100 50,100 0,100
                     12.5,75 12.5,75 25,50
                     Z;

                     M 50,0
                     C 77.6,0 100,22.4 100,50 
                     100,77.6 77.6,100 50,100
                     22.4,100, 0,77.6, 0,50
                     0,22.4, 22.4,0, 50,0
                     Z;
                     
                     M 50,0
                     C 77.6,0 100,22.4 100,50 
                     100,77.6 77.6,100 50,100
                     22.4,100, 0,77.6, 0,50
                     0,22.4, 22.4,0, 50,0
                     Z;
                     
                     M 100,0 
                     C 100,50 100,50 100,100
                     50,100 50,100 0,100
                     0,50 0,50 0,0
                     50,0 50,0 100,0
                     Z;"/>
    <animate 
             attributeName="fill"
             dur="1440ms" 
             repeatCount="indefinite"
             keyTimes="0;
                       .0625;
                       .208333333;
                       .3125;
                       .395833333;
                       .645833333;
                       .833333333;
                       1"
             calcMode="spline" 
             keySplines="0,0,1,1;
                         .42,0,.58,1;
                         .42,0,1,1;
                         0,0,.58,1;
                         .42,0,.58,1;
                         .42,0,.58,1;
                         .42,0,.58,1"
             values="#1eb287;
                     #1eb287;
                     #1ca69e;
                     #188fc2;
                     #188fc2;
                     #bb625e;
                     #ca5f52;
                     #1eb287;"/>
  </path>
</svg>
```

可以看出上面 `values` 中的每个值都是path的 `d` 路径，并且每次变换 `d` 的顶点数量是一致的。

- [变转变形状，变改变颜色效果 - @codepen](https://codepen.io/noahblon/pen/wvxmgv)





📚 Morphing Path相关文章：

1. [Beginner’s Guide to SVG Morph - @medium](https://medium.com/@andrea_codes/exploring-svg-morph-29bdb4016756)
2. [Framer Motion keyframes morphing an SVG Path](https://framerbook.com/animation/example-animations/22-keyframes-morphing-an-svg-path/)



🤩 Morphing Path的一些资源：

1. [GSAP MorphSVG Showcase collection - @codepen](https://codepen.io/collection/naMaNQ/?cursor=eyJjb2xsZWN0aW9uX2lkIjoibmFNYU5RIiwiY29sbGVjdGlvbl90b2tlbiI6bnVsbCwibGltaXQiOjQsIm1heF9pdGVtcyI6NDEsIm9mZnNldCI6NDAsInBhZ2UiOjExLCJzb3J0X2J5IjoicG9zaXRpb24iLCJzb3J0X29yZGVyIjoiQXNjIn0=) 使用GSAP MorphSVG 插件做的一些动画效果（备注：该插件是付费的）
2. [数字Morphing Path效果 - @codepen](https://codepen.io/felixhornoiu/pen/JjmVZw)
3. [Morphing Path + clipping Mask 组合动画 - @codepen](https://codepen.io/hbuchel/pen/YzYMgd)





🔧 一些Morphing Path 工具库：

1. [svg-path-morph - @github](https://github.com/Minibrams/svg-path-morph) 
2. [KUTE.js SVG Morph](https://thednp.github.io/kute.js/svgMorph.html)
3. [GSAP MorphSVGPlugin](https://greensock.com/docs/v3/Plugins/MorphSVGPlugin) 这个很强大，但是是付费的，不用考虑顶点数量是否相同😎
4. [Framer Motion](https://www.framer.com/docs/) React用户可以使用 `<motion.path>` 可以进行Morphing Path



直接用SVG原生的比较受限，简易使用一些工具库进行Morphing Path动画



2022年11月15日14:33:54
