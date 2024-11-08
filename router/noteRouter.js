const {Router} = require("express")
const {insertNote, fetchData,fetchSingleData,deleteData, updateData}  = require("../controller/noteController")

const router = Router()

router.post('/notes', insertNote) // insert data
router.get('/notes', fetchData)
router.get("/notes/:id" , fetchSingleData) // get data
router.delete("/notes/:id" , deleteData) // delete data
router.patch("/notes/:id" , updateData) // update data

module.exports = router;
