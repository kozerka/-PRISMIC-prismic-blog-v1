import { useAllPrismicDocumentsByType } from '@prismicio/react';
import Main from '../components/Main';

import { useParams } from 'react-router-dom';
import Aside from '../components/Aside';
import { Row, Col } from 'react-bootstrap';
const HomePage = () => {
	const { page = 1 } = useParams();

	const [posts = []] = useAllPrismicDocumentsByType('blog_post', {
		orderings: {
			field: 'my.blog_post.date',
			direction: 'desc',
		},
	});

	return (
		<Row>
			<Col md={9} className={'main-content'}>
				{posts && posts.length > 0 && <Main posts={posts} path={'/'} page={parseInt(page, 10)} />}
			</Col>
			<Col md={3} className={'aside'}>
				<Aside />
			</Col>
		</Row>
	);
};
export default HomePage;
