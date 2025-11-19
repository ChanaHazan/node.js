const express=require('express')
const app = express()
app.use(express.json())
const studentsRouter=require('./routes/school')

app.use('/school', studentsRouter)

app.listen(5000,()=>{
    console.log("port 3000");
})