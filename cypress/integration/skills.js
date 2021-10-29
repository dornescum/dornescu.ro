/* eslint-disable */
// / <reference types="cypress" />

describe('', ()=>{
	beforeEach(() => {
		cy.visit('https://dornescu.ro/');
		cy.get('#learning');
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
		cy.get('#jest').should('have.class', 'disabled');
	});
	it('should be display flex-column in mobile', function () {
		cy.viewport('iphone-xr');
		cy.get('[data-testid=learning-courses] > .row');
	});
	it('should have css category', function () {
		cy.get('#past-left > .card >ul > *').filter("#css").should('have.text', 'css');
	});
	it('should  ', function () {
		cy.get('#past-left > .card ').find('ul').find('li').should('have.length', '6');
	});
	it('should find React js ', function () {
		cy.get('#cardPastRight > .card-ul').first().should('contain', 'react js');
	});
	it('should find the last element = cypress', function () {
		cy.get('#cardPastRight > .card-ul').last().should('contain', 'cypress');
	});
	it('should not include disabled elements', function () {
		cy.get('#cardPastRight > .card-ul > li').not('.disabled').should('not.have.class', 'disabled');
	});
	it('PARENTS() should fint parents', function () {
		cy.get('#react').parents().should('match', '#past-right')
	});
	it('PREV() should find previous link', function () {
		cy.get('#cypress').prev().contains('jest')
	});
	it('PREVALL() should find previous links', function () {
		cy.get('#cypress').prevAll().should('have.length', '5')
	});
	it('PREVUNTILL() should find 4 links above', function () {
		cy.get('#cypress').prevUntil('#react').should('have.length', 3)
	});
	it.only('SIBLINGS() should find 5 links above', function () {
		cy.get('#cypress').siblings().should('have.length', 5)
	});


})
