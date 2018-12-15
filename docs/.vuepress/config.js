module.exports = {
  title: 'Mockupless',
  description: 'Create testable designs with code',
  markdown: {
    lineNumbers: false
  },
  head: [
    ['link', { rel: "icon", href: "favicon.png" }] // https://forestry.io/blog/using-json-configuration-with-vuepress/
  ],
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/Guide/' },
      { text: 'Courses', items: [
        { text: 'Intro to programming', link: '/Courses/IntroToProgramming/' }
      ]},
      // { text: 'Slack', link: 'https://join.slack.com/t/mockupless/shared_invite/enQtNDg2NzE0MDc2MDk2LTY4YTFmM2ZlMjUxMjk2ZDYzZmQ4MTQzMjgzNDhmMjY3NTVjYTBhODYzZDI3MTllNDliZmNmZmQ2NTMxMmMyNzg' },
      { text: 'GitHub', link: 'https://github.com/andgordio/mockupless' },
    ],
    sidebarDepth: 0,
    sidebar: {
      '/Courses/IntroToProgramming/': [
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
        // {
        //   title: 'Functions',
        //   collapsable: false,
        //   children: [
        //     'Functions/functions',
        //   ]
        // },
        {
          title: 'Conditions',
          collapsable: false,
          children: [
            'Conditionals/rendering'
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