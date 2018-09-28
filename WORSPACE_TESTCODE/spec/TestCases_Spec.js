// Another Spec

var homePage = require('../page/homePages');
var CommonObject = require('../page/CommonPageObjects');
var locators_Objects = require('../page/locator_PageObjects');

var EC = protractor.ExpectedConditions;
var dates = new Date();
var today = dates.getDate();
var tomorrow = today+1;

describe('TestCases : MakeMyTrip_UI_Automation_Project',function() {
    beforeEach(function () {
        isAngularSite(false);
        CommonObject.waitforAngular(false);
    });
    afterAll(function () {
        browser.close();

    });



        it("TestCase 1 : GoTO Makemytrip.com and verify the title of the page", function () {
            homePage.MakeMyTripSite_Home();
            CommonObject.assert_title("MakeMyTrip - #1 Travel Website 50% OFF on Hotels, Flights & Holiday");
            CommonObject.waitforAngular(false);

        });
        
        it("TestCase 2 : Switch to ONE-WAY to ROUND TRIP",function () {
            browser.wait(EC.visibilityOf($('#js-switch__option')), 15000, "NOT FOUND");
            locators_Objects.clickby_Xpath("//div[@id='js-switch__option']/div[2]/label");
        });

        it("TestCase 3 : Select the source and Destination you would liek to fly", function () {
            CommonObject.waitforAngular(false);
            browser.wait(EC.elementToBeClickable($('#hp-widget__sfrom')), 5000, "NOT FOUND");
            locators_Objects.clickby_ID("hp-widget__sfrom");
            locators_Objects.clickby_CssContainingText("span", "BLR");
            browser.wait(EC.elementToBeClickable($('#hp-widget__sTo')), 5000, "NOT FOUND");
            browser.wait(EC.presenceOf($('#ui-id-2')), 5000, "Not FOund");
            locators_Objects.selectLocation_Xpath("DEL");
        });

        it("TestCase 4 : Select the Depart date as Today and Return date as NEXT day and search ", function () {

            browser.wait(EC.elementToBeClickable($('#hp-widget__depart')), 5000, "NOT FOUND");
            element(by.xpath("(//*[@class='ui-datepicker-group ui-datepicker-group-first']//a[text()='" + today + "'])[1]")).click();
            element(by.xpath("(//*[@class='ui-datepicker-group ui-datepicker-group-first']//a[text()='" + tomorrow + "'])[2]")).click();
            browser.wait(EC.elementToBeClickable($('#searchBtn')), 5000, "NOT FOUND");
            locators_Objects.clickby_ID("searchBtn");
        });

        it("TestCase 5 : Verify Page navigated and resulted in 'Flight Split Listing View' Page  ", function () {
            browser.wait(EC.presenceOf($('#chf_header')), 15000, 'NOT FOUND');
            CommonObject.assert_title("Flight Split Listing View");
        });

        it("TestCase 6 : Click on BOOK button present in the CHEAPEAST FLIGHTS Section and verify Page navigated to Booking pAGE", function () {
            locators_Objects.clickby_LinkText("Book");
            CommonObject.waitforPresenceofElement('#reviewSteps');
            CommonObject.assert_title("Flights Review")

        });
        it("TestCase 7 :Veify Booking page contains fields namely Departure,return,Fare summary, Offers and login button. ", function () {
            locators_Objects.verify_field_by_xpath("(//*[@class='pull-left deprtre_txt'])[1]", "DEPARTURE");
            locators_Objects.verify_field_by_xpath("(//span[@class='pull-left fare_revw_labl'])[1]", "FARE SUMMARY");
            locators_Objects.verify_field_by_xpath("(//*[@class='pull-left deprtre_txt'])[2]", "RETURN");
            var foo = element(by.xpath('//div[@class="offers_section_box"]'));
            expect(foo.isPresent()).toBe(true);

        });


});
            
               
                




