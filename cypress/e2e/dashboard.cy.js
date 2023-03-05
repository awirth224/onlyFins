beforeEach(() => {
  cy.visit('http://localhost:3000/')
  cy.intercept('GET', 'https://www.fishwatch.gov/api/species')
})

describe('dashboard of onlyFins', () => {
  it('should have a title, display all fish data and have a button to sort fish', () => {
    cy.get('header[class="App-header"]')
  })
})