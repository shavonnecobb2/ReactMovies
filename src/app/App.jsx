import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faJediOrder } from '@fortawesome/free-brands-svg-icons'
import {faCoffee } from '@fortawesome/free-solid-svg-icons';
import {MoviesDashboard} from '../MoviesDashboard';
import {MovieEditor} from './MovieEditor';
import {SingleMovieViewer} from './SingleMovieViewer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


library.add(fab, faJediOrder, faCoffee)

export const App = () => (
<>
  <Router>
    <Switch>
      <Route path="/add" component={MovieEditor} />
      <Route path="/update/:movieId" component={MovieEditor} />
      <Route path="/movies/:movieId" component={SingleMovieViewer} />
      <Route path="/" component={MoviesDashboard} />
    </Switch>
  </Router>
</>
);
