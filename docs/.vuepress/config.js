module.exports = {
  base: "/vue2-context/",
  themeConfig: {
    sidebar: ["/", "/getting-started", "/use"],
    search: false,
  },
  markdown: {
    lineNumbers: true,
  },
  head: [
    [
      "script",
      { src: "https://www.googletagmanager.com/gtag/js?id=G-PW2N4880DY" },
    ],
    [
      "script",
      {},
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-PW2N4880DY');
    `,
    ],
    [
      "script",
      {},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?c350326850edae29a1f06783f3364ac2";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
        `,
    ],
  ],
};
