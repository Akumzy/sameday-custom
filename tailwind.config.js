module.exports = {
  theme: {
    extend: {
      colors: {
        'ui-blue-1': '#196BD8',
        'ui-blue-2': '#007BFF',
        'ui-green': '#1E8406',
        'ui-navy-blue': '#1A3A54',
        'ui-black-20': 'rgba(0,0,0,0.20)',
        'ui-black-10': 'rgba(0,0,0,0.10)',
        'ui-black-05': 'rgba(0,0,0,0.05)',
        'ui-gray': '#939393',
        'ui-dark': '#030303',
        'ui-dark-light': '#5D5D5D',
        'ui-dark-lighter': '#868686',
        'ui-gray-1': '#9B9B9B',
        'ui-gray-2': '#707070',
        'ui-gray-3': '#D0D0D0',
        'ui-gray-4': '#FCFCFC',
        'ui-gray-light': '#EEEEEE',
        'ui-sidebar-border': '#0143AD',
        'ui-sidebar-list-overlay': '#CEE6FF',
        'ui-footer': '#F4F7F6',
        'ui-red-1': '#D80B0B',
        'ui-red-2': '#FF0014',
        'ui-green-1': '#009B2A',
        'ui-preview': '#1A3A54'
      },
      width: {
        'sidebar-open': 'var(--sidebar-w-open)',
        'sidebar-closed': 'var(--sidebar-w-closed)',
        300: '300px'
      },
      height: {
        'header-h': 'var(--header-h)',
        300: '300px'
      },
      fontFamily: {
        Nunito: 'Nunito'
      }
    }
  },
  variants: {
    fontSize: ['responsive', 'hover', 'focus', 'important'],
    fontWeight: ['responsive', 'hover', 'focus', 'important']
  },
  plugins: [
    function({ addVariant }) {
      addVariant('important', ({ container }) => {
        container.walkRules(rule => {
          rule.selector = `.\\!${rule.selector.slice(1)}`
          rule.walkDecls(decl => {
            decl.important = true
          })
        })
      })
    }
  ]
}
