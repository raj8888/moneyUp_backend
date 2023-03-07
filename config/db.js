const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set('bufferCommands', false);
const connection = mongoose.connect(process.env.mongoURL);

module.exports = { connection };
