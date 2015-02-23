/**
* User.js
*
* @description :: This User models stores information of users.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    /*
    uuid:       {
      type:       'string',
      primaryKey: true
      //required:   true
    },

    userName:  {
      type:   'string',
      unique: true
    },
    */
    email:     {
      type:    'email',
      unique:  true
    },
    password:  'string',
    serviceName:   'string', // this service name should be given to clients so they can register with this service provider

    firstName: 'string',
    lastName:  'string',

    activated: {
      type: 'boolean',
      defaultsTo: false
    },

    userType:   'string' ,   // the type of the user. For example, business provider, customer or both

    /**
     * Strips the password out of the json
     * object before its returned from waterline.
     * @return {object} the model results in object form
     */
    toJSON: function() {
      // this gives you an object with the current values
      var obj = this.toObject();
      delete obj.password;

      delete obj.activated;
      // return the new object without password
      return obj;
    },
    /**
     * Adds a method called fullName to the response object
     * @return {string} firstName and LastName concat'd
     */
    fullName: function() {
      return this.firstName + ' ' + this.lastName
    }
  }
};

