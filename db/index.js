const mongoose = require("mongoose");
require("dotenv").config();
//require("dotenv").config({ path: "./.env" });

let dbUrl =
  process.env.NODE_ENV === "production"
    ? "mongodb://127.0.0.1:27017/booksDatabase"
    : process.env.MONGODB_URI;

//let dbUrl = "mongodb://127.0.0.1:27017/booksDatabase";

mongoose
  .connect(dbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useFindAndModify: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });
mongoose.set("debug", true);
const db = mongoose.connection;

module.exports = db;
