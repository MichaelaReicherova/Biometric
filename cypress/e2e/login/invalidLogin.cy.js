import dsl from '../../support/helpers/loginHelpers';

let invalidLoginMsg = Cypress.env('invalidLoginMsg');

describe('Invalid Login Person', () => {
    beforeEach('Visit base URL', () => {
        dsl.given.openUrl('/');
    })

    it('Fails to log in with invalid credentials (invalid_password)', () => {
        dsl
            .when.userLogsInAs('invalid_password')
            .then.loginErrorMessageIsShown(invalidLoginMsg);
    });

    it('Fails to log in with invalid credentials (invalid_name)', () => {
        dsl
            .when.userLogsInAs('invalid_name')
            .then.loginErrorMessageIsShown(invalidLoginMsg);
    });

    it('Fails to log in with invalid credentials (invalid_both)', () => {
        dsl
            .when.userLogsInAs('invalid_both')
            .then.loginErrorMessageIsShown(invalidLoginMsg);
    });
});