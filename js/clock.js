const loginFormClock = document.querySelector("#Login-form");
const clock = document.querySelector("h1#clock");

const HIDDEN_CLASSNAME_CLOCK = "hidden";
const USERNAME_KEY_CLOCK = "username";

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}`;
}


getClock();
setInterval(getClock, 1000);

function onClockSubmit(event) {
    clock.classList.remove(HIDDEN_CLASSNAME_CLOCK);
}

const savedUsernameClock = localStorage.getItem(USERNAME_KEY_CLOCK);

if(savedUsernameClock === null){
    clock.classList.add(HIDDEN_CLASSNAME_CLOCK);
loginFormClock.addEventListener("submit", onClockSubmit);
}else {
clock.classList.remove(HIDDEN_CLASSNAME_CLOCK);
}