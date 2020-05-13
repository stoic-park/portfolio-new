import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Lama from "../images/gifs/라마.png";

function Header(props) {
  // console.log(props);
  return (
    <div className="header-container">
      <div className="header-left">
        <img className="Lama" src={Lama} alt="" />
        <div className="title-box">
          <Link
            className="name"
            to="/portfolio-new"
            onClick={() => props.setCurrentPage("project")}
          >
            Sungtaek Park
          </Link>
          <Link
            className="future"
            to="/portfolio-new"
            onClick={() => props.setCurrentPage("project")}
          >
            꾸준히 성장하는 소통 전문 개발자
          </Link>
        </div>
      </div>
      <div className="header-right">
        <Link
          className={
            props.currentPage === "project" ? "link underLine" : "link"
          }
          to="/portfolio-new"
          onClick={() => props.setCurrentPage("project")}
        >
          Project
        </Link>
        <Link
          className={props.currentPage === "about" ? "link underLine" : "link"}
          to="/about"
          onClick={() => props.setCurrentPage("about")}
        >
          About
        </Link>
      </div>
    </div>
  );
}

export default Header;
