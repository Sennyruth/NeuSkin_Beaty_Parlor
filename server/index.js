import express from 'express'
import {config} from 'dotenv';
import usersRouter from './routes/user.routes.js';
import appointRouter from './routes/appointments.routes.js'
import cookieParser from 'cookie-parser'; 
import cors from 'cors';

config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use('/api/users', usersRouter);
app.use('/api/users',appointRouter);


app.listen(3000,(req,res)=>{
    console.log("server is running at port 3000...")
})