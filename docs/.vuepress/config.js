
module.exports = {
  title: '冲！冲！冲！',
  description: 'GO! GO! GO!',
  // base: '/blog/',
  head: [
    ['link', { rel: 'icon', href: '/images/head-logo.jpg' }]
  ],
  theme: 'vdoing',
  // markdown: {
  //   extractHeaders: [ 'h2', 'h3', 'h4', 'h5', 'h6' ]  // 右侧目录栏
  // },
  themeConfig: {
    logo: '/images/logo.jpg',   // logo
    bodyBgImg: '/images/bg.jpg',
    bodyBgImgOpacity: 0.7,
    sidebar: 'structuring',     // 自动生成侧边栏
    sidebarDepth: 2,  // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    category: true,   // 分类
    tags: true,       // 标签
    archive: true,    // 归档
    searchMaxSuggestions: 10,   // 搜索结果显示最大数
    repo: 'https://github.com/xiaomai653/blog', // Github仓库地址
    docsDir: 'docs',  // 编辑的文件夹
    editLinks: true,  // 启用编辑
    editLinkText: '编辑',
    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    author: {
      name: 'xiaomai', // 必需
    },
    // 博主信息
    blogger: {
      avatar: '/images/author.jpg',
      name: '小麦',
      slogan: '不积硅步，无以至千里。'
    },
    // 社交图标
    // social: {
    //   icons: [
    //     {
    //       iconClass: 'icon-github',
    //       title: 'github',
    //       link: 'https://github.com/xiaomai653'
    //     },
    //     {
    //       iconClass: 'icon-gitee',
    //       title: 'gitee',
    //       link: 'https://gitee.com/xiaomai653'
    //     }
    // ]},
    // 导航配置
    nav: [
      { text: '首页', link: '/' },
      // 没有二级导航时可以直接添加
      {text: 'centos7', link: '/centos7/'},
      {text: '常用命令', link: '/command/'},
      {text: 'Java', link: '/java/'},
      // 有二级导航时
      // {
      //   text: '索引',
      //   link: '/archives/',
      //   items: [
      //     { text: '分类', link: '/categories/' },
      //     { text: '标签', link: '/tags/' },
      //     { text: '归档', link: '/archives/' },
      //   ],
      // },
    ],
    // 页脚信息
    footer: {
      createYear: 2022, // 博客创建年份
      copyrightInfo:
          '', // 博客版权信息，支持a标签或换行标签</br>
    },
  },
  plugins: {
    // 代码块复制按钮
    'one-click-copy': {
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      toolTipMessage: '复制到剪贴板', // default is ''Copy to clipboard'
      duration: 500, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },

    // 放大图片
    'vuepress-plugin-zooming': {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // not排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },

    // 全文搜索
    'fulltext-search': {},

    // 鼠标点击效果
    'cursor-effects': {
      size: 2, // size of the particle, default: 2
      shape: 'star', // shape of the particle, default: 'star'
      zIndex: 999999999, // z-index property of the canvas, default: 999999999
    },

    // 小猫回顶部
    'go-top': {},

    // 添加一条丝带
    // 'ribbon': {
    //   size: 90, // width of the ribbon, default: 90
    //   opacity: 0.8, // opacity of the ribbon, default: 0.3
    //   zIndex: -1, // z-index property of the background, default: -1
    // },
  }
}


