import { Link } from 'react-router-dom';
const NotFound = () => {
	return (
		<div className={'d-flex align-items-center justify-content-center'}>
			<div className={'text-center'}>
				<h1 className={'display-1 fw-bold pb-4'}>404</h1>
				<p className={'fs-3'}>
					{' '}
					<span className={'text-danger'}>Opps!</span> Page not found.
				</p>
				<p className={'lead mb-5'}>The page you’re looking for doesn’t exist.</p>
				<Link className={'btn btn-warning '} to={'/'}>
					Return to homepage
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
