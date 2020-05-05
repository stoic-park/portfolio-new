import React from "react";
import ProjectDesc from "./ProjectDesc";
import ProjectView from "./ProjectView";
import "./Project.css";

// ! ProjectView / ProjectDesc 불러와서
// ProjectInfo에서 받은 props를 내려주고
//
function Project({ project }) {
  // console.log(project);
  return (
    <div className="project-box">
      <ProjectView
        id={project.id}
        gifs={project.gifs}
        gifDirection={project.gifDirection}
      />
      <ProjectDesc {...project} />
    </div>
  );
}

export default Project;
