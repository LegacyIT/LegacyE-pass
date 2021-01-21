import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import LegacyAM from "./components/legacyforms/AM";
import LegacyCR from "./components/legacyforms/CR";
import LegacyGS from "./components/legacyforms/GS";
import LegacyIT from "./components/legacyforms/IT";
import Template from "./components/template/Template";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/LegacyAM" component={LegacyAM} />
        <Route exact path="/LegacyCR" component={LegacyCR} />
        <Route exact path="/LegacyGS" component={LegacyGS} />
        <Route exact path="/LegacyIT" component={LegacyIT} />
        <Route exact path="/template" component={Template} />
      </Switch>
    </HashRouter>
  );
}

export default App;
