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
        schedulerApp.Events.trigger('addNew');
    },

    addOne: function(event) {
        var view = new schedulerApp.EventView({ model: event }) ;


        var position = this.nextPosition;
        view.setMod('position', position);


        this.getNextPosition();
        this.$el.append(view.render().el);
    },

    addAll: function() {

        schedulerApp.Events.each(this.addOne, this);
    }



});