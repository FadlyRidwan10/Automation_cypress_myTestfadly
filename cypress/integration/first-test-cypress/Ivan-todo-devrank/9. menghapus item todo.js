/// <reference types="cypress" />

it('ivan-todo-devrank.netlify.app hapus dengan menambahkan konten', () => {
    //Flow => menampilkan halaman utama 
    cy.visit('https://ivan-todo-devrank.netlify.app');

    cy.get('[data-cy="activity-add-button"]').click();

    cy.get(':nth-child(1) > [data-cy="activity-item"] > .activity-body > [data-cy="activity-item-title"]').click();

    cy.get('[data-cy="todo-add-button"]').click();

    cy.get('#AddFormTitle').type('sahur');

    cy.get('[data-cy="modal-add-priority-dropdown"]').click();

    cy.contains('Medium').click();

    cy.get('[data-cy="modal-add-save-button"]').click();

    cy.get('[data-cy="todo-item-checkbox"]').click();

    cy.get('[data-cy="todo-item-delete-button"]').click();

    cy.get('[data-cy="modal-delete-confirm-button"]').click();

});



it.only('hapus langsung', () => {

    cy.visit('https://ivan-todo-devrank.netlify.app');

    cy.get(':nth-child(1) > [data-cy="activity-item"]').click();

    cy.get(':nth-child(2) > [data-cy="todo-item-delete-button"]').click();

    cy.get('[data-cy="modal-delete-confirm-button"]').click();  



});