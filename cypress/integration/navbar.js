// https://dornescu.ro/
/* eslint-disable */
// / <reference types="cypress" />
describe('testing navbar for elements', () => {
	beforeEach(() => {
		cy.visit('https://dornescu.ro/');
	});
	it('testing navbar links inside the DOM', function () {
		// cy.get("ul").contains('Home').click()
		cy.viewport('macbook-16');
		cy.get('[data-testid=navbar]');
		// .should('have.attr', 'navbar')
		cy.get('[data-testid=navbar]').should('have.class', 'navbar');
		cy.get('.logo').should('have.text', 'Mihai Dornescu');
		cy.get('.logo').should('have.length', '1', {timeout: 1 * 1000});
		// cy.get('ul > li').should('have.class', 'ul-links')
		cy.get('.ul-links');
		cy.get('.ul-links > :nth-child(1) > a').should('have.text', 'Home').click();
		cy.get('.ul-links > :nth-child(1)').should('have.class', 'links');
		cy.get('.ul-links > :nth-child(1)').trigger('mouseover').click();
		cy.get('.ul-links > :nth-child(2) > a').should('have.text', 'Skills').click();
		cy.get('.ul-links > :nth-child(3) > a').should('have.text', 'Portfolio').click();
	});

	it('starts with black background then changes to weird yellow', () => {
		// cy.get('.ul-links > :nth-child(1) > a').should('have.css', 'background-color', '#222')
		cy.get('.ul-links > :nth-child(1) > a').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
		// fixme not showing the right color
		// cy.get('.ul-links > :nth-child(1) > a').should('have.css', 'background-color', '#ffd73a')
	});
	it.only('testing sidebar in mobile view', function () {
		cy.viewport('iphone-xr');
		cy.get('.toggle-nav > .fas').click();
		// cy.get('.sidebar');
		cy.get('#sidebar-present > .sidebar-link');
		cy.get('#sidebar-past > .sidebar-link');
		cy.visit("https://dornescu.ro/").contains('a', '#').should('have.attr', 'href');
		// cy.contains("a", "#");
	});
});
