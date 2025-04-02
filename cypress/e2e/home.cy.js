describe('Home Page Tests', () => {
  beforeEach(() => {
    // Visit the home page before each test
    cy.visit('https://code-a-forest.vercel.app/');
  });

  it('should display the correct page title', () => {
    cy.title().should('contains', 'Code & Grow');
  });

  it('should display the main header', () => {
    cy.get('h1').should('contain.text', 'Welcome to Code & Grow');
  });

  it('should have a navigation bar with all links', () => {
    cy.get('nav').within(() => {
      cy.get('a').should('have.length.at.least', 3); // Adjust based on your nav links
      cy.contains('Home').should('be.visible');
      cy.contains('Challenges').should('be.visible');
      cy.contains('About').should('be.visible');
    });
  });

  it('should display a call-to-action button', () => {
    cy.get('button').contains('Start Solving').should('be.visible').and('not.be.disabled');
  });

  it('should navigate to the challenges page when clicking the CTA button', () => {
    cy.get('button').contains('Start Solving').click();
    cy.url().should('include', '/challenges');
  });

  it('should display a footer with social media links', () => {
    cy.get('footer').within(() => {
      cy.get('a').should('have.length.at.least', 2); // Adjust based on your footer links
      cy.contains('Twitter').should('have.attr', 'href').and('include', 'twitter.com');
      cy.contains('GitHub').should('have.attr', 'href').and('include', 'github.com');
    });
  });

  it('should load the featured challenges section', () => {
    cy.get('#featured-challenges').should('be.visible');
    cy.get('#featured-challenges .challenge-card').should('have.length.at.least', 1);
  });

  it('should display a responsive layout', () => {
    cy.viewport('iphone-6');
    cy.get('nav').should('be.visible');
    cy.viewport('macbook-15');
    cy.get('nav').should('be.visible');
  });

  it('should display a search bar and allow input', () => {
    cy.get('input[type="search"]').should('be.visible').type('Tree Planting');
    cy.get('input[type="search"]').should('have.value', 'Tree Planting');
  });

  it('should handle 404 errors gracefully', () => {
    cy.visit('/non-existent-page', { failOnStatusCode: false });
    cy.get('h1').should('contain.text', '404');
    cy.contains('Page not found').should('be.visible');
  });
});