import type { APIRoute } from 'astro';

const SITE_URL = import.meta.env.SITE_URL || 'https://example.com';

export const GET: APIRoute = () => {
	const robotsTxt = `User-agent: *
Allow: /

# サイトマップ
Sitemap: ${SITE_URL}/sitemap-index.xml

# 検索結果ページなどはインデックスしない
Disallow: /search
Disallow: /*?*
`;

	return new Response(robotsTxt, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	});
};
