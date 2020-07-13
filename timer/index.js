// prgogram to do two things 
// display time 
// show an animated border around the timer
// class Timer (only focued on the timer and not animated border)
// going to use start(), pause(), onDurationChange(), tick()
// create a constructor function(durationInput, startButton, pauseButton)


const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;

const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration){
        console.log('time started');
        duration = totalDuration;
    },
    onTick(timeRemaining){
        circle.setAttribute('stroke-dashoffset', 
        perimeter * timeRemaining / duration - perimeter);
    },
    onComplete(){
        console.log('timer is completed');

    }
});
