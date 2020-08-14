
import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blogRouter";
import bodyParser from "body-parser"
import passport from "passport"
import UserLoginRouter from "./routes/loginRouter"
const secureRoute = require('./routes/secure-route');
const app = express()
app.use(express.json());

// calling the routes of blogs
app.use("/", blogRouter)

mongoose.connect("mongodb://localhost:27017/theoneste", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("db connect successfully")

}).catch((error) => {
    console.log("Data base connection failed", error)
})

// mongoose.connection.on('error', error => console.log(error));
// mongoose.Promise = global.Promise;

// require('./auth/login');
// app.use(bodyParser.urlencoded({ extended: false }));

// app.use("/", UserLoginRouter);
// //We plugin our jwt strategy as a middleware so only verified users can access this route
// app.use('/user', passport.authenticate('jwt', { session: false }), secureRoute);

// //Handle errors
// app.use(function (err, req, res, next) {
//     res.status(err.status || 500);
//     res.json({ error: err });
// });

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`server has started ${PORT}`)
});
