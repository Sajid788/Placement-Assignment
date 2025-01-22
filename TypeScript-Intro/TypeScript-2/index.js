// Enum for book genres
var Genre;
(function (Genre) {
    Genre["Fiction"] = "Fiction";
    Genre["NonFiction"] = "Non-Fiction";
    Genre["Mystery"] = "Mystery";
    Genre["Thriller"] = "Thriller";
    Genre["ScienceFiction"] = "Science Fiction";
})(Genre || (Genre = {}));
// Library Implementation
var LibraryManager = /** @class */ (function () {
    function LibraryManager(initialBooks) {
        this.inventory = [];
        this.inventory = initialBooks;
    }
    // Search by title
    LibraryManager.prototype.searchByTitle = function (title) {
        return this.inventory.filter(function (book) {
            return book.title.toLowerCase().includes(title.toLowerCase());
        });
    };
    // Search by author
    LibraryManager.prototype.searchByAuthor = function (author) {
        return this.inventory.filter(function (book) {
            return book.author.toLowerCase().includes(author.toLowerCase());
        });
    };
    // Search by genre
    LibraryManager.prototype.searchByGenre = function (genre) {
        return this.inventory.filter(function (book) { return book.genre === genre; });
    };
    // Update the quantity of a book
    LibraryManager.prototype.updateQuantity = function (id, newQuantity) {
        var book = this.inventory.find(function (book) { return book.id === id; });
        if (book) {
            book.quantity = newQuantity;
            console.log("Updated quantity of \"".concat(book.title, "\" to ").concat(newQuantity, "."));
        }
        else {
            console.log("Book with ID ".concat(id, " not found."));
        }
    };
    // Display all books
    LibraryManager.prototype.displayInventory = function () {
        console.log("Library Inventory:");
        this.inventory.forEach(function (book) {
            console.log("ID: ".concat(book.id, ", Title: \"").concat(book.title, "\", Author: ").concat(book.author, ", Genre: ").concat(book.genre, ", Format: ").concat(book.format, ", Quantity: ").concat(book.quantity));
        });
    };
    return LibraryManager;
}());
// Initialize the library with sample data
var initialBooks = [
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
var library = new LibraryManager(initialBooks);
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
