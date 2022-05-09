import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CharacterCard from './components/CharacterCard';
import Main from './views/Main';

export default function App() {
  return (
    <Switch>
      {/* wrap each new path in a route */}
      <Route path="/:id">
        <CharacterCard />
      </Route>
      <Route path="/">
        <Main />
      </Route>
    </Switch>
  );
}
