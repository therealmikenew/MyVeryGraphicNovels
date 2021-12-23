const db = require("../db");
const { Book } = require("../models");

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
      genre: "superhero",
      comments: "",
      onWishList: false,
      onInventory: false,
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
      genre: "superhero",
      comments: "",
      onWishList: false,
      onInventory: false,
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
      genre: "superhero",
      comments: "",
      onWishList: false,
      onInventory: false,
    },
    {
      title: "The Meat Cake Bible",
      image:
        "https://cdn.shopify.com/s/files/1/0322/7339/9944/products/9781606999103_300_360x.jpg",
      author: "Darcy, Dame",
      publisher: "Fantagraphics",
      volume: "",
      description:
        "The epic conclusion of the story that everyone is talking about! Once upon a time, a robot and a witch fell in love. But the story of Scarlet Witch and Vision was just the start. Vision has built a new life for himself — a new family. Yet wDame Darcy is one of the sui generis artistic talents of the past two decades — musician, actress, fortune teller, dollmaker, Gen X/feminist icon, and last but not least, cartoonist to the core — and has been bewitching readers for over 20 years with her neo-Victorian horror/humor/romance comic Meat Cake. Alternating between one-off (often cruelly tragic) fairy tales and ongoing romps starring her eclectic cast of characters, including Effluvia the Mermaid, the roguish roué Wax Wolf, Igpay the Pig-Latin pig, Stregapez (a women who speaks by dispensing Pez-like tablets through a bloody hole in her throat), the mischievous Siamese twins Hindrance and Perfidia, Scampi the Selfish Shellfish, the stalwart Friend the Girl, and the blonde bombshell Richard Dirt, all delineated in her inimitable luxurious scrawl, Meat Cake is like a peek into the most creative, deranged dollhouse you ever saw. The Meat Cake Bible is the definitive collection of the series, collecting every story from all 17 issues (1993-2008) — including “Hungry Is the Heart,” Darcy’s legendary collaboration with Alan Moore — as well as new stories from the unpublished 18th issue.hile every family has its share of skeletons in the closet, for the Visions those skeletons are real. And now the family's facade is crumbling. The Avengers know the truth. That Vision's wife has killed. That the synthezoid lied to protect her. And that lie will follow lie, death will pile upon death. The Avengers know they need to act. Tragedy is coming, and it will send the Android Avenger into a devastating confrontation with Earth's Mightiest Heroes. Nobody is safe.",
      genre: "indie",
      comments: "",
      onWishList: false,
      onInventory: false,
    },
    {
      title: "The Complete Maus",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/517h+3SR8aL._SY344_BO1,204,203,200_.jpg",
      author: "Spiegelman, Art",
      publisher: "Knopf Doubleday Publishing Group",
      volume: "",
      description:
        "A brutally moving work of art—widely hailed as the greatest graphic novel ever written—Maus recounts the chilling experiences of the author’s father during the Holocaust, with Jews drawn as wide-eyed mice and Nazis as menacing cats. Maus is a haunting tale within a tale, weaving the author’s account of his tortured relationship with his aging father into an astonishing retelling of one of history's most unspeakable tragedies. It is an unforgettable story of survival and a disarming look at the legacy of trauma.",
      genre: "documentary",
      comments: "",
      onWishList: false,
      onInventory: false,
    },
    {
      title: "Ojo",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/31aSmkbs63L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
      author: "Keith, Sam",
      publisher: "Oni Press",
      volume: "",
      description:
        "Annie has terrible luck with pets. She's killed hamsters and mice and lizards and birds. For a domesticated animal, getting Annie as an owner is akin to a death sentence. But when Annie finds a little beastie in a drain pipe named Ojo, will her karma really change or is she destined for more disappointment?",
      genre: "horror",
      comments: "",
      onWishList: false,
      onInventory: false,
    },
    {
      title: "Sentient",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1573581002l/48734095._SY475_.jpg",
      author: "Lemire, Jeff",
      publisher: "TKO Studios",
      volume: "",
      description:
        "WELCOME TO THE U.S.S. MONTGOMERY. When a separatist attack kills the adults on board a colony ship in deep space, the on-board A.I. VALARIE must help the ship's children survive the perils of space. But as they are pursued by dangerous forces, can Valerie become more than what she was programmed to be - a savior to these children? ",
      genre: "suspense",
      comments: "",
      onWishList: false,
      onInventory: false,
    },
    {
      title: "My Favorite Thing Is Monsters",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/My_Favorite_Thing_Is_Monsters_cover.jpg/220px-My_Favorite_Thing_Is_Monsters_cover.jpg",
      author: "Ferris, Emil",
      publisher: "Fantagraphics",
      volume: 1,
      description:
        "Set against the tumultuous political backdrop of late ’60s Chicago, My Favorite Thing Is Monsters is the fictional graphic diary of 10-year-old Karen Reyes, filled with B-movie horror and pulp monster magazines iconography. Karen Reyes tries to solve the murder of her enigmatic upstairs neighbor, Anka Silverberg, a holocaust survivor, while the interconnected stories of those around her unfold. When Karen’s investigation takes us back to Anka’s life in Nazi Germany, the reader discovers how the personal, the political, the past, and the present converge. Full-color illustrations throughout",
      genre: "fantasy",
      comments: "",
      onWishList: false,
      onInventory: false,
    },
    {
      title: "Promethea",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1436628635l/821800._SY475_.jpg",
      author: "Moore, Alan",
      publisher: "America's Best Comics",
      volume: 1,
      description:
        "Sophie Bangs was a just an ordinary college student in a weirdly futuristic New York when a simple assignment changed her life forever. While researching Promethea, a mythical warrior woman, Sophie receives a cryptic warning to cease her investigations. Ignoring the cautionary notice, she continues her studies and is almost killed by a shadowy creature when she learns the secret of Promethea. Surviving the encounter, Sophie soon finds herself transformed into Promethea, the living embodiment of the imagination. Her trials have only begun as she must master the secrets of her predecessors before she is destroyed by Promethea's ancient enemy. It's a stellar piece of work recommended by General Assembly's own Jeremy Taubman!",
      genre: "fantasy",
      comments: "",
      onWishList: false,
      onInventory: false,
    },
    {
      title: "We3",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1336056522l/22358.jpg",
      author: "Morrison, Grant",
      publisher: "Vertigo",
      volume: null,
      description:
        "Writer Grant Morrison and artist Frank Quitely tell the unforgettable story of three innocent pets-a dog, a cat and a rabbit-who have been converted into deadly cyborgs by a sinister military weapons program.With nervous systems amplified to match their terrifying mechanical exoskeletons, the members of Animal Weapon 3 have the firepower of a battalion between them. But they are just the program's prototypes, and now that their testing is complete, they're slated to be permanently 'de-commissioned'-until they seize their one chance to make a desperate run for freedom. Relentlessly pursued by their makers, the We3 team must navigate a frightening and confusing world where their instincts and heightened abilities make them as much a threat as those hunting them-but a world, nonetheless, in which somewhere there is something called 'home.'",
      genre: "suspense",
      comments: "",
      onWishList: false,
      onInventory: false,
    },
    {
      title: "Fun Home: A Family Tragicomic",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1440097020l/26135825._SY475_.jpg",
      author: "Bechdel, Alison",
      publisher: "Mariner Books",
      volume: null,
      description:
        "Distant and exacting, Bruce Bechdel was an English teacher and director of the town funeral home, which Alison and her family referred to as the Fun Home. It was not until college that Alison, who had recently come out as a lesbian, discovered that her father was also gay. A few weeks after this revelation, he was dead, leaving a legacy of mystery for his daughter to resolve.",
      genre: "indie",
      comments: "",
      onWishList: false,
      onInventory: false,
    },
    {
      title: "The Incal",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1500033240l/10842223._SX318_.jpg",
      author: "Jodorowsky, Alejandro",
      publisher: "Humanoids, Inc",
      volume: null,
      description:
        "John Difool, a low-class detective in a degenerate dystopian world, finds his life turned upside down when he discovers an ancient, mystical artifact called 'The Incal.'' Difool's adventures will bring him into conflict with the galaxy's greatest warrior, the Metabaron, and will pit him against the awesome powers of the Technopope. These encounters and many more make up a tale of comic and cosmic proportions that has Difool fighting for not only his very survival, but also the survival of the entire universe. ",
      genre: "indie",
      comments: "",
      onWishList: false,
      onInventory: false,
    },
    {
      title: "The Complete Persepolis",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327876995l/991197.jpg",
      author: "Satrapi, Marjane",
      publisher: "Pantheon Books",
      volume: null,
      description:
        "Persepolis is the story of Satrapi's unforgettable childhood and coming of age within a large and loving family in Tehran during the Islamic Revolution; of the contradictions between private life and public life in a country plagued by political upheaval; of her high school years in Vienna facing the trials of adolescence far from her family; of her homecoming--both sweet and terrible; and, finally, of her self-imposed exile from her beloved homeland. It is the chronicle of a girlhood and adolescence at once outrageous and familiar, a young life entwined with the history of her country yet filled with the universal trials and joys of growing up. Edgy, searingly observant, and candid, often heartbreaking but threaded throughout with raw humor and hard-earned wisdom--Persepolis is a stunning work from one of the most highly regarded, singularly talented graphic artists at work today.",
      genre: "documentary",
      comments: "",
      onWishList: false,
      onInventory: false,
    },
    {
      title: "Is That All There Is?",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1358734876l/12419908.jpg",
      author: "Swarte, Joose",
      publisher: "Fantagraphics",
      volume: null,
      description:
        "By appropriating and subverting Tintin creator Herge s classic clear line style, Joost Swarte revitalized European alternative comics in the 1970s with a series of satirical, musically elegant, supremely beautifully drawn short stories often featuring his innocent, magnificently-quiffed Jopo de Pojo, or his orotund scientist character, Anton Makassar. Under Swarte s own exacting supervision, Is That All There Is? will collect virtually all of his alternative comics work from 1972 to date, including the RAW magazine stories that brought him fame among American comics aficionados in the 1980s. Especially great pains will be taken to match Swarte s superb coloring, which includes stories executed in watercolor, comics printed in retro duotones, fiendishly clever use of Zip-a-Tone screens, and much more. (There s even a story about how to color comics art using those screens, with Makassar as the teacher.) Other noteworthy stories include Swarte s take on an episode from Herge s early days, a Fats Domino story, a tribute to the legendary Upside-Downs strip, and a story titled simply Modern Art.",
      genre: "indie",
      comments: "",
      onWishList: false,
      onInventory: false,
    },
    {
      title: "A Girl Walks Home Alone At Night, Vol. 1",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1613558011l/57105756._SY475_.jpg",
      author: "Amirpour, Ana Lily",
      publisher: "Behemoth",
      volume: 1,
      description:
        "Written by the director of the film of the same name rated 96% certified fresh on Rotten Tomatoes, strange things are afoot in Bad City. The Iranian ghost town, home to prostitutes, junkies, pimps and other sordid souls, is a bastion of depravity and hopelessness where a lonely vampire, The Girl, stalks the town's most unsavory inhabitants. Collects the first two stories.",
      genre: "horror",
      comments: "",
      onWishList: false,
      onInventory: false,
    },
    {
      title: "Batman: The Dark Knight Returns",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327892039l/59960.jpg",
      author: "Miller, Frank",
      publisher: "DC Comics",
      volume: null,
      description:
        "This masterpiece of modern comics storytelling brings to vivid life a dark world and an even darker man. Together with inker Klaus Janson and colorist Lynn Varley, writer/artist Frank Miller completely reinvents the legend of Batman in his saga of a near-future Gotham City gone to rot, ten years after the Dark Knight's retirement.",
      genre: "superhero",
      comments: "",
      onWishList: false,
      onInventory: false,
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
