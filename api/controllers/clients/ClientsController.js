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
        return res.json({
            todo: 'home page of Dashboard!'
        });
    }
};