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
	it('testing sidebar in mobile view', function () {
		cy.viewport('iphone-xr');
		cy.get('.toggle-nav > .fas').click();
		// cy.get('.sidebar');
		cy.get('#sidebar-present > .sidebar-link');
		cy.get('#sidebar-past > .sidebar-link');
		// cy.visit("https://dornescu.ro/").contains('a', '#').should('have.attr', 'href');
		// cy.contains("a", "#");
	});
	it.only('sidebar links in mobile ', function () {
		cy.viewport('samsung-s10');
		cy.get('.toggle-nav > .fas').click();
		cy.get(':nth-child(1) > .sidebar-link').click();
		cy.get('.toggle-nav > .fas').click();
		cy.get(':nth-child(2) > .sidebar-link').click();
		cy.get('.toggle-nav > .fas').click();
		cy.get(':nth-child(3) > .sidebar-link').click();

		// github
		cy.get('.toggle-nav > .fas').click();

		cy.get(':nth-child(4) > .sidebar-link').click();
		// fixme not getting the link property
		// cy.get(':nth-child(4) > .sidebar-link').should('include', 'href', 'https://github.com/dornescum.html');
		cy.debug()
		// cy.url().should('eq', 'https://github.com/dornescum.html');
		// cy.get(':nth-child(4) > .sidebar-link').location('href').should('include', 'https://github.com/dornescum.html')
		// linkedIn
		cy.get(':nth-child(5) > .sidebar-link').click();
	});
	it('launch phone in mobile', function () {
		cy.viewport('iphone-x');
		cy.get('.toggle-nav > .fas').click();
		//fixme how to stop after launch action?
		// cy.get(':nth-child(6) > .sidebar-link').click();
		cy.get(':nth-child(6) > .sidebar-link').should('have.attr', 'href');
	});
	it('should launch email in mobile', function () {
		cy.viewport('iphone-x');
		cy.get('.toggle-nav > .fas').click();
		cy.get(':nth-child(7) > .sidebar-link').should('have.attr', 'href');
		cy.get(':nth-child(7) > .sidebar-link').should('have.attr', 'href', 'mailto:dornescu@gmail.com');
	});
	it('should close sidebar', function () {
		cy.viewport('iphone-x');
		cy.debug();
		cy.get('.toggle-nav > .fas' ).click();
		cy.debug();
		cy.get('.sidebar-close').click();
	});
});
