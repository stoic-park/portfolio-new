import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  // console.log(props);
  return (
    <div className="header-container">
      <div className="header-left">
        <Link
          className="name"
          to="/portfolio"
          onClick={() => props.setCurrentPage("project")}
        >
          Sungtaek Park
        </Link>
      </div>
      <div className="header-right">
        <Link
          className={
            props.currentPage === "project" ? "link underLine" : "link"
          }
          to="/portfolio"
          onClick={() => props.setCurrentPage("project")}
        >
          Project
        </Link>
        <Link
          className={props.currentPage === "about" ? "link underLine" : "link"}
          to="/portfolio/about"
          onClick={() => props.setCurrentPage("about")}
        >
          About
        </Link>
      </div>
    </div>
  );
}

export default Header;
