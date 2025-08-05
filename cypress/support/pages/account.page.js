/// <reference types="cypress" />

export const accountPage = {
  goToRegister() {
    cy.get('[href="/Tab/Account"]').click(); // Abre a aba "Account"
    cy.get('[style="align-self: center; color: rgb(255, 255, 255); font-size: 15px; margin-bottom: 60px; margin-right: 7px; font-family: Montserrat-Regular;"]')
      .click(); // Botão para criar conta
  },
  fillForm({ name, email, password }) {
    cy.get('[data-testid="name"]').type(name);
    cy.get('[data-testid="email"]').type(email);
    cy.get('[data-testid="password"]').type(password);
  },
  submit() {
    cy.get('[data-testid="btnRegister"]').click();
  }
};
