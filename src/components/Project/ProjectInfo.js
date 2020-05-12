import React, { useState } from "react";
import Project from "./Project";
// gif
import SignIn from "../../images/gifs/signIn.gif";
import BorrowRequest from "../../images/gifs/borrowRequest.gif";
import SignUp from "../../images/gifs/signUp.gif";
import UploadBook from "../../images/gifs/uploadBook.gif";

// ! 프로젝트 정보 gif 이미지, 설명 등 map으로 뿌려준다

function ProjectInfo() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      // gifDirection: "vertical",
      gifDirection: "project1",
      gifs: [
        {
          text: "SignIn",
          uri: SignIn,
        },
        {
          text: "SignUp",
          uri: SignUp,
        },
        {
          text: "UploadBook",
          uri: UploadBook,
        },
        {
          text: "BorrowRequest",
          uri: BorrowRequest,
        },
      ],
      name: "ShareBook",
      role: "팀장",
      position: "Front-End",
      duration: "2020.03",
      github: "https://github.com/stoic-park/ShareBook_Final",
      // description: [
      //   `"우리 집에 한 번 읽고, 읽지 않는 책들을 가까운 이웃들과 공유하는 건 어떨까?"`,
      //   `라는 생각에서 시작된 쉐어북은 우리동네 중고책 대여 서비스 입니다.`,
      //   `한번 읽고 책장에 꽂아 놓은 책, 버리기엔 아까운 책들을 필요한 사람들과 공유하는 플랫폼으로 새로운 도서 분야의 아나바다 운동이 될 것입니다.`,
      //   `이번 기회에 잠자고 있는 여러분의 책들을 꺼내 보면 어떨까요?`,
      // ],
      notion:
        "https://www.notion.so/5-five-fingers-ShareBook-0a206a8176914268af72da238a016130",
      description: "지역 내 중고책 거래 모바일 서비스",
      stack:
        "React Native, React Navigation, Redux, Material UI, Expo, 카카오 API",
      contribution: [
        `전체적인 디자인 기획 및 컴포넌트 구조 설계`,
        `리액트 네이티브, 네비게이션을 이용한 전체적인 흐름 설계 및 구현`,
        `리덕스를 통한 store 관리 구현`,
        `리액트 훅스를 이용한 각 페이지별 스테이트 관리 구현`,
        `Camera 사용을 위한 API 사용 ( expo camera,  permission, media-library, image-picker )`,
        `도서 정보를 위한 API 사용 ( 카카오 책 검색 API )`,
        `Flexbox를 이용한 전반적인 CSS 레이아웃 적용`,
        `Material UI 를 이용한 CSS 디자인`,
      ],
    },
    {
      id: 2,
      gifDirection: "project2",
      gifs: [
        {
          text: "SigIn & GetMessage",
          uri:
            "https://user-images.githubusercontent.com/55645972/76160066-21388000-616a-11ea-9bd2-20f29fe95a76.gif",
        },
        // {
        //   text: "SignOut",
        //   uri:
        //     "https://user-images.githubusercontent.com/55645972/76160083-40cfa880-616a-11ea-9286-68c9c5882b6c.gif",
        // },
      ],
      name: "CheerLeader",
      role: "팀장",
      position: "Back-End",
      duration: "2020.03 - 2020.04",
      github: "https://github.com/stoic-park/FirstProject-cheerleader",
      description: "랜덤 응원 메세지 웹 서비스",
      stack: "Node.js, Express, MySQL, Sequelize, JWT",
      contribution: [
        `원활한 프로젝트 협업을 위해 기능 단위로 MVC 패턴 기반 컴포넌트 구성`,
        `데이터 관리를 위해 Mysql, Sequelize 를 이용해 DB 구축`,
        `인증을 위한 JWT 토큰 적용으로 보안성을 높임`,
      ],
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
