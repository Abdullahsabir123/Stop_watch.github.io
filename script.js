let milisecond = 0;
let second = 0;
let minute = 0;
let hour = 0;
let timerInterval;

const start = () => {
    document.getElementById("stop").disabled = false;
    timerInterval = setInterval(timer, 10);
}

const stop = () => {
    clearInterval(timerInterval);
    document.getElementById("stop").disabled = true;
}

const reset = () => {
    clearInterval(timerInterval);
    milisecond = 0;
    second = 0;
    minute = 0;
    hour = 0;
    document.getElementById("tm").textContent = "00 : 00 : 00 : 00";
    document.getElementById("stop").disabled = true;
}

const timer = () => { 
    milisecond++;
    if (milisecond == 100) {
        milisecond = 0;
        second++;
    }
    if (second == 60) {
        second = 0;
        minute++;
    }
    if (minute == 60) {
        minute = 0;
        hour++;
    }
    if (hour == 60) {
        hour = 0;
    }
    updateDisplay();
}

const updateDisplay = () => {
    const time = document.getElementById("tm");
    let formattedTime = '';
    
    if (hour < 10) {
        formattedTime += "0" + hour;
    } else {
        formattedTime += hour;
    }

    formattedTime += " : ";

    if (minute < 10) {
        formattedTime += "0" + minute;
    } else {
        formattedTime += minute;
    }

    formattedTime += " : ";

    if (second < 10) {
        formattedTime += "0" + second;
    } else {
        formattedTime += second;
    }

    formattedTime += " : ";

    if (milisecond < 10) {
        formattedTime += "0" + milisecond;
    } else {
        formattedTime += milisecond;
    }

    time.textContent = formattedTime;
}