const express=require('express')

const router=express.Router()
const {getStudentDetails,getAllGila,addStudent,grade, deleteStudentById,updateMark,createFile,returnData}=require('../controller/school')
router.get('/getStudentDetails',getStudentDetails)
router.get('/getAllGila',getAllGila)
router.post('/addStudent',addStudent)
router.get('/grade',grade)
router.delete('/deleteStudentById/:id',deleteStudentById)
router.post('/updateMark/:id/:mark',updateMark)
router.get('/createFile',createFile)
router.post('/returnData',returnData)
module.exports=router