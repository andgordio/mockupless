module.exports = {
  title: 'Mockupless',
  description: 'Design testable prototypes with code',
  plugins: ['@vuepress/google-analytics'],
  markdown: {
    lineNumbers: false
  },
  head: [
    ['link', { rel: "icon", href: "favicon.png" }], // note: https://forestry.io/blog/using-json-configuration-with-vuepress/
  ],
  ga: 'UA-131076924-1',
  themeConfig: {
    nav: [
      { text: 'About', link: '/About/' },
      { text: 'Courses', items: [
        { text: 'Layout basics', link: '/Courses/LayoutBasics/' },
        { text: 'Interaction basics', link: '/Courses/InteractionBasics/' },
        // responsive
        // advanced positioning: fixed, absolute
        // git
        // animations
        // conditions in functions
        // loops in functions
      ]},
      { text: 'Cookbook', link: '/Cookbook/' },
      // { text: 'Slack', link: 'https://join.slack.com/t/mockupless/shared_invite/enQtNDg2NzE0MDc2MDk2LTY4YTFmM2ZlMjUxMjk2ZDYzZmQ4MTQzMjgzNDhmMjY3NTVjYTBhODYzZDI3MTllNDliZmNmZmQ2NTMxMmMyNzg' },
      { text: 'Forum', link: 'https://forum.mockupless.com' },
      { text: 'GitHub', link: 'https://github.com/andgordio/mockupless' },
    ],
    sidebarDepth: 0,
    sidebar: {
      '/Courses/LayoutBasics/': [
        {
          title: 'Intro to Layout basics',
          collapsable: false,
          children: [
            '',
            // 'Intro/html-and-css',
            // 'Intro/template',
          ]
        },
        {
          title: 'Core',
          collapsable: false,
          children: [
            // 'Core/units',
            // 'Core/color',
            'Core/containers',
            'Core/form',
          ]
        },
        {
          title: 'Flex',
          collapsable: false,
          children: [
            // 'Flex/intro-to-flex',
            'Flex/direction-and-wrap',
            'Flex/alignment',
            'Flex/flex1',
            // 'Flex/practice.md',
          ]
        },
        {
          title: 'Decoration',
          collapsable: false,
          children: [
            'Decoration/background',
            'Decoration/border',
            // 'Decoration/corner-radius',
            // 'Decoration/opacity',
            // 'Decoration/shadow',
          ]
        },
        {
          title: 'Tailwind',
          collapsable: false,
          children: [
            'Tailwind/whats',
            'Tailwind/usage',
            // 'Tailwind/core',
            // 'Tailwind/flex',
            // 'Tailwind/decoration',
            'Tailwind/practice',
          ]
        },
      ],
      '/Courses/InteractionBasics/': [
        {
          title: 'Intro to Interaction basics',
          collapsable: false,
          children: [
            '',
            'Setup/',
            'Setup/devtools',
          ]
        },
        {
          title: 'Data',
          collapsable: false,
          children: [
            'Data/',
            'Data/display',
            // 'Data/practice'
          ]
        },
        {
          title: 'Conditions',
          collapsable: false,
          children: [
            'Conditionals/rendering',
            'Conditionals/equality',
            'Conditionals/complex',
            'Conditionals/styles',
            // 'Conditionals/course-project',
          ]
        },
        {
          title: 'Events',
          collapsable: false,
          children: [
            // todo: paste somewhere, it's necessary! 'Events/arithmetics', 
            'Events/click',
            'Events/other',
            // 'Events/practice'
          ]
        },
        {
          title: 'Lists and Objects',
          collapsable: false,
          children: [
            'Lists-and-loops/lists',
            'Lists-and-loops/indexes',
            'Lists-and-loops/arrays-methods',
            'Lists-and-loops/objects',
            'Lists-and-loops/objects-pro',
          ]
        },
        {
          title: 'Functions',
          collapsable: false,
          children: [
            'Functions/',
            'Functions/parameters',
          ]
        },
        {
          title: 'Course project',
          collapsable: false,
          children: [
            'course-project/',
            'course-project/guide',
            'course-project/whats-next',
          ]
        },
      ],
      '/Cookbook/': [
        '',
        'layout-color-boxes',
        'switch',
        'responsive-header',
        'drag-n-drop',
        'timeout',
        'fake-data',
      ]
    }
  }
}