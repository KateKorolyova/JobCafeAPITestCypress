/// <reference types = "Cypress"/>


describe('get jobs test', () => {

  it('get all jobs', () => {

    cy.request('/').then((response) => {

      console.log(response),
        expect(response.status).equal(200),
        expect(response.statusText).equal("OK")

    })
  })

  it('verify jobs results list', () => {

    cy.request('/').then((response) => {
      console.log(response.body.content),
        expect(response.body.content).not.empty

    })
  })

  it('verify jobs listing has all details', () => {

    cy.request('/').then((response) => {

      var result = response.body.content[1]

      console.log(result),
        expect(result).have.property("id"),
        expect(result.id).not.null
      expect(result.id).equal('63b44d1374f47208c4447130')

      expect(result).have.property("position"),
        expect(result.position).equal("Web Project Manager")

      expect(result).have.property("location"),
        expect(result.location).equal('Tel Aviv-Yafo, Israel')

      expect(result).have.property("link"),
        expect(result.link).contain('http')
    })
  })

  it('search by location', () => {

    cy.request('/?location=Toronto').then((response) => {

      let resultList = response.body.content
      console.log(resultList),
        expect(response.status).equal(200)

      for (let i = 0; i < resultList.length; i++) {

        expect(resultList[i].location).equal('Toronto, ON, Canada')
      }

    })
  })


  it('search by company', () => {

    cy.request('/?company=BioCatch').then((response) => {

      let resultList = response.body.content
      console.log(resultList),
        expect(response.status).equal(200)

      for (let i = 0; i < resultList.length; i++) {

        expect(resultList[i].company).equal('BioCatch')
      }

    })
  })
  it('pagination test using search by company', () => {

    cy.request('/?company=BioCatch').then((response) => {

      let resultList = response.body.content
      console.log(resultList),
        expect(resultList.length).equal(10)
    })

  })

  
  it('search by date', () => {

    cy.request('/?date=2023-01-03').then((response) => {

      let resultList = response.body.content
      console.log(resultList),
        expect(response.status).equal(200)

      for (let i = 0; i < resultList.length; i++) {

        expect(resultList[i].date).contain('2023-01-03')
        expect(resultList.length).equal(10)
      }

    })
  })

  it('search by ID', () => {

    cy.request('/?id=63b44c0574f47208c44470fc').then((response) => {

      var result = response.body.content[0]

      console.log(result)
      expect(result.id).equal('63b44c0574f47208c44470fc')
    
  })
  })

  it('search by description', () => {

    cy.request('/?description').then((response) => {

      let resultList = response.body.content
      console.log(resultList),
        expect(response.status).equal(200)

      for (let i = 0; i < resultList.length; i++) {

        expect(resultList[i].description).not.empty
      }

    })
  })

})
