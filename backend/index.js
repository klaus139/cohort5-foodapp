import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
dotenv.config()
import connectDB from "./config/db.js";


//database
connectDB();
  

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use('/images', express.static('public/images'))

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`server is live`))
