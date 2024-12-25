const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());


const data = [
    { name: "Karan", rollNo: 101, spi:1.2 },
    { name: "Ashish", rollNo: 102, spi:9.2 },
    { name: "Nikhil", rollNo: 103, spi:1.9 },
    { name: "Ayush", rollNo: 104, spi:8.3 },
];

//Get All Data
app.get('/',(req,res)=>{
    res.send(data);
})

//Get By Rollsno
app.get('/student/:rollNo',(req,res)=>{
    const ans = data.find(temp=>temp.rollNo==req.params.rollNo);
    res.send(ans);
});

//Student Less Marks
app.get('/student/less/:marks',(req,res)=>{
    const ans = data.filter(temp=>{
        return temp.spi<req.params.marks
    })
    res.send(ans);
})

//Student Delete Data
app.delete('/student/:rollNo',(req,res)=>{
    const indexToDelete = data.findIndex(temp=>temp.rollNo==req.params.rollNo);
    console.log("req.params.rollNo",req.params.rollNo);
    console.log("indexToDelete",indexToDelete);
    if(indexToDelete>=0){
        data.splice(indexToDelete,1);
    }
    
    res.send(data);
});

//Student Insert Data
app.post('/student',(req,res)=>{
    data.push(req.body);
    res.send(data);
})

//Student Data Update
app.patch('/student/updateValue',(req,res)=>{
    const indexToUpdate = data.findIndex(temp=>temp.rollNo==req.body.rollNo);
    data[indexToUpdate] = req.body;
    res.send(data);
})


app.listen(3000,()=>{
    console.log("Server started 3000............ ");
})