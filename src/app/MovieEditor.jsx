import React from 'react';
import { MovieRepository } from '../api/MovieRepository';
import { Redirect, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        return <>
            {this.state.redirect && <Redirect to="/" />}
            <div className="shae-container">
                <div className="image"></div>
                <div className="topbar">
                    <h1>Star Wars: The Movie Editor</h1>
                    <FontAwesomeIcon icon={['fab', 'jedi-order']} id="jedi" />
                </div>
                <div className="shae">
                    <form className="form-container">
                        <div className="link"><Link to="/">Back to Dashboard</Link></div>
                        <div className="form-group">
                            <label htmlFor="movieId">Movie Id </label><br></br>
                            <input type="text" id="movieId" name="movieId" className="form-control"
                                value={this.state.movieId} onChange={e => this.setState({ movieId: e.target.value })} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="title">Title </label><br></br>
                            <input type="text" id="title" name="title" className="form-control"
                                value={this.state.title} onChange={e => this.setState({ title: e.target.value })} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="year">Year </label><br></br>
                            <input type="text" id="year" name="year" className="form-control"
                                value={this.state.year} onChange={e => this.setState({ year: e.target.value })} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="director">Director </label><br></br>
                            <input type="text" id="director" name="director" className="form-control"
                                value={this.state.director} onChange={e => this.setState({ director: e.target.value })} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="producer">Producer </label><br></br>
                            <input type="text" id="producer" name="producer" className="form-control"
                                value={this.state.producer} onChange={e => this.setState({ producer: e.target.value })} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="tomatoRating">Tomato Rating </label><br></br>
                            <input type="text" id="tomatoRating" name="tomatoRating" className="form-control"
                                value={this.state.tomatoRating} onChange={e => this.setState({ tomatoRating: e.target.value })} />
                        </div>

                        <div className="shae-button">
                            <button type="button" className="save-btn"
                                onClick={e => this.onSubmit()}>
                                Submit
                            </button>
                            <button type="button" className="reset-btn"
                                onClick={e => this.reset()}>
                                Reset
                            </button>
                        </div>

                    </form>
                </div>
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
        var onSaveComplete = () => this.setState({ redirect: true })

        if (this.state.movieId) {
            this.movieRepository.updateMovie(this.state.movieId, this.state)
                .then(onSaveComplete);
        } else {
            this.movieRepository.addMovie(this.state.movieId, this.state)
                .then(onSaveComplete);
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
