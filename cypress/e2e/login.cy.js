/// <reference types="Cypress" />

const locators = require('../fixtures/locators.json')

describe('Login page', () => {

    before(() => {
        // izvrsava se jednom pre svih testova
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
    });

    beforeEach(() => {
        //izvrsava se pre svakog testa (it-a)
        cy.visit('/login');
    })
    after(() => {
        // izvrsava se jednom posle svih testova
    })
    afterEach(() => {
        //izvrsava se posle svakog testa (it-a)
    })

    // it('Visit login page', () => {
    // });

    it('Positive case - Successful login', () => {
        // cy.visit('/login');
        cy.get(locators.loginPage.emailInputField).type('markoqa13@gmail.com');
        cy.get(locators.loginPage.passwordInputField).type('Marko123');
        cy.get(locators.loginPage.submitBtn).click();
    });

    it('Logout', () => {
        // cy.visit('/login');
        cy.get(locators.loginPage.emailInputField).type('markoqa13@gmail.com');
        cy.get(locators.loginPage.passwordInputField).type('Marko123');
        cy.get(locators.loginPage.submitBtn).click();
        cy.wait(3000);
        cy.get(locators.navigationButtons.logoutBtn).click();
    });

});
