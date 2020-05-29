class CustomerController {

    constructor(customerService) {
        this.customerService = customerService;
    }
    
    createCustomer = async (req,res) => {
        const newCustomer = await this.customerService.createNewCustomer(req.body);
        res.status(201).send({data: newCustomer});
    }

}

module.exports = CustomerController;