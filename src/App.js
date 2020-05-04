import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

//! import 할 페이지
// import { Project, About } from "./screens";
// import Project from "./screens/Project.js";

function App() {
  const [currentPage, setCurrentPage] = useState("project");
  return <div className="App">Hello world</div>;
}

export default App;
