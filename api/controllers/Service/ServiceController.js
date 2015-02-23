/**
 * Service/ServiceController
 *
 * @description :: Server-side logic for managing service/services
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    create: function (req, res) {
        var student = {
            teacherId: req.param('teacherId'),
            userName: req.param('userName'),
            password: req.param('password'),
            firstName: req.param('firstName'),
            lastName: req.param('lastName'),
            email: req.param('email'),
            telephone: req.param('telephone'),
            active: true
        };

    }
};

