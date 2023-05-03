const { abre, abre3s, fecha } = require("../Broker/index");

module.exports = {
  abrePorta: async (req, res) => {
    try {
      abre();
      return res.status(200).json({ msg: "Abrindo" });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  },

  abre3sPorta: async (req, res) => {
    try {
      abre3s();
      return res.status(200).json({ msg: "Abrindo por 3 segundos" });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  },

  fechaPorta: async (req, res) => {
    try {
      fecha();
      return res.status(200).json({ msg: "Fechando" });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  },
};
