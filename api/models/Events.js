/**
* Events.js
*
* @description :: Event model. Event is notification for activity like rehearsal.
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

