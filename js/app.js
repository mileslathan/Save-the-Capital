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
// Actually renders the Capital and Orcs on screen.
function renderTest(randomCordinateX, randomCordinateY) {
    castle = new Capital(350, 370, "white", 100, 30)
    orcs = new Enemies(50, 50, "red", 15, 25)
}



// Enemies will appear randomly on the canvas selected area. Will then proceed to move towards Capital.
function enemyMovement() {
    orcs.x += (castle.x - orcs.x) * 0.1
    orcs.y += (castle.y - orcs.y) * 0.1
    orcs.render();
    }

        let newEnemies = [];
        let newOrcs = new Enemies(50, 50, "red", 15, 25);
        newEnemies.push(newOrcs);
        // console.log(newEnemies);


renderTest();
// This is the main game loop that will run once start is clicked.
function gameLoop() {
    ctx.clearRect(0, 0, game.width, game.height)
    castle.render();
    enemyMovement();
    console.log(orcs)
    // console.log(newEnemies);
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