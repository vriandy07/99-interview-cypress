/// <reference types="cypress" />

/* 
  Welcome QA candidate! Good luck in writing your test script! 
  You may structure or name your file however you see fit as this is just a template
*/

describe("Check all of the links under Blog", () => {
  beforeEach('Access pawshake homepage ', () => {
    /* Access to pawshake page */
    cy.viewport(1280, 800)
    cy.visit('https://www.pawshake.com.sg/')

    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
      });
        
  })

  afterEach(() => {
    /* Clear cache and local storage */
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    //cy.end
  })



  it('Verify blog title: 5 Creative and Budget-Friendly DIY Dog Toys is exist', () => {
    cy.get('[class="sc-9836ea38-2 lehXrI sc-142d41c1-15 bpmNlm"] h4').should('contain', "5 Creative and Budget-Friendly DIY Dog Toys")             
  
  })



  it('Verify blog title: King Charles Cavalier | Dog Breed Information is exist', () => {
    cy.get('[class="sc-9836ea38-2 lehXrI sc-142d41c1-15 bpmNlm"] h4').should("contain", "King Charles Cavalier | Dog Breed Information")
      
  })



  it('Verify blog title: Dalmatian | Dog Breed Information is exist', () => {
    cy.get('[class="sc-9836ea38-2 lehXrI sc-142d41c1-15 bpmNlm"] h4').should("contain", "Dalmatian | Dog Breed Information")
      
  })



  it('Verify blog link exist: 5 Creative and Budget-Friendly DIY Dog Toys', () => {
    cy.get(':nth-child(1) > .sc-9836ea38-3').scrollIntoView().should('have.attr', 'href').and('include', 'https://www.pawshake.com.sg/blog/5-creative-and-budget-friendly-diy-dog-toys')                                        
  
  })



  it('Verify blog link exist: King Charles Cavalier | Dog Breed Information', () => {
    cy.get(':nth-child(2) > .sc-9836ea38-3').scrollIntoView().should('have.attr', 'href').and('include', 'https://www.pawshake.com.sg/blog/king-charles-cavalier-dog-breed-information')                                        
  
  })



  it('Verify blog link exist: Dalmatian | Dog Breed Information', () => {
    cy.get(':nth-child(3) > .sc-9836ea38-3').scrollIntoView().should('have.attr', 'href').and('include', 'https://www.pawshake.com.sg/blog/dalmatian-dog-breed-information')                                        
  
  })



  it("is redirected to the 5 Creative and Budget-Friendly DIY Dog Toys page", () => {
    cy.get(':nth-child(1) > .sc-9836ea38-3').click()
    cy.wait(500)
    cy.contains('Back to blog overview')
    cy.url().should('be.equal', 'https://www.pawshake.com.sg/blog/5-creative-and-budget-friendly-diy-dog-toys')
    cy.contains('How to make your own DIY dog toys')
                                               
  })



  it("is redirected to the King Charles Cavalier | Dog Breed Information page", () => {
    cy.get(':nth-child(2) > .sc-9836ea38-3').click()
    cy.wait(500)
    cy.contains('Back to blog overview')
    cy.url().should('be.equal', 'https://www.pawshake.com.sg/blog/king-charles-cavalier-dog-breed-information')
    cy.contains('King Charles Cavalier Spaniel: Breed Spotlight')
                                               
  })



  it("is redirected to the Dalmatian | Dog Breed Information page", () => {
    cy.get(':nth-child(3) > .sc-9836ea38-3').click()
    cy.wait(500)
    cy.contains('Back to blog overview')
    cy.url().should('be.equal', 'https://www.pawshake.com.sg/blog/dalmatian-dog-breed-information')
    cy.contains('Dalmatian: Breed Spotlight')

  });
});

