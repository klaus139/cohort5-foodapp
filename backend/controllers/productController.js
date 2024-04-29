import Product from "../models/productModel.js";

//get all products
export const getAllProduct = async(req, res) => {
    try{
        const products = await Product.find(req.query)
        return res.status(200).json(products)

    }catch(error){
        console.log(error)
    }
}

//get one product
export const getProduct = async(req, res) => {
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
}

export const createProduct = async (req, res) => {
  try {
    
    const { title, desc, price, img, review, category } = req.body;

    if (!title || !desc || !price || !img || !review || !category) {
      throw new Error(`fill in the neccessary product information`);
    }
    const newProduct = await Product.create({
        title, desc, price, review, img, category
    });
    return res.status(201).json({
      message: "product created successfully",
      newProduct,
    });
  } catch (error) {
    console.log(error);
  }
};


