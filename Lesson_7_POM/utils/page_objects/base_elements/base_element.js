const { by, element } = require('protractor');
class Element {
    constructor(elementType, selector) {
        switch(elementType) {
            case 'xpath': 
                this.element = element(by.xpath(selector));
                break;
            case 'css': 
                this.element = element(by.css(selector));
                break;
            default: 
                return null;
        }
    }
    click() {
        return this.element.click();
    }
    sendKeys(str) {
        return this.element.sendKeys(str);
    }
    async getText() {
        const elementText = await this.element.getText();

        return elementText;
    }
}

module.exports = Element;