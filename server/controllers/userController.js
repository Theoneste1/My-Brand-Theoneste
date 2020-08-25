
import {  assigningToken } from "../middlewares/verfyingToken"
import UserModel from "./../models/userModel"
require("dotenv").config();


const userLogin =async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await UserModel.findOne({ email: email });
        if (!admin) return res.status(400).send({ status: 400, message: "user does not exist" });
        if (admin.password !== password) return res.status(400).send({ status: 400, error: "Incorrect password" });
        const token = assigningToken({ admin: admin.email });
        return res.status(200).send({ status: 200, message: "Successfully loged in", token: token });

    } catch (error) {
        res.status(500).send({ status: 500, error: error.message })
    }
}


// logout
const logout = (req, res) => {
    res.logout();
    res.status(500).send({ status: 500, message: "logged out successfully!" });
}
// export all the functions
export { userLogin, logout}
