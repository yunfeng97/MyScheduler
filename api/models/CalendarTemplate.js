/**
* CalendarTemplate.js
*
* @description :: CalendarTemplate model.
 * A weekly calendar will be created based on this template.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      ownerId:          'string',
      serviceId:        'string',
      serviceName:      'string',
      serviceDesc:      'string',
      openOnHoliday:    'boolean',
      //businessHours:    'array'
      mon:              'json',
      tue:              'json',
      wed:              'json',
      thu:              'json',
      fri:              'json',
      sat:              'json',
      sun:              'json'
      /*
      [
      {//Monday
        closed:         'boolean',
        startTime:      'datetime',
        endTime:        'datetime',
        breakTimeFrom:  'datetime',
        breakTimeTo:    'datetime'
      },

      {//Tuesday
        closed:         'boolean',
        startTime:      'datetime',
        endTime:        'datetime',
        breakTimeFrom:  'datetime',
        breakTimeTo:    'datetime'
      }
      ]
       */
  }
};

