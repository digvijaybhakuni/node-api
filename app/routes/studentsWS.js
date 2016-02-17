
var express    = require('express');
var Student = require('../models/student');

var router = express.Router();


router.route("/")
    .post(function (req, res) {
        var student = new Student();
        student.name = req.body.name;
        student.std = req.body.std;
        student.age = req.body.age;
        student.address = req.body.address;
        student.save(function(err, _std){
            if(err){
                res.send(err);
            } else{
                res.json({message : "Student Created", uuid  : _std._id});
            }
        });
    })
    .get(function(req, res){
            var students = Student.find().exec().addBack(function(err, students){
            
            if (err) {
                res.send(err);
            } else {
                res.json(students);
            }
            
        });
    });
router.route("/:student_id")
    .get(function(req, res){
            Student.findById(req.params.student_id).exec().addBack(function(err, students){
            if (err) {
                res.send(err);
            } else {
                res.json(students);
            }
            
        });
    })
    .put(function(req, res){
        Student.findById(req.params.student_id).exec().addBack(function(err, _student){
            if (err) {
               req.send(err);
            } else if(_student!=null){
                _student.name = req.body.name;
                console.log(_student);
                _student.save(function(err, _std){
                    if(err){
                        res.send(err);
                    } else{
                        res.json({message : "Student Created", uuid  : _std._id});
                    }
                });
            }else{
                req.send({error : "No Student found"});
            }
        });
        
        
        
    });

module.exports = router;