import React, { useEffect } from "react";
import AboutInfo from "../components/About/AboutInfo";

function About({ setCurrentPage }) {
  useEffect(() => {
    setCurrentPage("about");
  });
  return <AboutInfo />;
  // return <div>hello</div>;
}

export default About;
