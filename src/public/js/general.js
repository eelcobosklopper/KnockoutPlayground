var ViewModel = function() {
    var self  = this;

    self.greeting = ko.observable("hello!");

    self.buttonDisabled = ko.observable(false);

    self.disableButton = function() {
        $('<span id="loader" class="loader loadervisible"></span>').appendTo('body');

        self.buttonDisabled(true);

        setTimeout(function () {
            $('#loader').remove();
            self.buttonDisabled(false);
        }, 3000);
    };
};

ko.applyBindings(new ViewModel());
