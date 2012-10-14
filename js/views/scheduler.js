schedulerApp.AppView = Backbone.BemView.extend({
    el: '.timeline',

    events: {
        'click .timeline__spine': 'addNew'
    },

    initialize: function() {
        schedulerApp.Events.on('add', this.addOne, this);
        schedulerApp.Events.on('reset', this.addAll, this);
        schedulerApp.Events.fetch();


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

    addNew: function(event) {

    },

    addOne: function(event) {
        var view = new schedulerApp.EventView({ model: event }) ;


        view.position = this.nextPosition;


        this.getNextPosition();
        this.$el.append(view.render().el);
    },

    addAll: function() {

        schedulerApp.Events.each(this.addOne, this);
    }



});