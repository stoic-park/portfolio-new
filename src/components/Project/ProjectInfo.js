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
          // uri: SignIn,
          uri:
            "https://sharebook-gifs.s3.ap-northeast-2.amazonaws.com/signIn.gif",
          // "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4daa9fe2-8f78-40b5-aeff-0bdfd3600839/signIn.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200525T051334Z&X-Amz-Expires=86400&X-Amz-Signature=ff4a0b27ced8c11fe9a8c5c1a318154438b39465acb1953c65d3f0811f5da222&X-Amz-SignedHeaders=host",
        },
        {
          text: "SignUp",
          // uri: SignUp,
          uri:
            "https://sharebook-gifs.s3.ap-northeast-2.amazonaws.com/signUp.gif",
          // "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/142c1e7c-25f6-4bdd-ad99-5596a79f77b4/signUp.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200525T051334Z&X-Amz-Expires=86400&X-Amz-Signature=fa5f0cac36809eea75af65909b4acc453117521078dc0f833c51338b966d8b30&X-Amz-SignedHeaders=host",
        },
        {
          text: "UploadBook",
          // uri: UploadBook,
          uri:
            "https://sharebook-gifs.s3.ap-northeast-2.amazonaws.com/uploadBook.gif",
          // "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e3144992-6264-4767-8810-f8088c685e6b/uploadBook.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200525T051334Z&X-Amz-Expires=86400&X-Amz-Signature=8a1015026196c6f82079c74b52aa69716464a47c18bc84ee8fa9215298bda0e1&X-Amz-SignedHeaders=host",
        },
        {
          text: "BorrowRequest",
          // uri: BorrowRequest,
          uri:
            "https://sharebook-gifs.s3.ap-northeast-2.amazonaws.com/borrowRequest.gif",
          // "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/dac9f852-344f-4609-80d4-579840a38295/borrowRequest.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200525T051335Z&X-Amz-Expires=86400&X-Amz-Signature=c47467ffdfb66a6f0f8935f0695552f420302979f31beba9c723d4a1386359a7&X-Amz-SignedHeaders=host",
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
        `프로젝트 초기 프론트엔드 컴포넌트 구조 설계`,
        `- React Navigation 을 통해 초기 페이지 구성 및 설계를 통해 협업에 기여함`,
        `도서 등록 페이지 state 관리 개선`,
        `- 서버 데이터를 Redux를 통해 관리하고, 페이지 내에서 필요한 데이터는 React Hooks를 통해 관리함으로써 state 관리 효율성에 기여`,
        `카메라 사용을 위한 Expo API 사용`,
        `- Expo Permission, Camrera, ImagePicker, MediaLibrary API를 이용해 카메라 권한 접근 및 촬영, 불러오기 기능 구현`,
        `객관적 도서 정보 획득을 위한 API 사용`,
        `- 도서 등록 시 카카오 도서 검색 API를 통해 객관적인 정보를 사용`,
        `Material UI, Flexbox를 이용한 전반적인 CSS 레이아웃 및 디자인 구현`,
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
        `프로젝트 초기 전체적인 백엔드 구조 설계`,
        `- 기능단위 MVC 패턴을 적용한 컴포넌트 구성`,
        `JWT를 이용한 보안성 향상에 기여`,
        `- session을 통한 회원 데이터 관리 방식에서 JWT토큰을 이용해서 보안성을 높임`,
        `MySQL, Sequelize를 통한 DB 설계 및 구축`,
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
