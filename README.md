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

## 🚀 GitHub Pagesへのデプロイ

このプロジェクトはGitHub Actionsを使用してGitHub Pagesに自動デプロイされます。

### セットアップ手順

1. **GitHubリポジトリの設定（重要）**
   - リポジトリのSettings > Pagesに移動
   - **Sourceを「GitHub Actions」に変更**（これが重要です！）
   - 「Deploy from a branch」が選択されていると、Jekyllが実行されてエラーになります

2. **サイトURLの設定**
   - リポジトリ名が`username.github.io`の場合：
     - `astro.config.mjs`の`site`を`https://username.github.io`に更新
   - それ以外の場合（例：`username.github.io/repository-name`）：
     - `astro.config.mjs`の`site`を`https://username.github.io/repository-name`に更新
     - または、リポジトリのSettings > Secrets and variables > Actionsで`SITE_URL`シークレットを設定

3. **デプロイ**
   - `main`ブランチにプッシュすると、自動的にビルドとデプロイが実行されます
   - Actionsタブでデプロイの進行状況を確認できます

### トラブルシューティング

**Jekyllのエラーが出る場合：**
- Settings > PagesでSourceが「GitHub Actions」になっているか確認
- `.nojekyll`ファイルがルートディレクトリに存在するか確認
- GitHub Actionsのワークフローが実行されているか確認（Actionsタブを確認）

### 注意事項

- `.nojekyll`ファイルがルートと`public/`フォルダに含まれているため、Jekyllは無効化されます
- ビルドはGitHub Actionsで自動実行されます
- デプロイには数分かかる場合があります

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
