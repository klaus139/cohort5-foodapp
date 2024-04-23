import express from "express";
import Product from "../models/productModel";
import { verifyToken, verifyTokenAdmin, VerifyTokenAdmin } from "../middleware/verifyToken";

const productController = express.Router();

//get all products
productController.get('/', verifyToken, async(req, res) => {
    try{
        const products = await Product.find(req.query)
        return res.status(200).json(products)

    }catch(error){
        console.log(error)
    }
})

//get one product
productController.get('/find/:id', verifyToken, async(req, res) => {
    try{
        const productId = req.params.id
        const product = await Product.findById(productId);
        if(!product){
            return res.status(500).json({msg:'product not found'})
        }
        return res.status(200).json(product)

    }catch(error){
        console.log(error)
    }
})

productController.post('/', verifyTokenAdmin, async(req, res) => {
    try{
        const newProduct = await Product.create({...req.body})
        return res.status(201).json(newProduct)

    }catch(error){
        console.log(error)
    }
})