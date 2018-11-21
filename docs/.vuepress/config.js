module.exports = {
  title: 'Mockupless course',
  description: 'Learn to build limitless prototypes with code',
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    nav: [
      { text: 'GitHub', link: 'https://github.com/andgordio/mockupless' },
    ],
    sidebar: [
      {
        title: 'Interaction',
        collapsable: false,
        children: [
          '/introToProgramming/',
          '/introToProgramming/setup',
          '/introToProgramming/storeAndRead',
          '/introToProgramming/variablesAndSimpleDataTypes',
          '/introToProgramming/listenAndChange'
        ]
      }
    ]
  }
}