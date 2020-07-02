import React from 'react';
import './css/App.css';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/main';

function App() {
  return (
    <Switch>
      <Route exac path="/" component={Main}/>
    </Switch>
  );
}

export default App;
