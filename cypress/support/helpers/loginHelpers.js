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
            cy.request('POST', '/Pages/Account/KeepAlive').its('status').should('eq', 200);

            return dsl;
        },
        loginErrorMessageIsShown(message) {
            loginPage.invalidLogin(message);

            return dsl;
        },
    },    
};

export default dsl;