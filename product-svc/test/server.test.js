const supertest = require('supertest');
const app = require('../src/app');
const data = [
  { id: "1", name: "Prod1" },
  { id: "2", name: "Prod2" },
  { id: "3", name: "Prod3" },
];

jest.mock("../src/products/product.repository",() => {
    return jest.fn().mockImplementation(() => {
        return {fetchAllProducts:  () => {
            // console.log('----going to return data ----');
            return {data: [
              { id: "1", name: "Prod1" },
              { id: "2", name: "Prod2" },
              { id: "3", name: "Prod3" },
            ]};
        }}
    })
});

const request = supertest(app);


describe('Testing the Endpoint /products', () => {

    it('should have an endpoint /products and support GET operation', async () => {        
        const response = await request.get('/products');
        expect(response.status).toBe(200);
        expect(response.body.data).toEqual(data);
    });
});

