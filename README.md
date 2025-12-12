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

## 🔍 SEO対策

このサイトは2025年のGoogle SEOガイドラインに準拠した実装が含まれています。

### 実装済みのSEO対策

#### 1. 構造化データ（JSON-LD）
- ✅ **BlogPosting**: 各記事ページに実装
- ✅ **Organization**: サイト全体の構造化データ
- ✅ **Person**: 著者情報（プロフィールページ）
- ✅ **BreadcrumbList**: パンくずリスト（全ページ）
- ✅ **CollectionPage**: カテゴリ・タグページ

#### 2. メタタグ
- ✅ `title`, `description`の最適化
- ✅ `canonical` URLの設定
- ✅ Open Graph（OG）タグ
- ✅ Twitter Card
- ✅ `robots`メタタグ（index/follow設定）
- ✅ `og:locale`（日本語設定）

#### 3. テクニカルSEO
- ✅ `robots.txt`の自動生成（動的）
- ✅ XMLサイトマップ（自動生成・更新）
- ✅ RSSフィード
- ✅ セキュリティヘッダ（`_headers`ファイル）
- ✅ パンくずリスト（全ページ）

#### 4. Core Web Vitals対策
- ✅ 画像の最適化（WebP形式、遅延読み込み）
- ✅ フォントのpreload
- ✅ 画像のwidth/height指定（CLS対策）
- ✅ クリティカルCSSの最適化

#### 5. E-E-A-T対策
- ✅ プロフィールページの充実
- ✅ プライバシーポリシー・免責事項ページ
- ✅ 著者情報の明示
- ✅ 実体験・専門性の表現

### Googleアナリティクス・サーチコンソール設定

#### Googleアナリティクス
1. Googleアナリティクスで測定IDを取得（例: `G-XXXXXXXXXX`）
2. 環境変数に設定：
   ```bash
   # .env ファイルに追加
   PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
3. 自動的に全ページにGoogleアナリティクスが埋め込まれます

#### Google Search Console
1. [Google Search Console](https://search.google.com/search-console)にアクセス
2. プロパティを追加（URLプレフィックスまたはドメイン）
3. 所有権の確認（HTMLタグまたはDNS設定）
4. サイトマップを送信：`https://your-site.com/sitemap-index.xml`

### 追加設定が必要な項目

1. **サイトURLの設定**
   - `src/consts.ts`の`SITE_URL`を実際のドメインに変更
   - `astro.config.mjs`の`site`も同様に更新

2. **著者情報の更新**
   - `src/consts.ts`の`AUTHOR_NAME`と`AUTHOR_EMAIL`を更新

3. **SNSリンクの追加**
   - `src/components/BaseHead.astro`の`organizationStructuredData.sameAs`にSNSリンクを追加
   - `src/pages/profile.astro`の`personStructuredData.sameAs`にも追加

4. **robots.txtのサイトマップURL**
   - `src/pages/robots.txt.ts`の`SITE_URL`を実際のドメインに更新

### SEOチェックリスト

- [ ] サイトURLを実際のドメインに設定
- [ ] 著者情報を更新
- [ ] SNSリンクを追加
- [ ] Googleアナリティクスを設定
- [ ] Google Search Consoleに登録
- [ ] サイトマップを送信
- [ ] 構造化データをテスト（[Google構造化データテストツール](https://search.google.com/test/rich-results)）
- [ ] Core Web Vitalsを確認（[PageSpeed Insights](https://pagespeed.web.dev/)）

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
