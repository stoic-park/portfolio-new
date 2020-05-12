import React, { useState } from "react";
import About from "./About";

function AboutInfo() {
  const [infos, setInfos] = useState([]);
  return (
    <div>
      {infos.map((info) => (
        <About key={info.id} info={info} />
      ))}
      {/* hello */}
    </div>
  );
}

export default AboutInfo;
