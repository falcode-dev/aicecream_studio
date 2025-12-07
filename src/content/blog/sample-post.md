---
title: サンプル記事
description: これはブログ記事のサンプルです。このテンプレートを参考に新しい記事を作成してください。
pubDate: 2024-01-15
updatedDate: 2024-01-16
heroImage: ../../assets/blog-placeholder-1.jpg
category: Microsoft Tech Blog
# 記事ごとの表示設定（任意、デフォルト値は consts.ts で定義）
# showTOC: true      # 目次を表示（デフォルト: true）
# showSidebar: true  # サイドバーを表示（デフォルト: true）
# showCTA: true      # CTAセクションを表示（デフォルト: true）
---

# サンプル記事

これはブログ記事のサンプルです。このファイルをコピーして、新しい記事を作成することができます。

## 記事の書き方

1. `src/content/blog/` ディレクトリに新しい `.md` または `.mdx` ファイルを作成します
2. ファイル名が記事のURLスラッグになります（例: `my-article.md` → `/blog/my-article/`）
3. フロントマター（ファイルの先頭の `---` で囲まれた部分）に必要な情報を記入します

## フロントマターの項目

- `title`: 記事のタイトル（必須）
- `description`: 記事の説明（必須）
- `pubDate`: 公開日（必須、YYYY-MM-DD形式）
- `updatedDate`: 最終更新日（任意、YYYY-MM-DD形式）
- `heroImage`: ヒーロー画像のパス（任意、`../../assets/` からの相対パス）

### Markdownの書き方

通常のMarkdown記法が使用できます。

- **太字**
- *斜体*
- [リンク](https://example.com)
- リスト項目
- コードブロック

```javascript
console.log('Hello, World!');
```

## プレビュー方法

開発サーバーを起動して、記事をプレビューできます：

```bash
npm run dev
```

ブラウザで `http://localhost:4321/blog/sample-post/` にアクセスすると、この記事を確認できます。

新しい記事を作成したら、開発サーバーが自動的に再読み込みし、すぐにプレビューできます。

