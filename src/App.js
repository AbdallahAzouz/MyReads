import React from "react";
import Header from "./Components/Header";
import Shelves from "./Components/Shelves";
import SearchButton from "./Components/SearchButton";
import Search from "./Components/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((booksFromApi) => {
      setBooks(booksFromApi);
    });
  }, []);

  const changeShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    await BooksAPI.getAll().then((booksFromApi) => {
      setBooks(booksFromApi);
    });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={[
            <Header />,
            <Shelves books={books} changeShelf={changeShelf} />,
            <SearchButton />,
          ]}
        />
        <Route
          path="/search"
          element={[<Search changeShelf={changeShelf} books={books} />]}
        />
      </Routes>
    </Router>
  );
};

export default App;
