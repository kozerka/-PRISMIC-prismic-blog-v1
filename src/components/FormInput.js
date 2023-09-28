import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
const FormInput = ({ type, label, placeholder, name, validation, value, onChange }) => (
	<Form.Group className={'mb-3'}>
		<Form.Label>{label}</Form.Label>
		<Form.Control
			type={type}
			placeholder={placeholder}
			name={name}
			required={validation.required}
			minLength={validation.minLength}
			pattern={validation.pattern}
			value={value}
			onChange={onChange}
		/>
		<Form.Control.Feedback type={'invalid'}>{validation.feedback}</Form.Control.Feedback>
	</Form.Group>
);
FormInput.propTypes = {
	type: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	validation: PropTypes.shape({
		required: PropTypes.bool,
		minLength: PropTypes.number,
		pattern: PropTypes.string,
		feedback: PropTypes.string,
	}).isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default FormInput;
