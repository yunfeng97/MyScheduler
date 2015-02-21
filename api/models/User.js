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
    publicId:   'string', // this ID should be given to students so they can register with this teacher

    password:  'string',

    email:     {
      type:    'email',
      unique:  true
    },
    firstName: 'string',
    lastName:  'string',

    activated: {
      type: 'boolean',
      defaultsTo: false
    },

    userType:   'string' ,   // the type of the user. For example, business provider or customer

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

