/**
 * Calendar.js
 *
 * @description :: Calendar model.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

var String = require('string');

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

    searchByOwnerAndWeek:  function(ownerId, week, callback){
        Calendar.find({ownerId: ownerId, week: week}, function(err, results){

            if (err){

            }else{
                for (var i=0; i<results.length; i++){
                    var result = results[i];
                    // only return time slots that are available to book
                    
                    // using For loop to do the check
                    /*
                    for (key in result){
                        if (String(key).startsWith('event')){
                            var event = result[key];
                            if (!event.visible || event.occupied){
                                result[key] = null;
                            }
                        }
                    };
                    */
                }
               callback(results);
            }
        })

    },

    searchByCustomerAndWeek:   function(customerId){
        Calendar.find({ownerId: ownerId, week: week}, function(err, results){

            if (err){

            }else{
                for (var i=0; i<results.length; i++){
                    var result = results[i];
                    // only return time slots that are available to book
                    
                    // using For loop to do the check
                    /*
                    for (key in result){
                        if (String(key).startsWith('event')){
                            var event = result[key];
                            if (!event.visible || event.occupied){
                                result[key] = null;
                            }
                        }
                    };
                    */
                    if (!result.event1.visible || result.event1.occupied){
                        result.event1 = null;
                    }
                    if (!result.event2.visible || result.event2.occupied){
                        result.event2 = null;
                    }
                    if (!result.event3.visible || result.event3.occupied){
                        result.event3 = null;
                    }
                    if (!result.event4.visible || result.event4.occupied){
                        result.event4 = null;
                    }
                    if (!result.event5.visible || result.event5.occupied){
                        result.event5 = null;
                    }
                    if (!result.event6.visible || result.event6.occupied){
                        result.event6 = null;
                    }
                    if (!result.event7.visible || result.event7.occupied){
                        result.event7 = null;
                    }
                    if (!result.event8.visible || result.event8.occupied){
                        result.event8 = null;
                    }
                    if (!result.event9.visible || result.event9.occupied){
                        result.event9 = null;
                    }
                    if (!result.event10.visible || result.event10.occupied){
                        result.event10 = null;
                    }
                    if (!result.event11.visible || result.event11.occupied){
                        result.event11 = null;
                    }
                    if (!result.event12.visible || result.event12.occupied){
                        result.event12 = null;
                    }
                    if (!result.event13.visible || result.event13.occupied){
                        result.event13 = null;
                    }
                    if (!result.event14.visible || result.event14.occupied){
                        result.event14 = null;
                    }
                    if (!result.event15.visible || result.event15.occupied){
                        result.event15 = null;
                    }
                    if (!result.event16.visible || result.event16.occupied){
                        result.event16 = null;
                    }
                    if (!result.event17.visible || result.event17.occupied){
                        result.event17 = null;
                    }
                    if (!result.event18.visible || result.event18.occupied){
                        result.event18 = null;
                    }
                    if (!result.event19.visible || result.event19.occupied){
                        result.event19 = null;
                    }
                    if (!result.event20.visible || result.event20.occupied){
                        result.event20 = null;
                    }

                }
            }
        })

    }
};

