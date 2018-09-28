
//Reference
var EC = protractor.ExpectedConditions;


var locators =  function () {

    locators.prototype.inputText_by_ID = function (ID, Sendkeys) {
        element(by.id(ID)).sendKeys(Sendkeys);
    };

    locators.prototype.clickby_ClassName = function (ClassName) {
        element(by.className(ClassName)).click();
    };
    locators.prototype.clickby_ID = function (ID) {
        element(by.id(ID)).click();
    };
    locators.prototype.clickby_Xpath = function (Xpath) {
        element(by.xpath(Xpath)).click();
    };
    locators.prototype.clickby_LinkText = function (text) {
        element(by.linkText("Book")).click();
    };
    locators.prototype.selectLocation_Xpath = function (location) {
        element(by.xpath("(//span[contains(text(),'"+location+"')])[2]")).click()
    };
    locators.prototype.verify_field_by_xpath = function (xpath,text) {
        var text = element(by.xpath(xpath)).getText();
        expect(text).toContain(text);
    };
    locators.prototype.clickby_CssContainingText = function (tag,value) {
        element(by.cssContainingText(tag, value)).click();
    };
    locators.prototype.verify_Is_Present_by_Xpath = function (Xpath,ID,True_False) {
        expect(element(by.xpath("//[@id="+ID+"]")).isPresent()).toBe(True_False)
    };
    locators.prototype.verify_Is_Present_by_Xpath_Return = function (Xpath) {
       return element(by.xpath(Xpath)).isPresent().then(function (result) {
            return result;
        })
    };

    locators.prototype.getTextby_ID = function (ID) {
        //read the text and return
        return element(by.id(ID)).getText().then(function (text) {
            return text;
        })
    };
    locators.prototype.getTextby_ClassName = function (Class) {
        return element(by.className(Class)).getText().then(function (text) {
            return text;
        })
    };

    locators.prototype.getTextby_XPath = function (Xpath) {
        return element(by.xpath(Xpath)).getText().then(function (text) {
            return text;
        })
    };
    locators.prototype.verifyElement_Is_Clickable_Xpath = function (Xpath, TimeInSec, FailureMessage) {
        browser.driver.wait(EC.elementToBeClickable(element(by.xpath(Xpath))), TimeInSec,FailureMessage);
    };
    locators.prototype.verifyElement_Is_Clickable_ID = function (ID, TimeInSec, FailureMessage) {
        browser.driver.wait(EC.elementToBeClickable(element(by.id(ID))), TimeInSec,FailureMessage);
    };

};

module.exports = new locators();