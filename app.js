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
    // Create time blocks
    // for (let hour = 9; hour <= 23; hour++) {
    //     const timeBlockElement = document.createElement('div');
    //     timeBlockElement.id = `hour-${hour}`;
    //     timeBlockElement.innerText = `${hour}:00`;

    //     // Color code the time block
    //     const currentHour = currentDate.hour();
    //     if (hour < currentHour) {
    //         timeBlockElement.className = 'past';
    //     } else if (hour === currentHour) {
    //         timeBlockElement.className = 'present';
    //     } else {
    //         timeBlockElement.className = 'future';
    //     }

    //     timeBlockElement.onclick = function() {
    //         const event = prompt('Enter an event:');
    //         if (event) {
    //             localStorage.setItem(`event-${hour}`, event);
    //             timeBlockElement.innerText = `${hour}:00 - ${event}`;
    //         }
    //     }

        // Load saved event
        const savedEvent = localStorage.getItem(`event-${hour}`);
        if (savedEvent) {
            timeBlockElement.innerText = `${hour}:00 - ${savedEvent}`;
        }

        timeBlocksElement.appendChild(timeBlockElement);
    }

