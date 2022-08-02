import urls from "../../pages/Home.page";
import navigationBarComponent from "../../pages/defineComponentes";
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
    const homepage = new urls();
    const navigationBarComponentObj = new navigationBarComponent();
    homepage.navigationBar().find("#nava").contains("PRODUCT STORE");
    for (
      let i = 0;
      i < navigationBarComponentObj.navigationMenuOptions.length;
      i++
    ) {
      homepage
        .navigationBar()
        .find(navigationBarComponentObj.navigationMenuLocation)
        .should("exist")
        .contains(navigationBarComponentObj.navigationMenuOptions[i]);
      homepage
        .navigationBar()
        .find(navigationBarComponentObj.navigationMenuLocation)

        .contains(navigationBarComponentObj.navigationMenuOptions[i]);
      homepage
        .navigationBar()
        .find(navigationBarComponentObj.navigationMenuLocation)
        .should("exist")
        .contains(navigationBarComponentObj.navigationMenuOptions[i]);
      homepage
        .navigationBar()
        .find(navigationBarComponentObj.navigationMenuLocation)
        .should("exist")
        .contains(navigationBarComponentObj.navigationMenuOptions[i]);
      homepage
        .navigationBar()
        .find(navigationBarComponentObj.navigationMenuLocation)

        .contains(navigationBarComponentObj.navigationMenuOptions[i]);
      homepage
        .navigationBar()
        .find(navigationBarComponentObj.navigationMenuLocation)

        .contains(navigationBarComponentObj.navigationMenuOptions[i]);
    }
  });

  it("Sign Up: ", () => {
    cy.get("#narvbarx")
      .find('[class="navbar-nav ml-auto"]')
      .should("be.visible")
      .contains("Sign up")
      .click({ force: true })
      .then(() => {
        cy.get('[class="form-group"]')
          .find("#sign-username")
          .type("Radupokemon", { force: true });
        cy.get('[class="form-group"]')
          .find("#sign-password")
          .type("radu123", { force: true });
        cy.wait(5000);
        cy.get('[class="btn btn-primary"]').eq(0).click({ force: true });
      });
  });

  it("Log in: ", () => {
    cy.wait(5000);
    cy.get("#narvbarx")
      .find('[class="navbar-nav ml-auto"]')
      .should("be.visible")
      .contains("Log in")
      .click({ force: true });
    cy.get('[class="form-group"]')
      .find("#loginusername")
      .type("Radupokemon", { force: true });
    cy.get('[class="form-group"]')
      .find("#loginpassword")
      .type("radu123", { force: true });
    cy.wait(5000);
    cy.get('[class="btn btn-primary"]')
      .contains("Log in")
      .click({ force: true });
    cy.wait(5000);
    cy.get("#narvbarx")
      .find('[class="navbar-nav ml-auto"]')
      .should("exist")
      .contains("Log out");
    cy.get("#narvbarx")
      .find('[class="navbar-nav ml-auto"]')
      .should("exist")
      .contains("Welcome Radupokemon");
  });
});
