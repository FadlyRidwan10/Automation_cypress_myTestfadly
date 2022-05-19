/// <reference types="cypress" />

it('menghapus activity ', () => {
    cy.visit('https://todo-4769a.web.app/');

    cy.get(':nth-child(1) > .box-activity-content > .box-activity-footer > [data-cy="activity-item-delete-button"]').click();

    cy.wait(4000);

    cy.get('[data-cy="modal-delete-confirm-button"]').click();

    
});

it.only('Batal hapus activity ', () => {
    cy.visit('https://todo-4769a.web.app/');

    cy.get(':nth-child(1) > .box-activity-content > .box-activity-footer > [data-cy="activity-item-delete-button"]').click();

    cy.wait(4000);

    cy.get('[data-cy="modal-delete-cancel-button"]').click();

    
});