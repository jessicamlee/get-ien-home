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
var myPos=myAlien.getBoundingClientRect();

toggleBtn.addEventListener("click", onclick);

function onclick(){
    if(toggle>0) {
        animateAlien.play();
        toggle=0;
        toggleBtn.innerHTML="FLY";
        console.log(myPos.x);
    }else{
        animateAlien.pause();
        toggle=1;
        toggleBtn.innerHTML="STOP";
        console.log(myPos.x);
    }
};

const myPlanet=document.querySelector(".planet");
var planetPos=myPlanet.getBoundingClientRect();
console.log(planetPos.x);

function celebrate(){
    if(myPos.x==planetPos.x){
        console.log("Hurray!");
    }else{
        null
    }
}