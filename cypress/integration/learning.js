/* eslint-disable */
// / <reference types="cypress" />

describe('testing learning section', ()=>{
	beforeEach(() => {
		cy.visit('https://dornescu.ro/');
		cy.get('.timeline');
	});
	it('should contain list of courses', function () {
		cy.get(':nth-child(1) > .content').should('not.have.class', 'disabled');
		cy.get(':nth-child(1) > .content').should('have.css', 'position', 'relative');
		cy.get(':nth-child(1) > .content > ul > :nth-child(1) > a').contains('Html');
		cy.get(':nth-child(1) > .content > h2').should('have.css', 'font-size', '18px');
		cy.get(':nth-child(1) > .content > ul > :nth-child(1) > a ').should('have.css', 'color', 'rgb(34, 34, 34)');
	});
})
