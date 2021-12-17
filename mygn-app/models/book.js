const { Schema } = require("mongoose");

const Book = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    author: { type: Array, required: true },
    publisher: { type: String, required: true },
    volume: { type: Number, required: false },
    description: { type: String, required: true },
    genre: { type: Array, required: true },
    comments: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = Book;
