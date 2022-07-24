// countdown function

const countdown  = () => {
    // set target date in millisecond
    const countDate = new Date('October 21, 2022 00:00:00').getTime();
    // get current time in milliseconds
    const nowDate = new Date().getTime();
    // get difference
    const gapTime = countDate - nowDate;

    // convert times
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // use converted time to get the gaptime in day/hour/min/sec
    const textDay = Math.floor(gapTime / day);
    const textHour = Math.floor((gapTime % day) / hour);
    const textMinute = Math.floor((gapTime % hour) / minute);
    const textSecond = Math.floor((gapTime % minute) / second);

    // place countdown times in their HTML assigned spots
    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;
};


// set timer to run countdown every second 
setInterval(countdown, 1000)