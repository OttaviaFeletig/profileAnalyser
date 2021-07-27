import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Appbar from "./components/Appbar";
import LogIn from "./Views/LogIn";
import Home from "./Views/Home";
import SignUp from "./Views/SignUp";
import DisplayText from "./Views/DisplayText";
import AddDatingText from "./Views/AddDatingText";
import AAbla from "./AAbla";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
function App() {
  return (
    <div className="App">
      <Router>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Appbar />
        <Switch>
          <Route exact path="/login" children={<LogIn />} />
            <Route exact path="/testing" children={<AAbla />} />
            <Route exact path="/displayText" children={<DisplayText />} />
            <Route exact path="/addDatingText" children={<AddDatingText />} />
          <Route exact path="/signup" children={<SignUp />} />
           <Route exact path="/" children={<Home />} />
          </Switch>
          </MuiPickersUtilsProvider>
      </Router>
    </div>
  );
}

export default App;
