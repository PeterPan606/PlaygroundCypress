class url {
  website = "https://www.demoblaze.com/";
  navigate() {
    cy.visit(this.website);
  }
  /*  async goto() {
    console.log("this is my url " + this.url);
  } */
}
export default url;
