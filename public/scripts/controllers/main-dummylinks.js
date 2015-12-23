 'use strict';

(function () {
    angular.module('Constants', []).

    constant('urls', {
         baseApiUrl: 'http://localhost:8000/api',
         singleProduct: 'http://localhost:8000/api/products/:id',
         search: 'http://localhost:8000/api/products',
         singleMerchant: 'http://localhost:8000/api/dealers/:id'
    });

}());