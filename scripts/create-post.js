#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// コマンドライン引数を取得
const args = process.argv.slice(2);

if (args.length === 0) {
	console.error('エラー: 記事のファイル名を指定してください');
	console.log('使用例: npm run create-post my-new-article');
	process.exit(1);
}

const slug = args[0];
const blogDir = path.join(__dirname, '../src/content/blog');
const filePath = path.join(blogDir, `${slug}.md`);

// ファイルが既に存在するかチェック
if (fs.existsSync(filePath)) {
	console.error(`エラー: ファイル ${slug}.md は既に存在します`);
	process.exit(1);
}

// 現在の日付を取得
const today = new Date();
const dateStr = today.toISOString().split('T')[0];

// テンプレート
const template = `---
title: ${slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
description: 記事の説明をここに記入してください
pubDate: ${dateStr}
heroImage: ../../assets/blog-placeholder-1.jpg
---

# ${slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}

ここに記事の内容を記入してください。

## 見出し

本文をここに記入してください。

`;

// ディレクトリが存在しない場合は作成
if (!fs.existsSync(blogDir)) {
	fs.mkdirSync(blogDir, { recursive: true });
}

// ファイルを作成
fs.writeFileSync(filePath, template, 'utf-8');

console.log(`✅ 記事を作成しました: ${filePath}`);
console.log(`📝 編集してください: src/content/blog/${slug}.md`);
console.log(`🌐 プレビュー: http://localhost:4321/blog/${slug}/`);

