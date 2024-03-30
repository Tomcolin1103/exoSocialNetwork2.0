const yup = require("yup");

const registerValidator = yup.object({
	firstname: yup.string().required(),
	lastname: yup.string().required(),
	email: yup.string().email().required(),
	password: yup.string().required(),
	pseudo: yup.string().required(),
});

module.exports = registerValidator;
