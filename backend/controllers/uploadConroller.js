import express from 'express';
import multer from 'multer';


const storage = multer.diskStorage({
    destination: (req, file, cb)=> {
        cb(null, "public/images")
    },
    filename: (req, file, cb) => {
        cb(null, req.body.filename)
    }
})

export const upload = multer({
    storage
})


export const uploadImage = async (req, res) => {
    try{
        return res.status(201).json({msg:"successfully uploaded file"})

    }catch(error){
        console.log(error.message)
    }
}