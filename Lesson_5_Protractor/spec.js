const { element, by, browser } = require('protractor');
const { expect } = require('chai');

describe('Protractor Demo App', function () {
    const searchBar = element(by.xpath('.//mat-toolbar-row[2]/aio-search-box/input'));
    const searchResults = element(by.css('.search-results'));
    const ngDoc = element(by.css('aio-search-results .search-results div:nth-child(3) ul:nth-child(2) :nth-child(3) a'));
    const ngDocHeader = element(by.css('header.cli-header'));
    const ngDocArguments = element(by.css('aio-lazy-ce li:nth-child(2)'));
    const ngDocOptions = element(by.css('aio-lazy-ce li:nth-child(3)'));
    const introduction = element(by.css('aio-nav-menu.ng-tns-c18-1 > aio-nav-item:nth-child(1) > div > a'));
    const angularBox = element(by.xpath('.//div[@class=\'card-container\']/a[@href=\'guide/what-is-angular\']'));

    browser.manage().window().setSize(1800, 600);
  
    beforeEach(function () {
        browser.get('https://angular.io/');
    });

    browser.manage().timeouts().implicitlyWait(20000);

    it('should have a result', () => {
        searchBar.sendKeys('What is Angular');

        expect(searchResults.isDisplayed()); 
        
        ngDoc.click();

        expect(ngDocHeader.isDisplayed());
        expect(ngDocArguments.isDisplayed());
        expect(ngDocOptions.isDisplayed());

        // browser.sleep(5000);

        introduction.click();

        expect(angularBox.isDisplayed());

        // browser.sleep(5000);
    });
});