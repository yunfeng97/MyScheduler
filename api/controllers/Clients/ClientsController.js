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
        console.log("get detail for client: " + clientId);

        return res.json({
            id: 111,
            name: 'Stephen Chen',
            phone: '519-666-6666',
            email: 'stephen.chen@mycorp.com'
        });
    }
};