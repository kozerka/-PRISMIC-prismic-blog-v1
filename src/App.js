import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes';
import Header from './components/Header';
import HeroImg from './components/HeroImg';
import Footer from './components/Footer';

function App() {
	return (
		<Router>
			<div className={'d-flex flex-column min-vh-100'}>
				<Header />
				<HeroImg />
				<div
					className={
						'd-flex justify-content-center align-items-center mx-auto main-content col-lg-9 flex-grow-1'
					}
				>
					<AppRoutes />
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
