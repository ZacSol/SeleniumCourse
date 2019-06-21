var ContactUs_Page = require('../pageObjects/ContactUs_Page');

beforeEach(function () {
  browser.url('/Contact-Us/contactus.html');
});

describe('Test Contact Us form WebdriverUni', function () {

  function setFirstName(firstName){
    return ContactUs_Page.firstName.setValue(firstName);
  }
  function setLastName(lastName){
    return ContactUs_Page.lastName.setValue(lastName);
  }
  function setEmailAddress(email){
    return ContactUs_Page.emailAddress.setValue(email);
  }
  function setComments(comments){
    return ContactUs_Page.comments.setValue(comments);
  }
  function clickSubmit(){
    return ContactUs_Page.submitButton.click();
  }
  function confirmSuccess(){
    var validateHeader = browser.waitUntil(function(){
      return ContactUs_Page.successMessage.getText() == 'Thank You for your Message!';
    },3000)
    expect(validateHeader,"Success message does not exist.").to.be.true;
  }
  function confirmFail(){
    var validateFail = browser.waitUntil(function(){
      return ContactUs_Page.failMessage.getText();
      // this part would only be used to search for an exact value in the error message. causes test to fail if the email field does not have proper email format due to extra error message "Error: Invalid email address"
      // == 'Error: all fields are required';
    },3000)
    expect(ContactUs_Page.failMessage.getText()).to.include('Error: all fields are required');
  }

    it('Should be able to submit a successful submission via contact us form', function (done) {
      // browser.submitDataContact('Joe','Blogs',detail.email,detail.body);
      // var successConfirmed = browser.isExisting(replyMsg, 'Success message is not present.');
      //       expect(successConfirmed).to.be.true;

      //       var successText = browser.getText(replyMsg);
      //       expect(successText).to.equal('Thank You for your Message!');

      setFirstName('Joe');
      setLastName('Blogs');
      setEmailAddress("email@test.com");
      setComments('This is a message.');
      clickSubmit();
      confirmSuccess();
    });

  it('Should not be able to submit a successful  submission via contact us form as all fields are required', function (done) {
    setFirstName('Joe');
    setLastName('Blogs');
    setEmailAddress("test@test.com");
    clickSubmit();
    confirmFail();
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