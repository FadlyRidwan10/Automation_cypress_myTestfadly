
describe('ivan todo API', () => { 


    it('ivan-todo-devrank.netlify.app - GET API', () => {

        cy.request('https://todo.api.devcode.gethired.id/activity-groups')
            .its('body')
            .should('have.length', 12495)
    });



 });


