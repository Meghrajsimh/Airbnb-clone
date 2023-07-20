import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/LanguageRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avtar from "@mui/icons-material/AccountCircle";

function Header() {
  return (
    <div className="header">
      {/* <a href="/"> */}
        <img
          className="header_icon"
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
          alt="icon"
        />
      {/* </a> */}

      <div className="header_center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header_right">
        <p>Become Host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avtar />
      </div>
    </div>
  );
}

export default Header;
