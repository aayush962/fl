// Resource 
// Various urls constructed here. 
 'use strict';

(function () {
    angular.module('Resources', [
        'Constants',
        'Utils'
    ])

    // ---------------------------- Products ------------------------------------
    // Deals with all the products in a store

    .factory('Products', [
        '$resource', 'urls', 'getHeaders',
        function ($resource, urls, getHeaders) {
            return $resource(
                [urls.baseApiUrl, 'products/:id/'].join(''),
                {id: '@id'},
                {
                    query: {
                        headers: getHeaders(),
                        isArray: true,
                        url: urls.singleProduct
                    },
                    get: {
                        headers: getHeaders()
                    },
                    update: {
                        method: 'PUT',
                        headers: getHeaders()
                    },
                    save: {
                        method: 'POST',
                        headers: getHeaders()
                    }
                },
                {stripTrailingSlashes: false}
            );
       }])

    .factory('Merchants', [
        '$resource', 'urls', 'getHeaders',
        function ($resource, urls, getHeaders) {
            return $resource(
                [urls.baseApiUrl, 'merchants/:id/'].join(''),
                {id: '@id'},
                {
                    query: {
                        headers: getHeaders(),
                        isArray: true,
                        url: urls.singleMerchant
                    },
                    get: {
                        headers: getHeaders()
                    },
                    update: {
                        method: 'PUT',
                        headers: getHeaders()
                    },
                    save: {
                        method: 'POST',
                        headers: getHeaders()
                    }
                },
                {stripTrailingSlashes: false}
            );
       }])

    // Deals with all the products in a store

    .factory('Search', [
        '$resource', 'urls', 'getHeaders',
        function ($resource, urls, getHeaders) {
            return $resource(
                [urls.baseApiUrl, 'search/'].join(''),
                {},
                {
                    query: {
                        headers: getHeaders(),
                        isArray: true,
                        //for testing without backend
                        url: urls.search
                    },
                    get: {
                        headers: getHeaders()
                    },
                    update: {
                        method: 'PUT',
                        headers: getHeaders()
                    },
                    save: {
                        method: 'POST',
                        headers: getHeaders()
                    }
                },
                {stripTrailingSlashes: false}
            );
       }]);

}());