const { Schema } = require("mongoose");

const Comment = new Schema(
  {
    body: { type: String, required: true },
    book_id: { type: Schema.Types.ObjectId, ref: "book_id" },
  },
  { timestamps: true }
);

module.exports = Comment;
