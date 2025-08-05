/// <reference types="cypress" />
import { appActions } from '../support/actions/appActions';

describe('Fluxo de checkout', () => {
  beforeEach(() => {
    cy.login('jeane.souza.hora@gmail.com', 'Juan020817'); // login antes de comprar
  });

  it('Deve comprar o primeiro produto da lista com sucesso', () => {
    appActions.addFirstProductToCart();
    appActions.addNewAddress({
      nome: 'Teste',
      numero: '123',
      complemento: 'Apto 45',
      bairro: 'Centro',
      cidade: 'Salvador',
      cep: '40000000'
    });
    appActions.proceedToCheckout();
    appActions.validateSuccess();
  });
});





