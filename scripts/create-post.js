#!/usr/bin/env node

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');
const blogDir = join(rootDir, 'src', 'content', 'blog');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function question(query) {
	return new Promise((resolve) => {
		rl.question(query, resolve);
	});
}

function slugify(text) {
	return text
		.toString()
		.toLowerCase()
		.trim()
		.replace(/\s+/g, '-')
		.replace(/[^\w\-]+/g, '')
		.replace(/\-\-+/g, '-')
		.replace(/^-+/, '')
		.replace(/-+$/, '');
}

function formatDate(date) {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	return `${year}-${month}-${day}`;
}

async function main() {
	console.log('\n📝 ブログ記事を作成します\n');

	// タイトル
	const title = await question('タイトル: ');
	if (!title.trim()) {
		console.log('❌ タイトルは必須です');
		rl.close();
		process.exit(1);
	}

	// スラッグ
	const slugInput = await question(`スラッグ (Enterで自動生成: ${slugify(title)}): `);
	const slug = slugInput.trim() || slugify(title);

	// 説明
	const description = await question('説明: ');

	// カテゴリ
	console.log('\nカテゴリを選択してください:');
	console.log('1. life (価値観・メンタル・働き方・人生観)');
	console.log('2. career (転職・キャリア戦略・副業戦略)');
	console.log('3. engineering (プログラミング全般・エンジニア系Tips)');
	console.log('4. microsoft (Microsoft製品・サービス・働き方)');
	console.log('5. typescript (TypeScript)');
	const categoryChoice = await question('カテゴリ (1-5): ');
	const categories = {
		'1': 'life',
		'2': 'career',
		'3': 'engineering',
		'4': 'microsoft',
		'5': 'typescript',
	};
	const category = categories[categoryChoice.trim()] || 'life';

	// タグ
	const tagsInput = await question('タグ (カンマ区切り): ');
	const tags = tagsInput
		.split(',')
		.map((tag) => tag.trim())
		.filter((tag) => tag.length > 0);

	// 公開日
	const dateInput = await question(`公開日 (Enterで今日: ${formatDate(new Date())}): `);
	const pubDate = dateInput.trim() || formatDate(new Date());

	// ファイル形式
	const formatChoice = await question('ファイル形式 (1: Markdown, 2: MDX) [1]: ');
	const format = formatChoice.trim() === '2' ? 'mdx' : 'md';

	// 公開状態
	const publicChoice = await question('公開状態 (y: 公開, N: 下書き) [y]: ');
	const isPublic = publicChoice.trim().toLowerCase() !== 'n';

	// ファイル名
	const filename = `${slug}.${format}`;
	const filepath = join(blogDir, filename);

	// ファイルが既に存在するかチェック
	if (existsSync(filepath)) {
		const overwrite = await question(`ファイル ${filename} は既に存在します。上書きしますか? (y/N): `);
		if (overwrite.toLowerCase() !== 'y') {
			console.log('❌ キャンセルしました');
			rl.close();
			process.exit(0);
		}
	}

	// フロントマター生成
	const frontmatter = `---
title: '${title.replace(/'/g, "''")}'
slug: '${slug}'
description: '${description.replace(/'/g, "''")}'
pubDate: '${pubDate}'
category: '${category}'
tags: [${tags.map((tag) => `'${tag.replace(/'/g, "''")}'`).join(', ')}]
public: ${isPublic}
---

ここに本文を記述してください。

`;

	// ファイル書き込み
	writeFileSync(filepath, frontmatter, 'utf-8');

	console.log(`\n✅ ブログ記事を作成しました: ${filepath}`);
	console.log(`\n📝 編集してください: ${filepath}\n`);

	rl.close();
}

main().catch((error) => {
	console.error('❌ エラーが発生しました:', error);
	rl.close();
	process.exit(1);
});
