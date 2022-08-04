class navigationBarComponent {
  logoTitle = "PRODUCT STORE";

  logoLocation() {
    return this.navigationBarLocation().find("#nava");
  }

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