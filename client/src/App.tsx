import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Appbar from "./components/Appbar";
import LogIn from "./Views/LogIn";
import AAbla from "./AAbla";
function App() {
  return (
    <div className="App">
      <Router>
        <Appbar />
        <Switch>
          <Route exact path="/login" children={<LogIn />} />
          <Route exact path="/testing" children={<AAbla />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
