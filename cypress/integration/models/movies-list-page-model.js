class MoviesListPage {
    constructor() {}

    visit() {
        cy.visit('/');
    }

    getTitle() {
        return cy.get('#title');
    }

    getAddLink() {
        return cy.get('#add-link');
    }

    getMovieTable() {
        return cy.get('#movie-table');
    }

}

export default MoviesListPage