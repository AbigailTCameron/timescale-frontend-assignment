import React from "react";
import "./Header.css";
import { SearchIcon } from "@heroicons/react/outline";

function Header({ value, doSearch }) {
  return (
    <div className="header">
      <div className="header__items">
        <img className="header__image" src="/timescale.png" alt="" />
        <div className="search__input">
          <SearchIcon className="search__icon" />
          <input
            placeholder="Search for a movie"
            type="text"
            onChange={doSearch}
            value={value}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
