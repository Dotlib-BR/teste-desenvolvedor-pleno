const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../../src/app');
const conn = require('../../../src/config/mongo');

describe('POST /todo/store', () => {
    it('OK, creating a new todo works', done => {
        request(app).post('/todo/store')
            .send({ name: 'Teste' })
            .then(res => {
                const body = res.body;
                expect(body).to.contain.property('_id');
                expect(body).to.contain.property('name');
                done();
            })
            .catch(err => done(err))
    })

    it('Ok, getting todo has no todo', done => {
        request(app).get('/todo/index')
            .then(res => {
                const body = res.body;
                expect(body.length)
                    .to.equal(0)
                done();
            })
            .catch(err => done(err))
    })
})