import React, { useState } from "react";

// Array of books
const initialBooks = [
  {
    id: 1,
    title: "The End of Eternity",
    author: "Isaac Asimov",
    price: 35.0,
  },
  {
    id: 2,
    title: "The Moon Is a Harsh Mistress",
    author: "Robert A. Heinlein",
    price: 24.12,
  },
  { id: 3, title: "1984", author: "George Orwell", price: 7.47 },
  { id: 4, title: "Solaris", author: "Stanisław Lem", price: 12.47 },
  {
    id: 5,
    title: "Do Androids Dream of Electric Sheep?",
    author: "Philip K. Dick",
    price: 14.99,
  },
];

// Book component for rendering one book
const Book = ({ id, title, author, price, onChangePrice, onRemoveBook }) => {
  const [bookPrice, setBookPrice] = useState(price);

  const handleChangePrice = () => {
    onChangePrice(id, bookPrice);
    setBookPrice("");
  };

  return (
    <div className={`book-card`}>
      <div className="book-info">
        <div className="book-info-row">Title: {title}</div>
        <div className="book-info-row">Author: {author}</div>
        <div className="book-info-row">
          <p>Price: ${price}</p>
          <input
            type="number"
            value={bookPrice}
            onChange={(e) => setBookPrice(e.target.value)}
          />
          <button className="button" onClick={handleChangePrice}>
            Change price
          </button>
        </div>
      </div>
      <button className="button" onClick={() => onRemoveBook(id)}>
        Remove
      </button>
    </div>
  );
};

export default function Books() {
  const [books, setBooks] = useState(initialBooks);

  // Use this handler to remove the book
  const handleRemoveBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  // Use this handler to update book's price
  const handleChangePrice = (id, price) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => (book.id === id ? { ...book, price } : book))
    );
  };

  return (
    <div className="books">
      <h1>BookStore</h1>
      <div className="books-list">
        {books.map((book) => (
          <Book
            key={book.id}
            {...book}
            onChangePrice={handleChangePrice}
            onRemoveBook={handleRemoveBook}
          />
        ))}
      </div>
    </div>
  );
}
