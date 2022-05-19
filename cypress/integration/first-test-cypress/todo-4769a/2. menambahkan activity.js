/// <reference types="cypress" />

it('menambahkan activity', () => {
    cy.visit('https://todo-4769a.web.app/');

    cy.get('.button-blue-text').click();
});