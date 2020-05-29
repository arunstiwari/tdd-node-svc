const supertest = require('supertest');
const app = require('../src/app');
const axios = require('axios');
jest.mock('axios');

const request = supertest(app);
describe('Order Service Test', () => {
    
    it('should return response code as 200 for endpoint /orders and GET operation', async () => {
        const res = await request.get('/orders');
        expect(res.status).toBe(200);
    });


    it("should return response code as 200 for endpoint /orders and json data as orders array and GET operation", async () => {
      const orders = [
          {id: '121', customerId: 'customer-1', items: [
              {productId: '1', quantity: 100, price: 10.5}
          ]}
      ]
      const res = await request.get("/orders");
      expect(res.status).toBe(200);
      expect(res.body.data).toEqual(orders);
    });

    it('should create an order and respond back with new orderId', async () => {
        const res = await request.post("/orders").send({
          customerId: "customer-1",
          items: [{ productId: "1", quantity: 100, price: 10.5 }],
        }).set('Accept', 'application/json');

        expect(res.status).toBe(201);
        expect(res.body.data).toEqual({orderId: '221', message: 'Order Created Successfully'})
    });
});