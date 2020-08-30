
import cors from "cors";
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
app.use(cors());
dotenv.config();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// calling the routes of blogs
app.use("/", blogRouter)
app.use("/",actionOnBlog)
app.use("/", queryRouter)
app.use("/",profileRouter)

app.use("/", userRouter)


app.use(
    cors({
        origin: '*',
        methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
        preflightContinue: false,
        optionsSuccessStatus: 204,
    }),
);
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept',
    );
    next();
});

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
