/// <reference types="cypress" />

describe('Testando agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve incluir um contato', () => {
        cy.get('[type="text"]').type('Lucas Marques')
        cy.get('[type="email"]').type('lucasandersonmarques@gmail.com')
        cy.get('[type="tel"]').type('11912345678')
        cy.get('.adicionar').click()

        cy.on('window:alert',(conteudo) => {
            expect(conteudo).contain('Contato Adicionado')
        })

        cy.screenshot('Contato Adicionado')

        //deu bãum
    })

    it('Deve remover um contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()

        cy.on('window:alert',(conteudo) => {
            expect(conteudo).contain('Contato Removido')
        })

        cy.screenshot('Contato Excluido')

        // deu bãum
    })

    it('Deve editar um contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()

        cy.get('[type="text"]').clear().type('Nome Editado')
        cy.get('[type="email"]').clear().type('EmailEditado@yopmail.com')
        cy.get('[type="tel"]').clear().type('87654321911')

        cy.get('.alterar').click()

        cy.screenshot('Contato Editado')

        // deu bãum
    })
})