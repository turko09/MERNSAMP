const mongoose = require('mongoose');

//Model and Schema
const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required:[true, "Title is required"],
    },
    price:{
        type: String,
        required:[true, "Price is required"],
    },
    description:{
        type: String,
        required:[true, "Description is required"]
    }
}, {timestamps:true})
// timestamp automatically creates the created at and updatedat for each document
//Model is a combination of the:
//1. The collection which will be a singular, capitalized version of the Collection name that's held in the db
//2. The schema

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;