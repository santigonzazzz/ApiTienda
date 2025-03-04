const mongoose = require("mongoose");
require ('dotenv').config()
const URI = `mongodb+srv://${process.env.USERBD}:${process.env.PASSBD}@adso2903013.nx4ky.mongodb.net/${process.env.BD}`
mongoose.connect(URI);
module.exports = mongoose;