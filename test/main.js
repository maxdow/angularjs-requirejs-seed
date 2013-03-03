var allTestFiles = [];
var TEST_REGEXP = /test/;

Object.keys(window.__testacular__.files).forEach(function(file) {
    if (TEST_REGEXP.test(file)) {
        allTestFiles.push(file);
    }
});

// Remove main.js from the list
allTestFiles.shift();

require.config({
  // Testacular serves files from '/base'
    baseUrl: '/base',

    paths : {
        "angular" : "src/public/js/lib/angular/angular"
    },

    shim : {
        angular  :{
            exports : "angular"
        }
    },

  // ask requirejs to load these files (all our tests)
  deps: allTestFiles,
  callback :  window.__testacular__.start

});