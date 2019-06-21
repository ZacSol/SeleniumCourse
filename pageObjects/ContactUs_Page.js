class ContactUs_Page {
    get firstName() { return $("[name='first_name']"); };
    get lastName() { return $("[name='last_name']"); };
    get comments() { return $("textarea"); };
    get emailAddress() { return $("[name='email']"); };
    get submitButton() { return $("[type='submit']"); };

    setFirstName(firstNameIn) {
        return this.firstName.setValue(firstNameIn);
    };
    setLastName(lastNameIn) {
        return this.lastName.setValue(lastNameIn);
    };
    setEmailAddress(emailIn) {
        return this.emailAddress.setValue(emailIn);
    };
    setComments(commentsIn) {
        return this.comments.setValue(commentsIn);
    };
    clickSubmit() {
        return this.submitButton.click();
    };
    confirmSuccess() {
        var successMessage = "#contact_reply h1";
        var validateHeader = browser.waitUntil(function () {
            return browser.getText(successMessage) == 'Thank You for your Message!';
        }, 3000)
        expect(validateHeader, "Success message does not exist.").to.be.true;
    };
    confirmFail() {
        var failMessage = 'body';
        var validateFail = browser.waitUntil(function () {
            return browser.getText(failMessage);
            // this part would only be used to search for an exact value in the error message. causes test to fail if the email field does not have proper email format due to extra error message "Error: Invalid email address"
            // == 'Error: all fields are required';
        }, 3000)
        expect(browser.getText(failMessage)).to.include('Error: all fields are required');
    };
    submitAllInfo(firstName, lastName, email, comments) {
        this.setFirstName(firstName);
        this.setLastName(lastName);
        this.setEmailAddress(email);
        this.setComments(comments);
        this.clickSubmit();
        this.confirmSuccess();
    };
};

module.exports = new ContactUs_Page();