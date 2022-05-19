/// <reference types="cypress" />

it('halaman utama', () => {
    cy.visit('https://todo-devcode.web.app/');

    cy.get('[data-cy="activity-add-button"]').click();

});