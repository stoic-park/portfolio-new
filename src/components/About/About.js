import React from "react";
import "./About.css";

function About(props) {
  // console.log(props.infos[0].photo);
  const mation = props.infos[0];
  console.log(mation);
  return (
    <div className="About-box">
      {/* box */}
      <div className="About-body1">
        {/* body1 */}
        <div className="About-photo">
          <img className="rio" alt="" src={mation.photo.uri} />
          {/* <div className="gif-name">{mation.photo.name}</div> */}
        </div>
        <div className="About-intro">
          {mation.intro.map((int, id) => (
            <li className="intro-detail" key={id}>
              {int}
            </li>
          ))}
        </div>
      </div>
      <div className="About-body2">
        {/* body2 */}
        <div className="About-stack">
          <div>{mation.stack.title}</div>
          <div>{mation.stack.frontend.title}</div>
          <div>{mation.stack.frontend.strong}</div>
          <div>{mation.stack.backend.title}</div>
          <div>{mation.stack.backend.strong}</div>
          <div>{mation.stack.deploy.title}</div>
          <div>{mation.stack.deploy.strong}</div>
          <div>{mation.stack.tools.title}</div>
          <div>{mation.stack.tools.description}</div>
        </div>
        <div className="About-education">
          <div>{mation.education.title}</div>
          <div>{mation.education.description}</div>
        </div>
        <div className="About-experience">
          <div>{mation.experience.title}</div>
          <div> {mation.experience.description.title}</div>
          <div>
            {" "}
            {mation.experience.description.detail.map((info, id) => (
              <li className="experience-detail" key={id}>
                {info}
              </li>
            ))}
          </div>
        </div>
        <div className="About-contact">
          <div>{mation.contact.title}</div>
          <div>{mation.contact.description.mail.name}</div>
          <div>{mation.contact.description.mail.detail}</div>
          <div>{mation.contact.description.github.name}</div>
          <div>{mation.contact.description.github.detail}</div>
          <div>{mation.contact.description.blog.name}</div>
          <div>{mation.contact.description.blog.detail}</div>
          {/* <a href="#" onClick={handleClickGithub}>
            https://github.com/stoic-park/{" "}
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default About;
