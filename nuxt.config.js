import theme from '@nuxt/content-theme-docs'

export default theme({
  // [additional nuxt configuration]
  i18n: {
  locales: () => [{
  code: 'en',
  iso: 'en-US',
  file: 'en-US.js',
  name: 'English'
}],
defaultLocale: 'en'
},

})
