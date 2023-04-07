/// <reference types="cypress" />

import dayjs from 'dayjs';

describe('template spec', () => {
    beforeEach(() => {
        cy.intercept('GET', '/tasks', { fixture: 'tasks.json' });
        cy.intercept('POST', '/create', { fixture: 'createTask.json' });
        cy.visit('http://127.0.0.1:5173/');
    });
    it('Should load the page without error', () => {
        cy.get('h2').should(
            'have.text',
            'Status of your tasks as you are on ' +
                dayjs(new Date()).format('dddd, MMMM D, YYYY'),
        );

        cy.get('.status-todo').should('be.visible');
        cy.get('.status-inProgress').should('be.visible');
        cy.get('.status-completed').should('be.visible');
        cy.get('.tasklist--container').scrollTo('bottom');
    });
    it('should be able to add new Task ', () => {
        cy.get('#taskName')
            .type('My New Task for Today')
            .should('have.value', 'My New Task for Today');
        cy.get('#taskDescription')
            .type('Task Description for todays task')
            .should('have.value', 'Task Description for todays task');
        cy.get('.dueDate').find('input').type('4').type('11').type('2023');
        cy.get('#Status').click();
        cy.get(`[data-value="Todo"]`).click();
        cy.get('#Priority').click();
        cy.get(`[data-value="Low"]`).click();
        cy.get('#createTask').click();
        cy.wait(500);
        // cy.get(`[aria-label="Choose date"]`).click();
        //  cy.get(`[aria-colindex="10"]`).click();
        // cy.wait(200);
    });
});
