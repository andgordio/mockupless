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
  postcss: {
    plugins: [require('tailwindcss')('./tailwind.js'), require('autoprefixer')],
  },
  themeConfig: {
    nav: [
      { text: 'About', link: '/About/' },
      { text: 'Courses', items: [
        { text: 'Layout basics', link: '/Courses/LayoutBasics/Intro/about' },
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
          title: 'Layout basics',
          collapsable: false,
          children: [
            'Intro/about',
            'Intro/codepen',
            'Intro/practice'
          ]
        },
        {
          title: 'Core',
          collapsable: false,
          children: [
            'Core/intro-to-html',
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
            'Style/intro-to-css',
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
            'Positioning/box-model',
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
            'Frameworks/tailwind',
            'Frameworks/ionicons',
            'Frameworks/google-fonts'
          ]
        },
        {
          title: 'Course project',
          collapsable: false,
          children: [
            'Course-project/task',
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
      ]
    }
  }
}