import React from 'react';
import {MoviesList} from './app/MoviesList';
import {MovieRepository} from './api/MovieRepository';

export class MoviesDashboard extends React.Component {

  movieRepository = new MovieRepository();

    state = {
      movies: []
    };


    render() {
        return <>
          <div className="container">
          <div>
          <MoviesList movies ={this.state.movies}/>
          </div>
          </div>
        </>
    }

  componentDidMount() {
    this.movieRepository.getAllMovies()
    .then(movies =>
    this.setState({
      movies: movies
    }));
  }
  }
