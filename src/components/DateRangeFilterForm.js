import { Form, Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

const DateRangeFilterForm = ({
	startDate,
	endDate,
	setStartDate,
	setEndDate,
	searchResultCount,
	filterPosts,
}) => {
	return (
		<Form style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
			<Form.Group>
				<Form.Label>From</Form.Label>
				<Form.Control
					type={'date'}
					value={startDate}
					onChange={e => setStartDate(e.target.value)}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Label className={'mt-2'}>To</Form.Label>
				<Form.Control type={'date'} value={endDate} onChange={e => setEndDate(e.target.value)} />
			</Form.Group>

			<Alert
				className={'my-3 text-center'}
				variant={searchResultCount === 0 ? 'warning' : 'success'}
			>
				Found {searchResultCount} post(s) based on the selected month and year.
			</Alert>
		</Form>
	);
};
DateRangeFilterForm.propTypes = {
	startDate: PropTypes.string.isRequired,
	endDate: PropTypes.string.isRequired,
	setStartDate: PropTypes.func.isRequired,
	setEndDate: PropTypes.func.isRequired,
	searchResultCount: PropTypes.number.isRequired,
	filterPosts: PropTypes.func,
};
export default DateRangeFilterForm;
