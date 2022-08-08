class urls {

  navigate() {
   cy.visit(Cypress.env('baseUrl'));
  }

  navigationBar() {
    return cy.get("#narvbarx");
  }

  containerSection() {
    return cy.get('[class="container"]');
  }

  footerSection() {
    return cy.get("#footc");
  }

  copyrightSection() {
    return cy.get('[class="py-5 bg-inverse"]');
  }
}
export default urls;