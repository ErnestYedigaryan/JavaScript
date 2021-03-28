const {expect} = require('chai');
const { browser } = require('protractor');

describe('Search mocha in google', function () {
    // before(function() {
    //     // browser.ignoreSynchronisation = true; // is depricated now
    //     browser.waitForAngularEnabled(false) // use this instead
    // })

    beforeEach(function () {
        // browser.manage().window().maximize();
        browser.get('https://www.google.com/');
    });

    // it('should contain search input', async function () {
    //     // const searchInput = $('sdfsdfsdf');
    //     const searchInput = $('.RNNXgb input');
    //     const isVisible = await searchInput.isDisplayed();
    //     console.log('isVisible ', isVisible);

    //     return expect(isVisible).to.be.true;
    // });

    // it('should contain all link', async function () { 
    //     const searchInput = $('.RNNXgb input');
    //     searchInput.sendKeys('mocha js');
    //     await browser.actions().sendKeys(protractor.Key.ENTER).perform();
    //     await browser.sleep(5000);
    //     const allLink = $('div.hdtb-msel');
    //     const isVisible = allLink.isDisplayed();

    //     return expect(isVisible).to.be.true;
    // });
});