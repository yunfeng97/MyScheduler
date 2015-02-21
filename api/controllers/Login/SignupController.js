/**
 * Login/SignupController
 *
 * @description :: Server-side logic for managing login/signups
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

//var dao = require('../../services/user/UserDAO');

module.exports = {
	createNew: function(req, res){
    var user = {
      firstName : req.param('firstName'),
      lastName : req.param('lastName'),
      email : req.param('email'),
      userName : req.param('userName')
    };

    //var params = req.params.all();
    User.create(user, function(err, user){
      if (err){
        res.send(500, err);
      }else{
        res.json(200, user);
      }
    });

    /*
    User.create(user, function(err, user){
      if (err){
        res.send(500, err);
      }else{
        res.send(200, user);
      }
    });
    */
  }
};

