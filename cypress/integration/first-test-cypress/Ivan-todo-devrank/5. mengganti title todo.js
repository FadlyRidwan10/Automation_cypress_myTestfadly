/// <reference types="cypress" />

it('ivan-todo-devrank.netlify.app', () => {
    //Flow => menampilkan halaman utama 
    cy.visit('https://ivan-todo-devrank.netlify.app');

    cy.get(':nth-child(1) > [data-cy="activity-item"] > .activity-body > [data-cy="activity-item-title"]').click();

    cy.get('[data-cy="todo-title-edit-button"]').click();

    cy.get('.todo-title').type('keseharian saya');



});