import * as prismic from '@prismicio/client';

export const repositoryName = 'kozerka-blog';
export const client = prismic.createClient(repositoryName, {
	accessToken: '',
	routes: [],
});
