describe('Home Page Tests', () => {
  beforeEach(() => {
    // Visit the home page before each test
    cy.visit('https://code-a-forest.vercel.app/');
  });

  it('validates the URL', () => {
    cy.url().should('contains', 'https://code-a-forest.vercel.app/');
  });

  it('should display the correct page title', () => {
    cy.title().should('contains', 'Code & Grow');
  });

  it('should display the main header', () => {
    cy.get('[data-cy="hero-title"]').contains('Solve a Code, Plant a Tree');
  });

});