const mongoose = require("mongoose");
const { mongoUrl } = require("../config");
require("colors");
const connectDB = async () => {
    try {
        const connect = await mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
        });
        console.log(`Mongodb Is Connected ${connect.connection.host}`.bgYellow);
    } catch (error) {
        console.log(`Error:${error.message}`.bgRed);
        process.exit(1);
    }
};
module.exports = connectDB;