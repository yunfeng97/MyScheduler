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
        event7:     'json',
        event8:     'json',
        event9:     'json',
        event10:    'json',
        event11:     'json',
        event12:     'json',
        event13:     'json',
        event14:     'json',
        event15:     'json',
        event16:     'json',
        event17:     'json',
        event18:     'json',
        event19:     'json',
        event20:     'json'

        /*
         {
         customerId:         'integer',
         startTime:  'datetime',
         endTime:    'datetime',
         repeatable: 'boolean',
         visible:    'boolean',
         occupied:   'boolean',
         status:     'string',

         }
         */
    },

    searchByOwner:  function(ownerId, weeks){
        Calendar.find({ownerId: ownerId, week: weeks}, function(err, results){

            if (err){

            }else{
                for (result in results){

                }
            }
        })

    },

    searchByCustomer:   function(customerId){

    }
};

