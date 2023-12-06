console.log("the Message!");

let theButton = document.getElementById("btn");
let theMain = document.querySelector("main")
theButton.addEventListener('click',foo);

const canvas = document.querySelector("urCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);
ctx.font = "30px Arial";
ctx.fillText("hiiiiiiiii", 10, 50);

function foo(){
    console.log("you clicked!");
    let p = document.getElementById('post').valque
    theMain.style.backgroundColor = "blue";
    theButton.textContent = p;

  
    ctx.font = "30px Arial";
    ctx.strokeText(p, 10, 50);
}


// var c = document.getElementById("urCanvas");
// var ctx = c.getContext("2d");
