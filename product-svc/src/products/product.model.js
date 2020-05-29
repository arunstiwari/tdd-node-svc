const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    description : String
})

const Products = mongoose.model('products', ProductSchema);

module.exports = Products;