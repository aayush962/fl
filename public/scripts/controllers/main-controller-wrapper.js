// Controller Wrapper 
// Injects Services and Callbacks 

// Returns functions which take $scope. 
// Promise and Callbacks implemented in this.

'use strict';

(function () {
    angular.module('Wrappers', [
        'Services',
        'Callbacks',
        'FailureCallbacks'
    ])

    // ---------------------------- Select Active Tab Wrapper --------------------------

    .factory('selectActiveTabWrapper', [
        '$location',
        function ($location) {
            return function () {
                return function(route) {
            		return route === $location.path();
        		};
            };
    }])


    // Current year, in index.html view footer. Copyright {[year]} Grofers 
    .factory('getCurrentYearWrapper', [
        'getCurrentYear',
        function (getCurrentYear) {
            return function (scopeObject) {
                return function () {
                    scopeObject.year = getCurrentYear(); 
                };
            };
    }])

    // Sort in tables
    .factory('sortViaKeyNameWrapper', [
        function () {
            return function (scopeObject) {
                return function (keyname) {
                    scopeObject.sortKey = keyname;         //set the sortKey to the param passed
                    scopeObject.reverse = !scopeObject.reverse; //if true make it false and vice versa
                };
            };
    }])

    // Validation
    .factory('validateCustomWrapper', [
        'toastNotification',
        function (notify) {
            return function (scopeObject) {
                return function (data,key) {
                    switch(key) {
                        case "name":
                            if(!data){
                                return "Please enter a valid email.";
                            }
                            break;
                        case "phone":
                            var re = /^\d{10}$/; 
                            if(!re.test(data)){
                                return "Please enter valid 10 digit mobile no.";
                            }
                            break;
                        case "email":
                            var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                            if(!re.test(data)){
                                return "Please enter a valid email.";
                            }
                            break;
                        case "category":
                            break;
                        case "inventoryLimit":
                            var limit = parseInt(data);
                            if(!(data == parseInt(data, 10))){
                                return "Please enter a valid integer.";
                            }
                            else if(limit<0){
                                return "Cannot be negative.";
                            }
                            break;
                        case "productPrice":
                            var price = parseInt(data);
                            if(!(data == parseInt(data, 10))){
                                return "Please enter a valid integer.";
                            }
                            else if(price<0){
                                return "Price cannot be negative.";
                            }
                            break;
                        default:
                            // notify('info', 'Cannot validate'+ data +'with attr name'+ key);
                    }
                };
            };
    }])

    // Current date
    .factory('getCurrentDateWrapper', [
        'getCurrentDate',
        function (getCurrentDate) {
            return function (scopeObject) {
                return function () {
                    scopeObject.dateSelected = getCurrentDate(); 
                };
            };
    }])

    // ---------------------------- Get Single Product Wrapper --------------------------

    .factory('getSingleProductWrapper', [
        'readSingleProduct', 'getSingleProductCallback', 'getSingleProductFailureCallback','toastNotification',
        function (readSingleProduct, getSingleProductCallback, getSingleProductFailureCallback, notify) {
            return function (scopeObject) {
                return function (product_id) {
                    var promise, callback;

                    //notify('info', 'Fetching your stores');
                    
                    promise = readSingleProduct(product_id).$promise;
                    callback = getSingleProductCallback(scopeObject);
                    promise.then(callback,getSingleProductFailureCallback);
                };
            };
    }])


    .factory('getSingleMerchantWrapper', [
        'readSingleMerchant', 'getSingleMerchantCallback', 'getSingleMerchantFailureCallback','toastNotification',
        function (readSingleMerchant, getSingleMerchantCallback, getSingleMerchantFailureCallback, notify) {
            return function (scopeObject) {
                return function (merchant_id) {
                    var promise, callback;

                    //notify('info', 'Fetching your stores');
                    
                    promise = readSingleMerchant(product_id).$promise;
                    callback = getSingleMerchantCallback(scopeObject);
                    promise.then(callback,getSingleMerchantFailureCallback);
                };
            };
    }])


    // ---------------------------- Search Wrapper --------------------------

    .factory('searchWrapper', [
        'searchRequest', 'searchRequestCallback', 'searchRequestFailureCallback','toastNotification',
        function (request, successCallback, failureCallback, notify) {
            return function (scopeObject) {
                return function (search_filters) {
                    var promise, callback;

                    promise = request(search_filters).$promise;
                    callback = successCallback(scopeObject);
                    promise.then(callback,failureCallback);
                };
            };
    }]);
}());
