const Product = require('./product.model');

class ProductRepository {
    
  fetchAllProducts = async () => {
      try {
         const products = await Product.find();
         return products;
      } catch (e) {
        console.error('---Error----',e);
      }
      
  }
}

module.exports = ProductRepository;