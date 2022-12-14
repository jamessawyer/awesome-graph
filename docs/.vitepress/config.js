const nav = [
  // { text: '🧾 Recipes', activeMatch: `^/recipes/`, link: '/recipes/installation' },
  {
    text: '🌈 SVG',
    items: [
      { text: '☕ 教程&资源', link: '../svg/tutorial/basics' },
      { text: '😏 深入理解SVG', link: '../svg/depth/part1-svg-viewport-viewbox' },
      { text: '🌟 SVG 动画', link: '../svg/animation/a-guide-to-svg-animations' },
    ]
  },
  // {
  //   text: '🪄 插件',
  //   items: [
  //     { text: 'ScrollTrigger', link: '../plugins/scroll-trigger/index' },
  //     { text: 'Draggable', link: '../plugins/draggable/index' },
  //     { text: 'Observer', link: '../plugins/observer/index' },
  //   ]
  // },
]

const sidebar_svg = {
  '/svg/tutorial': [
    { 
      text: '教程&资源',
      items: [
        { text: '基础', link: '/svg/tutorial/basics' },
        { text: '动画', link: '/svg/tutorial/animation' },
        { text: 'Tricks', link: '/svg/tutorial/tricks' },
      ]
    },
  ],
  '/svg/depth': [
    { 
      text: '🔥深入理解SVG',
      items: [
        { text: 'viewport & viewBox & preseveAspectRatio', link: '/svg/depth/part1-svg-viewport-viewbox' },
      ]
    },
  ],
  '/svg/animation': [
    { 
      text: '🏎️ SMIL动画',
      items: [
        { text: 'SVG SMIL动画', link: '/svg/animation/a-guide-to-svg-animations' },
        { text: 'SVG动画概览', link: '/svg/animation/svg-animation-overview' },
        { text: '⚡SMIL动画元素特性介绍', link: '/svg/animation/svg-animation-attributes' },
        { text: '⚡morphing path动画效果', link: '/svg/animation/svg-animation-morphing-path' },
        { text: '⚡沿path动画', link: '/svg/animation/svg-animation-motion-path' },
        { text: 'SMIL Transformations动画', link: '/svg/animation/svg-animation-transformations' },
      ]
    },
  ],
  
}

const sidebar = {
  ...sidebar_svg,
}

export default {
  title: 'Awesome Graph',
  description: 'SVG + Canvas 图形🚀🎉',
  lastUpdated: true,
  base: '/awesome-graph/',
  
  head:[
    ['link', { rel: 'icon', href: '/awesome-graph/favicon.ico' }]
  ],
  
  themeConfig: {
    logo: '/logo.svg',
    outlineTitle: '目录',
    outline: [2, 3],
    editLink: {
      text: '在GitHub编辑此页',
      pattern: 'https://github.com/jamessawyer/awesome-gsap/edit/main/docs/:path'
    },
    nav,
    sidebar
  },
  markdown: {
    // lineNumbers: true, // 是否显示行号
    // options for markdown-it-toc-done-right
    toc: { level: [1, 2, 3] },
  }
}
