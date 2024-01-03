// setInterval(function(){
// })
// var count = 0;
// var interval;
// function timer() {
//     count++;
//     console.log(count);
// }
// // setInterval(timer, 1000)   //if we run code after every second than we use this.
// // setTimeout(timer, 1000);   // if we run code before second than we use this.
// interval = setInterval(timer , 1000);
// setTimeout(function(){
//     clearInterval(interval);

    
// }, 10000);

// const timeDisplay = document.querySelector('.stopwatch-time');
// const startButton = document.querySelector('.stopwatch-start');
// const stopButton = document.querySelector('.stopwatch-stop');
// const resetButton = document.querySelector('.stopwatch-reset');

// // Variables to track time and interval
// let time = 0;
// let interval;

// // Function to update the time display
// function updateDisplay() {
//     const formattedTime = formatTime(time);
//     timeDisplay.textContent = formattedTime;
// }

// // Function to format the time as a string
// function formatTime(time) {
//     const hours = Math.floor(time / 3600);
//     const minutes = Math.floor((time % 3600) / 60);
//     const seconds = time % 60;

//     return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
// }

// // Event listeners for the buttons
// startButton.addEventListener('click', () => {
//     if (!interval) {
//         interval = setInterval(() => {
//             time++;
//             updateDisplay();
//         }, 1000);
//     }
// });

// stopButton.addEventListener('click', () => {
//     clearInterval(interval);
//     interval = null;
// });

// resetButton.addEventListener('click', () => {
//     clearInterval(interval);
//     interval = null;
//     time = 0;
//     updateDisplay();
// });

var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;
var hourHeading = document.getElementById('hour');
var minHeading = document.getElementById('min');
var secHeading = document.getElementById('sec');
var msecHeading = document.getElementById('msec');
var interval;
function startTimer(){
    msec++;
    msecHeading.innerHTML = msec;
    if (msec >=100 ){
        sec++;
        secHeading.innerHTML = sec;
        msec=0;
    }
    else if (sec>= 60){
        min++;
        minHeading.innerHTML= min;
        sec=0;
    }
    else if(min>=60){
        hour++;
        hourHeading.innerHTML=hour;
        min=0;
    }
}
function start(){
 interval = setInterval(startTimer, 10);

}
function stop() {
    clearInterval(interval);
    
}

function reset(){
     hour = 0;
     min = 0;
     sec = 0;
     msec = 0;
    hourHeading.innerHTML = hour;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    stop();
}
