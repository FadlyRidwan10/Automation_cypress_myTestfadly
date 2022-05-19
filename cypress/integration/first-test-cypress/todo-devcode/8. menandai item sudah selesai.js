/// <reference types="cypress" />

it('filter todo dari TERLAMA', () => {
    cy.visit('https://todo-devcode.web.app/');

    cy.get(':nth-child(1) > [data-cy="activity-item-title"]').click();

    cy.get(':nth-child(2) > .jss28 > .jss31 > .jss32').click();
    cy.get(':nth-child(3) > .jss28 > .jss31 > .jss32').click();
    cy.get(':nth-child(5) > .jss28 > .jss31 > .jss32').click();


});