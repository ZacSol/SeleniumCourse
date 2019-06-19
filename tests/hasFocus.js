const expect = require('chai').expect;

describe('Test Checkboxes Page',function(){
    browser.url('/Dropdown-Checkboxes-RadioButtons/index.html');
    browser.windowHandleMaximize();

    it('Should be able to focus on radio button elements', function(done){
        // browser.pause(5000);
        browser.click('#checkboxes label:nth-of-type(1) [type]');
        var radio1 = browser.hasFocus('#checkboxes label:nth-of-type(1) [type]');
        // console.log('\nCheckbox 1 value: '+radio1);
        expect(radio1, "The checkbox 1 should have focus").to.be.true;

        var radio3 = browser.hasFocus('#checkboxes label:nth-child(5) [type]');
        // console.log('\nCheckbox 3 value: '+radio3);
        expect(radio3, "The checkbox 3 should not have focus").to.be.false;
    });
});