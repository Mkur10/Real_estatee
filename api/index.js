const express = require("express");
const connect = require("../database/Connect");
const dotenv = require("dotenv");
dotenv.config();
const userRouter= require("./routes/user.routes.js");
const authRouter = require("./routes/auth.routes.js");
const cookieParser = require("cookie-parser");
const listingRouter = require("./routes/listing.routes.js");
import path from 'path';

const app = express();

const port = 3000;

connect(process.env.mongo);
app.listen(port, ()=>{
    console.log(`${port} is running`)
});

const __dirname = path.resolve();
app.use(express.json());

app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send("Hello World")
});

app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);
app.use("/api/listing", listingRouter);

app.use(express.static(path.join(__dirname, '/dreamheaven/dist')));

app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, 'dreamheaven', 'dist', 'index.html'));
})

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
})