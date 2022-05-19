/// <reference types="cypress" />

it('ivan-todo-devrank.netlify.app _ TERLAMA', () => {
    
    cy.visit('https://ivan-todo-devrank.netlify.app');

    cy.get(':nth-child(1) > [data-cy="activity-item"] > .activity-body > [data-cy="activity-item-title"]').click();

    cy.get('[data-cy="todo-sort-button"]').click();

    cy.wait(3000);

    cy.get(':nth-child(2) > [data-cy="false"]').click();

    
});

it('ivan-todo-devrank.netlify.app _ filter dari A - Z ', () => {
    
    cy.visit('https://ivan-todo-devrank.netlify.app');

    cy.get(':nth-child(1) > [data-cy="activity-item"] > .activity-body > [data-cy="activity-item-title"]').click();

    cy.get('[data-cy="todo-sort-button"]').click();

    cy.wait(3000);

    cy.get(':nth-child(3) > [data-cy="false"]').click();

    
});
it.only('ivan-todo-devrank.netlify.app _ filter dari Z - A ', () => {
    
    cy.visit('https://ivan-todo-devrank.netlify.app');

    cy.get(':nth-child(1) > [data-cy="activity-item"] > .activity-body > [data-cy="activity-item-title"]').click();

    cy.get('[data-cy="todo-sort-button"]').click();


    cy.get(':nth-child(4) > [data-cy="false"]').click();

    
});
