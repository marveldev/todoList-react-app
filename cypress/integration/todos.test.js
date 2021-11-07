describe('Todos', () => {
  beforeEach(() => {
    cy.visit('/') // before each test in this block visit this url.
  })

  const todoText = 'Dancing'

  //user should be able to add task
  it('user should be able to add a todo and clear input', () => {
    cy.findByRole('textbox').type(todoText)
    cy.findByRole('button', {  name: /submit/i}).click()
    cy.contains(todoText).should('exist')
    cy.findByRole('textbox').should('contain', '')
  })

  //user should be able to toggle the state of a task
  it('user should be able to toggle the state of a todo', () => {
    cy.get('.todo-text').first().then(($todo) => {
      if ($todo.hasClass('completed')) {
        cy.get('.todo').find('.complete-button').first().click()
        cy.get('.todo-text').first().should('not.have.class', 'completed')
      } else {
        cy.get('.todo').find('.complete-button').first().click()
        cy.get('.todo-text').first().should('have.class', 'completed')
      }
    })
  })

  //user should be able to edit a task
  it('user should be able to edit a todo', () => {
    cy.get('.todo').find('.edit-button').first().click()
    cy.contains('Enter new Todo').should('be.visible')
    cy.get('.new-todo-input').clear().type('Singing')
    cy.get('.edit-modal').find('.form').submit()
    cy.get('.todo-text').first().should('contain', 'Singing')
  })

  //user should be able to select between todo options
  it('user should be able to select between todo options', () => {
    cy.get('select').select('All').should('have.value', 'all')
    cy.get('select').select('Completed').should('have.value', 'completed')
    cy.get('select').select('Uncompleted').should('have.value', 'uncompleted')
  })

  //user should be able to delete a task
  it('user should be able to delete a todo', () => {
    cy.get('.todo').find('.trash-button').first().click()
    cy.findByText(/are you sure, you want to delete\?/i).should('be.visible')
    cy.findByRole('button', {  name: /confirm/i}).click()
  })
})
