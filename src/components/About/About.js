import React from "react";
// import ProjectDesc from "./ProjectDesc";
// import ProjectView from "./ProjectView";
// import "./Project.css";

// ! ProjectView / ProjectDesc 불러와서
// ProjectInfo에서 받은 props를 내려주고
//
function About({ About }) {
  // console.log(About);
  return (
    <div className="About-box">
      hellow-about
      {/* <AboutView
        id={About.id}
        gifs={About.gifs}
        gifDirection={About.gifDirection}
      /> */}
      {/* <AboutDesc {...About} /> */}
    </div>
  );
}

export default About;
