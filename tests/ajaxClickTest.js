describe("Test that the button is clickable once the ajax loader completes loading", function () {
    // .skip will make sure that that text does not get executed
    it.skip('Attempt to click the button ASAP', function (done) {
        browser.url('/Ajax-Loader/index.html');
        browser.click('#button1555');
    });

    // having .only will make sure that the only test executed will be that one
    it('Attempt to click the button after 7 seconds', function (done) {
        browser.url('/Ajax-Loader/index.html');
        this.timeout(200000);
        browser.pause(7000);
        browser.click('#button1');
        browser.pause(7000);
    });
});