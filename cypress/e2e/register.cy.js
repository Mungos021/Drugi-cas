/// <reference types="Cypress" />

const locators = require('../fixtures/locators.json')

describe('Registration page', () => {

    it('Visit Registration page', () => {
        cy.visit('/register');
        cy.get('#first-name').clear();
        cy.get('#last-name').clear();
        cy.get('#email').clear();
        cy.get('#password').clear();
        cy.get('#password-confirmation').clear();
    });

    it('Positive case - successful registration', () => {
        cy.visit('/register');
        cy.get('#first-name').type('Milan');
        cy.get('#last-name').type('Aleksic');
        cy.get('#email').type('milannnnnnaleksic23@gmail.com');
        cy.get('#password').type('milanaleksic123');
        cy.get('#password-confirmation').type('milanaleksic123');
        cy.get('.form-check-input').click();
        cy.get('.btn').click();
    });
})
