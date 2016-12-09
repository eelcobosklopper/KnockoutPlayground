$(document).ready(function(){
    console.log('hey there!');

var ViewModel = function() {
    var self  = this;

    self.welcome = ko.observable("Hello!");
    self.isButtonDisabled = ko.observable(false);

    self.disableButton = function() {
        console.log("click!");
        // self.isButtonDisabled(true);
    };
};

ko.applyBindings(new ViewModel());
});
