var rhImg = document.getElementById("rh");
var rhImgs = [
    "img/rh/rh1.png",
    "img/rh/rh2.png",
    "img/rh/rh3.png",
    "img/rh/rh4.png",
    "img/rh/rh5.png",
    "img/rh/rh6.png",
    "img/rh/rh7.png",
    "img/rh/rh8.png",
    "img/rh/rh9.png"
]
var i = 1;
var interval;

function rh(){
    console.log("rose hand animation");
    rhImg.src = rhImgs[i];
    i++;
    if(i==9){
        i = 0;
    }
}

function runAnimation(){
    rh();
    interval = setInterval(rh, 200);
}

function stopAnimation(){
    clearInterval(interval);
}