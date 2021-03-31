const expect = require('chai').expect;
const PageFactory = require('../../utils/page_objects/pageFactory');
const EC = protractor.ExpectedConditions;
const { element, by, browser } = require('protractor');

describe('Home page navigation', function () {
    const signInBtn = element(by.css('paper-button[aria-label="Sign in"]'));
    const inputEmail = element(by.css('input[type="email"]'));
    const inputPassword = $('#password input');
    const searchInput = element(by.css('input#search'));

    browser.manage().timeouts().implicitlyWait(20000);

    beforeEach(function () {
        browser.waitForAngularEnabled(false);

        browser.driver.manage().window().maximize();
    });

    before(() => {
        browser.get(browser.baseUrl);
        signInBtn.click();
        inputEmail.sendKeys('protselenium@gmail.com');
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        inputPassword.sendKeys('test2050');
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(3000);
    });

    it('should have 7 menu items', async function () {
        await PageFactory.getPage('Home').open();
        const seventhNavigationButton = PageFactory.getPage('Home').Navigation.navigationButtons.collection.get(6);
        await browser.wait(EC.elementToBeClickable(seventhNavigationButton), 10000);
        
        await PageFactory.getPage('Home').Navigation.navigationButtons.clickElementByText('Explore');
        await PageFactory.getPage('Subscriptions').open();
        await PageFactory.getPage('Subscriptions').Navigation.navigationButtons.clickElementByText('History');
        await PageFactory.getPage('History').Navigation.navigationButtons.clickElementByText('Watch later');
        await PageFactory.getPage('Watch Later').Navigation.navigationButtons.clickElementByText('Liked videos');
        const firstNavigationButton = PageFactory.getPage('Home').Navigation.navigationButtons.collection.get(0);
        await browser.wait(EC.elementToBeClickable(firstNavigationButton), 10000);
        const countOfNavigationButtons = await PageFactory.getPage('Home').Navigation.navigationButtons.getCount();
        expect(countOfNavigationButtons).to.be.equal(7);
    });
});