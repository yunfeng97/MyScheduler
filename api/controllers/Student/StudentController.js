/**
 * Student/StudentController
 *
 * @description :: Server-side logic for managing student/students
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  index: function (req, res) {
      Students.find().exec(function (err, students){
          if (err){
            res.send(500, err);
          }else{
            res.json(200, students);
          }
        }
      );
  },

  show: function (req, res) {
    return res.json({
      todo: 'show student!'
    });
  },

  create: function (req, res) {
    var student = {
      teacherId :   req.param('teacherId'),
      userName :    req.param('userName'),
      password :    req.param('password'),
      firstName:    req.param('firstName'),
      lastName:     req.param('lastName'),
      email:        req.param('email'),
      telephone:    req.param('telephone'),
      startDay:     req.param('startDay'),
      startLevel:   req.param('startLevel'),
      lessonDay:    req.param('lessonDay'),
      startTime:    req.param('startTime'),
      endTime:      req.param('endTime'),
      lessonLength: req.param('lessonLength'),
      active:       true
    };

    var studentInfo = student;

    Students.findByEmail(student.email, function(err, existingStu){
      if (err){
        // doing nothing here???
      }else{
        if (student == null){
          Students.create(student, function(err, newStu){
            if (err){
              res.send(500, err);
            }else{
              studentInfo.studentId = newStu.id;
            }
          })
        }else{
          studentInfo.studentId = existingStu.id;
        }
      }
    });

/*
    Students.create(student, function(err, stu){
      if (err){
        res.send(500, err);
      }else{
        //res.json(200, stu);
        student.studentId = stu.id;
        StudentInfo.create(student, function(err, stu){
          if (err){
            res.send(500, err);
          }else{
            res.json(200, stu);
          }
        });
      }
    });
  */
  },

  update: function (req, res) {
    return res.json({
      todo: 'update student!'
    });
  },

  delete: function (req, res) {
    return res.json({
      todo: 'delete student!'
    });
  },

  import: function (req, res) {
    return res.json({
      todo: 'import students for ' + req.param('user')
    });
  }
};

