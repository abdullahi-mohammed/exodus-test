import express from 'express'
import dotenv from 'dotenv'
import { totalSupplyRouter } from './routes/totalSupply.js';
const app = express();

dotenv.config();

const allowedOrigins = [];
const environment = process.env.NODE_ENV;

app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (environment === 'production' && allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    } else if (environment !== 'production') {
        res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all in development
    }
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

const port = process.env.PORT || 3000;

app.use("/", totalSupplyRouter);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});