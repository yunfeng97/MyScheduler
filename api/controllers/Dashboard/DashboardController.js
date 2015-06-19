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

    all: function(req, res){
        return res.json([
            {
                eventDate:  "2015-06-06",
                customer:   "Mr. Chen",
                details:    "Cancelled appointment on June 12, 2015"
            },
            {
                eventDate:   "2015-06-02",
                customer:   "Miss Zhou",
                details:    "Make new appointment on June 16 2015 for body check"
            }

        ]);
}
};

