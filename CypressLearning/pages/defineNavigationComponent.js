class navigationBarComponent {
  logoLocation() {
    return this.navigationBarLocation().find("#nava");
  }
  logoTitle = "PRODUCT STORE";

  navigationBarLocation() {
    return cy.get("#narvbarx");
  }
  navigationMenuLocation() {
    return this.navigationBarLocation().find('[class="navbar-nav ml-auto"]');
  }
  navigationMenuOptions = [
    "Home",
    "Contact",
    "About us",
    "Cart",
    "Log in",
    "Sign up",
  ];
}
export default navigationBarComponent;
