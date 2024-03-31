const mongoose = require("mongoose");

//const url="mongodb+srv://rakeshsinghkur1234:C69w2yVSYcy6fpyN@dreamheaven.1dyva41.mongodb.net/?retryWrites=true&w=majority";

const connect = (url) => {
    return (
        mongoose.connect(url).
            then(() => {
                console.log("connection is established with mongo");
            }).catch((err) => {
                console.log(err);
            })
    )
}

module.exports = connect;