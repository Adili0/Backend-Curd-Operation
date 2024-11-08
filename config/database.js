const mongoose = require("mongoose")


const url = 'mongodb+srv://shaikadil9299:POP5DTKHsIOFuym2@cluster0.tkwlj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


exports.connectDb = async()=>{
   await  mongoose.connect(url)
   console.log("database is connected");
}
