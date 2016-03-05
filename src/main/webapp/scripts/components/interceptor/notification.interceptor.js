 'use strict';

angular.module('brainzjhipsterApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-brainzjhipsterApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-brainzjhipsterApp-params')});
                }
                return response;
            }
        };
    });
