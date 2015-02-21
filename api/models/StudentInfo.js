/**
* Clients.js
*
* @description :: Data model of students information. For teacher use.
 * Teacher checks information of a student which will be loaded from this model.
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
    */
    teacherId:  'string',
    studentId:  'string',
    /*
    studentUserName:     {
      type:       'string'
    },
    */
    email:        {
      type:       'email'
    },

    // student personal info
    firstName:    'string',
    lastName:     'string',
    startDay:     'datetime',
    startLevel:   'integer',
    telephone:    'string',

    // class info
    lessonDay:    'integer',
    startTime:    'string',
    endTime:      'string',
    lessonLength: 'integer',    //30,45 or 60 minutes

    active:       'boolean'
  }
};


