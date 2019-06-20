beforeEach(function(){
    browser.url('/Accordion/index.html');
});

describe("Walidate the loading functionality works correctly",function(){
    it("Verify relevant text LOADING COMPLETE appears after a period of time",function(){
        this.timeout(20000);
        browser.waitUntil(function(){
            return browser.getText('#hidden-text') === 'LOADING COMPLETE.';
        },12000,'Expected text to be different');
    });
});