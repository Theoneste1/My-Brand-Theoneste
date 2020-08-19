
import passport from "passport"
import { verfyingToken, assigningToken } from "../middlewares/verfyingToken"
import jwt from 'jsonwebtoken';
import { response } from "express";
require("dotenv").config();


const userLogin = (req, res) => {
    const user = {
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD
    }
    jwt.sign(user, process.env.SECRET_KEY, function (err, token) {
        return res.send({
            token
        })

    })
    console.log(user.email)
    console.log(user.password)
}





// logout
const logout = (req, res) => {
    res.logout();
    res.send("logged out successfully!");
}

// export all the functions
export { userLogin, logout}
