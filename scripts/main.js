var toggle=0;
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

const toggleBtn=document.querySelector(".btn");
const myAlien=document.querySelector(".alien");
var alienPos=myAlien.getBoundingClientRect();

const myPlanet=document.querySelector(".planet");
var planetPos=myPlanet.getBoundingClientRect();
console.log(planetPos.x);

const gTitle = document.querySelector(".g-title");
const instr = document.querySelector(".instructions");
const hooray = document.querySelector(".hooray");

toggleBtn.addEventListener("click", onclick);

function onclick(){
    if(toggle>0) {
        animateAlien.play();
        toggle=0;
        toggleBtn.innerHTML="STOP";
        // console.log(alienPos.x);
    }else if (alienPos.x!=planetPos.x) {
        animateAlien.pause();
        toggle=1;
        toggleBtn.innerHTML="FLY";
        console.log(alienPos.x);
        instr.innerHTML="Try again.";
    }else if (alienPos.x>233 && alienPos.x<237) {
        animateAlien.pause();
        toggle=1;
        console.log("Hooray!");
        myPlanet.style.zIndex=-1;
        myAlien.style.zIndex=-1;
        toggleBtn.innerHTML="YAY!";
        gTitle.innerHTML="CONGRATULATIONS:";
        instr.innerHTML="Great job! You helped IEN home.";
        hooray.innerHTML="Hooray!";
    }
    // }else if (alienPos.x>233 && alienPos.x<237) {
    //     animateAlien.pause();
    //     toggle=1;
    //     console.log("Hooray!");
    //     myPlanet.style.zIndex=-1;
    //     myAlien.style.zIndex=-1;
    //     toggleBtn.innerHTML="YAY!";
    //     gTitle.innerHTML="CONGRATULATIONS:";
    //     instr.innerHTML="Great job! You helped IEN home.";
    //     hooray.innerHTML="Hooray!";
    // }
};