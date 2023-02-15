import * as Credentials from "../fixtures/login";

describe('This Plan contains Happy-Path Tests',function()

{
it('Login to the appliacation using an already created and verified user credentials',function() {
    cy.visit('https://www.hudl.com/login')
    cy.get('#email').type(Credentials.Email)
    cy.get('#password').type(Credentials.Password)
    cy.get('#logIn').click()
    cy.url().should('eq', 'https://www.hudl.com/home')
})
it('Login to the appliacation using an already created and verified user credentials  and click on Remember Me option and verify if you see the prompt to save the password',function(){ 
    cy.visit('https://www.hudl.com/login')
    cy.get('#email').type(Credentials.Email)
    cy.get('#password').type(Credentials.Password)
    cy.get('#app > section > div.styles_pageContainer_31NnIgZuiQzDKnKlPaGLsi > div > form > div > div.styles_footerContainer_bNIg7bOb-wpsYiG0CCy0M > div > label > svg').click()
    cy.get('#logIn').click()
    cy.url().should('eq', 'https://www.hudl.com/home')

})
})
