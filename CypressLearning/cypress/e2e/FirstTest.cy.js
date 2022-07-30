describe("First page elements: ", () => {
  beforeEach("Access the page:", () => {
    cy.visit("https://example.cypress.io/");
  });
  it("Verify the main page components exist", () => {
    cy.get('[class="navbar navbar-inverse"]').should("exist");
    cy.get('[class="banner"]').should("exist");
    cy.get('[class="container"]').should("exist");
    cy.get('[class="banner-alt"]').should("exist");
  });
  it("Nav components exist in UI: ", () => {
    cy.get('[class="navbar navbar-inverse"]')
      .find("[class='navbar-header']")
      .should("exist")
      .contains("cypress.io");
    cy.get('[class="navbar navbar-inverse"]')
      .find('[class="dropdown"]')
      .should("exist")
      .contains("Commands");
    cy.get('[class="navbar navbar-inverse"]')
      .find('[href="/utilities"]')
      .should("exist")
      .contains("Utilities");
    cy.get('[class="navbar navbar-inverse"]')
      .find('[href="/cypress-api"]')
      .should("exist")
      .contains("Cypress API");
    cy.get('[class="navbar navbar-inverse"]')
      .find('[class="nav navbar-nav pull-right"]')
      .should("exist")
      .contains("GitHub");
  });
  it("Dropdown options are available and complete: ", () => {
    cy.get('[class="dropdown-toggle"]').then((dropdown) => {
      cy.wrap(dropdown).click();
      cy.get('[class="dropdown-menu"]').each((listItem) => {
        const itemText = listItem.text();

        const text = {
          Querying: "/commands/querying",
          Traversal: "/commands/traversal",
          Actions: "/commands/actions",
          Window: "/commands/window",
          Viewport: "/commands/viewpoer",
          Location: "/commands/location",
          Navigation: "/commands/navigation",
          Assertions: "/commands/assertion",
          Misc: "/commands/misc",
          Connectors: "/commands/connectors",
          Aliasing: "/commands/aliasing",
          Waiting: "/commands/waiting",
          "Network Requests": "/commands/network-requests",
          Files: "/commands/files",
          "Local Storage": "/commands/local-storage",
          Cookies: "/commands/cookies",
          "Spies,Stubs & Clocks": "/commands/spies-stubs-clocks",
        };
      });
    });
  });
});
