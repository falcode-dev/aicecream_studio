// @ts-check

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// GitHub Pagesのbaseパスを設定
// リポジトリ名が username.github.io の場合は base: undefined
// それ以外の場合は base: '/repository-name'
const getBasePath = () => {
	if (process.env.BASE_PATH) {
		return process.env.BASE_PATH;
	}
	// 環境変数からリポジトリ名を取得（GitHub Actionsの場合）
	if (process.env.GITHUB_REPOSITORY) {
		const repoName = process.env.GITHUB_REPOSITORY.split('/')[1];
		// username.github.io の場合は base を設定しない
		if (repoName.endsWith('.github.io')) {
			return undefined;
		}
		// それ以外の場合は /repository-name を設定
		return `/${repoName}`;
	}
	return undefined;
};

// https://astro.build/config
export default defineConfig({
	site: process.env.SITE_URL || 'https://example.com',
	base: getBasePath(),
	output: 'static',
	integrations: [
		mdx(),
		react(),
		sitemap({
			changefreq: 'weekly',
			priority: 0.7,
			lastmod: new Date(),
		}),
	],
});
