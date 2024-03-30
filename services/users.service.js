const sql = require("mssql");
const sqlConfig = require("../config/database");
const bcrypt = require("bcrypt");

const usersService = {
	register: async (data) => {
		try {
			const { email, hashedPassword, pseudo, firstname, lastname } = data;
			await sql.connect(sqlConfig);

			const request = new sql.Request();

			const userExists = await request
				.input("email", sql.NVarChar, email)
				.query("SELECT * FROM Users WHERE email = @email");

			if (userExists.recordset.length > 0) {
				throw new Error("An account already exists with this email");
			}

			const insertNewUser = await request
				.input("firstname", sql.NVarChar, firstname)
				.input("lastname", sql.NVarChar, lastname)
				.input("hashedPassword", sql.NVarChar, hashedPassword)
				.input("pseudo", sql.NVarChar, pseudo)
				.query(`INSERT INTO Users (firstname, lastname, email, password, pseudo)
                        VALUES (@firstname, @lastname, @email, @hashedPassword, @pseudo)`);

			return insertNewUser;
		} catch (err) {
			console.error(err);
			throw err;
		}
	},
};

module.exports = usersService;
