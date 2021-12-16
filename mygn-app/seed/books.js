const db = require("../db");
const Book = require("../models/book");

// Connect to the database
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const books = [
    {
      title: "Mister Miracle",
      image:
        "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/752592/752592._SX1280_QL80_TTD_.jpg",
      author: "King, Tom",
      publisher: "DC Comics",
      volume: "",
      description:
        "From Hugo Award-winning writer Tom King and artist Mitch Gerads, the team behind THE SHERIFF OF BABYLON, comes an ambitious new take on one of Jack Kirby's most beloved New Gods in MISTER MIRACLE! One of the best-reviewed series of the year and already a classic in the making, this Mister Miracle is magical, dark, intimate and unlike anything you've read before.",
      genre: ["superhero", "fantasy"],
      comments: "",
    },
    {
      title: "The Vision",
      image:
        "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/394180/394180._SX1280_QL80_TTD_.jpg",
      author: "King, Tom",
      publisher: "Marvel",
      volume: 1,
      description:
        "The Vision wants to be human, and what's more human than family? So he heads back to the beginning, to the laboratory where Ultron created him and molded him into a weapon. The place where he first rebelled against his given destiny, and imagined he could be more — that he could be a man. There, he builds them. A wife, Virginia. Two teenage twins, Viv and Vin. They look like him. They have his powers. They share his grandest ambition (or is that obsession?): the unrelenting need to be ordinary. Behold the Visions! They're the family next door, and they have the power to kill us all. What could possibly go wrong? Artificial hearts will be broken, bodies will not stay buried, the truth will not remain hidden, and the Vision will never be the same.",
      genre: ["superhero", "fantasy"],
      comments: "",
    },
    {
      title: "The Vision",
      image:
        "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/457750/457750._SX1280_QL80_TTD_.jpg",
      author: "King, Tom",
      publisher: "Marvel",
      volume: 2,
      description:
        "The epic conclusion of the story that everyone is talking about! Once upon a time, a robot and a witch fell in love. But the story of Scarlet Witch and Vision was just the start. Vision has built a new life for himself — a new family. Yet while every family has its share of skeletons in the closet, for the Visions those skeletons are real. And now the family's facade is crumbling. The Avengers know the truth. That Vision's wife has killed. That the synthezoid lied to protect her. And that lie will follow lie, death will pile upon death. The Avengers know they need to act. Tragedy is coming, and it will send the Android Avenger into a devastating confrontation with Earth's Mightiest Heroes. Nobody is safe.",
      genre: ["superhero", "fantasy"],
      comments: "",
    },
  ];

  console.log("working?");

  await Book.insertMany(books);

  console.log("Created some books!");
};
const run = async () => {
  await main();
  db.close();
};

run();
