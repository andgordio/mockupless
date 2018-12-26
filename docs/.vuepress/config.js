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
        '',
        'background'
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
        {
          title: 'Events',
          collapsable: false,
          children: [
            'Events/arithmetics',
            'Events/events',
            'Events/practice'
          ]
        },
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
        // {
        //   title: 'Arrays and Loops',
        //   collapsable: false,
        //   children: [
        //     'Loops/arrays',
        //     'Loops/lists',
        //     'Loops/loops',
        //     'Loops/practice'
        //   ]
        // },
        // {
        //   title: 'Functions',
        //   collapsable: false,
        //   children: [
        //     'Functions/functions',
        //     ....
        //   ]
        // },
        // {
        //   title: 'Advanced',
        //   collapsable: false,
        //   children: [
        //     'Advanced/objects'
        //   ]
        // }
      ]
    }
  }
}