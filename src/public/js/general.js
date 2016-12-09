var ViewModel = function(first, last) {
    var self  = this;
    self.welcome = ko.observable("hello");
};

ko.applyBindings(new ViewModel());
