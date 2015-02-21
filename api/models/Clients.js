/**
* Clients.js
*
* @description :: Data model of clients.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    uuid:       {
      type:       'string',
      primaryKey: true,
      required:   true
    },
    serviceProviderId:  'string',
    userName:     {
      type:       'string',
      unique:     true
    },
    password:     'string',
    email:        {
      type:       'email',
      unique:     true
    }
  }
};

