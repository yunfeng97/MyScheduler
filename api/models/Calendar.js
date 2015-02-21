/**
* Calendar.js
*
* @description :: Calendar model.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    uuid:       {
      type:       'string',
      primaryKey: true,
      required:   true
    },
    events: 'json'

    /*
     [
     {
     id:         'integer',
     startTime:  'datetime',
     endTime:    'datetime',
     repeatable: 'boolean',
     studentId:  'string',
     visible:    'boolean',
     occupied:   'boolean',
     status:     'string'
     }
     ]
     */
  }
};

