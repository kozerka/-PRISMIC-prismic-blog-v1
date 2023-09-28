import { usePrismicDocumentsByType } from '@prismicio/react';
import { useParams } from 'react-router-dom';
import Post from '../components/Post';
import Aside from '../components/Aside';
import { Row, Col, Container } from 'react-bootstrap';

function CategoryPage() {
	const { categoryName } = useParams();
	const [posts] = usePrismicDocumentsByType('blog_post');

	const filteredPosts =
		posts?.results?.filter(post => {
			return post.data.categories_group?.some(group => {
				const comparisonResult = group.category.slug === categoryName;
				return comparisonResult;
			});
		}) || [];

	return (
		<Container>
			<Row className={'mb-4'}>
				<Col className={'sidebar'}>
					<Aside />
				</Col>
			</Row>
			<Row className={'mb-3'}>
				<Col className={'main-content'}>
					<Row>
						{filteredPosts.length > 0 ? (
							filteredPosts.map(post => (
								<Col xs={12} md={6} key={post.uid}>
									<Post uid={post.uid} />
								</Col>
							))
						) : (
							<Col xs={12}>
								<p>Wait for the post in the future ....</p>
							</Col>
						)}
					</Row>
				</Col>
			</Row>
		</Container>
	);
}

export default CategoryPage;
