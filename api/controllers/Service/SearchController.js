/**
 * Service/SearchController
 *
 * @description :: Server-side logic for managing service/searches
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    searchByUser: function(req, res){
        console.log("received request in Search Services by User");
        var userId = req.param('userId');
        return res.json([
            {
                id: 1,
                name: 'body shop'
            },
            {
                id: 2,
                name: 'hair cut'
            },
            {
                id: 3,
                name: 'piano'
            }
        ])
    },

    createNewService: function(req, res){

    },

    updateService: function(req, res){
        var serviceId = req.param('serviceId');
    },

    searchByServiceName: function(req, res){

    },

    searchByMultiConditions: function(req, res){

    },

    searchByCategoryAndLocation: function(req, res){

    },

    searchByNameAndLocation: function(req, res){

    },

    searchByDescription: function(req, res){

    }
};

