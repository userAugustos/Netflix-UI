import React from 'react';
import './css/App.css';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Login from './pages/login';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route path="/login" component={Login}/>
    </Switch>
  );
}

export default App;
