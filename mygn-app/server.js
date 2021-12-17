const express = require("express");
const routes = require("./routes");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");
const PORT = process.env.PORT || 3001;
// const { Book } = require("./models");

const app = express();

///////middleware

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));

///////////

app.use("/api", routes);

// app.get("/books", async (req, res) => {
//   const books = await Book.find();
//   res.json(books);
// });

// app.get("/books/:title", async (req, res) => {
//   const { title } = req.params;
//   res.json(title);
//   console.log(title);
// });

// app.get("/books/:id", async (req, res) => {
//   const { id } = req.params;
//   const book = await Book.findById(id);
//   res.json(book);
// });

// app.get("/", (req, res) => {
//   //   console.log(app);
//   res.send("My Very Graphic Novels");
// });

// app.get("/about", (request, response) => {
//   console.log("You're in the /about route handler!");
//   response.send("About page");
// });

// app.post("/about", (request, response) => {
//   console.log(`You've sent a post request to the /about endpoint.`);
//   response.send({ msg: "Thanks for the post!" });
// });

// app.get(
//   "/middleware",
//   (request, response, next) => {
//     console.log("this is middleware");
//     next();
//   },
//   (req, res) => {
//     res.send("response completed");
//   }
// );

//////////////

app.listen(PORT, () => {
  console.log(`Express serve listening on port ${PORT}`);
});
