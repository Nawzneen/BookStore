import { createServer, Model } from "miragejs";

createServer({
  models: {
    book: Model,
  },

  seeds(server) {
    const booksData = [
      {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publication_year: 1960,
        genre: ["Fiction", "Classic"],
        description:
          "A classic novel depicting racial injustice in the American South.",
        cover_image:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553383690i/2657.jpg",
        price: "15.59",
      },
      {
        id: 2,
        title: "1984",
        author: "George Orwell",
        publication_year: 1949,
        genre: ["Dystopian", "Science Fiction"],
        description: "A dystopian novel portraying a totalitarian society.",
        cover_image:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg",
        price: "7.30",
      },
      {
        id: 3,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        publication_year: 1813,
        genre: ["Classic", "Romance"],
        description:
          "A classic novel exploring themes of love, marriage, and social norms.",
        cover_image:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg",
        price: "11.30",
      },
      {
        id: 4,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publication_year: 1925,
        genre: ["Fiction", "Classic"],
        description:
          "A tale of the American Dream, wealth, and love during the Roaring Twenties.",
        cover_image: "https://fakeimg.pl/667x1000/cc6600",
        price: "15.59",
      },
      {
        id: 5,
        title: "Moby-Dick",
        author: "Herman Melville",
        publication_year: 1851,
        genre: ["Fiction", "Adventure"],
        description:
          "The epic tale of Captain Ahab's obsession with the white whale.",
        cover_image: "https://fakeimg.pl/667x1000/cc6600",
        price: "15.59",
      },
      {
        id: 6,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        publication_year: 1954,
        genre: ["Fantasy", "Adventure"],
        description:
          "An epic fantasy saga about the quest to destroy the One Ring.",
        cover_image: "https://fakeimg.pl/667x1000/cc6600",
        price: "15.59",
      },
      {
        id: 7,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        publication_year: 1951,
        genre: ["Fiction", "Coming-of-age"],
        description:
          "A classic coming-of-age novel following Holden Caulfield's journey.",
        cover_image: "https://fakeimg.pl/667x1000/cc6600",
        price: "15.59",
      },
      {
        id: 8,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        publication_year: 1937,
        genre: ["Fantasy", "Adventure"],
        description:
          "The prequel to The Lord of the Rings, following Bilbo Baggins' journey.",
        cover_image: "https://fakeimg.pl/667x1000/cc6600",
        price: "15.59",
      },
      {
        id: 9,
        title: "One Hundred Years of Solitude",
        author: "Gabriel Garcia Marquez",
        publication_year: 1967,
        genre: ["Magical Realism", "Literary Fiction"],
        description:
          "A multi-generational saga of the Buendía family in the fictional town of Macondo.",
        cover_image: "https://fakeimg.pl/667x1000/cc6600",
        price: "15.59",
      },
      {
        id: 10,
        title: "War and Peace",
        author: "Leo Tolstoy",
        publication_year: 1869,
        genre: ["Historical Fiction", "Epic"],
        description:
          "A monumental work depicting the events of Russian society during the Napoleonic era.",
        cover_image: "https://fakeimg.pl/667x1000/cc6600",
        price: "15.59",
      },
      {
        id: 11,
        title: "The Odyssey",
        author: "Homer",
        publication_year: "8th century BCE",
        genre: ["Epic", "Mythology"],
        description:
          "An ancient Greek epic poem recounting Odysseus' ten-year journey home after the Trojan War.",
        cover_image: "https://fakeimg.pl/667x1000/cc6600",
        price: "15.59",
      },
      {
        id: 12,
        title: "The Divine Comedy",
        author: "Dante Alighieri",
        publication_year: "1320",
        genre: ["Epic", "Poetry"],
        description:
          "An epic poem that follows the journey of the soul through Hell, Purgatory, and Heaven.",
        cover_image: "https://fakeimg.pl/667x1000/cc6600",
        price: "15.59",
      },
      {
        id: 13,
        title: "The Brothers Karamazov",
        author: "Fyodor Dostoevsky",
        publication_year: 1880,
        genre: ["Classic", "Philosophical Fiction"],
        description:
          "A complex novel exploring themes of spirituality, morality, and human nature.",
        cover_image: "https://fakeimg.pl/667x1000/cc6600",
        price: "15.59",
      },
      {
        id: 14,
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        publication_year: 1866,
        genre: ["Classic", "Psychological Fiction"],
        description:
          "A psychological thriller revolving around guilt, conscience, and redemption.",
        cover_image: "https://fakeimg.pl/667x1000/cc6600",
        price: "15.59",
      },
      {
        id: 15,
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        publication_year: 1890,
        genre: ["Gothic", "Philosophical Fiction"],
        description:
          "A novel about a man whose portrait ages while he retains his youth and beauty.",
        cover_image: "https://fakeimg.pl/667x1000/cc6600",
        price: "15.59",
      },
      {
        id: 16,
        title: "Brave New World",
        author: "Aldous Huxley",
        publication_year: 1932,
        genre: ["Dystopian", "Science Fiction"],
        description:
          "A dystopian vision of a future society obsessed with pleasure and conformity.",
        cover_image: "https://fakeimg.pl/667x1000/cc6600",
        price: "15.59",
      },
      {
        id: 17,
        title: "The Count of Monte Cristo",
        author: "Alexandre Dumas",
        publication_year: 1844,
        genre: ["Adventure", "Historical Fiction"],
        description:
          "An adventure novel of revenge, love, and redemption set in the early 19th century.",
        cover_image: "https://fakeimg.pl/667x1000/cc6600",
        price: "15.59",
      },
      {
        id: 18,
        title: "Anna Karenina",
        author: "Leo Tolstoy",
        publication_year: 1877,
        genre: ["Classic", "Romance"],
        description:
          "A tragic love story set against the backdrop of Russian high society.",
        cover_image: "https://fakeimg.pl/667x1000/cc6600",
        price: "15.59",
      },
      {
        id: 19,
        title: "The Alchemist",
        author: "Paulo Coelho",
        publication_year: 1988,
        genre: ["Fiction", "Philosophical"],
        description:
          "A philosophical novel about a shepherd boy's journey to find his personal legend.",
        cover_image: "https://fakeimg.pl/667x1000/cc6600",
        price: "15.59",
      },
      // Add more book data here
    ];

    booksData.forEach((bookData) => {
      server.create("book", bookData);
    });
  },

  routes() {
    this.namespace = "api";
    this.timing = 1000; // Simulate 1 second delay for responses

    this.get("/books", (schema) => {
      return schema.books.all();
    });

    this.get("/books/:id", (schema, request) => {
      const id = request.params.id;
      return schema.books.find(id);
    });

    this.post("/login", (schema, request) => {
      const { email, password } = JSON.parse(request.requestBody);
      // This is an extremely naive version of authentication.
      const foundUser = schema.users.findBy({ email, password });
      if (!foundUser) {
        return new Response(
          401,
          {},
          { message: "No user with those credentials found!" }
        );
      }

      // Password wont be sent back to the client in real world!
      foundUser.password = undefined;
      return {
        user: foundUser,
        token: "Enjoy your book, here's your tokens.",
      };
    });
  },
});
