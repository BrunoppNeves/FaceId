const fs = require("fs");
const fs1 = require("fs-extra");
const path = require("path");
const caminho = "/home/bruno/Documentos/Desafio/front-atena/src/assets/Persons/";

module.exports = {
  upload: async (req, res) => {
    if (!req.files) {
      return res.status(400).json({ msg: "No file uploaded" });
    }
    return res.status(200).json({ msg: "File uploaded successfully" });
  },

  // deletePhoto: async (req, res) => {
  //   const { fileName } = req.body;
  //   const path = "./src/middleware/users/Bruno/testeimagem.jpeg";
  //   console.log(`${path}`);
  //   fs.unlink(`${path + fileName}`, function (err) {
  //     if (err) console.log(err);
  //     console.log("Arquivo deletado!");
  //   });
  //   return res.status(200).json({ msg: "Foto deletada com sucesso" });
  // },

  list: async (req, res) => {
    try {
      const list = fs.readdirSync(`${caminho}`);
      const list2 = [];
      for (let i = 0; i < list.length; i++) {
        list2.push(fs.readdirSync(`${caminho}${list[i]}`));
      }
      return res.status(200).json({ listaPastas: list, listaFotos: list2 });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ msg: "não foi possivel listar as pastas" });
    }
  },

  update: async (req, res) => {
    const id  = req.params.id;
    console.log(id + " " + 'aaaaaaaaaaaa');
    const path = `${caminho}${id}`;
    try {
      fs.access(path, (err) => {
        console.log(err ? "não existe" : "existe");
        if (err) return res.status(200).json({ msg: "a pasta não existe" });
        else {
          fs1.remove(path, (error) => {
            if (error) {
              console.log(error);
              try {
                return res.status(400).json({ msg: "não foi possivel remover a pasta" });
              } catch (err) {
                return res.status(400).json({ msg: err });
              }
            } else {
              try {
                fs.mkdirSync(`${path}`);
                return res.status(200).json({ msg: "Folder Deleted Successfully !!" });
              } catch (err) {
                return res.status(400).json({ msg: err });
              }
            }
          });
        }
      });
    } catch (err) {
      console.log(err);
    }
  },

  delete: async (req, res) => {
    const { id } = req.body;
    const path = `${caminho}${id}`;
    fs.access(path, (err) => {
      console.log(err ? "não existe" : "existe");
      if (err) return res.status(200).json({ msg: "a pasta não existe" });
      else {
        fs1.remove(path, (error) => {
          if (error) {
            console.log(error);
            try {
              return res.status(400).json({ msg: "não foi possivel remover a pasta" });
            } catch (err) {
              return res.status(400).json({ msg: err });
            }
          } else {
            try {
              return res.status(200).json({ msg: "Folder Deleted Successfully !!" });
            } catch (err) {
              return res.status(400).json({ msg: err });
            }
          }
        });
      }
    });
  },
};
