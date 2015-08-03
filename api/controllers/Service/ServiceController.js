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
        console.log("new service request: " + req.param('name'));
    }
};

