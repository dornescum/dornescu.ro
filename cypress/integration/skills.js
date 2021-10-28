/* eslint-disable */
// / <reference types="cypress" />

describe('', ()=>{
	beforeEach(() => {
		cy.visit('https://dornescu.ro/');
		cy.get('#future');
	});
	it('should contain #learning', function () {
		// cy.get('#learning').should('have.text', 'Skills');
		cy.get('[data-testid=learning-courses] > .title > p');
		cy.get('#past-left > .card');
		cy.get('#cardPastRight')
	});
	it('should close card section left and right skills', function () {
		cy.get('#pastLeftBtn').click({force: true});
		cy.get('#pastRightBtn').click({force: true});
		cy.reload();
	});
	it('should have class', function () {
		cy.get('#html').should('have.class', 'card-list');
	});
	it('should have box-shadow', function () {
		// cy.get('.card').trigger('mouseover');
		cy.get('#past-left >.card').trigger('mouseover').wait(6000)
		cy.get('.card-ul').click({ multiple: true })
	});
	it('should have font 17.6', function () {
		cy.get('#html').should('have.css', 'font-family');
		cy.get('#html').should('have.css', 'font-size', '17.6px');

	});
	it('should have individual animation left & right', function () {
		cy.get('#html').should('have.css', 'animation', '1.5s ease-in 0s 1 normal none running anim-left');
		cy.get('#vue').should('have.css', 'animation', '3s ease-in 0s 1 normal none running anim-right');
	});
	it('should have class disable', function () {
		cy.get('#jest').should('have.class', 'disabled')
	});
	it('should be display flex-column in mobile', function () {
		cy.viewport('iphone-xr');
		cy.get('[data-testid=learning-courses] > .row');
	});

})
