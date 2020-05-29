const supertest = require('supertest');
const app = require('../src/app');
const Customer = require('../src/customers/customer.model');

jest.mock("../src/customers/customer.model", () => {
    return jest.fn().mockImplementation(() => {
        return {save: ()=> {
            return {
                id: 'customer-1'
            }
        }}
    })
});

const request = supertest(app);



describe('Testing the server endpoint', () => {
    
    it('customer service has endpoint /customers with POST operation ', async () => {
        const res = await request.post('/customers').send({

        }).set('Accept', 'application/json');

        expect(res.status).toBe(201);
        expect(res.body.data).toEqual({id: 'customer-1'})
    });
});