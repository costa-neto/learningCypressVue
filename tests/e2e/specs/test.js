// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Your Vue.js App')
  }),
  it('Visits the about page', () => {
    cy.visit('/')
    cy.contains('Login').click()
    cy.contains('h1','Essa é minha página de Login!')
  }),
  it('Faz um login inválido', () => {
    cy.get('input.input-email').type('neto@costa.com')
    cy.get('input.input-password').type('minhaSenha')
    cy.get('button').click()
    cy.contains('h1','inválido')
  }),
  it('Faz um login válido', () => {
    cy.get('input.input-email').clear()
    cy.get('input.input-password').clear()
    cy.get('input.input-email').type('neto@email.com')
    cy.get('input.input-password').type('minhaSenha')
    cy.get('button').click()
    cy.contains('h1','logado')
  })

})
