import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Books from "./pages/Books";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";

import { books } from "./data";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) =>
        item.id === book.id ? { ...item, quantity: quantity } : item
      )
    );
  }

  function removeFromCart(id) {
    setCart(cart.filter((book) => book.id !== id));
  }

function numberOfItems() {
  return cart.reduce((total, book) => total + (book.quantity || 1), 0);
}

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Nav numberOfItems={numberOfItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route
            path="/books/:id"
            element={
              <BookInfo
                books={books}
                cart={cart}
                setCart={setCart}
                addToCart={addToCart}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                changeQuantity={changeQuantity}
                removeFromCart={removeFromCart}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
