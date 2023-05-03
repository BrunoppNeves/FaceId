const Sequelize = require("sequelize");
const sequelize = require("../config/sequelize");
const Users = require("./users");
const History = sequelize.define("history", {
  //id do histórico
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    autogenerate: true,
    primaryKey: true,
    allowNull: false,
  },
  //se o usuario entrou ou saiu
  action: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },

  //que horas ele entrou ou saiu
  date: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

//pertence a um usuario
History.belongsTo(Users, {
  constraint: true,
  foreignKey: "iduser",
});

Users.hasMany(History, {
  foreignKey: "iduser",
  onDelete: "cascade",
  hooks: true,
});

module.exports = History;
