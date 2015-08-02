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

    },

    createNew: function(req, res){
        var name = req.param("name");
        var description = req.param("description");
        //process.stdout.write(name)
        var service = {
            serviceName: name,
            serviceDesc: description
        };

        Services.create(service, function (err, newService) {
            if (err){
                res.send(500, err);
            }else{
                //process.stdout.write(newService);
                res.json(200, newService);
            }
        })
    },

    registerNewService: function(req, res){
        var qs = require('querystring');
        var body = '';
        req.on('data', function (data) {
            body += data;

            // Too much POST data, kill the connection!
            console.log("register new service data: " + data);
        });
        req.on('end', function () {
            var post = qs.parse(body);
            console.log("all service data: " + post.name);
            // use post['blah'], etc.
        });
    }
};

