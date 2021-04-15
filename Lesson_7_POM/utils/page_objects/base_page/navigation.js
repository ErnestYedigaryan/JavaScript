const Element = require('../base_elements/base_element');
const Collection = require('../base_elements/base_collection');

class Navigation {
    constructor() {
        this.navigationButtons = new Collection('Navigation Buttons', '#guide-inner-content ytd-guide-section-renderer:nth-of-type(1) ytd-guide-entry-renderer yt-formatted-string');
        // this.navigationButtons = new Collection('Navigation Buttons', 'div#chips-wrapper div#scroll-container yt-chip-cloud-chip-renderer yt-formatted-string');
    }
}

module.exports = Navigation;