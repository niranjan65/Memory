import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import postRouter from './routes/posts.js'

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRouter);
const CONNECTION_URL = 'mongodb+srv://niranjansinghhh16:ZdjAXDCqtr5lIq9x@cluster0.g9tyz5d.mongodb.net/?retryWrites=true&w=majority'
//ZdjAXDCqtr5lIq9x

const PORT = process.env.Port || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>app.listen(PORT, ()=>console.log(`Server running on port: ${PORT}`)))
.catch((error)=>console.log(error.message));

// mongoose.set('useFindAndModify', false);