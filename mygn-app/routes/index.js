const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send("ROOT"));

router.get("/books", controllers.getAllBooks);

router.get("/comments", controllers.getAllComments);

router.get("/books/genre/:genre", controllers.getByGenre);

router.get("/books/:id", controllers.getById);

router.get("/comments/:id", controllers.getCommentsById);

router.get("/wishlist", controllers.getWishList);

router.put("/wishlist/:id/:onWishList", controllers.updateWishList);

router.get("/inventory", controllers.getInventory);

router.put("/inventory/:id/:onInventory", controllers.updateInventory);

router.post("/wishlist/comment", controllers.postComment);

module.exports = router;
