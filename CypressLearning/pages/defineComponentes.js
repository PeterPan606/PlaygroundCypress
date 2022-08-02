class navigationBarComponent {
  navigationBarLocation() {
    return cy.get("#narvbarx");
  }

  navigationMenuLocation = '[class="navbar-nav ml-auto"]';
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
