const express = require("express");
const routes = require("./routes/index");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));

app.use("/api", routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`));
  });
}

app.listen(PORT, () => {
  console.log(`Express serve listening on port ${PORT}`);
});
