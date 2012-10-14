_.templateSettings.interpolate = /\{\{(.*?)\}\}/g;
_.templateSettings.escape = /\{\{-(.*?)\}\}/g;

schedulerApp.EventView = Backbone.BemView.extend({
    tagName:  'div',
    className: 'event-container',
    position: 'left',
    template: _.template($('.template__event').html()),
    events: {
        'click .event-controls__remove': 'destroy',
        'click .event-controls__edit': 'edit',
        'submit .edit-form': 'endEdit'
    },
    $editForm: {},

    initialize: function() {
        this.blockName = this.className;
        this.model.view = this;

        this.on('edit', this.edit, this);
        this.model.on('change', this.render, this);
        this.model.on('destroy', this.remove, this);
    },

    render: function() {
        this.$el.html(this.template(this.model.getData()));

        this.$editForm = this.$el.find('.edit-form');

        return this;
    },

    edit: function(event) {
        this.setMod('edit', 'yes');
        this.$editForm.find('input').eq(0).focus();
    },

    endEdit: function(event) {
        event.preventDefault();

        var success = true;
        var data = {};
        _.each(
            this.$editForm.serializeArray(),
            function(v) {
                data[v.name] = v.value;
            }
        );

        if(data && data.date) {
            console.log(data.date);
            console.log(schedulerApp.datetimeFormat);

            data.date = moment(data.date, schedulerApp.datetimeFormat);
            if( data.date.isValid()) {
                data.date = data.date.unix();
            } else {
                success = false;
            }

        } else {
            success = false;
        }

        if(success){
            this.model.save(data);
            this.setMod('edit', 'no');
            this.render();
        } else {
            alert('Ошибка валидации формы');
        }

        return false;
    },

    close: function() {

    },

    destroy: function() {
        if(confirm("Вы уверены?")){
            this.model.destroy();
        }
    }


});
