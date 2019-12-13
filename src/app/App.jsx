import React from 'react';
import './App.css';
import {MoviesDashboard} from '../MoviesDashboard';
import {MovieEditor} from './MovieEditor';
import {SingleMovieViewer} from './SingleMovieViewer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export const App = () => (
  <>
  <Router>
    <Switch>
      <Route path="/add" component={MovieEditor} />
      <Route path="/movies/:movieId" component={SingleMovieViewer} />
      <Route path="/" component={MoviesDashboard} />
    </Switch>
  </Router>
</>
);
