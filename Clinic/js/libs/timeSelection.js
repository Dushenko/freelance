var calendar = function(){
    var events = [
        {'Date': new Date(2019, 9, 30), 'Title': ''},
        {'Date': new Date(2019, 9, 15), 'Title': ''},
        {'Date': new Date(2019, 9, 10), 'Title': ''},
        {'Date': new Date(2019, 10, 7), 'Title': ''},
    ];
    var model;
    var settings={
        Color: '#999',                //(string - color) font color of whole calendar.
        LinkColor: '#333',            //(string - color) font color of event titles.
        NavShow: true,                //(bool) show navigation arrows.
        NavVertical: false,           //(bool) show previous and coming months.
        NavLocation: '#foo',          //(string - element) where to display navigation, if not in default position.
        DateTimeShow: true,           //(bool) show current date.
        DateTimeFormat: 'mmm, yyyy',  //(string - dateformat) format previously mentioned date is shown in.
        DatetimeLocation: '',         //(string - element) where to display previously mentioned date, if not in default position.
        EventClick: '',        //(function) a function that should instantiate on the click of any event. parameters passed in via data link attribute.
        EventTargetWholeDay: true,   //(bool) clicking on the whole date will trigger event action, as opposed to just clicking on the title.
        DisabledDays: [0,6],             //(array of numbers) days of the week to be slightly transparent. ie: [1,6] to fade Sunday and Saturday.
        ModelChange: model            //(array of objects) new data object to pass into calendar (serving suggestion: passing through only the currently selected month's events if working with large dataset.
    };

    var init = function() {
        var calendarDay = document.querySelectorAll('.eventday');
        var list = document.querySelector('.time__cells');
            list.innerHTML = '<span class="time__description">Выберите дату для записи в календаре</span>';

        var buttonClickHandler = async function () {
            if (dateFormatted.getHours() > 0) {
                await fetch('', {
                    method:'POST',
                    body: {date: dateFormatted},
                })
            } else {
                list.innerHTML = '<span class="time__description">Выберите время для записи!</span>';
            }
        };
        calendarDay.forEach(function (day) {
            day.addEventListener('click', dayClickHandler);
        });

        button.removeEventListener('click', buttonClickHandler, true);
        button.addEventListener('click', buttonClickHandler, true)
    };

    var calendar = caleandar(document.querySelector('#calendar'), events, settings, init);
    var cldNav = document.querySelector('.cld-nav');
    var button = document.querySelector('#sendDate');
    var timesContainer = document.querySelector('.time__cells');
    var resultDate = document.querySelector('.time__date');
    var resultTime = document.querySelector('.time__time');
    var activeTimes = [];
    var dateFormatted = '';


    var fillTimeSelection = function (timeArray) {
        timesContainer.innerHTML = '';
        var listeners = new WeakMap();
        for (var i = 0; i < timeArray.length; i++) {
            var elem = document.createElement('li');
            listeners.set(elem, timeClickHandler);
            elem.classList.add('time__cell', 'time__cell_active');
            elem.textContent = timeArray[i];
            elem.addEventListener('click', listeners.get(elem));
            timesContainer.appendChild(elem);
        }
    };

    var getDateTime = async function(event) {
        var target = event.currentTarget;
        var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        var selected = document.querySelector('.selectedday');
            selected && selected.classList.remove('selectedday');
        target.classList.add('selectedday');
        var date = target.closest('.cld-main').querySelector('.today').textContent;
        var day = Number(target.textContent);
        var month = date.split(',')[0];
        var year  = Number(date.split(',')[1]);
        var monthNumber = months.indexOf(month);


       dateFormatted = new Date(year, monthNumber, day);

        await getAvailableTime()
            .then(function(response) {
                fillTimeSelection(response);
            });


        return `${day} ${month}`
    };

    // TODO получение доступных дат
    var getAvailableEvents = function () {

    };


    // TODO получение доступного времени
    var getAvailableTime = function () {
        const time = fetch('');

        // return time;
        return Promise.resolve(['8:00', '8:15', '9:30', '9:45', '10:00', '10:30', '11:45', '16:00']);
    };

    var setTime = function ( time ) {
        console.log('dateFormatted', dateFormatted);
        var hour = Number(time.split(':')[0]);
        var minutes = Number(time.split(':')[1]);
        dateFormatted.setHours(hour);
        dateFormatted.setMinutes(minutes);
        resultTime.textContent = time;
    };


    var timeClickHandler = function (event) {
        var target = event.currentTarget;
        activeTimes.forEach(function(timeElement){
            timeElement.classList.remove('time__cell_selected')
        });
        activeTimes = [];
        target.classList.add('time__cell_selected');
        activeTimes.push(target);
        setTime(target.textContent)
    };

    var dayClickHandler = async function (event){
         getDateTime(event)
            .then(function (date) {
                resultDate.textContent = date;
            })
    };

    init();

}();
