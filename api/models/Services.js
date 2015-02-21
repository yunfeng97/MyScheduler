/**
* Services.js
*
* @description :: Service model. Describe the service.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    uuid:       {
      type:       'string',
      primaryKey: true,
      required:   true
    },
    ownerId:   {
      type:   'string',
      unique: true
    },

    serviceName:  'string',
    serviceDesc:  'string',
    category:     'string',
    isSole:       'boolean',

    //optional fields
    address:      'string',
    city:         'string',
    country:      'string',
    postalCode:   'string'
  }
};

