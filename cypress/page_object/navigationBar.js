class NavigationBar {
    get logoutBtn() {
        return cy.get("a[role='button ']")
    }
    get loginBtn() {
        return cy.get("a[href='/login']")
    }
    get registerBtn() {
        return cy.get("a[href='/register']")
    }

    logoutUser() {
        this.logoutBtn.click();
    }

}

export const navigationBar = new NavigationBar()
