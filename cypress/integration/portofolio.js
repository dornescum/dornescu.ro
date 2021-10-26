/* eslint-disable */
// / <reference types="cypress" />

describe('portfolio section modal and info', ()=>{
	beforeEach(() => {
		cy.visit('https://dornescu.ro/');
		cy.get('#future');
	});
	it('should show modal', function () {
		cy.viewport('macbook-16');
		cy.get('#future-start > :nth-child(1)').click().wait(2000);
		cy.get('.close-modal-btn > .fas').click();
	});
})
