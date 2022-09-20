const hourSpan = document.getElementById("hour");
console.log(hourSpan);
const minutesSpan = document.getElementById("minutes");
console.log(minutesSpan);
const secondsSpan = document.getElementById("seconds");
console.log(secondsSpan);
const amorpmSpan = document.getElementById("amorpm");
console.log(amorpmSpan);

function changeTime(){
    const date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
   
    hourSpan.textContent = hour;
    minutesSpan.textContent = minutes;
    secondsSpan.textContent = seconds;

    if(hour >=0 || hour <=10){
        amorpm = "AM"
    }
    else{
        amorpmSpan.textContent = amorpm;
    }
}
changeTime();

setInterval(changeTime,1000);
