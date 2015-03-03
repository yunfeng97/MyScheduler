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

    '/': {
        controller: 'home'
    },

    '/login': {
        controller: 'Login/auth',
        action: 'index'
    },

    '/logout': {
        controller: 'Login/auth',
        action: 'logout'
    },


    /*** Routes for User ***/
    'POST /user': {
        controller: 'Login/SignupController',
        action: 'createNew'
    },

    /*** Routes for Dashboard ***/
    'GET /:userId': 'Dashboard/DashboardController',



    /*** Routes for Business Calendar ***/
    'GET /calendar/:userId': {
        controller: 'Calendar/CalendarController',
        action: 'showCalendar'
    },
    'POST /calendar/:userId': {
        controller: 'Calendar/CalendarController',
        action: 'create'
    },
    'PUT /calendar/:userId': {
        controller: 'Calendar/CalendarController',
        action: 'update'
    },
    'GET /calendar/template/:userId': {
        controller: 'Calendar/CalendarController',
        action: 'showCalendarTemplate'
    },
    'POST /calendar/template/:userId': {
        controller: 'Calendar/CalendarController',
        action: 'createTemplate'
    },
    'PUT /calendar/template/:userId': {
        controller: 'Calendar/CalendarController',
        action: 'updateTemplate'
    },
    'DELETE /calendar/template/:userId': {
        controller: 'Calendar/CalendarController',
        action: 'deleteTemplate'
    },

   
    
    /*** Routes for Customer Calendar ***/
    'GET /:userId/calendar': {
        controller: 'Calendar/CustomerCalendarController',
        action: 'showCustomerCalendar'
    },

    'DELETE /calendar/:userId': {
        controller: 'Calendar/CustomerCalendarController',
        action: 'delete'
    },
    

    /*** Routes for Service ***/
    'POST /service/register' : {
        controller: 'Service/ServiceController',
        action:     'createNew'
    },
    'PUT /service/:serviceName': {
        controller: 'Service/ServiceController',
        action:     'update'
    },
    'GET /service/:serviceName': {
        controller: 'Service/SearchController',
        action:     'searchByServiceName'
    },
    'GET /service': {
        controller: 'Service/SearchController',
        action:     'searchByMultiConditions'
    },
    'GET /service/category/:categoryId': {
        controller: 'Service/SearchController',
        action:     'searchByCategory'
    },
    'GET /service/name/:serviceName': {
        controller: 'Service/SearchController',
        action:     'searchByServiceName'
    },
    'GET /service/desc/:description': {
        controller: 'Service/SearchController',
        action:     'searchByDescription'
    },
    'GET /service/location/:location': {
        controller: 'Service/SearchController',
        action:     'searchByLocation'
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
