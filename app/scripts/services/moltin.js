'use strict';

angular.module('storeApp.moltin', [])
    .factory('MoltinAuth', function() {
    var deferred = $q.defer();
    var moltin = new Moltiin({publicId: 'tEMwaWFwWOwHGvWzcXBx1gJ7UPXMnWQ8eLWezOHz'});
    moltin.Authenticate(function() {
      deffered.resolve(moltin);

    };
}]);

