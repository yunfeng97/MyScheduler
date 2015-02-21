/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/' : {
    controller : 'home'
  },

  '/login' : {
    controller : 'Login/auth',
    action     : 'index'
  },

  '/logout' : {
    controller : 'Login/auth',
    action     : 'logout'
  },


  /*** Routes for User ***/
  'POST /user' : {
    controller : 'Login/SignupController',
    action:       'createNew'
  },

  /*** Routes for Dashboard ***/
  'GET /:teacherId' : 'Dashboard/DashboardController',


  /*** Routes for Calendar ***/
  'GET /:teacherId/calendar': {
    controller: 'Calendar/CalendarController',
    action: 'show'
  },
  'POST /calendar/:teacherId': {
    controller: 'Calendar/CalendarController',
    action: 'create'
  },
  'PUT /calendar/:teacherId': {
    controller: 'Calendar/CalendarController',
    action: 'update'
  },
  'DELETE /calendar/:teacherId': {
    controller: 'Calendar/CalendarController',
    action: 'delete'
  },


  /*** Routes for Students ***/
  'GET /:teacherId/students' : 'Student/StudentController',
  'GET /:teacherId/student/:studentId' : {
    controller: 'Student/StudentController',
    action: 'show'
  },
  'POST /:teacherId/student' : {
    controller: 'Student/StudentController',
    action: 'create'
  },
  'POST /:teacherId/students' : {
    controller: 'Student/StudentController',
    action: 'import'
  },
  'PUT /:teacherId/student/:studentId' : {
    controller: 'Student/StudentController',
    action: 'update'
  },
  'DELETE /:teacherId/student/:studentId' : {
    controller: 'Student/StudentController',
    action: 'delete'
  },
  'GET /:teacherId/:studentId' : {
    controller: 'Student/StudentController',
    action: 'studentDashboard'
  }


/*
  'get /signup': { view: 'conversion/signup' },
  'post /signup': 'AuthController.processSignup',
  'get /login': { view: 'portal/login' },
  'post /login': 'AuthController.processLogin',
  '/logout': 'AuthController.logout',
  'get /me': 'UserController.profile'
*/


  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  *  If a request to a URL doesn't match any of the custom routes above, it  *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
