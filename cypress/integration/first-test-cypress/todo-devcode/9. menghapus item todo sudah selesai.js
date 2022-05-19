/// <reference types="cypress" />

it('hapus item todo', () => {
    cy.visit('https://todo-devcode.web.app/');

    cy.get(':nth-child(1) > [data-cy="activity-item-title"]').click();

    cy.get(':nth-child(2) > [data-cy="todo-item-delete-button"]').click();

    cy.wait(3000)

    ///batal hapus
    cy.get('[data-cy="modal-delete-cancel-button"]').click();

    cy.wait(2000);

    ///hapus
    cy.get(':nth-child(2) > [data-cy="todo-item-delete-button"]').click();

    cy.get('[data-cy="modal-delete-confirm-button"]').click();



});