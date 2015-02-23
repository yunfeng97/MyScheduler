/**
 * Services.js
 *
 * @description :: Service model. Describe the service.
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
        key:            'string',
        ownerId: {
            type: 'string',
            unique: true
        },

        serviceName: {
            type: 'string',
            unique: true
        },
        serviceDesc:        'string',
        category:           'string',
        isSole:             'boolean',

        //optional fields
        contactPerson:      'string',
        telephone:          'string',
        address:            'string',
        city:               'string',
        country:            'string',
        postalCode:         'string'
    }
};

