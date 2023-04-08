/// <reference types="cypress" />

beforeEach(() => {
  cy.visit("/");
});

describe("Test the Tests", () => {
  it("is the test testing?", () => {
    cy.contains("h1", "NextJS & Cypress").should("exist");
  });
});

export {};
