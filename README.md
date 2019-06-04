Frogger(Classic ArcadeGame) Game Project

Frogger Game is a complete browser-based arcade game. But this isn’t just any arcade game! It’s a shnazzy, well-designed, feature-packed game!

Table of Contents
Game Rules
Technical

Game Rules
In this game there is a Player and Enemies (Bugs). The goal of the player is to reach the water, without colliding into any one of the enemies.

The player can move left, right, up and down using keyboard's arrow keys. The enemies move in varying speeds on the paved block portion of the scene. Once a the player collides with an enemy, the player moves back to the start square and loses 50 points. Once the player reaches the water 10 points are added to the score.

Technical
This game is built as an npm project and mainly consists of the following assets:

index.html - contains the game's html structure.
style.css - contains the game's board styling.
app.js - contains all the board actions & logic.
engine.js - provides the game loop functionality.
resources.js - provides utility functions for loading game assets.
Please follow below instructions to run the project in your machine:

1. Download repository to your local disk
2. Open terminal and navigate to the project folder
3. Run npm install command from terminal to install all dependencies
4. Run npm start command to compile project and run it
