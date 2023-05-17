/// <reference types="cypress" />

describe('Login', () => {
  it('Efetuando login com sucesso', () => {
    const nome = Cypress.env('user_name')
    const senha = Cypress.env('user_password')
    const opcao = { cacheSession: false}

    cy.loginValido(nome, senha, opcao)

    cy.get('.qa-user-avatar').should('be.visible')

  })

})