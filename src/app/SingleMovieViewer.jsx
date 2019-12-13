import React from 'react';
import {MovieRepository} from '../api/MovieRepository';
import {Redirect, Link} from 'react-router-dom';

export class SingleMovieViewer extends React.Component {

  movieRepository = new MovieRepository();

  state = {
    movieId: "",
    title: "",
    year: "",
    director: "",
    producer: "",
    tomatoRating: ""
  }

  render() {
    return<>
    <div class="shae-container">
    <div class="image"></div>
    <h1>Star Wars: The Saga &hearts;</h1>
      <div><Link to="/">Back to Dashboard</Link></div>
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
                <tr>
                      <td>{this.state.title}</td>
                      <td>{this.state.year}</td>
                      <td>{this.state.director}</td>
                      <td>{this.state.producer}</td>
                      <td>{this.state.tomatoRating}</td>
                  </tr>
          </tbody>
      </table>
      </div>
        </>

    }

    componentDidMount() {
          let movieId = this.props.match.params.movieId;
            this.movieRepository.getMovieById(movieId)
          .then(movie => this.setState(movie));
        }
    }
