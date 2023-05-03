const fs = require('fs');
module.exports = {
  create: async (req, res) => {
        try {
        
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
  },
};
