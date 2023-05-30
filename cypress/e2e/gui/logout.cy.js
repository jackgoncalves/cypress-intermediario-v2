/// <reference types="cypress" />

describe('Logout', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.loginValido()
        
        
    })

    it('Efetuando Logout com sucesso', ()=>{
        cy.logout()

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)

    })


})