describe('Login', () => {
  beforeEach(() => {
    cy.visit('/practice-test-login/')
  })
  it('Positive LogIn test', () => {
    const user = Cypress.env('user_name')
    const password = Cypress.env('user_password')

    cy.login(user,password)

    cy.url()
      .should('be.equal', `${Cypress.config('baseUrl')}/logged-in-successfully/`)
    
    cy.get('#loop-container')
      .should('contain', 'Congratulations student. You successfully logged in!')

    cy.get('.wp-block-button__link')
      .should('contain', 'Log out')
  })

  it('Negative username test', () => {
    const user = 'incorrectUser'
    const password = Cypress.env('user_password')

    cy.login(user,password)

    cy.get('#error')
      .should('contain', 'Your username is invalid!')
  })

  it('Negative password test', () => {
    const user = Cypress.env('user_name')
    const password = 'incorrectPassword'

    cy.login(user,password)

    cy.get('#error')
      .should('contain', 'Your password is invalid!')
  })
})