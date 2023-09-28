import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';
import ArchivePage from './pages/ArchivePage';
import CategoryPage from './pages/CategoryPage';
import FullPost from './components/FullPost';

const AppRoutes = () => (
	<Routes>
		<Route path={'/about'} element={<AboutPage />} />
		<Route path={'/archive'} element={<ArchivePage />} />
		<Route path={'/contact'} element={<ContactPage />} />
		<Route path={'/post/:uid'} element={<FullPost />} />
		<Route path={'/category/:categoryName'} element={<CategoryPage />} />
		<Route path={'/page/:page'} element={<HomePage />} />
		<Route path={'/'} element={<HomePage />} />
		<Route path={'*'} element={<NotFound />} />
	</Routes>
);

export default AppRoutes;
