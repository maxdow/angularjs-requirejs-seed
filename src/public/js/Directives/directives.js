'use strict';

define(["angular"],function(angular){

var directives = {} ;


directives.mydirective = function() {
    return {
        restrict : "EA",
        template : "<strong>myAmazingDirective</strong>",
        replace : true
    };

};


return directives;
});

