const Element = require('../base_elements/base_element');
const BasePage = require('../base_page/base_page');
const Collection = require('../base_elements/base_collection');

class HomePage extends BasePage {
    constructor() {
        super();
        this.url = 'https://www.youtube.com';
        this.searchInput = new Element('css','input#search');
        this.searchBtn = new Element('css', 'button#search-icon-legacy');
        this.signInBtn = new Element('css','paper-button[aria-label="Sign in"]');
        this.inputEmail = new Element('css','input[type="email"]');
        this.inputPassword = new Element('css','#password input');
        this.avatarBtn = new Element('css', 'button#avatar-btn');
        this.signOutBtn = new Element('css', 'yt-multi-page-menu-section-renderer:nth-of-type(1)  ytd-compact-link-renderer:nth-of-type(5)');
        this.useAnotherAcc = new Element('xpath', '//div[contains(@class,"BHzsHc") and normalize-space()="Use another account"]');
    }
    open() {
        return super.open(this.url);
    }
}

module.exports = HomePage;