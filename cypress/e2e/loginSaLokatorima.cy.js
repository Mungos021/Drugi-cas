/// <reference types="Cypress" />

// omogucavanje prustupa lokatorima u .json fajlu
const locators = require('../fixtures/locators.json')
// importovanje POM-a
import { loginPage } from '../page_object/loginPage'
import { navigationBar } from '../page_object/navigationBar'

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
    });

    after(() => {
        // izvrsava se jednom posle svih testova
    });

    afterEach(() => {
        //izvrsava se posle svakog testa (it-a)
    });

    //koriscenje lokatora
    it('Positive case - Successful login', () => {
        cy.get(locators.loginPage.emailInputField).type('markoqa13@gmail.com')
        cy.get(locators.loginPage.passwordInputField).type('Marko12344');
        cy.get(locators.loginPage.submitBtn).click();
    });

    it('Negative case - Bad credentials', () => {
        cy.get(locators.loginPage.emailInputField).type('markoqa13@gmail.com')
        cy.get(locators.loginPage.passwordInputField).type('Marko12344');
        cy.get(locators.loginPage.submitBtn).click();
    })

    //koriscenje POM-a
    it('Logout', () => {

        cy.get(locators.loginPage.emailInputField).type('markoqa13@gmail.com')
        cy.get(locators.loginPage.passwordInputField).type('Marko123');
        cy.get(locators.loginPage.submitBtn).click();
        // cy.wait(2000);
        cy.get(locators.navigationButtons.logoutBtn).click();
    });

});
