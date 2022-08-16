export class Helper {
    /**
     * navigateTo() function is opening a custom url provided as parameter
     * @param url 
     */
    navigateTo = (url: string) => {
        Cypress.log({
            displayName: 'Navigating to: ' + url
        });

        cy
            .visit(url);
    }

    /**
     * assertUrlIs() function is checking that the current url is eqal to an url provided as parameter
     * @param customUrl
     */
    assertUrlIs = (customUrl: string) => {
        Cypress.log({
            displayName: 'Asserting that the current url is: ' + customUrl
        });

        cy
            .url().should("be.equal", customUrl);
    }
}
