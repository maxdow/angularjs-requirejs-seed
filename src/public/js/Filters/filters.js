'use strict';

/* Filters */

define([],function() {

    function initialize(app) {
    app.filter(('interpolate'),["version",function(version){
        return function(text) {
          return String(text).replace(/\%VERSION\%/mg, version);
        };
    }]);
    }

    return {initialize : initialize};
});
