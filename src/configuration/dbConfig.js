const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URL,{
    serverSelectionTimeoutMS: 5000
})

mongoose.connection.on("connected",()=>{
    console.log('Connected to MongoDB')
})

mongoose.connection.on("error",(error)=>{
    console.log('Mongo Connection error', error)
})

module.exports = mongoose;