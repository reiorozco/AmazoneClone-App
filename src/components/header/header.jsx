import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import DehazeIcon from "@mui/icons-material/Dehaze";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { departments } from "../../utils/departamentsData";
import { auth } from "../../../firebase";
import Footer from "../footer/footer";

import "./header.css";

function Header() {
  const basket = useSelector((state) => state.basket.list);
  const user = useSelector((state) => state.currentUser.user);

  const navigate = useNavigate();

  const amount = basket.reduce((acc, curr) => acc + curr.amount, 0);

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
      <div className="header" id="header">
        <Link to="/">
          <img
            className="header__logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon-logo"
          />
        </Link>

        <div className="header__optionLocation pointer">
          <LocationOnIcon />
          <div>
            <span className="header__optionLineOne">Deliver to</span>
            <span className="header__optionLineTwo">Colombia</span>
          </div>
        </div>

        <div className="header__search">
          <div className="header__searchMenu">
            <select className="pointer">
              {departments.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <input type="text" className="header__searchInput" />

          <SearchIcon className="header__searchIcon pointer" />
        </div>

        <div className="header__nav">
          {/*<Link className="none-textDecoration" to={!user && "/login"}>*/}
          <div className="header__option pointer" onClick={handleAuth}>
            <span className="header__optionLineOne">
              Hello {user ? user.email : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
          {/*</Link>*/}

          <Link className="none-textDecoration" to="/orders">
            <div className="header__option header__optionOrders pointer">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>

          <div className="header__option pointer">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>

          <Link className="none-textDecoration" to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                {amount}
              </span>
            </div>
          </Link>
        </div>
      </div>

      <div className="header__bottom">
        <div className="header__bottom--icon pointer">
          <DehazeIcon sx={{ paddingLeft: "9px" }} />
          <span>All</span>
        </div>

        <span>{"Today's Deals"}</span>
        <span>Customer Service</span>
        <span>Registry</span>
        <span>Gift Cards</span>
        <span>Sell</span>
      </div>

      <Outlet />

      <Footer />
    </>
  );
}

export default Header;
