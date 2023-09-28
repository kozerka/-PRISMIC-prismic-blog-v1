import PropTypes from 'prop-types';
import { Pagination, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CustomPagination = ({ totalPages, currentPage }) => {
	const navigate = useNavigate();

	const handleChange = (event, value) => {
		navigate(`/page/${value}`);
	};

	return (
		totalPages > 1 && (
			<Container fluid className={'d-flex justify-content-center'}>
				<Pagination>
					{[...Array(totalPages).keys()].map(pageNumber => (
						<Pagination.Item
							className={'custom-warning custom-font custom-hover'}
							key={pageNumber}
							active={pageNumber + 1 === currentPage}
							onClick={() => handleChange(null, pageNumber + 1)}
						>
							{pageNumber + 1}
						</Pagination.Item>
					))}
				</Pagination>
			</Container>
		)
	);
};
CustomPagination.propTypes = {
	totalPages: PropTypes.number.isRequired,
	currentPage: PropTypes.number.isRequired,
};

export default CustomPagination;
