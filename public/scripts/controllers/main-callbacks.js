// Callbacks to be called on promise complete. 
// Injects utilities here. 
 'use strict';
 (function () {
    angular.module('Callbacks', [
        'Utils'
    ])

    .factory('getSingleProductCallback', [
        'toastNotification','logData',
        function (notify, logData) {
            return function (scopeObject) {
                return function (response) {
                    scopeObject.singleProduct = response[0];
                    //notify('success',"All products Loaded successfully.");
                    logData("getSingleProduct",response[0]);
                };
            };
    }])

    .factory('getSingleMerchantCallback', [
        'toastNotification','logData',
        function (notify, logData) {
            return function (scopeObject) {
                return function (response) {
                    scopeObject.singleMerchant = response[0];
                    //notify('success',"All products Loaded successfully.");
                    logData("getSingleMerchant",response[0]);
                };
            };
    }])

    .factory('searchRequestCallback', [
        'toastNotification','logData',
        function (notify, logData) {
            return function (scopeObject) {
                return function (response) {
                    scopeObject.searchResults = response;
                    //notify('success',"Search Results Loaded successfully.");
                    logData("search",response);
                };
            };
    }]);
}());