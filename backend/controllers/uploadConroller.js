import express from 'express';
import multer from 'multer';
import { verifyToken } from '../middleware/verifyToken';

const uploadController = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb)=> {
        cb(null, "public/images")
    },
    filename: (req, file, cb) => {
        cb(null, req.body.filename)
    }
})

const upload = multer({
    storage
})


uploadController.post('/image', verifyToken, upload.single('image'), (req, res) => {
    try{
        return res.status(201).json({msg:"successfully uploaded file"})

    }catch(error){
        console.log(error.message)
    }
})