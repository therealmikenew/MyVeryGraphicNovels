const { Book } = require("../models/");

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
    //res.send(console.log(req.params.id));
    let id = req.params.id;
    const bookID = await Book.findById(id);
    return res.status(200).json({ bookID });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllBooks,
  getByGenre,
  getById,
};
