const BasePage = require('../base_page/base_page');
const Element = require('../base_elements/base_element');

class Explore extends BasePage {
    constructor() {
        super();
        this.url = 'https://www.youtube.com/feed/explore';
    }
    open() {
        return super.open(this.url);
    }
}

module.exports = Explore;