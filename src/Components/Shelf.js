import React from "react";

import "../App.css";

import Book from "./Book";

const Shelf = ({ title, books, category, id, changeShelf }) => {
  const booksCategory = books.filter((book) => book.shelf === category);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksCategory.map((book) => (
            <Book books={book} key={id} changeShelf={changeShelf} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
