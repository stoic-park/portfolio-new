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
        // uri: Machu,
        uri:
          "https://sharebook-gifs.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EC%B6%94%ED%94%BC%EC%A3%BC-%EB%B0%B1%EC%83%B7.png",
      },
      intro: [
        <p>
          사람틀 틈에서 살아있음을 느낍니다 혼자서 대단한 일을 해내는 것 보다도
          사람들과 함께 크기와 상관없이 명확한 결과물을 만들어 낼 때 보람을
          느낍니다 살아오면서 겪은 여러 차례의 리더 경험을 통해 소통하는 능력을
          익혔고 그 중에서도 상대방의 의견을 `듣는 것`으로부터 시작하는 소통의
          자세가 함께하는 사람들의 니즈를 보다 명확히 파악하고 그에 맞춰
          발빠르게 행동하는 사람으로 성장시켜주었습니다
        </p>,
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
