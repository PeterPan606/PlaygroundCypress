/// <reference types="cypress" />
import { Helper } from "../utils/helper";
import { LogInComponent } from '../../pages/login-components';
import { LogInTestData } from '../../TestData/login-data';

describe("Testing the DemoShop:", function () {
    it("Access the homepage: ", function () {
        const helper = new Helper();
        const login = new LogInComponent();
        const LogInTestDataObj = new LogInTestData();

        helper.navigateTo(Cypress.env('baseUrl'));
        login.loginWithUserNameAndPassword(LogInTestDataObj.username, LogInTestDataObj.password);
        Cypress.log({
            displayName: 'Navigating to: ' + Cypress.env('baseUrl')
        });
        helper.assertUrlIs(Cypress.env('baseUrl'));
    });
});
