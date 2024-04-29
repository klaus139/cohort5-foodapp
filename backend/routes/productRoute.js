import express from 'express'
import { verifyTokenAdmin, verifyToken } from '../middleware/verifyToken.js'
import { createProduct, getAllProduct, getProduct } from '../controllers/productController.js'
import { upload, uploadImage } from '../controllers/uploadConroller.js';

const router = express.Router()

router.post('/create-product', verifyTokenAdmin, createProduct );
router.get('/all-product', verifyToken, getAllProduct);
router.get('/product/:id', verifyToken, getProduct);
router.post('/image', verifyTokenAdmin, upload.single('image'), uploadImage);

// ('/image', verifyToken, upload.single('image'), 
export default router;