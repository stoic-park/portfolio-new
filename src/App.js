import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

//! import 할 페이지
import { Project, About } from "./screens";
import Header from "./components/Header";

function App() {
  const [currentPage, setCurrentPage] = useState("project");
  console.log(currentPage);
  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Route exact path="/portfolio-new" component={Project} />
      <Switch>
        {/* <Route path="/portfolio-new/project" component={Project} /> */}
        <Route
          path="/about"
          render={() => <About setCurrentPage={setCurrentPage} />}
        />
      </Switch>
    </div>
  );
}

export default App;
