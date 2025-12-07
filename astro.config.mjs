// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// GitHub Pagesのベースパス
// リポジトリ名がURLに含まれる場合: '/repository-name/'
// カスタムドメインの場合: '/'
const base = '/aicecream_studio/';

// https://astro.build/config
export default defineConfig({
	site: 'https://falcode-dev.github.io',
	base: base,
	integrations: [mdx(), sitemap()],
});
