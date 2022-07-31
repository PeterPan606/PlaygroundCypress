class urls {
  homepage = "https://www.demoblaze.com/";

  navigate() {
    cy.visit(this.homepage);
  }

  navigationBar() {
    return cy.get("#narvbarx");
  }
}
export default urls;