/**
 * Модель "событие"
 * дата, время, тема, тезисы, докладчик, презентация
 */
var schedulerApp = schedulerApp || {};

schedulerApp.Event = Backbone.Model.extend({

    defaults: {
        name: 'Лекция',
        date: moment().unix(),
        description: '',
        speakerName: 'Ololosha',
        presentationUrl: 'http://'
    },

    getData: function() {
        var data = this.toJSON();
        var date = moment.unix(data.date);
        data.dateFromNow = date.fromNow();
        data.calendarDatetime = date.format(schedulerApp.datetimeFormat);
        return data;
    }
});

