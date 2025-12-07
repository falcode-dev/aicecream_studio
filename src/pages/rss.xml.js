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
				? `/blog/${categoryToSlug(post.data.category)}/${post.id}/`
				: `/blog/${post.id}/`,
		})),
	});
}
