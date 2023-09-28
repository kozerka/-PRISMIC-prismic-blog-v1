import PropTypes from 'prop-types';
import { usePost, PostProvider } from '../context/PostContext';
import Loading from './Loading';
import getPrismicPostData from '../helpers/getPrismicPostData';
import PostCard from './PostCard';

function InnerPostComponent() {
	const { prismicPost, categories } = usePost();
	const postData = getPrismicPostData(prismicPost);

	if (!prismicPost) {
		return <Loading />;
	}

	const descriptionComponent = <div className={'mt-2'}>{postData.description}</div>;

	return (
		<PostCard
			postData={postData}
			categories={categories}
			footerLink={`/post/${postData.slug}`}
			footerText={'Read More'}
			contentComponent={descriptionComponent}
		/>
	);
}

function Post({ uid }) {
	return (
		<PostProvider uid={uid}>
			<InnerPostComponent />
		</PostProvider>
	);
}

Post.propTypes = {
	uid: PropTypes.string.isRequired,
};

export default Post;
