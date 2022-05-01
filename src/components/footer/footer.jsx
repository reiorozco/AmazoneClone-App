import React from "react";
import { Link } from "react-router-dom";

import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import "./footer.css";

function Footer(props) {
  return (
    <div className="footer">
      <a className="footer__backTop none-textDecoration" href="#header">
        Back to top
      </a>

      <div className="footer__info">
        <div className="footer__info--content">
          <h3>Get to Know Us</h3>
          <div>Careers</div>
          <div>Blog</div>
          <div>About Amazon</div>
          <div>Investor Relations</div>
          <div>Amazon Devices</div>
          <div>Amazon Science</div>
        </div>

        <div className="footer__info--content">
          <h3>Make Money with Us</h3>
          <div>Sell products on Amazon</div>
          <div>Sell on Amazon Business</div>
          <div>Sell apps on Amazon</div>
          <div>Become an Affiliate</div>
          <div>Self-Publish with Us</div>
          <div>Host an Amazon Hub</div>
          <div>› See More Make Money with Us</div>
        </div>

        <div className="footer__info--content">
          <h3>Amazon Payment Products</h3>
          <div>Amazon Business Card</div>
          <div>Shop with Points</div>
          <div>Reload Your Balance</div>
          <div>Amazon Currency Converter</div>
        </div>

        <div className="footer__info--content">
          <h3>Let Us Help You</h3>
          <div>Amazon and COVID-19</div>
          <div>Your Account</div>
          <div>Your Orders</div>
          <div>Shipping Rates & Policies</div>
          <div>Returns & Replacements</div>
          <div>Manage Your Content and Devices</div>
          <div>Amazon Assistant</div>
          <div>Help</div>
        </div>
      </div>

      <div className="footer__end">
        <Link to="/">
          <img
            className="footer__end--logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon-logo"
          />
        </Link>

        <div className="footer__end--options">
          <div className="footer__end--language">
            <LanguageIcon sx={{ fontSize: 15 }} />
            <span>
              English <KeyboardArrowDownIcon fontSize="inherit" />
            </span>
          </div>

          <div>$ USD - U.S. Dollar</div>

          <div>🇺🇸 United States</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
