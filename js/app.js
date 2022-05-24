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







// const newEnemies = [];
// const newOrcs = new Enemies(50, 50, "red", 15, 25)
//    newEnemies.push(newOrcs)
//    console.log(newEnemies);
const orcs = [];
let v = 0;
// Enemies will appear randomly on the canvas selected area. Will then proceed to move towards Capital.
function newEnemy() {
    if (v < 1){
        v++
        let j = 0 
        for( i = 0; i < 10; i++) {
            setTimeout(() => {  
        let xRandom = Math.floor(Math.random() * game.width);
        let yRandom = Math.floor(Math.random() * game.height);
        let orc = new Enemies(xRandom, yRandom, "red", 15, 25)
        orcs.push(orc);
        orcs[j].render();
        console.log(orcs)
        j++
        }, i * 5000);
     }
     setTimeout(() => {
         j = 0
     }, 10 * 5000);
    }
}

function enemyMovement() {
    orcs[0].x += (castle.x - orcs[0].x) * .1;
    console.log()
    orcs[0].y += (castle.y - orcs[0].y) * 0.1;

}
    // orc.render();


// renderTest();
// This is the main game loop that will run once start is clicked.
function gameLoop() {
    //ctx.clearRect(0, 0, game.width, game.height)
    newEnemy();
    enemyMovement();
    castle.render();

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