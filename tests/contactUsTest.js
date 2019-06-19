beforeEach(function() {
	browser.url('/Contact-Us/contactus.html');
});

describe('Test Contact Us form WebdriverUni', function() {
  // beforeEach(function(){
  //   console.log('Inside the describe block!');
  // });

  it('Should be able to submit a successful submission via contact us form', function(done) {
    browser.setValue("[name='first_name']",'Joe');
    browser.setValue("[name='last_name']",'Blogs');
    browser.setValue("[name='email']",'joe_blogs@mail.com');
    browser.setValue("[name='message']",'How much does product x cost?');
    browser.click('[type="submit"]');

    var successConfirmed = browser.isExisting('#contact_reply h1', 'Success message is not present.');
    expect(successConfirmed).to.be.true;
    
    var successText = browser.getText('#contact_reply h1');
    expect(successText).to.equal('Thank You for your Message!');
    });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
    browser.setValue("[name='first_name']",'Joe');
    browser.setValue("[name='last_name']",'Blogs');
    browser.setValue("[name='email']",'joe_blogs@mail.com');
    browser.click('[type="submit"]');

    var successConfirmed = browser.isExisting('#contact_reply h1', 'Success message is not present.');
    expect(successConfirmed).to.be.false;

    var errorText = browser.getText('body');
    expect(errorText).to.include("Error: all fields are required");
    });

  
  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
    browser.setValue("[name='first_name']",'Joe');
    browser.setValue("[name='email']",'joe_blogs@mail.com');
    browser.click('[type="submit"]');

    var successConfirmed = browser.isExisting('#contact_reply h1', 'Success message is not present.');
    expect(successConfirmed).to.be.false;

    var errorText = browser.getText('body');
    expect(errorText).to.include("Error: all fields are required");
    });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
    browser.setValue("[name='first_name']",'Joe');
    browser.setValue("[name='last_name']",'Blogs');
    browser.setValue("[name='message']",'How much does product x cost?');
    browser.click('[type="submit"]');

    var successConfirmed = browser.isExisting('#contact_reply h1', 'Success message is not present.');
    expect(successConfirmed).to.be.false;

    var errorText = browser.getText('body');
    expect(errorText).to.include("Error: all fields are required");
    });
});