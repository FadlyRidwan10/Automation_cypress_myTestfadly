/// <reference types="cypress" />

it('ivan-todo-devrank.netlify.app', () => {
    //Flow => menampilkan halaman utama 
    cy.visit('https://ivan-todo-devrank.netlify.app');

    cy.get(':nth-child(1) > [data-cy="activity-item"] > .activity-body > [data-cy="activity-item-title"]').click();

    cy.get('[data-cy="todo-add-button"]').click();

    cy.get('#AddFormTitle').type('makan malam');

    cy.get('[data-cy="modal-add-priority-dropdown"]').click();

    cy.contains('Medium').click();

    cy.get('[data-cy="modal-add-save-button"]').click();

    ///item ke 2 ///belum bisa

    cy.get('[data-cy="todo-add-button"]').click();

    cy.get('#AddFormTitle').type('makan malam');

    cy.get('[data-cy="modal-add-priority-dropdown"]').click();

    cy.contains('Medium').click();

    cy.get('[data-cy="modal-add-save-button"]').click();


});
