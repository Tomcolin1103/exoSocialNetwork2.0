const usersRouter = require("express").Router();
const usersController = require("../controllers/users.controller");

usersRouter
	.route("/register")
	.get(usersController.getRegister)
	.post(usersController.register);

module.exports = usersRouter;
