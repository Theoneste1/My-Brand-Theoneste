import passport from "passport"
import jwt from 'jsonwebtoken';
require("dotenv").config();
//  format of token is gone be:
// authorization : Bearer access_token
// verfy token
const verfyingToken = (req, res, next) => {
    try {
        //get auth header value
        const token = req.header('authorization');
        // check if auther is undefined
        if (!token) return res.status(401).send({
            message: "unauthorized access"
            // forbidden
        });
        else {
            const authorizedUser = jwt.verify(token, process.env.SECRET_KEY);
            req.authorizedUser = authorizedUser;
            next();
        }
    }catch (error) {
            return res.status(401).send({
                message: "Token is not valid"
            });
        }
}

const assigningToken = (data) => jwt.sign(data, process.env.SECRET_KEY, {
        expiresIn: "1d"
    });



// module.exports=verfyingToken
export { verfyingToken, assigningToken} 
