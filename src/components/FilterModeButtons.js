import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const FilterModeButtons = ({ currentMode, onModeChange }) => {
	return (
		<div className={'text-center mt-3'}>
			<Button
				variant={currentMode === 'date' ? 'secondary' : 'primary'}
				onClick={() => onModeChange('date')}
				className={'m-4'}
			>
				Filter by Date
			</Button>
			<Button
				variant={currentMode === 'monthYear' ? 'secondary' : 'primary'}
				onClick={() => onModeChange('monthYear')}
			>
				Filter by Month & Year
			</Button>
		</div>
	);
};
FilterModeButtons.propTypes = {
	currentMode: PropTypes.oneOf(['date', 'monthYear']).isRequired,
	onModeChange: PropTypes.func.isRequired,
};

export default FilterModeButtons;
