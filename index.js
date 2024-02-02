const hourEl = document.getElementById("hour")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")
const amPmEl = document.getElementById("amPm")


function  updateClock(){
let hour = new Date().getHours()
let minutes = new Date().getMinutes()
let seconds = new Date().getSeconds()
let amPm = "AM"


if(hour> 12){
hour = hour -12
amPm ="PM"
}

hour= hour <10 ? "0" + hour: hour;

hourEl.innerHTML= hour
minutesEl.innerHTML=minutes
secondsEl.innerHTML=seconds
amPmEl.innerHTML=amPm

setTimeout(()=>{
    updateClock();


},1000)


}
updateClock();