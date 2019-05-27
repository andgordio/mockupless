module.exports = {
  title: 'Mockupless',
  description: 'Learn to design testable prototypes with code',
  plugins: ['@vuepress/google-analytics'],
  markdown: {
    lineNumbers: false
  },
  head: [
    ['link', { rel: "icon", href: "favicon.png" }], 
  ],
  ga: 'UA-131076924-1',
  themeConfig: {
    nav: [
      { text: 'About', link: '/About/' },
      { text: 'Courses', items: [
        { text: 'Layout basics', link: '/Courses/LayoutBasics/' },
        { text: 'Interaction basics', link: '/Courses/InteractionBasics/' },
      ]},
      // { text: 'Cookbook', link: '/Cookbook/' },
      { text: 'Showcase', link: '/Showcase/course-project.md' },
      { text: 'Forum', link: 'https://spectrum.chat/mockupless' },
      { text: 'GitHub', link: 'https://github.com/andgordio/mockupless' },
    ],
    sidebarDepth: 0,
    sidebar: {
      '/Courses/LayoutBasics/': [
        {
          title: 'Layout basics',
          collapsable: false,
          children: [
            '',
            'Setup/',
            'Setup/practice'
          ]
        },
        {
          title: 'Core',
          collapsable: false,
          children: [
            'Core/',
            'Core/nesting',
            'Core/images',
            'Core/form-controls',
            // 'Core/debugging',
          ]
        },
        {
          title: 'Style',
          collapsable: false,
          children: [
            'Style/',
            'Style/units',
            'Style/colors',
            'Style/text',
            'Style/background',
            'Style/border',
            'Style/opacity-and-shadow'
          ]
        },
        {
          title: 'Positioning',
          collapsable: false,
          children: [
            'Positioning/',
            'Positioning/intro-to-flex',
            'Positioning/direction-and-wrap',
            'Positioning/alignment',
            'Positioning/flex-1',
            'Positioning/nesting-and-overflow'
          ]
        },
        {
          title: 'Frameworks and Libraries',
          collapsable: false,
          children: [
            'Frameworks/',
            'Frameworks/ionicons',
            'Frameworks/google-fonts'
          ]
        },
        {
          title: 'Course project',
          collapsable: false,
          children: [
            'Course-project/',
            'Course-project/layout',
            'Course-project/decoration'
          ]
        }
      ],
      '/Courses/InteractionBasics/': [
        {
          title: 'Interaction basics',
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
      ],
      '/Showcase/': [
        'course-project',
        'more',
      ]
    }
  }
}