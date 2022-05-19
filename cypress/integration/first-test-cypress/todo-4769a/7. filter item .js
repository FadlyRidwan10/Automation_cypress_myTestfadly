/// <reference types="cypress" />

it('filter terlama', () => {
    cy.visit('https://todo-4769a.web.app/');

    cy.get(':nth-child(1) > .box-activity-content > .box-activity-title > [data-cy="activity-item-title"]').click();

    cy.get('[data-cy="todo-sort-button"]').click();

    cy.wait(4000);

    cy.get('.modal-add-dropdown-content > :nth-child(2)').click();


});

it('filter dari A - Z ', () => {
    cy.visit('https://todo-4769a.web.app/');

    cy.get(':nth-child(1) > .box-activity-content > .box-activity-title > [data-cy="activity-item-title"]').click();

    cy.get('[data-cy="todo-sort-button"]').click();

    cy.wait(4000);

    cy.get('.modal-add-dropdown-content > :nth-child(3)').click();


});

it.only('filter dari z - a ', () => {
    cy.visit('https://todo-4769a.web.app/');

    cy.get(':nth-child(1) > .box-activity-content > .box-activity-title > [data-cy="activity-item-title"]').click();

    cy.get('[data-cy="todo-sort-button"]').click();

    cy.wait(4000);

    cy.get('.modal-add-dropdown-content > :nth-child(4)').click();


});