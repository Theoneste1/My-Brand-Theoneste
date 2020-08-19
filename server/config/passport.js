const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const UserLogin= require("../models/userModel")

passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
        UserLogin.findOne({ email })
            .then((user) => {
                if (!user) {
                    //   res.status(404);
                    //   res.send("User not found.");
                    done(null, false, { message: "User not found." });
                } else {
                    if (user.password === password) done(null, user);
                    else {
                        // res.status(404);
                        // res.send("Incorrect password.");
                        done(null, false, { message: "Incorrect password." });
                    }
                }
            })
            .catch((error) => done({ error: "Unauthorized Access" }));
    })
);

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (id, done) {
    done(null, id);
});

module.exports = passport;
