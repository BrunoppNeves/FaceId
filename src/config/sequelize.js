const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
console.log(process.env.DB_USERNAME);
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: "172.27.0.2",
  port: "3306",
  dialect: "mysql",
});

sequelize
  .query("CREATE DATABASE IF NOT EXISTS atenas;")
  .then(() => {
    // código para iniciar o servidor Express
  })
  .catch((err) => {
    console.error("Erro ao criar o banco de dados:", err);
  });

module.exports = sequelize;
