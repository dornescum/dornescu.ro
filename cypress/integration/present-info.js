/* eslint-disable */
// / <reference types="cypress" />

describe('about me section testing links', () => {
	beforeEach(() => {
		cy.visit('https://dornescu.ro/');
		cy.get('#present');
	});
	it('should have links', function () {
		cy.get('.right-1');
		cy.get('.info > :nth-child(1)');
		cy.get(':nth-child(1) > .info-a > span');
		cy.get(':nth-child(1) > .info-a > span').should('have.text', '+40 762369717');
		// cy.log(':nth-child(1) > .info-a > span').contains('+40 762369717');
		// todo imi da [object object]
		cy.get('.right-1 > .info > .info-link > .info-a').each((el, index) => {
			cy.log(`Index is ${index} for element ${el}`);
			// cy.wrap(el).click()
		});
		// todo imi da [object object]
		cy.get('.right-1 > ul> li > a > span ').each((el, index) => {
			cy.log(`${el}`);
		});
		cy.get('#git > .info-a').contains('Github');
		cy.get('#linkedIn > span').contains('LinkedIn');
		cy.get('#linkedIn > span').contains('LinkedIn');
		cy.get('#linkedIn').click({force: true});
		// todo dc nu se mai duce pe link?
		cy.get('.info > :nth-child(6)').invoke('removeAttr', 'target').click({force: true});
	});
	it('should work in mobile', function () {
		cy.viewport('iphone-xr');
		cy.get('.right-1');
		//.find('img').should('have.attr', 'src', 'assets/img/Mihai1.webp')
		//todo error!!
		// cy.get('.left-1 > img').find('img').should('have.attr', 'src').should('include','assets/img/Mihai1.webp')
		cy.get('.left-1 > img').should('be.visible');
		cy.get('.right-1');
		cy.get(':nth-child(1) > .info-a > span');
		cy.log(':nth-child(1) > .info-a > span');
		// fixme trim() Bucharest
		cy.get(':nth-child(4) > span').should('have.text', ' Bucharest');
		// fixme pleaca pe alta pagina
		// cy.get('#git > .info-a > span').invoke('removeAttr', 'target').click({force:true});
		cy.url().should('include','dornescu');
		cy.url().should('include','https://dornescu.ro/');
		// cy.go('back');
		cy.reload(true);
		cy.get('#git > a').invoke('removeAttr', 'target').click({force:true});
		cy.go('forward');
		cy.url().should('include','dornescu');
		cy.go('back');
		// cy.url().should('include','dornescu');


	});
});
