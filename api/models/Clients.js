/**
* Clients.js
*
* @description :: Data model of clients.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      /*
    uuid:       {
      type:       'string',
      primaryKey: true,
      required:   true
    },
    */
    ownerId:  'string',
    name:     'string',
    //password:     'string',
    email: 'email',
    phone: 'string'
  }
};

