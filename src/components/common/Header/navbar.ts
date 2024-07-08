import DocsMenu from "./DocsMenu.astro";
import CommunityMenu from "./CommunityMenu.astro";
import LearnMenu from "./LearnMenu.astro";
import SolutionsMenu from "./SolutionsMenu.astro";


export default [
  // {
  //   label: "文档",
  //   translations: {
  //     en: "DOCS",
  //   },
  //   trigger: "hover",
  //   slot: DocsMenu,
  //   position: "absolute",
  //   activePath: ["/docs"],
  // },
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
    label: "博客",
    translations: {
      en: "BLOG",
    },
    trigger: "click",
    target: "_self",
    route: "/blog/",
  },
  {
    label: "AI插件",
    translations: {
      en: "PLUGIN",
    },
    trigger: "click",
    target: "_self",
    route: "/plugin/",
    activePath: ["/plugin"],
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