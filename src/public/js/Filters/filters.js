/*angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);

*/
'use strict';

/* Filters */

define(["angular"],function(angular){

var filters = {} ;

filters.interpolate = function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
};

return filters ;

});


