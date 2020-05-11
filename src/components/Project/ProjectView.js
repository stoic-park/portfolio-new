import React from "react";
import "./ProjectView.css";

function ProjectView(props) {
  return (
    <div className="projectView-container">
      {props.gifs.map((gif, idx) => (
        <div
          className={
            props.gifDirection
            // props.gifDirection === "vertical" ? "vertical" : "horizontal"
          }
          key={`${props.id}_${idx}`}
        >
          <img className="gif" alt="" src={gif.uri} />
          <div>{gif.text}</div>
        </div>
      ))}
    </div>
  );
}
export default ProjectView;
