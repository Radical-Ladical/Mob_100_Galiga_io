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
}
//-------Variables-----\\

let missiles = [];
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


function gameLoop() {
    
}
gameLoop()