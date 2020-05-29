class OrderController {

    constructor(orderService) {
        this.orderService = orderService;
    }
      
    fetchAllOrders = (req,res) => {
        const orders = this.orderService.fetchAllOrders();
        res.status(200).send({data: orders})
    }

    createNewOrder = async (req,res) => {
        console.log('--request body----',req.body);
        const order = await this.orderService.createNewOrder(req.body);
        console.log('---response order --',order);
        res.status(201).send({data: order});
    }
}

module.exports = OrderController;