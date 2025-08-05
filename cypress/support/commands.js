import { loginPage } from './pages/login.page';

Cypress.Commands.add('login', (email, password) => {
  cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' });
  cy.visit('/');
  loginPage.goToLogin();
  loginPage.fillCredentials(email, password);
  loginPage.submit();
});
