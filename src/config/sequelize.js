const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

sequelize
  .sync()
  .then(async () => {
    console.log("Database & tables created!");
  })
  .catch((error) => {
    console.log("Error creating database & tables:", error);
  });

module.exports = sequelize;
