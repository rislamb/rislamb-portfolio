import React from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
            <nav>
              <ul id="navigation">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
            <Switch>
            <Route exact path="/">
              <div>hi</div>
            </Route>
            <Route path="/about">
              <div>about</div>
            </Route>
          </Switch>
    </div>
  );
}

export default App;
