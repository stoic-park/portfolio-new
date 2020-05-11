import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

//! import 할 페이지
import { Project, About } from "./screens";
import Header from "./components/Header";

function App() {
  const [currentPage, setCurrentPage] = useState("project");
  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {/* <Route exact path="/portfolio" component={Project} /> */}
      <Route exact path="/portfolio/" component={Project} />
      <Switch>
        <Route path="portfolio/project" component={Project} />
        {/* <Route path="portfolio/about" component={About} /> */}
        <Route
          path="portfolio/about"
          render={() => <About setCurrentPage={setCurrentPage} />}
        />
        {/* <Route path="portfolio/about" component={About} /> */}
      </Switch>
    </div>
  );
}

export default App;
