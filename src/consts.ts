// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'aice cream studio';
export const SITE_DESCRIPTION = 'aice cream studio のウェブサイトへようこそ';

// カテゴリ名とスラッグのマッピング
export const CATEGORY_SLUGS: Record<string, string> = {
	'Microsoft Tech Blog': 'microsoft_tech_blog',
	'のんびり生きるための副業': 'nonbiri_ikiru_tame_no_fukugyo',
};

// カテゴリ名をスラッグに変換
export function categoryToSlug(category: string): string {
	return CATEGORY_SLUGS[category] || category.toLowerCase().replace(/\s+/g, '_').replace(/[^\w_]/g, '');
}

// スラッグをカテゴリ名に変換
export function slugToCategory(slug: string): string | undefined {
	const entry = Object.entries(CATEGORY_SLUGS).find(([_, s]) => s === slug);
	return entry ? entry[0] : undefined;
}
