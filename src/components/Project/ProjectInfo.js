import React, { useState } from "react";
import Project from "./Project";

// ! 프로젝트 정보 gif 이미지, 설명 등 map으로 뿌려준다

function ProjectInfo() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      gifDirection: "vertical",
      gifs: [
        {
          text: "",
          uri: "dd",
        },
      ],
      name: "ShareBook",
      position: "Front-End",
      duration: "2020.03",
      github: "https://github.com/stoic-park/ShareBook_Final",
      description: "",
      stack: "",
      contribution: [],
    },
    {
      id: 2,
      gifDirection: "vertical",
      gifs: [
        {
          text: "",
          uri: "dd",
        },
      ],
      name: "CheerLeader",
      position: "Back-End",
      duration: "2020.03 - 2020.04",
      github: "https://github.com/stoic-park/FirstProject-cheerleader",
      description: "",
      stack: "",
      contribution: [],
    },
  ]);
  return (
    <div>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectInfo;
