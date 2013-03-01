'use strict';
/* jasmine specs for services go here */

define(['angular','src/public/js/Services/services'], function (angular, Services) {

describe('service', function() {

  var app ;

  beforeEach(function() {
    app = angular.module("myApp", []);
    app.factory(Services);
    angular.mock.module('myApp');
  });



  describe('version', function() {
    it('should contain a version service', inject(function(version) {
        expect(version).not.toBe(null);
    }));

    it('should return current version', inject(function(version) {
        expect(version).toEqual('0.1');
    }));
  });

});

});