schedulerApp.EventsList = Backbone.Collection.extend({
    localStorage: new Store('schedulerApp'),

    model: schedulerApp.Event,

    comparator: function(event) {
        return -event.get('date');
    },

    toJSON: function() {
        var data = this.map(function(event) {
            return event.toJSON();
        });
        return JSON.stringify(data);
    }
});

schedulerApp.Events = new schedulerApp.EventsList();


