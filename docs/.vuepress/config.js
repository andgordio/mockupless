module.exports = {
  title: 'Mockupless',
  description: 'Create testable prototypes with code',
  plugins: ['@vuepress/google-analytics'],
  markdown: {
    lineNumbers: false
  },
  head: [
    ['link', { rel: "icon", href: "favicon.png" }], // https://forestry.io/blog/using-json-configuration-with-vuepress/
  ],
  ga: 'UA-131076924-1',
  themeConfig: {
    nav: [
      { text: 'About', link: '/About/' },
      { text: 'Courses', items: [
        { text: 'Layout basics', link: '/Courses/LayoutBasics/' },
        { text: 'Interaction basics', link: '/Courses/InteractionBasics/' },
      ]},
      // { text: 'Slack', link: 'https://join.slack.com/t/mockupless/shared_invite/enQtNDg2NzE0MDc2MDk2LTY4YTFmM2ZlMjUxMjk2ZDYzZmQ4MTQzMjgzNDhmMjY3NTVjYTBhODYzZDI3MTllNDliZmNmZmQ2NTMxMmMyNzg' },
      { text: 'GitHub', link: 'https://github.com/andgordio/mockupless' },
    ],
    sidebarDepth: 0,
    sidebar: {
      '/Courses/LayoutBasics/': [
        // '',
        // {
        //   title: 'Core',
        //   collapsable: false,
        //   children: [
        //     'Core/units',
        //     'Core/color',
        //   ]
        // },
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
        '',
        {
          title: 'Setup',
          collapsable: false,
          children: [
            'Setup/template',
            'Setup/devtools',
          ]
        },
        {
          title: 'Data',
          collapsable: false,
          children: [
            'Data/variables',
            'Data/display',
            'Data/practice'
          ]
        },
        // {
        //   title: 'Events',
        //   collapsable: false,
        //   children: [
        //     'Events/arithmetics',
        //     'Events/events',
        //     'Events/practice'
        //   ]
        // },
        {
          title: 'Conditions',
          collapsable: false,
          children: [
            'Conditionals/rendering',
            'Conditionals/equality',
            'Conditionals/styles',
            'Conditionals/complex',
            // 'Conditionals/course-project',
          ]
        },
        {
          title: 'Lists and Objects',
          collapsable: false,
          children: [
            'Lists-and-loops/lists',
            'Lists-and-loops/indexes',
            'Lists-and-loops/objects',
          ]
        },
      ]
    }
  }
}