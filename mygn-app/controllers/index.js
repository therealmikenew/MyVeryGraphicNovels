const { Book, Comment } = require("../models/");

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();

    return res.status(200).json({ books });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getByGenre = async (req, res) => {
  try {
    let gen = req.params.genre;
    const genre = await Book.find({ genre: gen });
    return res.status(200).json({ genre });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getById = async (req, res) => {
  try {
    let id = req.params.id;
    const bookID = await Book.findById(id);
    return res.status(200).json({ bookID });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getWishList = async (req, res) => {
  try {
    const wishList = await Book.find({ onWishList: true });
    return res.status(200).json({ wishList });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateWishList = async (req, res) => {
  try {
    let id = req.params.id;
    let added = req.params.onWishList;

    const wish = await Book.findByIdAndUpdate(id, { onWishList: added });
    return res.status(200).send("success");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getInventory = async (req, res) => {
  try {
    const inventory = await Book.find({ onInventory: true });
    return res.status(200).json({ inventory });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateInventory = async (req, res) => {
  try {
    let id = req.params.id;
    let added = req.params.onInventory;

    await Book.findByIdAndUpdate(id, { onInventory: added });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

//////////////COMMENTS//////////

const postComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body);
    console.log(comment);
    await comment.save();
    return res.status(201).json({ comment });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();

    return res.status(200).json({ comments });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getCommentsById = async (req, res) => {
  try {
    let bookID = req.params.id;
    const commentID = await Comment.find({ book_id: bookID });
    return res.status(200).json({ commentID });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllBooks,
  getByGenre,
  getById,
  getWishList,
  updateWishList,
  getInventory,
  updateInventory,
  postComment,
  getAllComments,
  getCommentsById,
};
