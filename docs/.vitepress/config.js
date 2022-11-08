const nav = [
  // { text: '🧾 Recipes', activeMatch: `^/recipes/`, link: '/recipes/installation' },
  {
    text: '🌈 SVG',
    items: [
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
      text: '🏎️ SVG动画',
      items: [
        { text: 'SVG SMIL动画', link: '/svg/animation/a-guide-to-svg-animations' },
        { text: 'SVG动画概览', link: '/svg/animation/svg-animation-overview' },
      ]
    },
  ]
  
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
