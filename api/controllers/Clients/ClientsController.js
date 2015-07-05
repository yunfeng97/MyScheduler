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
    }
};