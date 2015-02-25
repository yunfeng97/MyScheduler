/**
 * Calendar.js
 *
 * @description :: Calendar model.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        /*
        uuid: {
            type: 'string',
            primaryKey: true,
            required: true
        },
        */
        ownerId:    'string',
        date:       'datetime',
        year:       'integer',
        month:      'integer',
        week:       'integer',
        //day:        'integer',
        weekOfMonth: 'integer', 
        dayOfWeek:  'integer',
        //events:     'array'
        event1:     'json',
        event2:     'json',
        event3:     'json',
        event4:     'json',
        event5:     'json',
        event6:     'json',
        event7:     'json'

        /*
         [
         {
         id:         'integer',
         startTime:  'datetime',
         endTime:    'datetime',
         repeatable: 'boolean',
         visible:    'boolean',
         occupied:   'boolean',
         status:     'string'
         }
         ]
         */
    }
};

