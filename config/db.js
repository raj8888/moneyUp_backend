const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set('bufferCommands', false);
const connection = mongoose.connect(process.env.mongoURL)
.then(()=>console.log("connected"))
.catch(()=>{console.log(error)})

module.exports = { connection };
