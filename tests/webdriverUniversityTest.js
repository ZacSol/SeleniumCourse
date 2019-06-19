var expect = require('chai').expect;

describe("Verify whether webdriveruniversity links on homepage work correctly", function () {
	it("Check that the contact us button opens the contact us page", function (done) {
		browser.setViewportSize({
			width: 1200,
			height: 800
		})
		//browser.windowHandleMaximize();
		browser.url('/');

		browser.click("#contact-us");
		var tabIds = browser.getTabIds();
		browser.switchTab(tabIds[1]);
		var title = browser.getTitle();
		expect(title).to.equal('WebDriver | Contact Us');
		//browser.pause(3000);
		browser.close();
	});

	it("Check that the login button opens the login portal page", function (done) {
		browser.url('/');

		browser.click('#login-portal');
		var tabIds = browser.getTabIds();
		browser.switchTab(tabIds[1]);

		var title = browser.getTitle();
		expect(title).to.equal('WebDriver | Login Portal');

		var url = browser.getUrl();
		expect(url).to.include('Login-Portal', 'URL Mismatch');

		browser.close();
	});
});
