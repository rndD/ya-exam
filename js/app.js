
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
        var modal = new schedulerApp.ModalView(
            "Скопируйте сюда данные:",
            "",
            function(data) {
                schedulerApp.Events.importEvents(data);
            }
        );

    });

    $(".control-panel__button-export").on("click", function() {
        var modal = new schedulerApp.ModalView(
            "Скопируй это:",
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
            var events = '[{"name":"Механизм работы браузера","date":1350507360,"description":"На всякий случай оставлю прямо тут ссылки из презентации, чтобы далеко не надо было ходить. Если кому-то интересны подробности работы движков рендеринга брауеров — советую всё это дело прочитать.","speakerName":"Роман Комаров","presentationUrl":"http://yadi.sk/d/wo1LfOGatbOM","id":"3efd0317-68c0-ed55-d1c0-4218780e1438"},{"name":"Кеширование на клиенте и сервере","date":1350420960,"description":"Егор Львовский приехал их Киева, чтобы рассказать вам про кеширование. Понравилось? Если пишите комментарий, то напишите отдельно про лектора (подача материала) и отдельно про содержание лекции","speakerName":"Егор Львовский","presentationUrl":"http://yadi.sk/d/EEEp53YstbNo","id":"1d2b061e-b1ae-6430-ccaa-7f99fcc0d993"},{"name":"HTTP-протокол","date":1350161760,"description":"Лекция про HTTP-протокол","speakerName":"Алексей Бережной","presentationUrl":"http://yadi.sk/d/waP8x8maqTKM","id":"83785dca-e572-35e6-1ce7-a880e6bb9524"},{"name":"Развертывание верстки","date":1349988960,"description":"Лекция про Развертывание и прочие моменты","speakerName":"Павел Пушкарев","presentationUrl":"http://yadi.sk/d/N4FYrhS3qTSI","id":"6146a9d9-01ab-0ecc-b2d9-41d15c26ed89"},{"name":"Языки программирования","date":1347987000,"description":"Это был просто высший класс! Лектор полностью оправдывает звание эксперта. Перед лекцией думал, что это будет что-то вроде обзора имеющихся языков программирования, но Алексей так построил свой доклад, что его можно слушать еще не один час наверное. Доказательством этого явилось то, что время отведенное на вопросы заняло больше чем время на лекцию. Под подобным впечатлением я был после лекции","speakerName":"Алексей Воинов","presentationUrl":"http://yadi.sk/d/LRpqvLuIv4UI","id":"d92987d2-4d6e-8907-8a43-5738c855fd66"},{"name":"Тестирование","date":1347979800,"description":"Ну что тут можно сказать, Марине однозначно зачет! Действительно интересно и увлекательно. Интересно было узнать как тестируют в компаниях масштаба Яндекса и какие виды тестирования бывают вообще","speakerName":"Марина Широчкина","presentationUrl":"http://yadi.sk/d/W7lDOetHqTWC","id":"15a49a3c-7716-71e4-4498-cfd4e4a168bc"},{"name":"Редакторы кода","date":1347727260,"description":"Вряд ли целью данной лекции было научить пользоваться каким-то редактором. Просто определили эдакий набор навыков, которыми должен обладать разработчик и дали понять, что время надо экономить. Спасибо!","speakerName":"Вячеслав Олиянчук ","presentationUrl":"https://github.com/yandex-shri/lectures/blob/master/05-editors.md","id":"846e492c-55b2-c2de-78a3-1cd0e65286cf"},{"name":"Командная строка Unix","date":1347717600,"description":"Знаком с лекциями, которые читал  Victor Ashik, в том числе и по Unix. Можно сказать одно - автор большой профи! Согласен с ним, что трудно уложиться в 45 минут с темой о которой можно говорить не один день. Но тем ценнее лекция, что за короткое время лектор смог компактно предоставить информацию по теме... и задал цель к которой нужно стремиться )После общения с таким мастером понимаешь, что ты ничего не знаешь, хотя конечно у меня хватает знаний, чтобы например, установить Linux и полностью настроить веб-сервер (со всеми сопутствующими компонентами) в этой системе.","speakerName":"Виктор Ашик","presentationUrl":"http://yadi.sk/d/3N0d6h9rlRA8","id":"779bc548-31a9-c989-c1c6-74fe5137dbcd"}]';
            schedulerApp.Events.importEvents(events);
        }
    }

});