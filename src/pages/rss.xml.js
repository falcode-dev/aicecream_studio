import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE, categoryToSlug } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: post.data.category 
				? `${import.meta.env.BASE_URL}blog/${categoryToSlug(post.data.category)}/${post.id}/`
				: `${import.meta.env.BASE_URL}blog/${post.id}/`,
		})),
	});
}
