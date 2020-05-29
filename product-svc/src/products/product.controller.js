class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    
    fetchAllProducts =  async (req, res) => {
        const products = await this.productService.fetchAllProducts();
        res.status(200).send(products);
    }
}

module.exports = ProductController;