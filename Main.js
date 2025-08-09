let hours = document.getElementById('hrs');
let mint = document.getElementById('mins');
let secs = document.getElementById('secs');


setInterval(() => {
    let currentTime = new Date();
    hours.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    mint.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    secs.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);
