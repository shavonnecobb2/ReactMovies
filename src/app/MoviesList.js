import React from 'react';
import {Link} from 'react-router-dom';

export const MoviesList = props => {

return <>
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
      {props.movies.map(movie =>
              <tr key={movie.movieId}>
                  <td><Link to={`/movies/${movie.movieId}`}>{movie.title}</Link></td>
                  <td>{movie.year}</td>
                  <td>{movie.director}</td>
                  <td>{movie.producer}</td>
                  <td>{movie.tomatoRating}</td>
              </tr>
            )}
      </tbody>
  </table>
    <div>Would you like to <Link to="/add">add</Link> to the greatest list of all time?</div>
  </div>
  </>
}
