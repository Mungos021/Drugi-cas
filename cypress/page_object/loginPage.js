class LoginPage {

    //getters - mapiranje elementa
    get emailInputField() {
        return cy.get('#email');
    }
    get passwordInputField() {
        return cy.get('#password');
    }
    get submitBtn() {
        return cy.get("button[type='submit']")
    }
    get errorAlert() {
        return cy.get("p[class ='alert alert-danger']")
    }

    //setter - funkcija koju mozemo koristiti u bilo kom spec-u u koji je uvezemo (import)
    loginUser(userEmail, password) {
        this.emailInputField.type(userEmail);
        this.passwordInputField.type(password);
        this.submitBtn.click();
    }

}

export const loginPage = new LoginPage()
