
 'use strict';
(function () {
    angular.module('Utils', [
        'ngCookies'
    ])
    // ------------------------- get Headers --------------------------
    .factory('getHeaders', [
        '$cookies',
        function ($cookies) {
            return function () {
                return {
                    session_token: $cookies.sessionid,
                };
            };
    }])
    .factory('toastNotification', [
        function () {
            return function (type, message) {
                // toastr.clear();
                toastr.showDuration = 2000;
                toastr.hideDuration = 0;
                toastr.options.timeOut = 3000;
                toastr.options.type = 'error';
                toastr.options.extendedTimeout = 3000;
                toastr.options.closeButton = true;
                toastr[type](message);
            };
    }])
    .factory('logData', [
        function () {
            return function (name, response) {
                console.log('-----------'+ name +'------------');
                console.log(response);
            };
    }]);
}());
