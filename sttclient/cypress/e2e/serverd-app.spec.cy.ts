describe(
  'app spec',
  () => {
    it(
      'navigate to the served home page',
      () => {
        cy.visit('http://localhost:4200')
      }
    )

    it(
      'should display the h1 title containing the text "sttclient"',
      () => {
        cy.get('h1').should('contain', 'sttclient')
      }
    )
  }
)
