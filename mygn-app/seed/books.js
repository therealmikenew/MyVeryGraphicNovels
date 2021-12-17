const db = require("../db");
const { Book, Comment } = require("../models");

// Connect to the database
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const books = [
    {
      title: "Mister Miracle",
      image:
        "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/752592/752592._SX1280_QL80_TTD_.jpg",
      author: ["King, Tom"],
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
      author: ["King, Tom"],
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
      author: ["King, Tom"],
      publisher: "Marvel",
      volume: 2,
      description:
        "The epic conclusion of the story that everyone is talking about! Once upon a time, a robot and a witch fell in love. But the story of Scarlet Witch and Vision was just the start. Vision has built a new life for himself — a new family. Yet while every family has its share of skeletons in the closet, for the Visions those skeletons are real. And now the family's facade is crumbling. The Avengers know the truth. That Vision's wife has killed. That the synthezoid lied to protect her. And that lie will follow lie, death will pile upon death. The Avengers know they need to act. Tragedy is coming, and it will send the Android Avenger into a devastating confrontation with Earth's Mightiest Heroes. Nobody is safe.",
      genre: ["superhero", "fantasy"],
      comments: "",
    },
    {
      title: "The Meat Cake Bible",
      image:
        "https://cdn.shopify.com/s/files/1/0322/7339/9944/products/9781606999103_300_360x.jpg",
      author: ["Darcy, Dame"],
      publisher: "Fantagraphics",
      volume: "",
      description:
        "The epic conclusion of the story that everyone is talking about! Once upon a time, a robot and a witch fell in love. But the story of Scarlet Witch and Vision was just the start. Vision has built a new life for himself — a new family. Yet wDame Darcy is one of the sui generis artistic talents of the past two decades — musician, actress, fortune teller, dollmaker, Gen X/feminist icon, and last but not least, cartoonist to the core — and has been bewitching readers for over 20 years with her neo-Victorian horror/humor/romance comic Meat Cake. Alternating between one-off (often cruelly tragic) fairy tales and ongoing romps starring her eclectic cast of characters, including Effluvia the Mermaid, the roguish roué Wax Wolf, Igpay the Pig-Latin pig, Stregapez (a women who speaks by dispensing Pez-like tablets through a bloody hole in her throat), the mischievous Siamese twins Hindrance and Perfidia, Scampi the Selfish Shellfish, the stalwart Friend the Girl, and the blonde bombshell Richard Dirt, all delineated in her inimitable luxurious scrawl, Meat Cake is like a peek into the most creative, deranged dollhouse you ever saw. The Meat Cake Bible is the definitive collection of the series, collecting every story from all 17 issues (1993-2008) — including “Hungry Is the Heart,” Darcy’s legendary collaboration with Alan Moore — as well as new stories from the unpublished 18th issue.hile every family has its share of skeletons in the closet, for the Visions those skeletons are real. And now the family's facade is crumbling. The Avengers know the truth. That Vision's wife has killed. That the synthezoid lied to protect her. And that lie will follow lie, death will pile upon death. The Avengers know they need to act. Tragedy is coming, and it will send the Android Avenger into a devastating confrontation with Earth's Mightiest Heroes. Nobody is safe.",
      genre: ["goth", "punk", "indie"],
      comments: "",
    },
    {
      title: "The Complete Maus",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/517h+3SR8aL._SY344_BO1,204,203,200_.jpg",
      author: ["Spiegelman, Art"],
      publisher: "Knopf Doubleday Publishing Group",
      volume: "",
      description:
        "A brutally moving work of art—widely hailed as the greatest graphic novel ever written—Maus recounts the chilling experiences of the author’s father during the Holocaust, with Jews drawn as wide-eyed mice and Nazis as menacing cats. Maus is a haunting tale within a tale, weaving the author’s account of his tortured relationship with his aging father into an astonishing retelling of one of history's most unspeakable tragedies. It is an unforgettable story of survival and a disarming look at the legacy of trauma.",
      genre: ["documentary"],
      comments: "",
    },
    {
      title: "Ojo",
      image:
        "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/457750/457750._SX1280_QL80_TTD_.jpg",
      author: ["Keith, Sam", "Wisnia, Chris", "Pardee, Alex"],
      publisher: "Oni Press",
      volume: "",
      description:
        "Annie has terrible luck with pets. She's killed hamsters and mice and lizards and birds. For a domesticated animal, getting Annie as an owner is akin to a death sentence. But when Annie finds a little beastie in a drain pipe named Ojo, will her karma really change or is she destined for more disappointment?",
      genre: ["fantasy", "horror"],
      comments: "",
    },
    {
      title: "Sentient",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1573581002l/48734095._SY475_.jpg",
      author: ["Lemire, Jeff"],
      publisher: "TKO Studios",
      volume: "",
      description:
        "WELCOME TO THE U.S.S. MONTGOMERY. When a separatist attack kills the adults on board a colony ship in deep space, the on-board A.I. VALARIE must help the ship's children survive the perils of space. But as they are pursued by dangerous forces, can Valerie become more than what she was programmed to be - a savior to these children? ",
      genre: ["sci-fi", "suspense"],
      comments: "",
    },
    {
      title: "The My Favorite Thing Is Monsters",
      image:
        "https://images-na.ssl-imhttps://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1580775137l/29069374._SX318_.jpgages-amazon.com/images/S/cmx-images-prod/Item/457750/457750._SX1280_QL80_TTD_.jpg",
      author: ["Ferris, Emil"],
      publisher: "Fantagraphics",
      volume: 1,
      description:
        " Set against the tumultuous political backdrop of late ’60s Chicago, My Favorite Thing Is Monsters is the fictional graphic diary of 10-year-old Karen Reyes, filled with B-movie horror and pulp monster magazines iconography. Karen Reyes tries to solve the murder of her enigmatic upstairs neighbor, Anka Silverberg, a holocaust survivor, while the interconnected stories of those around her unfold. When Karen’s investigation takes us back to Anka’s life in Nazi Germany, the reader discovers how the personal, the political, the past, and the present converge. Full-color illustrations throughout",
      genre: ["superhero", "fantasy"],
      comments: "",
    },
  ];

  await Book.insertMany(books);

  console.log("Created some books!");
};
const run = async () => {
  await main();
  db.close();
};

run();
