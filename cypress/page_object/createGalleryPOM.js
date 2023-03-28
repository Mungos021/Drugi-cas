class CreateGalleryPage {

    get titleHeading() {
        return cy.get('h1[class="title-style"]');
    }
    get titleInputField() {
        return cy.get('input[id="title"]');
    }
    get descriptionInputField() {
        return cy.get('input[id="description"]');
    }
    get imageInputField() {
        return cy.get('input[type="url"]');
    }
    get buttonUp() {
        return cy.get('i[class="fas fa-chevron-circle-up"]');
    }
    get buttonDown() {
        return cy.get('i[class="fas fa-chevron-circle-down"]');
    }
    get addImageBtn() {
        return cy.get('//*[@id="app"]/div[2]/div/div/form/div[3]/button');
    }
    get submitBtn() {
        return cy.get('button').contains('Submit');
    }
    get cancelBtn() {
        return cy.get('button').contains('Cancel');
    }

}

export const createGalleryPage = new CreateGalleryPage();
