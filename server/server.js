
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import session from "express-session"
import blogRouter from "./routes/blogRouter";
import queryRouter from "./routes/queryRouter";
import userRouter from "./routes/UserRouter";
import actionOnBlog from "./routes/actionOnBlogRouter"
import profileRouter from "./routes/profileRouter"

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './../swagger.json';
const app = express()
app.use(express.json());
dotenv.config();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// calling the routes of blogs
app.use("/", blogRouter)
app.use("/",actionOnBlog)
app.use("/", queryRouter)
app.use("/",profileRouter)

app.use("/", userRouter)

mongoose.connect(process.env.DbConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("db connect successfully")
    //insert admin
    require('./seeds/admin');
    app.use(express.json());

// enable express session
    app.use(session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    }))


    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`server has started ${PORT}`)
    });

}).catch((error) => {
    console.log("Error : ", error)
})


mongoose.connection.on('error', error => console.log(error));
mongoose.Promise = global.Promise;


export default app;
