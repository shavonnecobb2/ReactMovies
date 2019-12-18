class AddMoviePage {
    constructor() {}

    visit() {
        cy.visit('/add');
    }

    movieIdInput() {
        return cy.get('#movieId');
    }

    titleInput() {
        return cy.get('#title');
    }

    yearInput() {
        return cy.get('#year');
    }

    directorInput() {
        return cy.get('#director');
    }

    producerInput() {
        return cy.get('#producer');
    }

    tomatoRatingInput() {
        return cy.get('#tomatoRating');
    }

    saveButton() {
        return cy.get('.save-btn');
    }

}

export default AddMoviePage