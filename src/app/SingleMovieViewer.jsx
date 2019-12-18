import React from 'react';
import { MovieRepository } from '../api/MovieRepository';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    return <>
      {this.state.redirect && <Redirect to="/" />}
      <div className="shae-container">
        <div className="image"></div>
        <div className="text-section">
          <div className="topbar">
            <h2>{this.state.title}</h2>
            <FontAwesomeIcon icon={['fab', 'jedi-order']} id="jedi" />
          </div>
          <div className="dashboard"><Link to="/">Back to Dashboard</Link></div>
          <table className="center">
            <thead>
              <tr>
                <th>Film Title</th>
                <th>Film Release Date</th>
                <th>Film Director</th>
                <th>Film Producer</th>
                <th>Rotten Tomato Rating</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.title}</td>
                <td>{this.state.year}</td>
                <td>{this.state.director}</td>
                <td>{this.state.producer}</td>
                <td>{this.state.tomatoRating}</td>
                <td> <button type="button" className="delete-btn"
                  onClick={e => this.delete()}>
                  Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>

  }

  componentDidMount() {
    let movieId = this.props.match.params.movieId;
    this.movieRepository.getMovieById(movieId)
      .then(movie => this.setState(movie));
  }


  delete() {
    var onDeleteComplete = () => this.setState({ redirect: true })

    alert("Are you want to delete?");

    this.movieRepository.deleteMovie(this.state.movieId, this.state)
      .then(onDeleteComplete);
  }
}
