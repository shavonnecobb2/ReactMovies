import axios from 'axios';

export class MovieRepository {
  url = 'http://localhost:8080/movies';
  config = {
    headers: {}
  };

  getAllMovies() {
      return new Promise((resolve, reject) => {
          axios.get(`${this.url}`, this.config)
              .then(x => resolve(x.data))
              .catch(x => {
                  alert(x);
                  reject();
              });
      })
  }

  getMovieById(movieId) {
    return new Promise((resolve, reject) => {
        axios.get(`${this.url}/${movieId}`, this.config)
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject();
            });
    })
}

updateMovie(movieId, movie) {
    return new Promise((resolve, reject) => {
        axios.put(`${this.url}/${movieId}`, movie, this.config)
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject();
            });
    })
}

addMovie(movieId, movie) {
    return new Promise((resolve, reject) => {
        axios.post(`${this.url}/${movieId}`, movie, this.config)
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject();
            });
    })
}
}
