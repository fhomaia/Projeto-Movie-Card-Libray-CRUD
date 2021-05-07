import React from 'react';
import './App.css'
import {BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      <Switch>
      <Route exact path="/" render={ () => <MovieList/> } />
      <Route path="/movies/new" render={ () => <NewMovie /> } />
      <Route exact path="/movies/:id" render={ (props) => <MovieDetails {...props} /> } />
      <Route path="/movies/:id/edit" render={ (props) => <EditMovie {...props} /> } />
      <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
