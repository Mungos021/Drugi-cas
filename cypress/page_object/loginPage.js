class LoginPage {

    get emailInputField() {
        return cy.get('#email');
    }
    get passwordInputField() {
        return cy.get('#password');
    }
    get submitBtn() {
        return cy.get("button[type='submit']")
    }
}

export const loginPage = new LoginPage()
