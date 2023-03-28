/// <reference types="Cypress" />

const locators = require('../fixtures/locators.json')
import { loginPage } from '../page_object/loginPage'
import { navigationBar } from '../page_object/navigationBar'
import { faker } from '@faker-js/faker'
import { commonElements } from '../page_object/commonElements';

describe('Login page', () => {

    before(() => {
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
    });

    beforeEach(() => {
        cy.visit('/login');
        cy.url().should('contains', '/login');
    });

    it('Check UI elements of login page', () => {
        //proveravamo tacnost naslova stranice
        // nakon prvog koriscenja .should() nad nekim elementom, dalje mozemo chain-ovati dodatne provere pomocu .and()
        commonElements.headingText.should('be.visible')
            .and('have.text', 'Please login');
        //proveravamo prisutnost Login dugmeta
        navigationBar.loginBtn.should('be.visible');
        //proveravamo prisutnost Register dugmeta
        navigationBar.registerBtn.should('be.visible');
        //proveravamo odsutnost Logout dugmete
        navigationBar.logoutBtn.should('not.exist');
    });

    it.only('Negative case - Bad credentials', () => {

        cy.intercept({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/auth/login'
        }).as('userNotLoggedIn');

        loginPage.emailInputField.type(faker.internet.email());
        loginPage.passwordInputField.type(faker.internet.password());
        loginPage.submitBtn.click();

        cy.wait('@userNotLoggedIn').then((inter) => {
            cy.log(inter);
            expect(inter.response.statusCode).eq(401);
            expect(inter.response.statusMessage).eq('Unauthorized');
            expect(inter.response.body.error).eq('Unauthorized');
        })

        // cy.url().should('contain', '/login');
        // commonElements.headingText.should('contain', 'Please login');

        // loginPage.errorAlert.should('be.visible')
        //     .and('have.text', 'Bad Credentials')
        //     .and('have.css', 'color', 'rgb(114, 28, 36)')
        //     .and('have.css', 'background-color', 'rgb(248, 215, 218)');


    });

    it('Negative case - Incorrect password', () => {
        //ako zelimo iste podatke dobijene pomocu faker-a potrebno je da ih prethodno sacuvamo u promenljivu
        var userEmail = faker.internet.email();

        loginPage.emailInputField.type(userEmail);
        //na ovaj nacin proveravamo setovanu vrednost u nekom input field-u
        loginPage.emailInputField.should('have.value', userEmail);
        loginPage.passwordInputField.type(faker.internet.password());
        loginPage.submitBtn.click();

        cy.url().should('contain', '/login');
        commonElements.headingText.should('contain', 'Please login');
        loginPage.errorAlert.should('be.visible')
            .and('have.text', 'Bad Credentials')
            .and('have.css', 'color', 'rgb(114, 28, 36)')
            .and('have.css', 'background-color', 'rgb(248, 215, 218)');
    });

    it('Positive case - Successful login', () => {
        loginPage.emailInputField.type('markoqa13@gmail.com');
        //na ovaj nacin proveravamo setovanu vrednost u nekom input field-u
        loginPage.emailInputField.should('have.value', 'markoqa13@gmail.com');
        loginPage.passwordInputField.type('Marko123');
        loginPage.submitBtn.click();

        //proveravamo da li smo zaista ulogovani
        cy.url().should('not.include', '/login');
        navigationBar.loginBtn.should('not.exist');
        navigationBar.registerBtn.should('not.exist');
        navigationBar.logoutBtn.should('be.visible');

        commonElements.headingText.should('have.text', 'All Galleries');
    });

});
