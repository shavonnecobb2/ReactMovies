/// <reference types="Cypress" />

import MoviesListPage from '../models/movies-list-page-model';
import AddMoviePage from '../models/add-movie-page-model';

describe('movie_list', () => {

    it('should-load', () => {
        const moviesListPage = new MoviesListPage();
        const addMoviePage = new AddMoviePage();

        moviesListPage.visit();
        moviesListPage.getTitle().contains('Star Wars: The Saga');
    })

    it('should-add-movie', () => {
        const moviesListPage = new MoviesListPage();
        const addMoviePage = new AddMoviePage();
        
        moviesListPage.visit();
        moviesListPage.getAddLink().click();
        addMoviePage.movieIdInput().type('100');
        addMoviePage.titleInput().type('Test Movie');
        addMoviePage.yearInput().type('2019');
        addMoviePage.directorInput().type('Shavonne Cobb');
        addMoviePage.producerInput().type('Paloma Pineda');
        addMoviePage.tomatoRatingInput().type('120');
        addMoviePage.saveButton().click();
        moviesListPage.getMovieTable().contains('Test Movie');
    })

})