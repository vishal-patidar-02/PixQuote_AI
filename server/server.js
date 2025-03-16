import  'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/mongodb.js';

// App config 
const app = express();
const port = process.env.PORT || 4000;
await connectDB();

// Middleware 
app.use(express.json());
app.use(cors());

// API ROute 
app.get('/', (req, res) => res.send("App is working"));

app.listen(port, () => {
    console.log("Server is running on port: ", port);
    
})