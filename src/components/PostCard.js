import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
function PostCard({ postData, categories, footerLink, footerText, contentComponent }) {
	return (
		<Col xs={12} md={12} className={'paddingNull'}>
			<Card className={'mb-4 fixed-height-card'}>
				<Card.Img
					variant={'top'}
					src={postData.image}
					alt={postData.imageLabel}
					style={{ height: '240px', width: '100%', objectFit: 'cover' }}
				/>
				<Card.Body>
					<Card.Title>{postData.title}</Card.Title>
					<Card.Text>
						<small className={'text-muted'}>
							{postData.date} • {postData.author}
						</small>
					</Card.Text>
					<div>
						<Card.Text>
							<strong>Categories</strong>
						</Card.Text>
						<div className={'mb-2'}>
							{categories.map((categoryName, index) => (
								<Link key={categoryName} to={`/category/${categoryName}`}>
									<Button
										key={index}
										style={{ marginRight: '8px' }}
										variant={'secondary'}
										size={'sm'}
									>
										{categoryName}
									</Button>
								</Link>
							))}
						</div>
						<div>{contentComponent}</div>
					</div>
				</Card.Body>
				<Card.Footer>
					<Button variant={'primary'} href={footerLink}>
						{footerText}
					</Button>
				</Card.Footer>
			</Card>
		</Col>
	);
}
PostCard.propTypes = {
	postData: PropTypes.shape({
		image: PropTypes.string.isRequired,
		imageLabel: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired,
		author: PropTypes.string.isRequired,
	}).isRequired,
	categories: PropTypes.arrayOf(PropTypes.string).isRequired,
	footerLink: PropTypes.string.isRequired,
	footerText: PropTypes.string.isRequired,
	contentComponent: PropTypes.node,
};

export default PostCard;
