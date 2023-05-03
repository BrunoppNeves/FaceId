const { where } = require("sequelize");
const History = require("../models/history");
const Users = require("../models/users");
module.exports = {
  create: async (req, res) => {
    const { action, userId } = req.body;
    const date = new Date().toLocaleDateString("pt-BR", {
      timeZone: "America/Sao_Paulo",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });
    try {
      const newHistory = await History.create({
        action: action,
        iduser: userId,
        date: date,
      });
      return res.status(201).json(newHistory);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  list: async (req, res) => {
    try {
      //const history = await History.findAll();
      const history = await History.findAll({ include: Users });
      //const history = await Users.findAll({ include: History });
      return res.status(200).json(history);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  findOne: async (req, res) => {
    const { id } = req.params;
    try {
      const history = await History.findAll({ where: { iduser: id } });
      return res.status(200).json(history);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  delete: async (req, res) => {
    try {
      const history = await History.destroy({ where: {} });
      return res.status(200).json(history);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
};
