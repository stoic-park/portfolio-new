import React, { useState } from "react";
import About from "./About";
import Rio from "../../images/png/rio1.png";
import Machu from "../../images/png/machuback.png";

function AboutInfo() {
  // 필요한 정보들
  // 1. 사진
  // 2. 간단 소개
  // 3. 사용 스택
  // 4. 교육
  // 5. 경험
  // 6. 컨택
  const [infos, setInfos] = useState([
    {
      photo: {
        // name: "rio",
        // uri: Rio,
        uri: Machu,
      },
      intro: [
        "  사람들과의 소통을 기반으로 함께 성장하기를 기대하는 주니어 개발자입니다 ",
        // " 여러 차례의 리더 경험을 통해 함께 일하는 사람들과 소통하는 능력을 갖췄습니다",
        // " 제가 생각하는 소통의 가장 중요한 요소는 바로 듣는 것입니다",
        // " 사람들의 의견을 듣는 것을 시작으로 모두가 원하는 목표를 달성하기 위해 묵묵히 움직입니다",
        // " 개발자로써 이러한 소통 능력을 기반으로 모두가 바라보는 목적지로 향하게 할 준비가 돼있습니다",
      ],
      stack: {
        title: "STACK",
        strong: {
          title: "Strong",
          element: "React, React-native, Redux",
          // 허허...좀 추가 해야겠구만?
        },
        experienced: {
          title: "Experienced",
          element: "Node.js, Express, MySQL, Sequelize, AWS",
        },
        tools: {
          title: "Tool",
          element: "Git, Notion, Slack",
        },
      },
      education: {
        title: "EDUCATION",
        description: "Code States, Immersive Course 17th",
      },
      experience: {
        title: "EXPERIENCE",
        description: {
          title: "2013.04 ~ 2015.06 / 육군 장교 (화생방 신속대응팀장, 소대장)",
          detail: [
            "화생방 특수 상황 하 대응 조치",
            "민관 기관 화생방 관련 교육",
          ],
        },
      },
      contact: {
        title: "CONTACT",
        description: {
          github: {
            name: "Github",
            detail: "https://github.com/stoic-park",
          },
          mail: {
            name: "Mail",
            detail: "demige79@gmail.com",
          },
          blog: {
            name: "Blog",
            detail: "https://medium.com/@benomadWill",
          },
        },
      },
    },
  ]);
  return (
    <div className="About-info">
      <About infos={infos} />
    </div>
  );
}

export default AboutInfo;
