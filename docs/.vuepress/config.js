module.exports = {
  title: 'Mockupless',
  description: 'Create testable designs with code',
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/Guide/' },
      { text: 'Courses', items: [
        { text: 'Intro to programming', link: '/Courses/IntroToProgramming/' }
      ]},
      { text: 'Slack', link: 'https://join.slack.com/t/mockupless/shared_invite/enQtNDg2NzE0MDc2MDk2LTY4YTFmM2ZlMjUxMjk2ZDYzZmQ4MTQzMjgzNDhmMjY3NTVjYTBhODYzZDI3MTllNDliZmNmZmQ2NTMxMmMyNzg' },
      { text: 'GitHub', link: 'https://github.com/andgordio/mockupless' },
    ],
    sidebarDepth: 0,
    sidebar: {
      '/Guide/': [
        ''
      ],
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
          title: 'Events and functions',
          collapsable: false,
          children: [
            'Functions/arithmetics',
            'Functions/events',
            'Functions/functions',
            'Functions/practice'
          ]
        },
        {
          title: 'Conditions and boolean',
          collapsable: false,
          children: [
            'Conditionals/boolean',
            'Conditionals/conditionalContainers',
            'Conditionals/conditionalInstructions',
            'Conditionals/practice'
          ]
        },
        {
          title: 'Arrays and Loops',
          collapsable: false,
          children: [
            'Loops/arrays',
            'Loops/lists',
            'Loops/loops',
            'Loops/practice'
          ]
        },
        {
          title: 'Advanced',
          collapsable: false,
          children: [
            'Advanced/objects'
          ]
        }
      ]
    }
  }
}