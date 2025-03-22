describe('hello from svelte', () => {
    it('hello from svelte - home', () => {
        cy.visit('/')

        cy.get('a').first().should('contain.text', 'Home')
        cy.get('a').last().should('contain.text', 'Another page')

        cy.contains('h1', 'Hello from Svelte!👋')
    })

    it('hello from svelte - click on another page link', () => {
        cy.visit('/')

        cy.get('a').eq(1).click()
        cy.url().should('eq', Cypress.config().baseUrl + '/another-page')

        cy.get('a').first().should('contain.text', 'Home')
        cy.get('a').last().should('contain.text', 'Another page')

        cy.get('h1').should('not.contain.text', 'Hello from Svelte!👋')
        cy.contains('h1', 'Another page')
    });
})
