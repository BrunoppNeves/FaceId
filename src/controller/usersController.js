const User = require("../models/users");
const History = require("../models/history");
const fs = require("fs");
const caminho = "/home/bruno/Documentos/Desafio/front-atena/src/assets/Persons/";

module.exports = {
  create: async (req, res) => {
    const {
      name,
      matricula,
      escolaridade,
      aniversario,
      admissao,
      competencia,
      alocacao,
      time,
      vinculo,
      email,
      gitlab,
      telefone,
      status,
    } = req.body;
    try {
      const newUser = await User.create(req.body);
      fs.mkdirSync(`${caminho}${newUser.id}`);
      return res.status(201).json(newUser);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  list: async (req, res) => {
    try {
      const users = await User.findAll();
      return res.status(200).json(users);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  findOne: async (req, res) => {
    const { id } = req.params;
    try {
      if (!fs.existsSync(`${caminho}${id}`)) {
        console.log("Pasta não existe");
        fs.mkdirSync(`${caminho}${id}`);
        console.log("Pasta criada");
      }
      const fotos = fs.readdirSync(`${caminho}${id}`);
      console.log(fotos);
      const user = await User.findOne({ where: { id: id }, include: History });
      if (!user) {
        return res.status(404).json({ err: "User not found" });
      }
      console.log(user);
      console.log(fotos);
      return res.status(200).json({
        user,
        fotos,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ err: err.message });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const img = req.body.img;
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      console.log(img);
      if (img > 0) {
        console.log("Entrou no if");
        fs.rmSync(`${caminho}${id}`, { recursive: true, force: true });
        fs.mkdirSync(`${caminho}${id}`);
      }
      await user.update(req.body);
      return res.status(200).json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      fs.rmSync(`${caminho}${id}`, { recursive: true, force: true });
      await user.destroy();
      return res.status(200).json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
};
