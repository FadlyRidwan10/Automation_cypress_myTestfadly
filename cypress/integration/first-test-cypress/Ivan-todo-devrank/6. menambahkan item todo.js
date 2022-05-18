/// <reference types="cypress" />

it('ivan-todo-devrank.netlify.app', () => {
    //Flow => menampilkan halaman utama 
    cy.visit('https://ivan-todo-devrank.netlify.app');

    cy.get('[data-cy="activity-add-button"]').click();

    cy.get(':nth-child(1) > [data-cy="activity-item"] > .activity-body').click();

    cy.get('[data-cy="todo-add-button"]').click();

    cy.get('#AddFormTitle').type('sahur');

    cy.get('[data-cy="modal-add-priority-dropdown"]').click();

    cy.contains('Medium').click();

    cy.get('[data-cy="modal-add-save-button"]').click();


});
it.only('ivan-todo-devrank.netlify.app', () => {
    //Flow => menampilkan halaman utama 
    cy.visit('https://ivan-todo-devrank.netlify.app');

    cy.get('[data-cy="activity-add-button"]').click();

    cy.get(':nth-child(1) > [data-cy="activity-item"] > .activity-body').click();

    cy.get('[data-cy="todo-add-button"]').click();

    cy.get('#AddFormTitle').type('sahur');

    cy.get('[data-cy="modal-add-priority-dropdown"]').click();

    cy.contains('Medium').click();

    cy.get('[data-cy="modal-add-save-button"]').click();


});

