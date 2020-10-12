import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Youtube.png/800px-Youtube.png"
          />
        </Link>
      </div>
      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar src="https://scontent.fmaa11-1.fna.fbcdn.net/v/t1.0-9/92022440_2659822870907323_4864082219708186624_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=t1MTmRia3LsAX9FMHRZ&_nc_ht=scontent.fmaa11-1.fna&oh=4801202096229e1313b8ea744a82789e&oe=5F9007D7" />
      </div>
    </div>
  );
}

export default Header;
