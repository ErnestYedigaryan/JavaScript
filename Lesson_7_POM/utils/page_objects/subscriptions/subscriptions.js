const BasePage = require('../base_page/base_page');
const Element = require('../base_elements/base_element');

class Subscriptions extends BasePage {
    constructor() {
        super();
        this.url = 'https://www.youtube.com/feed/subscriptions';
    }
    open() {
        return super.open(this.url);
    }
}

module.exports = Subscriptions;