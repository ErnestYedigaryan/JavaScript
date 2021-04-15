const BasePage = require('../base_page/base_page');
const Element = require('../base_elements/base_element');

class History extends BasePage {
    constructor() {
        super();
        this.url = 'https://www.youtube.com/feed/history';
        this.historyFirstVideo = new Element('css','#contents ytd-item-section-renderer:nth-of-type(1) #contents a#video-title yt-formatted-string');
    }

    open() {
        return super.open(this.url);
    }
}

module.exports = History;