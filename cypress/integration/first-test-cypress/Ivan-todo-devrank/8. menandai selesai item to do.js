/// <reference types="cypress" />

it('ivan-todo-devrank.netlify.app _ menandai item selesai', () => {

    cy.visit('https://ivan-todo-devrank.netlify.app');

    cy.get(':nth-child(1) > [data-cy="activity-item"]').click();

    cy.get(':nth-child(1) > .d-flex > :nth-child(1) > [data-cy="todo-item-checkbox"]').click();

   


});