/// <reference types='Cypress' />

import { loginPage } from "../page_object/loginPage";
import { createGalleryPage } from '../page_object/createGalleryPOM'

var galleryId = '';

describe('Login via API', () => {
    before(() => {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
    });

    beforeEach(() => {
        const userEmail = Cypress.env('registeredUserEmail');
        const password = Cypress.env('validPassword');

        cy.loginViaAPI(userEmail, password);
    });

    it('Create gallery', () => {
        cy.intercept({
            method: 'GET',
            url: 'https://gallery-api.vivifyideas.com/api/galleries?page=1&term='
        }).as('newGalleryIsDisplayedOnHomepage');

        cy.intercept({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/galleries'
        }).as('newGalleryIsCreated');


        cy.visit('/create');
        // cy.wait(2000);
        createGalleryPage.titleInputField.type('Nesto')
        createGalleryPage.descriptionInputField.type('Obrisana galerija');
        createGalleryPage.imageInputField.clear().type('https://picsum.photos/id/0/5000/3333.jpg');
        createGalleryPage.submitBtn.click();

        cy.wait('@newGalleryIsCreated').then((int) => {
            galleryId = int.response.body.id;
        });
        
        cy.wait('@newGalleryIsDisplayedOnHomepage').then((int) => {
            const displayedGalleries = int.response.body.galleries
            cy.log(displayedGalleries)
            expect(displayedGalleries[0].id).eq(galleryId);
        })
    })


});