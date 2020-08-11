const express = require("express")

const mongoose = require("mongoose")

// connect to MongoDB dataBase

mongoose
    .connect("mongodb://localhost:27017/theoneste", { useNewUrlParser: true })
    .then(() => {
        const app = express()


        app.listen(5000, () => {
            console.log("server has started!")
        
    })

})