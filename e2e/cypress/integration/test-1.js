import { exists } from "fs";

describe("main screen", () => {

    const backendUrl = Cypress.config("backendUrl");

    beforeEach(() => {
        cy.visit('/');
    })

    it("Test Employees data Fetching", () => {
        cy.server()
        cy.route("GET", `${backendUrl}/api/employees`);
    })

    it("Test Employees Rendering", () => {
        cy.get('#employees-container').should("exist");
        cy.get('#employees-container').children().should('have.length', 32)

    })

    it("Test Load More Button ", () => {
        cy.get('#load-more').click();
        cy.get('#employees-container').children().should('have.length', 64)
    })

})