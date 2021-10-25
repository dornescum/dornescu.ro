// https://dornescu.ro/
/* eslint-disable */
// / <reference types="cypress" />
describe('testing navbar', ()=>{
	beforeEach(()=>{
		cy.visit('https://dornescu.ro/')
	})
	it('test', function () {

		cy.get("ul")
		// .should('have.text', 'Log In')

	});
})
