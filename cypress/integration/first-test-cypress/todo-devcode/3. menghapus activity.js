/// <reference types="cypress" />

it('hapus', () => {
    cy.visit('https://todo-devcode.web.app/');

    cy.get(':nth-child(1) > .jss17 > [data-cy="activity-item-delete-button"]').click();

    cy.get('[data-cy="modal-delete-confirm-button"]').click();

});