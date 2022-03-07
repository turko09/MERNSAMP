const mongoose = require('mongoose');
const { createProduct } = require('../controllers/product.controller');

const ProductController = require("../controllers/product.controller");

module.exports =(app)=>{
    app.get("/api/product", ProductController.findAllProducts);
    app.get("/api/healthCheck", ProductController.healthCheck);
    app.post("/api/product", ProductController.createProduct);
    app.get("/api/product/:id", ProductController.findOneProduct);
    app.put("/api/product/edit/:id", ProductController.updateOneProduct);
    app.delete("/api/product/delete/:id", ProductController.deleteOneProduct);
}