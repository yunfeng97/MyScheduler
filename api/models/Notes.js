/**
* Notes.js
*
* @description :: Notes model.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    teacherId:    'string',
    teacherName:  'string',
    studentId:    'string',
    studentName:  'string',
    notes:        'json'
    /*
     {
     noteTime:   'datetime',
     content:    'string'
     }
    */
  }
};

