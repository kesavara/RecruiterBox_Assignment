/**
 * Created by kesavara on 30-06-2017.
 */


//var navMenuPage = require('');
var HomePage = function() {

    HomePage.prototype.MakeMyTripSite_Home = function () {
        browser.driver.get('https://www.makemytrip.com/');
    };
    HomePage.prototype.Date_today = function () {
        var dates = new Date();
        var today = dates.getDate();
        return today;
        //console.log(today);
    }
    HomePage.prototype.selectDropdownByText = function selectOption(element, item) {
        var desiredOption;
        var FeatureAll = element.all(by.className('ui-id-1'));
        var tagnameAll = FeatureAll.all(by.tagName("li"))
        tagnameAll.all(by.tagName('span'))
            .then(function findMatchingOption(options) {
                options.some(function (option) {
                    option.getText().then(function doesOptionMatch(text) {
                        if (text.indexOf(item) != -1) {
                            desiredOption = option;
                            return true;
                        }
                    });
                });
            })
            .then(function clickOption() {
                if (desiredOption) {
                    desiredOption.click();
                }
            });

    };

};

module.exports = new HomePage();
