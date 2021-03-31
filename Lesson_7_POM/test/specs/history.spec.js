const expect = require('chai').expect;
const Element = require('../../utils/page_objects/base_elements/base_element');
const PageFactory = require('../../utils/page_objects/pageFactory');
const EC = protractor.ExpectedConditions;
const { element, by, browser } = require('protractor');

describe('History check', () => {
    const signInBtn = new Element('css','paper-button[aria-label="Sign in"]');
    const inputEmail = new Element('css','input[type="email"]');
    const inputPassword = new Element('css','#password input');
    const searchInput = new Element('css','input#search');
    const searchBtn = new Element('css', 'button#search-icon-legacy');
    const selectedVideo = new Element('xpath', '//yt-formatted-string[contains(@class,"style-scope ytd-video-renderer") and normalize-space()="Me at the zoo"]');
    const historyFirstVideo = new Element('css','#contents ytd-item-section-renderer:nth-of-type(1) #contents a#video-title yt-formatted-string');
    
    browser.manage().timeouts().implicitlyWait(20000);
    
    // beforeEach(() => {
    //     browser.get(browser.baseUrl);
    //     signInBtn.click();
    //     inputEmail.sendKeys('protselenium@gmail.com');
    //     browser.actions().sendKeys(protractor.Key.ENTER).perform();
    //     inputPassword.sendKeys('test2050');
    //     browser.actions().sendKeys(protractor.Key.ENTER).perform();
    // });

    it('History check', async () => {
        browser.sleep(5000);

        await PageFactory.getPage('Home').open();
        searchInput.sendKeys('me at the zoo');
        searchBtn.click();
        selectedVideo.click();
        browser.sleep(5000);
        await PageFactory.getPage('History').open();
        browser.sleep(5000);
        // await PageFactory.getPage('Home').Navigation.navigationButtons.clickElementByText('History');
        const text1 = await historyFirstVideo.getText();
        const text2 = await selectedVideo.getText();
        expect(text1).to.equal(text2);
    });
});