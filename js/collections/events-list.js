
schedulerApp.EventsList = Backbone.Collection.extend({
    localStorage: new Store('schedulerApp'),

    model: schedulerApp.Event,
    initialize: function() {
        this.on("clear", this.clear);
        this.on("addNew", this.addNew);
    },

    comparator: function(event) {
        return -event.get('date');
    },

    addNew: function(event) {
        var model =  new this.model();
        this.add(model);
        model.view.trigger('edit');

    },

    importEvents: function(newEvents) {
        this.trigger('clear');
        this.add(newEvents);
        this.each(function(model) {
            model.save();
        });

    },

    clear: function(event) {

        console.dir(this.models);
        //TODO bug почему-то не удаляет все
        this.each(function(model) {
            model.destroy();
        });

        console.log(this.models);
    },

    toJSON: function() {
        var data = this.map(function(event) {
            return event.toJSON();
        });
        return JSON.stringify(data);
    }
});

schedulerApp.Events = new schedulerApp.EventsList();


