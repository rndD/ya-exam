schedulerApp.AppView = Backbone.BemView.extend({
    el: '.timeline',

    events: {
//        'clearAll': 'clearAll'
    },

    initialize: function() {
        schedulerApp.Events.on('add', this.addOne, this);
        schedulerApp.Events.on('reset', this.addAll, this);
        schedulerApp.Events.fetch();

        this.bind('clearAll', this.clearAll);

    },

    render: function() {

    },

    nextPosition: "left",
    getNextPosition: function() {
      if(this.nextPosition === 'left') {
          this.nextPosition = "right";
      } else {
          this.nextPosition = "left";
      }
    },

    addOne: function(event) {
        var view = new schedulerApp.EventView({ model: event }) ;


        view.position = this.nextPosition;


        this.getNextPosition();
        this.$el.append(view.render().el);
    },

    addAll: function() {
        this.$el.html('');
        schedulerApp.Events.each(this.addOne, this);
    },

    clearAll: function() {
        schedulerApp.Events.reset([], { silent: true } );
        //TODO: убрать этот хак, и сделать вызов дестрой у каждой модели.
        localStorage.clear();
        this.$el.html('');
    }


});