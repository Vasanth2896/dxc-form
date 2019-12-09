import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Form from "./form"
import SoftwareList from "./softwarelist"
import Test from "./test"

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/softwarelist">
            <SoftwareList />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
        

        <Route path="/">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/form">Form</Link>
              </li>
              <li>
                <Link to="/softwarelist">softwarelist</Link>
              </li>
              <li>
                <Link to="/test">test</Link>
              </li>
            </ul>
          </nav>
        </Route>
        </Switch>
      </div >
    </Router >
  );
}


