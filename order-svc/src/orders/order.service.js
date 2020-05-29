const axios = require('axios');

class OrderService {
  orders = [
    {
      id: "121",
      customerId: "customer-1",
      items: [{ productId: "1", quantity: 100, price: 10.5 }],
    },
  ];
  fetchAllOrders = () => {
    return this.orders;
  };

  createNewOrder = async (newOrder) => {
      try {
    const cust = await axios.get(
      `http://localhost:3000/customers/${newOrder.customerId}`
    );
    console.log("---cust ----", cust);  
      } catch (e) {
        console.error('---Error while fetching the customer information----',e);
      }
    
      return {
          orderId: '221',
          message: 'Order Created Successfully'
      }
  }
}

module.exports = OrderService;