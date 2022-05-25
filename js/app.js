// Assigns variable to grab the game element of canvas.
let game = document.querySelector("#game");
let timeClock = document.querySelector("#time-left")
let capitalHealth = document.querySelector("#capital-hp")
console.log(game);


// this creates a 2 dimensional canvas.
let ctx = game.getContext("2d");

let capitalHP = 100;
let timeLeft  = 100;

function updateTimeLeft() {
    if (timeLeft > 0) {
    timeLeft--;
    timeClock.textContent = `Time Left: ${timeLeft}`
    } else {
        return timeLeft;
    }
}

// newTimeLeft = timeLeft - 1;
// if (newTimeLeft >= 0) {
//     timeClock.textContent = `Time Left: ${newTimeLeft}`
//  } else (
//     timeClock.textContent = `Time Left: 0`
//     )



// Not sure what this does but was used in our Canvas Crawler.
game.setAttribute("height", getComputedStyle(game)["height"]);
game.setAttribute("width", getComputedStyle(game)["width"]);


// Created the class for the Capital to represent the static Capital on screen.
class Capital {
    constructor(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;
        this.alive = true;
    }

    render() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}
// // Created the class for the orcs to represent the Enemies on screen.
class Enemies {
    constructor(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;
        this.alive = true;
    }

    render() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}
class Weapons {
    constructor(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;
        this.alive = true;
    }

    render() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}
let castle = new Capital(350, 370, "white", 100, 30)
let bomb = new Weapons(400, 200, "grey", 15, 15)
let orc;

const bombs = [];
const fieldBombs = [];
function generateBomb() {
// We want to make it so that every 8 seconds, a new bomb is added to the bombs array.
setInterval(() => {
    if (bombs.length < 13) {
    let bomb = new Weapons(400, 200, "grey", 15, 15)
    bombs.push(bomb);
    } return;
}, 8000);
}
generateBomb();

function bombPlacement() {
    bombs[0].render();
    fieldBombs.push(bombs[0]);
    bombs.shift();
}
// Adding an event listner that listens for a mouse click on the canvas to initate a bomb added on canvas.
game.addEventListener("click", bombPlacement)





// const newEnemies = [];
// const newOrcs = new Enemies(50, 50, "red", 15, 25)
//    newEnemies.push(newOrcs)
//    console.log(newEnemies);

const orcs = [];
let v = 0;
// Enemies will appear randomly on the canvas selected area. Will then proceed to move towards Capital.
function newEnemy() {
    // if (v < 1){
    //     v++
        let i = 0 
        for(i; i < 20; i++) {
            setTimeout(() => {  
                let xRandom = Math.floor(Math.random() * game.width);
                let yRandom = Math.floor(Math.random() * 200);
                orc = new Enemies(xRandom, yRandom, "red", 10, 25)
                orcs.push(orc);
                // orcs[i].render();
        console.log(orcs)
        // j++
        }, i * 5000);
     }
    //  setTimeout(() => {
    //      j = 0
    //  }, 10 * 5000);
    }
// }
newEnemy();

function enemyMovement() {
    orcs.forEach((orc) =>{
    if (orc.x > 350 && orc.x < 450) {
        orc.x += (395 - orc.x) * 0.1
    } else if (orc.x < 350) {
        orc.x += (castle.x - orc.x) * 0.1;
    } else if (orc.x > 450) {
        orc.x += (430 - orc.x) * 0.1;
     }
    orc.y += (castle.y - orc.y) * 0.1;
        orc.render();
})
}

function hitDetection() {
    // Creating hit detection for orcs touching the capital.
orcs.forEach((orc) => {
    if (orc.x + orc.width > castle.x &&
    orc.x < castle.x + castle.width &&
    orc.y + orc.height > castle.y &&
    orc.y < castle.y + castle.height) {       
        
        capitalHP = capitalHP - 10;
        let newCapitalHealth = capitalHP;
        capitalHealth.textContent = `Capital Health: ${newCapitalHealth}`;
    };
})
}



// renderTest();
// This is the main game loop that will run once start is clicked.
function gameLoop() {
    ctx.clearRect(0, 0, game.width, game.height)
    // orcs.forEach((orc) => {
    //     orc.render();
    // })
    updateTimeLeft();
    hitDetection();
    enemyMovement();
    console.log(bombs);
    castle.render();

}


setInterval(gameLoop, 700);





// (function (){
//     castle = new Capital(100, 100, "grey", 100, 20)
//     enemy = new Enemies(200, 100, "red", 10, 10)
//     const runGame = setInterval(gameLoop, 120)
// })

// function gameLoop(){
//     // ctx.clearRect(0, 0, game.width, game.height);

//     // movement.textContent = `X:${donkey.x}\n Y:${donkey.y}`

//     if (castle.alive){
//         castle.render();
//         // let hit = detectHit(donkey, shrek)
//     }

//     enemy.render();
// }






window.addEventListener("DOMContentLoaded", function(e){

});