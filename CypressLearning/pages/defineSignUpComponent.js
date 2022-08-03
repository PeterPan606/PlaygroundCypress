import navigationBarComponent from "../pages/defineNavigationComponent";

class signUpComponent extends navigationBarComponent {
  logInOption = "Log in";
  formModalComponentLocation() {
    return cy.get("[class='modal fade show']");
  }
  signUpOptions = "Sign up";
  formLocation() {
    return cy.get(".form-group");
  }
  usernameInputFieldLocation() {
    return this.formLocation().find("#sign-username");
  }
  passwordInputFieldLocation() {
    return this.formLocation().find("#sign-password");
  }
  signUpButtonLocation() {
    return this.formModalComponentLocation().find(
      '[class = "btn btn-primary"]'
    );
  }
}
export default signUpComponent;
