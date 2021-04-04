"use strict";
let { When } = require('cucumber');
const elementHelper = require('../utils/stepFunctions.js').getPageObjectElement;
const stepFunctions = require('../utils/stepFunctions.js')
const logger = require('../../config/loggerConfig.js').logger;
const EC = protractor.ExpectedConditions;

const CLICKABLE_TIMEOUT = 20 * 1000;

When(/^I wait until "([^"]*)" is (present|clickable|visible|invisible|selected|gone)$/, async (alias, shouldBe) => {// (present|clickable|visible|invisible|selected|gone)
    const element1 = await element(by.css(alias));
    return browser.wait(EC.elementToBeClickable(element1), 10000);
});