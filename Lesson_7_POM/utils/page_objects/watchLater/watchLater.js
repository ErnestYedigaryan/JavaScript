const BasePage = require('../base_page/base_page');
const Element = require('../base_elements/base_element');

class WatchLater extends BasePage {
    constructor() {
        super();
        this.url = 'https://www.youtube.com/playlist?list=WL';
    }
    open() {
        return super.open(this.url);
    }
}

module.exports = WatchLater;