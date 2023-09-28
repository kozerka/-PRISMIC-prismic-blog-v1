import { useEffect, useState, useContext, createContext } from 'react';
import { usePrismicClient, usePrismicDocumentByUID } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';
import PropTypes from 'prop-types';

// Tworzenie kontekstu dla postu
const PostContext = createContext();

export function PostProvider({ uid, children }) {
	const [prismicPost] = usePrismicDocumentByUID('blog_post', uid);
	const categoryIds =
		prismicPost?.data?.categories_group?.map(category => category.category.id) || [];
	const categories = usePrismicCategoriesByIds(categoryIds);

	return (
		<PostContext.Provider value={{ prismicPost, categories }}>{children}</PostContext.Provider>
	);
}

export function usePost() {
	const context = useContext(PostContext);
	if (!context) {
		throw new Error('usePost must be used within a PostProvider');
	}
	return context;
}

function usePrismicCategoriesByIds(ids) {
	const client = usePrismicClient();
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		if (ids && ids.length > 0) {
			client.getByIDs(ids).then(response => {
				const categoryNames = response.results.map(doc => prismicH.asText(doc.data.category_name));
				setCategories(categoryNames);
			});
		}
	}, [ids, client]);

	return categories;
}
PostProvider.propTypes = {
	uid: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};
export default PostContext;
