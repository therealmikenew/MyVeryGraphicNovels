const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send("ROOT"));

router.get("/books", controllers.getAllBooks);

router.get("/books/genre", controllers.getByGenre);

module.exports = router;
