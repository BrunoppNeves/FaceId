const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const { sequelize } = require("./src/models/index");
const dotenv = require("dotenv");

dotenv.config({ path: ".env" });

app.get("/", (req, res) => {
  res.send("OK");
});

sequelize.sync().then(() => {
  console.log("Database & tables created!");
});

app.use(cors());
app.options("*", cors());

app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));

app.use(morgan("dev"));
app.all("*", require("./src/routes/index"));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
