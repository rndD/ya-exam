_.templateSettings.interpolate = /\{\{(.*?)\}\}/g;

schedulerApp.EventView = Backbone.BemView.extend({
    tagName:  'div',
    className: 'event-container',
    position: 'left',
    template: _.template($('.template__event').html()),
//    events: {
//
//    },

    initialize: function() {

        this.blockName = this.className;

        this.model.on('change', this.render, this);
        this.model.on('destroy', this.remove, this);
        this.model.view = this;
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        this.setMod('position', this.position);
        return this;
    },

    edit: function() {
        this.setMod('edit-mode', 'yes');
    },

    close: function() {

    },

    destroy: function() {
        this.model.destroy();
    }
});
