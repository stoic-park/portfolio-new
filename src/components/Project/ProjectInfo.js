import React, { useState } from "react";
import Project from "./Project";
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
      position: "Front-End",
      duration: "2020.03",
      github: "https://github.com/stoic-park/ShareBook_Final",
      description: "",
      stack: "",
      contribution: [],
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
        {
          text: "SignOut",
          uri:
            "https://user-images.githubusercontent.com/55645972/76160083-40cfa880-616a-11ea-9286-68c9c5882b6c.gif",
        },
      ],
      name: "CheerLeader",
      position: "Back-End",
      duration: "2020.03 - 2020.04",
      github: "https://github.com/stoic-park/FirstProject-cheerleader",
      description: "",
      stack: "",
      contribution: [],
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
