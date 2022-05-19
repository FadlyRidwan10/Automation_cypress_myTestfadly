/// <reference types="cypress" />

it('mengganti title todo', () => {
    cy.visit('https://todo-4769a.web.app/');

    cy.get(':nth-child(1) > .box-activity-content > .box-activity-title > [data-cy="activity-item-title"]').click();

    cy.get('[data-cy="todo-title-edit-button"]').click();

    cy.get('#input-title').type(' keseharian ini');
});