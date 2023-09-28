import { Form, Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

const MonthYearFilterForm = ({
	selectedMonth,
	selectedYear,
	setSelectedMonth,
	setSelectedYear,
	searchResultCount,
	months,
	years,
	filterPosts,
}) => {
	return (
		<Form style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
			<Form.Group>
				<Form.Label className={'mt-2'}>Month</Form.Label>
				<Form.Control
					as={'select'}
					value={selectedMonth}
					onChange={e => setSelectedMonth(e.target.value)}
				>
					<option value={''}>All</option>
					{months.map((month, index) => (
						<option key={index} value={month}>
							{month}
						</option>
					))}
				</Form.Control>
			</Form.Group>
			<Form.Group>
				<Form.Label className={'mt-2'}>Year</Form.Label>
				<Form.Control
					as={'select'}
					value={selectedYear}
					onChange={e => setSelectedYear(e.target.value)}
				>
					<option value={''}>All</option>
					{years.map((year, index) => (
						<option key={index} value={year}>
							{year}
						</option>
					))}
				</Form.Control>
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
MonthYearFilterForm.propTypes = {
	selectedMonth: PropTypes.string.isRequired,
	selectedYear: PropTypes.string.isRequired,
	setSelectedMonth: PropTypes.func.isRequired,
	setSelectedYear: PropTypes.func.isRequired,
	searchResultCount: PropTypes.number.isRequired,
	months: PropTypes.arrayOf(PropTypes.string).isRequired,
	years: PropTypes.arrayOf(PropTypes.number).isRequired,
	filterPosts: PropTypes.func,
};

export default MonthYearFilterForm;
