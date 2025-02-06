describe('hello from svelte', () => {
    it('check h1 contains Hello from Svelte', () => {
        cy.visit('/')
        cy.contains('h1', 'Hello from Svelte!👋')
    })
})
