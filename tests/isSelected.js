const expect = require('chai').expect;

browser.url('/Dropdown-Checkboxes-RadioButtons/index.html');
browser.setViewportSize({
    width:1200,
    height:800
});
browser.pause(2000);

describe('Test Selected Dropdown Mneus, Checkboxes, & Radio Butons',function(){
    it('Dropdown item Java is selected, thereforw shoudl return true',function(){
        var isSelected = browser.isSelected("option[value='java']");
        expect(isSelected).to.be.true;
    });

    it('Dropdown item maven is not selected, therefore should return false',function(){
        var isSelected = browser.isSelected("option[value='maven']");
        expect(isSelected).to.be.false;
    });

    it('Option2 is not selected, should return false',function(){
        var isSelected = browser.isSelected("input[value='option-2']");
        expect(isSelected).to.be.false;
    });
    
    it('Option3 is selected, should return true', function(){
        var isSelected = browser.isSelected("input[value='option-3']");
        expect(isSelected).to.be.true;
    });
    
    it('Radio button pumpkin is selected, should return true',function(){
        var isSelected = browser.isSelected("input[value='pumpkin']");
        expect(isSelected).to.be.true;
    });
});