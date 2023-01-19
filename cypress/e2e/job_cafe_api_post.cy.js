/// <reference types = "Cypress"/>

import { data } from '../fixtures/params.json'

describe('get jobs test', () => {
    let positionBody = {
        "position": "QA",
        "company": "legionqa_kate999",
        "location": "Toronto",
        "seniority": "junior",
        "link": "www.linkedin.com",
        "description": "some text",
        "time": "two hours ago",
        "salary": "100k",
        "date": "2020-05-05T12:00:00"
    }
    let adminKey = 'adminadmin'
    let id;
    it('create job listing test', () => {
        cy.request({
            method: 'POST',
            url: '/create',
            body: positionBody,
            qs: { key: adminKey }
        }).then((response) => {
            console.log(response.body)
            id = response.body.id
            expect(response.status).equal(201)
            expect(response.body.company).equal('legionqa_kate999')
        })
    })

    it('create job listing test from fixtures', () => {

        data.forEach(element => {

            cy.request({
                method: 'POST',
                url: '/create',
                body: element,
                qs: { key: adminKey }
            }).then((response) => {
                console.log(response.body)
                id = response.body.id
                expect(response.status).equal(201)
                expect(response.body.company).equal(element.company)
                cy.deletePositionbyId(id)
            })
        })
    })


    afterEach(() => {
        cy.deletePositionbyId(id)
    })
}); 