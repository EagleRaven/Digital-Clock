
// GET ELEMENTS
const timeDiv = document.getElementById("middle");
const hourDiv = document.getElementById('hour');
const spaceDiv = document.getElementById('space');
const minuteDiv = document.getElementById('minute');
const dayDiv = document.getElementById("day");
const dateDiv = document.getElementById("date");
const ampmDiv = document.getElementById("ampm");

function getTime(){
    const now = new Date();

    // TIME
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    
    // DAY
    let day = now.getDay();
    const days_of_week = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];
    let today = days_of_week[day];

    let date = now.getDate();

    dayDiv.textContent = today;
    dateDiv.textContent = date;

    let hourAmended = hour;

    // TIME
    // Adding 0 if below 10
    if(hourAmended < 10){
        hourAmended = '0' + hourAmended;
    }

    // Same as above for minute
    if(minute < 10){
        minute = '0' + minute;
    }

    // Making the hour 12 hour time
    if(hour > 12 ){
        hourAmended = hour - 12;
        ampmDiv.textContent = 'am';
    }
    else{
        ampmDiv.textContent = 'pm';
    }


    // Render to page
    hourDiv.textContent = hourAmended;
    spaceDiv.textContent = ':';

    // Blinking effect for :
    if(second % 2 === 1){
        spaceDiv.style.opacity = 1;
    }
    else{
        spaceDiv.style.opacity = 0;
    }
    
    minuteDiv.textContent = minute;

    console.log(second);
}

setInterval(getTime, 1000);


