/// <reference types="cypress" />

it('filter terlama', () => {
    cy.visit('https://todo-4769a.web.app/');

    cy.get(':nth-child(1) > .box-activity-content > .box-activity-title > [data-cy="activity-item-title"]').click();

    cy.get(':nth-child(7) > .todo-item-content > .todo-item-content-name > [data-cy="todo-item-checkbox"]').click();

    cy.get(':nth-child(6) > .todo-item-content > .todo-item-content-name > [data-cy="todo-item-checkbox"]').click();

    cy.get(':nth-child(5) > .todo-item-content > .todo-item-content-name > [data-cy="todo-item-checkbox"]').click();

    cy.get(':nth-child(3) > .todo-item-content > .todo-item-content-name > [data-cy="todo-item-checkbox"]').click();




});