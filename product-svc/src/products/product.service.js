
class ProductService {

    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    
    //return all products by fetching the data from database
  fetchAllProducts =   () => {
    return  this.productRepository.fetchAllProducts();
  }
}

module.exports = ProductService;