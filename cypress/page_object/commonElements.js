class CommonElements {

    get headingText() {
        return cy.get('.title-style');
    }
}

export const commonElements = new CommonElements();