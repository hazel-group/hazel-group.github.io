import CommunityMenu from "./CommunityMenu.astro";


export default [
  {
    label: "文档",
    translations: {
      en: "DOCS",
    },
    trigger: "click",
    target: "_self",
    route:"/docs/latest/overview/what-is-higress/"
  },
  {
    label: "博客",
    translations: {
      en: "BLOG",
    },
    trigger: "click",
    target: "_self",
    route: "/blog/",
  },
  {
    label: "企业版 Higress",
    translations: {
      en: "Higress CLOUD",
    },
    trigger: "click",
    target: "_self",
    route: "/cloud/",
    activePath: ["/cloud"],
  },
  {
    label: "AI 插件",
    translations: {
      en: "PLUGIN",
    },
    trigger: "click",
    target: "_self",
    route: "/plugin/",
    activePath: ["/plugin"],
  },
  {
    label: "社区",
    translations: {
      en: "COMMUNITY",
    },
    trigger: "hover",
    relativePosition: 'page',
    slot: CommunityMenu,
    position:"absolute",
    activePath: ["/news", "/activity", "/blog", "/docs/ebook/", "/download"],
  },
  {
    label: "开发者",
    translations: {
      en: "Developer",
    },
    trigger: "click",
    target: "_self",
    route: "/docs/developers/developers_dev/",
  },

  
  {
    label: "控制台样例",
    translations: {
      en: "DEMO",
    },
    trigger: "click",
    target: "_blank",
    route: "http://demo.higress.io/",
  },
];