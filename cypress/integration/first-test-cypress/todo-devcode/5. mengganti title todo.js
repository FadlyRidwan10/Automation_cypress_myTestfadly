/// <reference types="cypress" />

it('mengganti title todo', () => {
    cy.visit('https://todo-devcode.web.app/');

    cy.get(':nth-child(1) > [data-cy="activity-item-title"]').click();

    cy.get('[data-cy="todo-title"]').type('keseharian saya');

});