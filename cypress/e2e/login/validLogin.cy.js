import dsl from '../../support/helpers/loginHelpers';

describe('Valid Login Person', () => {
    beforeEach('Visit base URL', () => {
        dsl.given.openUrl('/');
    })

    it('Should login successfully', () => {
        dsl
            .when.userLogsInAs('valid')
            .then.userLoggedIn();
    });
});
