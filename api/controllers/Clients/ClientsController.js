/**
 * Created by yunfeng on 04/07/2015.
 */
/**
 * Dashboard/ClientsController
 *
 * @description :: Server-side logic for managing clients
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    getAllClients: function (req, res) {
        return res.json([
            {
                id: 1,
                name: 'Angela Ling'
            },
            {
                id: 2,
                name: 'Alice Wu'
            },
            {
                id: 3,
                name: 'Kevin Chen'
            },
            {
                id: 5,
                name: 'Lucy Chen'
            },
            {
                id: 6,
                name: 'Stephen Chen'
            }
        ]);
    },

    getClient: function(req, res){
        var clientId = req.param('clientId');
        //console.log("get detail for client: " + clientId);

        if (clientId == 1) {
            return res.json({
                id: 111,
                name: 'Angela Ling',
                phone: '519-666-6666',
                email: 'angela.chen@mycorp.com'
            });
        }else if (clientId == 5){
            return res.json({
                id: 555,
                name: 'Lucy Chen',
                phone: '519-666-6666',
                email: 'lucy.chen@mycorp.com'
            });
        }else if (clientId == 6){
            return res.json({
                id: 666,
                name: 'Stephen Chen',
                phone: '519-666-6666',
                email: 'stephen.chen@mycorp.com'
            });
        }
    },

    createNewClient: function(req, res){
        //console.log("request url: " + req.url);
        console.log("new client request: " + req.param('name'));
        console.log("new client request: " + req.param('email'));

        var userId = req.session('userId');
        var newClient = {
            ownerId: '1111',
            name:  req.param('name'),
            email: req.param('email'),
            phone: req.param('phone')
        };

        /*
        Clients.create(newClient, function (err, result){
            if (err){
                res.send(500, err);
            }else{
                res.json(200, result);
            }
        });
        */

        Clients.create(newClient);

    }
};