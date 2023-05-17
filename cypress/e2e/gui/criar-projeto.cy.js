/// <reference types="cypress" />
import { faker } from '@faker-js/faker'


describe('Criar novo projeto', () => {
    beforeEach(() => {   
        cy.loginValido()
    })

    it('Criar projeto', () => {
        const projeto = {
            nome: `projeto-${faker.datatype.uuid()}`,
            descricao: faker.random.words(5)
        }
     
        cy.criarProjeto(projeto)

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${projeto.nome}`)
        cy.contains(projeto.nome).should('be.visible')
        cy.contains(projeto.descricao).should('be.visible')
    })
})