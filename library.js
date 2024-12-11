const library = {
    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],
    addBook(book) {
      if (!book || typeof book !== "object") {
        console.log("Invalid book data provided.");
        return;
      }
      const { title, author, year } = book;
  
      if (!title || !author || !year) {
        console.log("Book information is incomplete. All fields are required.");
        return;
      }
  
      if (this.books.find(b => b.title === title)) {
        console.log(`A book with the title "${title}" already exists.`);
        return;
      }
  
      this.books.push(book);
      console.log(`Book "${title}" has been added successfully.`);
    },
  
    findBookByTitle(title) {
      const book = this.books.find(book => book.title === title);
      if (book) {
        console.log(`Book found: ${JSON.stringify(book)}`);
        return book;
      } else {
        console.log(`No book found with the title "${title}".`);
        return null;
      }
    },
  
    removeBook(title) {
      const index = this.books.findIndex(book => book.title === title);
  
      if (index !== -1) {
        const removedBook = this.books.splice(index, 1)[0];
        console.log(`Book "${removedBook.title}" has been removed.`);
      } else {
        console.log(`Book with the title "${title}" not found.`);
      }
    }
  };
  
  console.log("Initial collection:");
  console.log(library.books);
  
  library.addBook({ title: "1984", author: "George Orwell", year: 1949 });
  
  library.addBook({ author: "J.K. Rowling", year: 1997 });
  
  library.addBook({ title: "1984", author: "George Orwell", year: 1949 });
  
  library.findBookByTitle("The Hobbit");
  
  library.removeBook("The Hobbit");
  
  library.removeBook("The Catcher in the Rye");
  
  console.log("Final collection:");
  console.log(library.books);
  