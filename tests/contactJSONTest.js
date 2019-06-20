var request = require('sync-request');

browser.addCommand("submitDataContact",function(firstName,lastName,email,comments){
if(firstName){
  browser.setValue("[name='first_name']", firstName);
};
if(lastName){
  browser.setValue("[name='last_name']", lastName);
};
if(email){
  browser.setValue("[name='email']", email);
};
if(comments){
  browser.setValue("[name='message']", comments);
};
browser.click('[type="submit"]');
});

beforeEach(function () {
  browser.url('/Contact-Us/contactus.html');
});

describe('Test Contact Us form WebdriverUni', function () {
  var res = request('GET', 'http://jsonplaceholder.typicode.com/posts/1/comments');

  var contactDetails = JSON.parse(res.getBody().toString('utf8'));

  var fName = "[name='first_name']";
  var lName = "[name='last_name']";
  var mail = "[name='email']";
  var myMessage = "[name='message']";
  var submitBtn = '[type="submit"]';
  var replyMsg = '#contact_reply h1';
  var replyFail = 'body';

  // console.log(contactDetails.length);
  var i = 5;
  if(contactDetails.length>i){
    var newContacts = contactDetails.slice(0,i);
    contactDetails = newContacts;
  }
  contactDetails.forEach(function (detail) {
    it.only('Should be able to submit a successful submission via contact us form', function (done) {
      browser.submitDataContact('Joe','Blogs',detail.email,detail.body);

      var successConfirmed = browser.isExisting(replyMsg, 'Success message is not present.');
      expect(successConfirmed).to.be.true;

      var successText = browser.getText(replyMsg);
      expect(successText).to.equal('Thank You for your Message!');
    });
  })

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
    browser.setValue(fName, 'Joe');
    browser.setValue(lName, 'Blogs');
    browser.setValue(mail, 'joe_blogs@mail.com');
    browser.click(submitBtn);

    var successConfirmed = browser.isExisting(replyMsg, 'Success message is not present.');
    expect(successConfirmed).to.be.false;

    var errorText = browser.getText(replyFail);
    expect(errorText).to.include("Error: all fields are required");
  });


  it('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
    browser.setValue(fName, 'Joe');
    browser.setValue(mail, 'joe_blogs@mail.com');
    browser.click(submitBtn);

    var successConfirmed = browser.isExisting(replyMsg, 'Success message is not present.');
    expect(successConfirmed).to.be.false;

    var errorText = browser.getText(replyFail);
    expect(errorText).to.include("Error: all fields are required");
  });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
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