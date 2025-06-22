class LoginPage {
    elements = {
        usernameInput: () => cy.get('#TextBoxUsername'),
        passwordInput: () => cy.get('#TextBoxPassword'),
        loginButton: () => cy.get('#Button1'),
        userToggle: () => cy.get('#kt_quick_user_toggle'),
        invalidUserModal: () => cy.get('.swal2-popup'),
        invalidUserModalContent: () => cy.get('#swal2-content'),
    };

    login(username, password) {
        this.elements.usernameInput().should('be.visible').type(username);
        this.elements.passwordInput().should('be.visible').type(password, { log: false });
        this.elements.loginButton().should('be.visible').click();
    }

    verifyUserLoggedIn() {
        this.elements.userToggle().should('be.visible');
    }

    invalidLogin(message) {
        this.elements.invalidUserModal().should('be.visible');
        this.elements.invalidUserModalContent().should('be.visible').and('contain', message);
    }
}

export const loginPage = new LoginPage();