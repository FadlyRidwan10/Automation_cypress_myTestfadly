/// <reference types="cypress" />

it('todo devcode', () => {
    cy.visit('https://todo-devcode.web.app/');

    cy.get('[data-cy="activity-add-button"]').click()
});