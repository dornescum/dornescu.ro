/* eslint-disable */
// / <reference types="cypress" />

describe('portfolio section modal and info', () => {
	beforeEach(() => {
		cy.visit('https://dornescu.ro/');
		cy.get('#future');
	});
	it('should show modal with message HTML', function () {
		cy.viewport('macbook-16');
		cy.get('#future-start > :nth-child(1)').click();
		cy.get('#message-modal').should('be.visible').contains('HTML');
		cy.get('.close-modal-btn > .fas').click();
	});
	it('should open cadastru-website and return to dornescu.ro', function () {
		cy.get(':nth-child(1) > .card-project > .card-link').invoke('removeAttr', 'target').click({force: true});
		cy.go('back');
		cy.url().should('include', 'dornescu');
	});
	it('should show modal with message js', function () {
		cy.viewport('macbook-16');
		cy.get('#future-start > :nth-child(2)').click();
		cy.get('#message-modal').should('be.visible').contains('js');
		cy.get('.close-modal-btn > .fas').click();
	});
	it('should open github and return to dornescu.ro', function () {
		cy.get(':nth-child(2) > .card-project > .card-link').invoke('removeAttr', 'target').click({force: true});
		cy.go('back');
		cy.url().should('include', 'dornescu');
	});
	it('should open repo and return to dornescu.ro', function () {
		cy.get('#future-start > :nth-child(4)').click();
		cy.get('#message-modal').should('be.visible').contains('js');
		cy.get('.close-modal-btn > .fas').click();
	});
	it('should open apartament-next and return to dornescu.ro', function () {
		cy.get(':nth-child(5) > .card-project > .card-link').invoke('removeAttr', 'target').click({force: true});
		cy.go('back');
		cy.url().should('include', 'dornescu');
	});
	it('should open opelutul.ro and return to dornescu.ro', function () {
		cy.get(':nth-child(6) > .card-project > .card-link').invoke('removeAttr', 'target').click({force: true});
		cy.go('back');
		cy.url().should('include', 'dornescu');
	});

	it('should work on mobile cadastru link', function () {
		cy.viewport('iphone-xr');
		cy.get(':nth-child(1) > .card-project > .card-link').invoke('removeAttr', 'target').click({force: true});
		cy.go('back');
		cy.url().should('include', 'dornescu');
	});
	it('should work on mobile github link', function () {
		cy.viewport('iphone-xr');
		cy.get(':nth-child(2) > .card-project > .card-link').invoke('removeAttr', 'target').click({force: true});
		cy.go('back');
		cy.url().should('include', 'dornescu');
	});
	it('should work on mobile aparatament', function () {
		cy.viewport('iphone-xr');
		cy.get(':nth-child(3) > .card-project > .card-link').invoke('removeAttr', 'target').click({force: true});
		cy.go('back');
		cy.url().should('include', 'dornescu');
	});
	it('should work on mobile poeti', function () {
		cy.viewport('iphone-xr');
		cy.get('#future-start > :nth-child(4)').click();
		cy.get('#message-modal').should('be.visible').contains('js');
		cy.get('.close-modal-btn > .fas').click();
	});
	it('should work on mobile new apartament', function () {
		cy.viewport('iphone-xr');
		cy.get(':nth-child(5) > .card-project > .card-link').invoke('removeAttr', 'target').click({force: true});
		cy.go('back');
		cy.url().should('include', 'dornescu');
	});
	it('should work on mobile opelutul', function () {
		cy.viewport('ipad-2');
		cy.get(':nth-child(6) > .card-project > .card-link').invoke('removeAttr', 'target').click({force: true});
		cy.go('back');
		cy.url().should('include', 'dornescu');
	});


});
