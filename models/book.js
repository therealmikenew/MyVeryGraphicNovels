const { Schema } = require("mongoose");

const Book = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    author: { type: String, required: true },
    publisher: { type: String, required: true },
    volume: { type: Number, required: false },
    description: { type: String, required: true },
    genre: { type: String, required: true },
    comments: { type: String, required: false },
    onWishList: { type: Boolean, required: true },
    onInventory: { type: Boolean, required: true },
  },
  { timestamps: true }
);

module.exports = Book;
