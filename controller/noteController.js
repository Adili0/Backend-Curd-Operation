const noteSchema = require("../models/noteSchema")

//! inserted data
exports.insertNote = async(req,res)=>{
  let payload =  await noteSchema.create(req.body);
    res
    .status(200)
    .json({
        success: true,
        message: 'data is inserted',
        payload
        
    })
}

//! fetching the all data
exports.fetchData =  async(req,res)=>{
   let payload = await noteSchema.find({})
    res
    .status(200)
    .json({
        success: true,
        message: "data is fetched",
        payload
    })
}

//! fetching the single data

exports.fetchSingleData = async (req,res) => {
    let payload = await noteSchema.findById(req.params.id)
    res
    .status(200)
    .json({
        success : true,
        message : "data is fetched by id",
        payload
    })
}

//! delete the data

exports.deleteData = async (req,res) => {
    let payload = await noteSchema.findByIdAndDelete(req.params.id)
    res
    .status(200)
    .json({
        success : true,
        message : "successfully deleted",
        payload
    })
}

//! update the data

exports.updateData = async (req,res) => {
    let payload = await noteSchema.findByIdAndUpdate(req.params.id , {$set : req.body})
    res
    .status(200)
    .json({
        success : true,
        message : "successfully updated",
        // payload
    })
}