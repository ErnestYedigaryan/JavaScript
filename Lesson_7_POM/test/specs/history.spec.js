const expect = require('chai').expect;
const Element = require('../../utils/page_objects/base_elements/base_element');
const PageFactory = require('../../utils/page_objects/pageFactory');
const EC = protractor.ExpectedConditions;
const { element, by, browser } = require('protractor');

describe('History check', () => {    
    before(() => {
        browser.get(browser.baseUrl);
        
        PageFactory.getPage('Home').signInBtn.click();
        PageFactory.getPage('Home').inputEmail.sendKeys('protselenium@gmail.com');
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        PageFactory.getPage('Home').inputPassword.sendKeys('test2050');
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(5000);
    });

    beforeEach(function () {
        browser.get(browser.baseUrl);
    });

    browser.manage().timeouts().implicitlyWait(20000);

    it('History check', async () => {        
        await PageFactory.getPage('Home').open();
        const query = 'me at the zoo';
        PageFactory.getPage('Home').searchInput.sendKeys(query);
        PageFactory.getPage('Home').searchBtn.click(); // We can navigate to search page by clicking search button or by using searchPage 'open' method
        // PageFactory.getPage('SearchPage').open(query);
        PageFactory.getPage('SearchPage').selectedVideo.click();
        await PageFactory.getPage('History').open();
        const text1 = await PageFactory.getPage('History').historyFirstVideo.getText();
        const text2 = await PageFactory.getPage('SearchPage').selectedVideo.getText();
        expect(text1).to.equal(text2);
    });

    after(() => {
        PageFactory.getPage('Home').avatarBtn.click();
        PageFactory.getPage('Home').signOutBtn.click();
    });
});