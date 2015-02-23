/**
 * Calendar/CalendarController
 *
 * @description :: Server-side logic for managing calendar/calendars
 * @help        :: See http://links.sailsjs.org/docs/controllers
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

    update: function (req, res) {
        return res.json({
            todo: 'update Not implemented yet!'
        });
    },

    delete: function (req, res) {
        return res.json({
            todo: 'delete Not implemented yet!'
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

