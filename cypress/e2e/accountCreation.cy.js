/// <reference types="cypress" />

describe('Fluxo de criação de conta', () => {
  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' });
    cy.visit('/');
  });

  it('Deve criar uma conta com sucesso', () => {
    const email = `joao${Date.now()}@gmail.com`;

    cy.get('[href="/Tab/Account"]').click();

    cy.get('[data-testid="signUp"] > .css-146c3p1').click();

    
    cy.get('[data-testid="firstName"]').type('joao');
    cy.get('[data-testid="lastName"]').type('barros');
    cy.get('[data-testid="phone"]').type('7388523714');
    cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]').type(email);
    cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]').type('123456');
    cy.get('[data-testid="repassword"]').type('123456');

    cy.get('[data-testid="create"]').click();
    cy.get('[href="/Tab/Account"]').click();
    cy.contains('barros joao').should('be.visible');
    cy.contains('7388523714').should('be.visible');
    cy.contains(email).should('be.visible');
  });
});







