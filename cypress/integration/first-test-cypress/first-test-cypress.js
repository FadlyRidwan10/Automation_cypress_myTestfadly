/// <reference types="cypress" />

it('google test', () => {
    cy.visit('https://www.google.com');

    cy.get('.gLFyf').type('Tutorial Belajar Cypress{enter}');

    cy.wait(5000);

    cy.contains('Video').click();
});