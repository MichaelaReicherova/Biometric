import { loginPage } from "./pageObjects/loginPage";

Cypress.Commands.add('loginAs', (role = 'valid') => {
    const user = Cypress.env('users')[role];
  
    cy.log(`Logging in as: ${role} with username: ${user.username}`);
    cy.request('POST', '/api/login', {
        username: user.username,
        password: user.password
    }).then((response) => {
        expect(response.status).to.eq(200);
    });

    loginPage.elements.usernameInput().should('be.visible').type(user.username);
    loginPage.elements.passwordInput().should('be.visible').type(user.password, { log: false });
    loginPage.elements.loginButton().should('be.visible').click();
    if (!user) {
        throw new Error(`User role "${role}" does not exist in cypress.env.json`);
    }
});