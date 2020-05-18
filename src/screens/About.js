import React, { useEffect } from "react";
import AboutInfo from "../components/About/AboutInfo";
import "./About.css";

function About({ setCurrentPage }) {
  useEffect(() => {
    setCurrentPage("about");
  });
  // return <AboutInfo />;
  return (
    <div className="about-container">
      <AboutInfo />
    </div>
  );
}

export default About;
