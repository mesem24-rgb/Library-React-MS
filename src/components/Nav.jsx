import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import libraryLogo from "../assets/Library.svg";
import { Link } from "react-router-dom";

const Nav = ({ numberOfItems }) => {
  function openMenu() {
    document.body.classList.add("menu--open");
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img src={libraryLogo} className="logo" alt="Library Logo" />
        </Link>

        <ul>
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>

          <li className="nav__list">
            <Link to="/books" className="nav__link">
              Books
            </Link>
          </li>

          {/* Mobile Menu Button */}
          <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon="bars" />
          </button>

          {/* Cart Icon */}
          <li className="nav__icon">
            <Link to="/cart" className="nav__link">
              <FontAwesomeIcon icon="shopping-cart" />
            </Link>

            {numberOfItems > 0 && (
              <span className="cart__length">{numberOfItems}</span>
            )}
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className="menu__backdrop">
          <button className="btn__menu--close btn" onClick={closeMenu}>
            <FontAwesomeIcon icon="times" />
          </button>

          <ul>
            <li className="menu__list">
              <Link to="/" className="menu__link" onClick={closeMenu}>
                Home
              </Link>
            </li>

            <li className="menu__list">
              <Link to="/books" className="menu__link" onClick={closeMenu}>
                Books
              </Link>
            </li>

            <li className="menu__list">
              <Link to="/cart" className="menu__link" onClick={closeMenu}>
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

