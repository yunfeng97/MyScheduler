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
  }
};

