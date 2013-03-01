//'use strict';

/* jasmine specs for filters go here */

define(['angular','src/public/js/Filters/filters'], function (angular, Filters) {

describe('filter', function() {

    var app;

    beforeEach(function() {
        app = angular.module("myApp", []);
        Filters.initialize(app);
        angular.mock.module('myApp');
    });


  describe('interpolate', function() {
    beforeEach(module(function($provide) {
      $provide.value('version', 'TEST_VER');
    }));


    it('should replace VERSION', inject(function(interpolateFilter) {
      expect(interpolateFilter('before %VERSION% after')).toEqual('before TEST_VER after');
    }));
  });
});
});