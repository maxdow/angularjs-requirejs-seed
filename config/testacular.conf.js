
// base path, that will be used to resolve files and exclude
basePath = '../';


// list of files / patterns to load in the browser
files = [

  JASMINE,
  JASMINE_ADAPTER,
  REQUIRE,
  REQUIRE_ADAPTER,

  'app/js/lib/angular/angular.js',
  'test/main.js',

  {pattern: 'test/lib/angular/angular-mocks.js', included: false},
  {pattern: 'app/js/**/*.js', included: false},
  {pattern: 'test/unit/*.test.js', included: false},
  {pattern: 'test/test.test.js', included: false}
];

// test results reporter to use
// possible values: dots || progress
reporter = 'dots';


// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari
// - PhantomJS
browsers = [];


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;