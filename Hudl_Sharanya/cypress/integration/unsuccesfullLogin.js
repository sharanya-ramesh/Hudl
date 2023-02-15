
/// <reference types="Cypress" />
import * as Credentials from "../fixtures/login";

describe('This Plan contains Happy-Path Tests',function()
{
it('Login to the appliacation using an already created and verified user credentials and pass a wrong email address and validate if correct message is displayed',function(){ 
    cy.visit('https://www.hudl.com/login')
    cy.get('#email').type(Credentials.WrongEmail)
    cy.get('#password').type(Credentials.Password)
    cy.get('#app > section > div.styles_pageContainer_31NnIgZuiQzDKnKlPaGLsi > div > form > div > div.styles_footerContainer_bNIg7bOb-wpsYiG0CCy0M > div > label > svg').click()
    cy.get('#logIn').click()
    cy.get('.uni-text').should('have.text', "We didn't recognize that email and/or password.Need help?")
    
})
})
{
    it('Login to the appliacation using an already created and verified user credentials and pass a wrong password and validate if correct message is diplayed',function(){ 
        cy.visit('https://www.hudl.com/login')
        cy.get('#email').type(Credentials.Email)
        cy.get('#password').type(Credentials.WrongPassword)
        cy.get('#app > section > div.styles_pageContainer_31NnIgZuiQzDKnKlPaGLsi > div > form > div > div.styles_footerContainer_bNIg7bOb-wpsYiG0CCy0M > div > label > svg').click()
        cy.get('#logIn').click()
        cy.get('.uni-text').should('have.text', "We didn't recognize that email and/or password.Need help?")
        
    })
}
    
