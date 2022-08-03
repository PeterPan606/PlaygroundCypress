import generateRandomCredentials from "../TestData/GenerateRandomCredentials";

class signUpCredentialsTestData extends generateRandomCredentials {
  usernameTestData = "Pokemon";
  passwordTestData = "Pokemon";
  generateRandomUsernamte = this.generateRandom();
  generateRandomPassword = this.generateRandom();
  composeTheUsername() {
    return this.usernameTestData + this.generateRandomUsernamte;
  }
  composeThePassword() {
    return this.passwordTestData + this.generateRandomPassword;
  }
}
export default signUpCredentialsTestData;
