import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MoviesList = props => {

  return <>
    <div className="fluid-container">
      <div className="shae-container">
        <div className="image"></div>
        <div className="text-section">
          <div className="topbar">
            <h1 id="title">Star Wars: The Saga</h1>
            <FontAwesomeIcon icon={['fab', 'jedi-order']} id="jedi" />
          </div>
          <div className="row">
            <div className="col">
              <table id="movie-table" className="table table-dark center">
                <thead>
                  <tr>
                    <th>Film Title</th>
                    <th>Film Release Date</th>
                    <th>Film Director</th>
                    {/* <th>Film Producer</th>
              <th>Rotten Tomato Rating</th> */}
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {props.movies.map(movie =>
                    <tr key={movie.movieId}>
                      <td className="shae-link"><Link to={`/movies/${movie.movieId}`}>{movie.title}</Link></td>
                      <td>{movie.year}</td>
                      <td>{movie.director}</td>
                      {/* <td>{movie.producer}</td>
                <td>{movie.tomatoRating}</td> */}
                      <td className="shae-link"><Link to={`/update/${movie.movieId}`}>Edit</Link></td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="add">Would you like to <span id="add-link"><Link to="/add">add</Link></span> to the greatest list of all time?</div>
        </div>
      </div>
    </div>
  </>
}
