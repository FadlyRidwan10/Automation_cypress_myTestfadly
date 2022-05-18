/// <reference types="cypress" />


it('ivan-todo-devrank.netlify.app', () => {
    //Flow => menampilkan halaman utama 
    cy.visit('https://ivan-todo-devrank.netlify.app');


    cy.request('https://todo.api.devcode.gethired.id/activity-groups').then((response) => {
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
        
    })


});