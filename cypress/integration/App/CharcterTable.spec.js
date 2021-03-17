describe('Charcter Table', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/#/Characters');
  });

  it('should render search', () => {
    cy.get('input').type('Morty').wait(1000);
    cy.get('div[name="row"]').first().should('have.id', '2');
    cy.get('input')
      .clear()
      .wait(1000)
      .get('div[name="row"]')
      .first()
      .should('have.id', '1');
  });

  it('should filter by Species', () => {
    cy.get('button[name="species"]')
      .click()
      .get('div[name="row"]')
      .first()
      .should('have.id', '6');
  });
});
