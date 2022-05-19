/// <reference types="cypress" />

it('filter todo dari TERLAMA', () => {
    cy.visit('https://todo-devcode.web.app/');

    cy.get(':nth-child(1) > [data-cy="activity-item-title"]').click();

    cy.get('[data-cy="todo-sort-button"]').click();

    cy.get('[data-cy="sort-parent"] > :nth-child(2)').click();


});

it('filter todo dari A - Z', () => {
    cy.visit('https://todo-devcode.web.app/');

    cy.get(':nth-child(1) > [data-cy="activity-item-title"]').click();

    cy.get('[data-cy="todo-sort-button"]').click();

    cy.get('[data-cy="sort-parent"] > :nth-child(3)').click();


});

it.only('filter todo dari Z - A', () => {
    cy.visit('https://todo-devcode.web.app/');

    cy.get(':nth-child(1) > [data-cy="activity-item-title"]').click();

    cy.get('[data-cy="todo-sort-button"]').click();

    cy.get('[data-cy="sort-parent"] > :nth-child(4)').click();


});