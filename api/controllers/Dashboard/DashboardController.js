/**
 * Dashboard/DashboardController
 *
 * @description :: Server-side logic for managing dashboard/dashboards
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    index: function (req, res) {
        return res.json({
            todo: 'home page of Dashboard!'
        });
    },

    todayApps: function (req, res) {
        //console.log("request received");
        return res.json([
            {
                id: 1,
                eventDate: "2015-06-09",
                customer: "Mr. Chen",
                details: "Cancelled appointment on June 12, 2015"
            },
            {
                id: 2,
                eventDate: "2015-06-02",
                customer: "Miss Zhou",
                details: "Make new appointment on June 16 2015 for body check"
            },
            {
                id: 3,
                eventDate: "2015-07-02",
                customer: "Mr. Stephen",
                details: "Change the appointment to June 26 2015 for body check"
            }

        ]);
    },

    getAppDetails: function (req, res) {
        var appId = req.param('appid');
        return res.json({
            id: "idsf12123",
            name: "Mr. chen",
            date: "2015-06-18",
            startTime: "9:00am",
            toTime: "10:30am",
            service: "body fix"
        });
    },

    acceptAppByBusiness: function(req, res){
        var appId = req.param('appid');
        console.log("in accept");
        //var app = Appointments.findOne(appId, function(err, result){
        //    if (err){
        //        res.send(500, err);
        //    }else{
        //        res.json(result);
        //    }
        //})

        // check the businessId of the appointment is the userId of current user
        //var currentUserId = req.session('userId');
        //if (currentUserId != app.businessId){
        if (1 != 0){
            res.send('You do not have the permission to update the appointment');
        }
    },

    acceptAppByCustomer: function(req, res){
        var appId = req.param('appid');

        // check the customerId of the appointment is the userId of current user
        var currentUserId = req.session('userId');
        if (currentUserId != ''){

        }
    },

    newApps: function (req, res) {
        console.log("request received in newApps");
        return res.json([
            {
                id: 1,
                eventDate: "2015-06-19",
                customer: "Mr. Chen",
                details: "Cancelled appointment on June 19, 2015"
            },
            {
                id: 2,
                eventDate: "2015-06-22",
                customer: "Miss Zhou",
                details: "Make new appointment on June 22 2015 for body check"
            },
            {
                id: 3,
                eventDate: "2015-07-02",
                customer: "Mr. Stephen",
                details: "Change the appointment to July 26 2015 for body check"
            }

        ]);
    },

    cancelledApps: function (req, res) {
        console.log("request received in cancelledApps");
        return res.json([
            {
                id: 1,
                eventDate: "2015-07-29",
                customer: "Mr. Stephen",
                details: "cancelled appointment onJune 20, 2015"
            },
            {
                id: 2,
                eventDate: "2015-06-22",
                customer: "Miss Kevin",
                details: "cancelled appointment on June 22 2015 for body check"
            },
            {
                id: 3,
                eventDate: "2015-07-02",
                customer: "Mr. Chen",
                details: "cancelled the appointment on July 26 2015 for body check"
            }
        ]);
    },

    rescheduledApps: function (req, res) {
        console.log("request received in rescheduledApps");
        return res.json([
            {
                id: 1,
                eventDate: "2015-06-29",
                customer: "Mr. Stephen",
                details: "rescheduled appointment from June 19, 2015 to June 20, 2015"
            },
            {
                id: 2,
                eventDate: "2015-07-22",
                customer: "Miss Kevin",
                details: "rescheduled from June 22 2015 to July 1, 2015 for body check"
            },
            {
                id: 3,
                eventDate: "2015-07-02",
                customer: "Mr. Chen",
                details: "rescheduled the appointment July 26 2015 to Auguest 1, 2015 for body check"
            }

        ]);
    },

    // search for today's appointments
    today: function (req, res) {
        var currentUserId = req.session('userId');

    }
};

