_.templateSettings.interpolate = /\{\{(.*?)\}\}/g;

schedulerApp.ModalView = Backbone.BemView.extend({
    tagName:  'div',
    className: 'modal',
    template: _.template($('.template__modal').html()),
    container: '.absolute-container',
    events: {
        'click .modal__ok': 'submit'
    },


    initialize: function(msg, text, callback) {
        this.msg = msg;
        this.text = text;
        this.callbackOnSubmit = callback;
        this.render();
    },

    render: function() {
        var html = this.template({ msg: this.msg, text: this.text});
        this.$el = $(html).appendTo(this.container);
        this.$el.fadeIn();
        return this;
    },

    submit: function() {
        if($.isFunction(this.callbackOnSubmit)) {
            this.callbackOnSubmit(this.$el.find('.modal__text').val());
        }
        this.remove();
    }
});
