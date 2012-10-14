
$(function(){
    //язык для moment.js
    moment.lang('ru');
    //формат данных для форм, и выдачи даты-времени
    schedulerApp.datetimeFormat = 'DD.MM.YYYY HH:mm';

    _.templateSettings.interpolate = /\{\{(.*?)\}\}/g;

    var app = new schedulerApp.AppView();
    $(".control-panel__button-clear").on("click", function() {
        schedulerApp.Events.trigger('clear');
    });

    $(".control-panel__button-import").on("click", function() {
        var data = prompt("Вставте сюда данные:");
        schedulerApp.Events.importEvents(data);
    });

    $(".control-panel__button-export").on("click", function() {
        prompt(
            "Скопируйте это и сохрание:",
            schedulerApp.Events.toJSON()
        );
    });

    $(".control-panel__button-add").on("click", function() {
        schedulerApp.Events.addNew();
    });

    $(".control-panel__button-tell-a-joke").on("click", function() {
        alert('Заходит джавист в столовую и говорит "Паблик статик файнал Борщ борщ равно нью Борщ, пожалуйста"');
    });

    if(schedulerApp.Events.length === 0){
        if(confirm("БД совсем пуста, может быть вам загрузить пару тройку дефолтных записей?")){
            var events = [{"name":"Лекция по Javascript","date":1350578400,"theme":"Тема","description":"","speakerName":"azproduction","presentationUrl":"http://","presentation":"","id":"21647d91-17e3-eb14-21e2-e7f2c50e279e"},{"name":"Лекция XSLT","date":1350492000,"theme":"Тема","description":"","speakerName":"azproduction","presentationUrl":"http://","presentation":"","id":"56f0fba9-a2d0-dd00-7673-638d734b61cb"},{"name":"Лекция CSS","date":1350319200,"theme":"Тема","description":"","speakerName":"Veget","presentationUrl":"http://","presentation":"","id":"77cfd872-22e5-ac04-7dd8-f0375bcc7b7a"},{"name":"Лекция про шаблонизаторы","date":1350312000,"theme":"Тема","description":"","speakerName":"Veget","presentationUrl":"http://","presentation":"","id":"f206c3f6-2c9a-3045-f57a-82c94a765be5"},{"name":"Лекция Debuger","date":1350060000,"theme":"Тема","description":"","speakerName":"Mishanga","presentationUrl":"http://","presentation":"","id":"dd189fdf-b325-7d4c-dca2-1afa4b3235a0"},{"name":"Лекция BEM","date":1349541600,"theme":"Тема","description":"","speakerName":"Veget","presentationUrl":"http://","presentation":"","id":"1a56f2db-785d-bae4-67da-d05a4a289737"},{"name":"Факультатив BEM","date":1349452800,"theme":"Тема","description":"","speakerName":"Veget","presentationUrl":"http://","presentation":"","id":"bcedfa39-cd6f-aaa6-343e-89587707df49"},{"name":"Лекция дизайн","date":1349109600,"theme":"Тема","description":"","speakerName":"Mishanga","presentationUrl":"http://","presentation":"","id":"eefa64b1-efd2-fc73-35d6-b2724af3ec11"}];
            schedulerApp.Events.importEvents(events);
        }
    }

});