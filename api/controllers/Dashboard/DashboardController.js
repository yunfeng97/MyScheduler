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

    // search for today's appointments
    today: function (req, res) {
        var currentUserId = req.session('userId');

    }
};

