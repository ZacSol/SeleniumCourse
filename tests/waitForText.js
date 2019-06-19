beforeEach(function(){
	browser.url("/Accordion/index.html");
});

describe('Verify that the correct text appears on the accordion page', function() {
	it('Verify loading complete text is visible after a set duration of time', function() {
		this.timeout(20000);
		elem = $('#hidden-text');
		elem.waitForText(1000);

		while(elem.getText() != 'LOADING COMPLETE.'){
			browser.pause(1000);
		}
		
		expect(elem.getText()).to.equal('LOADING COMPLETE.');
	});
});