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
var showObjectsOn = false;

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

function toggleShowHide(){
    console.log("showObjectsOn = " + showObjectsOn);
    if(showObjectsOn == true){
        showObjectsOn = false;
    }
    else if(showObjectsOn == false){
        showObjectsOn = true;
    }
    console.log("showObjectsOn = " + showObjectsOn);
}

function showStar(item){
    var itemToShow = document.querySelector(item);
    itemToShow.style.display = "block";
}

function hideStar(item){
    var itemToShow = document.querySelector(item);
    itemToShow.style.display = "none";
}

function showColor(item, color){
    console.log(item);
    var itemToShow = document.querySelector(item);
    itemToShow.style.backgroundColor = color;
    itemToShow.style.zIndex = 2;
}

function showTextColor(item, color){
    console.log(item);
    var itemToShow = document.querySelector(item);
    itemToShow.style.color = color;
    itemToShow.style.zIndex = 2;
}

function showBlack(item){
    if(showObjectsOn == false){
        var itemToShow = document.querySelector(item);
        itemToShow.style.backgroundColor = "rgb(0,0,0)";
        itemToShow.style.zIndex = 1;
    }
    
}

function showTextBlack(item){
    if(showObjectsOn == false){
        var itemToShow = document.querySelector(item);
        itemToShow.style.color = "rgb(0,0,0)";
        itemToShow.style.zIndex = 1;
    } 
}