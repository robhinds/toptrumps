import React from 'react';
import logo from './logo.svg';
import { Route, Redirect } from "react-router-dom";
import GameContainer from './containers/GameContainer.js'
import NavBarContainer from './containers/NavBarContainer.js'

function App() {
  return (
    <div className="App" >
      <NavBarContainer />
      <main role="main" >
        <Route exact path="/" render={() => <Redirect to="/play" />} />
        <Route exact path="/play" component={GameContainer} />
      </main>
    </div>
  );
}

export default App;
