const Product = require("../models/product.model");

//Route Calls

module.exports ={
    healthCheck:(req,res)=>{
        res.send("health Check is set Up");
    },
        
    findAllProducts:(req, res)=> {
        Product.find({})//find all within the collection
        .then((allProducts)=>{
            console.log(allProducts);
            res.json({theProducts: allProducts})
        })
        .catch((err)=>{
            console.log(err);
        })
        },

    findOneProduct:(req, res)=> {
        Product.findOne({_id:req.params.id})//find all within the collection
        .then((oneProduct)=>{
            console.log(oneProduct);
            res.json(oneProduct);
        })
        .catch((err)=>{
            res.status(400).json({err});
            console.log(err);
        });
    },

    createProduct:(req, res)=> {
        Product.create(req.body)//find all within the collection
        .then((newProduct)=>{
            console.log(newProduct);
            res.json(newProduct);
        })
        .catch((err)=>{
            res.status(400).json({err});
            console.log(err);
        });
    },

    deleteOneProduct: (req, res)=> {
        Product.deleteOne({_id:req.params.id})//find all within the collection
        .then((deletedProduct)=>{
            console.log(deletedProduct);
            res.json(deletedProduct);
        })
        .catch((err)=>{
            res.status(400).json({err});
            console.log(err);
        });
    },
    updateOneProduct:(req, res)=> {
        Product.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true, runValidators: true}
        )
        .then((updatedProduct)=>res.json(updatedProduct))
        .catch((err)=>{
            res.status(400).json({err});
            console.log(err);
        });
    }
}