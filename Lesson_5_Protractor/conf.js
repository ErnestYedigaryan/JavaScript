exports.config = {
    framework: 'mocha',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
}
    framework: 'jasmine',
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    specs: ['spec.js'],
    capabilities: {
        'browserName': 'chrome'
    }
};