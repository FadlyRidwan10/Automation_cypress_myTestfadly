/// <reference types="cypress" />

it('mengganti title todo', () => {
    cy.visit('https://todo-devcode.web.app/');

    cy.get(':nth-child(1) > [data-cy="activity-item-title"]').click();

    cy.get('[data-cy="todo-add-button"]').click();

    cy.get('[data-cy="modal-add-name-input"]').type('Belajar cypress');

    cy.get('[data-cy="modal-add-priority-dropdown"]').click();

    cy.get('.jss41 > :nth-child(2)').click();

    cy.get('[data-cy="modal-add-save-button"]').click();

    cy.get('[data-cy="todo-add-button"]').click();

    cy.get('[data-cy="modal-add-name-input"]').type('Belanja');

    cy.get('[data-cy="modal-add-priority-dropdown"]').click();

    cy.get('.jss64 > :nth-child(4)').click();

    cy.get('[data-cy="modal-add-save-button"]').click();



});