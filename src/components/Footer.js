import { Container, Row, Col } from 'react-bootstrap';
import { BsGithub } from 'react-icons/bs';
const Footer = () => {
	const copyright = String.fromCodePoint(0x00a9);
	const currentYear = new Date().getFullYear();
	return (
		<Container fluid className={'p-3 bg-light text-center border-top'}>
			<Container>
				<Row>
					<Col className={'text-center footer'}>
						Copyright {copyright} {currentYear} All rights reserved | This template is made by
						<a
							className={'text-decoration-none m-2 text-dark'}
							href={'https://github.com/kozerka'}
							target={'_blank'}
							rel={'noreferrer'}
						>
							<BsGithub /> kozerka
						</a>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default Footer;
