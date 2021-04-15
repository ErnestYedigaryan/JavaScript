const Navigation = require('./navigation');

class BasePage {
    constructor() {
        this.Navigation = new Navigation();
    }
    wait(waitInMilliseconds) {
        return browser.sleep(waitInMilliseconds);
    }
    getCurrenUrl() {
        const currentUrl = browser.getCurrentUrl();

        return currentUrl;
    }
    open(url) {
        return browser.get(url);
    }
}

module.exports = BasePage;