// const countdownDate = new Date("Mar 03, 2020").getTime();
const countdownDate = new Date("Dec 25, 2021").getTime();

const x = setInterval(() => {
    const now = new Date().getTime();

    let difference = countdownDate - now;

    if (difference <= 0){
        difference = 0;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)); 

    const seconds = Math.floor((difference % (1000 * 60)) / (1000));

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = minutes;
    document.getElementById("secs").innerHTML = seconds;

    if (difference <= 0){
        clearInterval(x);
    }   
}, 1000);
