module.exports = {
  base: "/vue2-context/",
  themeConfig: {
    sidebar: [
      '/',
      '/getting-started',
      '/use'
    ],
    search: false,
  },
  markdown: {
    lineNumbers: true
  },
  head: [
    ['script', { src: 'https://www.googletagmanager.com/gtag/js?id=G-PW2N4880DY' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-PW2N4880DY');
    `]
  ]
}