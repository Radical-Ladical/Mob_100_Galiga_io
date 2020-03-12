//------Character Moveement-----\\

document.onkeydown = function(e) {
    console.log(e.keyCode);
    if(e.keyCode ===65){
       console.log("left");
       Shigeo.left=Shigeo.left-10;
       moveShigeo()
    }
    else if(e.keyCode === 68) {
        console.log("right");
        Shigeo.left=Shigeo.left+10;
        moveShigeo()
    }
    else if( e.keyCode === 87) {
        console.log("up");
        Shigeo.top=Shigeo.top-10;
        moveShigeo()
    }
    else if (e.keyCode === 83) {
        console.log("down");
        Shigeo.top=Shigeo.top+10;
        moveShigeo()
    }
    else if (e.keyCode === 32) {
        console.log("fire")
        Beams.push({
            left:Shigeo.left +45,
            top:Shigeo.top
        })
        drawBeams()
    }
}
//-------Variables-----\\

let Beams = [];
let enemies = [
    {left:200, top:100},
    {left:200, top:100},
    {left:200, top:100},
    {left:200, top:100},
    {left:200, top:100},
    {left:200, top:100},
    {left:200, top:100},
    {left:200, top:100},
    {left:200, top:175},
    {left:200, top:175},
    {left:200, top:175},
    {left:200, top:175},
    {left:200, top:175},
    {left:200, top:175},
    {left:200, top:175},
    {left:200, top:175},
];


let Shigeo= {
    top:1000,
    left:350
};

function moveShigeo () {
    document.getElementById("Shigeo").style.left=Shigeo.left +"px";
    document.getElementById("Shigeo").style.top=Shigeo.top +"px";
}


function drawBeams() {
    document.getElementById("beams").innerHTML = "";
    for(let beam = 0; beam < Beams.length; beam++) {
        document.getElementById("beams").innerHTML += 
        `<div class='beam' style='left:${Beams[beam].left}px;
        top:${Beams[beam].top}px;'></div>`;
    }
}



function moveBeams() {
    for(let beam=0;beam<Beams.length;beam++) {
        Beams[beam].top=Beams[beam].top-5;
    }
}


function gameLoop() {
    setTimeout(gameLoop,10)
    moveBeams();
    drawBeams();
}
gameLoop();