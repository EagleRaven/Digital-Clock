
// GET ELEMENTS
const timeDiv = document.getElementById("middle");
const hourDiv = document.getElementById('hour');
const spaceDiv = document.getElementById('space');
const minuteDiv = document.getElementById('minute');
const dayDiv = document.getElementById("day");
const dateDiv = document.getElementById("date");
const ampmDiv = document.getElementById("ampm")

function getTime(){
    const now = new Date();

    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    
    let hourAmended = hour - 12;
    // TIME
    // Adding 0 to hour and minute to look better


    if(hourAmended < 10){
        hourAmended = '0' + hourAmended;
    }

    if(minute < 10){
        minute = '0' + minute;
    }

    hourDiv.textContent = hourAmended;
    spaceDiv.textContent = ':';

    if(second % 2 === 1){
        spaceDiv.style.opacity = 1
    }
    else{
        spaceDiv.style.opacity = 0;
    }
    
    minuteDiv.textContent = minute;

    // DAY
    let day = now.getDay();
    const days_of_week = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];
    let today = days_of_week[day];

    let date = now.getDate();

    dayDiv.textContent = today
    dateDiv.textContent = date;


    // AM/PM
    if(hour < 12){
        ampmDiv.textContent = 'am';
    }
    else{
        ampmDiv.textContent = 'pm';
    }

    console.log(second)
}

setInterval(getTime, 1000)


