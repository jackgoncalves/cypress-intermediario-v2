/// <reference types="cypress" />

describe('Logout', () => {
    beforeEach(() => {
        cy.loginValido()
        cy.visit('/')
    })

    it('Efetuando Logout com sucesso', ()=>{
        cy.logout()

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
    })
})
