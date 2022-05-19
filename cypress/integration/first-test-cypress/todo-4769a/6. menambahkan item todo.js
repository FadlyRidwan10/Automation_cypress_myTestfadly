/// <reference types="cypress" />

it('menambahkan activity', () => {
    cy.visit('https://todo-4769a.web.app/');

    cy.get(':nth-child(1) > .box-activity-content > .box-activity-title > [data-cy="activity-item-title"]').click();

    cy.get('[data-cy="todo-add-button"]').click();

    //item 1

    cy.get('[data-cy="modal-add-name-input"]').type('Mandi Pagi');

    cy.get('[data-cy="modal-add-priority-dropdown"]').click();

    cy.get('[style="margin-top: 10px;"] > .modal-add-dropdown-2 > .modal-add-dropdown-content > :nth-child(3)').click();

    cy.get('[data-cy="modal-add-save-button"]').click();

    ///item 2

    cy.get('[data-cy="todo-add-button"]').click();

    cy.get('[data-cy="modal-add-name-input"]').type('Sarapan');

    cy.get('[data-cy="modal-add-priority-dropdown"]').click();

    cy.get('[style="margin-top: 10px;"] > .modal-add-dropdown-2 > .modal-add-dropdown-content > :nth-child(3)').click();

    cy.get('[data-cy="modal-add-save-button"]').click();

    ///item 3

    cy.get('[data-cy="todo-add-button"]').click();

    cy.get('[data-cy="modal-add-name-input"]').type('Bekerja');

    cy.get('[data-cy="modal-add-priority-dropdown"]').click();

    cy.get('[style="margin-top: 10px;"] > .modal-add-dropdown-2 > .modal-add-dropdown-content > :nth-child(3)').click();

    cy.get('[data-cy="modal-add-save-button"]').click();


});