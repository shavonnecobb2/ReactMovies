import React from 'react';
import {MovieRepository} from '../api/MovieRepository';
import {Redirect, Link} from 'react-router-dom';

export class MovieEditor extends React.Component {

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
    {this.state.redirect && <Redirect to="/" />}
    <div class="shae-container">
    <div class="image"></div>
    <h1>Star Wars: The Saga Movie Editor &hearts;</h1>
    <form className="container">
                <div><Link to="/">Back to Dashboard</Link></div>
                <div className="form-group">
                    <label htmlFor="movieId">Movie Id</label>
                    <input type="text" id="movieId" name="movieId" className="form-control"
                        value={this.state.movieId} onChange={e => this.setState({ movieId: e.target.value })} />
                </div>

                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" className="form-control"
                        value={this.state.title} onChange={e => this.setState({ title: e.target.value })} />
                </div>

                <div className="form-group">
                    <label htmlFor="year">
                        <input type="text" id="year" name="year" className="form-control"
                            checked={this.state.year} onChange={e => this.setState({ year: e.target.value })} />
                    </label>
                </div>

                <div className="form-group">
                    <label htmlFor="director">
                        <input type="text" id="director" name="director" className="form-control"
                            checked={this.state.director} onChange={e => this.setState({ director: e.target.value })} />
                    </label>
                </div>

                <div className="form-group">
                    <label htmlFor="producer">
                        <input type="text" id="producer" name="producer" className="form-control"
                            checked={this.state.producer} onChange={e => this.setState({ producer: e.target.value })} />
                    </label>
                </div>

                <div className="form-group">
                    <label htmlFor="tomatoRating">
                        <input type="text" id="tomatoRating" name="tomatoRating" className="form-control"
                            checked={this.state.tomatoRating} onChange={e => this.setState({ tomatoRating: e.target.value })} />
                    </label>
                </div>

                <div>
                    <button type="button" className="btn btn-primary btn-lg btn-block"
                    onClick={e => this.onSubmit()}>
                        Add!
                    </button>
                    <button type="button" className="btn btn-primary btn-lg btn-block"
                    onClick={e => this.reset()}>
                        Reset
                    </button>
                </div>

            </form>
            </div>
        </>;
    }

    componentDidMount() {
        let movieId = this.props.match.params.movieId;
        if (movieId) {
            this.movieRepository.getMovieById(movieId)
                .then(movie => this.setState(movie));
        }
    }

    onSubmit() {
        var onSaveComplete = () => this.setState({redirect:true})

            if (this.state.movieId) {
                this.movieRepository.updateMovie(this.state.movieId, this.state)
                .then(onSaveComplete);
            } else {
                this.movieRepository.addMovie(this.state.movieId, this.state)
                .then(onSaveComplete);
                // DEBUG:
            }
        }

        reset() {
          this.setState(
            {
              movieId: "",
              title: "",
              year: "",
              director: "",
              producer: "",
              tomatoRating: ""
            }
          )
        }

}
