/// <reference types="cypress" />


it('ivan-todo-devrank.netlify.app', () => {
    //Flow => menampilkan halaman utama 
    cy.visit('https://ivan-todo-devrank.netlify.app');

    cy.get('[data-cy="activity-add-button"]').click();




});