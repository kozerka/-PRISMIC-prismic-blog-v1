import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';

const menuItems = [
	{ text: 'Home', href: '/' },
	{ text: 'About', href: '/about' },
	{ text: 'Archive', href: '/archive' },
	{ text: 'Contact', href: '/contact' },
];
const Header = () => {
	const location = useLocation();
	return (
		<Navbar expand={'lg'} bg={'light'} variant={'light'} fixed={'top'} className={'border-bottom'}>
			<Container>
				<Navbar.Toggle aria-controls={'basic-navbar-nav'} className={'ml-auto'} />
				<Navbar.Collapse id={'basic-navbar-nav'}>
					<Nav className={'mx-auto'}>
						{menuItems.map((item, index) => (
							<NavLink
								to={item.href}
								key={index}
								className={`nav-link ${location.pathname === item.href ? 'active' : ''}`}
							>
								{item.text}
							</NavLink>
						))}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
