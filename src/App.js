import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks'
// import logo from './logo.svg';
// import './App.css';
import PokemonDetail from './containers/PokemonDetail';
import PokemonList from './containers/PokemonList';
import client from './services'

function App() {
  return (
    <ApolloProvider client={ client }>
      <Router>
        <Switch>
          <Route path='/detail/:name'>
            <PokemonDetail />
          </Route>
          <Route path='/'>
            <PokemonList />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
