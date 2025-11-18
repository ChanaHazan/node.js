const express=require('express')
const router=express.Router()
const {getStudentDetails,getAllGila,addStudent,grade}=require('../controller/school')
router.get('/getStudentDetails',getStudentDetails)
router.get('/getAllGila',getAllGila)
router.post('/addStudent',addStudent)
router.get('/grade',grade)

module.exports=router