const express = require("express");
const routes = require("../backend/routes/index");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("../backend/db");

const PORT = process.env.PORT || 3001;

const app = express();

///////middleware

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));

///////////

app.use("/api", routes);

//////////////

app.listen(PORT, () => {
  console.log(`Express serve listening on port ${PORT}`);
});
