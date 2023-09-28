import { useSinglePrismicDocument } from '@prismicio/react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import getPrismicAboutData from '../helpers/getPrismicAboutData';
const AboutPage = () => {
	const [aboutPage] = useSinglePrismicDocument('about');
	const { title, text, imageSrc, imageAlt } = getPrismicAboutData(aboutPage);
	return (
		<Container fluid className={'h-100'}>
			<Row className={'justify-content-center align-items-center h-100'}>
				<Col xs={12} md={6} className={'text-center'}>
					<div className={'mb-4'}>
						<Image src={imageSrc} alt={imageAlt} className={'about-img'} />
					</div>
					<h1 className={'about-title'}>{title}</h1>
					<p className={'about-text'}>{text}</p>
				</Col>
			</Row>
		</Container>
	);
};

export default AboutPage;
