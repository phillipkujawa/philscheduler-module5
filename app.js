window.onload = function() {
    const currentDayElement = document.getElementById('currentDay');
    const timeBlocksElement = document.getElementById('timeBlocks');
    const currentDate = dayjs();
    currentDayElement.innerText = currentDate.format('MMMM D, YYYY');

    $('.saveBtn').on('click', function () {
        // get nearby values
        var userDesc = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
    
    localStorage.setItem(time, userDesc);
    
    });

    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    
        // Load saved event
        const savedEvent = localStorage.getItem(`event-${hour}`);
        if (savedEvent) {
            timeBlockElement.innerText = `${hour}:00 - ${savedEvent}`;
        }

        timeBlocksElement.appendChild(timeBlockElement);
    }

