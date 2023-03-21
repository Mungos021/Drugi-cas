/// <reference types="Cypress" />

// omogucavanje prustupa lokatorima u .json fajlu
const locators = require('../fixtures/locators.json')
// importovanje POM-a
import { loginPage } from '../page_object/loginPage'
import { navigationBar } from '../page_object/navigationBar';

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

    it.only('Logout', () => {
        // cy.visit('/login');
        loginPage.emailInputField.type('markoqa13@gmail.com');
        loginPage.passwordInputField.type('Marko123');
        loginPage.submitBtn.click();
        cy.wait(3000);
        navigationBar.logoutBtn.click();
    });

});
