const students=[
    {fname:"Rachel", lname:"Coen", id:"11", class:12, age:17, grade:100},
    {fname:"Chani", lname:"Levi", id:"22", class:13, age:18, grade:95},
    {fname:"Ayelet", lname:"Hazan", id:"33", class:12, age:19, grade:78},
    {fname:"Hodaya", lname:"Grin", id:"44", class:12, age:18, grade:100},
    {fname:"Gila", lname:"Kroyzer", id:"55", class:12, age:20, grade:85}

]

exports.getStudentDetails=(req,res)=>{
    res.send(students)
}

exports.getAllGila=(req,res)=>{
    const name=students.filter(f=>f.fname=='Gila')
    res.send(name)
}

exports.addStudent=(req,res)=>{
    students.push(req.body)
    res.send(students)
}

exports.grade=(req,res)=>{
    const st=students.filter(s=>s.grade==100).map(s => s.fname + " " + s.lname);
    if(st.length>0)
        res.send(st);
    else
        res.send("-------")
}