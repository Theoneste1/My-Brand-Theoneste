import User from "./../models/userModel"
import dotenv from 'dotenv';

dotenv.config();

const admin = {
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD
};

const newUser = new User(admin);
// newUser.save();

module.exports = newUser;
