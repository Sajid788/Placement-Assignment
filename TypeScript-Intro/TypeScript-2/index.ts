// Enum for book genres
enum Genre {
    Fiction = "Fiction",
    NonFiction = "Non-Fiction",
    Mystery = "Mystery",
    Thriller = "Thriller",
    ScienceFiction = "Science Fiction",
  }
  
  // Union type for book formats
  type BookFormat = "Paperback" | "Hardcover" | "Ebook";
  
  // Interface for a Book
  interface Book {
    id: number;
    title: string;
    author: string;
    genre: Genre;
    quantity: number;
  }
  
  // Intersection type combining Book with BookFormat
  type LibraryBook = Book & { format: BookFormat };
  
  // Interface for the Library
  interface Library {
    inventory: LibraryBook[];
    searchByTitle(title: string): LibraryBook[];
    searchByAuthor(author: string): LibraryBook[];
    searchByGenre(genre: Genre): LibraryBook[];
    updateQuantity(id: number, newQuantity: number): void;
  }
  
  // Library Implementation
  class LibraryManager implements Library {
    inventory: LibraryBook[] = [];
  
    constructor(initialBooks: LibraryBook[]) {
      this.inventory = initialBooks;
    }
  
    // Search by title
    searchByTitle(title: string): LibraryBook[] {
      return this.inventory.filter((book) =>
        book.title.toLowerCase().includes(title.toLowerCase())
      );
    }
  
    // Search by author
    searchByAuthor(author: string): LibraryBook[] {
      return this.inventory.filter((book) =>
        book.author.toLowerCase().includes(author.toLowerCase())
      );
    }
  
    // Search by genre
    searchByGenre(genre: Genre): LibraryBook[] {
      return this.inventory.filter((book) => book.genre === genre);
    }
  
    // Update the quantity of a book
    updateQuantity(id: number, newQuantity: number): void {
      const book = this.inventory.find((book) => book.id === id);
      if (book) {
        book.quantity = newQuantity;
        console.log(`Updated quantity of "${book.title}" to ${newQuantity}.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    // Display all books
    displayInventory(): void {
      console.log("Library Inventory:");
      this.inventory.forEach((book) => {
        console.log(
          `ID: ${book.id}, Title: "${book.title}", Author: ${book.author}, Genre: ${book.genre}, Format: ${book.format}, Quantity: ${book.quantity}`
        );
      });
    }
  }
  
  // Initialize the library with sample data
  const initialBooks: LibraryBook[] = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: Genre.Fiction,
      quantity: 5,
      format: "Paperback",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: Genre.Mystery,
      quantity: 3,
      format: "Hardcover",
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      genre: Genre.ScienceFiction,
      quantity: 4,
      format: "Ebook",
    },
  ];
  
  // Create an instance of LibraryManager
  const library = new LibraryManager(initialBooks);
  
  // Display the inventory
  library.displayInventory();
  
  // Search for books by title
  console.log("Search by Title: '1984'");
  console.log(library.searchByTitle("1984"));
  
  // Search for books by author
  console.log("Search by Author: 'Harper Lee'");
  console.log(library.searchByAuthor("Harper Lee"));
  
  // Search for books by genre
  console.log("Search by Genre: Fiction");
  console.log(library.searchByGenre(Genre.Fiction));
  
  // Update the quantity of a book
  library.updateQuantity(1, 10);
  
  // Display the updated inventory
  library.displayInventory();
  