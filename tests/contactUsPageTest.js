var ContactUs_Page = require('../pageObjects/ContactUs_Page');

beforeEach(function () {
  browser.url('/Contact-Us/contactus.html');
});

describe('Test Contact Us form WebdriverUni', function () {

    it('Should be able to submit a successful submission via contact us form', function (done) {
      // browser.submitDataContact('Joe','Blogs',detail.email,detail.body);
      // var successConfirmed = browser.isExisting(replyMsg, 'Success message is not present.');
      //       expect(successConfirmed).to.be.true;

      //       var successText = browser.getText(replyMsg);
      //       expect(successText).to.equal('Thank You for your Message!');

      ContactUs_Page.submitAllInfo('Joe','Blogs','test@test.com','This is a comment.');
    });

  it('Should not be able to submit a successful  submission via contact us form as all fields are required', function (done) {
    ContactUs_Page.setFirstName('Joe');
    ContactUs_Page.setLastName('Blogs');
    ContactUs_Page.setEmailAddress("test@test.com");
    ContactUs_Page.clickSubmit();
    ContactUs_Page.confirmFail();
  });

  // has not been updated with new selectors
  it.skip('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
    browser.setValue(fName, 'Joe');
    browser.setValue(mail, 'joe_blogs@mail.com');
    browser.click(submitBtn);

    var successConfirmed = browser.isExisting(replyMsg, 'Success message is not present.');
    expect(successConfirmed).to.be.false;

    var errorText = browser.getText(replyFail);
    expect(errorText).to.include("Error: all fields are required");
  });

  // has not been updated with new selectors
  it.skip('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
    browser.setValue(fName, 'Joe');
    browser.setValue(lName, 'Blogs');
    browser.setValue(myMessage, 'How much does product x cost?');
    browser.click(submitBtn);

    var successConfirmed = browser.isExisting(replyMsg, 'Success message is not present.');
    expect(successConfirmed).to.be.false;

    var errorText = browser.getText(replyFail);
    expect(errorText).to.include("Error: all fields are required");
  });
});