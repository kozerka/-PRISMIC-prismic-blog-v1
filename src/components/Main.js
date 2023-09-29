import Post from './Post';
import CustomPagination from './CustomPagination';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { computePagination } from '../helpers/paginationRules';

const Main = ({ posts, path = '', page }) => {
	const {
		paginatedItems: paginatedPosts,
		totalPages,
		currentPage,
	} = computePagination(posts, page);
	return (
		<Container fluid>
			<Row>
				{paginatedPosts.map((singlePost) => (
					<Col xs={12} md={6} key={singlePost.uid}>
						<Post uid={singlePost.uid} />
					</Col>
				))}
			</Row>
			<CustomPagination totalPages={totalPages} currentPage={currentPage} />
		</Container>
	);
};
Main.propTypes = {
	posts: PropTypes.arrayOf(
		PropTypes.shape({
			uid: PropTypes.string.isRequired,
		})
	).isRequired,
	path: PropTypes.string,
	page: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Main;
