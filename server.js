const express = require("express")
const {connectDb} = require("./config/database")
const noteRouter = require("./router/noteRouter")

const app = express()

connectDb()
app.use(express.json())

app.use("/api", noteRouter)


const port = 5000;
app.listen(port, (err)=>{
    if(err) throw err;
    console.log(`server is listening port ${port}`)
})