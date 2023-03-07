const mongoose = require("mongoose");
require("dotenv").config();
// const connection = mongoose.connect(process.env.mongoURL)
const connectDatabase = async () => {
    try {      
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connected to mongodb database successfully!')
    } catch (err) {
        console.log(err)
    }
}


module.exports = { connectDatabase() };
