'use strict';

angular.module('storeApp.moltin', [])
    .factory('MoltinAuth', function() {
    var deferred = $q.defer();
    var moltin = new Moltin({publicId: 'tEMwaWFwWOwHGvWzcXBx1gJ7UPXMnWQ8eLWezOHz'});
    moltin.Authenticate(function() {
      deferred.resolve(moltin);

    });
});

