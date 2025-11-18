const express = require('express')

const app = express()

const myLogger = (req, res, next) => {
    console.log(`log url: ${req.url}`);
    next()
}

const getMethodMW = (req, res, next) => {
    console.log(`log method: ${req.method}`);
    next()
}

const getDateMW = (req, res, next) => {
    console.log(`log Date: ${new Date()}`);
    next()
}


app.use(express.static("public"))
app.use(myLogger)
app.use(getMethodMW)
app.use('/Users',getDateMW)

app.get('/Users/getAllUsers', (req, res) => {
    //logic
    res.send('Hello World1')
})

app.get('/Users', (req, res) => {
    //logic
    res.send('Hello World1')
})

app.get('/Admin', (req, res) => {
    //logic
    res.send('Admin')
})

app.use((err, req, res, next)=>{
    console.log(err.stack);
    res.send("err")
})

app.use((req, res) => {
    res.status(404).sendFile(__dirname + "/public/404.html")
})

app.listen(2350, () => {
    console.log("port 3000");
})
