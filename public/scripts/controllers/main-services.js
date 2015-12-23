 'use strict';

(function () {
    angular.module('Services', [
        'Resources'
    ])

    .factory('readSingleProduct', [
        'Products',
        function (Products) {
            return function (ID) {
                return Products.query({id: ID});
            };
    }])

    .factory('readSingleMerchant', [
        'Merchants',
        function (Merchants) {
            return function (ID) {
                return Merchants.query({id: ID});
            };
    }])

    .factory('searchRequest', [
        'Search',
        function (Search) {
            return function (data) {
                return Search.query({search_string: data.search_string, category: data.category});
            };
    }]);
}());
