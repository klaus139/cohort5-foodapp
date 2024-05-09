import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
import morgan from 'morgan';
dotenv.config()
import connectDB from "./config/db.js";
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js';
import { ErrorMiddleWare } from "./middleware/Error.js";


//database
connectDB();
  

const app = express();

app.get("/health", async (req, res) => {
    res.send({ message: "health OK!" });
  });
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use('/images', express.static('public/images'))
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);

const port = process.env.PORT || 4000;

app.use(ErrorMiddleWare) ;

app.listen(port, () => console.log(`server is live`))
