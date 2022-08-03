import urls from "../../pages/Home.page";
import navigationBarComponent from "../../pages/defineNavigationComponent";
import signUsignUpCredentialsTestData from "../../TestData/SignUpData";
import LogInTestData from "../../TestData/LogInData";

import signUpComponent from "../../pages/defineSignUpComponent";
import LogInComponent from "../../pages/defineLogInComponent";
describe("Testing the DemoShop:", () => {
  it("Access the homepage: ", () => {
    const page = new urls();
    page.navigate();
    cy.url().should("be.equal", page.homepage);
  });

  it("Verify the main page components exist", () => {
    const homepage = new urls();
    homepage.navigationBar().should("exist");
    homepage.footerSection().should("exist");
    homepage.containerSection().should("exist");
    homepage.copyrightSection().should("exist");
  });

  it("Verify the nav components exist", () => {
    const navigationBarComponentObj = new navigationBarComponent();
    navigationBarComponentObj
      .logoLocation()
      .contains(navigationBarComponentObj.logoTitle);
    for (
      let i = 0;
      i < navigationBarComponentObj.navigationMenuOptions.length;
      i++
    ) {
      navigationBarComponentObj
        .navigationMenuLocation()
        .should("exist")
        .contains(navigationBarComponentObj.navigationMenuOptions[i]);
      navigationBarComponentObj
        .navigationMenuLocation()
        .should("exist")
        .contains(navigationBarComponentObj.navigationMenuOptions[i]);
      navigationBarComponentObj
        .navigationMenuLocation()
        .should("exist")
        .contains(navigationBarComponentObj.navigationMenuOptions[i]);
      navigationBarComponentObj
        .navigationMenuLocation()
        .should("exist")
        .contains(navigationBarComponentObj.navigationMenuOptions[i]);
      navigationBarComponentObj
        .navigationMenuLocation()
        .should("exist")
        .contains(navigationBarComponentObj.navigationMenuOptions[i]);
      navigationBarComponentObj
        .navigationMenuLocation()
        .should("exist")
        .contains(navigationBarComponentObj.navigationMenuOptions[i]);
    }
  });

  it("Sign Up: we generate a new user and a new password and simulate the sign up ", () => {
    const signUpComponentObj = new signUpComponent();
    const signUpCredentialsObj = new signUsignUpCredentialsTestData();

    signUpComponentObj
      .navigationMenuLocation()
      .should("be.visible")
      .contains(signUpComponentObj.signUpOptions)
      .click({ force: true })
      .then(() => {
        signUpComponentObj
          .usernameInputFieldLocation()
          .type(signUpCredentialsObj.composeTheUsername(), { force: true });
        signUpComponentObj
          .passwordInputFieldLocation()
          .type(signUpCredentialsObj.composeThePassword(), { force: true });
        signUpComponentObj.signUpButtonLocation().click({ force: true });
        cy.wait(5000);
      });
  });
  it("Log in functionality: with our our dardcoded user", () => {
    const logInComponentObj = new LogInComponent();
    const LogInTestDataObj = new LogInTestData();
    logInComponentObj
      .navigationBarLocation()
      .should("be.visible")
      .contains(logInComponentObj.logInOptions)
      .click({ force: true })
      .then(() => {
        //Complete the username
        logInComponentObj
          .usernameInputFieldLocation()
          .type(LogInTestDataObj.username, { force: true });
        //complete password
        logInComponentObj
          .passwordInputFieldLocation()
          .type(LogInTestDataObj.password, { force: true });
        //log in click
        logInComponentObj.logInButtonLocation().eq(0).click({ force: true });

        logInComponentObj
          .navigationMenuLocation()
          .should("exist")
          .contains("Log out");
        //I don't understand why i doesn't identify the element
        logInComponentObj
          .navigationMenuLocation()
          .should("exist")
          .find("#nameofuser")
          .contains("Welcome " + LogInTestDataObj.username);
      });
  });
});
