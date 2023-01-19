/// <reference types = "Cypress"/>


describe('negative search test', () => {

  it('search by location', () => {

    cy.request('/?location=Earth').then((response) => {

      let result = response.body.content
      expect(response.status).equal(204)
      expect(response.statusText).contain("No Content")
    })

  })


  it('search by company', () => {

    cy.request('/?company=???').then((response) => {

      let result = response.body.content
      expect(response.status).equal(204)
      expect(response.statusText).contain("No Content")
    })

  })

  it('search by ID', () => {

    cy.request('/?id=nul').then((response) => {

      let result = response.body.content
      expect(response.status).equal(204)
      expect(response.statusText).contain("No Content")
    })

  })

  it('search by date', () => {

    cy.request('/?date=0000-01-03').then((response) => {

      let result = response.body.content
      expect(response.status).equal(204)
      expect(response.statusText).contain("No Content")
    })

  })
})