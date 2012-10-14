
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

    importEvents: function(data) {
        var success = true;
        try {
            var events = JSON.parse(data);
            if(!events){
                success = false;
            }
        } catch(e) {
            if((e.name && e.name === "SyntaxError") || e === "SyntaxError") {
                alert("Error: Не валидные данные");
            } else {
                alert("Error");
            }
            success = false;
        }
        if(success) {
            this.trigger('clear');
            this.add(events);
            this.each(function(model) {
                model.save();
            });
        }
    },

    clear: function(event) {
        _.each(this.toArray(), function(model) {
            model.destroy();
        });

    },

    toJSON: function() {
        var data = this.map(function(event) {
            return event.toJSON();
        });
        return JSON.stringify(data);
    }
});

schedulerApp.Events = new schedulerApp.EventsList();


