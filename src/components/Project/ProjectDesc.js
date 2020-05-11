import React from "react";
import "./ProjectDesc.css";

function ProjectDesc({
  name,
  position,
  duration,
  github,
  description,
  stack,
  contribution,
}) {
  // console.log(name, "props-desc");
  return (
    <div className="projectDesc-container">
      <div className="projectDesc-title">
        <span>{name}</span>
        <span>{position}</span>
        <span>{duration}</span>
        <span>{github}</span>
      </div>
      <div className="projectDesc-decription">
        <div>{description}</div>
      </div>
      <div className="projectDesc-stack">
        <div>{stack}</div>
      </div>
      <div className="projectDesc-contribution">
        <div>{contribution}</div>
      </div>
    </div>
  );
  // return <div>{name}</div>;
}

export default ProjectDesc;
