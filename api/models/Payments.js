/**
* Payments.js
*
* @description :: Payment model.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    teacherId:        'string',
    from:             'datetime',
    to:               'datetime',
    year:             'integer',
    week:             'integer',
    amount:           'float',
    note:             'string'
  }
};

