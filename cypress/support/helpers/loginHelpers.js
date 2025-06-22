import { loginPage } from "../pageObjects/loginPage";

const dsl = {
    given: {
        openUrl(url) {
            cy.visit(url);

            return dsl;
        },
    },

    when: {
        userLogsInAs(role) {
            cy.loginAs(role);
            
            return dsl;
        },
    },

    then: {
        userLoggedIn() {
            cy.url().should('include', 'Pages/Dashboard');
            loginPage.verifyUserLoggedIn();
            cy
                .intercept('POST', '/Pages/Account/KeepAlive').as('keepAlive')
                .wait('@keepAlive').its('response.statusCode').should('eq', 200);

            return dsl;
        },
        loginErrorMessageIsShown(message) {
            loginPage.invalidLogin(message);

            return dsl;
        },
    },    
};

export default dsl;