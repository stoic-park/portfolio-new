import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function About(props) {
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
          <p className="intro-detail">
            <div className="intro-detail">
              사람들 틈에서 살아있음을 느낍니다
            </div>
            <div className="intro-detail">
              혼자서 대단한 일을 해내는 것 보다도 사람들과 함께
            </div>
            <div className="intro-detail">
              크기와 상관없이 명확한 결과물을 만들어 낼 때 보람을 느낍니다
            </div>
          </p>
          <p className="intro-detail">
            <div className="intro-detail">
              살아오면서 겪은 여러 차례의 리더 경험을 통해 소통하는 능력을
              익혔고
            </div>
            <div className="intro-detail">
              그중에서도 상대방의 의견을 `듣는 것`으로부터 시작하는 소통의
              자세가
            </div>
            <div className="intro-detail">
              함께하는 사람들의 니즈를 보다 명확히 파악하고
            </div>
            <div className="intro-detail">
              그에 맞춰 발빠르게 행동하는 사람으로 성장시켜주었습니다
            </div>
          </p>
          <p></p>
          {/* {mation.intro.map((int, id) => (
              <li className="intro-detail" key={id}>
                {int}
              </li>
            ))} */}
        </div>
      </div>
      <div className="About-body2">
        {/* body2 */}
        <div className="body2-box">
          <div className="About-stack">
            <div className="middle-title">{mation.stack.title}</div>
            <div className="strong">
              <div className="second-title">{mation.stack.strong.title}</div>
              <div className="element">{mation.stack.strong.element}</div>
            </div>
            <div className="experienced">
              <div className="second-title">
                {mation.stack.experienced.title}
              </div>
              <div className="element">{mation.stack.experienced.element}</div>
            </div>
            <div className="tools">
              <div className="second-title">{mation.stack.tools.title}</div>
              <div className="element">{mation.stack.tools.element}</div>
            </div>
          </div>
          <div className="About-education">
            <div className="middle-title">{mation.education.title}</div>
            <div className="element">{mation.education.description}</div>
          </div>
          <div className="About-experience">
            <div className="middle-title">{mation.experience.title}</div>
            <div className="element">
              {" "}
              {mation.experience.description.title}
            </div>
            <div className="experience-box">
              {" "}
              {mation.experience.description.detail.map((info, id) => (
                <li className="experience-detail" key={id}>
                  {info}
                </li>
              ))}
            </div>
          </div>
          <div className="About-contact">
            <div className="middle-title">{mation.contact.title}</div>
            {/* <div>{mation.contact.description.mail.name}</div> */}
            <div className="email-box">
              <FontAwesomeIcon
                className="email-icon"
                icon={faEnvelope}
                size="lg"
              />
              <div className="contact-element">
                {mation.contact.description.mail.detail}
              </div>
            </div>
            {/* <div>{mation.contact.description.github.name}</div> */}
            <div className="icon-box">
              <a
                href={mation.contact.description.github.detail}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <img className="logo" id="github-logo" src={githubLogo} alt="" /> */}
                <FontAwesomeIcon
                  className="github-icon2"
                  icon={faGithub}
                  size="3x"
                />
                {/* {mation.contact.description.github.detail} */}
              </a>
              {/* <div>{mation.contact.description.blog.name}</div> */}
              <a
                href={mation.contact.description.blog.detail}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="medium-icon"
                  icon={faMedium}
                  size="3x"
                />
                {/* <img className="logo" id="github-logo" src={githubLogo} alt="" /> */}
                {/* {mation.contact.description.blog.detail} */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
