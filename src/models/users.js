const { format } = require("path");
const Sequelize = require("sequelize");
const sequelize = require("../config/sequelize");
const Users = sequelize.define(
  "Users",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      autogenerate: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    matricula: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    escolaridade: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    // curso: {
    //   type: DataTypes.ARRAY(DataTypes.STRING),
    //   allowNull: false,
    // },
    aniversario: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    admissao: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    competencia: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    alocacao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    time: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    vinculo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    gitlab: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    telefone: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    status: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
  },
  {
    tableName: "users",
  }
);

module.exports = Users;
