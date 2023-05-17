Cypress.Commands.add('loginValido', (
    nome = Cypress.env('user_name'),
    senha = Cypress.env('user_password'),
    { cacheSession = true } = {}
) => {
    const loginValido = (() => {
        cy.visit('/users/sign_in')

        cy.get('#user_login').type(nome)
        cy.get('#user_password').type(senha, { log: false })
        cy.get('[data-qa-selector="sign_in_button"]').click()

    })

    const validate = (()=>{
        cy.visit('/')
        cy.location('pathname', { timeout: 1000})
            .should('not.equal', '/users/sign_in')
    })

    
    const opcao = {
        cacheAcrossSpecs: true, // essa propriedade permite que possa utilizar o cache em outros testes, vai compartilhar o cache com outras etapas
        validate,
    }

    if (cacheSession) {
        cy.session(nome, loginValido, opcao)
    } else {
        loginValido()
    }

})

Cypress.Commands.add('logout', () => {
    cy.get('.qa-user-avatar').click()
    cy.contains('Sign out').click()


})


Cypress.Commands.add('criarProjeto', (projeto) => {
    cy.visit('/projects/new')   

    cy.get('#project_name').type(projeto.nome)
    cy.get('#project_description').type(projeto.descricao)
    cy.get('#project_initialize_with_readme').check()
    cy.contains('Create project').click()



})