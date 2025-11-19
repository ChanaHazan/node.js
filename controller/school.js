const fs=require('fs')

const students = [
    { fname: "Rachel", lname: "Coen", id: "11", class: 12, age: 17, grade: 100 },
    { fname: "Chani", lname: "Levi", id: "22", class: 13, age: 18, grade: 95 },
    { fname: "Ayelet", lname: "Hazan", id: "33", class: 12, age: 19, grade: 78 },
    { fname: "Hodaya", lname: "Grin", id: "44", class: 12, age: 18, grade: 100 },
    { fname: "Gila", lname: "Kroyzer", id: "55", class: 12, age: 20, grade: 85 }

]

exports.getStudentDetails = (req, res) => {
    res.send(students)
}

exports.getAllGila = (req, res) => {
    const name = students.filter(f => f.fname == 'Gila')
    res.send(name)
}

exports.addStudent = (req, res) => {
    students.push(req.body)
    res.send(students)
}

exports.grade = (req, res) => {
    const st = students.filter(s => s.grade == 100).map(s => s.fname + " " + s.lname);
    if (st.length > 0)
        res.send(st);
    else
        res.send("-------")
}

exports.deleteStudentById = (req, res) => {
    const { id } = req.params
    const studentList = students.filter(s => s.id !== id)
    res.send(studentList)
}

exports.updateMark = (req, res) => {
    const { id, mark } = req.params
    const update = students.find(s => s.id === id)

    if (update) {
        update.grade = Number(mark)
    }
    else {
        res.send("התלמיד לא נמצא")
    }
    res.send(students)
}

exports.createFile = (req, res) => {
    fs.writeFile(
        './studentsFiles/studentList.txt',
        JSON.stringify(students, null, 2),
        (err) => {
            if (err) 
              {  res.send("Error writing file:" + err.message)}
            else{
            res.send("File created with students!")}
        })
}



exports.returnData=(req,res)=>{
    fs.readFile('./studentsFiles/studentList.txt','utf8',(err,data)=>{
        if(err)
           res.status(404).json({msg:"not found"});
        res.send(data)
    })
}
