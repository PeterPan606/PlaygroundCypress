describe("Testing the DemoShop:", () => {
  it("Access the site: ", () => {
    cy.visit("https://www.demoblaze.com/");
  });
  it("Verify the main page components exist", () => {
    cy.get("#narvbarx").should("exist");
    cy.get("#footc").should("exist");
    cy.get('[class="container"]').should("exist");
    cy.get('[class="py-5 bg-inverse"]').should("exist");
  });
  it("Verify the nav components exist", () => {
    cy.get("#narvbarx").find("#nava").should("exist").contains("PRODUCT STORE");
    cy.get("#narvbarx")
      .find('[class="navbar-nav ml-auto"]')
      .should("exist")
      .contains("Home");
    cy.get("#narvbarx")
      .find('[class="navbar-nav ml-auto"]')
      .should("exist")
      .contains("Contact");
    cy.get("#narvbarx")
      .find('[class="navbar-nav ml-auto"]')
      .should("exist")
      .contains("About us");
    cy.get("#narvbarx")
      .find('[class="navbar-nav ml-auto"]')
      .should("exist")
      .contains("Cart");
    cy.get("#narvbarx")
      .find('[class="navbar-nav ml-auto"]')

      .contains("Log in");
    cy.get("#narvbarx")
      .find('[class="navbar-nav ml-auto"]')
      .should("exist")
      .contains("Sign up");
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
