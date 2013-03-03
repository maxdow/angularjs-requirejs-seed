'use strict';
/* jasmine specs for controllers go here */

define(['src/public/js/Controllers/controllers'], function () {

    describe('MainCtrl', function () {
        var scope, ctrl;
        beforeEach(function() {
          scope = {},
          ctrl = new MainCtrl(scope);
        });


        it('should create a world variable set to "World"', function() {
            expect(scope.world).toBe("World");
        });
    });
});
