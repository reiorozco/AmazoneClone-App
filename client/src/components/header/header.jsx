import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import { auth } from "../../firebase";

import "./header.css";

function Header(props) {
  const basket = useSelector((state) => state.basket.list);
  const user = useSelector((state) => state.currentUser.user);

  const navigate = useNavigate();

  const handleAuth = () => {
    user
      ? signOut(auth)
          .then(() => {
            // Sign-out successful.
            alert("Sign-out successful.");
            navigate("/");
          })
          .catch((error) => {
            // An error happened.
            alert(error.message);
          })
      : navigate("/login");
  };

  return (
    <>
      <div className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon-logo"
          />
        </Link>

        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
          {/*<Link className="none-textDecoration" to={!user && "/login"}>*/}
          <div className="header__option pointer" onClick={handleAuth}>
            <span className="header__optionLineOne">
              Hello {user ? "User" : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
          {/*</Link>*/}

          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>

          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>

          <Link className="none-textDecoration" to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket.length}
              </span>
            </div>
          </Link>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default Header;
