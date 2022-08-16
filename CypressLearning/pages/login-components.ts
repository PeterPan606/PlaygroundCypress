export class LogInComponent {
  loginWithUserNameAndPassword = (username: string, password: string) => {
    Cypress.log({
      displayName: 'Trying to login with the following credentials: ' + username + ' ' + password,

    });

    cy
      .get('[id="login2"]')
      .click({ multiple: true });

    cy
      .get("#loginusername")
      .type(username, { force: true }).log('Trying to login with the following credentials:' + username + ' ' + password,)

    cy
      .get("#loginpassword")
      .type(password, { force: true });

    cy
      .get('[onclick="logIn()"]')
      .click();
  }
}
