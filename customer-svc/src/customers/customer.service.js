const Customer = require('./customer.model');

class CustomerService {

    createNewCustomer = async (customer) => {
        try{
            const newCustomer = new Customer(customer);
            const cust = await newCustomer.save();
            return cust ;
        }catch(e) {
            console.error('---Error while saving the customer ---',e);
        }
    }
}

module.exports = CustomerService;