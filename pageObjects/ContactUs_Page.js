class ContactUs_Page{
    get firstName(){
        return $("[name='first_name']");
    };
    get lastName(){
        return $("[name='last_name']");
    };
    get comments(){
        return $("textarea");
    };
    get emailAddress(){
        return $("[name='email']");
    };
    get submitButton(){
        return $("[type='submit']");
    };
    get successMessage(){
        return $("#contact_reply h1");
    };
    get failMessage(){
        return $("body");
    };
};

module.exports = new ContactUs_Page();