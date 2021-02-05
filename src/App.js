import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import LegacyAM from "./components/legacyforms/AM";
import LegacyCR from "./components/legacyforms/CR";
import LegacyGS from "./components/legacyforms/GS";
import LegacyIT from "./components/legacyforms/IT";
import Greeting from "./components/greeting/Greeting";
// import Template from "./components/template/Template";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/LegacyAM" component={LegacyAM} />
        <Route exact path="/LegacyCR" component={LegacyCR} />
        <Route exact path="/LegacyGS" component={LegacyGS} />
        <Route exact path="/LegacyIT" component={LegacyIT} />
        <Route exact path="/greeting" component={Greeting} />
      </Switch>
    </HashRouter>
  );
}

export default App;
