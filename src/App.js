import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CreatePaste from "./components/createPaste";
import ViewPaste from "./components/viewPaste";
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "Hello @ paste.id",
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <nav className="uk-navbar-container" data-uk-navbar>
            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav">
                <li className="uk-text-bold uk-active">
                  <Link to="/">
                    paste.id
                </Link>
                </li>
                <li className="uk-active">
                  <Link to="/">
                    Create
                </Link>
                </li>
                <li>
                  <a href="//github.com/posixpascal/pasteid-web">Client Source</a>
                </li>
                <li>
                  <a href="//github.com/posixpascal/pasteid-server">Server Source</a>
                </li>
              </ul>
            </div>
          </nav>
          <Route exact path="/" component={CreatePaste} />
          <Route path="/:id" component={ViewPaste} />
        </div>
      </Router>

    );
  }
}

export default App;
