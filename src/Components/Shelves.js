import React from "react";
import Shelf from "./Shelf";

const Shelves = ({ books, changeShelf }) => {
  return (
    <div className="list-books-content">
      <Shelf
        title="currentlyReading"
        books={books}
        category="currentlyReading"
        changeShelf={changeShelf}
      />
      <Shelf
        title="WantToRead"
        books={books}
        category="wantToRead"
        changeShelf={changeShelf}
      />
      <Shelf
        title="Read"
        books={books}
        category="read"
        changeShelf={changeShelf}
      />
    </div>
  );
};

export default Shelves;
