
import express from "express";
import mongoose from "mongoose";
import session from "express-session"
import blogRouter from "./routes/blogRouter";
import queryRouter from "./routes/queryRouter";
import userRouter from "./routes/UserRouter";
import actionOnBlog from "./routes/actionOnBlogRouter"
import profileRouter from "./routes/profileRouter"

import passportConfig from "./config/passport"
import secureRoute from './routes/secure-route';
const app = express()
app.use(express.json());

// calling the routes of blogs
app.use("/", blogRouter)
app.use("/",actionOnBlog)
app.use("/", queryRouter)
app.use("/",profileRouter)

app.use("/", userRouter)

mongoose.connect("mongodb://localhost:27017/theonesteDb", {
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


    // passport
    app.use(passportConfig.initialize());
    app.use(passportConfig.session());

    // default, router is 8000
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
        console.log(`server has started ${PORT}`)
    });

}).catch((error) => {
    console.log("Error : ", error)
})


mongoose.connection.on('error', error => console.log(error));
mongoose.Promise = global.Promise;

app.use("/", secureRoute)

export default app;
