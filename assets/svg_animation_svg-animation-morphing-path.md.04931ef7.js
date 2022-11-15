import{_ as n,c as a,o as l,a as s,b as p}from"./app.b813a189.js";const g=JSON.parse('{"title":"Morph Path\u52A8\u753B","description":"","frontmatter":{"title":"Morph Path\u52A8\u753B"},"headers":[],"relativePath":"svg/animation/svg-animation-morphing-path.md","lastUpdated":1668506830000}'),o={name:"svg/animation/svg-animation-morphing-path.md"},e=s(`<p>\u8FD9\u662F <a href="https://css-tricks.com/guide-svg-animations-smil/#aa-example-morphing-paths" target="_blank" rel="noreferrer">A Guide to SVG Animations (SMIL)</a> \u7684\u90E8\u5206\u5185\u5BB93\u3002</p><p>morphing path\u52A8\u753B\u5C31\u662F\u5BF9\u63CF\u8FF0\u5F62\u72B6\u7684 <code>&lt;path d=&quot;...&quot;&gt;</code> \u4E0A\u7684 <code>d</code> \uFF08\u5373 <code>data</code>\uFF09\u6216\u8005\u662F <code>&lt;polygon points=&quot;...&quot; /&gt;</code> \u4E0A\u7684 <code>points</code> \u8FDB\u884C\u52A8\u753B\uFF0C\u4ECE\u4E00\u4E2A\u5F62\u72B6\u8F6C\u53D8\u4E3A\u53E6\u4E00\u4E2A\u5F62\u72B6\uFF0C\u5F62\u6210\u5F88\u9177\u70AB\u7684\u6548\u679C\u3002\u5177\u4F53\u6548\u679C\u53EF\u4EE5\u53C2\u8003 <a href="https://greensock.com/docs/v3/Plugins/MorphSVGPlugin" target="_blank" rel="noreferrer">GreenSock MorphSVGPlugin</a></p><ul><li>\u4E3A\u4E86\u5B9E\u73B0SVG\u8DEF\u5F84\u52A8\u753B\uFF0C\u9700\u8981\u6307\u5B9A <code>attributeName=&quot;d&quot;</code></li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>SVG\u539F\u751F\u7684Morphing path \u52A8\u753B\u5B58\u5728\u5982\u4E0B\u8981\u6C42\uFF1A</p><ol><li><code>path A</code> -&gt; <code>path B</code> \u9700\u8981\u8DEF\u5F84 <code>A</code> &amp; <code>B</code> \u4EE5\u53CA\u4E2D\u95F4\u8DEF\u5F84\u7684 <code>\u9876\u70B9</code> \u6570\u91CF\u4E00\u6837\uFF0C\u5426\u5219morphing path\u52A8\u753B\u662F\u4E0D\u4F1A\u751F\u6548\u7684</li></ol></div><p>\u5173\u4E8ESVG Shape Morphing \u539F\u7406\u53EF\u4EE5\u770B\uFF1A</p><ul><li><a href="https://css-tricks.com/svg-shape-morphing-works/" target="_blank" rel="noreferrer">How SVG Shape Morphing Works - Chris Coyier@CSSTricks</a></li><li><a href="https://greensock.com/morphSVG" target="_blank" rel="noreferrer">MorphSVGPlugin - @GreenSock</a></li></ul><p>\u{1F330}\u4E00\u4E9B\u793A\u4F8B\uFF1A</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">svg</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">viewbox</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0 0 100 100</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
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
<span class="line"></span></code></pre></div><p>\u53EF\u4EE5\u770B\u51FA\u4E0A\u9762 <code>values</code> \u4E2D\u7684\u6BCF\u4E2A\u503C\u90FD\u662Fpath\u7684 <code>d</code> \u8DEF\u5F84\uFF0C\u5E76\u4E14\u6BCF\u6B21\u53D8\u6362 <code>d</code> \u7684\u9876\u70B9\u6570\u91CF\u662F\u4E00\u81F4\u7684\u3002</p><ul><li><a href="https://codepen.io/noahblon/pen/wvxmgv" target="_blank" rel="noreferrer">\u53D8\u8F6C\u53D8\u5F62\u72B6\uFF0C\u53D8\u6539\u53D8\u989C\u8272\u6548\u679C - @codepen</a></li></ul>`,10),t=p("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"Sitepoint Challenge #1 in SVG and SMIL",src:"https://codepen.io/noahblon/embed/preview/wvxmgv?default-tab=result&editable=true&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/noahblon/pen/wvxmgv">
  Sitepoint Challenge #1 in SVG and SMIL</a> by Noah Blon (<a href="https://codepen.io/noahblon">@noahblon</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),c=s('<p>\u{1F4DA} Morphing Path\u76F8\u5173\u6587\u7AE0\uFF1A</p><ol><li><a href="https://medium.com/@andrea_codes/exploring-svg-morph-29bdb4016756" target="_blank" rel="noreferrer">Beginner\u2019s Guide to SVG Morph - @medium</a></li><li><a href="https://framerbook.com/animation/example-animations/22-keyframes-morphing-an-svg-path/" target="_blank" rel="noreferrer">Framer Motion keyframes morphing an SVG Path</a></li></ol><p>\u{1F929} Morphing Path\u7684\u4E00\u4E9B\u8D44\u6E90\uFF1A</p><ol><li><a href="https://codepen.io/collection/naMaNQ/?cursor=eyJjb2xsZWN0aW9uX2lkIjoibmFNYU5RIiwiY29sbGVjdGlvbl90b2tlbiI6bnVsbCwibGltaXQiOjQsIm1heF9pdGVtcyI6NDEsIm9mZnNldCI6NDAsInBhZ2UiOjExLCJzb3J0X2J5IjoicG9zaXRpb24iLCJzb3J0X29yZGVyIjoiQXNjIn0=" target="_blank" rel="noreferrer">GSAP MorphSVG Showcase collection - @codepen</a> \u4F7F\u7528GSAP MorphSVG \u63D2\u4EF6\u505A\u7684\u4E00\u4E9B\u52A8\u753B\u6548\u679C\uFF08\u5907\u6CE8\uFF1A\u8BE5\u63D2\u4EF6\u662F\u4ED8\u8D39\u7684\uFF09</li><li><a href="https://codepen.io/felixhornoiu/pen/JjmVZw" target="_blank" rel="noreferrer">\u6570\u5B57Morphing Path\u6548\u679C - @codepen</a></li><li><a href="https://codepen.io/hbuchel/pen/YzYMgd" target="_blank" rel="noreferrer">Morphing Path + clipping Mask \u7EC4\u5408\u52A8\u753B - @codepen</a></li></ol><p>\u{1F527} \u4E00\u4E9BMorphing Path \u5DE5\u5177\u5E93\uFF1A</p><ol><li><a href="https://github.com/Minibrams/svg-path-morph" target="_blank" rel="noreferrer">svg-path-morph - @github</a></li><li><a href="https://thednp.github.io/kute.js/svgMorph.html" target="_blank" rel="noreferrer">KUTE.js SVG Morph</a></li><li><a href="https://greensock.com/docs/v3/Plugins/MorphSVGPlugin" target="_blank" rel="noreferrer">GSAP MorphSVGPlugin</a> \u8FD9\u4E2A\u5F88\u5F3A\u5927\uFF0C\u4F46\u662F\u662F\u4ED8\u8D39\u7684\uFF0C\u4E0D\u7528\u8003\u8651\u9876\u70B9\u6570\u91CF\u662F\u5426\u76F8\u540C\u{1F60E}</li><li><a href="https://www.framer.com/docs/" target="_blank" rel="noreferrer">Framer Motion</a> React\u7528\u6237\u53EF\u4EE5\u4F7F\u7528 <code>&lt;motion.path&gt;</code> \u53EF\u4EE5\u8FDB\u884CMorphing Path</li></ol><p>\u76F4\u63A5\u7528SVG\u539F\u751F\u7684\u6BD4\u8F83\u53D7\u9650\uFF0C\u7B80\u6613\u4F7F\u7528\u4E00\u4E9B\u5DE5\u5177\u5E93\u8FDB\u884CMorphing Path\u52A8\u753B</p><p>2022\u5E7411\u670815\u65E514:33:54</p>',8),r=[e,t,c];function i(D,y,F,C,h,E){return l(),a("div",null,r)}const u=n(o,[["render",i]]);export{g as __pageData,u as default};
