var request = require('sync-request');

// browser.addCommand("submitDataContact",function(firstName,lastName,email,comments){
// if(firstName){
//   browser.setValue("[name='first_name']", firstName);
// };
// if(lastName){
//   browser.setValue("[name='last_name']", lastName);
// };
// if(email){
//   browser.setValue("[name='email']", email);
// };
// if(comments){
//   browser.setValue("[name='message']", comments);
// };
// browser.click('[type="submit"]');
// });

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
  var replyMsg = "#contact_reply h1";
  var replyFail = 'body';

  function setFirstName(firstName){
    return browser.setValue(fName,firstName);
  }
  function setLastName(lastName){
    return browser.setValue(lName,lastName);
  }
  function setEmailAddress(email){
    return browser.setValue(mail,email);
  }
  function setComments(comments){
    return browser.setValue(myMessage,comments);
  }
  function clickSubmit(){
    return browser.click(submitBtn);
  }
  function confirmSuccess(){
    var validateHeader = browser.waitUntil(function(){
      return browser.getText(replyMsg) == 'Thank You for your Message!';
    },3000)
    expect(validateHeader,"Success message does not exist.").to.be.true;
  }
  function confirmFail(){
    var validateFail = browser.waitUntil(function(){
      return browser.getText(replyFail) 
      // this part would only be used to search for an exact value in the error message. causes test to fail if the email field does not have proper email format due to extra error message "Error: Invalid email address"
      // == 'Error: all fields are required';
    },3000)
    expect(browser.getText(replyFail)).to.include('Error: all fields are required');
  }

  // console.log(contactDetails.length);
  // i is the number of contacts you wish to grab from the JSON data
  var i = 1;
  if(contactDetails.length>i){
    var newContacts = contactDetails.slice(0,i);
    contactDetails = newContacts;
  }
  contactDetails.forEach(function (detail) {
    it('Should be able to submit a successful submission via contact us form', function (done) {
      // browser.submitDataContact('Joe','Blogs',detail.email,detail.body);
      // var successConfirmed = browser.isExisting(replyMsg, 'Success message is not present.');
      //       expect(successConfirmed).to.be.true;

      //       var successText = browser.getText(replyMsg);
      //       expect(successText).to.equal('Thank You for your Message!');

      setFirstName('Joe');
      setLastName('Blogs');
      setEmailAddress(detail.email);
      setComments(detail.body);

      clickSubmit();
      confirmSuccess();
    });
  })

  it.only('Should not be able to submit a successful  submission via contact us form as all fields are required', function (done) {
    setFirstName('Joe');
    setLastName('Blogs');
    setEmailAddress("test@test.com");
    clickSubmit();
    confirmFail();
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