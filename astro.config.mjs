import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import partytown from '@astrojs/partytown';
import { autoImportComponents } from "@serverless-cd/goat-ui/src/utils";
import locales from './src/i18n/languages';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
// import compress from 'astro-compress';
import rehypeExternalLinks from 'rehype-external-links';
import preact from "@astrojs/preact";

import { remarkRemoveMdLinks, remarkRemovePlainLanguageCode, remarkRemoveRepeatHeader, addPrefixImageLink, setLinkReferrer } from './src/utils/frontmatter.mjs';
import { ANALYTICS, SITE } from './src/utils/config.ts';
import goatConfig from './goat.config';
import { starlightAsides } from './node_modules/@astrojs/starlight/integrations/asides'

import icon from 'astro-icon';

const whenExternalScripts = (items = []) =>
  ANALYTICS.vendors.googleAnalytics.id && ANALYTICS.vendors.googleAnalytics.partytown
    ? Array.isArray(items)
      ? items.map((item) => item())
      : [items()]
    : [];

// https://astro.build/config
export default defineConfig({
	site: SITE.site,
	base: SITE.base,
	trailingSlash: SITE.trailingSlash,
	image: {
		domain: ["img.alicdn"]
	},

	integrations: [
		preact({ compat: true }),
		starlight({
			title: SITE.site,
			social: {
				github: 'https://github.com/withastro/starlight'
			},
			expressiveCode: {
				themes: ['github-dark'], //TODO: 待调研
			},
			components: {
				TableOfContents: './src/components/starlight/TableOfContents/index.astro',
				Header: './src/components/starlight/Header.astro',
				Head: './src/components/starlight/Head.astro',
				Sidebar: './src/components/starlight/Sidebar.astro',
			},
			editLink: {
				baseUrl: SITE.websiteGithubUrl,
			},
			locales,
			customCss: ['./src/style/global.css','./src/style/fonts.css'],
		}),
		autoImportComponents(),
		tailwind({ applyBaseStyles: false }),
		icon({
			tabler: ['book', 'pencil'],
			'ant-design':['github-filled'],
			basil:['document-outline']
		}),
		{
			name: '@goat:config',
			hooks: {
				"astro:server:setup": async (options) => {
					await goatConfig();
				},
				"astro:build:setup": async (options) => {
					await goatConfig();
				}
			}
		},
		...whenExternalScripts(() =>
		partytown({
		  config: { forward: ['dataLayer.push'] },
		})
	  ),
	],
	markdown: {
		rehypePlugins: [
			// 在这里添加 rehype-external-links 插件配置
			[rehypeExternalLinks, {
				target: '_blank'
			}]],
		remarkPlugins: [
			remarkRemoveMdLinks,
			remarkRemovePlainLanguageCode,
			remarkRemoveRepeatHeader,
			addPrefixImageLink,
			starlightAsides,
			setLinkReferrer
		]
	},
	// TODO: 梳理redirects
	redirects: {
		'/zh-cn/': '/',
		'/en-us/': '/en/',
		'/[...slug].html': '/[...slug]',
		'/zh-cn/[...slug]': '/[...slug]',
		'/docs/': '/docs/latest/what-is-nacos/',
	}
});