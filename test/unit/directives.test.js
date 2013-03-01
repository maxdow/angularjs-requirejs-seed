//'use strict';

/* jasmine specs for directives go here */



define(['angular','src/public/js/Directives/directives'], function (angular,Directives) {

  describe('directives', function() {

    var provide ;
    var app ;

    beforeEach(function() {
      app = angular.module("myApp", []);
      app.directive(Directives);
      angular.mock.module('myApp');
    });


    describe('app-version', function() {

      it('should print current version', function() {

        module('myApp',function($provide) {
          $provide.value('version', 'TEST_VER');
        });

        inject(function($compile, $rootScope) {
          var element = $compile('<span app-version></span>')($rootScope);
          expect(element.text()).toEqual('TEST_VER');
        });
      });
    });
  });


});