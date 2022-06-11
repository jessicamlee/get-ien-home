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
// console.log(planetPos.x);

const gTitle = document.querySelector(".g-title");
const instr = document.querySelector(".instructions");

toggleBtn.addEventListener("click", onclick);
// width: 760px;
// height: 506px;
function onclick(){
    if(toggle>0) {
        animateAlien.play();
        toggle=0;
        console.log(alienPos.x);
        toggleBtn.innerHTML="STOP";
    }else if (alienPos.x<20 || alienPos.x>22) {
        // problem with this second condition
        animateAlien.pause();
        toggle=1;
        toggleBtn.innerHTML="FLY";
        console.log(alienPos.x);
        console.log(alienPos.x<20 || alienPos.x>22);
        instr.innerHTML="Try again.";
    }else if (alienPos.x>=20 && alienPos.x<=22) {
        animateAlien.pause();
        toggle=0;
        console.log("Hooray!");
        console.log(alienPos.x>=20 && alienPos.x<=22);
        myPlanet.style.zIndex=-1;
        myAlien.style.zIndex=-1;
        toggleBtn.innerHTML="YAY!";
        gTitle.innerHTML="CONGRATULATIONS:";
        instr.innerHTML="Great job! You helped IEN home.";
    }
};