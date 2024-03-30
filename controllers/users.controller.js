const bcrypt = require("bcrypt");
const usersService = require("../services/users.service");
const registerValidator = require("../validators/register.validator");

const usersController = {
	getRegister: (req, res) => {
		res.render("register");
	},
	register: async (req, res) => {
		try {
			const validationResult = await registerValidator.validate(req.body);
			if (validationResult.error) {
				res.status(400).json({ error: validationResult.error });
				return;
			}
			const { email, password, pseudo, firstname, lastname } = validationResult;
			const hashedPassword = bcrypt.hashSync(password, 10);

			const registrationResult = await usersService.register({
				firstname,
				lastname,
				email,
				hashedPassword,
				pseudo,
			});
			if (registrationResult.rowsAffected[0] > 0) {
				res.render("success");
			} else {
				res.status(500).json({ message: "Something went wrong" });
			}
		} catch (err) {
			console.error(err);
			res.sendStatus(500);
		}
	},
};

module.exports = usersController;
