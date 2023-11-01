/// <reference types="cypress" />

context('MEC Energia', () => {
  it('Fazer Login', () => {
    cy.visit('http://139.144.169.103')
    cy.get('#\\:r0\\:').type('admin@admin.com');
    cy.get('#\\:r1\\:').type('admin');
    cy.get('.MuiButton-containedPrimary[type="submit"]').click();
  });
});