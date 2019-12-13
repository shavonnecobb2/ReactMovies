import React from 'react';
import {MovieRepository} from '../api/MovieRepository';
import {SingleMovieList} from './SingleMovieList';
import {Redirect, Link} from 'react-router-dom';

export class SingleMovieViewer extends React.Component {

  constructor(movieId) {
    this.movieId = movieId;
  }

  movieRepository = new MovieRepository();

  state = {
    movies: []
  }

  render() {
    return<>

    <div class="container">
    <div>
    <div class="shae-container">
    <div class="image"></div>
    <h1>Star Wars: The Saga &hearts;</h1>
      <table class="center">
          <thead>
              <tr>
                  <th>Film Title</th>
                  <th>Film Release Date</th>
                  <th>Film Director</th>
                  <th>Film Producer</th>
                  <th>Rotten Tomato Rating</th>
              </tr>
          </thead>
          <tbody>
          {this.state.map(movie =>
                  <tr key={movie.movieId}>
                      <td>{movie.title}</td>
                      <td>{movie.year}</td>
                      <td>{movie.director}</td>
                      <td>{movie.producer}</td>
                      <td>{movie.tomatoRating}</td>
                  </tr>
                )}
          </tbody>
      </table>
      </div>
    </div>
      </div>
        </>

    }

    componentDidMount() {
          let movieId = this.props.match.params.movieId;
        if (movieId) {
            this.movieRepository.getMovieById(movieId)
                .then(movie => this.setState(movie));
        }
    }

    // componentDidMount() {
    //   this.movieRepository.getAllMovies()
    //   .then(movies =>
    //   this.setState({
    //     movies: movies
    //   }));
    // }
  }
