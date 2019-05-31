let score = 0;
// Get the modal
let modal = document.getElementById('myModal');

// Get the button that starts the game again and resets the whole board
let btn = document.getElementById("play-again");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    //Bugs appearing headfirst on the screen with random speeds
    if(this.x >= 505){
      this.x = -60;
      this.speed = 100 + Math.floor((Math.random() * 100) + 1);
    }

    //Collision - Source: https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
    //Reference: Axis-Aligned Bounding Box

    if(this.x < player.x + 60 && this.x + 60 > player.x &&
    this.y < player.y + 40 && this.y + 40 > player.y)
    {
      player.reset();
      score -= 1;
      if(score === 0){
        player.reset();
        score = 0;
        modal.style.display = "block";
        document.getElementById('winning').textContent = `OMG! Your score is ZERO!!. `;
        dismissModal();
      }
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    drawScore();
};

//Counting and displaying the drawScore

function drawScore(){
  ctx.font = "20px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: "+score, 8, 20);
}
// Now write your own player class

var Player = function (x,y){
  this.x = x;
  this.y = y;
  this.sprite = 'images/char-pink-girl.png';

};
// This class requires an update(), render() and
// a handleInput() method.

Player.prototype.update = function(dt){

  // To keep player on canvas all the time
  if(this.x > 400)
  {
    this.x = 400;
  }
  if(this.x < 0){
    this.x = 0;
  }
  if(this.y > 400){
    this.y = 400;
  }
  if(this.y < 0){
    this.y = 0;
    setTimeout(() => {
      this.reset();
      score += 1;
      if(score === 10){
        modal.style.display = "block";
        document.getElementById('winning').textContent = `Your score is ${score}. Watch this space for our next update for introducing new levels and features. Thank You!`;
        dismissModal();
      }
    }, 100);
  }
};

Player.prototype.render = function(){
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

let allEnemies = [new Enemy(0, 60, 50), new Enemy(0, 140, 50), new Enemy(0, 225, 50)];

// Place the player object in a variable called player
let player = new Player(200, 400);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

Player.prototype.handleInput = function(arrowKeyPress){
  if(arrowKeyPress == 'right'){
    this.x += 101;
  }
  if(arrowKeyPress == 'left'){
    this.x -= 101;
  }
  if(arrowKeyPress == 'up'){
    this.y -= 84;
  }
  if(arrowKeyPress == 'down'){
    this.y += 84;
  }

};

// Reseting player's position as soon as hits water or collides with Bugs

Player.prototype.reset = function() {
  this.x = 200;
  this.y = 400;
};

// To dismiss the modal
function dismissModal () {

    //Play again button restarts the game and removes the modal
    btn.onclick = function() {
    modal.style.display = "none";
    player.reset();
    score = 0;
  };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    player.reset();
    score = 0;
  };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            player.reset();
            score = 0;
        }
    };
}
