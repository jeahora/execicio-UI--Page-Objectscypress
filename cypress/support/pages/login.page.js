/// <reference types="cypress" />

export const loginPage = {
  goToLogin() {
    cy.get('[href="/Tab/Account"] > .r-g6644c').click();
  },
  fillCredentials(email, password) {
    cy.get('[data-testid="email"]').type(email);
    cy.get('[data-testid="password"]').type(password);
  },
  submit() {
    cy.get('[data-testid="btnLogin"]').click();
  }
};

