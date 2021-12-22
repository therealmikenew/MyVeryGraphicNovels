const db = require("../db");
const { Comment } = require("../models");

// Connect to the database
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const comments = [
    {
      body: "awesome!",
      book_id: "61c09461180ca916b41de3d6",
    },

    {
      body: "Must get!!!",
      book_id: "61c09461180ca916b41de3d7",
    },
    {
      body: "Definitely!",
      book_id: "61c09461180ca916b41de3d8",
    },
  ];

  await Comment.insertMany(comments);

  console.log("Created some comments!");
};
const run = async () => {
  await main();
  db.close();
};

run();
