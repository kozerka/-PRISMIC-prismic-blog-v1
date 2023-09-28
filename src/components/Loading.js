import Spinner from 'react-bootstrap/Spinner';

function Loading() {
	return (
		<div
			className={'d-flex align-items-center justify-content-center'}
			style={{ minHeight: '200px', minWidth: '200px' }}
		>
			<div>
				<Spinner animation={'border'} role={'status'} />
				<h2>Loading...</h2>
			</div>
		</div>
	);
}

export default Loading;
