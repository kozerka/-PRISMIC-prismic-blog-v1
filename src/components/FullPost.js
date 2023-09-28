import PropTypes from 'prop-types';
import { usePost, PostProvider } from '../context/PostContext';
import { RichText } from 'prismic-reactjs';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import getPrismicPostData from '../helpers/getPrismicPostData';
import PostCard from './PostCard';

function InnerPostComponent() {
	const { prismicPost, categories } = usePost();
	const postData = getPrismicPostData(prismicPost);

	if (!prismicPost) {
		return <Loading />;
	}

	const longTextComponent = <RichText render={postData.longText} />;

	return (
		<PostCard
			postData={postData}
			categories={categories}
			footerLink={`/`}
			footerText={'Back to main page'}
			contentComponent={longTextComponent}
		/>
	);
}

function FullPost() {
	const { uid } = useParams();
	return (
		<PostProvider uid={uid}>
			<InnerPostComponent />
		</PostProvider>
	);
}

FullPost.propTypes = {
	uid: PropTypes.string,
};

export default FullPost;
