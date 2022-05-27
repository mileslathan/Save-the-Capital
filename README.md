# Save-the-Capital!
Tower defense game to protect the capital from the orcs!

SEI -5/9- ** Project One **

## INSTALLATION
1. Go to [This Repo](https://github.com/mileslathan/Save-the-Capital)
2. Fork and clone the repo
```text
git clone https://github.com/mileslathan/Save-the-Capital.git
```
4. Go to the Save-the-Capital directory
5. and lastly open index.html in browser


## WHAT IS IT?

Save the Capital! Is a rudementary tower defense game with the main purpose of defending your base against hordes of enemies that want to attack and destroy the player's base.

Popular examples include:

![Clash Royale IMG](/img/clash.png)   ![Plants vs Zombies IMG](/img/pvz.jpg)



## HOW TO PLAY

Objective of the game is to prevent the capital from being destroyed by killing the orcs in time!

Players will randomly be given bombs to place on the field to prevent the orcs from taking the capital.

If the capital does not fall within the allotted time, player wins!

## Technologies Used

This project uses HTML5 and CSS along with Canvas technologies for the UI, output and interactions. 

It also uses DOM and Javascript for the logic of the game.

## Approach

The approach I used for this project I broke into three parts in order:

1. Front-End User Experience
  - Construct the basic template in HTML I will use as the main content container within the body of the HTML.
  - Use CSS for essential styling of the contents.
  - Ensure html elements were properly organized and tagged with their own unique id's.

2. Basic gameplay functionality (I like to call primary functionality)
  - These primaries were: 
        - The randomly generated enemies 
        - Their attack movement
        - Bomb/death interactions 
        - And finally record keeping

3. Checks and others (Secondary functionality)
  - Making sure the start, restart and Instruction buttons work
  - Adding win condition logic with user feedback
  - Debugging (as best as I could...)

## Unsolved Problems

Only remaining issues are bugs, QoL changes and slight functionality improvements. Ex: Start and Stop buttons clearing previous functions to allow interval to run at expected speed.

##Code Review

Classes:
```javascript
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
```

`newEnemy();` creates new enemies at random locatons

```javascript
let orcs = [];
let v = 0;
newEnemy() {
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
```
`generateBombs();` `bombPlacement();` `bombBoard();` and `bombDisplay()`

```javascript
function generateBomb() {
    if (castle.alive === false || plyrWon === false){
        return;
    } else {

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
```
`enemyMovement();` `hitDetection();` and `winCondition();`

```javascript

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
 if (timeLeft > 0 && capitalHP === 0) {
    castle.alive = false;
    // playerWon();
} else if (timeLeft === 0 && capitalHP > 0) {
    plyrWon = false;
 }
```
