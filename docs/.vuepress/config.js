module.exports = {
  title: 'Mockupless',
  description: 'Create testable designs with code',
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    nav: [
      { text: 'GitHub', link: 'https://github.com/andgordio/mockupless' },
    ],
    sidebar: [
      '/introToProgramming/',
      {
        title: 'Intro to programming',
        collapsable: false,
        children: [
          '/introToProgramming/setup',
          '/introToProgramming/storeAndRead',
          '/introToProgramming/listenAndChange'
        ]
      },
      {
        title: 'Dictionary',
        collapsable: false,
        children: [
          '/introToProgramming/variablesAndSimpleDataTypes',
        ]
      }
    ]
  }
}