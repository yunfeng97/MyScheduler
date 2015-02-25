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
        events:     'json'

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

