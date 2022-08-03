import navigationBarComponent from "../pages/defineNavigationComponent";

class LogInComponent extends navigationBarComponent {
  logInOptions = "Log in";
  formModalComponentLocation() {
    return cy.get("[class='modal fade show']").find("[class='modal-footer']");
  }
  formLocation() {
    return cy.get(".form-group");
  }
  usernameInputFieldLocation() {
    return this.formLocation().find("#loginusername");
  }
  passwordInputFieldLocation() {
    return this.formLocation().find("#loginpassword");
  }
  logInButtonLocation() {
    return this.formModalComponentLocation().find(
      '[class = "btn btn-primary"]'
    );
  }
}
export default LogInComponent;
