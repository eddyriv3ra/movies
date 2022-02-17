import React from "react";
import { Link } from "react-router-dom";
import "./Header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <Link to="/" className="header__link">
          <h1 className="header__title">MOVIES</h1>
        </Link>
        <Link to="/wishlist" className="header__link">
          <h1 className="header__title">Wishlist</h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
