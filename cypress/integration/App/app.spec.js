describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('Should render the tab navigation', () => {
    cy.get('nav').children().should('have.length', 2);
  });
  it('should go to characers page and load table', () => {
    cy.get('nav').children().contains('Characters').click();
    cy.get('h2').should('contain', 'Characters Page');
  });
});
