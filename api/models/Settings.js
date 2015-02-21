/**
* Settings.js
*
* @description :: This Settings model contains information about settings of each user, for example???
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    uuid:       {
      type:       'string',
      primaryKey: true,
      required:   true
    }
  }
};

