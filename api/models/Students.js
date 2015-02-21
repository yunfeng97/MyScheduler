/**
* Clients.js
*
* @description :: Data model of students. Student logins and information will be loaded from this model.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    /*
    uuid:       {
      type:       'string',
      primaryKey: true,
      required:   true
    },

    userName:     {
      type:       'string',
      unique:     true
    },
     */
    password:     'string',
    email:        {
      type:       'email',
      unique:     true
    },

    firstName:    'string',
    lastName:     'string',
    telephone:    'string',

    //active:       'boolean',

    classes:      'json'
    /*
    definition of classes:
    {
      teacherId:    'string',
      teacherName:  'string',
      startDay:     'datetime',
      startLevel:   'integer',

      lessonDay:    'integer',
      startTime:    'string',
      endTime:      'string',
      lessonLength: 'integer',    //30,45 or 60 minutes
    }
    */
  },

  findByEmail: function(email, callback){
    Students.findOne({email: email}, function(err, student){
      if (err){
        res.send(500, err);
      }else{
        callback(null, student);
      }
    })
  },
  
  findByEmailOrCreateNew: function(email, callback){
    Students.findOne({email: email}, function(err, student){
      if (err){
        res.send(500, err);
      }else{
        if (student == null){
          console.log("not found");
        }else{
          console.log("found" + student.id);
        }
        //callback(null, student);
      }
    })
  }
};


