// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginViaAPI', (userEmail, userPass) => {
    cy.request({
        method: 'POST',
        url: 'https://gallery-api.vivifyideas.com/api/auth/login',
        body: {
            email: userEmail,
            password: userPass
        }
    }).then((response) => {
        // logujemo ceo response kako bi videli koje sve podatke imamo na raspolaganju i da bi ih lakse koristili u daljem radu
        // cy.log(response);
        expect(response.status).eq(200);
        expect(response.statusText).eq('OK');
        expect(response.body.access_token).to.be.a('string');
        expect(response.body.token_type).eq('bearer');

        window.localStorage.setItem('token', response.body.access_token);
    });
        
})