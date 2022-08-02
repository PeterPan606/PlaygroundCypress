class urls {
  homepage = "https://www.demoblaze.com/";

  navigate() {
    cy.visit(this.homepage);
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
