import React from "react";
import "./ProjectDesc.css";

function ProjectDesc({
  name,
  role,
  position,
  duration,
  github,
  notion,
  description,
  stack,
  contribution,
}) {
  // console.log(name, "props-desc");
  return (
    <div className="projectDesc-container">
      <div className="projectDesc-title">
        <span className="title-name">{name}</span>
        <div className="role-position">
          <span className="title-position">{position}</span>
          <span className="title-role">{role}</span>
        </div>
        <span className="title-duration">{duration}</span>
        <div className="title-emoticon">
          <span className="github">
            {
              <a href={github} target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </a>
            }
          </span>
          <span className={notion ? "notion" : "notionEmpty"}>
            {
              <a href={notion} target="_blank" rel="noopener noreferrer">
                Notion Page
              </a>
            }
          </span>
        </div>
      </div>
      <div className="projectDesc-description">
        <span className="description-title">Description</span>
        <div className="description-detail">{description}</div>
        {/* {description.map((work, idx) => (
          <li className="font16" key={idx}>
            {work}
          </li>
        ))} */}
      </div>
      <div className="projectDesc-stack">
        <div className="stack-title">Stack</div>
        <div className="stack-detail">{stack}</div>
      </div>
      <div className="projectDesc-contribution">
        <span className="contribution-title">Contribution</span>
        {contribution.map((work, idx) => (
          <li className="contribution-detail" key={idx}>
            {work}
          </li>
        ))}
      </div>
    </div>
  );
}

export default ProjectDesc;
