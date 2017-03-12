// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

/*global jasmine */
<<<<<<< HEAD
var SpecReporter = require('jasmine-spec-reporter');
=======
const { SpecReporter } = require('jasmine-spec-reporter');
>>>>>>> bd77fba161a276cbc9e02d60ad46061ff93a3613

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
<<<<<<< HEAD
  useAllAngular2AppRoots: true,
=======
>>>>>>> bd77fba161a276cbc9e02d60ad46061ff93a3613
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e'
    });
  },
<<<<<<< HEAD
  onPrepare: function() {
    jasmine.getEnv().addReporter(new SpecReporter());
=======
  onPrepare() {
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
>>>>>>> bd77fba161a276cbc9e02d60ad46061ff93a3613
  }
};
