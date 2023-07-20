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
    
    function schedulePainter() {
        // get current hour(time) using dayjs
        var hourNow = dayjs().hour();
        console.log("hourNow = ", hourNow);
        // loop over time blocks
        $('.time-block').each(function () {
            // get hour from time block
            var hourBlock = parseInt($(this).attr('id').split('-')[1]);
            console.log("hourBlock = ", hourBlock);
            // check if we've moved past this time
            if (hourBlock < hourNow) {
                $(this).addClass('past');
            } else if (hourBlock === hourNow) {
                $(this).removeClass('past');
                $(this).addClass('present');
            } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }
        });
    }
    schedulePainter();

    }

