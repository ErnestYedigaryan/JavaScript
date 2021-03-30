const { expect } = require('chai');
const { describe } = require('mocha');
const { browser, element, by } = require('protractor');

describe('asdfghjkl;', () => {
    const userLogo = element(by.css('img#img[alt="Avatar image"]'));
    const signInBtn = element(by.css('paper-button[aria-label="Sign in"]'));
    const inputEmail = element(by.css('input[type="email"]'));
    const inputPassword = element(by.xpath('//section/div/div/div[1]/div[1]/div/div/div/div/div[1]/div/div[1]/input'));
    const toggleTheme = element(by.xpath('//ytd-toggle-theme-compact-link-renderer'));
    const darkTheme = element(by.xpath('//paper-item/yt-formatted-string[contains(@id,"label") and normalize-space()="Dark theme"]'));
    const suggestedVideos = element.all(by.css('#content  h3.ytd-rich-grid-media a'));
    const WLVideoOpt = element(by.xpath('//div[6]/ytd-rich-item-renderer[7]/div/ytd-rich-grid-media/div[1]/div/div[2]/ytd-menu-renderer/yt-icon-button/button/yt-icon'));
    const video4 = element(by.xpath('//div[6]/ytd-rich-item-renderer[7]/div/ytd-rich-grid-media/div/div/div/h3/a'));
    const saveToWL = element(by.xpath('//yt-formatted-string[normalize-space()="Save to Watch later"]'));
    const menuBtn = element(by.css('button#button[aria-label="Guide"]'));
    const history = element(by.xpath('//paper-item/yt-formatted-string[contains(@class,"title") and normalize-space()="History"]'));
    const watchLater = element(by.xpath('//paper-item/yt-formatted-string[contains(@class,"title") and normalize-space()="Watch later"]'));

    before(() => {
        browser.get(browser.baseUrl);
        signInBtn.click();
        inputEmail.sendKeys('protselenium@gmail.com');
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        inputPassword.sendKeys('test2050');
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        userLogo.click();
        toggleTheme.click();
        darkTheme.click();
    });

    beforeEach(() => {
        browser.get(browser.baseUrl);
    });

    browser.manage().timeouts().implicitlyWait(20000);

    it('check that video list was changed after refresh', () => {
        expect(suggestedVideos.isDisplayed());
        
        browser.refresh();
        browser.sleep(2000);
        suggestedVideos.getAttribute('aria-label').then(title => {
            element.all(by.css('#content  h3.ytd-rich-grid-media a')).getAttribute('aria-label').then(titleAfterRefresh => {
                expect(title).to.not.equal(titleAfterRefresh);
            });
        });
    });

    it('check that videos add to history', () => {
        video4.click();
        browser.sleep(2000);
        menuBtn.click();
        history.click();
        browser.sleep(5000);

        //get first video title of history
        const historyFirstVideo = element(by.xpath('//ytd-item-section-renderer[1]/div[3]/ytd-video-renderer[1]/div[1]/div/div[1]/div/h3/a')).getAttribute('title');
        
        video4.getAttribute('title').then(title => {
            historyFirstVideo.then(title2 => {
                expect(title).to.equal(title2);
            });
        });
    });

    it('check that videos add to Watch Later', () => {
        const WLVideoTitle = element(by.xpath('//div[6]/ytd-rich-item-renderer[7]/div/ytd-rich-grid-media/div[1]/div/div/h3/a')).getAttribute('title');

        WLVideoOpt.click();
        saveToWL.click();

        menuBtn.click();
        watchLater.click();
        browser.sleep(1000);

        const WLFirstVideoTitle = element(by.xpath('//ytd-playlist-video-renderer[1]/div[2]/div[1]/div/h3/a')).getAttribute('title');


        WLVideoTitle.then(title => {
            WLFirstVideoTitle.then(title2 => {
                expect(title).to.equal(title2);
            });
        });
        browser.sleep(3000);
    });

    it('negative test without logging in', () => {
        userLogo.click();
        const signOutBtn = element(by.xpath('//yt-multi-page-menu-section-renderer[1]/div[2]/ytd-compact-link-renderer[5]/a/paper-item/yt-formatted-string[1]'));

        signOutBtn.click();

        WLVideoOpt.click();
        saveToWL.isPresent().then(present => {
            expect(present).to.be.false;
        });
        browser.sleep(1000);
    });
});

