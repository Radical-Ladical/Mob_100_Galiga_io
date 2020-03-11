//------Character Moveement-----\\

document.onkeydown = function(e) {
    console.log(e.keyCode);
    if(e.keycode === 37){
        console.log("left");
        
    }
    else if (e.keyCode === 39) {
        console.log("right");
    }
    else if(e.keyCode === 32) {
        console.log("fire")
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


let hero = {
    top:700,
    left:550
};
