const mongoose = require("mongoose");
// const BookSchema = require("./book");
const BookSchema = require("./book");
const CommentSchema = require("./comment");

// const CommentSchema = require("./comment");

const Book = mongoose.model("books", BookSchema);
const Comment = mongoose.model("comments", CommentSchema);

module.exports = {
  Book,
  Comment,
};
