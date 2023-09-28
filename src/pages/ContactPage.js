import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import FormInput from '../components/FormInput';
import { initialFormData, validations } from '../helpers/formConfig';

const ContactPage = () => {
	const [formData, setFormData] = useState(initialFormData);
	const [validated, setValidated] = useState(false);
	const [showAlert, setShowAlert] = useState(false);

	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = e => {
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.stopPropagation();
			setValidated(true);
		} else {
			setShowAlert(true);
			setFormData(initialFormData);
			setValidated(false);
		}
		e.preventDefault();
	};

	return (
		<div className={'form-container'}>
			{showAlert && (
				<Alert className={'text-center'} variant={'success'}>
					Thank you for filling out the contact form. I&apos;ll get back to you soon.
				</Alert>
			)}
			<Form
				style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}
				noValidate
				validated={validated}
				onSubmit={handleSubmit}
			>
				<FormInput
					type={'text'}
					label={'Name/Nickname'}
					placeholder={'Enter name or nickname'}
					name={'name'}
					validation={validations.name}
					value={formData.name}
					onChange={handleChange}
				/>
				<FormInput
					type={'email'}
					label={'Email address'}
					placeholder={'Enter email'}
					name={'email'}
					validation={validations.email}
					value={formData.email}
					onChange={handleChange}
				/>
				<FormInput
					type={'textarea'}
					label={'Message'}
					placeholder={'Please write me a message with at least 20 characters.'}
					name={'message'}
					validation={validations.message}
					value={formData.message}
					onChange={handleChange}
				/>
				<Button className={'mb-4'} variant={'primary'} type={'submit'}>
					Send
				</Button>
			</Form>
		</div>
	);
};

export default ContactPage;
