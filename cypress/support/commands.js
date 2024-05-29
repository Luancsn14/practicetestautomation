Cypress.Commands.add('login', (user, password) => { 
    cy.get('#username')
      .type(user)

    cy.get('#password')
      .type(password, { log:false })

    cy.get('#submit')
      .click()
 })
