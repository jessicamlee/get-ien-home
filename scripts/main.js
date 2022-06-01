gsap.set(".character",{x:-360, y:-200});
var anim = gsap.to(".character", {x:800, duration:6, paused:true});

gsap.set(".characterDest", {x:-70, y:-200});
var destination = gsap.to(".characterDest", {x:600, duration:1.5, rotate:405});

var playBtn=document.querySelector("#play");
var pauseBtn=document.querySelector("#pause");
var reverseBtn=document.querySelector("#reverse");
var restartBtn=document.querySelector("#restart");
var slowDownBtn=document.querySelector("#slowDown");
var speedUpBtn=document.querySelector("#speedUp");

playBtn.onclick = function(){ anim.play()};
pauseBtn.onclick = function(){ anim.pause()};
reverseBtn.onclick = function(){ anim.reverse()};
restartBtn.onclick = function(){ anim.restart()};
slowDownBtn.onclick = function(){ anim.play(), anim.timeScale(0.1)};
speedUpBtn.onclick = function(){ anim.play(), anim.timeScale(1.5)};

function celebrate() {
    var P1=document.querySelector("#p1");
    if(anim.x == destination.x) {
        P1.innerHTML="Great accuracy!";
    }
}

var progressDest = destination.progress(); 
var progressAnim = anim.progress(); 