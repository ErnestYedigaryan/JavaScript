const yargs = require('yargs').argv;

exports.config = {

    directConnect: true,

    framework: 'mocha',

    specs: [
        '../test/specs/*.spec.js'
    ],

    capabilities: {
        'browserName': 'chrome',
        shardTestFiles: yargs.instances > 1,
        maxInstances: yargs.instances || 1,
    },

    baseUrl: 'https://www.youtube.com/',

    mochaOpts: {
        reporter: 'spec',
        timeout: 70000
    },
    onPrepare: function () {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
    }
};