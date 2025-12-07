# Astro Starter Kit: Blog

```sh
npm create astro@latest -- --template blog
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 📝 ブログ記事の作成方法

### コマンドで新規記事を作成する（推奨）

以下のコマンドで新しい記事を作成できます：

```bash
npm run create-post 記事のスラッグ名
```

例：
```bash
npm run create-post my-new-article
```

このコマンドを実行すると、`src/content/blog/my-new-article.md` が作成され、基本的なテンプレートが自動的に記入されます。

### 手動で新しい記事を作成する

1. `src/content/blog/` ディレクトリに新しい `.md` または `.mdx` ファイルを作成します
2. ファイル名が記事のURLスラッグになります（例: `my-article.md` → `/blog/my-article/`）
3. フロントマター（ファイルの先頭の `---` で囲まれた部分）に必要な情報を記入します

### フロントマターの項目

```yaml
---
title: 記事のタイトル（必須）
description: 記事の説明（必須）
pubDate: 2024-01-15（必須、YYYY-MM-DD形式）
updatedDate: 2024-01-16（任意、YYYY-MM-DD形式）
heroImage: ../../assets/blog-placeholder-1.jpg（任意、画像のパス）
---
```

### プレビューと編集

1. 開発サーバーを起動：
   ```bash
   npm run dev
   ```

2. ブラウザで `http://localhost:4321` にアクセス

3. 記事を編集すると、開発サーバーが自動的に再読み込みされ、変更がすぐに反映されます

4. 個別の記事は `/blog/[記事のファイル名]/` でアクセスできます

### サンプル記事

`src/content/blog/sample-post.md` を参考にしてください。このファイルをコピーして新しい記事を作成できます。

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
