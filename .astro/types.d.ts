declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"release-nacos110.md": {
	id: "release-nacos110.md";
  slug: "release-nacos110";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"release-nacos132.md": {
	id: "release-nacos132.md";
  slug: "release-nacos132";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};
"docs": {
"2022/en/best-practice/integrated-example.md": {
	id: "2022/en/best-practice/integrated-example.md";
  slug: "2022/en/best-practice/integrated-example";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/en/best-practice/spring-boot-to-spring-cloud.md": {
	id: "2022/en/best-practice/spring-boot-to-spring-cloud.md";
  slug: "2022/en/best-practice/spring-boot-to-spring-cloud";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/en/overview/faq.md": {
	id: "2022/en/overview/faq.md";
  slug: "2022/en/overview/faq";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/en/overview/roadmap/rocketmq-5.0.0/rocketmq-5.0.0.md": {
	id: "2022/en/overview/roadmap/rocketmq-5.0.0/rocketmq-5.0.0.md";
  slug: "2022/en/overview/roadmap/rocketmq-500/rocketmq-500";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/en/overview/roadmap/service-governance/service-governance.md": {
	id: "2022/en/overview/roadmap/service-governance/service-governance.md";
  slug: "2022/en/overview/roadmap/service-governance/service-governance";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/en/overview/version-explain.md": {
	id: "2022/en/overview/version-explain.md";
  slug: "2022/en/overview/version-explain";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/en/overview/what-is-sca.md": {
	id: "2022/en/overview/what-is-sca.md";
  slug: "2022/en/overview/what-is-sca";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/en/user-guide/graalvm/overview.md": {
	id: "2022/en/user-guide/graalvm/overview.md";
  slug: "2022/en/user-guide/graalvm/overview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/en/user-guide/graalvm/quick-start.md": {
	id: "2022/en/user-guide/graalvm/quick-start.md";
  slug: "2022/en/user-guide/graalvm/quick-start";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/en/user-guide/nacos/advanced-guide.md": {
	id: "2022/en/user-guide/nacos/advanced-guide.md";
  slug: "2022/en/user-guide/nacos/advanced-guide";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/en/user-guide/nacos/overview.md": {
	id: "2022/en/user-guide/nacos/overview.md";
  slug: "2022/en/user-guide/nacos/overview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/en/user-guide/nacos/quick-start.md": {
	id: "2022/en/user-guide/nacos/quick-start.md";
  slug: "2022/en/user-guide/nacos/quick-start";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/en/user-guide/rocketmq/advanced-guide.md": {
	id: "2022/en/user-guide/rocketmq/advanced-guide.md";
  slug: "2022/en/user-guide/rocketmq/advanced-guide";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/en/user-guide/rocketmq/overview.md": {
	id: "2022/en/user-guide/rocketmq/overview.md";
  slug: "2022/en/user-guide/rocketmq/overview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/en/user-guide/rocketmq/quick-start.md": {
	id: "2022/en/user-guide/rocketmq/quick-start.md";
  slug: "2022/en/user-guide/rocketmq/quick-start";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/en/user-guide/seata/advanced-guide.md": {
	id: "2022/en/user-guide/seata/advanced-guide.md";
  slug: "2022/en/user-guide/seata/advanced-guide";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/en/user-guide/seata/overview.md": {
	id: "2022/en/user-guide/seata/overview.md";
  slug: "2022/en/user-guide/seata/overview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/en/user-guide/seata/quick-start.md": {
	id: "2022/en/user-guide/seata/quick-start.md";
  slug: "2022/en/user-guide/seata/quick-start";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/en/user-guide/sentinel/advanced-guide.md": {
	id: "2022/en/user-guide/sentinel/advanced-guide.md";
  slug: "2022/en/user-guide/sentinel/advanced-guide";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/en/user-guide/sentinel/overview.md": {
	id: "2022/en/user-guide/sentinel/overview.md";
  slug: "2022/en/user-guide/sentinel/overview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/en/user-guide/sentinel/quick-start.md": {
	id: "2022/en/user-guide/sentinel/quick-start.md";
  slug: "2022/en/user-guide/sentinel/quick-start";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/en/user-guide/sidecar/advanced-guide.md": {
	id: "2022/en/user-guide/sidecar/advanced-guide.md";
  slug: "2022/en/user-guide/sidecar/advanced-guide";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/en/user-guide/sidecar/overview.md": {
	id: "2022/en/user-guide/sidecar/overview.md";
  slug: "2022/en/user-guide/sidecar/overview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/en/user-guide/sidecar/quick-start.md": {
	id: "2022/en/user-guide/sidecar/quick-start.md";
  slug: "2022/en/user-guide/sidecar/quick-start";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/zh-cn/best-practice/integrated-example.md": {
	id: "2022/zh-cn/best-practice/integrated-example.md";
  slug: "2022/zh-cn/best-practice/integrated-example";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/zh-cn/best-practice/spring-boot-to-spring-cloud.md": {
	id: "2022/zh-cn/best-practice/spring-boot-to-spring-cloud.md";
  slug: "2022/zh-cn/best-practice/spring-boot-to-spring-cloud";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/zh-cn/overview/faq.md": {
	id: "2022/zh-cn/overview/faq.md";
  slug: "2022/zh-cn/overview/faq";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/zh-cn/overview/roadmap/rocketmq-5.0.0/rocketmq-5.0.0.md": {
	id: "2022/zh-cn/overview/roadmap/rocketmq-5.0.0/rocketmq-5.0.0.md";
  slug: "2022/zh-cn/overview/roadmap/rocketmq-500/rocketmq-500";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/zh-cn/overview/roadmap/service-governance/service-governance.md": {
	id: "2022/zh-cn/overview/roadmap/service-governance/service-governance.md";
  slug: "2022/zh-cn/overview/roadmap/service-governance/service-governance";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/zh-cn/overview/version-explain.md": {
	id: "2022/zh-cn/overview/version-explain.md";
  slug: "2022/zh-cn/overview/version-explain";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/zh-cn/overview/what-is-sca.md": {
	id: "2022/zh-cn/overview/what-is-sca.md";
  slug: "2022/zh-cn/overview/what-is-sca";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/zh-cn/user-guide/graalvm/overview.md": {
	id: "2022/zh-cn/user-guide/graalvm/overview.md";
  slug: "2022/zh-cn/user-guide/graalvm/overview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/zh-cn/user-guide/graalvm/quick-start.md": {
	id: "2022/zh-cn/user-guide/graalvm/quick-start.md";
  slug: "2022/zh-cn/user-guide/graalvm/quick-start";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/zh-cn/user-guide/nacos/advanced-guide.md": {
	id: "2022/zh-cn/user-guide/nacos/advanced-guide.md";
  slug: "2022/zh-cn/user-guide/nacos/advanced-guide";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/zh-cn/user-guide/nacos/overview.md": {
	id: "2022/zh-cn/user-guide/nacos/overview.md";
  slug: "2022/zh-cn/user-guide/nacos/overview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/zh-cn/user-guide/nacos/quick-start.md": {
	id: "2022/zh-cn/user-guide/nacos/quick-start.md";
  slug: "2022/zh-cn/user-guide/nacos/quick-start";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/zh-cn/user-guide/rocketmq/advanced-guide.md": {
	id: "2022/zh-cn/user-guide/rocketmq/advanced-guide.md";
  slug: "2022/zh-cn/user-guide/rocketmq/advanced-guide";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/zh-cn/user-guide/rocketmq/overview.md": {
	id: "2022/zh-cn/user-guide/rocketmq/overview.md";
  slug: "2022/zh-cn/user-guide/rocketmq/overview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/zh-cn/user-guide/rocketmq/quick-start.md": {
	id: "2022/zh-cn/user-guide/rocketmq/quick-start.md";
  slug: "2022/zh-cn/user-guide/rocketmq/quick-start";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/zh-cn/user-guide/seata/advanced-guide.md": {
	id: "2022/zh-cn/user-guide/seata/advanced-guide.md";
  slug: "2022/zh-cn/user-guide/seata/advanced-guide";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/zh-cn/user-guide/seata/overview.md": {
	id: "2022/zh-cn/user-guide/seata/overview.md";
  slug: "2022/zh-cn/user-guide/seata/overview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/zh-cn/user-guide/seata/quick-start.md": {
	id: "2022/zh-cn/user-guide/seata/quick-start.md";
  slug: "2022/zh-cn/user-guide/seata/quick-start";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/zh-cn/user-guide/sentinel/advanced-guide.md": {
	id: "2022/zh-cn/user-guide/sentinel/advanced-guide.md";
  slug: "2022/zh-cn/user-guide/sentinel/advanced-guide";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/zh-cn/user-guide/sentinel/overview.md": {
	id: "2022/zh-cn/user-guide/sentinel/overview.md";
  slug: "2022/zh-cn/user-guide/sentinel/overview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/zh-cn/user-guide/sentinel/quick-start.md": {
	id: "2022/zh-cn/user-guide/sentinel/quick-start.md";
  slug: "2022/zh-cn/user-guide/sentinel/quick-start";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/zh-cn/user-guide/sidecar/advanced-guide.md": {
	id: "2022/zh-cn/user-guide/sidecar/advanced-guide.md";
  slug: "2022/zh-cn/user-guide/sidecar/advanced-guide";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/zh-cn/user-guide/sidecar/overview.md": {
	id: "2022/zh-cn/user-guide/sidecar/overview.md";
  slug: "2022/zh-cn/user-guide/sidecar/overview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"2022/zh-cn/user-guide/sidecar/quick-start.md": {
	id: "2022/zh-cn/user-guide/sidecar/quick-start.md";
  slug: "2022/zh-cn/user-guide/sidecar/quick-start";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"latest/en/what-is-nacos.md": {
	id: "latest/en/what-is-nacos.md";
  slug: "latest/en/what-is-nacos";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"latest/zh-cn/what-is-nacos.md": {
	id: "latest/zh-cn/what-is-nacos.md";
  slug: "latest/zh-cn/what-is-nacos";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
};
"download": {
};

	};

	type DataEntryMap = {
		"i18n": {
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content/config.js");
}
