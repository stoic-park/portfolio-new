import React, { useState } from "react";
import Project from "./Project";

// ! 프로젝트 정보 gif 이미지, 설명 등 map으로 뿌려준다

function ProjectInfo() {
  const [projects, setProjects] = useState([{}]);
  return (
    <div>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectInfo;
