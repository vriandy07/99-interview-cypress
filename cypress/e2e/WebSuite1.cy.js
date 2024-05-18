/// <reference types="cypress" />

/* 
  Welcome QA candidate! Good luck in writing your test script! 
  You may structure or name your file however you see fit as this is just a template
*/

describe("Check all the following H2 titles", () => {
  beforeEach('Access pawshake homepage ', () => {
    /* Access to pawshake page */
    cy.viewport(1280, 800)
    cy.visit('https://www.pawshake.com.sg/')
        
  })

  afterEach(() => {
    /* Clear cache and local storage */
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    //cy.end
  })


  it('Verify Who treats your pet like family H2 title exist', () => {
    cy.get('[class="sc-5079037a-24 jTwgUh"] h2').should('have.text', "Who treats your pet like family")          
  
  })



  it("Verify Here's how Pawshake works H2 title exist", () => {
    cy.get('[class="sc-5079037a-2 iIZzcj"] h2').should("contain", "Here's how Pawshake works.")                                           
  
  })



  it('Verify Happiness guaranteed H2 title exist', () => {
    cy.get('[class="sc-5079037a-2 iIZzcj"] h2').should("contain", "Happiness guaranteed")
  
  })



  it('Verify Services on Pawshake H2 title exist', () => {
    cy.get('[class="sc-142d41c1-1 iSotEn"] h2:contains("Services on Pawshake")').should("have.text", "Services on Pawshake")
  
  })



  it('Verify Why choose Pawshake? H2 title exist', () => {
    cy.get('[class="sc-142d41c1-1 iSotEn"] h2:contains("Why choose Pawshake?")').should("have.text", "Why choose Pawshake?")
 
  })



  it('Verify Always stay connected H2 title exist', () => {
    cy.get('[class="flex items-center justify-center flex-col"] h2').should("have.text", "Always stay connected")
  
  })



  it('Verify Blog H2 title exist', () => {
    cy.get('[class="sc-5079037a-2 iIZzcj"] h2:contains("Blog")').should("have.text", "Blog")
  
  })



  it('Verify Frequently asked questions H2 title exist', () => {
    cy.get('[class="sc-5079037a-2 iIZzcj"] h2:contains("Frequently asked questions")').should("have.text", "Frequently asked questions")
  
  })



  it('Verify Learn More H2 title exist', () => {
    cy.get('[class="sc-85badc4c-2 cXVQVF"] h2:contains("Learn More")').should("have.text", "Learn More")
  
  })



  it('Verify Popular Cities H2 title exist', () => {
    cy.get('[class="sc-85badc4c-2 cXVQVF"] h2:contains("Popular Cities")').should("have.text", "Popular Cities")  
  
  })



  it('Verify About Pawshake H2 title exist', () => {
    cy.get('[class="sc-85badc4c-2 cXVQVF"] h2:contains("About Pawshake")').should("have.text", "About Pawshake")
  
  })



  it('Verify Payment Methods H2 title exist', () => {
    cy.get('[class="sc-85badc4c-2 cXVQVF"] h2:contains("Payment Methods")').should("have.text", "Payment Methods")
  
  })



  it('Verify Find us on H2 title exist', () => {
    cy.get('[class="sc-85badc4c-2 cXVQVF"] h2:contains("Find us on")').should("have.text", "Find us on")
  
  });
});






