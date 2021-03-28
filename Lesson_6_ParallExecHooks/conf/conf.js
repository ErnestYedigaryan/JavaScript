const yargs = require('yargs').argv;

exports.config = {
    seleniumAddress: 'https://localhost:4444/wd/hub/',
    // directConnect: true,
    specs: ['../test/**/*.spec.js'],
    baseUrl: 'https://www.youtube.com/',
    capabilities: {
        shardTestFiles: yargs.instances > 1,
        maxInstances: yargs.instances || 1,
        'browserName': 'chrome' 
    },
    // multiCapabilities: [{
    //     'browserName': 'chrome'
    // },
    // {
    //     'browserName': 'chrome'
    // }],
    getPageTimeout: 10000,
    mochaOpts: {
        reporter: 'spec',
        timeout: 40000
    },
    framework: 'mocha',
    onPrepare: () => browser.waitForAngularEnabled(false),
    onComplete: () => browser.close()
}