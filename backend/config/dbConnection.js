const mongoose = require("mongoose");
const connectDb = async () => {

    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("data connected",
            connect.connection.host);
    } catch (error) {
        console.log(err);
        process.exit(1)
    }
}

module.exports = connectDb;