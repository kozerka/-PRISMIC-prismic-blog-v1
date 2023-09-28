import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePrismicClient } from '@prismicio/react';
import { Card, Row, Col, Button } from 'react-bootstrap';

function Aside() {
	const [categories, setCategories] = useState([]);
	const client = usePrismicClient();

	useEffect(() => {
		client.getByType('category').then(response => {
			const categoryData = response.results.map(doc => {
				return {
					id: doc.id,
					name: doc.data.category_name[0].text,
				};
			});
			setCategories(categoryData);
		});
	}, [client]);
	function toUrlFriendlyString(str) {
		if (!str) return '';
		return str
			.trim()
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-');
	}

	return (
		<div className={'d-flex align-items-center justify-content-center'}>
			<Card className={'d-inline-block align-items-center'}>
				<Card.Header style={{ textAlign: 'center' }}>Categories</Card.Header>
				<Card.Body>
					<Row className={'justify-content-center'}>
						{categories.map(category => (
							<Col key={category.id} xs={'auto'}>
								<Button
									className={'m-1'}
									variant={'secondary'}
									as={Link}
									size={'sm'}
									to={`/category/${toUrlFriendlyString(category.name)}`}
								>
									{category.name}
								</Button>
							</Col>
						))}
					</Row>
				</Card.Body>
			</Card>
		</div>
	);
}

export default Aside;
