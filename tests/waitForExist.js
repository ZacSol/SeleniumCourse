beforeEach(function(){
    browser.url('/Ajax-Loader/index.html');
});

describe("Validate wherther the click me button is visible.",function(){
    it('Validate whether the clicm me button code is visible within the DOM',function(){
        this.timeout(20000);
        var clickMeBtn = '//p[text()="CLICK ME!"]';
        browser.waitForExist(clickMeBtn,8000,false);
    });

    it("Validate whether the click me button appears once the Ajax loader fully loads",function(){
        this.timeout(20000);
        var clickMeBtn = '//p[text()="CLICK ME!"]';
        browser.waitForVisible(clickMeBtn,8000,false);
    });
});