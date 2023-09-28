export const initialFormData = {
	name: '',
	email: '',
	message: '',
};

export const validations = {
	name: {
		required: true,
		minLength: 2,
		pattern: '^(?!d+$)[a-zA-Z0-9ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$',
		feedback: 'Please provide a valid name or nickname.',
	},
	email: {
		required: true,
		feedback: 'Please provide a valid email.',
	},
	message: {
		required: true,
		minLength: 20,
		feedback: 'Please provide a message with at least 20 characters.',
	},
};
