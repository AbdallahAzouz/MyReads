import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../App";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";

const Search = ({ changeShelf, books }) => {
  const [query, setQuery] = useState("");
  const [searchBooks, setSearchBooks] = useState([]);

  useEffect(() => {
    if (query) {
      BooksAPI.search(query).then((data) => {
        if (data.error) {
          setSearchBooks([]);
        } else {
          setSearchBooks(data);
        }
      });
    }

    return () => {
      setSearchBooks([]);
    };
  }, [query]);
  // eslint-disable-next-line array-callback-return
  const addShelf = searchBooks.map((booksSearch) => {
    books.forEach((book) => {
      if (booksSearch.id === book.id) {
        booksSearch.shelf = book.shelf;
      }
      return booksSearch;
    });
  });

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {" "}
          {searchBooks.map((book) => (
            <Book
              books={book}
              changeShelf={changeShelf}
              key={book.id}
              addShelf={addShelf}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Search;
