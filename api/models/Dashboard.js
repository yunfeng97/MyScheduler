/**
* Dashboard.js
*
* @description :: Dashboard model.
 * Each time teacher logs in, he/she will see the dashboard for that day only.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    uuid:       {
      type:       'string',
      primaryKey: true,
      required:   true
    },
    day:      'datetime',
    schedule:  'json',
    /*
    {
      time:       'datetime',
      student:    'string',
      note:       'string'
    }
     */
    todo:     'array'
    /*
    {

    }
     */
  }
};

