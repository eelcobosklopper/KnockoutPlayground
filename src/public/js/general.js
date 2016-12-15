var ViewModel = function() {
    var self  = this;

    self.greeting = ko.observable("hello!");
    
    self.buttonDisabled = ko.observable(false);

    self.disableButton = function() {
        self.buttonDisabled(true);
        setTimeout(function () {
            self.buttonDisabled(false);
        }, 3000);
    };
};

ko.applyBindings(new ViewModel());
