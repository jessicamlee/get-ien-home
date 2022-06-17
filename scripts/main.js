// Toggle Button
var toggle=0;
const toggleBtn=document.querySelector(".btn");
// Alien Character
const myAlien=document.querySelector(".alien");
var alienPos=myAlien.getBoundingClientRect();
// Alien Character Animation
alien.keyf =[
    {transform: 'translate(-100px,0px)'},
    {transform: 'translate(800px,0px)'},
]
alien.opt = {
    duration: 3000,
    easing:'linear',
    iterations: Infinity,
    direction: 'normal',
};
var animateAlien = alien.animate(alien.keyf,alien.opt);
// Planet Destination
const myPlanet=document.querySelector(".planet");
var planetPos=myPlanet.getBoundingClientRect();
// Title & Instructions
const gTitle = document.querySelector(".g-title");
const instr = document.querySelector(".instructions");
// Onclick Event via Toggle Button
toggleBtn.addEventListener("click", onclick);
// Onclick Function
function onclick(){
    if(toggle>0) {
        animateAlien.play();
        toggle=0;
        toggleBtn.innerHTML="STOP";
        return;
    }
    // When IEN the Alien is not stopped at the right point
    alienPos=myAlien.getBoundingClientRect();
    console.log("alienPost.x " + alienPos.x);
    if (alienPos.x<900 || alienPos.x>930) {
        animateAlien.pause();
        toggle=1;
        toggleBtn.innerHTML="FLY";
        console.log(alienPos.x);
        instr.innerHTML="Try again.";
    }
    // When IEN the Alien is stopped at the right point
    if (alienPos.x>=900 && alienPos.x<=930) {
        animateAlien.pause();
        toggle=0;
        console.log(alienPos.x);
        console.log("Hooray!");
        myPlanet.style.zIndex=-1;
        myAlien.style.zIndex=-1;
        toggleBtn.innerHTML="YAY!";
        gTitle.innerHTML="CONGRATULATIONS!";
        instr.innerHTML="Great job! You helped IEN home.";
    }
};