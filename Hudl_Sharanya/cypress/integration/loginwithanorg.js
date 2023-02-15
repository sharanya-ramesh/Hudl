/// <reference types="Cypress" />
import * as Credentials from "../fixtures/login";

describe('This Plan contains Negative Tests',function()
{
it('Validate the Login with an organization option:when provided with wrong credentials,a respective message should be shown',function(){ 
    cy.visit('https://www.hudl.com/login')
    cy.get('.uni-link--wrapper > .uni-button').click()
    cy.get('#uniId_1').type('reachsharanyaramesh@gmahhil.com')
    cy.get('.uni-bg--level0 > .uni-button').click()
    cy.get('#email').type('test13234@gmahhil.com')
    cy.get('#password').type(Credentials.Password)
    cy.get('#logIn').click()
    cy.get('.styles_errorDisplayInnerContainer_3R2ni-zSvPIKWfKXiviJhH').should('have.text', "IconHelpWe didn't recognize that email and/or password.Need help?")
})
})
