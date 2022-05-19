/// <reference types="cypress" />

it('menghapus item', () => {
    cy.visit('https://todo-4769a.web.app/');

    cy.get(':nth-child(1) > .box-activity-content > .box-activity-title > [data-cy="activity-item-title"]').click();

    cy.get(':nth-child(6) > .todo-item-content > [data-cy="todo-item-delete-button"]').click();

    cy.get('[data-cy="modal-delete-confirm-button"]').click();

    ///hapus item ke 2

    cy.get(':nth-child(5) > .todo-item-content > [data-cy="todo-item-delete-button"]').click();

    cy.get('[data-cy="modal-delete-confirm-button"]').click();




});