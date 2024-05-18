/// <reference types="cypress" />

/* 
  Welcome QA candidate! Good luck in writing your test script! 
  You may structure or name your file however you see fit as this is just a template
*/

describe("Check the search function", () => {
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
    //cy.end;
  })


  it("Test Case 1", () => {
    //Write your automation script here for Test Case 1
  });

  it("Test Case 2", () => {
    //Optional
  });

  it("Test Case 3", () => {
    //Optional
  });
});


describe('Check the search function', () => {
  
    
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
    //cy.end;
  })

  
  
  

  it.only('Verify search: Doggy Day Care', () => {
    
    cy.get('button[role="combobox"]').should('contain', "Dog Boarding").click()
    //cy.get('div:contains("ltr")').should('contain', "Doggy Day Care").click()
    //cy.contains('data-radix-popper-content-wrapper dir').should('contain', "Doggy Day Care").click()

    //cy.get('[data-radix-popper-content-wrapper dir=ltr]').should('contain', "Doggy Day Care").invoke('show').trigger('mouseover').click()
    //cy.get('[rt-TextFieldRoot rt-r-size-2 rt-variant-surface border-body text ring-offset-background focus-within:ring-ring px bg z-0 flex w-full cursor-text items-center rounded border bg-clip-border shadow-none file:border-none file:bg-transparent file:text-sm file:font-medium placeholder:opacity-60 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 hover:border-gray-500 h-[3rem]').contains('have.text','Doggy Day Care').click()
    //cy.get('body[style="pointer-events: none;"]').should('contain', 'Doggy Day Care').trigger('mouseover').click({force: true})
    
  
    //cy.get('#dialogContent') 
    //[data-radix-popper-content-wrapper dir=ltr]')
    //cy.contains('Doggy Day Care').click()
    //cy.get('#__next > main > div.sc-5079037a-23.fzWUcQ > div > div.sc-61fb1730-2.dsRRuT > div.sc-66a2133c-0.bsZwsG > div > div > div:nth-child(1) > button > span > div > div > svg').contains('div','Doggy Day Care').click({force: true})

    //cy.get('#__next > main > div.sc-5079037a-23.fzWUcQ > div > div.sc-61fb1730-2.dsRRuT > div.sc-66a2133c-0.bsZwsG > div > div > div:nth-child(1) > button > span > div > div > svg').realHover('mouse').click({force: true})
    //cy.get('[class="flex items-center justify-center shrink-0 border border-green-200 text-green-500 bg-green-50 transition-transform duration-200 group-hover:scale-110 h-lg w-lg rounded-sm"]').should('contain', "Doggy Day Care").click()
    //cy.get('button > span > div:contains("Doggy Day Care")').click()
    //cy.get('body > noscript > div > div:contains("ltr")')
                     
  });
});