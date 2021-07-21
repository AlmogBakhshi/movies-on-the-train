import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './scss/style.scss';
import Movies from './components/movies';
import CreateMovie from './components/movies/create_movie';
import MovieDetails from './components/movies/movie_details';
import EditMovie from './components/movies/edit_movie';

function App() {
  return (
    <BrowserRouter basename='/'>
      <Switch>
        <Route path='/edit/:id' component={EditMovie} />
        <Route path='/details/:id' component={MovieDetails} />
        <Route path='/create' component={CreateMovie} />
        <Route path='/' component={Movies} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
