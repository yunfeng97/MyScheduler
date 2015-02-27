/**
 * Calendar/CalendarController
 *
 * @description :: Server-side logic for managing calendar/calendars
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

/*
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
 */

module.exports = {
    show: function (req, res) {
        return res.json({
            todo: 'show Not implemented yet!'
        });
    },

    create: function (req, res) {
        return res.json({
            todo: 'create Not implemented yet!'
        });
    },

    // create a blank calendar for one week. Should be called by batch job 6 months before the actual month
    // or online if the blank calendar doesn't exist.
    createBlankCalendar: function(req, callback){
        /*
        var blankCalendar = {};

        blankCalendar.ownerId = req.session('userId');
        blankCalendar.year = req.param('year');
        blankCalendar.month = req.param('month');
        blankCalendar.week = req.param('week');
        */

        Calendar.create(req.param('blankTemplate'), callback(err, result));

    },

    updateCalendar: function (req, res) {
        var userId = req.session('userId');
        var calendarId = req.param('calendarId');
        var year = req.param('year');
        var week = req.param('week');
        var day = 'event' + req.param('day');
        
        var newEvent = req.param('event');
        var updateQuery = {};
        updateQuery[day] = newEvent;
        Calendar.update({id: calendarId}, updateQuery, function (err, result){

        })
        return res.json({
            todo: 'update Not implemented yet!'
        });
    },

    deleteCalendar: function (req, res) {
        return res.json({
            todo: 'delete Not implemented yet!'
        });
    },
    
    searchByMonth: function(req, res){
        var month = req.param('month');
        
        Calendar.findByMonth(month, function(err, results){
            if (err){
                res.send(500, err);
            }else{
                res.json(results);
            }
        });
    },
    
    searchByWeek: function(req, res){
        var week = req.param('week');
        
        Calendar.findByWeek(week, function(err, results){
            if (err){
                res.send(500, err);
            }else{
                res.json(results);
            }
        });
    },

    createTemplate: function (req, res) {
        /*
        var bh = [];
        bh[0] = {
            startTime:  '9',
            endTime:    '20',
            breakTime:  '11'
        };
        bh[1] = {
            startTime:  '9',
            endTime:    '20',
            breakTime:  '12'
        };
        */
        
        /*
        CalendarTemplate model
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
        */
        var template = {
            ownerId:        req.session.userId,
            serviceId:      req.session.serviceId,
            businessHours:  req.businessHours
        };


        CalendarTemplate.create(template, function (err, newTemplate) {
            if (err){
                res.send(500, err);
            }else{
                res.json(200, newTemplate);
            }
        })
    }
};

