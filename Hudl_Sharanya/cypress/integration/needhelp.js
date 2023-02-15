/// <reference types="Cypress" />

describe('This Plan contains Happy-Path Tests',function()
{
it('Validate the Need Help option on the Login Screen by providing incoprrect email address',function(){ 
    cy.visit('https://www.hudl.com/login')
    cy.get('.styles_footerContainer_bNIg7bOb-wpsYiG0CCy0M > .uni-link').click()
    cy.wait(500)
    cy.get('.styles_loginInput_3jFnWKYDKHd3thsrh95xCu').type('reachsharanyaramesh@gmahhil.com')
    cy.get('.uni-button').click()
    cy.get('.styles_errorDisplayInnerContainer_3R2ni-zSvPIKWfKXiviJhH > .uni-text').should('have.text', "That email address doesn't exist in Hudl. Check with your coach to ensure they have the right email address for you.")
        
})
})