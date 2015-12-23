
 'use strict';
 (function () {
    angular.module('FailureCallbacks', [
        'Utils'
    ])

    .factory('getSingleProductFailureCallback', [
        'toastNotification',
        function (notify) {
            return function (scopeObject) {
                return function (error) {
                    var error_data = error || "Unrecognized Error, Please try again.";
                    notify('failure',error_data)
                };
            };
    }])

    .factory('getSingleMerchantFailureCallback', [
        'toastNotification',
        function (notify) {
            return function (scopeObject) {
                return function (error) {
                    var error_data = error || "Unrecognized Error, Please try again.";
                    notify('failure',error_data)
                };
            };
    }])


    .factory('searchRequestFailureCallback', [
        'toastNotification',
        function (notify) {
            return function (scopeObject) {
                return function (error) {
                    var error_data = error || "Unrecognized Error, Please try again.";
                    notify('failure',error_data)
                };
            };
    }]);
}());