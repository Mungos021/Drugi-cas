/// <reference types="Cypress" />

const data = require('../../fixtures/data.json');
const { commonElements } = require('../../page_object/commonElements');

describe('Login via API', () => {
    before(() => {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
    });

    beforeEach(() => {

        //jedan nacin za dodeljivanje vrednosti promenljivim
        const userEmail = Cypress.env('registeredUserEmail');
        const password = Cypress.env('validPassword');
        
        // drugi nacin
        // const { registeredUserEmail, validPassword } = Cypress.env();

        cy.loginViaAPI(userEmail, password);
        cy.wait(2000);
    })

    xit('Positive case - Successful login', () => {
        cy.visit('/create')
        cy.wait(2000)
        // cy.visit('/login');
        // loginPage.emailInputField.type('markoqa13@gmail.com');
        // loginPage.passwordInputField.type('Marko123');
        // loginPage.submitBtn.click();

        // commonElements.headingText.should('have.text', 'All Galleries');
    });

    it('Poseti My galleries stranicu', () => {
        cy.intercept({
            method: 'GET',
            url: 'https://gallery-api.vivifyideas.com/api/galleries?page=1&term='
        }).as('homepageLoaded');

        cy.visit('')
        commonElements.headingText.should('have.text', 'All Galleries');

        cy.wait('@homepageLoaded').then((intercept) => {
            // cy.log(intercept);
            const status = intercept.response.statusCode;
            const statusMsg = intercept.response.statusMessage
            const ucitanihGalerija = intercept.response.body.galleries
            // const brojUcitanih = ucitanihGalerija.length;
            // cy.log(brojUcitanih);

            expect(status).to.eq(200);
            expect(statusMsg).to.eq('OK');
            expect(ucitanihGalerija.length).eq(10);
        })

    })


});
