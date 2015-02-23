/**
* ServiceReview.js
*
* @description :: Service Review model.
 * Stores reviews for each service/business
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      serviceId:        'string',
      numberOfReviews:  'integer',
      startTime:        'datetime',
      endTime:          'datetime',
      reviews:          'array'
      /*
      {
          reviewerId:   'string',
          reviewerName: 'string',
          city:         'string',
          province:     'string',
          date:         'datetime',
          title:        'string',
          content:      'string'
      }
      */
  }
};

