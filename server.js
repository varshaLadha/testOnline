const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 4000
var app=express();

var mSchema = mongoose.Schema({
    id:{
        type:Number,
        unique:true
    },
    name:{
        type:String
    },
    class:{
        type:String
    },
    age:{
        type:Number
    }
})

var student = mongoose.model('student',mSchema);

mongoose.connect('mongodb://varshaLadha:chhotu1810@ds239648.mlab.com:39648/testdbase',(err) => {
    if(err){
        return console.log("Problem connecting to database ",err)
    }
    console.log("connected to database");
})

app.get('/api/student',(req,res) => {
    student.find().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    })
})

app.get('/',(req,res) => {
    student.find().then((result) => {
        res.send({result});
    }).catch((err) => {
        console.log(err);
    })
})

app.listen(port,() => {
    console.log("connected to server on port ",port)
})
