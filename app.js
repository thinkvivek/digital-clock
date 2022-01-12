$(document).ready(function() {
    function displayCurrentTime() {

        let currentTime = new Date();

        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();
        let seconds = currentTime.getSeconds();

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        let meridiem = "AM";

        if (hours > 12) {
            hours = hours - 12;
            meridiem = "PM";
        }

        if (hours === 0) {
            hours = 12;
        }

        let clockContainer = document.getElementById('digiclock');
        clockContainer.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
    }

    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);
})