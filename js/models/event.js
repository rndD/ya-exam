/**
 * Модель "событие"
 * дата, время, тема, тезисы, докладчик, презентация
 */
var schedulerApp = schedulerApp || {};

schedulerApp.Event = Backbone.Model.extend({
    initialize: function() {
//        if( this.get("date") )
//        this.set({
//            date: monent(this.get("date"))
//        },
//        {
//            silent: true
//        });

    },

    defaults: {
        name: 'Лекция',
        date: moment().unix(),
        theme: 'Тема',
        description: '',
        speakerName: 'Ololosha',
        presentationUrl: 'http://'
    }
});

