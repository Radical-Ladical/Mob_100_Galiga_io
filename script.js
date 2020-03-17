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
    {left:300, top:100},
    {left:500, top:100},
    {left:700, top:100},
    {left:900, top:100},
    {left:1100, top:100},
    {left:300, top:300},
    {left:500, top:300},
    {left:700, top:300},
    {left:900, top:300},
    {left:1100, top:300},
];

let Shigeo= {
    top:700,
    left:710
};

function moveShigeo () {
    document.getElementById("Shigeo").style.left=Shigeo.left +"px";
    document.getElementById("Shigeo").style.top=Shigeo.top +"px";
}

function drawEnemies(){
    document.getElementById("enemy").innerHTML = "";
    for(let enemy = 0; enemy < enemies.length;enemy++) {
        document.getElementById("enemy").innerHTML += 
        `<div class='enemies' style='left:${enemies[enemy].left}px;
        top:${enemies[enemy].top}px;'></div>`;
    }
}


function moveEnemies() {
    for(let enemy = 0; enemy < enemies.length; enemy++) {
        enemies[enemy].top = enemies[enemy].top +0.5;
    }
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

function collisionDetection() {
    for(let enemy = 0; enemy < enemies.length; enemy++) {
        for(let beam = 0; beam < Beams.length; beam++) {
            if( 
            (Beams[beam].top <= enemies[enemy].top + 50) &&
            (Beams[beam].top >= enemies[enemy].top) &&
            (Beams[beam].left >= enemies[enemy].left) &&
            (Beams[beam].left <= enemies[enemy].left + 50))
            {
                enemies.splice(enemy, 1);
                Beams.splice(beam, 1);
            }
            console.log("boom!")
        }
    }
}



function gameLoop() {
    setTimeout(gameLoop,10)
    moveBeams();
    drawBeams();
    moveEnemies();
    drawEnemies();
    collisionDetection();
}
