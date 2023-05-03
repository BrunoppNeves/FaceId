const jwt = require("jsonwebtoken");

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      if (email === process.env.EMAIL) {
        if (password === process.env.PASSWORD) {
          return res.status(200).json({
            token: jwt.sign({ email: email }, process.env.SECRET, {
              expiresIn: 86400,
            }),
          });
        } else {
          return res.status(404).json({ msg: "User not found" });
        }
      } else {
        return res.status(404).json({ message: "User not found" });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
};
