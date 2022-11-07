import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Book from "./components/Book";
import BookSVG from "./assets/image/book.svg";
import books from "./data/books.json";
import Cart from "./components/Cart";
import AppStateProvider from "./components/AppState";

const App = () => {
  const data = JSON.parse(JSON.stringify(books));

  return (
    <AppStateProvider>
      <div className="App container">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="header">
              <img src={BookSVG} alt="Book Logo" className="App-logo" />
              <Cart />
            </div>
            <div className="checkout">
              <button type="button" className="btn btn-secondary">
                Checkout
              </button>
            </div>
            <ul>
              {data.map((book: any) => (
                <Book key={book.id} book={book} />
              ))}
            </ul>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </AppStateProvider>
  );
};

export default App;
