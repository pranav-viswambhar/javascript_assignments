function Book(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isBorrowed = false;
  
    this.borrow = function() {
      this.isBorrowed = true;
    };
  
    this.returnBook = function() {
      this.isBorrowed = false;
    };
  }
  
  function Library() {
    this.books = [];
  
    this.addBook = function(book) {
      this.books.push(book);
    };
  
    this.findBookByISBN = function(isbn) {
      return this.books.find(book => book.ISBN === isbn);
    };
  
    this.listAvailableBooks = function() {
      return this.books.filter(book => !book.isBorrowed);
    };
  
    this.listBorrowedBooks = function() {
      return this.books.filter(book => book.isBorrowed);
    };
  }
  
  const library = new Library();
  
  const book1 = new Book("1984", "George Orwell", "123456");
  const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "7891011");
  
  library.addBook(book1);
  library.addBook(book2);
  
  console.log(library.listAvailableBooks());
  
  book1.borrow();
  console.log(library.listAvailableBooks());
  console.log(library.listBorrowedBooks());
  
  book1.returnBook();
  console.log(library.listAvailableBooks());
  