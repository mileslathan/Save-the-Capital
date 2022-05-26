
// Assigns variable to grab the game element of canvas.
let game = document.querySelector("#game");
let timeClock = document.querySelector("#time-left");
let capitalHealth = document.querySelector("#capital-hp");
let availBomb = document.querySelector("#bombs");
// this creates a 2 dimensional canvas.
let ctx = game.getContext("2d");

// Assigns timer variables for the Capital HP and the Time Left Timer. Default set to 100.
let capitalHP = 100;
let timeLeft  = 100;

// This fuction updates the timer on the UI and in game to reflect the amount of time left.
function updateTimeLeft() {
    if (timeLeft > 0) {
    timeLeft--;
    timeClock.textContent = `Time Left: ${timeLeft}`
    } else {
        return timeLeft;
    }
}
// *************** TEST CODE *******************
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
let onClickX = 0;
let onClickY = 0;

const bombs = [];
const fieldBombs = [];


let plyrWon = true;

function generateBomb() {
    if (castle.alive === false || plyrWon === false){
        return;
    } else {
    // We want to make it so that every 8 seconds, a new bomb is added to the bombs array.
setInterval(() => {
    if (bombs.length < 13) {
    let bomb = new Weapons(-100, 700, "grey", 15, 15)
    bombs.push(bomb);
}
// console.log(bombs);
}, 8000);
} 
}

function bombPlacement() {
    // bombs[0].render();
    if (bombs.length > 0) {
    fieldBombs.unshift(bombs[0]);
    fieldBombs[0].x = onClickX;
    fieldBombs[0].y = onClickY;
    bombs.shift();
}
    // console.log(bombs)
    // debugger;
}


// Adding an event listner that listens for a mouse click on the canvas to initate a bomb added on canvas.
// game.addEventListener("click", bombPlacement);
game.addEventListener("click", function(event) {
    onClickX = event.offsetX;
    onClickY = event.offsetY;
    bombPlacement();
})

function bombBoard() {
    fieldBombs.forEach((bomb) => {
        bomb.render();
    })
}

function bombDisplay() {
    let bombCounter = 0;
    for (let i = 0; i < bombs.length; i++) {
        bombCounter += 1;
    }
    availBomb.textContent = `Avail. Bombs: ${bombCounter}`
}

// *************** TEST CODE *******************
// const newEnemies = [];
// const newOrcs = new Enemies(50, 50, "red", 15, 25)
//    newEnemies.push(newOrcs)
//    console.log(newEnemies);

const orcs = [];
let v = 0;
// Enemies will appear randomly on the canvas selected area. Will then proceed to move towards Capital.
function newEnemy() {
    if (castle.alive === false || plyrWon === false){
        return;
    } else {
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
        // console.log(orcs)
        // j++
        }, i * 5000);
     }
    //  setTimeout(() => {
    //      j = 0
    //  }, 10 * 5000);
    }}
// }

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
orcs.forEach((orc, indexO) => {
    if (orc.x + orc.width > castle.x &&
    orc.x < castle.x + castle.width &&
    orc.y + orc.height > castle.y &&
    orc.y < castle.y + castle.height) {       
        orcs.splice(indexO, 1);
        console.log(orcs)
        capitalHP = capitalHP - 10;
        let newCapitalHealth = capitalHP;
        capitalHealth.textContent = `Capital Health: ${newCapitalHealth}`;
    }
    fieldBombs.forEach((fbomb, indexF) =>{
        if (orc.x + orc.width > fbomb.x &&
        orc.x < fbomb.x + fbomb.width &&
        orc.y + orc.height > fbomb.y &&
        orc.y < fbomb.y + fbomb.height) {
            orcs.splice(indexO, 1);
            fieldBombs.splice(indexF, 1);
    };
})
})
}

function winCondition() {
// Checking if either conditions are met for the win.
 if (timeLeft > 0 && capitalHP === 0) {
    // logic to check for if the player has died before the time expires which executes the losing condition.
    castle.alive = false;
    // playerWon();
} else if (timeLeft === 0 && capitalHP > 0) {
    // the logic to stop the functions and return a screen that indicates the player has won!
    plyrWon = false;
//     playerLose();
 }

}

function playerWon() {
    ctx.clearRect(0, 0, game.width, game.height)
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "white"
    ctx.textAlign = "center";
    ctx.fillText("You have defeated the orcs this time!", game.width/2, game.height/2);
    ctx.fillText("Press Restart to play again.", game.width/2, game.height/2 + 35);
}

function playerLose() {
    ctx.clearRect(0, 0, game.width, game.height)
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "white"
    ctx.textAlign = "center";
    ctx.fillText("The orcs have taken over the Capital!", game.width/2, game.height/2);
    ctx.fillText("It's all over...", game.width/2, game.height/2 + 35);
    ctx.fillText("Press Restart to play again.", game.width/2, game.height/2 + 70);
}


// This is the main game loop that will run once start is clicked.
function gameLoop() {
    if (castle.alive === false || plyrWon === false){
        return;
    } else {
    ctx.clearRect(0, 0, game.width, game.height)
    updateTimeLeft();
    hitDetection();
    enemyMovement();
    bombBoard();
    bombDisplay();
    winCondition();
    // console.log(bombs);
    // console.log(fieldBombs);
    castle.render();
    }
}

document.querySelector("#start-game").addEventListener("click", function() {
setInterval(gameLoop, 1000);
generateBomb();
newEnemy();
});

setInterval(() => {
 if (castle.alive === false) {
     playerLose();
 } else if (plyrWon === false) {
     playerWon();}
 }, 2000);


window.addEventListener("DOMContentLoaded", function(e){

});