/// <reference types="cypress" />


it('ivan-todo-devrank.netlify.app - Hapus', () => {
   
    cy.visit('https://ivan-todo-devrank.netlify.app');

    cy.get(':nth-child(1) > [data-cy="activity-item"] > .card-footer > [data-cy="activity-item-delete-button"]').click();

    cy.wait(4000);

    cy.get('[data-cy="modal-delete-confirm-button"]').click();

    cy.wait(1000);

    cy.get('.modal-toast').click();

});

it('Batal', () => {

    cy.visit('https://ivan-todo-devrank.netlify.app');

    cy.get(':nth-child(1) > [data-cy="activity-item"] > .card-footer > [data-cy="activity-item-delete-button"]').click();

    cy.wait(4000);

    cy.get('[data-cy="modal-delete-cancel-button"]').click();

    
});

it.only('Batal clik luar modal', () => {

    cy.visit('https://ivan-todo-devrank.netlify.app');

    cy.get(':nth-child(1) > [data-cy="activity-item"] > .card-footer > [data-cy="activity-item-delete-button"]').click();

    cy.wait(4000);
    
    cy.get('.modal-delete').click();


});