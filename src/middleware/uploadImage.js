const multer = require("multer");
const fs = require("fs");
const caminho = "/home/bruno/Documentos/Desafio/front-atena/src/assets/Persons/";

module.exports = multer({
  limits: { fieldSize: 25 * 1024 * 1024 },
  storage: multer.diskStorage({
    destination: async (req, file, cb) => {
      cb(null, `${caminho}${req.params.id}`);
    },
    filename: (req, file, cb) => {
      cb(null, `${parseInt(Math.random() * 10000)}${parseInt(Math.random() * 10000)}.jpeg`);
    },
  }),
});
