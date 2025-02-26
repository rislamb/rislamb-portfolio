import React from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import 'antd/dist/antd.css';
import { Gallery } from './components/Gallery';
import { concepts, illos } from './components/allImages';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Gallery arts={illos} />
        </Route>
        <Route exact path="/concept">
          <Gallery arts={concepts} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
