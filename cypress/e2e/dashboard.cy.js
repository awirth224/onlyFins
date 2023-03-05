beforeEach(() => {
  cy.visit('http://localhost:3000/')
  cy.intercept('GET', 'https://www.fishwatch.gov/api/species', {fixture: "example.json"})
})

describe('dashboard of OnlyFins', () => {
  it('should have a title, display all fish data and have a button to sort fish', () => {
    cy.get('header[class="App-header"]').contains('OnlyFins')
    cy.get('button[class="sort-btn"]')
    cy.get('div[class="card-container"]').within(() => {
      cy.get('div[class="card"]')
      cy.get('img[class="dashboard-img"]')
      cy.get('h2').contains('Crimson Jobfish')
      cy.get('h3').contains('Calories: 100')
      cy.get('h3').contains('Protein: 20.5')
    })
  })

  it('should have a sort button that when click puts the fish in order from lowest calories to highest', () => {
    cy.get('button[class="sort-btn"]').click()
  })

  it('should take you to a different page with the selected fish\'s nutritional info', () => {
    cy.get('div[class="card-container"]').click()
    cy.visit('http://localhost:3000/White%20Hake')
    cy.get('div[class="single-fish-container"]')
    cy.get('img[src="https://origin-east-01-drupal-fishwatch.woc.noaa.gov/sites/default/files/white%20hake_Calvin%20Alexander_1.jpg"]')
    cy.get('h3').contains('Serving: 100 g (raw')
    cy.get('h3').contains('Calories: 90')
    cy.get('h3').contains('Carbohydrates: N/A')
  })

  it('should take you to an error page with a home button when an incorrect url is input', () => {
    cy.visit('http://localhost:3000/White%20Ha')
    cy.get('h2').contains('Oops... Something Went Wrong!')
    cy.get('button[class="home-btn"]')
  })
})