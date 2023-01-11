import{_ as n,c as a,o as l,a as s,b as p}from"./app.a496e31a.js";const g=JSON.parse('{"title":"Morph Path动画","description":"","frontmatter":{"title":"Morph Path动画"},"headers":[],"relativePath":"svg/animation/svg-animation-morphing-path.md","lastUpdated":1673434777000}'),o={name:"svg/animation/svg-animation-morphing-path.md"},e=s(`<p>这是 <a href="https://css-tricks.com/guide-svg-animations-smil/#aa-example-morphing-paths" target="_blank" rel="noreferrer">A Guide to SVG Animations (SMIL)</a> 的部分内容3。</p><p>morphing path动画就是对描述形状的 <code>&lt;path d=&quot;...&quot;&gt;</code> 上的 <code>d</code> （即 <code>data</code>）或者是 <code>&lt;polygon points=&quot;...&quot; /&gt;</code> 上的 <code>points</code> 进行动画，从一个形状转变为另一个形状，形成很酷炫的效果。具体效果可以参考 <a href="https://greensock.com/docs/v3/Plugins/MorphSVGPlugin" target="_blank" rel="noreferrer">GreenSock MorphSVGPlugin</a></p><ul><li>为了实现SVG路径动画，需要指定 <code>attributeName=&quot;d&quot;</code></li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>SVG原生的Morphing path 动画存在如下要求：</p><ol><li><code>path A</code> -&gt; <code>path B</code> 需要路径 <code>A</code> &amp; <code>B</code> 以及中间路径的 <code>顶点</code> 数量一样，否则morphing path动画是不会生效的</li></ol></div><p>关于SVG Shape Morphing 原理可以看：</p><ul><li><a href="https://css-tricks.com/svg-shape-morphing-works/" target="_blank" rel="noreferrer">How SVG Shape Morphing Works - Chris Coyier@CSSTricks</a></li><li><a href="https://greensock.com/morphSVG" target="_blank" rel="noreferrer">MorphSVGPlugin - @GreenSock</a></li></ul><p>🌰一些示例：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">svg</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">viewbox</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0 0 100 100</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">path</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">fill</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#1EB287</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">animate</span><span style="color:#89DDFF;"> </span></span>
<span class="line"><span style="color:#89DDFF;">             </span><span style="color:#C792EA;">attributeName</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">d</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span></span>
<span class="line"><span style="color:#89DDFF;">             </span><span style="color:#C792EA;">dur</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1440ms</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span></span>
<span class="line"><span style="color:#89DDFF;">             </span><span style="color:#C792EA;">repeatCount</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">indefinite</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">             </span><span style="color:#C792EA;">keyTimes</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0;</span></span>
<span class="line"><span style="color:#C3E88D;">                       .0625;</span></span>
<span class="line"><span style="color:#C3E88D;">                       .208333333;</span></span>
<span class="line"><span style="color:#C3E88D;">                       .3125;</span></span>
<span class="line"><span style="color:#C3E88D;">                       .395833333;</span></span>
<span class="line"><span style="color:#C3E88D;">                       .645833333;</span></span>
<span class="line"><span style="color:#C3E88D;">                       .833333333;</span></span>
<span class="line"><span style="color:#C3E88D;">                       1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">             </span><span style="color:#C792EA;">calcMode</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">spline</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span></span>
<span class="line"><span style="color:#89DDFF;">             </span><span style="color:#C792EA;">keySplines</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0,0,1,1;</span></span>
<span class="line"><span style="color:#C3E88D;">                         .42,0,.58,1;</span></span>
<span class="line"><span style="color:#C3E88D;">                         .42,0,1,1;</span></span>
<span class="line"><span style="color:#C3E88D;">                         0,0,.58,1;</span></span>
<span class="line"><span style="color:#C3E88D;">                         .42,0,.58,1;</span></span>
<span class="line"><span style="color:#C3E88D;">                         .42,0,.58,1;</span></span>
<span class="line"><span style="color:#C3E88D;">                         .42,0,.58,1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">             </span><span style="color:#C792EA;">values</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">M 0,0 </span></span>
<span class="line"><span style="color:#C3E88D;">                     C 50,0 50,0 100,0</span></span>
<span class="line"><span style="color:#C3E88D;">                     100,50 100,50 100,100</span></span>
<span class="line"><span style="color:#C3E88D;">                     50,100 50,100 0,100</span></span>
<span class="line"><span style="color:#C3E88D;">                     0,50 0,50 0,0</span></span>
<span class="line"><span style="color:#C3E88D;">                     Z;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">                     M 0,0 </span></span>
<span class="line"><span style="color:#C3E88D;">                     C 50,0 50,0 100,0</span></span>
<span class="line"><span style="color:#C3E88D;">                     100,50 100,50 100,100</span></span>
<span class="line"><span style="color:#C3E88D;">                     50,100 50,100 0,100</span></span>
<span class="line"><span style="color:#C3E88D;">                     0,50 0,50 0,0</span></span>
<span class="line"><span style="color:#C3E88D;">                     Z;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">                     M 50,0 </span></span>
<span class="line"><span style="color:#C3E88D;">                     C 75,25 75,25 100,50 </span></span>
<span class="line"><span style="color:#C3E88D;">                     75,75 75,75 50,100</span></span>
<span class="line"><span style="color:#C3E88D;">                     25,75 25,75 0,50</span></span>
<span class="line"><span style="color:#C3E88D;">                     25,25 25,25 50,0</span></span>
<span class="line"><span style="color:#C3E88D;">                     Z;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">                     M 25,50 </span></span>
<span class="line"><span style="color:#C3E88D;">                     C 37.5,25 37.5,25 50,0 </span></span>
<span class="line"><span style="color:#C3E88D;">                     75,50 75,50 100,100</span></span>
<span class="line"><span style="color:#C3E88D;">                     50,100 50,100 0,100</span></span>
<span class="line"><span style="color:#C3E88D;">                     12.5,75 12.5,75 25,50</span></span>
<span class="line"><span style="color:#C3E88D;">                     Z;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">                     M 25,50 </span></span>
<span class="line"><span style="color:#C3E88D;">                     C 37.5,25 37.5,25 50,0 </span></span>
<span class="line"><span style="color:#C3E88D;">                     75,50 75,50 100,100</span></span>
<span class="line"><span style="color:#C3E88D;">                     50,100 50,100 0,100</span></span>
<span class="line"><span style="color:#C3E88D;">                     12.5,75 12.5,75 25,50</span></span>
<span class="line"><span style="color:#C3E88D;">                     Z;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">                     M 50,0</span></span>
<span class="line"><span style="color:#C3E88D;">                     C 77.6,0 100,22.4 100,50 </span></span>
<span class="line"><span style="color:#C3E88D;">                     100,77.6 77.6,100 50,100</span></span>
<span class="line"><span style="color:#C3E88D;">                     22.4,100, 0,77.6, 0,50</span></span>
<span class="line"><span style="color:#C3E88D;">                     0,22.4, 22.4,0, 50,0</span></span>
<span class="line"><span style="color:#C3E88D;">                     Z;</span></span>
<span class="line"><span style="color:#C3E88D;">                     </span></span>
<span class="line"><span style="color:#C3E88D;">                     M 50,0</span></span>
<span class="line"><span style="color:#C3E88D;">                     C 77.6,0 100,22.4 100,50 </span></span>
<span class="line"><span style="color:#C3E88D;">                     100,77.6 77.6,100 50,100</span></span>
<span class="line"><span style="color:#C3E88D;">                     22.4,100, 0,77.6, 0,50</span></span>
<span class="line"><span style="color:#C3E88D;">                     0,22.4, 22.4,0, 50,0</span></span>
<span class="line"><span style="color:#C3E88D;">                     Z;</span></span>
<span class="line"><span style="color:#C3E88D;">                     </span></span>
<span class="line"><span style="color:#C3E88D;">                     M 100,0 </span></span>
<span class="line"><span style="color:#C3E88D;">                     C 100,50 100,50 100,100</span></span>
<span class="line"><span style="color:#C3E88D;">                     50,100 50,100 0,100</span></span>
<span class="line"><span style="color:#C3E88D;">                     0,50 0,50 0,0</span></span>
<span class="line"><span style="color:#C3E88D;">                     50,0 50,0 100,0</span></span>
<span class="line"><span style="color:#C3E88D;">                     Z;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">animate</span><span style="color:#89DDFF;"> </span></span>
<span class="line"><span style="color:#89DDFF;">             </span><span style="color:#C792EA;">attributeName</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fill</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">             </span><span style="color:#C792EA;">dur</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1440ms</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span></span>
<span class="line"><span style="color:#89DDFF;">             </span><span style="color:#C792EA;">repeatCount</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">indefinite</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">             </span><span style="color:#C792EA;">keyTimes</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0;</span></span>
<span class="line"><span style="color:#C3E88D;">                       .0625;</span></span>
<span class="line"><span style="color:#C3E88D;">                       .208333333;</span></span>
<span class="line"><span style="color:#C3E88D;">                       .3125;</span></span>
<span class="line"><span style="color:#C3E88D;">                       .395833333;</span></span>
<span class="line"><span style="color:#C3E88D;">                       .645833333;</span></span>
<span class="line"><span style="color:#C3E88D;">                       .833333333;</span></span>
<span class="line"><span style="color:#C3E88D;">                       1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">             </span><span style="color:#C792EA;">calcMode</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">spline</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span></span>
<span class="line"><span style="color:#89DDFF;">             </span><span style="color:#C792EA;">keySplines</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0,0,1,1;</span></span>
<span class="line"><span style="color:#C3E88D;">                         .42,0,.58,1;</span></span>
<span class="line"><span style="color:#C3E88D;">                         .42,0,1,1;</span></span>
<span class="line"><span style="color:#C3E88D;">                         0,0,.58,1;</span></span>
<span class="line"><span style="color:#C3E88D;">                         .42,0,.58,1;</span></span>
<span class="line"><span style="color:#C3E88D;">                         .42,0,.58,1;</span></span>
<span class="line"><span style="color:#C3E88D;">                         .42,0,.58,1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">             </span><span style="color:#C792EA;">values</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#1eb287;</span></span>
<span class="line"><span style="color:#C3E88D;">                     #1eb287;</span></span>
<span class="line"><span style="color:#C3E88D;">                     #1ca69e;</span></span>
<span class="line"><span style="color:#C3E88D;">                     #188fc2;</span></span>
<span class="line"><span style="color:#C3E88D;">                     #188fc2;</span></span>
<span class="line"><span style="color:#C3E88D;">                     #bb625e;</span></span>
<span class="line"><span style="color:#C3E88D;">                     #ca5f52;</span></span>
<span class="line"><span style="color:#C3E88D;">                     #1eb287;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">svg</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>可以看出上面 <code>values</code> 中的每个值都是path的 <code>d</code> 路径，并且每次变换 <code>d</code> 的顶点数量是一致的。</p><ul><li><a href="https://codepen.io/noahblon/pen/wvxmgv" target="_blank" rel="noreferrer">变转变形状，变改变颜色效果 - @codepen</a></li></ul>`,10),t=p("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"Sitepoint Challenge #1 in SVG and SMIL",src:"https://codepen.io/noahblon/embed/preview/wvxmgv?default-tab=result&editable=true&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/noahblon/pen/wvxmgv">
  Sitepoint Challenge #1 in SVG and SMIL</a> by Noah Blon (<a href="https://codepen.io/noahblon">@noahblon</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),c=s('<p>📚 Morphing Path相关文章：</p><ol><li><a href="https://medium.com/@andrea_codes/exploring-svg-morph-29bdb4016756" target="_blank" rel="noreferrer">Beginner’s Guide to SVG Morph - @medium</a></li><li><a href="https://framerbook.com/animation/example-animations/22-keyframes-morphing-an-svg-path/" target="_blank" rel="noreferrer">Framer Motion keyframes morphing an SVG Path</a></li></ol><p>🤩 Morphing Path的一些资源：</p><ol><li><a href="https://codepen.io/collection/naMaNQ/?cursor=eyJjb2xsZWN0aW9uX2lkIjoibmFNYU5RIiwiY29sbGVjdGlvbl90b2tlbiI6bnVsbCwibGltaXQiOjQsIm1heF9pdGVtcyI6NDEsIm9mZnNldCI6NDAsInBhZ2UiOjExLCJzb3J0X2J5IjoicG9zaXRpb24iLCJzb3J0X29yZGVyIjoiQXNjIn0=" target="_blank" rel="noreferrer">GSAP MorphSVG Showcase collection - @codepen</a> 使用GSAP MorphSVG 插件做的一些动画效果（备注：该插件是付费的）</li><li><a href="https://codepen.io/felixhornoiu/pen/JjmVZw" target="_blank" rel="noreferrer">数字Morphing Path效果 - @codepen</a></li><li><a href="https://codepen.io/hbuchel/pen/YzYMgd" target="_blank" rel="noreferrer">Morphing Path + clipping Mask 组合动画 - @codepen</a></li></ol><p>🔧 一些Morphing Path 工具库：</p><ol><li><a href="https://github.com/Minibrams/svg-path-morph" target="_blank" rel="noreferrer">svg-path-morph - @github</a></li><li><a href="https://thednp.github.io/kute.js/svgMorph.html" target="_blank" rel="noreferrer">KUTE.js SVG Morph</a></li><li><a href="https://greensock.com/docs/v3/Plugins/MorphSVGPlugin" target="_blank" rel="noreferrer">GSAP MorphSVGPlugin</a> 这个很强大，但是是付费的，不用考虑顶点数量是否相同😎</li><li><a href="https://www.framer.com/docs/" target="_blank" rel="noreferrer">Framer Motion</a> React用户可以使用 <code>&lt;motion.path&gt;</code> 可以进行Morphing Path</li></ol><p>直接用SVG原生的比较受限，简易使用一些工具库进行Morphing Path动画</p><p>2022年11月15日14:33:54</p>',8),r=[e,t,c];function i(D,y,F,C,h,E){return l(),a("div",null,r)}const u=n(o,[["render",i]]);export{g as __pageData,u as default};
