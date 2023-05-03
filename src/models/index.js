const sequelize = require("../config/sequelize");
const Sequelize = require("sequelize");

const Users = require("./users");
const History = require("./history");

const users = new Users(sequelize, Sequelize.DataTypes);

const db = {
  users,
  sequelize,
  History,
};

module.exports = db;
