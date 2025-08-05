/// <reference types="cypress" />

export const appActions = {

  addFirstProductToCart() {
    cy.get('[href="/Tab/Browse"]').should('be.visible').click();
    cy.get(':nth-child(2) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]')
      .should('be.visible')
      .click();
    cy.get('[data-testid="addToCart"]').should('be.visible').click();
  },

  addNewAddress({ nome, numero, complemento, bairro, cidade, cep }) {
    cy.get('body').then($body => {
      if ($body.find('[data-testid="addNewAddress"]').length > 0) {
        
        cy.get('[data-testid="addNewAddress"] > .r-lrvibr').should('be.visible').click();

        cy.get('.r-1d7mnkm > :nth-child(1) > .css-175oi2r > .css-11aywtz').type(nome);
        cy.get(':nth-child(2) > .css-175oi2r > .css-11aywtz').type(numero);
        cy.get(':nth-child(3) > .css-175oi2r > .css-11aywtz').type(complemento);
        cy.get(':nth-child(4) > .css-175oi2r > .css-11aywtz').type(bairro);
        cy.get(':nth-child(5) > .css-175oi2r > .css-11aywtz').type(cidade);
        cy.get(':nth-child(6) > .css-175oi2r > .css-11aywtz').type(cep);

        cy.get('[data-testid="save"]').should('be.visible').click();
      } else {
        cy.log('Endereço já existe. Pulando cadastro.');
      }
    });
  },

  
  proceedToCheckout() {
    cy.get('[data-testid="selectAddressOrContinueToPayment"]').should('be.visible').click();
    cy.get('[data-testid="completeCheckout"]').should('be.visible').click();
  },

  
  validateSuccess() {
    cy.get('[data-testid="goBackHome"]').should('be.visible');
  }
};
