beforeEach(() => {
  cy.visit('http://localhost:3000/')
  cy.intercept('GET', 'https://www.fishwatch.gov/api/species',  )
})

describe('template spec', () => {
  it('passes', () => {
  })
})