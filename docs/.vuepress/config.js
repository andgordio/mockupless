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
        // animations
        // functions pro: multiple parameters, etc
        // complex conditions (and in functions)
        // loops in functions
        // git
      ]},
      // { text: 'Cookbook', link: '/Cookbook/' },
      // { text: 'Slack', link: 'https://join.slack.com/t/mockupless/shared_invite/enQtNDg2NzE0MDc2MDk2LTY4YTFmM2ZlMjUxMjk2ZDYzZmQ4MTQzMjgzNDhmMjY3NTVjYTBhODYzZDI3MTllNDliZmNmZmQ2NTMxMmMyNzg' },
      { text: 'Forum', link: 'https://spectrum.chat/mockupless' },
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
            // 'Core/containers',
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
            // 'Decoration/border-radius',
            'Decoration/opacity',
            'Decoration/shadow',
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
          title: 'Intro',
          collapsable: false,
          children: [
            '',
            'Setup/',
            'Setup/Practice',
          ]
        },
        {
          title: 'Data',
          collapsable: false,
          children: [
            'Data/',
            'Data/variables',
            'Data/display',
            'Data/forms'
          ]
        },
        {
          title: 'Events',
          collapsable: false,
          children: [
            'Events/',
            'Events/other',
          ]
        },
        {
          title: 'Conditions',
          collapsable: false,
          children: [
            'Conditionals/',
            'Conditionals/not',
            'Conditionals/booleans',
            'Conditionals/styles',
          ]
        },
        {
          title: 'Lists',
          collapsable: false,
          children: [
            'Lists-and-loops/',
            'Lists-and-loops/indexes',
            'Lists-and-loops/arrays-methods'
          ]
        },
        {
          title: 'Objects',
          collapsable: false,
          children: [
            'Objects/',
            'Objects/objects-pro',
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
            'Course-project/',
            'Course-project/core',
            'Course-project/more',
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