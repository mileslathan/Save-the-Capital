// Assigns variable to grab the game element of canvas.
let game = document.querySelector("#game");
console.log(game);


// this creates a 2 dimensional canvas.
let ctx = game.getContext("2d");

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

let castle = new Capital(350, 370, "white", 100, 30)
let xRandom = Math.floor(Math.random * 800);
let yRandom = Math.floor(Math.random * 400);



let orc1 = new Enemies(xRandom, yRandom, "red", 15, 25)
let orc2 = new Enemies(xRandom, yRandom, "red", 15, 25)


// const newEnemies = [];
// const newOrcs = new Enemies(50, 50, "red", 15, 25)
//    newEnemies.push(newOrcs)
//    console.log(newEnemies);

// Enemies will appear randomly on the canvas selected area. Will then proceed to move towards Capital.
function enemyMovement() {
    let orcs = [];
    orcs.push(orc1);
    orcs.push(orc2);
    console.log(orcs);
orcs.forEach((orc) => { 
    // orc.x += (castle.x - orc.x) * 0.1
    // orc.y += (castle.y - orc.y) * 0.1
    orc.render();
})
};

// renderTest();
// This is the main game loop that will run once start is clicked.
function gameLoop() {
    ctx.clearRect(0, 0, game.width, game.height)
    castle.render();
    enemyMovement();
    console.log(orcs)
}


setInterval(gameLoop, 1000);





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