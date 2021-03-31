const BasePage = require('../base_page/base_page');
const Element = require('../base_elements/base_element');

class LikedVideos extends BasePage {
    constructor() {
        super();
        this.url = 'https://www.youtube.com/playlist?list=LL';
    }
    open() {
        return super.open(this.url);
    }
}

module.exports = LikedVideos;