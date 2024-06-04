import { faker } from '@faker-js/faker';

describe('Exceptions', () => {
    beforeEach(() => {
        cy.visit('/practice-test-exceptions/')
    })

    it('Add new item to the list', () => {
      const randomText = faker.word.words() 
  
      cy.get('#add_btn')
        .should('be.visible')

      cy.get('#add_btn')
        .click()

      cy.wait(5000)    

      cy.get('#row2 .input-field')
        .should('be.visible')

      cy.get('#row2 .input-field')
        .type(randomText)

      cy.get('#row2 #save_btn')
        .click()

      cy.get('#row2 .input-field')
        .should('have.value', randomText)

      cy.get('#row2 #edit_btn')
        .should('be.visible')

      cy.get('#confirmation')
        .should('have.text', 'Row 2 was saved')
    })

    it('Edit item in the list', () => {
      const randomText = faker.word.words()

      cy.get('#row1 #edit_btn')
        .click()

      cy.get('#row1 .input-field')
        .clear()
        .type(randomText)

      cy.get('#row1 #save_btn')
        .click()

      cy.get('#row1 .input-field')
        .should('have.value', randomText)

      cy.get('#row1 #edit_btn')
        .should('be.visible')

      cy.get('#confirmation')
        .should('have.text', 'Row 1 was saved')      
    })
})